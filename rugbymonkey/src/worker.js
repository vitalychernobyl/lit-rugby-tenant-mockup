import { eventSlugs, teamSlugs } from "../public/data/event-manifest-rm12.js";
import { tenant } from "../public/data/tenant-rm12.js";

const eventRoutes = new Set(eventSlugs);
const teamRoutes = new Set(teamSlugs);
const pageRoutes = new Set([
  "/",
  "/events",
  "/tournaments",
  "/sevens",
  "/fifteens",
  "/beach",
  "/touch",
  "/clubs",
  "/register",
  "/tickets",
  "/submit",
  "/list-your-event",
  "/teams",
  "/media",
  "/past-events",
  "/faq",
  "/contact",
  "/sponsorship",
]);

const metadata = {
  "/": ["Rugbymonkey - Rugby Tournaments Worldwide", "Find rugby tournaments, team entry, tickets, and event details across 7s, 15s, beach rugby, touch, and tag."],
  "/events": ["Rugby Tournament Calendar | Rugbymonkey", "Search upcoming and past rugby tournaments by format, date, destination, division, and team level."],
  "/tournaments": ["Rugby Tournament Calendar | Rugbymonkey", "Search upcoming and past rugby tournaments by format, date, destination, division, and team level."],
  "/sevens": ["Rugby 7s Tournaments | Rugbymonkey", "Find upcoming rugby sevens tournaments, team entry, tickets, destinations, and divisions."],
  "/fifteens": ["Rugby 15s Tournaments | Rugbymonkey", "Find international, national-team, club, youth, and full-field rugby tournaments."],
  "/beach": ["Beach Rugby Tournaments | Rugbymonkey", "Find beach rugby tournaments, destination weekends, team entry, tickets, and event details."],
  "/touch": ["Touch and Tag Rugby Tournaments | Rugbymonkey", "Find touch and tag rugby tournaments for mixed, youth, senior, masters, and community teams."],
  "/register": ["Rugby Team Registration | Rugbymonkey", "Find official team-entry routes and send a registration enquiry for upcoming rugby tournaments."],
  "/tickets": ["Rugby Tournament Tickets | Rugbymonkey", "Find spectator tickets, team entry, parking, VIP, and official event routes."],
  "/list-your-event": ["List a Rugby Tournament | Rugbymonkey", "Add or update a rugby tournament with dates, divisions, registration, ticket, media, and organizer details."],
  "/submit": ["List a Rugby Tournament | Rugbymonkey", "Add or update a rugby tournament with dates, divisions, registration, ticket, media, and organizer details."],
  "/teams": ["Rugby Teams | Rugbymonkey", "Explore rugby teams and the tournaments connected to their formats, destinations, and divisions."],
  "/media": ["Rugby Tournament Media | Rugbymonkey", "Browse rugby tournament photos, event pages, official channels, and past editions."],
  "/past-events": ["Past Rugby Tournaments | Rugbymonkey", "Browse past rugby tournaments, venues, divisions, photos, contacts, and repeat editions."],
  "/faq": ["Rugbymonkey FAQ", "Answers about rugby tournament entry, tickets, divisions, travel, organizers, and event listings."],
  "/contact": ["Contact Rugbymonkey", "Contact the events desk about a tournament, team entry, listing correction, media, or partnership."],
  "/sponsorship": ["Rugby Event Partnerships | Rugbymonkey", "Request partnership information for rugby tournaments and event-day audiences."],
};

const securityHeaders = {
  "content-security-policy": "default-src 'self'; base-uri 'self'; connect-src 'self' https://cloudflareinsights.com; font-src 'self' https://fonts.gstatic.com; form-action 'self'; frame-ancestors 'none'; img-src 'self' data: https:; script-src 'self' https://static.cloudflareinsights.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; upgrade-insecure-requests",
  "permissions-policy": "camera=(), geolocation=(self), microphone=()",
  "referrer-policy": "strict-origin-when-cross-origin",
  "x-content-type-options": "nosniff",
  "x-frame-options": "DENY",
  "x-mobilis-tenant": tenant.id,
};

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.hostname === `www.${tenant.domain}`) {
      url.hostname = tenant.domain;
      return Response.redirect(url.toString(), 308);
    }

    if (url.pathname === "/api/leads") return handleLead(request, env);
    if (url.pathname === "/calendar.ics") return calendarResponse(url);
    if (url.pathname === "/robots.txt") return robotsResponse();
    if (url.pathname === "/sitemap.xml") return sitemapResponse();

    if (isAssetPath(url.pathname) && url.pathname !== "/index.html") {
      return assetResponse(request, env);
    }

    const known = isKnownRoute(url.pathname);
    return shellResponse(request, env, known ? 200 : 404);
  },
};

