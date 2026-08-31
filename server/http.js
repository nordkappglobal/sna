function setSecurityHeaders(response) {
  response.setHeader("Cache-Control", "no-store");
  response.setHeader("Content-Type", "application/json; charset=utf-8");
}

function sendJson(response, status, body) {
  setSecurityHeaders(response);
  return response.status(status).json(body);
}

function parseBody(request) {
  if (!request.body) return {};
  if (typeof request.body === "string") return JSON.parse(request.body);
  return request.body;
}

function bearerToken(request) {
  const header = request.headers.authorization || "";
  return header.startsWith("Bearer ") ? header.slice(7).trim() : "";
}

function errorCode(error) {
  if (error?.name === "ZodError") return "validation_failed";
  if (error?.message === "invalid_phone") return "validation_failed";
  return error?.message || "internal_error";
}

module.exports = { setSecurityHeaders, sendJson, parseBody, bearerToken, errorCode };
