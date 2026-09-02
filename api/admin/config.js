const { sendJson } = require('../../server/http');

// These are public browser credentials (not the server secret). Keeping a
// fallback here prevents the admin login from breaking when Vercel's build
// environment is missing the VITE_ variables.
const DEFAULT_SUPABASE_URL = 'https://ujhrgmznrzucemtoshci.supabase.co';
const DEFAULT_SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_WOHfw88_vtIG1rrxq-uKQw_G_zVl4f5';

module.exports = async function handler(_request, response) {
  const url = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL || DEFAULT_SUPABASE_URL;
  const publishableKey = process.env.VITE_SUPABASE_PUBLISHABLE_KEY
    || process.env.SUPABASE_PUBLISHABLE_KEY
    || DEFAULT_SUPABASE_PUBLISHABLE_KEY;

  if (!url || !publishableKey) {
    return sendJson(response, 503, { ok: false, error: 'supabase_auth_not_configured' });
  }

  return sendJson(response, 200, { ok: true, url, publishableKey });
};
