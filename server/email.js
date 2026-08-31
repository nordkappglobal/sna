const { Resend } = require("resend");

function isEmailConfigured() {
  return Boolean(process.env.RESEND_API_KEY && process.env.LEAD_EMAIL_FROM && process.env.LEAD_NOTIFICATION_TO);
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>'"]/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;"
  })[char]);
}

function emailContent(lead) {
  const adminBase = (process.env.ADMIN_BASE_URL || "").replace(/\/$/, "");
  const link = adminBase ? `${adminBase}/?lead=${encodeURIComponent(lead.id)}` : "";
  const rows = [
    ["Mã lead", lead.reference],
    ["Nguồn", "SNA"],
    ["Thời gian", lead.created_at],
    ["Phụ huynh", lead.parent_name],
    ["Điện thoại", lead.phone_raw],
    ["Học sinh", lead.student_name],
    ["Lớp", lead.grade],
    ["Bộ môn", (lead.activities || []).join(", ")],
    ["Khung giờ", (lead.time_slots || []).join(", ")]
  ];
  const htmlRows = rows.map(([label, value]) => `<tr><th style="padding:8px 12px;text-align:left;background:#f7f3f4">${escapeHtml(label)}</th><td style="padding:8px 12px">${escapeHtml(value)}</td></tr>`).join("");
  const html = `<div style="font-family:Arial,sans-serif;color:#17213a"><h2 style="color:#8f0028">Lead mới từ SNA</h2><table style="border-collapse:collapse;width:100%;max-width:680px" border="1" bordercolor="#e5dadd">${htmlRows}</table>${link ? `<p><a href="${escapeHtml(link)}" style="display:inline-block;padding:11px 18px;background:#8f0028;color:white;text-decoration:none;border-radius:8px">Mở trong trang quản trị</a></p>` : ""}</div>`;
  const text = rows.map(([label, value]) => `${label}: ${value ?? ""}`).join("\n") + (link ? `\n\nMở lead: ${link}` : "");
  return { html, text };
}

async function sendLeadEmail(lead) {
  if (!isEmailConfigured()) throw new Error("email_not_configured");
  const resend = new Resend(process.env.RESEND_API_KEY);
  const to = process.env.LEAD_NOTIFICATION_TO.split(",").map((item) => item.trim()).filter(Boolean);
  const { html, text } = emailContent(lead);
  const subject = `[SNA][LEAD MỚI] ${lead.reference} – ${lead.parent_name} – ${lead.phone_raw}`;
  const { data, error } = await resend.emails.send({
    from: process.env.LEAD_EMAIL_FROM,
    to,
    subject,
    html,
    text
  }, { headers: { "Idempotency-Key": `sna-lead-${lead.id}` } });
  if (error) throw new Error(error.message || "email_send_failed");
  return data;
}

module.exports = { isEmailConfigured, escapeHtml, emailContent, sendLeadEmail };
