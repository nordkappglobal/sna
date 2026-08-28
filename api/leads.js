const MAX_BODY_BYTES = 12_000;

module.exports = async function handler(request, response) {
  response.setHeader("Cache-Control", "no-store");

  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ ok: false, error: "method_not_allowed" });
  }

  const contentLength = Number(request.headers["content-length"] || 0);
  if (contentLength > MAX_BODY_BYTES) {
    return response.status(413).json({ ok: false, error: "payload_too_large" });
  }

  const payload = request.body || {};
  const requiredText = ["parentName", "phone", "studentName", "grade"];
  const missingText = requiredText.some((field) => typeof payload[field] !== "string" || !payload[field].trim());
  const invalidCollections = !Array.isArray(payload.activities) || payload.activities.length < 1 || !Array.isArray(payload.timeSlots) || payload.timeSlots.length < 1;
  const invalidPhone = typeof payload.phone !== "string" || !/^[0-9 +.()-]{9,18}$/.test(payload.phone);

  if (missingText || invalidCollections || invalidPhone || payload.consent !== true) {
    return response.status(400).json({ ok: false, error: "validation_failed" });
  }

  // DEMO MODE: this endpoint deliberately discards the payload.
  // Production integration will forward a normalized allow-list to the approved CRM/Sheet.
  return response.status(202).json({
    ok: true,
    demo: true,
    reference: `DEMO-${Date.now().toString(36).toUpperCase()}`
  });
};