function isAssetPath(pathname) {
  return /\.[a-z0-9]+$/i.test(pathname);
}

function isKnownRoute(pathname) {
  const path = pathname.replace(/\/+$/, "") || "/";
  if (pageRoutes.has(path)) return true;

  const eventMatch = path.match(/^\/events\/([a-z0-9-]+)(?:\/claim)?$/);
  if (eventMatch) return eventRoutes.has(eventMatch[1]);

  const registerMatch = path.match(/^\/register\/([a-z0-9-]+)$/);
  if (registerMatch) return eventRoutes.has(registerMatch[1]);

  const teamMatch = path.match(/^\/teams\/([a-z0-9-]+)$/);
  return Boolean(teamMatch && teamRoutes.has(teamMatch[1]));
}

async function assetResponse(request, env) {
  const response = await env.ASSETS.fetch(request);
  const contentType = response.headers.get("content-type") || "";
  if (contentType.includes("text/html")) {
    return new Response("Not found", { status: 404, headers: { "content-type": "text/plain; charset=utf-8" } });
  }

  const headers = new Headers(response.headers);
  const assetUrl = new URL(request.url);
  const path = assetUrl.pathname;
  const isLocal = assetUrl.hostname === "127.0.0.1" || assetUrl.hostname === "localhost";
  if (isLocal) {
    headers.set("cache-control", "no-store");
  } else if (/-rm\d+\.(?:js|css|png)$/i.test(path)) {
    headers.set("cache-control", "public, max-age=31536000, immutable");
  } else if (path.startsWith("/assets/events/")) {
    headers.set("cache-control", "public, max-age=604800, stale-while-revalidate=86400");
  }
  headers.set("x-content-type-options", "nosniff");
  return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
}

async function shellResponse(request, env, status) {
  const requestUrl = new URL(request.url);
  const indexUrl = new URL("/", requestUrl);
  indexUrl.searchParams.set("_shell", tenant.assetVersion);
  const source = await env.ASSETS.fetch(new Request(indexUrl, request));
  const routeMeta = metadataFor(requestUrl.pathname, status);
  const headers = new Headers(source.headers);
  headers.delete("location");
  headers.set("content-type", "text/html; charset=utf-8");
  headers.set("cache-control", "no-store, must-revalidate");
  for (const [name, value] of Object.entries(securityHeaders)) headers.set(name, value);

  const base = new Response(source.body, { status, headers });
  return new HTMLRewriter()
    .on("title", { element: (element) => element.setInnerContent(routeMeta.title) })
    .on('meta[name="description"]', { element: (element) => element.setAttribute("content", routeMeta.description) })
    .on('meta[name="robots"]', { element: (element) => element.setAttribute("content", status === 404 ? "noindex,follow" : "index,follow") })
    .on('meta[property="og:title"]', { element: (element) => element.setAttribute("content", routeMeta.title) })
    .on('meta[property="og:description"]', { element: (element) => element.setAttribute("content", routeMeta.description) })
    .on('meta[property="og:url"]', { element: (element) => element.setAttribute("content", routeMeta.canonical) })
    .on('meta[property="og:image"]', { element: (element) => element.setAttribute("content", routeMeta.image) })
    .on('link[rel="canonical"]', { element: (element) => element.setAttribute("href", routeMeta.canonical) })
    .transform(base);
}

