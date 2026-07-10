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
  worldRugby: "https://www.world.rugby/tournaments/fixtures-results?lang=en",
  svns: "https://www.svns.com/",
  nationsChampionship: "https://nationschampionshiprugby.com/",
  usaClub: "https://usaclub.rugby/",
  litHome: "https://www.lit7s.com/",
  litLondon: "https://www.lit7s.com/lit-7s-london7s/",
  litTickets: "https://ticketpass.org/event/EWDVGH/lit-super-sevens-series-2026-team-entry",
  litSeries: "https://www.super7sseries.com",
  sixNations: "https://www.sixnationsrugby.com/en/m6n",
  womensSixNations: "https://www.sixnationsrugby.com/en/w6n",
  rugbyChampionship: "https://super.rugby/therugbychampionship/",
  superRugby: "https://super.rugby/superrugby/",
  epcr: "https://www.epcrugby.com/",
  urc: "https://www.unitedrugby.com/",
  premiership: "https://www.premiershiprugby.com/",
  top14: "https://www.lnr.fr/rugby-top-14",
  japanLeagueOne: "https://league-one.jp/en/",
  mlr: "https://www.majorleague.rugby/",
};

const competitions = [
  {
    slug: "mens-rugby-world-cup-2027",
    name: "Men's Rugby World Cup 2027",
    code: "15s",
    scope: "Global",
    level: "International",
    region: "World Rugby",
    city: "Australia host cities",
    venue: "National stadium network",
    date: "2027 season",
    status: "Future global flagship",
    gender: "Men",
    divisions: ["Men's international", "National teams", "Knockout rugby"],
    source: "World Rugby official ecosystem",
    summary:
      "The top men's 15s tournament profile, modeled for fixtures, national-team pages, travel, ticket demand, pools, knockouts, media, and official source handoff.",
    ctas: [
      ["World Rugby fixtures", links.worldRugby],
      ["Follow tournament", "/events/mens-rugby-world-cup-2027"],
    ],
    score: 100,
  },
  {
    slug: "womens-rugby-world-cup",
    name: "Women's Rugby World Cup",
    code: "15s",
    scope: "Global",
    level: "International",
    region: "World Rugby",
    city: "Global hosts",
    venue: "Host venues",
    date: "World Rugby cycle",
    status: "World championship",
    gender: "Women",
    divisions: ["Women's international", "National teams"],
    source: "World Rugby official ecosystem",
    summary:
      "Global women's 15s profile for national-team discovery, fixtures, event guides, media proof, fan routes, and future ticketing integrations.",
    ctas: [
      ["World Rugby fixtures", links.worldRugby],
      ["Women's profiles", "/players"],
    ],
    score: 99,
  },
  {
    slug: "hsbc-svns-world-series",
    name: "HSBC SVNS World Series",
    code: "7s",
    scope: "Global",
    level: "International",
    region: "World Rugby",
    city: "Dubai, Cape Town, Singapore, Vancouver, Hong Kong, Valladolid, Bordeaux",
    venue: "World Rugby SVNS host venues",
    date: "2026 calendar",
    status: "Global sevens series",
    gender: "Men and women",
    divisions: ["Men's international", "Women's international", "Core teams", "SVNS 2 and SVNS 3"],
    source: "SVNS and World Rugby official sources",
    summary:
      "Global sevens series directory profile with destination pages, national-team rosters, standings, travel, tickets, broadcast links, and social media proof.",
    ctas: [
      ["SVNS official site", links.svns],
      ["Browse sevens", "/sevens"],
    ],
    score: 98,
  },
  {
    slug: "world-rugby-nations-championship",
    name: "World Rugby Nations Championship",
    code: "15s",
    scope: "Global",
    level: "International",
    region: "Northern and Southern Hemisphere",
    city: "Multi-country",
    venue: "International windows",
    date: "2026 launch cycle",
    status: "New elite international model",
    gender: "Men",
    divisions: ["Tier one nations", "Cross-hemisphere fixtures"],
    source: "Nations Championship official site",
    summary:
      "Elite 15s tournament model for the biggest international unions, built for fixtures, nation pages, rivalry content, tickets, media, and season-long standings.",
    ctas: [
      ["Official site", links.nationsChampionship],
      ["Nation pages", "/nations"],
    ],
    score: 97,
  },
  {
    slug: "six-nations",
    name: "Six Nations Championship",
    code: "15s",
    scope: "International",
    level: "International",
    region: "Europe",
    city: "England, France, Ireland, Italy, Scotland, Wales",
    venue: "National stadiums",
    date: "Annual championship",
    status: "Annual international tournament",
    gender: "Men",
    divisions: ["Men's international", "European nations"],
    source: "Official competition site",
    summary:
      "European international 15s profile for fixtures, tables, tickets, historic rivalries, fan travel, media, and national-team communities.",
    ctas: [
      ["Official site", links.sixNations],
      ["Nation index", "/nations"],
    ],
    score: 96,
  },
  {
    slug: "womens-six-nations",
    name: "Women's Six Nations",
    code: "15s",
    scope: "International",
    level: "International",
    region: "Europe",
    city: "European national venues",
    venue: "National stadiums",
    date: "Annual championship",
    status: "Women's international tournament",
    gender: "Women",
    divisions: ["Women's international", "European nations"],
    source: "Official competition site",
    summary:
      "Women's European 15s tournament profile for schedules, national-team pages, player spotlights, social proof, and fan conversion.",
    ctas: [
      ["Official site", links.womensSixNations],
      ["Women's profiles", "/players"],
    ],
    score: 95,
  },
  {
    slug: "rugby-championship",
    name: "The Rugby Championship",
    code: "15s",
    scope: "International",
    level: "International",
    region: "Southern Hemisphere",
    city: "Argentina, Australia, New Zealand, South Africa",
    venue: "National stadiums",
    date: "Annual championship",
    status: "Elite international tournament",
    gender: "Men",
    divisions: ["Men's international", "Southern Hemisphere"],
    source: "SANZAAR / Super Rugby official ecosystem",
    summary:
      "Southern Hemisphere national-team championship profile with fixtures, tables, match hubs, nation pages, broadcast links, and ticket routes.",
    ctas: [
      ["Official site", links.rugbyChampionship],
      ["Nation index", "/nations"],
    ],
    score: 94,
  },
  {
    slug: "pacific-nations-cup",
    name: "Pacific Nations Cup",
    code: "15s",
    scope: "International",
    level: "International",
    region: "Pacific",
    city: "Pacific and North American host cities",
    venue: "Rotating venues",
    date: "Annual cycle",
    status: "International pathway",
    gender: "Men",
    divisions: ["Pacific unions", "National teams", "Pathway rugby"],
    source: "World Rugby tournament ecosystem",
    summary:
      "Regional international 15s profile for Pacific unions, fixtures, development pathways, travel, and nation-to-player discovery.",
    ctas: [
      ["World Rugby fixtures", links.worldRugby],
      ["Browse nations", "/nations"],
    ],
    score: 90,
  },
  {
    slug: "wxv",
    name: "WXV",
    code: "15s",
    scope: "Global",
    level: "International",
    region: "World Rugby",
    city: "Rotating host markets",
    venue: "International host venues",
    date: "Women's global cycle",
    status: "Women's international competition",
    gender: "Women",
    divisions: ["Women's international", "Global tiers"],
    source: "World Rugby tournament ecosystem",
    summary:
      "Women's global 15s competition profile for standings, fixtures, nation pages, player profiles, and tournament media.",
    ctas: [
      ["World Rugby fixtures", links.worldRugby],
      ["Media hub", "/media"],
    ],
    score: 92,
  },
  {
    slug: "rugby-europe-championship",
    name: "Rugby Europe Championship",
    code: "15s",
    scope: "Continental",
    level: "International",
    region: "Europe",
    city: "European host nations",
    venue: "National and regional stadiums",
    date: "Annual cycle",
    status: "Continental international tournament",
    gender: "Men",
    divisions: ["European nations", "Pathway rugby"],
    source: "Federation directory seed",
    summary:
      "Continental 15s competition profile for unions outside the Six Nations, supporting fixtures, ranking context, and fan discovery.",
    ctas: [
      ["World Rugby fixtures", links.worldRugby],
      ["Submit update", "/submit"],
    ],
    score: 86,
  },
  {
    slug: "asia-rugby-championship",
    name: "Asia Rugby Championship",
    code: "15s",
    scope: "Continental",
    level: "International",
    region: "Asia",
    city: "Asian host nations",
    venue: "Rotating venues",
    date: "Annual cycle",
    status: "Continental international tournament",
    gender: "Men and women",
    divisions: ["Asian unions", "Men's", "Women's", "Pathway rugby"],
    source: "Federation directory seed",
    summary:
      "Asian continental rugby profile built for national teams, qualification pathways, local hosts, media, and union source updates.",
    ctas: [
      ["World Rugby fixtures", links.worldRugby],
      ["Submit update", "/submit"],
    ],
    score: 84,
  },
  {
    slug: "rugby-africa-cup",
    name: "Rugby Africa Cup",
    code: "15s",
    scope: "Continental",
    level: "International",
    region: "Africa",
    city: "African host nations",
    venue: "Rotating venues",
    date: "Annual cycle",
    status: "Continental international tournament",
    gender: "Men and women",
    divisions: ["African unions", "Qualification pathway"],
    source: "Federation directory seed",
    summary:
      "African continental profile for national-team discovery, qualification routes, match centers, local media, and federation updates.",
    ctas: [
      ["World Rugby fixtures", links.worldRugby],
      ["Submit update", "/submit"],
    ],
    score: 83,
  },
  {
    slug: "sudamerica-rugby-championship",
    name: "Sudamerica Rugby Championship",
    code: "15s",
    scope: "Continental",
    level: "International",
    region: "South America",
    city: "South American host nations",
    venue: "Rotating venues",
    date: "Annual cycle",
    status: "Continental international tournament",
    gender: "Men and women",
    divisions: ["South American unions", "Qualification pathway"],
    source: "Federation directory seed",
    summary:
      "South American rugby profile for international fixtures, union pages, regional rivalries, standings, and media coverage.",
    ctas: [
      ["World Rugby fixtures", links.worldRugby],
      ["Submit update", "/submit"],
    ],
    score: 82,
  },
  {
    slug: "world-rugby-u20-championship",
    name: "World Rugby U20 Championship",
    code: "15s",
    scope: "Global",
    level: "Youth",
    region: "World Rugby",
    city: "Rotating host",
    venue: "Tournament host venues",
    date: "Annual cycle",
    status: "Age-grade world championship",
    gender: "Men",
    divisions: ["U20", "National teams", "Talent pathway"],
    source: "World Rugby tournament ecosystem",
    summary:
      "Age-grade global championship profile that connects national programs, scouts, players, media, fixtures, and pathway stories.",
    ctas: [
      ["World Rugby fixtures", links.worldRugby],
      ["Player profiles", "/players"],
    ],
    score: 88,
  },
  {
    slug: "olympic-rugby-sevens",
    name: "Olympic Rugby Sevens",
    code: "7s",
    scope: "Global",
    level: "International",
    region: "Olympic movement",
    city: "Olympic host city",
    venue: "Olympic venue",
    date: "Olympic cycle",
    status: "Olympic tournament",
    gender: "Men and women",
    divisions: ["Men's national teams", "Women's national teams", "Qualification"],
    source: "World Rugby and Olympic ecosystem",
    summary:
      "Olympic sevens profile for qualification, national teams, athlete profiles, fan travel, media, and social conversation.",
    ctas: [
      ["World Rugby fixtures", links.worldRugby],
      ["Sevens index", "/sevens"],
    ],
    score: 93,
  },
  {
    slug: "rugby-world-cup-sevens",
    name: "Rugby World Cup Sevens",
    code: "7s",
    scope: "Global",
    level: "International",
    region: "World Rugby",
    city: "Rotating host",
    venue: "World Cup Sevens venue",
    date: "World Cup cycle",
    status: "World sevens championship",
    gender: "Men and women",
    divisions: ["Men's national teams", "Women's national teams"],
    source: "World Rugby tournament ecosystem",
    summary:
      "Knockout-style global sevens championship profile for teams, brackets, tickets, broadcast, highlights, and fan communities.",
    ctas: [
      ["World Rugby fixtures", links.worldRugby],
      ["Sevens index", "/sevens"],
    ],
    score: 91,
  },
  {
    slug: "dubai-7s",
    name: "Dubai 7s",
    code: "7s",
    scope: "Global",
    level: "Community",
    region: "United Arab Emirates",
    city: "Dubai",
    venue: "The Sevens Stadium",
    date: "Annual festival",
    status: "Tournament and festival",
    gender: "Men and women",
    divisions: ["Elite", "Open", "Social", "Youth", "Invitational"],
    source: "Global sevens directory seed",
    summary:
      "Large sevens festival profile for elite, invitational, club, social, youth, travel, entertainment, tickets, and team registration pathways.",
    ctas: [
      ["Browse sevens", "/sevens"],
      ["Submit team interest", "/register"],
    ],
    score: 87,
  },
  {
    slug: "lit7s-london",
    name: "LIT 7s London",
    code: "7s",
    scope: "Local",
    level: "Community",
    region: "United Kingdom",
    city: "West London",
    venue: "Wasps Rugby Club",
    date: "July 18, 2026",
    status: "Tickets and parking live",
    gender: "Men and women",
    divisions: ["Elite", "Men's Open", "Men's Social", "Women's Open", "Women's Social"],
    source: "LIT7s official event family",
    summary:
      "LIT's flagship London sevens event, now presented as one strong operator profile inside a broader global rugby tournament directory.",
    ctas: [
      ["Buy tickets", links.litTickets],
      ["LIT7s event page", links.litLondon],
      ["Event details", "/events/lit7s-london-2026"],
    ],
    score: 89,
  },
  {
    slug: "lit-super-7s-series",
    name: "LIT Super 7s Series",
    code: "7s",
    scope: "National",
    level: "Community",
    region: "United Kingdom",
    city: "Multi-stop UK",
    venue: "Series venues",
    date: "2026 season",
    status: "Series entries",
    gender: "Men and women",
    divisions: ["Elite", "Open", "Social", "Men's", "Women's"],
    source: "LIT7s official event family",
    summary:
      "UK sevens series profile for teams, fixtures, standings, rules, registration, albums, repeat attendance, and season momentum.",
    ctas: [
      ["Series site", links.litSeries],
      ["Enter team", links.litTickets],
      ["Series profile", "/events/lit-super-7s-series-2026"],
    ],
    score: 88,
  },
  {
    slug: "usa-club-sevens-national-championships",
    name: "USA Club 7s National Championships",
    code: "7s",
    scope: "National",
    level: "Club",
    region: "United States",
    city: "Rotating host",
    venue: "Qualifier and championship venues",
    date: "Annual club season",
    status: "National club pathway",
    gender: "Men and women",
    divisions: ["Men's club", "Women's club", "Qualifiers"],
    source: "USA Club Rugby official ecosystem",
    summary:
      "US club sevens pathway profile for qualifiers, national championships, club pages, rosters, standings, and local-to-national progression.",
    ctas: [
      ["USA Club Rugby", links.usaClub],
      ["Club index", "/clubs"],
    ],
    score: 86,
  },
  {
    slug: "epcr-champions-cup",
    name: "Investec Champions Cup",
    code: "15s",
    scope: "Continental",
    level: "Club",
    region: "Europe and South Africa",
    city: "Multi-country",
    venue: "Qualified club venues",
    date: "Club season",
    status: "Elite club championship",
    gender: "Men",
    divisions: ["Professional clubs", "Knockout rugby"],
    source: "EPCR official ecosystem",
    summary:
      "Top cross-border club 15s competition profile for fixtures, team pages, tickets, pools, knockouts, and supporter travel.",
    ctas: [
      ["EPCR official", links.epcr],
      ["Club index", "/clubs"],
    ],
    score: 95,
  },
  {
    slug: "epcr-challenge-cup",
    name: "EPCR Challenge Cup",
    code: "15s",
    scope: "Continental",
    level: "Club",
    region: "Europe and South Africa",
    city: "Multi-country",
    venue: "Qualified club venues",
    date: "Club season",
    status: "European club competition",
    gender: "Men",
    divisions: ["Professional clubs", "Knockout rugby"],
    source: "EPCR official ecosystem",
    summary:
      "European club tournament profile for competitive club discovery, fixtures, tables, ticket links, and supporter communities.",
    ctas: [
      ["EPCR official", links.epcr],
      ["Club index", "/clubs"],
    ],
    score: 90,
  },
  {
    slug: "united-rugby-championship",
    name: "United Rugby Championship",
    code: "15s",
    scope: "Continental",
    level: "Club",
    region: "Ireland, Italy, Scotland, South Africa, Wales",
    city: "Multi-country",
    venue: "Club grounds",
    date: "Club season",
    status: "Professional league",
    gender: "Men",
    divisions: ["Professional clubs", "League and playoffs"],
    source: "URC official ecosystem",
    summary:
      "Cross-border professional club league profile for fixtures, club pages, standings, tickets, media, and fan communities.",
    ctas: [
      ["URC official", links.urc],
      ["Club index", "/clubs"],
    ],
    score: 94,
  },
  {
    slug: "premiership-rugby",
    name: "Premiership Rugby",
    code: "15s",
    scope: "National",
    level: "Club",
    region: "England",
    city: "England",
    venue: "Club grounds",
    date: "Club season",
    status: "Professional league",
    gender: "Men",
    divisions: ["Professional clubs", "League and playoffs"],
    source: "Premiership Rugby official ecosystem",
    summary:
      "England's top professional club league profile for club pages, fixtures, tickets, news, tables, media, and supporter groups.",
    ctas: [
      ["Official site", links.premiership],
      ["Club index", "/clubs"],
    ],
    score: 93,
  },
  {
    slug: "top-14",
    name: "Top 14",
    code: "15s",
    scope: "National",
    level: "Club",
    region: "France",
    city: "France",
    venue: "Club grounds",
    date: "Club season",
    status: "Professional league",
    gender: "Men",
    divisions: ["Professional clubs", "League and playoffs"],
    source: "LNR official ecosystem",
    summary:
      "French professional 15s league profile for club pages, tickets, fixtures, standings, media, and regional fan communities.",
    ctas: [
      ["Official site", links.top14],
      ["Club index", "/clubs"],
    ],
    score: 93,
  },
  {
    slug: "super-rugby-pacific",
    name: "Super Rugby Pacific",
    code: "15s",
    scope: "Regional",
    level: "Club",
    region: "Australia, New Zealand, Fiji, Pacific",
    city: "Pacific region",
    venue: "Club and franchise venues",
    date: "Club season",
    status: "Professional regional league",
    gender: "Men",
    divisions: ["Professional franchises", "Pacific rugby"],
    source: "Super Rugby official ecosystem",
    summary:
      "Pacific professional 15s league profile for franchises, fixtures, tickets, standings, media, and regional supporter pages.",
    ctas: [
      ["Official site", links.superRugby],
      ["Club index", "/clubs"],
    ],
    score: 92,
  },
  {
    slug: "japan-rugby-league-one",
    name: "Japan Rugby League One",
    code: "15s",
    scope: "National",
    level: "Club",
    region: "Japan",
    city: "Japan",
    venue: "Club grounds",
    date: "Club season",
    status: "Professional league",
    gender: "Men",
    divisions: ["Professional clubs", "Divisions"],
    source: "Japan Rugby League One official ecosystem",
    summary:
      "Japanese professional 15s profile for club pages, fixtures, standings, tickets, foreign players, media, and fan discovery.",
    ctas: [
      ["Official site", links.japanLeagueOne],
      ["Club index", "/clubs"],
    ],
    score: 91,
  },
  {
    slug: "major-league-rugby",
    name: "Major League Rugby",
    code: "15s",
    scope: "National",
    level: "Club",
    region: "United States and Canada",
    city: "North America",
    venue: "Club grounds",
    date: "Club season",
    status: "Professional league",
    gender: "Men",
    divisions: ["Professional clubs", "North American rugby"],
    source: "MLR official ecosystem",
    summary:
      "North American professional 15s league profile for teams, fixtures, tickets, standings, player profiles, media, and local fan groups.",
    ctas: [
      ["Official site", links.mlr],
      ["Club index", "/clubs"],
    ],
    score: 90,
  },
  {
    slug: "currie-cup",
    name: "Currie Cup",
    code: "15s",
    scope: "National",
    level: "Club",
    region: "South Africa",
    city: "South Africa",
    venue: "Provincial venues",
    date: "Domestic season",
    status: "Provincial championship",
    gender: "Men",
    divisions: ["Provincial teams", "Domestic championship"],
    source: "Global directory seed",
    summary:
      "South African provincial championship profile for historic teams, fixtures, standings, media, and regional supporter communities.",
    ctas: [
      ["Club index", "/clubs"],
      ["Submit update", "/submit"],
    ],
    score: 86,
  },
  {
    slug: "npc",
    name: "New Zealand NPC",
    code: "15s",
    scope: "National",
    level: "Club",
    region: "New Zealand",
    city: "New Zealand",
    venue: "Provincial venues",
    date: "Domestic season",
    status: "Provincial championship",
    gender: "Men",
    divisions: ["Provincial unions", "Domestic championship"],
    source: "Global directory seed",
    summary:
      "New Zealand provincial competition profile for unions, fixtures, standings, local fans, player development, and media.",
    ctas: [
      ["Club index", "/clubs"],
      ["Submit update", "/submit"],
    ],
    score: 85,
  },
  {
    slug: "farah-palmer-cup",
    name: "Farah Palmer Cup",
    code: "15s",
    scope: "National",
    level: "Club",
    region: "New Zealand",
    city: "New Zealand",
    venue: "Provincial venues",
    date: "Domestic season",
    status: "Women's provincial championship",
    gender: "Women",
    divisions: ["Women's provincial unions", "Domestic championship"],
    source: "Global directory seed",
    summary:
      "Women's provincial 15s profile for teams, fixtures, standings, player stories, regional fans, and media proof.",
    ctas: [
      ["Women's profiles", "/players"],
      ["Submit update", "/submit"],
    ],
    score: 84,
  },
  {
    slug: "shute-shield",
    name: "Shute Shield",
    code: "15s",
    scope: "Regional",
    level: "Community",
    region: "Sydney, Australia",
    city: "Sydney",
    venue: "Club grounds",
    date: "Local club season",
    status: "Premier community club competition",
    gender: "Men",
    divisions: ["Premier clubs", "Community rugby"],
    source: "Community directory seed",
    summary:
      "Premier local club competition profile for fixtures, clubs, grounds, player discovery, local supporters, and social proof.",
    ctas: [
      ["Community index", "/community"],
      ["Submit update", "/submit"],
    ],
    score: 80,
  },
  {
    slug: "usa-club-xvs-national-championships",
    name: "USA Club Rugby XVs National Championships",
    code: "15s",
    scope: "National",
    level: "Club",
    region: "United States",
    city: "Rotating host",
    venue: "Championship venue",
    date: "Annual club season",
    status: "National club championship",
    gender: "Men and women",
    divisions: ["Men's club", "Women's club", "Division I", "Division II", "Division III"],
    source: "USA Club Rugby official ecosystem",
    summary:
      "US club 15s national championship profile for qualification, divisions, team pages, rosters, results, and local-to-national storytelling.",
    ctas: [
      ["USA Club Rugby", links.usaClub],
      ["Club index", "/clubs"],
    ],
    score: 85,
  },
  {
    slug: "bingham-cup",
    name: "Bingham Cup",
    code: "15s",
    scope: "Global",
    level: "Community",
    region: "Global host rotation",
    city: "Rotating host city",
    venue: "Tournament host venues",
    date: "Tournament cycle",
    status: "Inclusive community tournament",
    gender: "Open and inclusive",
    divisions: ["Inclusive rugby", "Community clubs"],
    source: "Community directory seed",
    summary:
      "Global inclusive rugby tournament profile for teams, travel, community groups, registration, media, and social proof.",
    ctas: [
      ["Community index", "/community"],
      ["Submit update", "/submit"],
    ],
    score: 81,
  },
  {
    slug: "sanix-world-rugby-youth",
    name: "Sanix World Rugby Youth Tournament",
    code: "15s",
    scope: "Global",
    level: "Youth",
    region: "Japan",
    city: "Fukuoka region",
    venue: "Youth tournament venues",
    date: "Annual youth cycle",
    status: "Youth invitational",
    gender: "Boys and girls",
    divisions: ["School teams", "Youth invitational"],
    source: "Youth directory seed",
    summary:
      "International youth tournament profile for schools, scouting, travel, player profiles, safeguarding notes, and media.",
    ctas: [
      ["Player profiles", "/players"],
      ["Submit update", "/submit"],
    ],
    score: 79,
  },
];

