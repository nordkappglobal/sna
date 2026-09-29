const DEFAULT_RECIPIENT = 'vuong.ngvu@gmail.com';
const SENDER_NAME = 'SNA CCA';

/**
 * Receives a server-to-server request from the SNA landing page and sends the
 * lead notification with the Google account that owns this Apps Script.
 */
function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(10000);
    const payload = JSON.parse((e && e.postData && e.postData.contents) || '{}');
    const properties = PropertiesService.getScriptProperties();
    const expectedSecret = properties.getProperty('WEBHOOK_SECRET');

    if (!expectedSecret || !payload.secret || payload.secret !== expectedSecret) {
      return jsonResponse_({ ok: false, error: 'unauthorized' });
    }
    if (!payload.leadId || !payload.subject || !payload.text) {
      return jsonResponse_({ ok: false, error: 'invalid_payload' });
    }

    const sentKey = `SENT_${String(payload.leadId).replace(/[^a-zA-Z0-9_-]/g, '')}`;
    const sentAt = properties.getProperty(sentKey);
    if (sentAt) return jsonResponse_({ ok: true, duplicate: true, sentAt: sentAt });

    const recipients = normalizeRecipients_(payload.to);
    if (!recipients.length) recipients.push(DEFAULT_RECIPIENT);
    if (MailApp.getRemainingDailyQuota() < recipients.length) {
      return jsonResponse_({ ok: false, error: 'daily_email_quota_exceeded' });
    }

    MailApp.sendEmail({
      to: recipients.join(','),
      subject: String(payload.subject),
      body: String(payload.text),
      htmlBody: String(payload.html || payload.text),
      name: SENDER_NAME
    });

    const timestamp = new Date().toISOString();
    properties.setProperty(sentKey, timestamp);
    return jsonResponse_({ ok: true, sentAt: timestamp });
  } catch (error) {
    return jsonResponse_({ ok: false, error: String(error && error.message || error) });
  } finally {
    try { lock.releaseLock(); } catch (_error) {}
  }
}

function normalizeRecipients_(value) {
  const raw = Array.isArray(value) ? value : String(value || '').split(',');
  return Array.from(new Set(raw
    .map(function(item) { return String(item).trim().toLowerCase(); })
    .filter(function(item) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(item); })));
}

function jsonResponse_(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

/** Run once from the editor to authorize MailApp and confirm quota. */
function testConfiguration() {
  const secret = PropertiesService.getScriptProperties().getProperty('WEBHOOK_SECRET');
  if (!secret) throw new Error('Missing WEBHOOK_SECRET in Script Properties');
  Logger.log(JSON.stringify({
    ok: true,
    recipient: DEFAULT_RECIPIENT,
    remainingDailyQuota: MailApp.getRemainingDailyQuota()
  }));
}
