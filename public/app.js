const BASE_PATH = "/lit";

const icons = {
  arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  search: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-4.2-4.2"/></svg>',
  pin: '<svg class="meta-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s7-4.6 7-11a7 7 0 1 0-14 0c0 6.4 7 11 7 11Z"/><circle cx="12" cy="10" r="2.5"/></svg>',
  calendar: '<svg class="meta-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3v4M17 3v4M4 9h16M5 5h14v16H5z"/></svg>',
  ticket: '<svg class="meta-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9V5h16v4a3 3 0 0 0 0 6v4H4v-4a3 3 0 0 0 0-6Z"/><path d="M13 5v14"/></svg>',
  team: '<svg class="meta-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M16 11a4 4 0 1 0-8 0"/><path d="M4 21a8 8 0 0 1 16 0"/><path d="M20 8a3 3 0 0 1 0 6M4 8a3 3 0 0 0 0 6"/></svg>',
  shield: '<svg class="meta-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 5 6v6c0 4.6 3 7.4 7 9 4-1.6 7-4.4 7-9V6l-7-3Z"/></svg>',
};

const links = {
  litHome: "https://www.lit7s.com/",
  super7sTickets: "https://ticketpass.org/event/EWDVGH/lit-super-sevens-series-2026-team-entry",
  super7sTeamEntry: "https://ticketpass.org/event/EXWVIX/lit-super-7s-series-team-entries",
  floridaRegistration: "https://app.eventconnect.io/events/36742/registration-type/create?nav=hidden",
  floridaHotels: "https://app.eventconnect.io/events/36742/hotels?nav=hidden",
  imgCheckout: "https://www.lit7s.com/img-camp-checkout/",
  floridaTerms: "https://www.lit7s.com/lit-florida-international-7s-terms-conditions/",
  london7s: "https://www.lit7s.com/lit-7s-london7s/",
  super7s: "https://www.super7sseries.com",
};

const tournaments = [
  {
    slug: "lit-florida-international-7s",
    name: "LIT Florida International 7s",
    scope: "National",
    region: "United States",
    city: "Bradenton, Florida",
    venue: "Premier Sports Campus",
    date: "2025-11-29",
    status: "Registration reference",
    format: "Tournament",
    divisions: ["Men's Elite", "Women's Elite", "Open", "Social", "U23", "U18", "U16"],
    teamCount: 48,
    source: "Verified from LIT7s.com",
    score: 96,
    summary:
      "First LIT7s tournament in the United States, staged at Premier Sports Campus with adult and youth divisions, livestream, photographers, social media presenters, food, bars, and entertainment.",
    ctas: [
      ["Register team", links.floridaRegistration],
      ["Book hotels", links.floridaHotels],
    ],
  },
  {
    slug: "lit-super-7s-series",
    name: "LIT Super 7s Series",
    scope: "National",
    region: "United Kingdom",
    city: "UK multi-stop",
    venue: "Series venues",
    date: "2026-05-01",
    status: "Team entry link live",
    format: "Series",
    divisions: ["Open", "Social", "Men's", "Women's"],
    teamCount: 70,
    source: "Verified from LIT7s.com navigation",
    score: 94,
    summary:
      "A UK sevens series profile for repeat events, standings, rules, rolling substitutions, 7 minute halves, tiebreakers, and multi-event team points.",
    ctas: [
      ["Enter your team", links.super7sTickets],
      ["Series site", links.super7s],
    ],
  },
  {
    slug: "london-7s",
    name: "London 7s",
    scope: "Local",
    region: "United Kingdom",
    city: "London",
    venue: "London area rugby venue",
    date: "2025-07-19",
    status: "Reference event",
    format: "Tournament",
    divisions: ["Men's Open", "Men's Social", "Women's Open", "Women's Social"],
    teamCount: 70,
    source: "Verified from LIT7s.com",
    score: 91,
    summary:
      "The flagship London sevens event profile, built around elite and amateur teams, prizes, food, bars, live music, media, and night-party energy.",
    ctas: [
      ["Buy tickets", links.super7sTickets],
      ["London 7s page", links.london7s],
    ],
  },
  {
    slug: "lit-olympic-experience-camp",
    name: "The Olympic Experience LIT Rugby Sevens Camp USA",
    scope: "National",
    region: "United States",
    city: "Chula Vista, California",
    venue: "Olympic Training Center",
    date: "2026-02-27",
    status: "Camp reference",
    format: "Camp",
    divisions: ["Youth 13+", "Adult Men", "Adult Women", "Youth Boys", "Youth Girls"],
    teamCount: 120,
    source: "Verified from LIT7s.com",
    score: 88,
    summary:
      "A three-day sevens camp profile for advanced athletes, with Olympian and USA Rugby coaching, technical sessions, fitness testing, and take-home player feedback.",
    ctas: [
      ["Reserve spot", links.imgCheckout],
      ["Camp page", "https://www.lit7s.com/the-olympic-experience-lit-rugby-sevens-camp-usa-2026/"],
    ],
  },
  {
    slug: "world-rugby-svns",
    name: "World Rugby SVNS Directory",
    scope: "Global",
    region: "Global",
    city: "Multi-city",
    venue: "International host cities",
    date: "2026-12-01",
    status: "Directory profile",
    format: "Series",
    divisions: ["Men's international", "Women's international"],
    teamCount: 24,
    source: "Extrapolated global search profile",
    score: 86,
    summary:
      "Global tournament discovery profile for international sevens series research, national teams, standings, event travel, broadcast, and team pages.",
    ctas: [["View source", "https://www.world.rugby/sevens-series"]],
  },
  {
    slug: "usa-national-sevens",
    name: "USA Club Sevens Directory",
    scope: "National",
    region: "United States",
    city: "Rotating host",
    venue: "Qualifier and championship venues",
    date: "2026-08-08",
    status: "Directory profile",
    format: "Championship",
    divisions: ["Men's club", "Women's club", "Qualifier"],
    teamCount: 32,
    source: "Extrapolated national search profile",
    score: 82,
    summary:
      "National championship search profile for qualifying pathways, club standings, roster checks, and local-to-national progression.",
    ctas: [["Research pathway", "https://usa.rugby/"]],
  },
  {
    slug: "nyc-summer-sevens",
    name: "NYC Summer Sevens",
    scope: "Local",
    region: "United States",
    city: "New York, New York",
    venue: "Metro rugby complex",
    date: "2026-06-20",
    status: "Mock local profile",
    format: "Tournament",
    divisions: ["Men's Open", "Women's Open", "Social"],
    teamCount: 20,
    source: "Extrapolated local marketplace entry",
    score: 75,
    summary:
      "A local discovery card showing how Mobilis-style tenant search could surface nearby tournaments, clubs, ticketing, and registration status.",
    ctas: [["Start inquiry", "mailto:admin@lit7s.com?subject=NYC%20Summer%20Sevens%20interest"]],
  },
  {
    slug: "toronto-invitational-7s",
    name: "Toronto Invitational 7s",
    scope: "Global",
    region: "Canada",
    city: "Toronto, Ontario",
    venue: "Regional sports park",
    date: "2026-07-11",
    status: "Mock invitational",
    format: "Invitational",
    divisions: ["Elite", "Open", "University"],
    teamCount: 28,
    source: "Extrapolated global marketplace entry",
    score: 78,
    summary:
      "A cross-border invitational profile for team managers comparing travel windows, eligibility, roster rules, and accommodation links.",
    ctas: [["Invite request", "mailto:admin@lit7s.com?subject=Toronto%20Invitational%20request"]],
  },
];

