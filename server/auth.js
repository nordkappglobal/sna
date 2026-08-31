const { createAuthClient, createServerClient } = require("./supabase");
const { bearerToken } = require("./http");

async function requireAdmin(request) {
  const token = bearerToken(request);
  if (!token) throw Object.assign(new Error("unauthorized"), { statusCode: 401 });

  const authClient = createAuthClient();
  const { data: authData, error: authError } = await authClient.auth.getUser(token);
  if (authError || !authData.user) throw Object.assign(new Error("unauthorized"), { statusCode: 401 });

  const supabase = createServerClient();
  const { data: admin, error: adminError } = await supabase
    .from("admin_users")
    .select("user_id,email,display_name,active")
    .eq("user_id", authData.user.id)
    .eq("active", true)
    .maybeSingle();

  if (adminError || !admin) throw Object.assign(new Error("forbidden"), { statusCode: 403 });
  return { user: authData.user, admin, supabase };
}

module.exports = { requireAdmin };
