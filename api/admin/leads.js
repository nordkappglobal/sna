const { requireAdmin } = require("../../server/auth");
const { adminPatchSchema, normalizePhone, sanitizeSearch, STATUSES, ACTIVITIES } = require("../../server/validation");
const { parseBody, sendJson, errorCode } = require("../../server/http");
const { runSheetSync, runEmailSend } = require("../../server/integrations");

const PAGE_SIZE = 25;

async function countQuery(supabase, apply) {
  let query = supabase.from("leads").select("id", { count: "exact", head: true }).is("deleted_at", null);
  query = apply(query);
  const { count } = await query;
  return count || 0;
}

async function summary(supabase) {
  const now = new Date();
  const start = new Date(now.getFullYear(), now.getMonth(), now.getDate()).toISOString();
  const [today, consulting, followUp, enrolled, syncErrors] = await Promise.all([
    countQuery(supabase, (q) => q.gte("created_at", start)),
    countQuery(supabase, (q) => q.eq("status", "consulting")),
    countQuery(supabase, (q) => q.not("next_follow_up_at", "is", null).lte("next_follow_up_at", now.toISOString())),
    countQuery(supabase, (q) => q.eq("status", "enrolled")),
    countQuery(supabase, (q) => q.or("sheet_sync_status.eq.failed,email_status.eq.failed"))
  ]);
  return { today, consulting, followUp, enrolled, syncErrors };
}

async function getLeads(request, response, context) {
  const url = new URL(request.url, "http://local");
  const view = url.searchParams.get("view");
  const id = url.searchParams.get("id");
  if (view === "events" && id) {
    const { data, error } = await context.supabase.from("lead_events").select("*").eq("lead_id", id).order("created_at", { ascending: false });
    if (error) throw error;
    return sendJson(response, 200, { ok: true, events: data });
  }

  const page = Math.max(1, Number(url.searchParams.get("page") || 1));
  const deleted = url.searchParams.get("deleted") === "true";
  const status = url.searchParams.get("status") || "";
  const activity = url.searchParams.get("activity") || "";
  const search = sanitizeSearch(url.searchParams.get("q"));
  const from = url.searchParams.get("from");
  const to = url.searchParams.get("to");
  const assigned = sanitizeSearch(url.searchParams.get("assigned"));
  let query = context.supabase.from("leads").select("*", { count: "exact" });
  query = deleted ? query.not("deleted_at", "is", null) : query.is("deleted_at", null);
  if (STATUSES.includes(status)) query = query.eq("status", status);
  if (ACTIVITIES.includes(activity)) query = query.contains("activities", [activity]);
  if (assigned) query = query.eq("assigned_to", assigned);
  if (from) query = query.gte("created_at", `${from}T00:00:00.000Z`);
  if (to) query = query.lte("created_at", `${to}T23:59:59.999Z`);
  if (search) query = query.or(`reference.ilike.%${search}%,parent_name.ilike.%${search}%,phone_normalized.ilike.%${search}%,student_name.ilike.%${search}%`);
  const start = (page - 1) * PAGE_SIZE;
  const { data, error, count } = await query.order("created_at", { ascending: false }).range(start, start + PAGE_SIZE - 1);
  if (error) throw error;
  const [{ data: admins }, dashboard] = await Promise.all([
    context.supabase.from("admin_users").select("email,display_name").eq("active", true).order("display_name"),
    summary(context.supabase)
  ]);
  return sendJson(response, 200, { ok: true, leads: data, count: count || 0, page, pageSize: PAGE_SIZE, summary: dashboard, admins: admins || [] });
}

async function patchLead(request, response, context) {
  const body = parseBody(request);
  if (!body.id) return sendJson(response, 400, { ok: false, error: "missing_id" });
  const patch = adminPatchSchema.parse(body.patch || {});
  if (patch.phone_raw) patch.phone_normalized = normalizePhone(patch.phone_raw);
  patch.updated_by = context.user.id;
  const { data: before, error: beforeError } = await context.supabase.from("leads").select("*").eq("id", body.id).single();
  if (beforeError) throw beforeError;
  const { data: lead, error } = await context.supabase.from("leads").update(patch).eq("id", body.id).select("*").single();
  if (error) throw error;
  await context.supabase.from("lead_events").insert({ lead_id: lead.id, event_type: before.status !== lead.status ? "status_changed" : "updated", actor_id: context.user.id, changes: patch });
  const sync = await runSheetSync(context.supabase, lead, "update");
  return sendJson(response, 200, { ok: true, lead, integration: { sheet: sync } });
}

async function deleteLead(request, response, context) {
  const body = parseBody(request);
  if (!body.id) return sendJson(response, 400, { ok: false, error: "missing_id" });
  const { data: lead, error } = await context.supabase.from("leads").update({ deleted_at: new Date().toISOString(), updated_by: context.user.id }).eq("id", body.id).select("*").single();
  if (error) throw error;
  await context.supabase.from("lead_events").insert({ lead_id: lead.id, event_type: "deleted", actor_id: context.user.id });
  const sync = await runSheetSync(context.supabase, lead, "delete");
  return sendJson(response, 200, { ok: true, lead, integration: { sheet: sync } });
}

async function postAction(request, response, context) {
  const body = parseBody(request);
  if (!body.id || !["restore", "retry-sheet", "retry-email"].includes(body.action)) return sendJson(response, 400, { ok: false, error: "invalid_action" });
  let { data: lead, error } = await context.supabase.from("leads").select("*").eq("id", body.id).single();
  if (error) throw error;
  if (body.action === "restore") {
    const result = await context.supabase.from("leads").update({ deleted_at: null, updated_by: context.user.id }).eq("id", body.id).select("*").single();
    if (result.error) throw result.error;
    lead = result.data;
    await context.supabase.from("lead_events").insert({ lead_id: lead.id, event_type: "restored", actor_id: context.user.id });
    const sync = await runSheetSync(context.supabase, lead, "restore");
    return sendJson(response, 200, { ok: true, lead, integration: { sheet: sync } });
  }
  if (body.action === "retry-sheet") {
    const sync = await runSheetSync(context.supabase, lead, "retry");
    return sendJson(response, 200, { ok: sync.ok, integration: { sheet: sync } });
  }
  const email = await runEmailSend(context.supabase, lead, "retry");
  return sendJson(response, 200, { ok: email.ok, integration: { email } });
}

module.exports = async function handler(request, response) {
  try {
    const context = await requireAdmin(request);
    if (request.method === "GET") return await getLeads(request, response, context);
    if (request.method === "PATCH") return await patchLead(request, response, context);
    if (request.method === "DELETE") return await deleteLead(request, response, context);
    if (request.method === "POST") return await postAction(request, response, context);
    response.setHeader("Allow", "GET, PATCH, DELETE, POST");
    return sendJson(response, 405, { ok: false, error: "method_not_allowed" });
  } catch (error) {
    const code = errorCode(error);
    const status = error.statusCode || (code === "validation_failed" ? 400 : 500);
    return sendJson(response, status, { ok: false, error: code });
  }
};