const events = [
  {
    slug: "florida-2025",
    title: "LIT Florida International 7s",
    day: "29",
    month: "Nov",
    location: "Premier Sports Campus, Bradenton",
    date: "November 29, 2025",
    label: "Men's, women's, youth 7s",
    summary:
      "USA tournament entry with EventConnect registration, accommodation flow, youth and adult divisions, and stadium-campus operations.",
    link: links.floridaRegistration,
  },
  {
    slug: "super-series-2026",
    title: "LIT Super 7s Series",
    day: "2026",
    month: "Series",
    location: "United Kingdom",
    date: "2026 season",
    label: "Series standings and entries",
    summary:
      "Team entry, spectator tickets, parking, standings, rules, and multi-event points modeled for repeat competition operations.",
    link: links.super7sTickets,
  },
  {
    slug: "olympic-experience-2026",
    title: "LIT Rugby Sevens Camp USA",
    day: "27",
    month: "Feb",
    location: "Chula Vista, California",
    date: "February 27 to March 1, 2026",
    label: "Olympic Experience",
    summary:
      "Three-day sevens camp profile for advanced athletes, Olympian coaches, fitness testing, and personal feedback.",
    link: "https://www.lit7s.com/the-olympic-experience-lit-rugby-sevens-camp-usa-2026/",
  },
];

const teams = [
  {
    slug: "lit-usa-7s",
    name: "LIT USA 7s",
    base: "United States",
    level: "Elite pathway",
    record: "6-1 mock form",
    roster: 15,
    tournament: "LIT Florida International 7s",
    summary:
      "Future tenant flagship team profile for tournament entry, roster compliance, hotel blocks, coach notes, and player visibility.",
  },
  {
    slug: "london-royals",
    name: "London Royals RFC",
    base: "London, UK",
    level: "Men's Open",
    record: "4-2 mock form",
    roster: 14,
    tournament: "London 7s",
    summary:
      "Competitive club-side profile designed for schedule search, player stats, manager tasks, and media highlights.",
  },
  {
    slug: "bradenton-wave",
    name: "Bradenton Wave",
    base: "Florida, US",
    level: "Women's Open",
    record: "5-2 mock form",
    roster: 15,
    tournament: "LIT Florida International 7s",
    summary:
      "Local host-market team profile with registration status, division placement, player availability, and fan ticketing links.",
  },
  {
    slug: "global-selects",
    name: "Global Selects",
    base: "International",
    level: "Invitational",
    record: "3-3 mock form",
    roster: 13,
    tournament: "Toronto Invitational 7s",
    summary:
      "International invitational side showing how cross-border rosters, visas, contacts, and player profiles could be surfaced.",
  },
];