const events = [
  {
    slug: "lit7s-london-2026",
    title: "LIT 7s London 2026",
    day: "18",
    month: "Jul",
    location: "Wasps Rugby Club, West London",
    date: "July 18, 2026",
    label: "Featured 7s event",
    tournamentSlug: "lit7s-london",
    summary:
      "A live LIT operator event inside the global directory, with spectator tickets, parking, team registration routes, VIP, media, and event-day information.",
    actions: [
      ["Buy tickets", links.litTickets],
      ["LIT7s event page", links.litLondon],
      ["Register interest", "/register"],
    ],
    modules: ["Tickets", "Parking", "VIP", "Team entry", "Media"],
  },
  {
    slug: "hsbc-svns-2026",
    title: "HSBC SVNS 2026",
    day: "2026",
    month: "SVNS",
    location: "Global destination series",
    date: "2026 calendar",
    label: "Global sevens",
    tournamentSlug: "hsbc-svns-world-series",
    summary:
      "Global sevens destination page model covering official fixtures, national teams, host cities, ticket links, broadcast, and travel planning.",
    actions: [
      ["SVNS official site", links.svns],
      ["Browse 7s", "/sevens"],
    ],
    modules: ["Destination pages", "Teams", "Standings", "Travel", "Media"],
  },
  {
    slug: "world-rugby-nations-2026",
    title: "Nations Championship 2026",
    day: "2026",
    month: "15s",
    location: "International windows",
    date: "2026 launch cycle",
    label: "Elite 15s",
    tournamentSlug: "world-rugby-nations-championship",
    summary:
      "Future-facing 15s competition hub for nation pages, fixture windows, standings, ticket demand, and official source links.",
    actions: [
      ["Official site", links.nationsChampionship],
      ["Nation pages", "/nations"],
    ],
    modules: ["Fixtures", "Nation pages", "Rivalries", "Tickets", "Media"],
  },
  {
    slug: "mens-rugby-world-cup-2027",
    title: "Men's Rugby World Cup 2027",
    day: "2027",
    month: "RWC",
    location: "Australia",
    date: "2027 season",
    label: "World 15s",
    tournamentSlug: "mens-rugby-world-cup-2027",
    summary:
      "Global flagship 15s event page model for pools, teams, travel, tickets, schedule, media, and supporter communities.",
    actions: [
      ["World Rugby fixtures", links.worldRugby],
      ["Browse nations", "/nations"],
    ],
    modules: ["Pools", "Fixtures", "Tickets", "Travel", "Media"],
  },
  {
    slug: "usa-club-rugby-nationals",
    title: "USA Club Rugby Nationals",
    day: "Club",
    month: "USA",
    location: "United States",
    date: "Annual club season",
    label: "Club pathway",
    tournamentSlug: "usa-club-xvs-national-championships",
    summary:
      "Club pathway event model for XVs and 7s nationals, qualifiers, divisions, rosters, local clubs, and official USA Club Rugby handoff.",
    actions: [
      ["USA Club Rugby", links.usaClub],
      ["Club index", "/clubs"],
    ],
    modules: ["Qualifiers", "Divisions", "Rosters", "Results", "Club pages"],
  },
];

