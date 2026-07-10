CREATE TABLE IF NOT EXISTS leads (
  id TEXT PRIMARY KEY,
  tenant_id TEXT NOT NULL,
  lead_type TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'new',
  event_slug TEXT,
  contact_name TEXT NOT NULL,
  contact_email TEXT NOT NULL,
  organization TEXT,
  payload_json TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')),
  updated_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now'))
);

CREATE INDEX IF NOT EXISTS leads_tenant_status_created_idx
  ON leads (tenant_id, status, created_at DESC);

CREATE INDEX IF NOT EXISTS leads_event_created_idx
  ON leads (event_slug, created_at DESC);