const people = [
  {
    slug: "perry-baker",
    name: "Perry Baker",
    initials: "PB",
    role: "Head Coach",
    team: "LIT Rugby Sevens Camp USA",
    type: "Verified coach",
    position: "Olympian mentor",
    stats: ["3 x Olympian", "2 x World Rugby Sevens Player of the Year", "Camp head coach"],
    bio:
      "Camp profile based on LIT7s.com coach listing. In the tenant, verified coaches can anchor training pages, testimonials, and player development content.",
  },
  {
    slug: "naya-tapper",
    name: "Naya Tapper",
    initials: "NT",
    role: "Coach",
    team: "LIT Rugby Sevens Camp USA",
    type: "Verified coach",
    position: "Olympian mentor",
    stats: ["2 x Olympian", "Olympic bronze medal winner", "Skills coach"],
    bio:
      "Coach profile based on LIT7s.com camp listing, presented as a discoverable mentor card for athlete registration flows.",
  },
  {
    slug: "ellaine-gelman",
    name: "Ellaine Gelman",
    initials: "EG",
    role: "CEO and Director of Rugby",
    team: "LIT USA 7s",
    type: "Verified organizer",
    position: "Director",
    stats: ["LIT7s CEO", "Director of Rugby of LIT USA 7s", "Tournament operator"],
    bio:
      "Organizer profile based on LIT7s.com camp listing, mapped to tenant ownership, content approval, and event operations surfaces.",
  },
  {
    slug: "maya-thompson",
    name: "Maya Thompson",
    initials: "MT",
    role: "Player",
    team: "Bradenton Wave",
    type: "Mock player",
    position: "Playmaker",
    stats: ["14 tries", "22 conversions", "91% tackle completion"],
    bio:
      "Illustrative player profile for stats, eligibility, recruitment notes, media clips, and tournament participation history.",
  },
  {
    slug: "ari-blake",
    name: "Ari Blake",
    initials: "AB",
    role: "Player",
    team: "LIT USA 7s",
    type: "Mock player",
    position: "Sweeper",
    stats: ["11 tries", "8 line breaks", "4 player awards"],
    bio:
      "Illustrative elite-pathway athlete card showing how players can be searched across local, national, and global tournaments.",
  },
  {
    slug: "joel-reid",
    name: "Joel Reid",
    initials: "JR",
    role: "Player",
    team: "London Royals RFC",
    type: "Mock player",
    position: "Forward",
    stats: ["19 restarts won", "6 tries", "12 offloads"],
    bio:
      "Illustrative club-player profile for team pages, match previews, coach notes, and fan-facing tournament content.",
  },
];

const opsItems = [
  ["Tenant routing", "Public `/lit` tenant surface, future auth gates, ownership metadata, and no secret-backed live writes in this mockup."],
  ["Event intake", "Registration, ticketing, roster, hotel, division, and compliance state modeled for LIT7s tournament operations."],
  ["Search index", "Local, national, and global rugby tournament entities normalized for fast filtering and detail routes."],
  ["Review states", "Mobilis/MiGente-style publishing posture: draft, verified, featured, needs source, and ready for owner review."],
  ["Messaging handoff", "Future WhatsApp, email, and calendar handoff slots are visible as ops modules without enabling provider sends."],
  ["Evidence trail", "Official LIT7s links, source labels, and extrapolated sample entries are separated in the interface and docs."],
];

const state = {
  query: "",
  scope: "All",
  format: "All",
  division: "All",
  ticketSelection: "LIT Florida International 7s",
};

const app = document.querySelector("#app");
const nav = document.querySelector("[data-nav]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const toast = document.querySelector("[data-toast]");

function toRoute(path) {
  if (!path || path === "/") return `${BASE_PATH}/`;
  if (path.startsWith("http")) return path;
  if (path.startsWith(BASE_PATH)) return path;
  return `${BASE_PATH}${path.startsWith("/") ? path : `/${path}`}`;
}

function stripBase(pathname) {
  if (pathname === BASE_PATH) return "/";
  if (pathname.startsWith(`${BASE_PATH}/`)) return pathname.slice(BASE_PATH.length) || "/";
  return pathname || "/";
}

function navigate(path) {
  const target = toRoute(path);
  history.pushState({}, "", target);
  render();
}

function html(strings, ...values) {
  return strings.reduce((out, string, index) => out + string + (values[index] ?? ""), "");
}

function safe(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2600);
}

function setNavCurrent(pathname) {
  const path = stripBase(pathname);
  document.querySelectorAll("[data-nav] a").forEach((link) => {
    const route = stripBase(new URL(link.href).pathname);
    const active = path === route || (route !== "/" && path.startsWith(route));
    link.toggleAttribute("aria-current", active);
  });
}