const upcomingEventSlugs = [
  "lit7s-london-2026",
  "hsbc-svns-2026",
  "world-rugby-nations-2026",
  "mens-rugby-world-cup-2027",
  "usa-club-rugby-nationals",
];

const pastEvents = [
  {
    slug: "lit7s-archive",
    title: "LIT7s London archives",
    date: "Annual event history",
    location: "West London",
    label: "Operator proof",
    summary:
      "LIT remains visible as proof that the directory supports real tournament operators with ticketing, media, winners, teams, and repeat-event momentum.",
    proof: ["Winner history", "Media galleries", "Team registration links", "Recurring event operations"],
    actions: [
      ["LIT7s official", links.litHome],
      ["Event details", "/events/lit7s-london-2026"],
      ["Media hub", "/media"],
    ],
  },
  {
    slug: "world-rugby-proof",
    title: "World Rugby source coverage",
    date: "Current official ecosystem",
    location: "Global",
    label: "Source proof",
    summary:
      "World Rugby fixtures and tournament pages anchor the international layer, while federation, league, and organizer links fill in club and community coverage.",
    proof: ["International fixtures", "Men's and women's 15s", "Sevens destinations", "Tournament calendars"],
    actions: [
      ["World Rugby fixtures", links.worldRugby],
      ["SVNS official", links.svns],
      ["Global index", "/tournaments"],
    ],
  },
  {
    slug: "community-proof",
    title: "Community tournament memory",
    date: "Always-on archive",
    location: "Local clubs and unions",
    label: "Social proof",
    summary:
      "The MiGente-style community layer gives each tournament a persistent home for teams, photos, testimonials, forum prompts, and future registrations.",
    proof: ["Past winners", "Team pages", "Player spotlights", "Media and comments"],
    actions: [
      ["Community hub", "/community"],
      ["Submit tournament", "/submit"],
      ["Team profiles", "/teams"],
    ],
  },
];

