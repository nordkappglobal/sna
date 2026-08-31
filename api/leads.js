const { createServerClient } = require("../server/supabase");
const { normalizeLeadInput, createReference } = require("../server/validation");
const { parseBody, sendJson, errorCode } = require("../server/http");
const { runSheetSync, runEmailSend } = require("../server/integrations");

const MAX_BODY_BYTES = 12_000;

module.exports = async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return sendJson(response, 405, { ok: false, error: "method_not_allowed" });
  }

  const contentLength = Number(request.headers["content-length"] || 0);
  if (contentLength > MAX_BODY_BYTES) return sendJson(response, 413, { ok: false, error: "payload_too_large" });
  if (!String(request.headers["content-type"] || "").toLowerCase().includes("application/json")) {
    return sendJson(response, 415, { ok: false, error: "unsupported_media_type" });
  }

  try {
    const input = normalizeLeadInput(parseBody(request));
    const supabase = createServerClient();
    const tenMinutesAgo = new Date(Date.now() - 10 * 60 * 1000).toISOString();
    const { data: duplicate, error: duplicateError } = await supabase
      .from("leads")
      .select("id,reference")
      .eq("phone_normalized", input.phone_normalized)
      .eq("student_name", input.student_name)
      .eq("activities", input.activities)
      .gte("created_at", tenMinutesAgo)
      .is("deleted_at", null)
      .order("created_at", { ascending: false })
      .limit(1)
      .maybeSingle();
    if (duplicateError) throw duplicateError;
    if (duplicate) return sendJson(response, 200, { ok: true, duplicate: true, reference: duplicate.reference });

    let lead;
    for (let attempt = 0; attempt < 3 && !lead; attempt += 1) {
      const record = {
        ...input,
        reference: createReference(),
        source: "SNA",
        campaign: "sna_after_school_2026",
        consent_at: new Date().toISOString(),
        sheet_sync_status: "pending",
        email_status: "pending"
      };
      const { data, error } = await supabase.from("leads").insert(record).select("*").single();
      if (error?.code === "23505") continue;
      if (error) throw error;
      lead = data;
    }
    if (!lead) throw new Error("reference_generation_failed");

    await supabase.from("lead_events").insert({ lead_id: lead.id, event_type: "created", changes: { source: "SNA" } });
    await Promise.allSettled([
      runSheetSync(supabase, lead, "create"),
      runEmailSend(supabase, lead, "create")
    ]);

    return sendJson(response, 201, { ok: true, reference: lead.reference });
  } catch (error) {
    const code = errorCode(error);
    const status = error.statusCode || (code === "validation_failed" ? 400 : 500);
    return sendJson(response, status, { ok: false, error: code });
  }
};
