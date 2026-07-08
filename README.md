# LIT Rugby Tenant Mockup

Static Cloudflare Worker mockup for a future LIT Rugby tenant at `antonreport.com/lit`.

## What is included

- Searchable rugby sevens tournament directory with local, national, and global filters.
- LIT7s.com event feature pages for Florida International 7s, London 7s, Super 7s Series, and USA camp programming.
- LIT7s-style green highlight redesign using the current public-site `#00FF5C` accent, black/white base, and condensed sports typography.
- Mocked LIT7s information routes for tournament information, schedule, what to pack, VIP tickets, team registration info, competitions, prizes, rules, media, contact, and partners.
- Team and player/coach profile routes.
- Ticketing and registration flows with external public LIT7s links.
- Mobilis/MiGente-inspired tenant operations route for review states, intake, and future provider handoffs.

## Main routes

- `/lit/`
- `/lit/tournaments`
- `/lit/events`
- `/lit/events/lit7s-london-2026`
- `/lit/info`
- `/lit/info/sevens-rules`
- `/lit/schedule`
- `/lit/media`
- `/lit/contact`
- `/lit/partners`
- `/lit/tickets`
- `/lit/register`

## Commands

```bash
npm run check
npx wrangler deploy --dry-run
npm run dev
```

The Worker strips `/lit` before serving static assets, so local Worker routes and the deployed route can share the same SPA.
