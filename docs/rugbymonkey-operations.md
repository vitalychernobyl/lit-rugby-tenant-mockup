# Rugbymonkey Mobilis Operations

Rugbymonkey uses the `rugbymonkey-mobilis` Cloudflare D1 database through the `MOBILIS_DB` binding. Every saved enquiry is scoped with `tenant_id = rugbymonkey`.

## Lead types

- `team_registration`: team managers asking about entry.
- `event_listing`: organizers adding a tournament.
- `event_update`: organizers claiming or correcting an event.
- `sponsorship`: commercial and media partnership enquiries.
- `general`: other event questions.

## Review new leads

```bash
npx wrangler d1 execute rugbymonkey-mobilis --remote \
  --config wrangler.rugbymonkey.jsonc \
  --command "SELECT id, lead_type, event_slug, contact_name, contact_email, organization, created_at FROM leads WHERE tenant_id = 'rugbymonkey' AND status = 'new' ORDER BY created_at DESC LIMIT 100"
```

## Update lead status

Use `contacted`, `qualified`, `closed`, or `spam` so open work remains easy to scan.

```bash
npx wrangler d1 execute rugbymonkey-mobilis --remote \
  --config wrangler.rugbymonkey.jsonc \
  --command "UPDATE leads SET status = 'contacted', updated_at = strftime('%Y-%m-%dT%H:%M:%fZ', 'now') WHERE id = '<lead-id>' AND tenant_id = 'rugbymonkey'"
```

The complete submitted form is stored in `payload_json`. Treat exports as customer data and keep them out of the repository.