function metadataFor(pathname, status) {
  const path = pathname.replace(/\/+$/, "") || "/";
  if (status === 404) {
    return {
      title: "Page not found | Rugbymonkey",
      description: "Browse the worldwide rugby tournament calendar.",
      canonical: `${tenant.canonicalOrigin}${path}`,
      image: `${tenant.canonicalOrigin}${tenant.logo}`,
    };
  }

  const eventMatch = path.match(/^\/events\/([a-z0-9-]+)/);
  const registerMatch = path.match(/^\/register\/([a-z0-9-]+)/);
  const teamMatch = path.match(/^\/teams\/([a-z0-9-]+)/);
  const subject = eventMatch?.[1] || registerMatch?.[1] || teamMatch?.[1] || "";
  const subjectTitle = titleFromSlug(subject);
  const [title, description] = metadata[path] || (eventMatch
    ? [`${subjectTitle} | Rugby Tournament Details`, `Dates, venue, divisions, registration, tickets, contacts, and travel details for ${subjectTitle}.`]
    : registerMatch
      ? [`Register for ${subjectTitle} | Rugbymonkey`, `Send a team-entry enquiry and open the official registration route for ${subjectTitle}.`]
    : teamMatch
      ? [`${subjectTitle} | Rugby Team`, `Explore ${subjectTitle} and related rugby tournaments, destinations, and divisions.`]
      : metadata["/"]);

  return {
    title,
    description,
    canonical: `${tenant.canonicalOrigin}${path}`,
    image: eventMatch?.[1] === "lit-7s-london-2026"
      ? `${tenant.canonicalOrigin}/assets/events/lit-7s-london-2026.jpg`
      : `${tenant.canonicalOrigin}${tenant.logo}`,
  };
}

function titleFromSlug(slug) {
  return slug
    .split("-")
    .map((part) => ({ lit: "LIT", u18: "U18", u20: "U20", wxv: "WXV", usa: "USA", hsbc: "HSBC" })[part] || (/^\d+s$/.test(part) ? part : part.charAt(0).toUpperCase() + part.slice(1)))
    .join(" ");
}

