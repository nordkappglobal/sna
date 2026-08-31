# SNA Lead Admin — Implementation Handoff

## Architecture

The landing form submits to `POST /api/leads`. Supabase is the source of truth. A private Google Sheet mirrors operational data, and Resend sends notifications whose subject starts with `[SNA][LEAD MỚI]`. The private dashboard lives at `/admin/` and uses Supabase Magic Link authentication.

## Security invariants

- The browser receives only `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY`.
- `SUPABASE_SECRET_KEY`, Google credentials and the Resend key are server-only Vercel variables.
- The database tables have RLS enabled and no `anon` or `authenticated` table grants. All lead access passes through authenticated server functions.
- The server ignores client-provided source and timestamps and always sets source `SNA` and campaign `sna_after_school_2026`.
- Lead PII is never sent to analytics or application logs.

## Delivery checklist

1. Run `supabase/migrations/202608310001_sna_leads.sql` in the target Supabase project.
2. Create the first Supabase Auth user, then insert that user's UUID and email into `admin_users`.
3. Create a restricted Google Sheet named `SNA Lead Management`, tab `Leads_SNA`, and share it only with approved staff plus the service-account email.
4. Add the header row documented in `docs/SETUP.md`.
5. Verify the sending domain in Resend and create an API key.
6. Configure all values from `.env.example` in Vercel Preview and Production.
7. Create a Gmail filter matching `[SNA][LEAD MỚI]` and apply the label `SNA - Lead mới`.
8. Deploy Preview, submit only demo data, verify Supabase/Sheet/email/admin behavior, then deploy Production.

## Functional acceptance

- Valid submissions create one lead and return a human-readable SNA reference.
- Duplicate submissions within ten minutes return the existing reference.
- Sheet or email failure never loses the Supabase lead and is visible/retryable in admin.
- Admin supports search, filtering, paging, editing, status processing, soft delete, restore, event history and integration retry.
- Mobile admin renders lead cards instead of a horizontally scrolling data table.
