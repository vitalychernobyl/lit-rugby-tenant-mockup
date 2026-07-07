# LIT Rugby Tenant Mockup

Static Cloudflare Worker mockup for a future LIT Rugby tenant at `antonreport.com/lit`.

## What is included

- Searchable rugby sevens tournament directory with local, national, and global filters.
- LIT7s.com event feature pages for Florida International 7s, London 7s, Super 7s Series, and USA camp programming.
- Team and player/coach profile routes.
- Ticketing and registration flows with external public LIT7s links.
- Mobilis/MiGente-inspired tenant operations route for review states, intake, and future provider handoffs.

## Commands

```bash
npm run check
npx wrangler deploy --dry-run
npm run dev
```

The Worker strips `/lit` before serving static assets, so local Worker routes and the deployed route can share the same SPA.
