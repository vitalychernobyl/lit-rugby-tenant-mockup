# MiGente Rugby Global Directory Mockup

Static Cloudflare Worker mockup for a future global rugby community directory at `antonreport.com/lit`.

## What is included

- Global rugby tournament index covering rugby 7s and 15s seed profiles across international, continental, pro club, national, youth, women, inclusive, and community rugby.
- MiGente-like community structure: tournaments, teams, players, organizers, media proof, source labels, FAQ, and submissions are connected instead of presented as a one-off event page.
- Featured upcoming and active events for LIT 7s London, HSBC SVNS, Nations Championship, Rugby World Cup, and USA Club Rugby pathways.
- Search and filters for rugby code, scope, level, division, country, source, event, team, and organizer context.
- Team registration, ticketing, and official-source handoff pages. The mockup opens public external links where available and keeps forms local-only.
- Tournament submission flow for missing events, corrections, official source URLs, divisions, media, and organizer review.
- Matte rugby palette using restrained green highlights, warm paper panels, black/charcoal base, and no grid-line backgrounds.

## Main routes

- `/lit/`
- `/lit/tournaments`
- `/lit/tournaments/hsbc-svns-world-series`
- `/lit/sevens`
- `/lit/fifteens`
- `/lit/nations`
- `/lit/clubs`
- `/lit/community`
- `/lit/events`
- `/lit/events/lit7s-london-2026`
- `/lit/register`
- `/lit/tickets`
- `/lit/submit`
- `/lit/past-events`
- `/lit/faq`
- `/lit/media`
- `/lit/company`
- `/lit/contact`
- `/lit/teams`
- `/lit/players`
- `/lit/ops`

## Commands

```bash
npm run check
npm run dev
```

The Worker strips `/lit` before serving static assets, so local Worker routes and the deployed route can share the same SPA.

## Rugbymonkey tenant

Rugbymonkey runs as a separate Mobilis tenant on `rugbymonkey.com`. Its Worker, event assets, D1 migration, lead capture, and operations notes live under `rugbymonkey/` and [`docs/rugbymonkey-operations.md`](docs/rugbymonkey-operations.md).

```bash
npm run dev:rugbymonkey
npx wrangler d1 migrations apply rugbymonkey-mobilis --remote --config wrangler.rugbymonkey.jsonc
npx wrangler deploy --config wrangler.rugbymonkey.jsonc
```