function button(label, href, variant = "primary") {
  const external = href.startsWith("http") || href.startsWith("mailto:");
  const attrs = external ? 'target="_blank" rel="noreferrer"' : "data-route";
  const target = external ? href : toRoute(href);
  return `<a class="button ${variant}" href="${safe(target)}" ${attrs}>${safe(label)} ${icons.arrow}</a>`;
}

function tagList(items, color = "") {
  return `<div class="tag-row">${items.map((item) => `<span class="tag ${color}">${safe(item)}</span>`).join("")}</div>`;
}

function metaList(items) {
  return `<ul class="meta-list">${items.map(([icon, text]) => `<li>${icon}<span>${safe(text)}</span></li>`).join("")}</ul>`;
}

function tournamentMatches(tournament) {
  const haystack = [
    tournament.name,
    tournament.scope,
    tournament.region,
    tournament.city,
    tournament.venue,
    tournament.format,
    tournament.status,
    tournament.summary,
    tournament.divisions.join(" "),
  ]
    .join(" ")
    .toLowerCase();
  const q = state.query.trim().toLowerCase();
  return (
    (!q || haystack.includes(q)) &&
    (state.scope === "All" || tournament.scope === state.scope) &&
    (state.format === "All" || tournament.format === state.format) &&
    (state.division === "All" || tournament.divisions.some((division) => division.includes(state.division)))
  );
}

function filteredTournaments() {
  return tournaments.filter(tournamentMatches).sort((a, b) => b.score - a.score);
}

function eventMini(event) {
  return html`
    <article class="event-mini">
      <div class="date-tile"><span>${safe(event.month)}</span><strong>${safe(event.day)}</strong></div>
      <div>
        <h3>${safe(event.title)}</h3>
        <p>${safe(event.location)}</p>
        <p>${safe(event.label)}</p>
      </div>
    </article>
  `;
}

function tournamentCard(tournament, light = false) {
  const ctas = tournament.ctas
    .slice(0, 2)
    .map(([label, href], index) => button(label, href, index === 0 ? "primary small" : light ? "light small" : "secondary small"))
    .join("");
  return html`
    <article class="card ${light ? "light-card" : ""}">
      <div class="media-frame"></div>
      <div class="card-body">
        <div class="tag-row">
          <span class="tag red">${safe(tournament.scope)}</span>
          <span class="tag green">${safe(tournament.format)}</span>
          <span class="tag">${safe(tournament.source)}</span>
        </div>
        <h3>${safe(tournament.name)}</h3>
        <p>${safe(tournament.summary)}</p>
        ${metaList([
          [icons.pin, `${tournament.venue}, ${tournament.city}`],
          [icons.calendar, tournament.date],
          [icons.team, `${tournament.teamCount}+ team capacity profile`],
        ])}
        ${tagList(tournament.divisions.slice(0, 5))}
        <div class="button-row">
          ${button("View details", `/tournaments/${tournament.slug}`, light ? "dark small" : "secondary small")}
          ${ctas}
        </div>
      </div>
    </article>
  `;
}

function resultRow(tournament) {
  return html`
    <article class="result-row">
      <div class="score-tile"><span>Match</span><strong>${tournament.score}</strong></div>
      <div>
        <div class="tag-row">
          <span class="tag red">${safe(tournament.scope)}</span>
          <span class="tag green">${safe(tournament.format)}</span>
          <span class="tag">${safe(tournament.status)}</span>
        </div>
        <h3>${safe(tournament.name)}</h3>
        <p>${safe(tournament.summary)}</p>
        ${metaList([
          [icons.pin, `${tournament.city} - ${tournament.venue}`],
          [icons.calendar, tournament.date],
          [icons.shield, tournament.divisions.join(", ")],
        ])}
      </div>
      <div class="row-actions">
        ${button("Details", `/tournaments/${tournament.slug}`, "dark small")}
        ${tournament.ctas[0] ? button(tournament.ctas[0][0], tournament.ctas[0][1], "light small") : ""}
      </div>
    </article>
  `;
}

function pageHero(title, copy, action = "") {
  return html`
    <section class="page-hero">
      <div class="page-hero-inner">
        <h1>${safe(title)}</h1>
        <p>${safe(copy)}</p>
        ${action ? `<div class="button-row">${action}</div>` : ""}
      </div>
    </section>
  `;
}

