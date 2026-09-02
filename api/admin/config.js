const { sendJson } = require('../../server/http');

module.exports = async function handler(_request, response) {
  const url = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL || '';
  const publishableKey = process.env.VITE_SUPABASE_PUBLISHABLE_KEY
    || process.env.SUPABASE_PUBLISHABLE_KEY
    || '';

  if (!url || !publishableKey) {
    return sendJson(response, 503, { ok: false, error: 'supabase_auth_not_configured' });
  }

  return sendJson(response, 200, { ok: true, url, publishableKey });
};