async function handleLead(request, env) {
  if (request.method !== "POST") {
    return jsonResponse({ error: "Method not allowed" }, 405, { allow: "POST" });
  }

  const origin = request.headers.get("origin");
  if (origin) {
    try {
      if (new URL(origin).host !== new URL(request.url).host) {
        return jsonResponse({ error: "Invalid request origin" }, 403);
      }
    } catch {
      return jsonResponse({ error: "Invalid request origin" }, 403);
    }
  }

  try {
    const raw = await readBody(request, 24_000);
    const submitted = JSON.parse(raw || "{}");
    if (submitted.website_confirm) return jsonResponse({ ok: true, reference: "received" }, 201);

    const lead = normalizeLead(submitted);
    await env.MOBILIS_DB.prepare(
      `INSERT INTO leads (id, tenant_id, lead_type, event_slug, contact_name, contact_email, organization, payload_json)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
    ).bind(
      lead.id,
      tenant.id,
      lead.type,
      lead.eventSlug || null,
      lead.contactName,
      lead.contactEmail,
      lead.organization || null,
      JSON.stringify(lead.payload)
    ).run();

    console.log(JSON.stringify({ message: "mobilis_lead_created", tenant: tenant.id, leadId: lead.id, leadType: lead.type, eventSlug: lead.eventSlug || null }));
    return jsonResponse({ ok: true, reference: lead.id }, 201);
  } catch (error) {
    const status = error instanceof SyntaxError ? 400 : Number(error?.status) || 500;
    if (status >= 500) {
      console.error(JSON.stringify({ message: "mobilis_lead_failed", tenant: tenant.id, error: error instanceof Error ? error.message : String(error) }));
    }
    const message = error instanceof SyntaxError ? "Invalid JSON request" : error.message;
    return jsonResponse({ error: status >= 500 ? "Unable to save your enquiry right now" : message }, status);
  }
}

async function readBody(request, maxBytes) {
  if (!request.body) return "";
  const reader = request.body.getReader();
  const decoder = new TextDecoder();
  let total = 0;
  let body = "";
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    total += value.byteLength;
    if (total > maxBytes) throw httpError("Request is too large", 413);
    body += decoder.decode(value, { stream: true });
  }
  return body + decoder.decode();
}

function normalizeLead(submitted) {
  const allowedTypes = new Set(["team_registration", "event_listing", "event_update", "sponsorship", "general"]);
  const type = clean(submitted.lead_type, 40);
  if (!allowedTypes.has(type)) throw httpError("Choose a valid enquiry type", 400);

  const contactName = clean(submitted.contact_name || submitted.manager_name || submitted.organizer_name, 120);
  const contactEmail = clean(submitted.contact_email || submitted.manager_email || submitted.email, 180).toLowerCase();
  if (!contactName) throw httpError("Your name is required", 400);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactEmail)) throw httpError("A valid email address is required", 400);
  if (!/^(?:yes|on|true|1)$/i.test(String(submitted.consent || ""))) throw httpError("Consent is required so we can reply", 400);

  const payload = {};
  for (const [key, value] of Object.entries(submitted)) {
    if (key === "website_confirm") continue;
    if (!/^[a-z][a-z0-9_]{0,39}$/i.test(key)) continue;
    payload[key] = clean(value, key === "message" || key === "notes" || key === "requested_changes" ? 3000 : 500);
  }

  return {
    id: crypto.randomUUID(),
    type,
    eventSlug: clean(submitted.event_slug || submitted.event, 160),
    contactName,
    contactEmail,
    organization: clean(submitted.organization || submitted.company || submitted.team_name, 180),
    payload,
  };
}

function clean(value, maxLength) {
  return String(value ?? "").replace(/[\u0000-\u001f\u007f]/g, " ").replace(/\s+/g, " ").trim().slice(0, maxLength);
}

function httpError(message, status) {
  const error = new Error(message);
  error.status = status;
  return error;
}

function jsonResponse(data, status, extraHeaders = {}) {
  const headers = { "content-type": "application/json; charset=utf-8", "cache-control": "no-store", ...extraHeaders };
  for (const [name, value] of Object.entries(securityHeaders)) headers[name] = value;
  return new Response(JSON.stringify(data), { status, headers });
}

function calendarResponse(url) {
  const title = clean(url.searchParams.get("title") || "Rugby tournament", 180);
  const location = clean(url.searchParams.get("location") || "", 240);
  const start = /^\d{4}-\d{2}-\d{2}$/.test(url.searchParams.get("start") || "") ? url.searchParams.get("start") : "";
  const end = /^\d{4}-\d{2}-\d{2}$/.test(url.searchParams.get("end") || "") ? url.searchParams.get("end") : start;
  if (!start) return new Response("Invalid calendar date", { status: 400 });

  const nextDay = new Date(`${end}T00:00:00Z`);
  nextDay.setUTCDate(nextDay.getUTCDate() + 1);
  const format = (value) => value.replaceAll("-", "");
  const body = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Mobilis//Rugbymonkey//EN",
    "CALSCALE:GREGORIAN",
    "BEGIN:VEVENT",
    `UID:${crypto.randomUUID()}@${tenant.domain}`,
    `DTSTART;VALUE=DATE:${format(start)}`,
    `DTEND;VALUE=DATE:${format(nextDay.toISOString().slice(0, 10))}`,
    `SUMMARY:${escapeCalendar(title)}`,
    `LOCATION:${escapeCalendar(location)}`,
    `URL:${tenant.canonicalOrigin}${clean(url.searchParams.get("path") || "/events", 220)}`,
    "END:VEVENT",
    "END:VCALENDAR",
    "",
  ].join("\r\n");
  return new Response(body, {
    headers: {
      "content-type": "text/calendar; charset=utf-8",
      "content-disposition": 'attachment; filename="rugby-tournament.ics"',
      "cache-control": "no-store",
    },
  });
}

function escapeCalendar(value) {
  return value.replace(/\\/g, "\\\\").replace(/,/g, "\\,").replace(/;/g, "\\;").replace(/\r?\n/g, "\\n");
}

function robotsResponse() {
  return new Response(`User-agent: *\nAllow: /\nDisallow: /api/\nSitemap: ${tenant.canonicalOrigin}/sitemap.xml\n`, {
    headers: { "content-type": "text/plain; charset=utf-8", "cache-control": "public, max-age=86400" },
  });
}

function sitemapResponse() {
  const routes = [
    ...pageRoutes,
    ...eventSlugs.map((slug) => `/events/${slug}`),
    ...teamSlugs.map((slug) => `/teams/${slug}`),
  ];
  const urls = [...new Set(routes)]
    .sort()
    .map((path) => `  <url><loc>${escapeXml(`${tenant.canonicalOrigin}${path}`)}</loc></url>`)
    .join("\n");
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`, {
    headers: { "content-type": "application/xml; charset=utf-8", "cache-control": "public, max-age=3600" },
  });
}

function escapeXml(value) {
  return value.replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;" })[character]);
}