function homePage() {
  const featured = tournaments.slice(0, 3).map((tournament) => tournamentCard(tournament)).join("");
  return html`
    <div class="page">
      <section class="hero">
        <div class="hero-grid">
          <div class="hero-copy">
            <h1>Find rugby sevens tournaments</h1>
            <p>
              Search local, national, and global rugby sevens events, compare divisions, inspect teams,
              follow player profiles, and move directly into tickets or registration.
            </p>
            <div class="hero-actions">
              ${button("Search tournaments", "/tournaments", "primary")}
              ${button("Register team", "/register", "secondary")}
            </div>
            <div class="search-deck" role="search">
              <div class="search-bar">
                <input class="search-input" data-home-search placeholder="Search Florida, London, SVNS, U18, women's open..." value="${safe(
                  state.query,
                )}" />
                <button class="button primary" data-home-search-submit type="button">${icons.search} Search</button>
              </div>
              <div class="filter-strip" aria-label="Search scope">
                ${["All", "Local", "National", "Global"]
                  .map((scope) => `<button class="chip" data-home-scope="${scope}" aria-pressed="${state.scope === scope}">${scope}</button>`)
                  .join("")}
              </div>
            </div>
          </div>
          <aside class="hero-panel">
            <div class="panel-head">
              <h2>LIT7s.com featured</h2>
              <span>Event slate</span>
            </div>
            <div class="event-stack">${events.map(eventMini).join("")}</div>
          </aside>
        </div>
      </section>

      <div class="stat-ribbon">
        <div class="stat"><strong>70+</strong><span>LIT7s team benchmark</span></div>
        <div class="stat"><strong>13</strong><span>Years of LIT7s events</span></div>
        <div class="stat"><strong>3</strong><span>Search scopes</span></div>
        <div class="stat"><strong>24</strong><span>Sample profiles</span></div>
      </div>

      <section class="section">
        <div class="section-head">
          <h2>Featured tournament discovery</h2>
          <p>Verified LIT7s content is mixed with labeled future-tenant examples so the search surface shows the whole product shape.</p>
        </div>
        <div class="grid three">${featured}</div>
      </section>

      <section class="section light">
        <div class="section-head">
          <h2>Teams and player profiles stay connected to events</h2>
          <p>Every profile can route back to divisions, tickets, registration state, roster status, and source evidence.</p>
        </div>
        <div class="grid two">
          ${teamCard(teams[0])}
          ${personCard(people[0])}
        </div>
      </section>
    </div>
  `;
}

function tournamentFilters() {
  const formats = ["All", ...new Set(tournaments.map((item) => item.format))];
  const divisions = ["All", "Elite", "Open", "Social", "U23", "U18", "U16", "Women's", "Men's"];
  return html`
    <div class="toolbar">
      <input data-filter-query value="${safe(state.query)}" placeholder="Search by event, city, division, venue..." />
      <select data-filter-scope>
        ${["All", "Local", "National", "Global"].map((scope) => `<option ${state.scope === scope ? "selected" : ""}>${scope}</option>`).join("")}
      </select>
      <select data-filter-format>
        ${formats.map((format) => `<option ${state.format === format ? "selected" : ""}>${format}</option>`).join("")}
      </select>
      <select data-filter-division>
        ${divisions.map((division) => `<option ${state.division === division ? "selected" : ""}>${division}</option>`).join("")}
      </select>
    </div>
  `;
}

function tournamentsPage() {
  const results = filteredTournaments();
  return html`
    ${pageHero(
      "Tournament search",
      "Filter rugby sevens tournaments across local, national, and global scopes. Verified LIT7s pages and extrapolated tenant entries are source-labeled in every result.",
      button("Add team inquiry", "/register", "primary"),
    )}
    <section class="section light">
      ${tournamentFilters()}
      <div class="results-meta">${results.length} results matching current filters</div>
      <div class="list">
        ${results.length ? results.map(resultRow).join("") : '<div class="empty">No tournaments match these filters.</div>'}
      </div>
    </section>
  `;
}

function tournamentDetail(slug) {
  const tournament = tournaments.find((item) => item.slug === slug);
  if (!tournament) return notFoundPage();
  const relatedTeams = teams.filter((team) => team.tournament === tournament.name || tournament.summary.includes(team.base));
  return html`
    ${pageHero(tournament.name, tournament.summary, button(tournament.ctas[0]?.[0] ?? "Register", tournament.ctas[0]?.[1] ?? "/register", "primary"))}
    <section class="section light">
      <div class="detail-layout">
        <article class="detail-main">
          <div class="tag-row">
            <span class="tag red">${safe(tournament.scope)}</span>
            <span class="tag green">${safe(tournament.format)}</span>
            <span class="tag">${safe(tournament.source)}</span>
          </div>
          <h2>${safe(tournament.name)}</h2>
          <p>${safe(tournament.summary)}</p>
          <div class="matrix">
            <div class="matrix-item"><strong>Venue</strong><span>${safe(tournament.venue)}, ${safe(tournament.city)}</span></div>
            <div class="matrix-item"><strong>Date</strong><span>${safe(tournament.date)}</span></div>
            <div class="matrix-item"><strong>Capacity profile</strong><span>${safe(tournament.teamCount)} teams</span></div>
            <div class="matrix-item"><strong>Status</strong><span>${safe(tournament.status)}</span></div>
          </div>
          <h3>Divisions</h3>
          ${tagList(tournament.divisions, "green")}
          <h3>Related teams</h3>
          <div class="grid two">${(relatedTeams.length ? relatedTeams : teams.slice(0, 2)).map(teamCard).join("")}</div>
        </article>
        <aside class="detail-aside">
          <h3>Actions</h3>
          <div class="button-row">
            ${tournament.ctas.map(([label, href], index) => button(label, href, index === 0 ? "primary" : "dark")).join("")}
            ${button("Team registration", "/register", "light")}
          </div>
          <h3>Event ops path</h3>
          <ul class="timeline">
            <li>Publish tournament profile and source label.</li>
            <li>Open team registration and ticket inventory.</li>
            <li>Collect roster, waiver, hotel, and division state.</li>
            <li>Feature teams, coaches, players, media, and results.</li>
          </ul>
        </aside>
      </div>
    </section>
  `;
}

