const { google } = require("googleapis");

const STATUS_LABELS = {
  new: "Mới",
  contacted: "Đã liên hệ",
  consulting: "Đang tư vấn",
  qualified: "Tiềm năng",
  enrolled: "Đã đăng ký",
  not_interested: "Không quan tâm",
  unreachable: "Không liên lạc được"
};

function isGoogleConfigured() {
  return Boolean(process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL && process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY && process.env.GOOGLE_SHEET_ID);
}

function safeCell(value) {
  const text = value == null ? "" : String(value);
  return /^[=+\-@]/.test(text) ? `'${text}` : text;
}

function leadRow(lead) {
  return [
    lead.id,
    lead.reference,
    "SNA",
    lead.created_at,
    lead.parent_name,
    lead.phone_raw,
    lead.student_name,
    lead.grade,
    (lead.activities || []).join(", "),
    (lead.time_slots || []).join(", "),
    lead.locale,
    STATUS_LABELS[lead.status] || lead.status,
    lead.assigned_to,
    lead.next_follow_up_at,
    lead.notes,
    lead.updated_at,
    lead.deleted_at ? "Có" : "Không"
  ].map(safeCell);
}

function sheetsClient() {
  if (!isGoogleConfigured()) throw new Error("google_sheet_not_configured");
  const auth = new google.auth.JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY.replace(/\\n/g, "\n"),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"]
  });
  return google.sheets({ version: "v4", auth });
}

async function syncLeadToSheet(lead) {
  const sheets = sheetsClient();
  const spreadsheetId = process.env.GOOGLE_SHEET_ID;
  const tab = process.env.GOOGLE_SHEET_TAB || "Leads_SNA";
  const ids = await sheets.spreadsheets.values.get({ spreadsheetId, range: `${tab}!A:A` });
  const rows = ids.data.values || [];
  const index = rows.findIndex((row, rowIndex) => rowIndex > 0 && row[0] === lead.id);
  const values = [leadRow(lead)];

  if (index >= 0) {
    const rowNumber = index + 1;
    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: `${tab}!A${rowNumber}:Q${rowNumber}`,
      valueInputOption: "RAW",
      requestBody: { values }
    });
    return { operation: "update", rowNumber };
  }

  const result = await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `${tab}!A:Q`,
    valueInputOption: "RAW",
    insertDataOption: "INSERT_ROWS",
    requestBody: { values }
  });
  return { operation: "append", range: result.data.updates?.updatedRange || null };
}

module.exports = { STATUS_LABELS, isGoogleConfigured, safeCell, leadRow, syncLeadToSheet };
