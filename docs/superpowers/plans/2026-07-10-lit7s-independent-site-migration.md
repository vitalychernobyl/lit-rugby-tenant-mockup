# LIT7s Independent Site Migration Plan

Date: 2026-07-10

## Outcome

Move the rebuilt site from `rugbymonkey.com/lit/` to an independent,
LIT7s-owned repository and Cloudflare deployment at `www.lit7s.com`, while
preserving the existing WordPress URL authority and consolidating the Super
Sevens content without losing its domain signals.

Target recurring infrastructure cost: $0/month, excluding domain registration,
ticketing, email, and any optional third-party form service.

## Decisions

1. Keep `https://www.lit7s.com/` as the canonical host. The current apex already
   redirects to `www`, and the WordPress sitemap uses `www`. Keep
   `https://lit7s.com/*` as a one-hop permanent redirect to the same `www` path.
2. Create an independent repository owned by LIT7s, for example
   `lit7s/lit7s.com`. Do not place this site in the Mobilis monorepo or the
   RugbyMonkey tenant repository.
3. Deploy with Cloudflare Workers Static Assets and Git-connected builds. Serve
   prerendered HTML directly; do not invoke Worker code for ordinary pages.
4. Do not add Supabase in phase one. Keep Ticketpass, EventConnect, Google Forms,
   and email links where they already support operational workflows.
5. Preserve existing LIT7s page and post paths wherever possible instead of
   moving them under new `/page/` or `/article/` prefixes.
6. Keep all redirects indefinitely. Never blanket-redirect unrelated URLs to the
   home page.
7. Complete a full WordPress export, automated import, and reconciliation before
   DNS cutover. The rebuilt site must not depend on manually copied page content
   as its only migration record.

## Verified Migration Surface

### LIT7s WordPress

- 39 page URLs
- 3 post URLs
- 228 attachment-page URLs
- 1 Form Maker URL
- 2 category URLs
- 2 tag URLs
- Total sitemap surface: 275 URLs
- Direct `/wp-content/uploads/...` media URLs are a separate inventory and must
  also be preserved or redirected.

Highest-risk paths include:

- `/tournament-information/`
- `/schedule/`
- `/team-registration/`
- `/enter-team/`
- `/vip-tickets/`
- `/sevens-competitions/`
- `/prizes-and-awards/`
- `/sevens-rules/`
- `/lit7s-media/`
- `/lit-7s-london7s/`
- `/lit7s-2024/`
- `/usa/`
- `/the-img-experience-lit-rugby-sevens-camp-usa/`
- `/the-olympic-experience-lit-rugby-sevens-camp-usa-2026/`
- `/litfloridainternational7s/`
- `/lit-florida-international-7s-terms-conditions/`
- `/contact-us/`
- `/sponsor-or-partner-with-lit7s/`
- `/jobs/`
- `/sportsballshop-co-uk/`
- `/a-beginners-guide-to-watching-rugby-sevens/`
- `/?page_id=21`

### Super Sevens

The current sitemap exposes 77 canonical URLs on `www.super7sseries.com`:

- 24 blog posts
- 52 pages
- 1 blog-category page

Inventory all controlled aliases before cutover, including
`super7sseries.com`, `www.super7sseries.com`, `supersevensseries.com`, and
`www.supersevensseries.com`.

### Rebuilt Site

The current project generates 86 prerendered routes: 15 event/history routes,
44 content pages, 26 articles, and the home page. It is static, has no database,
and currently points its canonicals, schema, sitemap, robots file, build base,
and Worker routes at `rugbymonkey.com/lit/`.

## Target Architecture

```text
LIT7s-owned Git repository
  -> tests and static route generation
  -> Cloudflare Git build
  -> Workers Static Assets
  -> www.lit7s.com

Cloudflare DNS and redirects
  lit7s.com/*             -> www.lit7s.com/:path
  old LIT7s paths         -> preserved URL or one-hop 301
  Super Sevens domains    -> mapped LIT7s page via one-hop 301
  rugbymonkey.com/lit/*   -> equivalent www.lit7s.com URL
```

Workers Static Assets supports `_redirects` files with up to 2,000 static
redirects. Cloudflare Bulk Redirects is available on the Free plan and supports
up to 10,000 redirects across lists, which is sufficient for the known URL
surface. Static asset requests are free and unlimited. The Free plan supports
20,000 files per Worker version and 25 MiB per asset.

## Backend Decision Gate

| Need | Phase-one choice | Add later only when required |
| --- | --- | --- |
| Content pages and articles | Git-managed Markdown/structured content | A CMS only if nontechnical editing becomes a blocking need |
| Ticket and team entry | Ticketpass/EventConnect links | No local commerce database |
| Contact or applications | Existing Google Form/email | Worker + Turnstile + D1 |
| Structured lead tracking | None | D1 with indexed tables and a documented export |
| Large original galleries | Static assets first | R2 when file-count, repository-size, or 25 MiB limits require it |
| Staff accounts/admin/realtime | None | Consider Supabase only for multi-user auth, RLS, or complex workflows |