function eventsPage() {
  return html`
    ${pageHero(
      "LIT7s.com event features",
      "Featured event detail pages reflect the current LIT7s public content: Florida International 7s, LIT Super 7s Series, London 7s, and USA sevens camp programming.",
      button("Buy tickets", "/tickets", "primary"),
    )}
    <section class="section">
      <div class="grid three">
        ${events
          .map(
            (event) => html`
              <article class="card">
                <div class="card-body">
                  <div class="date-tile"><span>${safe(event.month)}</span><strong>${safe(event.day)}</strong></div>
                  <div class="tag-row"><span class="tag red">${safe(event.label)}</span></div>
                  <h3>${safe(event.title)}</h3>
                  <p>${safe(event.summary)}</p>
                  ${metaList([
                    [icons.calendar, event.date],
                    [icons.pin, event.location],
                  ])}
                  <div class="button-row">${button("Event detail", event.link, "primary small")}</div>
                </div>
              </article>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

function teamCard(team) {
  return html`
    <article class="card light-card">
      <div class="card-body">
        <div class="tag-row">
          <span class="tag red">${safe(team.level)}</span>
          <span class="tag green">${safe(team.base)}</span>
        </div>
        <h3>${safe(team.name)}</h3>
        <p>${safe(team.summary)}</p>
        ${metaList([
          [icons.team, `${team.roster} roster slots`],
          [icons.shield, team.record],
          [icons.calendar, team.tournament],
        ])}
        <div class="button-row">${button("Team profile", `/teams/${team.slug}`, "dark small")}</div>
      </div>
    </article>
  `;
}

function teamsPage() {
  return html`
    ${pageHero(
      "Teams directory",
      "Team cards connect tournament entry, division fit, roster status, player profiles, and manager actions across the tenant.",
      button("Register team", "/register", "primary"),
    )}
    <section class="section light">
      <div class="grid two">${teams.map(teamCard).join("")}</div>
    </section>
  `;
}

function teamDetail(slug) {
  const team = teams.find((item) => item.slug === slug);
  if (!team) return notFoundPage();
  const roster = people.filter((person) => person.team === team.name || person.team.includes(team.name.split(" ")[0]));
  return html`
    ${pageHero(team.name, team.summary, button("Start registration", "/register", "primary"))}
    <section class="section light">
      <div class="detail-layout">
        <article class="detail-main">
          <h2>${safe(team.name)}</h2>
          <p>${safe(team.summary)}</p>
          <div class="matrix">
            <div class="matrix-item"><strong>Base</strong><span>${safe(team.base)}</span></div>
            <div class="matrix-item"><strong>Level</strong><span>${safe(team.level)}</span></div>
            <div class="matrix-item"><strong>Roster</strong><span>${safe(team.roster)} players</span></div>
            <div class="matrix-item"><strong>Event</strong><span>${safe(team.tournament)}</span></div>
          </div>
          <h3>Roster spotlight</h3>
          <div class="grid two">${(roster.length ? roster : people.slice(3, 5)).map(personCard).join("")}</div>
        </article>
        <aside class="detail-aside">
          <h3>Manager checklist</h3>
          <ul class="timeline">
            <li>Confirm division and eligibility.</li>
            <li>Upload player list and manager contact.</li>
            <li>Connect ticket block and accommodation link.</li>
            <li>Publish public team profile after review.</li>
          </ul>
        </aside>
      </div>
    </section>
  `;
}

function personCard(person) {
  return html`
    <article class="card light-card">
      <div class="card-body">
        <div class="profile">
          <div class="avatar">${safe(person.initials)}</div>
          <div>
            <div class="tag-row">
              <span class="tag red">${safe(person.role)}</span>
              <span class="tag">${safe(person.type)}</span>
            </div>
            <h3>${safe(person.name)}</h3>
            <p>${safe(person.position)} - ${safe(person.team)}</p>
            <div class="button-row">${button("View profile", `/players/${person.slug}`, "dark small")}</div>
          </div>
        </div>
      </div>
    </article>
  `;
}

function playersPage() {
  return html`
    ${pageHero(
      "Player and coach profiles",
      "Profiles combine verified LIT7s coach listings with marked mock player examples for the future tenant's athlete discovery experience.",
      button("Search tournaments", "/tournaments", "primary"),
    )}
    <section class="section light">
      <div class="grid two">${people.map(personCard).join("")}</div>
    </section>
  `;
}

function playerDetail(slug) {
  const person = people.find((item) => item.slug === slug);
  if (!person) return notFoundPage();
  return html`
    ${pageHero(person.name, person.bio, button("Related teams", "/teams", "primary"))}
    <section class="section light">
      <div class="detail-layout">
        <article class="detail-main">
          <div class="profile">
            <div class="avatar">${safe(person.initials)}</div>
            <div>
              <h2>${safe(person.name)}</h2>
              <p>${safe(person.role)} - ${safe(person.position)} - ${safe(person.team)}</p>
              ${tagList([person.type, person.role], person.type.includes("Mock") ? "" : "green")}
            </div>
          </div>
          <h3>Profile notes</h3>
          <p>${safe(person.bio)}</p>
          <div class="matrix">
            ${person.stats.map((stat) => `<div class="matrix-item"><strong>${safe(stat)}</strong><span>Profile attribute</span></div>`).join("")}
          </div>
        </article>
        <aside class="detail-aside">
          <h3>Tenant modules</h3>
          <ul class="timeline">
            <li>Bio and media approval.</li>
            <li>Event participation history.</li>
            <li>Coach notes and highlights.</li>
            <li>Recruiting and share controls.</li>
          </ul>
        </aside>
      </div>
    </section>
  `;
}

function ticketsPage() {
  const options = tournaments.filter((item) => item.ctas.length);
  const selected = options.find((item) => item.name === state.ticketSelection) ?? options[0];
  return html`
    ${pageHero(
      "Tickets and event entry",
      "Ticketing and registration CTAs point to the verified public LIT7s links while the tenant checkout panel shows the future app flow.",
      button("Open team registration", "/register", "primary"),
    )}
    <section class="section light">
      <div class="ticket-panel">
        <div class="list">
          ${options
            .map(
              (item) => html`
                <article class="result-row">
                  <div class="score-tile"><span>${safe(item.scope)}</span><strong>${item.score}</strong></div>
                  <div>
                    <h3>${safe(item.name)}</h3>
                    <p>${safe(item.summary)}</p>
                    ${metaList([
                      [icons.ticket, item.status],
                      [icons.pin, item.city],
                    ])}
                  </div>
                  <div class="row-actions">
                    <button class="button dark small" type="button" data-select-ticket="${safe(item.name)}">Select</button>
                    ${button(item.ctas[0][0], item.ctas[0][1], "light small")}
                  </div>
                </article>
              `,
            )
            .join("")}
        </div>
        <aside class="checkout">
          <h2>Checkout preview</h2>
          <p>${safe(selected.name)}</p>
          <div class="checkout-line"><span>Event product</span><strong>${safe(selected.format)}</strong></div>
          <div class="checkout-line"><span>Team capacity</span><strong>${safe(selected.teamCount)}+</strong></div>
          <div class="checkout-line"><span>Status</span><strong>${safe(selected.status)}</strong></div>
          <div class="button-row">
            ${selected.ctas.map(([label, href], index) => button(label, href, index === 0 ? "primary" : "secondary")).join("")}
          </div>
        </aside>
      </div>
    </section>
  `;
}

function registerPage() {
  return html`
    ${pageHero(
      "Team registration",
      "A working front-end intake for team managers: event selection, division, contact, roster count, accommodation needs, and review state.",
      button("Browse events", "/events", "secondary"),
    )}
    <section class="section light">
      <div class="form-grid">
        <form class="form-card" data-registration-form>
          <div class="form-fields">
            <div class="success-box" data-success-box>Draft registration captured for owner review. No payment or provider write was created.</div>
            <div class="form-field">
              <label for="event">Event</label>
              <select id="event" name="event" required>
                ${tournaments
                  .slice(0, 4)
                  .map((item) => `<option>${safe(item.name)}</option>`)
                  .join("")}
              </select>
            </div>
            <div class="form-field">
              <label for="team">Team name</label>
              <input id="team" name="team" required placeholder="Your team" />
            </div>
            <div class="form-field">
              <label for="division">Division</label>
              <select id="division" name="division" required>
                <option>Men's Open</option>
                <option>Women's Open</option>
                <option>Social</option>
                <option>Elite</option>
                <option>U23</option>
                <option>U18</option>
                <option>U16</option>
              </select>
            </div>
            <div class="form-field">
              <label for="manager">Manager email</label>
              <input id="manager" name="manager" type="email" required placeholder="manager@example.com" />
            </div>
            <div class="form-field">
              <label for="roster">Roster size</label>
              <input id="roster" name="roster" type="number" min="7" max="15" value="12" required />
            </div>
            <div class="form-field">
              <label for="notes">Notes</label>
              <textarea id="notes" name="notes" placeholder="Travel, accommodation, eligibility, or roster notes"></textarea>
            </div>
            <button class="button primary" type="submit">Submit draft ${icons.arrow}</button>
          </div>
        </form>
        <aside class="detail-aside">
          <h3>Registration rules surfaced</h3>
          <ul class="timeline">
            <li>LIT7s team registration reference: team of 15 players and one manager.</li>
            <li>Florida reference: online team registration and EventConnect hotel workflow.</li>
            <li>Series rules reference: up to 14 players in Super Sevens rules profile.</li>
            <li>Future tenant: owner review before payment, roster, and compliance writes.</li>
          </ul>
          <div class="button-row">
            ${button("Florida registration", links.floridaRegistration, "dark")}
            ${button("Series team entry", links.super7sTickets, "light")}
          </div>
        </aside>
      </div>
    </section>
  `;
}

function opsPage() {
  return html`
    ${pageHero(
      "Tenant operations",
      "Mobilis and MiGente patterns are translated into a future LIT Rugby tenant: searchable public routes, source labels, review states, event intake, and provider handoff slots.",
      button("Start registration", "/register", "primary"),
    )}
    <section class="section light">
      <div class="grid two">
        <div class="ops-rail">
          ${opsItems
            .map(
              ([title, copy]) => html`
                <article class="ops-item">
                  <div class="ops-icon">${icons.shield}</div>
                  <div><strong>${safe(title)}</strong><p>${safe(copy)}</p></div>
                </article>
              `,
            )
            .join("")}
        </div>
        <article class="form-card">
          <h2>Launch-readiness board</h2>
          <div class="matrix">
            <div class="matrix-item"><strong>Public preview</strong><span>Ready</span></div>
            <div class="matrix-item"><strong>Auth gate</strong><span>Future Clerk owner route</span></div>
            <div class="matrix-item"><strong>Data store</strong><span>Future Supabase event registry</span></div>
            <div class="matrix-item"><strong>Payments</strong><span>External links only</span></div>
            <div class="matrix-item"><strong>Messaging</strong><span>Future WhatsApp/email handoff</span></div>
            <div class="matrix-item"><strong>Publishing</strong><span>Source-labeled review flow</span></div>
          </div>
        </article>
      </div>
    </section>
  `;
}

function notFoundPage() {
  return html`
    ${pageHero("Page not found", "That LIT Rugby route is not in the mockup yet.", button("Return home", "/", "primary"))}
  `;
}

function render() {
  const path = stripBase(window.location.pathname);
  const parts = path.split("/").filter(Boolean);
  let markup;

  if (path === "/" || parts.length === 0) markup = homePage();
  else if (parts[0] === "tournaments" && parts[1]) markup = tournamentDetail(parts[1]);
  else if (parts[0] === "tournaments") markup = tournamentsPage();
  else if (parts[0] === "events") markup = eventsPage();
  else if (parts[0] === "teams" && parts[1]) markup = teamDetail(parts[1]);
  else if (parts[0] === "teams") markup = teamsPage();
  else if (parts[0] === "players" && parts[1]) markup = playerDetail(parts[1]);
  else if (parts[0] === "players") markup = playersPage();
  else if (parts[0] === "tickets") markup = ticketsPage();
  else if (parts[0] === "register") markup = registerPage();
  else if (parts[0] === "ops") markup = opsPage();
  else markup = notFoundPage();

  app.innerHTML = markup;
  app.focus({ preventScroll: true });
  setNavCurrent(window.location.pathname);
  bindPage();
}

function bindPage() {
  app.querySelectorAll("a[data-route]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      nav.classList.remove("open");
      navigate(new URL(link.href).pathname);
    });
  });

  app.querySelector("[data-home-search-submit]")?.addEventListener("click", () => {
    state.query = app.querySelector("[data-home-search]")?.value ?? "";
    navigate("/tournaments");
  });

  app.querySelector("[data-home-search]")?.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      state.query = event.currentTarget.value;
      navigate("/tournaments");
    }
  });

  app.querySelectorAll("[data-home-scope]").forEach((buttonEl) => {
    buttonEl.addEventListener("click", () => {
      state.scope = buttonEl.dataset.homeScope;
      navigate("/tournaments");
    });
  });

  const query = app.querySelector("[data-filter-query]");
  const scope = app.querySelector("[data-filter-scope]");
  const format = app.querySelector("[data-filter-format]");
  const division = app.querySelector("[data-filter-division]");
  [query, scope, format, division].filter(Boolean).forEach((control) => {
    control.addEventListener("input", () => {
      state.query = query?.value ?? "";
      state.scope = scope?.value ?? "All";
      state.format = format?.value ?? "All";
      state.division = division?.value ?? "All";
      render();
    });
  });

  app.querySelectorAll("[data-select-ticket]").forEach((buttonEl) => {
    buttonEl.addEventListener("click", () => {
      state.ticketSelection = buttonEl.dataset.selectTicket;
      showToast(`${state.ticketSelection} selected`);
      render();
    });
  });

  app.querySelector("[data-registration-form]")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const success = app.querySelector("[data-success-box]");
    success?.classList.add("show");
    showToast("Registration draft captured for review");
    event.currentTarget.scrollIntoView({ block: "start", behavior: "smooth" });
  });
}

document.addEventListener("click", (event) => {
  const link = event.target.closest("a[data-route]");
  if (!link || !document.body.contains(link)) return;
  if (link.closest("#app")) return;
  event.preventDefault();
  nav.classList.remove("open");
  navigate(new URL(link.href).pathname);
});

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
  menuToggle.setAttribute("aria-label", nav.classList.contains("open") ? "Close navigation" : "Open navigation");
});

window.addEventListener("popstate", render);
render();