const teams = [
  {
    slug: "fiji-7s",
    name: "Fiji 7s",
    base: "Fiji",
    level: "International 7s",
    record: "Global sevens profile",
    roster: "National squad",
    tournament: "HSBC SVNS World Series",
    summary:
      "Example national sevens team card connected to SVNS, Olympic sevens, Rugby World Cup Sevens, player profiles, and fan communities.",
  },
  {
    slug: "black-ferns",
    name: "Black Ferns",
    base: "New Zealand",
    level: "Women's international 15s",
    record: "World rugby profile",
    roster: "National squad",
    tournament: "Women's Rugby World Cup",
    summary:
      "Women's national-team profile model for fixtures, players, media, social proof, ticketing, and fan discovery.",
  },
  {
    slug: "toulouse-rugby",
    name: "Toulouse Rugby",
    base: "France",
    level: "Professional club",
    record: "European club profile",
    roster: "Pro squad",
    tournament: "Investec Champions Cup",
    summary:
      "Professional club profile showing how EPCR, Top 14, tickets, supporters, players, and media can connect across competitions.",
  },
  {
    slug: "seattle-seawolves",
    name: "Seattle Seawolves",
    base: "United States",
    level: "Professional club",
    record: "North American club profile",
    roster: "Pro squad",
    tournament: "Major League Rugby",
    summary:
      "North American club profile for MLR schedule, local supporters, player cards, tickets, media, and community rugby pathways.",
  },
  {
    slug: "lit-london-selects",
    name: "LIT London Selects",
    base: "United Kingdom",
    level: "Community 7s",
    record: "Operator event profile",
    roster: "Tournament roster",
    tournament: "LIT 7s London",
    summary:
      "LIT operator team profile used to demonstrate registration, event history, player media, and local tournament proof.",
  },
  {
    slug: "midwest-club-xv",
    name: "Midwest Club XV",
    base: "United States",
    level: "Community 15s",
    record: "Mock club form",
    roster: "Club roster",
    tournament: "USA Club Rugby XVs National Championships",
    summary:
      "Mock community club card for local-to-national progression, division fit, roster state, registration, and member activity.",
  },
];

const people = [
  {
    slug: "naya-tapper",
    name: "Naya Tapper",
    initials: "NT",
    role: "Coach",
    team: "LIT London Selects",
    type: "Verified LIT coach reference",
    position: "Olympian mentor",
    stats: ["Olympic sevens", "Camp mentor", "Community inspiration"],
    bio:
      "Coach profile pattern for a global directory: verified operator profiles can anchor camps, player pathways, media, and social proof.",
  },
  {
    slug: "ellaine-gelman",
    name: "Ellaine Gelman",
    initials: "EG",
    role: "Organizer",
    team: "LIT London Selects",
    type: "Verified LIT organizer reference",
    position: "Tournament operator",
    stats: ["LIT7s operator", "Event director", "Community builder"],
    bio:
      "Organizer profile pattern showing how tournament owners can be represented alongside events, teams, media, and registration routes.",
  },
  {
    slug: "maya-thompson",
    name: "Maya Thompson",
    initials: "MT",
    role: "Player",
    team: "Black Ferns",
    type: "Mock player",
    position: "Outside back",
    stats: ["15s profile", "Media clips", "Fan follows"],
    bio:
      "Illustrative women's 15s player card for profile discovery, tournament history, social content, and team connections.",
  },
  {
    slug: "ari-blake",
    name: "Ari Blake",
    initials: "AB",
    role: "Player",
    team: "Fiji 7s",
    type: "Mock player",
    position: "Sweeper",
    stats: ["7s profile", "Try highlights", "SVNS history"],
    bio:
      "Illustrative sevens athlete card showing how player discovery can span SVNS, Olympic sevens, World Cup Sevens, and local tournaments.",
  },
  {
    slug: "joel-reid",
    name: "Joel Reid",
    initials: "JR",
    role: "Player",
    team: "Midwest Club XV",
    type: "Mock player",
    position: "Back row",
    stats: ["Club XVs", "Regional finals", "Volunteer coach"],
    bio:
      "Community rugby profile model for local players, clubs, history, registration, photos, and member conversation.",
  },
];

const faqItems = [
  {
    q: "Is this only for LIT7s?",
    a:
      "No. LIT7s is now one featured operator inside a global rugby directory covering sevens and fifteens across international, pro club, national, regional, youth, women, and community rugby.",
    links: [
      ["Global index", "/tournaments"],
      ["LIT event", "/events/lit7s-london-2026"],
    ],
  },
  {
    q: "How would every tournament in the world get listed?",
    a:
      "The mockup shows the coverage model: official sources, federation and league feeds, organizer submissions, community updates, owner review, and source labels. Static demo data seeds the product with major competitions and representative local entries.",
    links: [
      ["Submit tournament", "/submit"],
      ["Operations model", "/ops"],
    ],
  },
  {
    q: "Can users find both 7s and 15s?",
    a:
      "Yes. The global index, sevens page, fifteens page, search bar, filters, event cards, teams, and player profiles all carry rugby code as a first-class field.",
    links: [
      ["Browse 7s", "/sevens"],
      ["Browse 15s", "/fifteens"],
    ],
  },
  {
    q: "Where do ticketing and registration links go?",
    a:
      "Each event or tournament card can expose ticket, team registration, travel, official source, and contact links. The static mockup opens verified public links when available and otherwise uses a draft owner-review flow.",
    links: [
      ["Tickets", "/tickets"],
      ["Register team", "/register"],
    ],
  },
  {
    q: "What makes it MiGente-like?",
    a:
      "The site is structured around community discovery: public profiles, groups, event memory, media, source labels, member submissions, and search across people, teams, tournaments, and places.",
    links: [
      ["Community hub", "/community"],
      ["Media", "/media"],
    ],
  },
  {
    q: "Can local clubs and organizers submit events?",
    a:
      "Yes. The submit page mocks a tournament intake form for organizer name, source URL, rugby code, level, location, divisions, and owner-review status.",
    links: [
      ["Submit tournament", "/submit"],
      ["Contact", "/contact"],
    ],
  },
];

const mediaCollections = [
  {
    title: "Tournament photo streams",
    summary: "Galleries grouped by competition, club, venue, pitch, finals, awards, and player tags.",
    actions: [
      ["Past proof", "/past-events"],
      ["Submit media", "/submit"],
    ],
  },
  {
    title: "Team and player profiles",
    summary: "Community profiles make tournaments feel active before, during, and after the event.",
    actions: [
      ["Teams", "/teams"],
      ["Players", "/players"],
    ],
  },
  {
    title: "Official source trail",
    summary: "Every major profile can carry source labels and official links so users know what is verified.",
    actions: [
      ["World Rugby", links.worldRugby],
      ["SVNS", links.svns],
    ],
  },
  {
    title: "Social proof loops",
    summary: "Past winners, photos, clips, organizer pages, and local comments route people back to registration.",
    actions: [
      ["Community", "/community"],
      ["Register", "/register"],
    ],
  },
];

const quickLinks = [
  ["Global Index", "/tournaments"],
  ["Rugby 7s", "/sevens"],
  ["Rugby 15s", "/fifteens"],
  ["Nations", "/nations"],
  ["Clubs", "/clubs"],
  ["Community", "/community"],
  ["Upcoming Events", "/events"],
  ["Register Team", "/register"],
  ["Tickets", "/tickets"],
  ["Past Proof", "/past-events"],
  ["FAQ", "/faq"],
  ["Media", "/media"],
  ["Submit Tournament", "/submit"],
  ["Operations", "/ops"],
];

const opsItems = [
  ["Global tournament index", "Normalize code, country, level, date, divisions, source, ticketing, registration, and owner-review state."],
  ["Community graph", "Connect tournaments to people, teams, organizers, media, comments, groups, and recurring event memory."],
  ["Source labels", "Separate official federation links, organizer links, verified listings, community suggestions, and mock data."],
  ["Registration handoff", "Open team, ticket, VIP, travel, and contact links without creating real payments or provider writes in the static demo."],
  ["Future data feeds", "World Rugby, federations, unions, leagues, organizer submissions, and moderation queues can feed a live database later."],
  ["Tenant readiness", "The same shell can support LIT, club unions, event operators, and a broader rugby marketplace under one route."],
];

const state = {
  query: "",
  scope: "All",
  code: "All",
  level: "All",
  division: "All",
  ticketSelection: "LIT 7s London",
};

