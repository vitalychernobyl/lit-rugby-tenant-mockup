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
  litCamp: "https://www.lit7s.com/the-olympic-experience-lit-rugby-sevens-camp-usa-2026/",
  imgExperience: "https://www.lit7s.com/the-img-experience-lit-rugby-sevens-camp-usa/",
  floridaTerms: "https://www.lit7s.com/lit-florida-international-7s-terms-conditions/",
  london7s: "https://www.lit7s.com/lit-7s-london7s/",
  super7s: "https://www.super7sseries.com",
  super7sRules: "https://www.super7sseries.com/rules",
  super7sEliteRules: "https://www.super7sseries.com/elite-series-rules",
  super7sOpenSocialRules: "https://www.super7sseries.com/open-and-social-rules",
  super7sTournamentApp: "https://www.super7sseries.com/tournament-app",
  super7sTeams2026: "https://www.super7sseries.com/copy-of-2025-1",
  super7sFixtures2026: "https://www.super7sseries.com/copy-of-2024-1",
  super7sStandings2026: "https://www.super7sseries.com/copy-of-2024-2",
  super7sAlbums: "https://www.facebook.com/LIT7s/photos_albums",
  super7sContact: "https://www.super7sseries.com/contact",
  tournamentInformation: "https://www.lit7s.com/tournament-information/",
  schedule: "https://www.lit7s.com/schedule/",
  whatToPack: "https://www.lit7s.com/what-to-pack/",
  vipTickets: "https://www.lit7s.com/vip-tickets/",
  teamRegistrationInfo: "https://www.lit7s.com/team-registration/",
  competitions: "https://www.lit7s.com/sevens-competitions/",
  prizesAwards: "https://www.lit7s.com/prizes-and-awards/",
  sevensRules: "https://www.lit7s.com/sevens-rules/",
  media: "https://www.lit7s.com/lit7s-media/",
  contact: "https://www.lit7s.com/contact-us/",
  partners: "https://www.lit7s.com/partners-2/",
  becomePartner: "https://www.lit7s.com/sponsor-or-partner-with-lit7s/",
  jobs: "https://www.lit7s.com/jobs/",
  instagram: "https://www.instagram.com/LIT7s/",
  facebook: "https://www.facebook.com/lit7s",
  youtube: "https://www.youtube.com/channel/UCBcTEJS7_GPoL27Srp3ftBw",
  googleMapsWasps: "https://maps.app.goo.gl/rhXD7UExSMua12pB6",
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
    name: "LIT 7s London",
    scope: "Local",
    region: "United Kingdom",
    city: "London",
    venue: "WASPS Rugby Club, West London",
    date: "2026-07-18",
    status: "Spectator tickets and parking",
    format: "Tournament",
    divisions: ["Elite", "Men's Open", "Men's Social", "Women's Open", "Women's Social"],
    teamCount: 70,
    source: "Verified from current LIT7s.com home",
    score: 91,
    summary:
      "The 14th annual LIT7s event in West London, positioned around elite and amateur teams, an all-day bar, live music, DJ, food, cheerleaders, and tournament-party energy.",
    ctas: [
      ["Buy tickets and parking", links.super7sTickets],
      ["VIP tickets", links.vipTickets],
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
    slug: "lit7s-london-2026",
    title: "LIT 7s London 2026",
    day: "18",
    month: "Jul",
    location: "WASPS Rugby Club, West London",
    date: "July 18, 2026",
    label: "14th annual LIT7s",
    summary:
      "The flagship UK tournament profile for 70+ elite and amateur teams, spectator tickets, parking, VIP packages, live music, DJ, food, bars, and media.",
    link: links.london7s,
    tournamentSlug: "london-7s",
    actions: [
      ["Buy tickets and parking", links.super7sTickets],
      ["VIP tickets", links.vipTickets],
      ["Official page", links.london7s],
    ],
    modules: ["Ticketing", "VIP", "Parking", "Media", "Schedule"],
  },
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
    tournamentSlug: "lit-florida-international-7s",
    actions: [
      ["Team registration", links.floridaRegistration],
      ["Book hotels", links.floridaHotels],
      ["Terms", links.floridaTerms],
    ],
    modules: ["Registration", "Hotels", "Youth divisions", "Livestream"],
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
    tournamentSlug: "lit-super-7s-series",
    actions: [
      ["Enter your team", links.super7sTickets],
      ["Spectator tickets", links.super7sTickets],
      ["Series site", links.super7s],
    ],
    modules: ["Series standings", "Team points", "Rules", "Tickets"],
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
    tournamentSlug: "lit-olympic-experience-camp",
    actions: [
      ["Reserve spot", links.imgCheckout],
      ["Camp page", "https://www.lit7s.com/the-olympic-experience-lit-rugby-sevens-camp-usa-2026/"],
      ["IMG experience", "https://www.lit7s.com/the-img-experience-lit-rugby-sevens-camp-usa/"],
    ],
    modules: ["Athlete intake", "Coach profiles", "Fitness testing", "Feedback"],
  },
];

const upcomingEventSlugs = ["lit7s-london-2026", "super-series-2026"];