Do not add Supabase speculatively. Its Free plan currently provides a 500 MB
database but pauses inactive projects; the production Pro plan starts at
$25/month. Cloudflare D1 and R2 have enough free capacity for a small event site
if a backend becomes necessary.

## Migration Phases

### 1. Ownership and Freeze

- Create the LIT7s-owned GitHub organization/repository and Cloudflare account or
  LIT7s-owned Cloudflare account membership.
- Record domain registrar, DNS, WordPress, Google Search Console, analytics,
  Ticketpass, EventConnect, email, and social owners.
- Freeze WordPress editorial changes for the final export window.
- Complete a full WordPress export containing:
  - a native WXR export of all content types;
  - a full database dump;
  - the complete `/wp-content/uploads/` tree;
  - pages, posts, revisions, drafts, attachments, taxonomies, authors, menus,
    custom fields, and featured-image relationships;
  - Yoast titles, descriptions, canonicals, schema settings, redirects, and
    sitemap configuration;
  - plugin and form configuration required to understand existing workflows;
  - media filenames, alt text, captions, descriptions, dates, and parent IDs.
- Store the raw database and any form submissions or user records in encrypted,
  access-controlled backup storage. Do not commit personal data, credentials,
  password hashes, private form entries, or the raw production database to Git.
- Record checksums, export timestamps, WordPress/plugin versions, and row/file
  counts so the export can be verified independently.
- Capture the LIT7s and Super Sevens XML sitemaps and a complete crawl before
  changing DNS.
- Export Google Search Console links, top pages, queries, and indexing data plus
  analytics landing-page data. Use these to prioritize attachment and media URLs.

Gate: the complete WordPress installation can be reconstructed from the protected
export without access to the old host, and the export counts/checksums pass.

### 2. URL Contract and Content Reconciliation

- Build an idempotent import pipeline that reads the WXR/database/media exports
  and produces the new site's structured content and asset files. Re-running the
  import against the same source must produce the same output.
- Preserve a read-only raw source layer and a separate processed layer. Processing
  must resolve WordPress IDs, slugs, parent/child relationships, featured media,
  galleries, internal links, shortcodes, embeds, taxonomies, and legacy URLs.
- Convert WordPress pages and posts into reviewable Markdown or structured data
  without summarizing or rewriting body text. Retain original paragraph order,
  lists, links, dates, captions, attributions, and meaningful formatting.
- Convert WordPress media into optimized web formats while retaining the original
  files and a manifest linking every original URL and attachment ID to the new
  asset. Preserve externally referenced `/wp-content/uploads/...` paths or add
  one-hop mappings.
- Replace unsupported WordPress shortcodes, builders, forms, and plugin embeds
  with explicit new-site components. Produce an exception report for every item
  that cannot be converted automatically.
- Generate an import reconciliation report comparing source and destination
  counts for published pages, posts, attachments, media files, taxonomies,
  internal links, and redirects. The report must identify missing, duplicate,
  orphaned, or failed records.
- Create `migration/url-map.csv` with source host, source path/query, current
  status, canonical, destination, redirect code, content owner, and verification
  status.
- Give every one of the 275 WordPress sitemap URLs and 77 Super Sevens URLs an
  explicit outcome: retain, 301, or 410.
- Preserve the 42 LIT7s page/post URLs at their current paths where the equivalent
  page exists. Use the legacy path as canonical rather than creating an extra
  redirect solely for a cleaner slug.
- Compare migrated page and article body text against the exports. Preserve the
  original body wording, dates, captions, attribution, and media relationships.
  Headlines, metadata, navigation labels, and calls to action may be improved.
- Map Super Sevens articles to the equivalent in-site article and historical
  event pages. Map results, standings, teams, venues, rules, livestreams, and
  galleries to the closest page with equivalent content.
- Handle attachment URLs individually:
  - retain attachment pages that have meaningful content or search traffic;
  - 301 externally referenced attachments to their parent page or exact media;
  - return 410 for confirmed low-value or orphaned attachment pages;
  - never redirect all attachments to `/`.
- Preserve direct `/wp-content/uploads/...` media paths whenever practical.
  Otherwise use one-hop redirects to the equivalent local asset.
- Preserve trailing-slash behavior and map `?page_id=` and `?attachment_id=`
  query URLs explicitly.

Gate: 100% of published WordPress pages/posts and known source URLs are imported
or explicitly dispositioned, every processing exception is reviewed, and no
high-value URL is mapped to a generic page.

### 3. Independent Build and Hosting

- Remove the `/lit/` build base and generate root-level routes.
- Change the canonical origin and schema IDs to `https://www.lit7s.com/`.
- Move content from the 5,000-line TypeScript data file into reviewable Markdown
  or structured content files without changing body wording.
- Generate the old WordPress paths directly as static HTML where they remain the
  canonical URLs.
- Generate `_redirects`, sitemap, robots, canonical tags, Open Graph metadata,
  structured data, and a true 404 from the URL manifest.
- Keep sitemap entries limited to canonical 200 URLs. Do not include redirect,
  attachment-junk, search, checkout, preview, or 410 URLs.