const app = document.querySelector("#app");
const nav = document.querySelector("[data-nav]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const toast = document.querySelector("[data-toast]");

function toRoute(path) {
  if (!path || path === "/") return `${BASE_PATH}/`;
  if (path.startsWith("http") || path.startsWith("mailto:")) return path;
  if (path.startsWith(BASE_PATH)) return path;
  return `${BASE_PATH}${path.startsWith("/") ? path : `/${path}`}`;
}

function stripBase(pathname) {
  if (pathname === BASE_PATH) return "/";
  if (pathname.startsWith(`${BASE_PATH}/`)) return pathname.slice(BASE_PATH.length) || "/";
  return pathname || "/";
}

function navigate(path) {
  history.pushState({}, "", toRoute(path));
  render();
}

function setMenuOpen(open) {
  nav.classList.toggle("open", open);
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
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
  return `<a class="button ${variant}" href="${safe(toRoute(href))}" ${attrs}>${safe(label)} ${icons.arrow}</a>`;
}

function navLink(label, href, className = "text-link") {
  const external = href.startsWith("http") || href.startsWith("mailto:");
  const attrs = external ? 'target="_blank" rel="noreferrer"' : "data-route";
  return `<a class="${safe(className)}" href="${safe(toRoute(href))}" ${attrs}>${safe(label)}</a>`;
}

function quickLinkList(items = quickLinks) {
  return html`
    <div class="quick-links">
      ${items
        .map(([label, href]) => `<a class="quick-link" href="${safe(toRoute(href))}" ${href.startsWith("http") ? 'target="_blank" rel="noreferrer"' : "data-route"}><span>${safe(label)}</span>${icons.arrow}</a>`)
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

function competitionMatches(item) {
  const haystack = [
    item.name,
    item.code,
    item.scope,
    item.level,
    item.region,
    item.city,
    item.venue,
    item.status,
    item.gender,
    item.summary,
    item.source,
    item.divisions.join(" "),
  ]
    .join(" ")
    .toLowerCase();
  const query = state.query.trim().toLowerCase();
  return (
    (!query || haystack.includes(query)) &&
    (state.scope === "All" || item.scope === state.scope) &&
    (state.code === "All" || item.code === state.code || (state.code === "Mixed" && item.gender === "Men and women")) &&
    (state.level === "All" || item.level === state.level) &&
    (state.division === "All" || item.divisions.some((division) => division.toLowerCase().includes(state.division.toLowerCase())) || item.gender.toLowerCase().includes(state.division.toLowerCase()))
  );
}

function filteredCompetitions() {
  return competitions.filter(competitionMatches).sort((a, b) => b.score - a.score || a.name.localeCompare(b.name));
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
          ${event.actions.slice(0, 2).map(([label, href], index) => button(label, href, index === 0 ? "primary small" : light ? "light small" : "secondary small")).join("")}
        </div>
      </div>
    </article>
  `;
}

function competitionCard(item, light = false) {
  return html`
    <article class="card ${light ? "light-card" : ""}">
      <div class="media-frame ${item.code === "15s" ? "fifteens-frame" : "sevens-frame"}"></div>
      <div class="card-body">
        <div class="tag-row">
          <span class="tag green">${safe(item.code)}</span>
          <span class="tag orange">${safe(item.level)}</span>
          <span class="tag">${safe(item.scope)}</span>
        </div>
        <h3>${safe(item.name)}</h3>
        <p>${safe(item.summary)}</p>
        ${metaList([
          [icons.pin, `${item.city} - ${item.region}`],
          [icons.calendar, item.date],
          [icons.shield, item.status],
        ])}
        ${tagList(item.divisions.slice(0, 5))}
        <div class="button-row">
          ${button("Details", `/tournaments/${item.slug}`, light ? "dark small" : "secondary small")}
          ${item.ctas.slice(0, 2).map(([label, href], index) => button(label, href, index === 0 ? "primary small" : light ? "light small" : "secondary small")).join("")}
        </div>
      </div>
    </article>
  `;
}

function resultRow(item) {
  return html`
    <article class="result-row">
      <div class="score-tile code-tile"><span>${safe(item.level)}</span><strong>${safe(item.code)}</strong></div>
      <div>
        <div class="tag-row">
          <span class="tag green">${safe(item.code)}</span>
          <span class="tag orange">${safe(item.level)}</span>
          <span class="tag">${safe(item.source)}</span>
        </div>
        <h3>${safe(item.name)}</h3>
        <p>${safe(item.summary)}</p>
        ${metaList([
          [icons.pin, `${item.city} - ${item.venue}`],
          [icons.calendar, item.date],
          [icons.team, item.divisions.join(", ")],
        ])}
      </div>
      <div class="row-actions">
        ${button("Details", `/tournaments/${item.slug}`, "dark small")}
        ${item.ctas[0] ? button(item.ctas[0][0], item.ctas[0][1], "light small") : ""}
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
        <ul class="check-list">${item.proof.map((proof) => `<li>${safe(proof)}</li>`).join("")}</ul>
        <div class="button-row">${item.actions.map(([label, href], index) => button(label, href, index === 0 ? "primary small" : light ? "light small" : "secondary small")).join("")}</div>
      </div>
    </article>
  `;
}

function faqCard(item, open = false) {
  return html`
    <details class="faq-item" ${open ? "open" : ""}>
      <summary>${safe(item.q)}</summary>
      <p>${safe(item.a)}</p>
      <div class="button-row">${item.links.map(([label, href], index) => button(label, href, index === 0 ? "dark small" : "light small")).join("")}</div>
    </details>
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
  const featuredEvents = upcomingEventSlugs.map((slug) => events.find((event) => event.slug === slug)).filter(Boolean);
  const featuredCompetitions = competitions.slice(0, 6);
  return html`
    <div class="page">
      <section class="hero community-hero">
        <div class="hero-grid">
          <div class="hero-copy">
            <div class="eyebrow">MiGente-style rugby community directory</div>
            <h1>The rugby world in one searchable index</h1>
            <p>
              Discover rugby 7s and 15s tournaments across world cups, national teams, professional clubs,
              youth pathways, local festivals, and community operators. Search by code, country, level,
              division, date, team, player, or source.
            </p>
            <div class="hero-actions">
              ${button("Search global index", "/tournaments", "primary")}
              ${button("Browse rugby 7s", "/sevens", "secondary")}
              ${button("Submit tournament", "/submit", "ghost")}
            </div>
            <div class="search-deck" role="search">
              <div class="search-bar">
                <input class="search-input" data-home-search placeholder="Search SVNS, Six Nations, Top 14, MLR, LIT 7s, youth, women..." value="${safe(state.query)}" />
                <button class="button primary" data-home-search-submit type="button">${icons.search} Search</button>
              </div>
              <div class="filter-strip" aria-label="Quick browse">
                ${[
                  ["All rugby", "all"],
                  ["7s", "7s"],
                  ["15s", "15s"],
                  ["Nations", "nations"],
                  ["Clubs", "clubs"],
                  ["Community", "community"],
                ]
                  .map(([label, preset]) => `<button class="chip" data-home-preset="${preset}" type="button">${safe(label)}</button>`)
                  .join("")}
              </div>
            </div>
          </div>
          <aside class="hero-panel">
            <div class="panel-head">
              <h2>Directory feed</h2>
              <span>Upcoming and active</span>
            </div>
            <div class="event-stack">${featuredEvents.slice(0, 4).map(eventMini).join("")}</div>
            <div class="panel-foot">
              <h3>Community surfaces</h3>
              ${quickLinkList([
                ["Teams", "/teams"],
                ["Players", "/players"],
                ["Media", "/media"],
                ["FAQ", "/faq"],
              ])}
            </div>
          </aside>
        </div>
      </section>

      <section class="section light">
        <div class="section-head">
          <h2>Browse all rugby by pathway</h2>
          <p>The first screen is the product: tournament discovery, official links, community profiles, registration, tickets, and source labels.</p>
        </div>
        <div class="resource-grid wide">
          ${[
            ["Rugby 7s", "SVNS, Olympics, World Cup Sevens, LIT7s, USA Club 7s, social festivals, youth and invitational tournaments.", "/sevens"],
            ["Rugby 15s", "World Cups, Six Nations, Rugby Championship, pro clubs, provincial rugby, schools, national championships.", "/fifteens"],
            ["Nations", "National-team competitions, international windows, continental championships, and player spotlights.", "/nations"],
            ["Clubs", "Premiership, Top 14, URC, Super Rugby, MLR, Japan League One, provincial competitions, and club nationals.", "/clubs"],
            ["Community", "Local tournaments, inclusive rugby, youth events, past winners, media, team pages, and organizer profiles.", "/community"],
            ["Submit", "Organizer intake for tournaments that need to be added, corrected, verified, or promoted.", "/submit"],
          ]
            .map(
              ([title, copy, href]) => html`
                <article class="mini-card pathway-card">
                  <h3>${safe(title)}</h3>
                  <p>${safe(copy)}</p>
                  <div class="button-row">${button("Open", href, "dark small")}</div>
                </article>
              `,
            )
            .join("")}
        </div>
      </section>

      <section class="section">
        <div class="section-head">
          <h2>Featured upcoming and active events</h2>
          <p>Each event routes users to registration, tickets, official source pages, teams, travel, media, and tournament detail pages.</p>
        </div>
        <div class="grid three">${featuredEvents.slice(0, 3).map((event) => eventCard(event)).join("")}</div>
        <div class="section-actions">${button("All upcoming events", "/events", "primary")}${button("Tickets and registration", "/tickets", "secondary")}</div>
      </section>

      <section class="section light">
        <div class="section-head">
          <h2>Global rugby tournament index</h2>
          <p>Seeded with major world, international, continental, pro club, national, youth, women, and community competitions.</p>
        </div>
        <div class="grid three">${featuredCompetitions.map((item) => competitionCard(item, true)).join("")}</div>
        <div class="section-actions">${button("Open index", "/tournaments", "dark")}${button("Submit missing tournament", "/submit", "light")}</div>
      </section>

      <section class="section green-band">
        <div class="section-head">
          <h2>Built like a community network</h2>
          <p>People, teams, events, photos, questions, and source links sit together so the site feels alive before and after match day.</p>
        </div>
        ${quickLinkList([
          ["Community hub", "/community"],
          ["Team profiles", "/teams"],
          ["Player profiles", "/players"],
          ["Past proof", "/past-events"],
          ["Media", "/media"],
          ["Submit tournament", "/submit"],
        ])}
      </section>
    </div>
  `;
}

function tournamentFilters() {
  const scopes = ["All", ...new Set(competitions.map((item) => item.scope))];
  const levels = ["All", ...new Set(competitions.map((item) => item.level))];
  const divisions = ["All", "Men", "Women", "Youth", "National", "Club", "Open", "Social", "Elite", "Inclusive"];
  return html`
    <div class="toolbar">
      <input data-filter-query value="${safe(state.query)}" placeholder="Search tournament, country, team, source, division..." />
      <select data-filter-code>
        ${["All", "7s", "15s"].map((code) => `<option ${state.code === code ? "selected" : ""}>${code}</option>`).join("")}
      </select>
      <select data-filter-scope>
        ${scopes.map((scope) => `<option ${state.scope === scope ? "selected" : ""}>${scope}</option>`).join("")}
      </select>
      <select data-filter-level>
        ${levels.map((level) => `<option ${state.level === level ? "selected" : ""}>${level}</option>`).join("")}
      </select>
      <select data-filter-division>
        ${divisions.map((division) => `<option ${state.division === division ? "selected" : ""}>${division}</option>`).join("")}
      </select>
    </div>
  `;
}

function tournamentsPage() {
  const results = filteredCompetitions();
  return html`
    ${pageHero(
      "Global rugby tournament index",
      "Search rugby 7s and 15s across world, international, continental, national, club, youth, women, and community competitions. Each result shows source posture and next actions.",
      button("Submit missing tournament", "/submit", "primary") + button("Browse community", "/community", "secondary"),
    )}
    <section class="section light">
      ${tournamentFilters()}
      <div class="results-meta">${results.length} matching profiles in this static seed set</div>
      <div class="list">${results.length ? results.map(resultRow).join("") : '<div class="empty">No tournaments match these filters.</div>'}</div>
    </section>
  `;
}

function competitionCollectionPage(title, copy, predicate, actions = "") {
  const items = competitions.filter(predicate).sort((a, b) => b.score - a.score);
  return html`
    ${pageHero(title, copy, actions || button("Open global index", "/tournaments", "primary") + button("Submit tournament", "/submit", "secondary"))}
    <section class="section light">
      <div class="grid three">${items.map((item) => competitionCard(item, true)).join("")}</div>
    </section>
  `;
}

function sevensPage() {
  return competitionCollectionPage(
    "Rugby 7s worldwide",
    "A browse page for SVNS, Olympic sevens, World Cup Sevens, LIT7s, national club sevens, social festivals, youth sevens, and invitational events.",
    (item) => item.code === "7s",
    button("Register a sevens team", "/register", "primary") + button("Tickets", "/tickets", "secondary"),
  );
}

function fifteensPage() {
  return competitionCollectionPage(
    "Rugby 15s worldwide",
    "A browse page for World Cups, Six Nations, Rugby Championship, professional clubs, provincial competitions, club nationals, schools, youth, and inclusive rugby.",
    (item) => item.code === "15s",
    button("Browse clubs", "/clubs", "primary") + button("Browse nations", "/nations", "secondary"),
  );
}

function nationsPage() {
  return competitionCollectionPage(
    "National team rugby",
    "International rugby discovery across world championships, annual tournaments, regional pathways, sevens, fifteens, men, women, and youth.",
    (item) => item.level === "International",
    button("World Rugby fixtures", links.worldRugby, "primary") + button("Global index", "/tournaments", "secondary"),
  );
}

function clubsPage() {
  return competitionCollectionPage(
    "Club and provincial rugby",
    "Professional, provincial, national, and community club rugby across Europe, the Pacific, North America, South Africa, Japan, New Zealand, and local unions.",
    (item) => item.level === "Club" || item.level === "Community",
    button("Team profiles", "/teams", "primary") + button("Submit club tournament", "/submit", "secondary"),
  );
}

function tournamentDetail(slug) {
  const item = competitions.find((competition) => competition.slug === slug);
  if (!item) return notFoundPage();
  const relatedTeams = teams.filter((team) => team.tournament === item.name || item.summary.includes(team.base) || item.region.includes(team.base));
  return html`
    ${pageHero(item.name, item.summary, button(item.ctas[0]?.[0] ?? "Official source", item.ctas[0]?.[1] ?? "/submit", "primary"))}
    <section class="section light">
      <div class="detail-layout">
        <article class="detail-main">
          <div class="tag-row">
            <span class="tag green">${safe(item.code)}</span>
            <span class="tag orange">${safe(item.level)}</span>
            <span class="tag">${safe(item.source)}</span>
          </div>
          <h2>${safe(item.name)}</h2>
          <p>${safe(item.summary)}</p>
          <div class="matrix">
            <div class="matrix-item"><strong>Rugby code</strong><span>${safe(item.code)}</span></div>
            <div class="matrix-item"><strong>Level</strong><span>${safe(item.level)} - ${safe(item.scope)}</span></div>
            <div class="matrix-item"><strong>Region</strong><span>${safe(item.region)}</span></div>
            <div class="matrix-item"><strong>Date model</strong><span>${safe(item.date)}</span></div>
            <div class="matrix-item"><strong>Venue model</strong><span>${safe(item.venue)}</span></div>
            <div class="matrix-item"><strong>Status</strong><span>${safe(item.status)}</span></div>
          </div>
          <h3>Divisions and tags</h3>
          ${tagList(item.divisions, "green")}
          <h3>Connected community</h3>
          <div class="grid two">${(relatedTeams.length ? relatedTeams : teams.slice(0, 2)).map(teamCard).join("")}</div>
        </article>
        <aside class="detail-aside">
          <h3>Actions</h3>
          <div class="button-row stacked">
            ${item.ctas.map(([label, href], index) => button(label, href, index === 0 ? "primary" : "light")).join("")}
            ${button("Register a team", "/register", "light")}
            ${button("Submit correction", "/submit", "light")}
          </div>
          <h3>Listing workflow</h3>
          <ul class="timeline">
            <li>Source or organizer submits competition data.</li>
            <li>Moderator verifies official links, dates, divisions, and location.</li>
            <li>Teams, players, tickets, registration, media, and past proof attach to the profile.</li>
            <li>Event archive stays live after the tournament to support future registration.</li>
          </ul>
        </aside>
      </div>
    </section>
  `;
}

function eventsPage() {
  const upcoming = upcomingEventSlugs.map((slug) => events.find((event) => event.slug === slug)).filter(Boolean);
  return html`
    ${pageHero(
      "Upcoming and active rugby events",
      "Featured global, national, club, and community events with next-step actions for tickets, registration, official sources, teams, media, and travel.",
      button("Register team", "/register", "primary") + button("Tickets", "/tickets", "secondary"),
    )}
    <section class="section">
      <div class="grid three">${upcoming.map((event) => eventCard(event)).join("")}</div>
    </section>
    <section class="section light">
      <div class="section-head">
        <h2>What every event page should answer</h2>
        <p>Users should know what it is, who can play, how to register, how to attend, who else is going, and why the event is credible.</p>
      </div>
      <div class="resource-grid wide">
        ${[
          ["Register", "Team entry, division fit, roster, manager contact, waivers, hotels, and eligibility."],
          ["Attend", "Spectator tickets, parking, VIP, travel, schedule, venue rules, food, and accessibility."],
          ["Trust", "Past winners, photos, clips, teams, operator profile, official source, and community comments."],
          ["Share", "Team pages, player cards, media, social links, and post-event proof that brings people back."],
        ]
          .map(([title, copy]) => `<article class="mini-card"><h3>${safe(title)}</h3><p>${safe(copy)}</p></article>`)
          .join("")}
      </div>
    </section>
  `;
}

function eventDetail(slug) {
  const event = events.find((item) => item.slug === slug);
  if (!event) return notFoundPage();
  const competition = competitions.find((item) => item.slug === event.tournamentSlug);
  return html`
    ${pageHero(event.title, event.summary, button(event.actions[0][0], event.actions[0][1], "primary"))}
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
            <div class="matrix-item"><strong>Modules</strong><span>${safe(event.modules.join(", "))}</span></div>
            <div class="matrix-item"><strong>Source state</strong><span>Official links plus directory preview</span></div>
          </div>
          <h3>Event modules</h3>
          <div class="resource-grid">
            ${event.modules.map((module) => `<article class="mini-card"><strong>${safe(module)}</strong><span>Clickable route or owner-review state for this event.</span></article>`).join("")}
          </div>
          ${competition ? `<h3>Connected tournament profile</h3><div class="grid two">${competitionCard(competition, true)}</div>` : ""}
        </article>
        <aside class="detail-aside">
          <h3>Actions</h3>
          <div class="button-row stacked">${event.actions.map(([label, href], index) => button(label, href, index === 0 ? "primary" : "light")).join("")}</div>
          <h3>Useful routes</h3>
          ${quickLinkList([
            ["Register team", "/register"],
            ["Tickets", "/tickets"],
            ["Team profiles", "/teams"],
            ["Player profiles", "/players"],
            ["Media", "/media"],
            ["FAQ", "/faq"],
          ])}
        </aside>
      </div>
    </section>
  `;
}

function ticketsPage() {
  const options = competitions.filter((item) => item.ctas.length);
  const selected = options.find((item) => item.name === state.ticketSelection) ?? competitions.find((item) => item.slug === "lit7s-london") ?? options[0];
  return html`
    ${pageHero(
      "Tickets, registration, and official handoffs",
      "A global ticketing surface where each tournament can expose spectator tickets, team entry, parking, VIP, travel, official source links, and organizer contact.",
      button("Register team", "/register", "primary") + button("Submit tournament", "/submit", "secondary"),
    )}
    <section class="section light">
      <div class="ticket-panel">
        <div class="list">
          ${options.slice(0, 12).map(
            (item) => html`
              <article class="result-row">
                <div class="score-tile code-tile"><span>${safe(item.level)}</span><strong>${safe(item.code)}</strong></div>
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
          ).join("")}
        </div>
        <aside class="checkout">
          <h2>Handoff preview</h2>
          <p>${safe(selected.name)}</p>
          <div class="checkout-line"><span>Rugby code</span><strong>${safe(selected.code)}</strong></div>
          <div class="checkout-line"><span>Level</span><strong>${safe(selected.level)}</strong></div>
          <div class="checkout-line"><span>Status</span><strong>${safe(selected.status)}</strong></div>
          <div class="button-row">${selected.ctas.map(([label, href], index) => button(label, href, index === 0 ? "primary" : "secondary")).join("")}</div>
          <h3>Useful links</h3>
          ${quickLinkList([
            ["Register team", "/register"],
            ["FAQ", "/faq"],
            ["Media", "/media"],
            ["Submit correction", "/submit"],
          ])}
        </aside>
      </div>
    </section>
  `;
}

function registerPage() {
  const registrationOptions = competitions.filter((item) => item.status.toLowerCase().includes("live") || item.level === "Community" || item.level === "Club").slice(0, 10);
  return html`
    ${pageHero(
      "Register a team or player group",
      "A front-end intake for team managers across rugby 7s and 15s. Pick a tournament, division, roster size, manager contact, travel notes, and source handoff.",
      button("Browse tournaments", "/tournaments", "primary") + button("Submit tournament", "/submit", "secondary"),
    )}
    <section class="section light">
      <div class="form-grid">
        <form class="form-card" data-demo-form data-form-toast="Registration draft captured for owner review">
          <div class="form-fields">
            <div class="success-box" data-success-box>Draft registration captured for owner review. No payment or provider write was created.</div>
            <div class="form-field">
              <label for="event">Tournament</label>
              <select id="event" name="event" required>
                ${registrationOptions.map((item) => `<option>${safe(item.name)}</option>`).join("")}
              </select>
            </div>
            <div class="form-field">
              <label for="team">Team name</label>
              <input id="team" name="team" required placeholder="Your club, school, nation, or invitational team" />
            </div>
            <div class="form-field">
              <label for="code">Rugby code</label>
              <select id="code" name="code" required>
                <option>7s</option>
                <option>15s</option>
              </select>
            </div>
            <div class="form-field">
              <label for="division">Division</label>
              <select id="division" name="division" required>
                <option>Men's Open</option>
                <option>Women's Open</option>
                <option>Elite</option>
                <option>Social</option>
                <option>Youth</option>
                <option>Inclusive</option>
              </select>
            </div>
            <div class="form-field">
              <label for="manager">Manager email</label>
              <input id="manager" name="manager" type="email" required placeholder="manager@example.com" />
            </div>
            <div class="form-field">
              <label for="roster">Roster size</label>
              <input id="roster" name="roster" type="number" min="7" max="35" value="12" required />
            </div>
            <div class="form-field">
              <label for="notes">Notes</label>
              <textarea id="notes" name="notes" placeholder="Travel, accommodation, eligibility, roster, or ticketing notes"></textarea>
            </div>
            <button class="button primary" type="submit">Submit draft ${icons.arrow}</button>
          </div>
        </form>
        <aside class="detail-aside">
          <h3>Manager checklist</h3>
          <ul class="timeline">
            <li>Confirm code, division, age grade, and eligibility.</li>
            <li>Add manager contact, roster count, travel notes, and source link.</li>
            <li>Open official payment, ticketing, or registration provider when available.</li>
            <li>Publish team profile after organizer review.</li>
          </ul>
          <div class="button-row stacked">
            ${button("LIT tickets", links.litTickets, "dark")}
            ${button("USA Club Rugby", links.usaClub, "light")}
            ${button("Submit missing tournament", "/submit", "light")}
          </div>
        </aside>
      </div>
    </section>
  `;
}

function submitPage() {
  return html`
    ${pageHero(
      "Submit or update a rugby tournament",
      "Organizer and community intake for adding every missing rugby tournament: 7s, 15s, national, club, youth, women, social, regional, and global.",
      button("Search first", "/tournaments", "primary") + button("Operations model", "/ops", "secondary"),
    )}
    <section class="section light">
      <div class="form-grid">
        <form class="form-card" data-demo-form data-form-toast="Tournament submission drafted for moderation">
          <div class="form-fields">
            <div class="success-box" data-success-box>Tournament draft saved locally for mock review. No live database write was created.</div>
            <div class="form-field">
              <label for="tournament-name">Tournament name</label>
              <input id="tournament-name" required placeholder="Tournament, series, league, or cup" />
            </div>
            <div class="form-field">
              <label for="source-url">Official source URL</label>
              <input id="source-url" type="url" placeholder="https://..." />
            </div>
            <div class="form-field">
              <label for="submit-code">Rugby code</label>
              <select id="submit-code">
                <option>7s</option>
                <option>15s</option>
                <option>Both / mixed</option>
              </select>
            </div>
            <div class="form-field">
              <label for="level">Level</label>
              <select id="level">
                <option>International</option>
                <option>Club</option>
                <option>Community</option>
                <option>Youth</option>
                <option>School</option>
                <option>University</option>
              </select>
            </div>
            <div class="form-field">
              <label for="location">Location</label>
              <input id="location" placeholder="City, country, or host rotation" />
            </div>
            <div class="form-field">
              <label for="submit-notes">What should be listed?</label>
              <textarea id="submit-notes" placeholder="Dates, divisions, tickets, registration, teams, media, past winners, contacts"></textarea>
            </div>
            <button class="button primary" type="submit">Submit for review ${icons.arrow}</button>
          </div>
        </form>
        <aside class="detail-aside">
          <h3>Review states</h3>
          <ul class="timeline">
            <li>Community suggestion</li>
            <li>Organizer claimed</li>
            <li>Official source verified</li>
            <li>Tickets and registration connected</li>
            <li>Past proof and media attached</li>
          </ul>
          ${quickLinkList([
            ["Global index", "/tournaments"],
            ["Community hub", "/community"],
            ["FAQ", "/faq"],
            ["Contact", "/contact"],
          ])}
        </aside>
      </div>
    </section>
  `;
}

function teamCard(team) {
  const tournament = competitions.find((item) => item.name === team.tournament);
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
          [icons.team, team.roster],
          [icons.shield, team.record],
          [icons.calendar, team.tournament],
        ])}
        <div class="button-row">
          ${button("Team profile", `/teams/${team.slug}`, "dark small")}
          ${tournament ? button("Tournament", `/tournaments/${tournament.slug}`, "light small") : ""}
        </div>
      </div>
    </article>
  `;
}

function teamsPage() {
  return html`
    ${pageHero(
      "Team profiles",
      "National teams, professional clubs, community clubs, operator teams, schools, and invitational sides connected to the tournaments they play.",
      button("Register a team", "/register", "primary") + button("Community hub", "/community", "secondary"),
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
  const tournament = competitions.find((item) => item.name === team.tournament);
  return html`
    ${pageHero(team.name, team.summary, button("Register or claim team", "/register", "primary"))}
    <section class="section light">
      <div class="detail-layout">
        <article class="detail-main">
          <h2>${safe(team.name)}</h2>
          <p>${safe(team.summary)}</p>
          <div class="matrix">
            <div class="matrix-item"><strong>Base</strong><span>${safe(team.base)}</span></div>
            <div class="matrix-item"><strong>Level</strong><span>${safe(team.level)}</span></div>
            <div class="matrix-item"><strong>Roster model</strong><span>${safe(team.roster)}</span></div>
            <div class="matrix-item"><strong>Tournament</strong><span>${safe(team.tournament)}</span></div>
          </div>
          <h3>Roster spotlight</h3>
          <div class="grid two">${(roster.length ? roster : people.slice(0, 2)).map(personCard).join("")}</div>
        </article>
        <aside class="detail-aside">
          <h3>Actions</h3>
          <div class="button-row stacked">
            ${button("Register team", "/register", "primary")}
            ${tournament ? button("Tournament", `/tournaments/${tournament.slug}`, "light") : ""}
            ${button("Media", "/media", "light")}
          </div>
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
      "Player, coach, and organizer profiles",
      "MiGente-style public profiles for athletes, coaches, organizers, and community leaders connected to tournaments, teams, photos, and registration.",
      button("Team profiles", "/teams", "primary") + button("Media", "/media", "secondary"),
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
    ${pageHero(person.name, person.bio, button(team ? "Team profile" : "Teams", team ? `/teams/${team.slug}` : "/teams", "primary"))}
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
          <div class="matrix">${person.stats.map((stat) => `<div class="matrix-item"><strong>${safe(stat)}</strong><span>Profile attribute</span></div>`).join("")}</div>
        </article>
        <aside class="detail-aside">
          <h3>Actions</h3>
          <div class="button-row stacked">
            ${team ? button("Open team", `/teams/${team.slug}`, "primary") : ""}
            ${button("Players directory", "/players", "light")}
            ${button("Media hub", "/media", "light")}
          </div>
        </aside>
      </div>
    </section>
  `;
}

function communityPage() {
  return html`
    ${pageHero(
      "Rugby community hub",
      "The MiGente-like layer: member profiles, team pages, event memory, local groups, media, organizer posts, tournament submissions, and questions that stay attached to the sport.",
      button("Submit tournament", "/submit", "primary") + button("Join as a team", "/register", "secondary"),
    )}
    <section class="section light">
      <div class="section-head">
        <h2>Community surfaces</h2>
        <p>Not just a calendar. The directory should help people recognize teams, players, organizers, places, and proof from past events.</p>
      </div>
      <div class="resource-grid wide">
        ${[
          ["Groups", "Local rugby communities, alumni networks, schools, inclusive clubs, fan groups, and touring sides."],
          ["Profiles", "Players, coaches, organizers, photographers, sponsors, and volunteers with event history."],
          ["Event memory", "Past winners, photos, clips, testimonials, tables, fixtures, and registration links for the next event."],
          ["Questions", "FAQ and discussion prompts tied to tickets, registration, divisions, rules, travel, and source verification."],
        ]
          .map(([title, copy]) => `<article class="mini-card"><h3>${safe(title)}</h3><p>${safe(copy)}</p></article>`)
          .join("")}
      </div>
    </section>
    <section class="section">
      <div class="section-head">
        <h2>Teams and profiles</h2>
        <p>Public profile cards make the tournament index feel active and searchable.</p>
      </div>
      <div class="grid two">${teams.slice(0, 4).map((team) => teamCard(team)).join("")}</div>
    </section>
  `;
}

function pastEventsPage() {
  return html`
    ${pageHero(
      "Past events and social proof",
      "Past winners, media, source coverage, organizer pages, team memories, and community submissions prove this is a continuing rugby network.",
      button("Upcoming events", "/events", "primary") + button("Media", "/media", "secondary"),
    )}
    <section class="section light">
      <div class="grid three">${pastEvents.map((item) => pastEventCard(item, true)).join("")}</div>
    </section>
  `;
}

function faqPage() {
  return html`
    ${pageHero(
      "Global rugby directory FAQ",
      "Answers for players, teams, spectators, organizers, media, sponsors, parents, and community members using a global rugby tournament index.",
      button("Submit tournament", "/submit", "primary") + button("Search index", "/tournaments", "secondary"),
    )}
    <section class="section light">
      <div class="faq-layout">
        <div class="faq-list">${faqItems.map((item, index) => faqCard(item, index < 2)).join("")}</div>
        <aside class="detail-aside">
          <h3>Most useful routes</h3>
          ${quickLinkList([
            ["Global index", "/tournaments"],
            ["Rugby 7s", "/sevens"],
            ["Rugby 15s", "/fifteens"],
            ["Submit", "/submit"],
            ["Community", "/community"],
          ])}
        </aside>
      </div>
    </section>
  `;
}

function mediaPage() {
  return html`
    ${pageHero(
      "Media and proof",
      "Photos, highlights, source links, team pages, past winners, testimonials, and organizer stories make a tournament directory feel alive.",
      button("Past proof", "/past-events", "primary") + button("Submit media source", "/submit", "secondary"),
    )}
    <section class="section light">
      <div class="resource-grid wide">
        ${mediaCollections.map(
          (item) => html`
            <article class="mini-card">
              <h3>${safe(item.title)}</h3>
              <p>${safe(item.summary)}</p>
              <div class="button-row">${item.actions.map(([label, href], index) => button(label, href, index === 0 ? "dark small" : "light small")).join("")}</div>
            </article>
          `,
        ).join("")}
      </div>
    </section>
  `;
}

function companyPage() {
  return html`
    ${pageHero(
      "About MiGente Rugby",
      "A future tenant concept for a global rugby community directory: every tournament, every level, every rugby code, with teams, people, media, questions, ticketing, and registration connected.",
      button("Global index", "/tournaments", "primary") + button("Operations", "/ops", "secondary"),
    )}
    <section class="section light">
      <div class="grid two">
        <article class="detail-main">
          <div class="tag-row">
            <span class="tag green">Global rugby</span>
            <span class="tag orange">Community network</span>
          </div>
          <h2>What the product communicates</h2>
          <p>
            The site is not just a LIT landing page anymore. It is a rugby discovery network with official-source links,
            operator pages, event conversion, team and player profiles, media proof, and a submission workflow for the
            tournaments the seed data does not cover yet.
          </p>
          <div class="matrix">${opsItems.slice(0, 4).map(([title, copy]) => `<div class="matrix-item"><strong>${safe(title)}</strong><span>${safe(copy)}</span></div>`).join("")}</div>
        </article>
        <aside class="detail-aside">
          <h3>Core routes</h3>
          ${quickLinkList(quickLinks.slice(0, 10))}
          <h3>Official source examples</h3>
          ${quickLinkList([
            ["World Rugby", links.worldRugby],
            ["SVNS", links.svns],
            ["Nations Championship", links.nationsChampionship],
            ["USA Club Rugby", links.usaClub],
          ])}
        </aside>
      </div>
    </section>
  `;
}

function contactPage() {
  return html`
    ${pageHero(
      "Contact and claim a listing",
      "Mock contact surface for tournament owners, teams, media, sponsors, and federation admins who want to claim or correct a rugby profile.",
      button("Submit tournament", "/submit", "primary") + button("Operations", "/ops", "secondary"),
    )}
    <section class="section light">
      <div class="resource-grid wide">
        ${[
          ["Tournament owner", "Claim a listing, add official source URLs, connect ticketing, and upload event media."],
          ["Team manager", "Register interest, correct a team page, add roster context, or ask about divisions."],
          ["Media or sponsor", "Connect photo galleries, highlight clips, partner packages, and post-event proof."],
          ["Federation admin", "Bulk update fixtures, calendars, official tournament pages, and source trust states."],
        ]
          .map(([title, copy]) => `<article class="mini-card"><h3>${safe(title)}</h3><p>${safe(copy)}</p><div class="button-row">${button("Start request", "/submit", "dark small")}</div></article>`)
          .join("")}
      </div>
    </section>
  `;
}

function opsPage() {
  return html`
    ${pageHero(
      "Directory operations model",
      "How Mobilis-style tenant operations and MiGente-style community discovery become a future global rugby index with source-labeled listings and owner review.",
      button("Submit tournament", "/submit", "primary"),
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
            <div class="matrix-item"><strong>Public preview</strong><span>Static SPA deployed under /lit</span></div>
            <div class="matrix-item"><strong>Search</strong><span>Client-side seed index across 7s and 15s</span></div>
            <div class="matrix-item"><strong>Data store</strong><span>Future database and moderation queue</span></div>
            <div class="matrix-item"><strong>Payments</strong><span>External links only in mockup</span></div>
            <div class="matrix-item"><strong>Community</strong><span>Teams, players, media, event memory</span></div>
            <div class="matrix-item"><strong>Coverage</strong><span>Official feeds plus organizer submissions</span></div>
          </div>
        </article>
      </div>
    </section>
  `;
}

function schedulePage() {
  return eventsPage();
}

function notFoundPage() {
  return html`
    ${pageHero("Page not found", "That route is not in the global rugby directory mockup yet.", button("Return home", "/", "primary"))}
  `;
}

function render() {
  const path = stripBase(window.location.pathname);
  const parts = path.split("/").filter(Boolean);
  let markup;

  if (path === "/" || parts.length === 0) markup = homePage();
  else if (parts[0] === "tournaments" && parts[1]) markup = tournamentDetail(parts[1]);
  else if (parts[0] === "tournaments") markup = tournamentsPage();
  else if (parts[0] === "sevens") markup = sevensPage();
  else if (parts[0] === "fifteens") markup = fifteensPage();
  else if (parts[0] === "nations") markup = nationsPage();
  else if (parts[0] === "clubs") markup = clubsPage();
  else if (parts[0] === "events" && parts[1]) markup = eventDetail(parts[1]);
  else if (parts[0] === "events" || parts[0] === "upcoming") markup = eventsPage();
  else if (parts[0] === "tickets") markup = ticketsPage();
  else if (parts[0] === "register") markup = registerPage();
  else if (parts[0] === "submit") markup = submitPage();
  else if (parts[0] === "community") markup = communityPage();
  else if (parts[0] === "teams" && parts[1]) markup = teamDetail(parts[1]);
  else if (parts[0] === "teams") markup = teamsPage();
  else if (parts[0] === "players" && parts[1]) markup = playerDetail(parts[1]);
  else if (parts[0] === "players") markup = playersPage();
  else if (parts[0] === "past-events") markup = pastEventsPage();
  else if (parts[0] === "faq") markup = faqPage();
  else if (parts[0] === "media") markup = mediaPage();
  else if (parts[0] === "company") markup = companyPage();
  else if (parts[0] === "contact") markup = contactPage();
  else if (parts[0] === "partners") markup = contactPage();
  else if (parts[0] === "schedule") markup = schedulePage();
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
      setMenuOpen(false);
      navigate(new URL(link.href).pathname);
    });
  });

  app.querySelector("[data-home-search-submit]")?.addEventListener("click", () => {
    state.query = app.querySelector("[data-home-search]")?.value ?? "";
    state.scope = "All";
    state.code = "All";
    state.level = "All";
    navigate("/tournaments");
  });

  app.querySelector("[data-home-search]")?.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      state.query = event.currentTarget.value;
      state.scope = "All";
      state.code = "All";
      state.level = "All";
      navigate("/tournaments");
    }
  });

  app.querySelectorAll("[data-home-preset]").forEach((buttonEl) => {
    buttonEl.addEventListener("click", () => {
      const preset = buttonEl.dataset.homePreset;
      state.query = "";
      state.scope = "All";
      state.code = "All";
      state.level = "All";
      if (preset === "7s") state.code = "7s";
      if (preset === "15s") state.code = "15s";
      if (preset === "nations") state.level = "International";
      if (preset === "clubs") state.level = "Club";
      if (preset === "community") state.level = "Community";
      navigate(preset === "7s" ? "/sevens" : preset === "15s" ? "/fifteens" : preset === "nations" ? "/nations" : preset === "clubs" ? "/clubs" : preset === "community" ? "/community" : "/tournaments");
    });
  });

  const query = app.querySelector("[data-filter-query]");
  const scope = app.querySelector("[data-filter-scope]");
  const code = app.querySelector("[data-filter-code]");
  const level = app.querySelector("[data-filter-level]");
  const division = app.querySelector("[data-filter-division]");
  [query, scope, code, level, division].filter(Boolean).forEach((control) => {
    control.addEventListener("input", () => {
      state.query = query?.value ?? "";
      state.scope = scope?.value ?? "All";
      state.code = code?.value ?? "All";
      state.level = level?.value ?? "All";
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

  app.querySelectorAll("[data-demo-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      form.querySelector("[data-success-box]")?.classList.add("show");
      showToast(form.dataset.formToast ?? "Draft captured for review");
      form.scrollIntoView({ block: "start", behavior: "smooth" });
    });
  });
}

document.addEventListener("click", (event) => {
  const link = event.target.closest("a[data-route]");
  if (!link || !document.body.contains(link)) return;
  if (link.closest("#app")) return;
  event.preventDefault();
  setMenuOpen(false);
  navigate(new URL(link.href).pathname);
});

menuToggle.addEventListener("click", () => {
  setMenuOpen(!nav.classList.contains("open"));
});

window.addEventListener("popstate", render);
render();
