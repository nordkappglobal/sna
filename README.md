# SNA After School — internal demo

Static bilingual landing-page demo prepared from the SNA After School brief.

The primary transparent SNA lockup and footer mark are sourced from the official SNA Marianapolis website (`snamarianapolis.edu.vn`). The earlier JPEG conversion is not used because it replaced the original alpha channel with a black background.

## Image sources

The hero, parent-insight section, football, basketball, modern dance and all facility photographs now use images downloaded from the official SNA Marianapolis website. Their original URLs and page sources are recorded in `assets/sna-official/SOURCES.md`.

Vovinam, Taekwondo, Karate, festival drumming and đàn tranh still use generated illustrations because matching official SNA photography was not available. Their generation notes remain in `assets/generated/README.md`.

Written approval from SNA is required before public launch, particularly for photographs featuring students.

## Demo behavior

- All schedules, age ranges, staff profiles and contact details are visibly marked as sample content.
- The form validates the full registration flow but the `/api/leads` endpoint discards submitted data.
- Do not use real personal information until the approved CRM/Sheet integration and privacy policy are in place.

## Local preview

Serve the project root with any static web server. For example:

```powershell
python -m http.server 4173
```

Then open `http://localhost:4173`.

## Vercel deployment

1. Create or connect a GitHub repository with this directory as its root.
2. Import that repository into Vercel with Framework Preset set to `Other`.
3. No build command or output directory is required.
4. Verify the demo form at `/api/leads` before attaching a custom domain.
5. Add the approved CRM/Sheet secrets as Vercel environment variables and replace the discard-only code in `api/leads.js`.

## Production checklist

- Obtain SNA's written approval for every official photograph used on the landing page.
- Replace or approve the five remaining generated activity illustrations.
- Confirm logo hierarchy and the legal roles of SNA, NVH and HVE.
- Replace sample schedules, age ranges, instructor profiles, hotline and policies.
- Split the demo switcher into indexable `/vi/` and `/en/` routes with reciprocal `hreflang`.
- Add approved privacy copy, lead retention rules, server-side rate limiting and monitoring.
- Configure analytics without sending personal data.