const pastEvents = [
  {
    slug: "lit7s-2024-winners",
    title: "2024 LIT7s winners",
    date: "July 2024",
    location: "Wasps Rugby Club, West London",
    label: "Winner proof",
    summary:
      "A proof page for published LIT7s winner history, showing how the tenant can convert previous results into credibility for the next event.",
    proof: [
      "Shogun Rugby - Men's Open Cup winners",
      "Wild Dogs Alpha Pack - Women's Open winners",
      "CNCF 7s - Men's Open Plate winners",
      "Surrey Exiles - Men's Social Cup winners",
    ],
    actions: [
      ["Awards mockup", "/info/prizes-and-awards"],
      ["Media hub", "/media"],
      ["Official LIT7s", links.litHome],
    ],
  },
  {
    slug: "lit-florida-2025-archive",
    title: "LIT Florida International 7s archive",
    date: "November 29, 2025",
    location: "Premier Sports Campus, Bradenton",
    label: "USA expansion",
    summary:
      "A past-event archive model for the US tournament: adult and youth divisions, team registration, hotels, livestream, photographers, and entertainment.",
    proof: [
      "Adult and youth division structure",
      "EventConnect registration and hotel workflow",
      "Premier Sports Campus event profile",
      "USA market pathway for future LIT7s events",
    ],
    actions: [
      ["Archive details", "/events/florida-2025"],
      ["Registration reference", links.floridaRegistration],
      ["Hotel reference", links.floridaHotels],
    ],
  },
  {
    slug: "olympic-camp-2026-archive",
    title: "LIT Rugby Sevens Camp USA archive",
    date: "February 27 to March 1, 2026",
    location: "Chula Vista, California",
    label: "Training proof",
    summary:
      "A camp archive model showing how LIT7s can present athlete development, Olympian coaches, testing, feedback, and future camp registration.",
    proof: [
      "Olympian coach profiles connected to player pages",
      "Athlete intake and training modules",
      "Feedback and development story for parents and players",
      "Future camp registration and checkout handoff",
    ],
    actions: [
      ["Camp details", "/events/olympic-experience-2026"],
      ["Coach profiles", "/players"],
      ["Official camp", links.litCamp],
    ],
  },
  {
    slug: "super-7s-2026-series-proof",
    title: "2026 Super 7s Series proof",
    date: "May to July 2026",
    location: "United Kingdom",
    label: "Series momentum",
    summary:
      "A season-proof model for repeat events, fixtures, standings, teams, media albums, and tournament app links that keep the public site alive between event days.",
    proof: [
      "Five-event series model",
      "Elite, open, and social competitions",
      "Fixtures, teams, standings, and albums",
      "Season finale connection to LIT 7s at Wasps",
    ],
    actions: [
      ["Series details", "/events/super-series-2026"],
      ["Standings", links.super7sStandings2026],
      ["Series albums", links.super7sAlbums],
    ],
  },
];

const companyPillars = [
  ["Upcoming event conversion", "Make registration, spectator tickets, parking, VIP, and event details visible before users have to ask."],
  ["Past event proof", "Turn winners, archives, galleries, and camp content into evidence that the LIT7s calendar keeps moving."],
  ["Clear event support", "Answer team, parent, sponsor, media, travel, and rules questions through visible linked pages."],
  ["Media and partner momentum", "Keep social channels, albums, highlights, partners, and company contact paths close to every event."],
];

const faqItems = [
  {
    q: "How do I register a team?",
    a:
      "Use the registration page to pick an event, division, manager contact, roster size, and notes. Official public registration links stay visible for the current LIT7s checkout or EventConnect handoff.",
    links: [
      ["Register team", "/register"],
      ["Team registration info", "/info/team-registration-info"],
      ["Series team entry", links.super7sTickets],
    ],
  },
  {
    q: "How do spectators buy tickets or parking?",
    a:
      "The ticketing page groups spectator, parking, VIP, and team-entry actions by event. LIT 7s London currently points to the public Ticketpass flow surfaced from LIT7s.com.",
    links: [
      ["Ticketing preview", "/tickets"],
      ["VIP tickets", "/info/vip-tickets"],
      ["Public Ticketpass", links.super7sTickets],
    ],
  },
  {
    q: "Which LIT7s events are upcoming?",
    a:
      "As of July 8, 2026, the mockup treats LIT 7s London on July 18, 2026 and the 2026 Super 7s Series path as the main upcoming conversion routes.",
    links: [
      ["Upcoming events", "/events"],
      ["London event", "/events/lit7s-london-2026"],
      ["Series event", "/events/super-series-2026"],
    ],
  },
  {
    q: "Which divisions are available?",
    a:
      "The event models include men's and women's elite, open, social, youth, and camp pathways. Each tournament page can show the exact division mix before a team registers.",
    links: [
      ["Competitions", "/info/sevens-competitions"],
      ["Tournament search", "/tournaments"],
      ["Rules", "/info/sevens-rules"],
    ],
  },
  {
    q: "Where is LIT 7s London held?",
    a:
      "The public LIT7s page places the 2026 LIT 7s event at Wasps Rugby Club in West London, with the venue address and travel notes handled through the tournament information route.",
    links: [
      ["Tournament information", "/info/tournament-information"],
      ["Google Maps", links.googleMapsWasps],
      ["London 7s official page", links.london7s],
    ],
  },
  {
    q: "What should teams bring?",
    a:
      "Players, managers, youth teams, and spectators each get a checklist route so pre-event emails can link to one clean source before match day.",
    links: [
      ["What to pack", "/info/what-to-pack"],
      ["Schedule", "/schedule"],
      ["Contact", "/contact"],
    ],
  },
  {
    q: "Where can I see past events, winners, and media?",
    a:
      "The past-events and media routes turn previous winners, archives, galleries, highlight clips, and social channels into proof that the event series is active and credible.",
    links: [
      ["Past events", "/past-events"],
      ["Media", "/media"],
      ["Awards", "/info/prizes-and-awards"],
    ],
  },
  {
    q: "Is this mockup processing real payments?",
    a:
      "No. This static preview captures only local draft state. Any real purchase, team entry, VIP, hotel, or registration action opens the public external provider or official LIT7s page.",
    links: [
      ["Operations notes", "/ops"],
      ["Tickets", "/tickets"],
      ["Contact LIT7s", "/contact"],
    ],
  },
  {
    q: "How do sponsors, partners, or media contact LIT7s?",
    a:
      "The company, partners, and contact pages route sponsorship, media, jobs, and operational questions into clear inquiry paths with official LIT7s links.",
    links: [
      ["Company", "/company"],
      ["Partners", "/partners"],
      ["Contact", "/contact"],
    ],
  },
];

