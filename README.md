# LIT Rugby Tenant Mockup

Static Cloudflare Worker mockup for a future LIT Rugby tenant at `antonreport.com/lit`.

## What is included

- Searchable rugby sevens tournament directory with local, national, and global filters.
- Upcoming-event first homepage for LIT 7s London 2026 and the LIT Super 7s Series registration path.
- Past events and proof pages for winners, archives, camp programming, series momentum, galleries, and social proof.
- LIT7s.com event feature pages for Florida International 7s, London 7s, Super 7s Series, and USA camp programming.
- LIT7s-style green highlight redesign using the current public-site `#00FF5C` accent, black/white base, and condensed sports typography.
- Mocked LIT7s information routes for tournament information, schedule, what to pack, VIP tickets, team registration info, competitions, prizes, rules, FAQ, media, company, contact, and partners.
- Team and player/coach profile routes.
- Ticketing and registration flows with external public LIT7s links.
- Mobilis/MiGente-inspired tenant operations route for review states, intake, and future provider handoffs.

## Main routes

- `/lit/`
- `/lit/events`
- `/lit/events/lit7s-london-2026`
- `/lit/register`
- `/lit/tickets`
- `/lit/past-events`
- `/lit/faq`
- `/lit/media`
- `/lit/company`
- `/lit/tournaments`
- `/lit/info`
- `/lit/info/sevens-rules`
- `/lit/schedule`
- `/lit/contact`
- `/lit/partners`
- `/lit/teams`
- `/lit/players`
- `/lit/ops`

## Commands

```bash
npm run check
npx wrangler deploy --dry-run
npm run dev
```

The Worker strips `/lit` before serving static assets, so local Worker routes and the deployed route can share the same SPA.
