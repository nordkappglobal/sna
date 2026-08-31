const { isGoogleConfigured, syncLeadToSheet } = require("./google-sheet");
const { isEmailConfigured, sendLeadEmail } = require("./email");

async function createJob(supabase, leadId, channel, action) {
  const { data, error } = await supabase.from("integration_jobs").insert({
    lead_id: leadId,
    channel,
    action,
    status: "pending",
    attempts: 0
  }).select("id").single();
  if (error) throw error;
  return data.id;
}

async function finishJob(supabase, jobId, status, error = null) {
  await supabase.from("integration_jobs").update({
    status,
    attempts: 1,
    last_error: error ? String(error).slice(0, 1000) : null
  }).eq("id", jobId);
}

async function runSheetSync(supabase, lead, action = "update") {
  const jobId = await createJob(supabase, lead.id, "google_sheet", action);
  if (!isGoogleConfigured()) {
    await finishJob(supabase, jobId, "failed", "google_sheet_not_configured");
    await supabase.from("leads").update({ sheet_sync_status: "skipped", sheet_sync_error: "google_sheet_not_configured" }).eq("id", lead.id);
    return { ok: false, skipped: true };
  }
  try {
    const result = await syncLeadToSheet(lead);
    await finishJob(supabase, jobId, "success");
    await supabase.from("leads").update({ sheet_sync_status: "success", sheet_synced_at: new Date().toISOString(), sheet_sync_error: null }).eq("id", lead.id);
    return { ok: true, result };
  } catch (error) {
    await finishJob(supabase, jobId, "failed", error.message);
    await supabase.from("leads").update({ sheet_sync_status: "failed", sheet_sync_error: String(error.message).slice(0, 1000) }).eq("id", lead.id);
    return { ok: false, error: error.message };
  }
}

async function runEmailSend(supabase, lead, action = "create") {
  const jobId = await createJob(supabase, lead.id, "email", action);
  if (!isEmailConfigured()) {
    await finishJob(supabase, jobId, "failed", "email_not_configured");
    await supabase.from("leads").update({ email_status: "skipped", email_error: "email_not_configured" }).eq("id", lead.id);
    return { ok: false, skipped: true };
  }
  try {
    const result = await sendLeadEmail(lead);
    await finishJob(supabase, jobId, "success");
    await supabase.from("leads").update({ email_status: "success", email_sent_at: new Date().toISOString(), email_error: null }).eq("id", lead.id);
    return { ok: true, result };
  } catch (error) {
    await finishJob(supabase, jobId, "failed", error.message);
    await supabase.from("leads").update({ email_status: "failed", email_error: String(error.message).slice(0, 1000) }).eq("id", lead.id);
    return { ok: false, error: error.message };
  }
}

module.exports = { createJob, finishJob, runSheetSync, runEmailSend };