const mediaCollections = [
  {
    title: "Event galleries",
    summary: "Photo albums grouped by tournament, division, pitch, finals, awards, and team profiles.",
    actions: [
      ["Official media", links.media],
      ["Series albums", links.super7sAlbums],
    ],
  },
  {
    title: "Video and livestream",
    summary: "Highlight reels, livestream clips, coach videos, and social-first moments connected to events and players.",
    actions: [
      ["YouTube", links.youtube],
      ["Super 7s app", links.super7sTournamentApp],
    ],
  },
  {
    title: "Social proof",
    summary: "Instagram, Facebook, and YouTube links surfaced as public proof without pulling private account data into the mock.",
    actions: [
      ["Instagram", links.instagram],
      ["Facebook", links.facebook],
    ],
  },
  {
    title: "Press and partners",
    summary: "Media requests, sponsor deliverables, award moments, and post-event packages routed into company pages.",
    actions: [
      ["Contact", "/contact"],
      ["Partners", "/partners"],
    ],
  },
];

const infoPages = [
  {
    slug: "tournament-information",
    title: "Tournament Information",
    nav: "Info",
    source: links.tournamentInformation,
    summary:
      "A tenant-ready overview page for venue details, arrival guidance, day-of operations, spectator expectations, and source-backed event notes.",
    sections: [
      ["Venue", "WASPS Rugby Club in West London, with a mapped venue link and future embedded travel guidance."],
      ["Public transport", "Surface train, Underground, bus, and disruption notices before match day."],
      ["Timings", "Doors, pool matches, finals, award windows, live music, DJ, and after-party moments."],
      ["Parking", "Advance parking inventory tied to ticketing, carpool guidance, and sold-out messaging."],
    ],
    actions: [
      ["Official information", links.tournamentInformation],
      ["Google Maps", links.googleMapsWasps],
      ["Schedule", "/schedule"],
    ],
  },
  {
    slug: "schedule",
    title: "Schedule",
    nav: "Schedule",
    source: links.schedule,
    summary:
      "A mocked schedule surface for pools, knockout rounds, finals, prize moments, media calls, and party programming.",
    sections: [
      ["Pools", "Team managers can scan fixtures by pitch, division, and bracket stage."],
      ["Knockouts", "Quarterfinals, semifinals, finals, and plate games can be promoted as live result routes."],
      ["Awards", "Prize and player-of-the-tournament moments are surfaced beside media and social prompts."],
      ["Entertainment", "Live music, DJ, food, bar, and cheerleader programming can sit in the same day view."],
    ],
    actions: [
      ["Official schedule", links.schedule],
      ["Tickets", links.super7sTickets],
      ["Tournament details", "/events/lit7s-london-2026"],
    ],
  },
  {
    slug: "what-to-pack",
    title: "What to Pack",
    nav: "Pack",
    source: links.whatToPack,
    summary:
      "A practical checklist for players, managers, families, and spectators, suitable for future pre-event messaging.",
    sections: [
      ["Players", "Boots, mouthguard, tape, recovery gear, spare kit, water bottle, and weather layers."],
      ["Managers", "Roster list, eligibility documents, wristband collection plan, and emergency contact notes."],
      ["Spectators", "Tickets, parking pass, sun/rain gear, charging battery, and food/bar payment method."],
      ["Youth teams", "Consent, guardian contacts, medical notes, and safeguarding confirmations."],
    ],
    actions: [
      ["Official packing page", links.whatToPack],
      ["Register team", "/register"],
      ["Contact LIT7s", "/contact"],
    ],
  },
  {
    slug: "vip-tickets",
    title: "VIP Tickets",
    nav: "VIP",
    source: links.vipTickets,
    summary:
      "A premium ticketing mockup for hospitality packages, reserved areas, team sponsor guests, and owner review states.",
    sections: [
      ["Hospitality", "VIP packages can show inventory, benefits, sponsor allocation, and fulfillment status."],
      ["Guest list", "Owner-managed tables, guest names, and ticket-pass handoff state."],
      ["Perks", "Priority access, viewing area, drinks, food, media moments, and post-event hospitality."],
      ["Controls", "Mock-only checkout preview with external public LIT7s ticket links."],
    ],
    actions: [
      ["Official VIP tickets", links.vipTickets],
      ["Buy tickets", links.super7sTickets],
      ["Ticketing preview", "/tickets"],
    ],
  },
  {
    slug: "team-registration-info",
    title: "Team Registration Info",
    nav: "Team registration",
    source: links.teamRegistrationInfo,
    summary:
      "A source-labeled registration guide for team managers, roster limits, division choice, payment handoff, and review states.",
    sections: [
      ["Team pack", "Team pack pickup, tickets, wristbands, match details, schedule updates, and manager responsibilities."],
      ["Roster", "Public LIT7s team references include manager and player capacity rules; the mockup keeps roster writes local."],
      ["Divisions", "Men's, women's, elite, open, social, U23, U18, and U16 surfaces can be filtered before registration."],
      ["Review", "Tenant owner review happens before any future provider write, payment, or roster lock."],
    ],
    actions: [
      ["Official registration info", links.teamRegistrationInfo],
      ["Register team", "/register"],
      ["Florida registration", links.floridaRegistration],
    ],
  },
  {
    slug: "sevens-competitions",
    title: "Sevens Competitions",
    nav: "Competitions",
    source: links.competitions,
    summary:
      "A division and competition explainer for teams comparing elite, open, social, youth, and camp pathways.",
    sections: [
      ["Elite", "High-level competition cards can expose eligibility, prizes, featured teams, and media coverage."],
      ["Open", "Club and invitational sides can compare event fit, roster readiness, and travel needs."],
      ["Social", "Participation-first divisions can emphasize team experience, scheduling, and post-event content."],
      ["Youth", "Youth divisions can show safeguarding, waivers, age bands, and guardian requirements."],
    ],
    actions: [
      ["Official competitions", links.competitions],
      ["Search tournaments", "/tournaments"],
      ["Sevens rules", "/info/sevens-rules"],
    ],
  },
  {
    slug: "prizes-and-awards",
    title: "Prizes and Awards",
    nav: "Awards",
    source: links.prizesAwards,
    summary:
      "A mocked awards board for tournament winners, social winners, player awards, prize money, trophies, and sponsor moments.",
    sections: [
      ["Open winners", "Cash, medals, trophies, and featured media slots can be shown beside final results."],
      ["Social winners", "Trophies, social prizes, and team-photo moments can be promoted after finals."],
      ["Players", "Player-of-the-tournament awards can connect directly into profile pages."],
      ["Sponsors", "Sponsor-backed awards can carry logo slots and partner links in a future tenant build."],
    ],
    actions: [
      ["Official awards", links.prizesAwards],
      ["Player profiles", "/players"],
      ["Become a partner", links.becomePartner],
    ],
  },
  {
    slug: "sevens-rules",
    title: "Sevens Rules",
    nav: "Rules",
    source: links.sevensRules,
    summary:
      "A rules reference mockup for match length, substitutions, roster limits, tiebreakers, and series-points interpretation.",
    sections: [
      ["Roster rules", "Surface player limits, team manager notes, and division-specific constraints."],
      ["Match format", "Seven-minute halves, pool play, knockout flow, and rest windows can become structured fields."],
      ["Substitutions", "Rolling substitutions and match-day management notes become manager reminders."],
      ["Tiebreakers", "Series and tournament tiebreakers can be displayed as ordered rules with source labels."],
    ],
    actions: [
      ["Official rules", links.sevensRules],
      ["Series profile", "/tournaments/lit-super-7s-series"],
      ["Register team", "/register"],
    ],
  },
  {
    slug: "media",
    title: "Media",
    nav: "Media",
    source: links.media,
    summary:
      "A media hub mockup for photo galleries, highlight clips, social embeds, presenter schedules, and team/player content.",
    sections: [
      ["Photo galleries", "Event galleries can be grouped by tournament, pitch, division, and team."],
      ["Video", "Highlight reels and livestream clips can connect to event and player profiles."],
      ["Social", "Instagram, Facebook, and YouTube can be surfaced without bundling private account data."],
      ["Approvals", "Owner review can manage featured media before publishing to public pages."],
    ],
    actions: [
      ["Official media", links.media],
      ["Instagram", links.instagram],
      ["YouTube", links.youtube],
    ],
  },
  {
    slug: "contact",
    title: "Contact LIT7s",
    nav: "Contact",
    source: links.contact,
    summary:
      "A contact and inquiry mockup for team managers, sponsors, partners, media, jobs, and event operations.",
    sections: [
      ["Team inquiries", "Route team questions to registration, division, roster, and accommodation prompts."],
      ["Partners", "Route sponsorship interest to partner packages and event inventory."],
      ["Media", "Route photographer, livestream, and press requests into an owner-review queue."],
      ["Jobs", "Surface opportunities and staffing links as future owner-managed listings."],
    ],
    actions: [
      ["Official contact", links.contact],
      ["Partners", "/partners"],
      ["Opportunities", links.jobs],
    ],
  },
  {
    slug: "partners",
    title: "Partners and Sponsorship",
    nav: "Partners",
    source: links.partners,
    summary:
      "A partner-facing mockup for sponsor packages, venue activations, media placements, team support, and future CRM handoffs.",
    sections: [
      ["Partner directory", "Official and future partners can be grouped by category, event, entitlement, and renewal state."],
      ["Sponsorship packages", "Packages can expose visibility, pitch-side inventory, VIP allocation, and media deliverables."],
      ["Activation plan", "On-site banners, social posts, awards, hospitality, and team experiences can be tracked by status."],
      ["Owner workflow", "Partner inquiries stay draft-only until approved by the tenant owner and connected to a real CRM."],
    ],
    actions: [
      ["Official partners", links.partners],
      ["Become a partner", links.becomePartner],
      ["Contact LIT7s", "/contact"],
    ],
  },
];