- Store ordinary optimized images with the static build. Add R2 only if the full
  archive exceeds the Worker asset limits or contains large originals.
- Configure a remote preview hostname with `noindex` headers and no production
  canonicals until cutover.

Gate: clean install, test, build, preview, and rollback all work from the
independent repository alone.

### 4. Pre-Cutover SEO Validation

- Crawl every source URL and every generated destination.
- Require retained URLs to return 200 and moved URLs to return one-hop 301/308 to
  a 200 page.
- Reject redirect chains, loops, soft 404s, accidental 302s, mixed canonicals,
  duplicate titles, missing body content, broken images, and broken conversion
  links.
- Verify exact external ticket, entry, application, map, video, and social links.
- Test `www`, apex, HTTP, HTTPS, trailing-slash, query-string, media, category,
  tag, and unknown-route behavior.
- Validate mobile rendering, Core Web Vitals, accessibility, metadata, schema,
  sitemap counts, and robots directives.
- Keep the WordPress origin available for rollback and do not change DNS before
  the acceptance crawl passes.

Gate: zero unmapped high-risk URLs, zero redirect chains, zero broken primary
actions, and a signed-off rollback procedure.

### 5. Cutover

- Lower DNS TTL before the launch window.
- Deploy the production build before switching the LIT7s DNS records.
- Keep `www.lit7s.com` canonical and apex-to-`www` redirects unchanged.
- Activate the full redirect manifest at the same time as the new origin.
- Point the controlled Super Sevens domains to Cloudflare and activate their
  URL-by-URL permanent redirects.
- Redirect `rugbymonkey.com/lit/*` to the corresponding independent URL.
- Submit the new LIT7s sitemap in Search Console.
- For the Super Sevens canonical domain, verify both properties and use Google
  Search Console's Change of Address process after its redirect map is live.
- Do not use Change of Address for the LIT7s WordPress replacement because the
  canonical domain remains the same.

Gate: production crawl matches the accepted preview and the rollback window is
still open.

### 6. Monitoring

- Monitor Search Console indexing, page experience, crawl errors, sitemap status,
  queries, and top landing pages daily for the first week, weekly for the first
  month, and monthly through day 90.
- Enable free Cloudflare Web Analytics and preserve existing analytics long
  enough to compare pre/post-launch traffic and conversions.
- Run a scheduled URL-contract test against every retained and redirected URL.
- Fix unexpected 404s by adding specific mappings, not generic catch-all
  redirects.
- Keep the old WordPress export and media backup indefinitely and keep redirects
  active indefinitely.

## Acceptance Checklist

- Independent repository is owned by LIT7s and contains source, content, assets,
  tests, migration manifests, and deployment configuration.
- A verified full WordPress export exists in protected storage, including the
  database, WXR, uploads, SEO metadata, relationships, and plugin/form context.
- The repeatable import pipeline and reconciliation report prove that all
  published pages, posts, media, attachments, taxonomies, links, and redirects
  were processed or deliberately excluded.
- No production dependency remains on RugbyMonkey, Mobilis, a personal GitHub
  account, or a personal Cloudflare account.
- All 42 LIT7s page/post URLs are retained or mapped one-to-one.
- All 228 attachment pages and all direct media URLs have documented outcomes.
- All 77 Super Sevens canonical URLs have one-hop mappings.
- Every canonical and sitemap URL returns 200 with original migrated body text.
- Every retired URL returns a deliberate 301 or 410, never a soft 404.
- `lit7s.com` redirects to `www.lit7s.com` without a chain.
- Unknown URLs return a branded true 404.
- Ticket, registration, application, media, and contact journeys work on mobile.
- Search Console and Cloudflare analytics are active under LIT7s ownership.
- A non-developer handoff guide covers content edits, previews, deployment,
  redirects, backups, DNS, and recovery.

## References

- Current LIT7s sitemap: https://www.lit7s.com/sitemap_index.xml
- Current Super Sevens sitemap: https://www.supersevensseries.com/sitemap.xml
- Google site-move guidance:
  https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes
- Google redirect guidance:
  https://developers.google.com/search/docs/crawling-indexing/301-redirects
- Cloudflare Workers Static Assets:
  https://developers.cloudflare.com/workers/static-assets/
- Cloudflare static asset pricing and limits:
  https://developers.cloudflare.com/workers/static-assets/billing-and-limitations/
- Cloudflare static redirects:
  https://developers.cloudflare.com/workers/static-assets/redirects/
- Cloudflare Bulk Redirects:
  https://developers.cloudflare.com/rules/url-forwarding/bulk-redirects/
- Cloudflare D1 pricing:
  https://developers.cloudflare.com/workers/platform/pricing/#d1
- Cloudflare R2 pricing: https://developers.cloudflare.com/r2/pricing/
- Cloudflare Turnstile plans: https://developers.cloudflare.com/turnstile/plans/
- Cloudflare Web Analytics: https://developers.cloudflare.com/web-analytics/about/
- Supabase pricing: https://supabase.com/pricing