const quickLinks = [
  ["Upcoming Events", "/events"],
  ["Register", "/register"],
  ["Tickets and Parking", "/tickets"],
  ["Past Events", "/past-events"],
  ["FAQ", "/faq"],
  ["Tournament Information", "/info/tournament-information"],
  ["Schedule", "/schedule"],
  ["What to Pack", "/info/what-to-pack"],
  ["VIP Tickets", "/info/vip-tickets"],
  ["Team Registration Info", "/info/team-registration-info"],
  ["Sevens Competitions", "/info/sevens-competitions"],
  ["Prizes and Awards", "/info/prizes-and-awards"],
  ["Sevens Rules", "/info/sevens-rules"],
  ["Media", "/media"],
  ["Company", "/company"],
  ["Contact", "/contact"],
  ["Partners", "/partners"],
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
  ticketSelection: "LIT 7s London",
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

function navLink(label, href, className = "text-link") {
  const external = href.startsWith("http") || href.startsWith("mailto:");
  const attrs = external ? 'target="_blank" rel="noreferrer"' : "data-route";
  const target = external ? href : toRoute(href);
  return `<a class="${safe(className)}" href="${safe(target)}" ${attrs}>${safe(label)}</a>`;
}

function quickLinkList(items = quickLinks) {
  return html`
    <div class="quick-links">
      ${items
        .map(([label, href]) => {
          const external = href.startsWith("http") || href.startsWith("mailto:");
          const attrs = external ? 'target="_blank" rel="noreferrer"' : "data-route";
          const target = external ? href : toRoute(href);
          return `<a class="quick-link" href="${safe(target)}" ${attrs}><span>${safe(label)}</span>${icons.arrow}</a>`;
        })
        .join("")}
    </div>
  `;
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
    <a class="event-mini" href="${toRoute(`/events/${event.slug}`)}" data-route>
      <div class="date-tile"><span>${safe(event.month)}</span><strong>${safe(event.day)}</strong></div>
      <div>
        <h3>${safe(event.title)}</h3>
        <p>${safe(event.location)}</p>
        <p>${safe(event.label)}</p>
      </div>
    </a>
  `;
}

function eventCard(event, light = false) {
  const actions = event.actions ?? [["Official link", event.link]];
  return html`
    <article class="card ${light ? "light-card" : ""}">
      <div class="card-body">
        <div class="date-tile compact"><span>${safe(event.month)}</span><strong>${safe(event.day)}</strong></div>
        <div class="tag-row"><span class="tag green">${safe(event.label)}</span></div>
        <h3>${safe(event.title)}</h3>
        <p>${safe(event.summary)}</p>
        ${metaList([
          [icons.calendar, event.date],
          [icons.pin, event.location],
        ])}
        <div class="button-row">
          ${button("Event details", `/events/${event.slug}`, light ? "dark small" : "secondary small")}
          ${actions
            .slice(0, 2)
            .map(([label, href], index) => button(label, href, index === 0 ? "primary small" : light ? "light small" : "secondary small"))
            .join("")}
        </div>
      </div>
    </article>
  `;
}

function pastEventCard(item, light = false) {
  return html`
    <article class="card ${light ? "light-card" : ""}">
      <div class="card-body">
        <div class="tag-row">
          <span class="tag green">${safe(item.label)}</span>
          <span class="tag orange">${safe(item.date)}</span>
        </div>
        <h3>${safe(item.title)}</h3>
        <p>${safe(item.summary)}</p>
        ${metaList([
          [icons.calendar, item.date],
          [icons.pin, item.location],
        ])}
        <ul class="check-list">
          ${item.proof.slice(0, 4).map((proof) => `<li>${safe(proof)}</li>`).join("")}
        </ul>
        <div class="button-row">
          ${item.actions.map(([label, href], index) => button(label, href, index === 0 ? "primary small" : light ? "light small" : "secondary small")).join("")}
        </div>
      </div>
    </article>
  `;
}

function faqCard(item, open = false) {
  return html`
    <details class="faq-item" ${open ? "open" : ""}>
      <summary>${safe(item.q)}</summary>
      <p>${safe(item.a)}</p>
      <div class="button-row">
        ${item.links.map(([label, href], index) => button(label, href, index === 0 ? "dark small" : "light small")).join("")}
      </div>
    </details>
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
          <span class="tag orange">${safe(tournament.scope)}</span>
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
          <span class="tag orange">${safe(tournament.scope)}</span>
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
  const upcomingEvents = upcomingEventSlugs.map((slug) => events.find((event) => event.slug === slug)).filter(Boolean);
  const featuredSearch = tournaments.slice(0, 3).map((tournament) => tournamentCard(tournament)).join("");
  return html`
    <div class="page">
      <section class="hero">
        <div class="hero-grid">
          <div class="hero-copy">
            <h1>Upcoming LIT7s events and registration</h1>
            <p>
              Find the next LIT7s tournament or series entry, buy spectator tickets and parking,
              register a team, review past event proof, and get answers before event day.
            </p>
            <div class="hero-actions">
              ${button("View upcoming events", "/events", "primary")}
              ${button("Register a team", "/register", "secondary")}
              ${button("Read FAQ", "/faq", "ghost")}
            </div>
            <div class="search-deck" role="search">
              <div class="search-bar">
                <input class="search-input" data-home-search placeholder="Search London tickets, Super 7s, parking, youth, women's open..." value="${safe(
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
              <h2>Next actions</h2>
              <span>Register or attend</span>
            </div>
            <div class="event-stack">${upcomingEvents.map(eventMini).join("")}</div>
            <div class="panel-foot">
              <h3>Fast links</h3>
              ${quickLinkList([
                ["Team registration", "/register"],
                ["Tickets and parking", "/tickets"],
                ["VIP tickets", "/info/vip-tickets"],
                ["What to pack", "/info/what-to-pack"],
                ["Contact LIT7s", "/contact"],
              ])}
            </div>
          </aside>
        </div>
      </section>

      <section class="section">
        <div class="section-head">
          <h2>Upcoming events to register for</h2>
          <p>Each event card pushes the user toward the right next step: team entry, spectator tickets, VIP, parking, schedule, or official details.</p>
        </div>
        <div class="grid two">${upcomingEvents.map((event) => eventCard(event)).join("")}</div>
      </section>

      <section class="section light">
        <div class="section-head">
          <h2>Past events show this is a continuing series</h2>
          <p>Archives, winners, camps, and Super 7s season content create social proof and keep LIT7s useful after the final whistle.</p>
        </div>
        <div class="grid two">${pastEvents.slice(0, 2).map((item) => pastEventCard(item, true)).join("")}</div>
        <div class="section-actions">${button("See past events", "/past-events", "dark")}${button("Open media hub", "/media", "light")}</div>
      </section>

      <section class="section">
        <div class="section-head">
          <h2>Questions answered before event day</h2>
          <p>Teams, spectators, parents, sponsors, and media get route-level answers instead of hunting through scattered links.</p>
        </div>
        <div class="faq-list preview">
          ${faqItems.slice(0, 4).map((item, index) => faqCard(item, index === 0)).join("")}
        </div>
        <div class="section-actions">${button("Open full FAQ", "/faq", "primary")}${button("Contact LIT7s", "/contact", "secondary")}</div>
      </section>

      <section class="section light">
        <div class="section-head">
          <h2>Search still covers the wider rugby market</h2>
          <p>Local, national, and global discovery remains available for the future tenant while the main conversion path stays focused on LIT7s events.</p>
        </div>
        <div class="grid three">${featuredSearch}</div>
      </section>

      <section class="section green-band">
        <div class="section-head">
          <h2>Company, media, and event information are linked</h2>
          <p>Official menu items become tenant-ready pages for schedule, rules, media, FAQ, partners, company info, and manager workflows.</p>
        </div>
        ${quickLinkList([
          ["Company overview", "/company"],
          ["Media hub", "/media"],
          ["FAQ", "/faq"],
          ["Past events", "/past-events"],
          ["Tournament information", "/info/tournament-information"],
          ["Series standings", links.super7sStandings2026],
          ["Teams directory", "/teams"],
          ["Player profiles", "/players"],
        ])}
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
            <span class="tag orange">${safe(tournament.scope)}</span>
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
  const upcoming = upcomingEventSlugs.map((slug) => events.find((event) => event.slug === slug)).filter(Boolean);
  const archive = events.filter((event) => !upcomingEventSlugs.includes(event.slug));
  return html`
    ${pageHero(
      "Upcoming events and registration",
      "The main user path is simple: pick the next LIT7s event, choose team registration or spectator tickets, then use FAQ, schedule, media, and contact pages when questions come up.",
      button("Register a team", "/register", "primary") + button("Tickets and parking", "/tickets", "secondary"),
    )}
    <section class="section">
      <div class="section-head">
        <h2>Open conversion paths</h2>
        <p>LIT 7s London and the 2026 Super 7s Series are treated as the priority event routes for registration, tickets, and event-day information.</p>
      </div>
      <div class="grid three">
        ${upcoming.map((event) => eventCard(event)).join("")}
      </div>
    </section>
    <section class="section light">
      <div class="section-head">
        <h2>Archive and support routes</h2>
        <p>Past or reference event profiles stay discoverable for proof, media, coach profiles, hotels, and future follow-up campaigns.</p>
      </div>
      <div class="grid two">${archive.map((event) => eventCard(event, true)).join("")}</div>
    </section>
    <section class="section green-band">
      <div class="section-head">
        <h2>Common pre-event tasks</h2>
        <p>Every operational question should route to a clear page before someone has to email the organizer.</p>
      </div>
      ${quickLinkList([
        ["Schedule", "/schedule"],
        ["What to pack", "/info/what-to-pack"],
        ["Sevens rules", "/info/sevens-rules"],
        ["FAQ", "/faq"],
        ["Media", "/media"],
        ["Contact", "/contact"],
      ])}
    </section>
  `;
}

function eventDetail(slug) {
  const event = events.find((item) => item.slug === slug);
  if (!event) return notFoundPage();
  const tournament = tournaments.find((item) => item.slug === event.tournamentSlug);
  const actions = event.actions ?? [["Official link", event.link]];
  return html`
    ${pageHero(event.title, event.summary, button(actions[0][0], actions[0][1], "primary"))}
    <section class="section light">
      <div class="detail-layout">
        <article class="detail-main">
          <div class="tag-row">
            <span class="tag green">${safe(event.label)}</span>
            <span class="tag orange">${safe(event.date)}</span>
          </div>
          <h2>${safe(event.title)}</h2>
          <p>${safe(event.summary)}</p>
          <div class="matrix">
            <div class="matrix-item"><strong>Date</strong><span>${safe(event.date)}</span></div>
            <div class="matrix-item"><strong>Location</strong><span>${safe(event.location)}</span></div>
            <div class="matrix-item"><strong>Tenant modules</strong><span>${safe(event.modules.join(", "))}</span></div>
            <div class="matrix-item"><strong>Source posture</strong><span>Official link plus tenant preview</span></div>
          </div>
          <h3>What users need before event day</h3>
          <div class="resource-grid">
            ${[
              ["Registration", "Team managers need event, division, roster size, manager contact, and payment handoff clarity."],
              ["Spectator plan", "Fans need ticket, parking, venue, public transport, schedule, food, bar, and VIP information."],
              ["Proof", "Past winners, media, team profiles, and social channels help prove this is a continuing event series."],
              ["Support", "FAQ, contact, and partner pages answer sponsor, media, parent, and travel questions quickly."],
            ]
              .map(([title, copy]) => `<article class="mini-card"><strong>${safe(title)}</strong><span>${safe(copy)}</span></article>`)
              .join("")}
          </div>
          <h3>Event modules mocked</h3>
          <div class="resource-grid">
            ${event.modules
              .map((module) => `<article class="mini-card"><strong>${safe(module)}</strong><span>Owner-review surface ready for this event.</span></article>`)
              .join("")}
          </div>
          ${
            tournament
              ? html`
                  <h3>Connected tournament</h3>
                  <div class="grid two">${tournamentCard(tournament, true)}</div>
                `
              : ""
          }
        </article>
        <aside class="detail-aside">
          <h3>Clickable actions</h3>
          <div class="button-row stacked">${actions.map(([label, href], index) => button(label, href, index === 0 ? "primary" : "light")).join("")}</div>
          <h3>Related LIT7s pages</h3>
          ${quickLinkList([
            ["Register", "/register"],
            ["Tournament information", "/info/tournament-information"],
            ["Schedule", "/schedule"],
            ["Tickets", "/tickets"],
            ["Media", "/media"],
            ["FAQ", "/faq"],
            ["Past events", "/past-events"],
          ])}
        </aside>
      </div>
    </section>
  `;
}

function infoIndexPage() {
  return html`
    ${pageHero(
      "LIT7s information hub",
      "Official LIT7s menu items are mocked as tenant-ready pages with clear source links, owner-review states, and internal workflows.",
      button("Open registration", "/register", "primary"),
    )}
    <section class="section light">
      <div class="resource-grid wide">
        ${infoPages
          .map(
            (page) => html`
              <article class="mini-card">
                <div class="tag-row"><span class="tag green">${safe(page.nav)}</span></div>
                <h3>${safe(page.title)}</h3>
                <p>${safe(page.summary)}</p>
                <div class="button-row">
                  ${button("Mock page", `/info/${page.slug}`, "dark small")}
                  ${button("Official source", page.source, "light small")}
                </div>
              </article>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

function infoDetail(slug) {
  const page = infoPages.find((item) => item.slug === slug);
  if (!page) return notFoundPage();
  return html`
    ${pageHero(page.title, page.summary, button(page.actions[0][0], page.actions[0][1], "primary"))}
    <section class="section light">
      <div class="detail-layout">
        <article class="detail-main">
          <div class="tag-row">
            <span class="tag green">Mocked tenant page</span>
            <span class="tag">${safe(page.nav)}</span>
          </div>
          <h2>${safe(page.title)}</h2>
          <p>${safe(page.summary)}</p>
          <div class="resource-grid">
            ${page.sections
              .map(([title, copy]) => `<article class="mini-card"><strong>${safe(title)}</strong><span>${safe(copy)}</span></article>`)
              .join("")}
          </div>
          <h3>Source and workflow notes</h3>
          <div class="matrix">
            <div class="matrix-item"><strong>Official source</strong><span>${navLink("Open source", page.source)}</span></div>
            <div class="matrix-item"><strong>Tenant status</strong><span>Mocked, linked, no live provider writes</span></div>
            <div class="matrix-item"><strong>Owner review</strong><span>Ready for content approval and route hardening</span></div>
            <div class="matrix-item"><strong>Next integration</strong><span>CMS data, ticket inventory, media, or CRM based on page type</span></div>
          </div>
        </article>
        <aside class="detail-aside">
          <h3>Actions</h3>
          <div class="button-row stacked">
            ${page.actions.map(([label, href], index) => button(label, href, index === 0 ? "primary" : "light")).join("")}
          </div>
          <h3>More pages</h3>
          ${quickLinkList(quickLinks.filter(([label]) => label !== page.title).slice(0, 7))}
        </aside>
      </div>
    </section>
  `;
}

function schedulePage() {
  return infoDetail("schedule");
}

function pastEventsPage() {
  return html`
    ${pageHero(
      "Past events and social proof",
      "Previous winners, archives, camps, series content, and media routes make the site feel like an active event company rather than a one-off registration form.",
      button("View upcoming events", "/events", "primary") + button("Open media hub", "/media", "secondary"),
    )}
    <section class="section light">
      <div class="grid two">${pastEvents.map((item) => pastEventCard(item, true)).join("")}</div>
    </section>
    <section class="section">
      <div class="section-head">
        <h2>Proof that supports registration</h2>
        <p>These are the proof blocks a future tenant can keep adding after each event: winners, galleries, attendance notes, sponsors, standings, and testimonials.</p>
      </div>
      <div class="resource-grid wide">
        ${[
          ["Winners and awards", "Publish finals, cup, plate, social, and player-of-the-tournament winners with shareable links.", "/info/prizes-and-awards"],
          ["Media galleries", "Keep photos, livestreams, highlight reels, and social posts connected to the event archive.", "/media"],
          ["Team credibility", "Let future teams inspect who has played before, which divisions fit, and how rosters are presented.", "/teams"],
          ["Series momentum", "Connect Super 7s teams, fixtures, standings, and albums so the season does not disappear between event days.", links.super7sStandings2026],
          ["Partner proof", "Show sponsor activations, hospitality, awards, and venue moments for future partner sales.", "/partners"],
          ["Organizer credibility", "Make company, contact, and FAQ pages visible for parents, managers, sponsors, and media.", "/company"],
        ]
          .map(
            ([title, copy, href]) => html`
              <article class="mini-card">
                <h3>${safe(title)}</h3>
                <p>${safe(copy)}</p>
                <div class="button-row">${button("Open", href, "dark small")}</div>
              </article>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

function faqPage() {
  return html`
    ${pageHero(
      "LIT7s FAQ",
      "Answers for team managers, spectators, parents, sponsors, partners, and media before they register, buy tickets, travel, or contact the organizer.",
      button("Register team", "/register", "primary") + button("Tickets and parking", "/tickets", "secondary"),
    )}
    <section class="section light">
      <div class="faq-layout">
        <div class="faq-list">${faqItems.map((item, index) => faqCard(item, index < 2)).join("")}</div>
        <aside class="detail-aside">
          <h3>Most useful links</h3>
          ${quickLinkList([
            ["Upcoming events", "/events"],
            ["Register", "/register"],
            ["Tickets", "/tickets"],
            ["What to pack", "/info/what-to-pack"],
            ["Schedule", "/schedule"],
            ["Contact", "/contact"],
          ])}
          <h3>Official sources</h3>
          ${quickLinkList([
            ["LIT7s.com", links.litHome],
            ["London 7s page", links.london7s],
            ["Super 7s Series", links.super7s],
            ["Ticketpass", links.super7sTickets],
          ])}
        </aside>
      </div>
    </section>
  `;
}

function mediaPage() {
  return html`
    ${pageHero(
      "Media and event proof",
      "A dedicated media hub for galleries, highlight clips, livestream references, social channels, partner deliverables, and post-event proof that supports the next registration push.",
      button("Official media", links.media, "primary") + button("Past events", "/past-events", "secondary"),
    )}
    <section class="section light">
      <div class="resource-grid wide">
        ${mediaCollections
          .map(
            (item) => html`
              <article class="mini-card">
                <h3>${safe(item.title)}</h3>
                <p>${safe(item.summary)}</p>
                <div class="button-row">
                  ${item.actions.map(([label, href], index) => button(label, href, index === 0 ? "dark small" : "light small")).join("")}
                </div>
              </article>
            `,
          )
          .join("")}
      </div>
    </section>
    <section class="section">
      <div class="section-head">
        <h2>Event media should drive the next event</h2>
        <p>Each post-event asset can point back to tickets, registration, teams, players, partners, and proof pages.</p>
      </div>
      <div class="grid two">
        ${pastEvents.slice(0, 2).map((item) => pastEventCard(item)).join("")}
      </div>
    </section>
    <section class="section green-band">
      <div class="section-head">
        <h2>Social and official channels</h2>
        <p>Public channels are reachable from the tenant without pretending to ingest private data.</p>
      </div>
      ${quickLinkList([
        ["Instagram", links.instagram],
        ["Facebook", links.facebook],
        ["YouTube", links.youtube],
        ["Series albums", links.super7sAlbums],
        ["Super 7s tournament app", links.super7sTournamentApp],
        ["Contact media team", "/contact"],
      ])}
    </section>
  `;
}

function contactPage() {
  return infoDetail("contact");
}

function partnersPage() {
  return infoDetail("partners");
}

function companyPage() {
  return html`
    ${pageHero(
      "About LIT7s and the tenant",
      "This mockup presents LIT7s as a continuing rugby sevens event company: upcoming events convert, past events prove, FAQ reduces support load, and media keeps the series visible.",
      button("Upcoming events", "/events", "primary") + button("Contact LIT7s", "/contact", "secondary"),
    )}
    <section class="section light">
      <div class="grid two">
        <article class="detail-main">
          <div class="tag-row">
            <span class="tag green">Event company</span>
            <span class="tag orange">Tenant mockup</span>
          </div>
          <h2>What the site needs to communicate</h2>
          <p>
            LIT7s needs to make upcoming registration obvious, make spectator tickets easy to find,
            show that past events were real and active, and answer practical questions for teams,
            spectators, parents, partners, and media.
          </p>
          <div class="matrix">
            ${companyPillars.map(([title, copy]) => `<div class="matrix-item"><strong>${safe(title)}</strong><span>${safe(copy)}</span></div>`).join("")}
          </div>
          <h3>Tenant capabilities represented</h3>
          <div class="resource-grid">
            ${opsItems
              .slice(0, 4)
              .map(([title, copy]) => `<article class="mini-card"><strong>${safe(title)}</strong><span>${safe(copy)}</span></article>`)
              .join("")}
          </div>
        </article>
        <aside class="detail-aside">
          <h3>Company routes</h3>
          ${quickLinkList([
            ["Official LIT7s", links.litHome],
            ["Upcoming events", "/events"],
            ["Past events", "/past-events"],
            ["Media", "/media"],
            ["Partners", "/partners"],
            ["Jobs", links.jobs],
            ["Contact", "/contact"],
          ])}
          <h3>External ecosystem</h3>
          ${quickLinkList([
            ["Super 7s Series", links.super7s],
            ["Series teams", links.super7sTeams2026],
            ["Series fixtures", links.super7sFixtures2026],
            ["Series standings", links.super7sStandings2026],
          ])}
        </aside>
      </div>
    </section>
  `;
}

function teamCard(team) {
  const tournament = tournaments.find((item) => item.name === team.tournament);
  return html`
    <article class="card light-card">
      <div class="card-body">
        <div class="tag-row">
          <span class="tag orange">${safe(team.level)}</span>
          <span class="tag green">${safe(team.base)}</span>
        </div>
        <h3>${safe(team.name)}</h3>
        <p>${safe(team.summary)}</p>
        ${metaList([
          [icons.team, `${team.roster} roster slots`],
          [icons.shield, team.record],
          [icons.calendar, team.tournament],
        ])}
        <div class="button-row">
          ${button("Team profile", `/teams/${team.slug}`, "dark small")}
          ${tournament ? button("Event", `/tournaments/${tournament.slug}`, "light small") : ""}
        </div>
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
  const tournament = tournaments.find((item) => item.name === team.tournament);
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
          <h3>Actions</h3>
          <div class="button-row stacked">
            ${button("Register team", "/register", "primary")}
            ${tournament ? button("Tournament", `/tournaments/${tournament.slug}`, "light") : ""}
            ${button("Tickets", "/tickets", "light")}
          </div>
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
  const team = teams.find((item) => item.name === person.team);
  return html`
    <article class="card light-card">
      <div class="card-body">
        <div class="profile">
          <div class="avatar">${safe(person.initials)}</div>
          <div>
            <div class="tag-row">
              <span class="tag orange">${safe(person.role)}</span>
              <span class="tag">${safe(person.type)}</span>
            </div>
            <h3>${safe(person.name)}</h3>
            <p>${safe(person.position)} - ${safe(person.team)}</p>
            <div class="button-row">
              ${button("View profile", `/players/${person.slug}`, "dark small")}
              ${team ? button("Team", `/teams/${team.slug}`, "light small") : ""}
            </div>
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
  const team = teams.find((item) => item.name === person.team);
  return html`
    ${pageHero(person.name, person.bio, button(team ? "Team profile" : "Related teams", team ? `/teams/${team.slug}` : "/teams", "primary"))}
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
          <h3>Actions</h3>
          <div class="button-row stacked">
            ${team ? button("Open team", `/teams/${team.slug}`, "primary") : ""}
            ${button("Players directory", "/players", "light")}
            ${button("Media hub", "/media", "light")}
          </div>
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
      "Tickets, parking, and event entry",
      "Ticketing and registration CTAs point to verified public LIT7s links while the tenant checkout panel shows the future app flow for spectators, VIP guests, parking, and team managers.",
      button("Open team registration", "/register", "primary") + button("Read ticket FAQ", "/faq", "secondary"),
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
          <h3>Useful ticket links</h3>
          ${quickLinkList([
            ["VIP tickets", "/info/vip-tickets"],
            ["Schedule", "/schedule"],
            ["Venue and parking", "/info/tournament-information"],
            ["FAQ", "/faq"],
          ])}
        </aside>
      </div>
    </section>
  `;
}

function registerPage() {
  const registrationOptions = [
    "LIT 7s London",
    "LIT Super 7s Series",
    "LIT Florida International 7s",
    "The Olympic Experience LIT Rugby Sevens Camp USA",
  ];
  return html`
    ${pageHero(
      "Register for upcoming LIT7s events",
      "A working front-end intake for team managers: choose the event, division, manager contact, roster count, accommodation needs, and review state before opening the official public handoff.",
      button("Browse upcoming events", "/events", "primary") + button("Registration FAQ", "/faq", "secondary"),
    )}
    <section class="section light">
      <div class="form-grid">
        <form class="form-card" data-registration-form>
          <div class="form-fields">
            <div class="success-box" data-success-box>Draft registration captured for owner review. No payment or provider write was created.</div>
            <div class="form-field">
              <label for="event">Event</label>
              <select id="event" name="event" required>
                ${registrationOptions.map((item) => `<option>${safe(item)}</option>`).join("")}
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
          <h3>Before registering</h3>
          ${quickLinkList([
            ["Upcoming events", "/events"],
            ["Team registration info", "/info/team-registration-info"],
            ["Sevens competitions", "/info/sevens-competitions"],
            ["Sevens rules", "/info/sevens-rules"],
            ["What to pack", "/info/what-to-pack"],
            ["Contact LIT7s", "/contact"],
          ])}
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
  else if (parts[0] === "events" && parts[1]) markup = eventDetail(parts[1]);
  else if (parts[0] === "events") markup = eventsPage();
  else if (parts[0] === "upcoming") markup = eventsPage();
  else if (parts[0] === "past-events") markup = pastEventsPage();
  else if (parts[0] === "faq") markup = faqPage();
  else if (parts[0] === "info" && parts[1]) markup = infoDetail(parts[1]);
  else if (parts[0] === "info") markup = infoIndexPage();
  else if (parts[0] === "schedule") markup = schedulePage();
  else if (parts[0] === "media") markup = mediaPage();
  else if (parts[0] === "company") markup = companyPage();
  else if (parts[0] === "contact") markup = contactPage();
  else if (parts[0] === "partners") markup = partnersPage();
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
