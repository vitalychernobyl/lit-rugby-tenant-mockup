import { archiveEvents } from "./data/archive-events-rm5.js";

const today = new Date("2026-07-08T12:00:00-04:00");
const app = document.querySelector("#app");

const icons = {
  arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  calendar: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3v4M17 3v4M4 9h16M5 5h14v16H5z"/></svg>',
  external: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3h7v7M10 14 21 3M21 14v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6"/></svg>',
  menu: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
  pin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11Z"/><circle cx="12" cy="10" r="2.5"/></svg>',
  search: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-4.2-4.2"/></svg>',
  ticket: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9V5h16v4a3 3 0 0 0 0 6v4H4v-4a3 3 0 0 0 0-6Z"/><path d="M13 5v14"/></svg>',
  users: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 11a4 4 0 1 0-8 0"/><path d="M4 21a8 8 0 0 1 16 0"/><path d="M20 8a3 3 0 0 1 0 6M4 8a3 3 0 0 0 0 6"/></svg>',
};

const externalLinks = {
  lit: "https://www.lit7s.com/",
  litTickets: "https://ticketpass.org/event/EWDVGH/lit-super-sevens-series-2026-team-entry",
  rugbyTown: "https://rugbytownusa.com/calendar/",
  rugbyTownTickets: "https://www.infinityparkatglendale.com/events/rugbytown-7s-day-1/",
  tropical: "https://www.tropical7s.com/event-dates",
  tropicalFees: "https://www.tropical7s.com/event-fees",
  dubai: "https://emiratesdubai7s.com/",
  dubaiTickets: "https://emiratesdubai7s.com/tickets/",
  rugbyEurope7s: "https://www.rugbyeurope.eu/competitions/season-2526/7s-tournaments-2026/mens-7s-championship-series-2026/",
  rugbyEuropeBeach: "https://www.rugbyeurope.eu/news/rugby-europe-7s-and-beach-calendar-released-for-2026/",
  europeanTouch: "https://www.internationaltouch.org/events/upcoming/2026/jul/",
  europeanTouchRegistration: "https://www.internationaltouch.org/events/registration/38/",
  europeanYouthTouch: "https://www.internationaltouch.org/events/upcoming/2026/aug/13/european-youth-touch-championships-2026/",
  europeanYouthTouchRegistration: "https://www.internationaltouch.org/events/registration/39/",
  juniorTouch: "https://www.juniortouchcup.com",
  tryTagLeeds: "https://www.trytagrugby.com/events/tagfest-leeds-2026/",
  britishIrishCup: "https://www.tagrugby.ie/post/host-for-2026-british-irish-cup-announced",
  britishIrishCupRegistration: "https://tagrugby.spawtz.com/Leagues/314/Registration/Team",
  nationsChampionship: "https://www.world.rugby/beta/en/tournaments/nations-championship/2026",
  worldRugbyNationsCup: "https://www.world.rugby/nations-cup/en",
  worldRugbyU20: "https://www.world.rugby/u20/en",
  pacificNationsCup: "https://www.world.rugby/news/1045109/dates-set-for-pacific-nations-cup-2026-as-asahi-super-dry-confirmed-as-title-partner",
  wxvChallenger: "https://www.world.rugby/news/1043466/hong-kong-set-to-host-wxv-global-series-challenger-in-2026",
  rwcDraw: "https://www.world.rugby/news/1017765/rugby-world-cup-2027-all-you-need-to-know-about-the-draw-format-pools-and-dates",
  rwc2027: "https://www.rugbyworldcup.com/2027",
  rwc2027Tickets: "https://www.rugbyworldcup.com/2027/en/tickets",
  ultimateSevens: "https://www.ultimatesevens.com/",
  majorca: "https://www.majorcabeachrugby.co.uk/",
  algarve: "https://www.algarve7s.com/",
  touchAustraliaYouth: "https://touchfootball.com.au/national-youth-championships-nyc/",
  touchAustraliaSeniors: "https://touchfootball.com.au/news/2026/05/18/eois-open-asia-pacific-seniors-touch-cup-team-managers/",
  schoolSportAustraliaTouch: "https://www.schoolsportaustralia.edu.au/touch-football/",
};

const imageFor = (slug, fallbackIndex = 0) =>
  archiveEvents.find((event) => event.slug === slug)?.image || archiveEvents[fallbackIndex % archiveEvents.length]?.image || "";

const socialSets = {
  lit: [
    { label: "Instagram", url: "https://www.instagram.com/lit7s/" },
    { label: "Facebook", url: "https://www.facebook.com/LIT7s/" },
    { label: "X / Twitter", url: "https://twitter.com/lit7s?lang=en-GB" },
    { label: "YouTube", url: "https://www.youtube.com/channel/UCBcTEJS7_GPoL27Srp3ftBw" },
  ],
  rugbyTown: [
    { label: "Instagram", url: "https://www.instagram.com/rugbytownofficial/" },
    { label: "Facebook", url: "https://www.facebook.com/RugbyTownUSA" },
    { label: "X / Twitter", url: "https://twitter.com/RugbyTown_USA" },
  ],
  tropical: [
    { label: "Instagram", url: "https://www.instagram.com/tropical7s" },
    { label: "Facebook", url: "https://www.facebook.com/tropical7s" },
    { label: "X / Twitter", url: "https://twitter.com/tropical7s?lang=en" },
    { label: "YouTube", url: "https://www.youtube.com/channel/UCuW0qnsBClhvuM_HcK3ZIbg" },
  ],
  dubai: [
    { label: "Instagram", url: "https://www.instagram.com/dubai7s" },
    { label: "Facebook", url: "https://www.facebook.com/dubai7s/" },
    { label: "X / Twitter", url: "https://twitter.com/dubai7s" },
  ],
  rugbyEurope: [
    { label: "Instagram", url: "https://www.instagram.com/rugby_europe" },
    { label: "Facebook", url: "https://www.facebook.com/rugbyeurope/" },
    { label: "X / Twitter", url: "https://twitter.com/rugby_europe" },
  ],
  internationalTouch: [
    { label: "Instagram", url: "https://instagram.com/internationaltouch" },
    { label: "Facebook", url: "https://www.facebook.com/internationaltouch.org" },
    { label: "X / Twitter", url: "https://twitter.com/intltouchorg" },
    { label: "YouTube", url: "https://www.youtube.com/internationaltouch" },
  ],
  rugbyWorldCup: [
    { label: "Instagram", url: "https://www.instagram.com/rugbyworldcup/" },
    { label: "Facebook", url: "https://www.facebook.com/rugbyworldcup/" },
    { label: "X / Twitter", url: "https://twitter.com/rugbyworldcup" },
    { label: "YouTube", url: "https://www.youtube.com/channel/UCE28rwYoaV7jvU6GVzdu_GQ" },
  ],
  majorca: [
    { label: "Instagram", url: "https://www.instagram.com/majorcabeachrugby/" },
    { label: "Facebook", url: "https://www.facebook.com/BeachRugbyMajorca" },
    { label: "X / Twitter", url: "https://twitter.com/MajorcaBeachRug" },
  ],
  algarve: [
    { label: "Instagram", url: "https://www.instagram.com/algarve7s/" },
    { label: "Facebook", url: "https://www.facebook.com/Algarve7s" },
    { label: "YouTube", url: "https://www.youtube.com/channel/UCpRAmkc4RE7PtYS9UJ80w-A" },
  ],
};

const currentEvents = [
  {
    slug: "lit-7s-london-2026",
    title: "LIT 7s London 2026",
    featured: true,
    date: "July 18, 2026",
    dateSort: "2026-07-18",
    location: "Wasps Rugby Club, Twyford Avenue Sports Ground, Acton, London W3 9QA",
    city: "London",
    region: "Europe",
    country: "United Kingdom",
    code: "7s",
    kind: "7s",
    level: "Elite and open",
    divisions: ["Men's 7s", "Women's 7s", "Elite", "Open", "Social"],
    amenities: ["70+ teams", "Team entry", "Spectator tickets", "Parking", "All-day bar", "Food", "Live music", "DJ", "Cheerleaders"],
    image: imageFor("lit-7s", 6),
    summary:
      "The 14th annual LIT7s brings 70+ amateur and elite men's and women's sevens teams to Wasps Rugby Club in West London on 18 July 2026.",
    description:
      "LIT 7s is the UK flagship LIT7s tournament and the finale of the LIT Super Sevens Series, with elite, open, and social divisions, team registration, spectator tickets, limited advance parking, all-day bars, food, live music, DJ sets, cheerleaders, and a full festival day around the rugby.",
    officialUrl: externalLinks.lit,
    registerUrl: externalLinks.litTickets,
    ticketUrl: externalLinks.litTickets,
    profileSlug: "lit7s",
  },
  {
    slug: "world-rugby-junior-championship-2026",
    title: "World Rugby Junior Championship 2026",
    date: "June 27-July 18, 2026",
    dateSort: "2026-06-27",
    endDateSort: "2026-07-18",
    location: "Tbilisi and Kutaisi, Georgia",
    city: "Tbilisi",
    region: "Europe",
    country: "Georgia",
    code: "15s",
    kind: "15s",
    level: "World championship",
    divisions: ["U20 men", "National teams"],
    amenities: ["Fixtures", "Match centers", "National teams", "Youth pathways"],
    image: "",
    summary:
      "The expanded U20 world championship is a high-value pathway event for national unions, emerging players, scouts, and travelling supporters.",
    officialUrl: externalLinks.worldRugbyU20,
    registerUrl: externalLinks.worldRugbyU20,
    ticketUrl: externalLinks.worldRugbyU20,
    profileSlug: "world-rugby",
  },
  {
    slug: "nations-championship-2026",
    title: "Nations Championship 2026",
    date: "July and November 2026",
    dateSort: "2026-07-04",
    endDateSort: "2026-11-30",
    location: "Christchurch, Cardiff, Cordoba, and additional international venues",
    city: "Multi-city",
    region: "Global",
    country: "Multi-country",
    code: "15s",
    kind: "15s",
    level: "International",
    divisions: ["Men", "Test rugby", "National teams"],
    amenities: ["Fixtures", "National teams", "Tables", "RWC 2027 pathways"],
    image: "",
    summary:
      "The new cross-hemisphere test window connects leading men's international sides with Rugby World Cup 2027 demand and national-team fan discovery.",
    officialUrl: externalLinks.nationsChampionship,
    registerUrl: externalLinks.nationsChampionship,
    ticketUrl: externalLinks.nationsChampionship,
    profileSlug: "world-rugby",
  },
  {
    slug: "rugby-europe-u18-boys-7s-championship-2026",
    title: "U18 Boys 7s Championship 2026",
    date: "July 11-12, 2026",
    dateSort: "2026-07-11",
    location: "Ricany, Czechia",
    city: "Ricany",
    region: "Europe",
    country: "Czechia",
    code: "7s",
    kind: "7s",
    level: "Youth international",
    divisions: ["U18 boys", "National teams"],
    amenities: ["Fixtures", "Pools", "Pathway teams"],
    image: "",
    summary: "A Rugby Europe youth sevens championship for national U18 boys squads across the European pathway.",
    officialUrl: "https://www.rugbyeurope.eu/competitions/season-2526/7s-tournaments-2026/u18-boys-7s-championship-2026/",
    registerUrl: "https://www.rugbyeurope.eu/competitions/season-2526/7s-tournaments-2026/u18-boys-7s-championship-2026/",
    ticketUrl: "https://www.rugbyeurope.eu/competitions/season-2526/7s-tournaments-2026/u18-boys-7s-championship-2026/",
    profileSlug: "rugby-europe",
  },
  {
    slug: "rugby-europe-u18-girls-7s-championship-2026",
    title: "U18 Girls 7s Championship 2026",
    date: "July 11-12, 2026",
    dateSort: "2026-07-11",
    location: "Ricany, Czechia",
    city: "Ricany",
    region: "Europe",
    country: "Czechia",
    code: "7s",
    kind: "7s",
    level: "Youth international",
    divisions: ["U18 girls", "National teams"],
    amenities: ["Fixtures", "Pools", "Pathway teams"],
    image: "",
    summary: "A Rugby Europe youth sevens championship focused on U18 girls national squads and next-generation pathways.",
    officialUrl: "https://www.rugbyeurope.eu/competitions/season-2526/7s-tournaments-2026/u18-girls-7s-championship-2026/",
    registerUrl: "https://www.rugbyeurope.eu/competitions/season-2526/7s-tournaments-2026/u18-girls-7s-championship-2026/",
    ticketUrl: "https://www.rugbyeurope.eu/competitions/season-2526/7s-tournaments-2026/u18-girls-7s-championship-2026/",
    profileSlug: "rugby-europe",
  },
  {
    slug: "national-junior-touch-cup-2026",
    title: "National Junior Touch Cup Series 2026",
    date: "July 11, 2026",
    dateSort: "2026-07-11",
    location: "Old Leamingtonians RFC, Leamington Spa",
    city: "Leamington Spa",
    region: "Europe",
    country: "United Kingdom",
    code: "Touch",
    kind: "Touch",
    level: "Youth national",
    divisions: ["U12", "U14", "U17", "Boys", "Girls", "Mixed"],
    amenities: ["Team entry", "Youth divisions", "Club venue"],
    image: "",
    summary: "A junior touch rugby competition with boys, girls, and mixed age-grade divisions at Old Leamingtonians RFC.",
    officialUrl: externalLinks.juniorTouch,
    registerUrl: externalLinks.juniorTouch,
    ticketUrl: externalLinks.juniorTouch,
    profileSlug: "touch-rugby",
  },
  {
    slug: "rugby-europe-u18-boys-7s-trophy-2-2026",
    title: "U18 Boys 7s Trophy 2 2026",
    date: "July 17-18, 2026",
    dateSort: "2026-07-17",
    location: "Budapest, Hungary",
    city: "Budapest",
    region: "Europe",
    country: "Hungary",
    code: "7s",
    kind: "7s",
    level: "Youth international",
    divisions: ["U18 boys", "National teams"],
    amenities: ["Fixtures", "Pathway teams"],
    image: "",
    summary: "A Rugby Europe U18 boys sevens trophy event staged in Budapest as part of the youth sevens calendar.",
    officialUrl: "https://www.rugbyeurope.eu/competitions/season-2526/7s-tournaments-2026/u18-boys-7s-trophy-2-2026/",
    registerUrl: "https://www.rugbyeurope.eu/competitions/season-2526/7s-tournaments-2026/u18-boys-7s-trophy-2-2026/",
    ticketUrl: "https://www.rugbyeurope.eu/competitions/season-2526/7s-tournaments-2026/u18-boys-7s-trophy-2-2026/",
    profileSlug: "rugby-europe",
  },
  {
    slug: "rugby-europe-u18-boys-7s-trophy-1-2026",
    title: "U18 Boys 7s Trophy 1 2026",
    date: "July 18-19, 2026",
    dateSort: "2026-07-18",
    location: "Budapest, Hungary",
    city: "Budapest",
    region: "Europe",
    country: "Hungary",
    code: "7s",
    kind: "7s",
    level: "Youth international",
    divisions: ["U18 boys", "National teams"],
    amenities: ["Fixtures", "Pathway teams"],
    image: "",
    summary: "A youth sevens trophy competition in Budapest for U18 boys national pathway teams.",
    officialUrl: "https://www.rugbyeurope.eu/competitions/season-2526/7s-tournaments-2026/u18-boys-7s-trophy-1-2026/",
    registerUrl: "https://www.rugbyeurope.eu/competitions/season-2526/7s-tournaments-2026/u18-boys-7s-trophy-1-2026/",
    ticketUrl: "https://www.rugbyeurope.eu/competitions/season-2526/7s-tournaments-2026/u18-boys-7s-trophy-1-2026/",
    profileSlug: "rugby-europe",
  },
  {
    slug: "rugby-europe-u18-girls-7s-trophy-2026",
    title: "U18 Girls 7s Trophy 2026",
    date: "July 18-19, 2026",
    dateSort: "2026-07-18",
    location: "Budapest, Hungary",
    city: "Budapest",
    region: "Europe",
    country: "Hungary",
    code: "7s",
    kind: "7s",
    level: "Youth international",
    divisions: ["U18 girls", "National teams"],
    amenities: ["Fixtures", "Pathway teams"],
    image: "",
    summary: "A Rugby Europe U18 girls sevens trophy tournament supporting the next wave of international players.",
    officialUrl: "https://www.rugbyeurope.eu/competitions/season-2526/7s-tournaments-2026/u18-girls-7s-trophy-2026/",
    registerUrl: "https://www.rugbyeurope.eu/competitions/season-2526/7s-tournaments-2026/u18-girls-7s-trophy-2026/",
    ticketUrl: "https://www.rugbyeurope.eu/competitions/season-2526/7s-tournaments-2026/u18-girls-7s-trophy-2026/",
    profileSlug: "rugby-europe",
  },
  {
    slug: "european-touch-championships-2026",
    title: "European Touch Championships 2026",
    date: "July 21-25, 2026",
    dateSort: "2026-07-21",
    location: "Vichy, France",
    city: "Vichy",
    region: "Europe",
    country: "France",
    code: "Touch",
    kind: "Touch",
    level: "European championship",
    divisions: ["Open", "Senior", "Masters", "Men", "Women", "Mixed"],
    amenities: ["National teams", "Multiple divisions", "Event village"],
    image: "",
    summary:
      "Europe's touch rugby championship brings open, senior, and masters divisions across men's, women's, and mixed categories.",
    officialUrl: externalLinks.europeanTouch,
    registerUrl: externalLinks.europeanTouchRegistration,
    ticketUrl: externalLinks.europeanTouch,
    profileSlug: "touch-rugby",
  },
  {
    slug: "split-mens-7s-championship-series-2026",
    title: "Men's 7s Championship Series - Split 2026",
    date: "July 24-26, 2026",
    dateSort: "2026-07-24",
    location: "Split, Croatia",
    city: "Split",
    region: "Europe",
    country: "Croatia",
    code: "7s",
    kind: "7s",
    level: "European championship",
    divisions: ["Men", "National teams"],
    amenities: ["Fixtures", "Standings", "National teams"],
    image: "",
    summary: "The Split leg closes out the Rugby Europe men's sevens championship series with national-team competition.",
    officialUrl: "https://www.rugbyeurope.eu/competitions/season-2526/7s-tournaments-2026/split-7s-mens-championship-series-2026/",
    registerUrl: "https://www.rugbyeurope.eu/competitions/season-2526/7s-tournaments-2026/split-7s-mens-championship-series-2026/",
    ticketUrl: "https://www.rugbyeurope.eu/competitions/season-2526/7s-tournaments-2026/split-7s-mens-championship-series-2026/",
    profileSlug: "rugby-europe",
  },
  {
    slug: "split-womens-7s-championship-series-2026",
    title: "Women's 7s Championship Series - Split 2026",
    date: "July 24-26, 2026",
    dateSort: "2026-07-24",
    location: "Split, Croatia",
    city: "Split",
    region: "Europe",
    country: "Croatia",
    code: "7s",
    kind: "7s",
    level: "European championship",
    divisions: ["Women", "National teams"],
    amenities: ["Fixtures", "Standings", "National teams"],
    image: "",
    summary: "The women's Split championship series leg features European national squads competing in senior sevens.",
    officialUrl: "https://www.rugbyeurope.eu/competitions/season-2526/7s-tournaments-2026/split-7s-womens-championship-series-2026/",
    registerUrl: "https://www.rugbyeurope.eu/competitions/season-2526/7s-tournaments-2026/split-7s-womens-championship-series-2026/",
    ticketUrl: "https://www.rugbyeurope.eu/competitions/season-2526/7s-tournaments-2026/split-7s-womens-championship-series-2026/",
    profileSlug: "rugby-europe",
  },
  {
    slug: "european-university-games-7s-2026",
    title: "European University Games Rugby 7s 2026",
    date: "July 28-30, 2026",
    dateSort: "2026-07-28",
    location: "Salerno, Italy",
    city: "Salerno",
    region: "Europe",
    country: "Italy",
    code: "7s",
    kind: "7s",
    level: "University",
    divisions: ["University teams", "7s"],
    amenities: ["University sport", "International teams"],
    image: "",
    summary: "Rugby sevens appears in the European University Games program in Salerno, connecting student athletes and national university systems.",
    officialUrl: externalLinks.rugbyEuropeBeach,
    registerUrl: externalLinks.rugbyEuropeBeach,
    ticketUrl: externalLinks.rugbyEuropeBeach,
    profileSlug: "rugby-europe",
  },
  {
    slug: "british-irish-cup-tag-rugby-2026",
    title: "British & Irish Cup Tag Rugby 2026",
    date: "August 1-2, 2026",
    dateSort: "2026-08-01",
    location: "University College Dublin, Ireland",
    city: "Dublin",
    region: "Europe",
    country: "Ireland",
    code: "Tag",
    kind: "Tag",
    level: "Club and festival",
    divisions: ["Tag rugby", "Club teams", "Festival teams"],
    amenities: ["Team registration", "Club tournament", "Festival weekend"],
    image: "",
    summary: "The British & Irish Cup brings tag rugby teams to University College Dublin for a cross-island club and festival weekend.",
    officialUrl: externalLinks.britishIrishCup,
    registerUrl: externalLinks.britishIrishCupRegistration,
    ticketUrl: externalLinks.britishIrishCup,
    profileSlug: "try-tag-rugby",
  },
  {
    slug: "european-youth-touch-championships-2026",
    title: "European Youth Touch Championships 2026",
    date: "August 13-16, 2026",
    dateSort: "2026-08-13",
    location: "University of Warwick, Coventry",
    city: "Coventry",
    region: "Europe",
    country: "United Kingdom",
    code: "Touch",
    kind: "Touch",
    level: "Youth international",
    divisions: ["U15", "U18", "U20", "Boys", "Girls", "Mixed"],
    amenities: ["Youth divisions", "University venue", "National teams"],
    image: "",
    summary: "Youth touch rugby's European championship hosts U15, U18, and U20 divisions across boys, girls, and mixed categories.",
    officialUrl: externalLinks.europeanYouthTouch,
    registerUrl: externalLinks.europeanYouthTouchRegistration,
    ticketUrl: externalLinks.europeanYouthTouch,
    profileSlug: "touch-rugby",
  },
  {
    slug: "tagfest-leeds-2026",
    title: "TagFest Leeds 2026",
    date: "August 15, 2026",
    dateSort: "2026-08-15",
    location: "Leeds, United Kingdom",
    city: "Leeds",
    region: "Europe",
    country: "United Kingdom",
    code: "Tag",
    kind: "Tag",
    level: "Community",
    divisions: ["Mixed tag", "7-a-side"],
    amenities: ["Team entry", "Tag tournament", "Social rugby"],
    image: "",
    summary: "Try Tag Rugby's Leeds event gives mixed tag teams a social but competitive tournament day with team registration.",
    officialUrl: externalLinks.tryTagLeeds,
    registerUrl: externalLinks.tryTagLeeds,
    ticketUrl: externalLinks.tryTagLeeds,
    profileSlug: "try-tag-rugby",
  },
  {
    slug: "rugbytown-7s-2026",
    title: "RugbyTown 7s 2026",
    date: "August 21-23, 2026",
    dateSort: "2026-08-21",
    location: "Infinity Park Stadium, Glendale, Colorado",
    city: "Glendale",
    region: "North America",
    country: "United States",
    code: "7s",
    kind: "7s",
    level: "International invitational",
    divisions: ["Men", "Invitational", "Elite"],
    amenities: ["Tickets", "Stadium event", "International teams", "Food", "Fan village"],
    image: imageFor("rugbytown-7s", 17),
    summary:
      "RugbyTown 7s brings international and invitational sevens teams to Infinity Park for a full stadium weekend in Glendale.",
    officialUrl: externalLinks.rugbyTown,
    registerUrl: externalLinks.rugbyTown,
    ticketUrl: externalLinks.rugbyTownTickets,
    profileSlug: "rugbytown-usa",
  },
  {
    slug: "beach-rugby-championship-2026",
    title: "Beach Rugby Championship 2026",
    date: "August 22-23, 2026",
    dateSort: "2026-08-22",
    location: "Chisinau, Moldova",
    city: "Chisinau",
    region: "Europe",
    country: "Moldova",
    code: "Beach",
    kind: "Beach",
    level: "European championship",
    divisions: ["Men", "Women", "Beach rugby"],
    amenities: ["Beach rugby", "National teams", "European title"],
    image: "",
    summary: "Rugby Europe's beach rugby championship brings men's and women's beach competition to Chisinau.",
    officialUrl: externalLinks.rugbyEuropeBeach,
    registerUrl: externalLinks.rugbyEuropeBeach,
    ticketUrl: externalLinks.rugbyEuropeBeach,
    profileSlug: "beach-rugby",
  },
  {
    slug: "ultimate-sevens-2026",
    title: "Ultimate Sevens Championship 2026",
    date: "August-September 2026",
    dateSort: "2026-08-28",
    location: "European host cities",
    city: "European circuit",
    region: "Europe",
    country: "Multi-country",
    code: "7s",
    kind: "7s",
    level: "Professional series",
    divisions: ["Men", "Women", "Clubs"],
    amenities: ["Club franchises", "Broadcast", "Finals", "Tickets"],
    image: "",
    summary:
      "A new professional sevens championship model planned around club teams, European destinations, men's and women's competition, and finals programming.",
    officialUrl: externalLinks.ultimateSevens,
    registerUrl: externalLinks.ultimateSevens,
    ticketUrl: externalLinks.ultimateSevens,
    profileSlug: "ultimate-sevens",
  },
  {
    slug: "pacific-nations-cup-2026",
    title: "Pacific Nations Cup 2026",
    date: "September 12-19, 2026",
    dateSort: "2026-09-12",
    location: "Osaka and Tokyo, Japan",
    city: "Osaka",
    region: "Asia Pacific",
    country: "Japan",
    code: "15s",
    kind: "15s",
    level: "International",
    divisions: ["Canada", "Fiji", "Japan", "USA"],
    amenities: ["Semifinals", "Final day", "National teams"],
    image: "",
    summary: "The Pacific Nations Cup returns with Canada, Fiji, Japan, and the USA in a compact international 15s championship window.",
    officialUrl: externalLinks.pacificNationsCup,
    registerUrl: externalLinks.pacificNationsCup,
    ticketUrl: externalLinks.pacificNationsCup,
    profileSlug: "world-rugby",
  },
  {
    slug: "wxv-global-series-challenger-2026",
    title: "WXV Global Series Challenger 2026",
    date: "September 13-26, 2026",
    dateSort: "2026-09-13",
    location: "Kai Tak Sports Park, Hong Kong",
    city: "Hong Kong",
    region: "Asia Pacific",
    country: "Hong Kong",
    code: "15s",
    kind: "15s",
    level: "Women's international",
    divisions: ["Women", "International", "Global Series"],
    amenities: ["Triple-header match days", "National teams", "Women's rugby"],
    image: "",
    summary: "The WXV Global Series Challenger brings women's international XVs teams to Hong Kong for a centrally hosted tournament window.",
    officialUrl: externalLinks.wxvChallenger,
    registerUrl: externalLinks.wxvChallenger,
    ticketUrl: externalLinks.wxvChallenger,
    profileSlug: "world-rugby",
  },
  {
    slug: "doordash-national-youth-championships-2026",
    title: "DoorDash National Youth Championships 2026",
    date: "September 28-October 1, 2026",
    dateSort: "2026-09-28",
    location: "Coffs Harbour, Australia",
    city: "Coffs Harbour",
    region: "Asia Pacific",
    country: "Australia",
    code: "Touch",
    kind: "Touch",
    level: "Youth national",
    divisions: ["U12", "U14", "U16", "U18", "Boys", "Girls"],
    amenities: ["Team pathways", "Youth divisions", "National event"],
    image: "",
    summary: "Australia's national youth touch football event gathers age-grade boys and girls teams at Coffs Harbour.",
    officialUrl: externalLinks.touchAustraliaYouth,
    registerUrl: externalLinks.touchAustraliaYouth,
    ticketUrl: externalLinks.touchAustraliaYouth,
    profileSlug: "touch-rugby",
  },
  {
    slug: "asia-pacific-seniors-touch-cup-2026",
    title: "Asia Pacific Seniors Touch Cup 2026",
    date: "October 7-10, 2026",
    dateSort: "2026-10-07",
    location: "Utsunomiya, Japan",
    city: "Utsunomiya",
    region: "Asia Pacific",
    country: "Japan",
    code: "Touch",
    kind: "Touch",
    level: "International",
    divisions: ["Senior", "Masters", "Men", "Women", "Mixed"],
    amenities: ["Representative teams", "Managers", "Masters rugby"],
    image: "",
    summary: "A senior and masters touch event in Japan with single-gender and mixed representative divisions.",
    officialUrl: externalLinks.touchAustraliaSeniors,
    registerUrl: externalLinks.touchAustraliaSeniors,
    ticketUrl: externalLinks.touchAustraliaSeniors,
    profileSlug: "touch-rugby",
  },
  {
    slug: "school-sport-australia-touch-football-2026",
    title: "School Sport Australia Touch Football 2026",
    date: "October 25-30, 2026",
    dateSort: "2026-10-25",
    location: "Newcastle, New South Wales, Australia",
    city: "Newcastle",
    region: "Asia Pacific",
    country: "Australia",
    code: "Touch",
    kind: "Touch",
    level: "School representative",
    divisions: ["12U", "15U", "School teams"],
    amenities: ["School pathways", "Representative teams", "Youth touch"],
    image: "",
    summary: "School Sport Australia's touch football championship gives school representative teams a national tournament platform.",
    officialUrl: externalLinks.schoolSportAustraliaTouch,
    registerUrl: externalLinks.schoolSportAustraliaTouch,
    ticketUrl: externalLinks.schoolSportAustraliaTouch,
    profileSlug: "touch-rugby",
  },
  {
    slug: "youth-olympic-games-rugby-7s-2026",
    title: "Youth Olympic Games Rugby 7s 2026",
    date: "November 1-3, 2026",
    dateSort: "2026-11-01",
    location: "Dakar, Senegal",
    city: "Dakar",
    region: "Africa",
    country: "Senegal",
    code: "7s",
    kind: "7s",
    level: "Youth Olympic",
    divisions: ["Youth national teams", "Olympic pathway"],
    amenities: ["Youth Olympics", "National teams", "Global pathway"],
    image: "",
    summary: "Rugby sevens returns to the Youth Olympic Games program in Dakar, connecting national youth pathways with Olympic competition.",
    officialUrl: externalLinks.rugbyEuropeBeach,
    registerUrl: externalLinks.rugbyEuropeBeach,
    ticketUrl: externalLinks.rugbyEuropeBeach,
    profileSlug: "world-rugby",
  },
  {
    slug: "world-rugby-nations-cup-november-2026",
    title: "World Rugby Nations Cup 2026 - November Window",
    date: "November 2026",
    dateSort: "2026-11-07",
    location: "International venues to be announced",
    city: "Global",
    region: "Global",
    country: "Multi-country",
    code: "15s",
    kind: "15s",
    level: "International",
    divisions: ["National teams", "Regional pools"],
    amenities: ["Fixtures", "National teams", "Standings"],
    image: "",
    summary: "The Nations Cup returns in the November international window with fixtures and venues to follow from World Rugby.",
    officialUrl: externalLinks.worldRugbyNationsCup,
    registerUrl: externalLinks.worldRugbyNationsCup,
    ticketUrl: externalLinks.worldRugbyNationsCup,
    profileSlug: "world-rugby",
  },
  {
    slug: "emirates-dubai-7s-2026",
    title: "Emirates Dubai 7s 2026",
    date: "November 27-29, 2026",
    dateSort: "2026-11-27",
    location: "The Sevens Stadium, Dubai",
    city: "Dubai",
    region: "Middle East",
    country: "United Arab Emirates",
    code: "7s",
    kind: "7s",
    level: "International festival",
    divisions: ["Rugby", "Invitational", "Open", "Youth", "Social"],
    amenities: ["Team registration", "Spectator tickets", "Festival", "Travel"],
    image: imageFor("emirates-dubai-7s", 22),
    summary:
      "Dubai's major rugby sevens festival combines invitational rugby, mass participation, live entertainment, travel, and ticketing.",
    officialUrl: externalLinks.dubai,
    registerUrl: externalLinks.dubai,
    ticketUrl: externalLinks.dubaiTickets,
    profileSlug: "emirates-dubai-7s",
  },
  {
    slug: "mens-rugby-world-cup-2027-draw",
    title: "Men's Rugby World Cup 2027 Draw",
    date: "December 3, 2026",
    dateSort: "2026-12-03",
    location: "Sydney, Australia",
    city: "Sydney",
    region: "Asia Pacific",
    country: "Australia",
    code: "15s",
    kind: "15s",
    level: "World Cup",
    divisions: ["24 national teams", "Pool draw"],
    amenities: ["Draw event", "National teams", "Future fixtures"],
    image: "",
    summary: "The expanded 24-team Men's Rugby World Cup draw sets the pool stage for Australia 2027.",
    officialUrl: externalLinks.rwcDraw,
    registerUrl: externalLinks.rwc2027,
    ticketUrl: externalLinks.rwc2027,
    profileSlug: "world-rugby",
  },
  {
    slug: "tropical-7s-2027",
    title: "Tropical 7s 2027",
    date: "March 25-28, 2027",
    dateSort: "2027-03-25",
    location: "Tampa, Florida",
    city: "Tampa",
    region: "North America",
    country: "United States",
    code: "7s",
    kind: "7s",
    level: "Youth and senior international",
    divisions: ["Youth", "U23", "Senior", "Boys", "Girls", "Men", "Women"],
    amenities: ["Team entry", "Training", "International teams", "Florida travel"],
    image: imageFor("tropical-7s", 23),
    summary: "Tropical 7s returns to Tampa with one of the broadest youth, academy, U23, and senior sevens tournament programs.",
    officialUrl: externalLinks.tropical,
    registerUrl: externalLinks.tropicalFees,
    ticketUrl: externalLinks.tropical,
    profileSlug: "tropical-7s",
  },
  {
    slug: "majorca-beach-rugby-2027",
    title: "Majorca Beach Rugby 2027",
    date: "2027 event window",
    dateSort: "2027-05-01",
    location: "Majorca, Spain",
    city: "Majorca",
    region: "Europe",
    country: "Spain",
    code: "Beach",
    kind: "Beach",
    level: "International social",
    divisions: ["Beach rugby", "Men", "Women", "Social"],
    amenities: ["Team packages", "Beach rugby", "Travel", "Afterparty"],
    image: imageFor("majorca-beach-rugby-2", 25),
    summary: "Majorca Beach Rugby combines travelling teams, beach rugby, social competition, and tournament weekend packages.",
    officialUrl: externalLinks.majorca,
    registerUrl: externalLinks.majorca,
    ticketUrl: externalLinks.majorca,
    profileSlug: "beach-rugby",
  },
  {
    slug: "algarve-7s-2027",
    title: "Algarve 7s 2027",
    date: "June 2027",
    dateSort: "2027-06-01",
    location: "Algarve, Portugal",
    city: "Algarve",
    region: "Europe",
    country: "Portugal",
    code: "7s",
    kind: "7s",
    level: "International club",
    divisions: ["Men", "Women", "Vets", "Elite", "Open"],
    amenities: ["Team packages", "Travel", "Festival", "International clubs"],
    image: imageFor("algarve-7s", 27),
    summary: "Algarve 7s remains a destination tournament profile for elite, open, women's, men's, and vets teams in Portugal.",
    officialUrl: externalLinks.algarve,
    registerUrl: externalLinks.algarve,
    ticketUrl: externalLinks.algarve,
    profileSlug: "algarve-7s",
  },
  {
    slug: "mens-rugby-world-cup-2027",
    title: "Men's Rugby World Cup 2027",
    date: "October 1-November 13, 2027",
    dateSort: "2027-10-01",
    location: "Australia host cities",
    city: "Australia",
    region: "Asia Pacific",
    country: "Australia",
    code: "15s",
    kind: "15s",
    level: "World Cup",
    divisions: ["24 national teams", "15s"],
    amenities: ["Tickets", "Travel", "Fixtures", "National teams", "Media"],
    image: "",
    summary: "Australia hosts the expanded Men's Rugby World Cup, the biggest global 15s tournament and a major destination event.",
    officialUrl: externalLinks.rwc2027,
    registerUrl: externalLinks.rwc2027,
    ticketUrl: externalLinks.rwc2027Tickets,
    profileSlug: "world-rugby",
  },
];

const recentEvents = [
  {
    slug: "lignano-beach-rugby-2026",
    title: "Lignano International European Beach Rugby Cup 2026",
    date: "July 4-5, 2026",
    dateSort: "2026-07-04",
    location: "Beach Arena, Lignano Sabbiadoro",
    city: "Lignano Sabbiadoro",
    region: "Europe",
    country: "Italy",
    code: "Beach",
    kind: "Beach",
    level: "European beach",
    divisions: ["Beach rugby", "Men", "Women"],
    amenities: ["Beach arena", "European cup", "Festival setting"],
    image: imageFor("lignano-beach-rugby", 28),
    summary: "A long-running beach rugby weekend on the Italian coast with European beach rugby competition and destination travel.",
    officialUrl: "https://lignanosabbiadoro.it/en/eventi/lignano-international-european-beach-rugby-cup/",
    registerUrl: "https://lignanosabbiadoro.it/en/eventi/lignano-international-european-beach-rugby-cup/",
    ticketUrl: "https://lignanosabbiadoro.it/en/eventi/lignano-international-european-beach-rugby-cup/",
    isPast: true,
    profileSlug: "beach-rugby",
  },
  {
    slug: "figueira-beach-rugby-2026",
    title: "Figueira Beach Rugby 2026",
    date: "June 27-28, 2026",
    dateSort: "2026-06-27",
    location: "Figueira da Foz, Portugal",
    city: "Figueira da Foz",
    region: "Europe",
    country: "Portugal",
    code: "Beach",
    kind: "Beach",
    level: "International beach",
    divisions: ["Beach rugby", "Men", "Women"],
    amenities: ["Beach rugby", "International teams", "Destination weekend"],
    image: imageFor("figueira-beach-rugby", 29),
    summary: "Portugal's beach rugby tournament profile connects travelling clubs, coastal competition, and media from the beach rugby calendar.",
    officialUrl: "https://www.portugalbeachrugby.com/",
    registerUrl: "https://www.portugalbeachrugby.com/",
    ticketUrl: "https://www.portugalbeachrugby.com/",
    isPast: true,
    profileSlug: "beach-rugby",
  },
  {
    slug: "ameland-beach-rugby-2026",
    title: "Ameland Beach Rugby Festival 2026",
    date: "June 12-14, 2026",
    dateSort: "2026-06-12",
    location: "Ameland, Netherlands",
    city: "Ameland",
    region: "Europe",
    country: "Netherlands",
    code: "Beach",
    kind: "Beach",
    level: "International beach festival",
    divisions: ["Beach rugby", "Men", "Women", "Youth"],
    amenities: ["Festival", "Beach rugby", "Multiple divisions"],
    image: imageFor("ameland-beach-rugby", 32),
    summary: "Ameland's beach rugby festival is a major Dutch beach tournament with broad team categories and repeat-edition details.",
    officialUrl: "https://beachrugby.nl/",
    registerUrl: "https://beachrugby.nl/",
    ticketUrl: "https://beachrugby.nl/",
    isPast: true,
    profileSlug: "beach-rugby",
  },
  {
    slug: "north-sea-beach-rugby-2026",
    title: "North Sea Beach Rugby 2026",
    date: "June 27-28, 2026",
    dateSort: "2026-06-27",
    location: "Scheveningen, Netherlands",
    city: "Scheveningen",
    region: "Europe",
    country: "Netherlands",
    code: "Beach",
    kind: "Beach",
    level: "Beach rugby",
    divisions: ["Men", "Women", "Youth", "Girls"],
    amenities: ["Team entry", "Beach rugby", "Youth divisions"],
    image: imageFor("north-sea-beach-rugby", 34),
    summary: "North Sea Beach Rugby combines men's, women's, youth, and girls' team entry with a beach tournament weekend.",
    officialUrl: "https://northseabeachrugby.com/enter-a-team/",
    registerUrl: "https://northseabeachrugby.com/enter-a-team/",
    ticketUrl: "https://northseabeachrugby.com/enter-a-team/",
    isPast: true,
    profileSlug: "beach-rugby",
  },
];

const profileEventEnrichments = {
  "rugby-europe": {
    image: "https://www.rugbyeurope.eu/media/50adwbgu/bm4i1399.jpg?width=1200&height=630&format=webp&quality=80&mode=crop&v=1dc69e8e8e01140",
    socialLinks: socialSets.rugbyEurope,
    externalLinks: [{ label: "Rugby Europe", url: "https://www.rugbyeurope.eu/" }],
  },
  "touch-rugby": {
    socialLinks: socialSets.internationalTouch,
    externalLinks: [{ label: "International Touch", url: "https://www.internationaltouch.org/" }],
  },
  "world-rugby": {
    socialLinks: socialSets.rugbyWorldCup,
    externalLinks: [{ label: "World Rugby", url: "https://www.world.rugby/" }],
  },
  "beach-rugby": {
    socialLinks: socialSets.majorca,
  },
};

const eventEnrichments = {
  "lit-7s-london-2026": {
    image: "https://www.lit7s.com/wp-content/uploads/2024/04/image0-2.jpeg",
    socialLinks: socialSets.lit,
    externalLinks: [{ label: "LIT7s", url: externalLinks.lit }],
  },
  "world-rugby-junior-championship-2026": {
    image: "https://resources.worldrugby-rims.pulselive.com/photo-resources/2026/01/15/f7d52801-b8a7-41b1-a7e4-b682b7fdd3b3/JWC2026_Logo_RGB_Hor_SC_DarkRed.jpg?width=1200&height=630",
  },
  "nations-championship-2026": {
    image: "https://resources.world.rugby/photo-resources/2020/12/14/0bc19e91-bf74-4abb-b24d-46aa981048aa/WR_BM_LIN_FC_R_POS.png?width=1200&height=630",
  },
  "world-rugby-nations-cup-november-2026": {
    image: "https://resources.worldrugby-rims.pulselive.com/photo-resources/2026/03/05/824b67c5-ae31-48e6-b569-602bff466181/nations-cup-2026-logo.png?width=1200&height=630",
  },
  "pacific-nations-cup-2026": {
    image: "https://resources.worldrugby-rims.pulselive.com/photo-resources/2024/02/21/ce485388-7ff2-4325-aefa-aedb0150c580/PNC_PPT_Template.png?width=1200&height=630",
  },
  "wxv-global-series-challenger-2026": {
    image: "https://www.world.rugby/resources/prod/v9.19.3/i/meta/wr.png",
  },
  "rugbytown-7s-2026": {
    image: "https://rugbytownusa.com/wp-content/uploads/2025/04/RUGBYTOWN_USA_2022_RGB_Web-768x768.webp",
    socialLinks: socialSets.rugbyTown,
    externalLinks: [{ label: "RugbyTown USA", url: externalLinks.rugbyTown }],
  },
  "european-touch-championships-2026": {
    socialLinks: socialSets.internationalTouch,
  },
  "european-youth-touch-championships-2026": {
    image: "https://res.cloudinary.com/internationaltouch/image/fetch/s--QaEAjZQ1--/f_jpg,h_300/https://fit-prod-media-syd1.syd1.cdn.digitaloceanspaces.com/public/event_logo/FIT_EYTC26_logo_cmyk_aw.jpg",
  },
  "asia-pacific-seniors-touch-cup-2026": {
    image: "https://res.cloudinary.com/internationaltouch/image/fetch/s--aTCB2kTZ--/f_jpg,h_300/https://fit-prod-media-syd1.syd1.cdn.digitaloceanspaces.com/public/event_logo/FIT_APSTC_26_Logo_CMYK.jpg",
  },
  "british-irish-cup-tag-rugby-2026": {
    image: "https://static.wixstatic.com/media/2e0c8a_7f8be6f1025c4dd7b509355f5cb23966~mv2.png/v1/fill/w_1000,h_551,al_c,q_90,usm_0.66_1.00_0.01/2e0c8a_7f8be6f1025c4dd7b509355f5cb23966~mv2.png",
  },
  "emirates-dubai-7s-2026": {
    socialLinks: socialSets.dubai,
    contactEmails: ["guestservices@b9events.com", "ticketing@b9events.com"],
    externalLinks: [{ label: "Emirates Dubai 7s", url: externalLinks.dubai }],
  },
  "tropical-7s-2027": {
    image: "https://static.wixstatic.com/media/ad99cf_95fa857bc9324789a9e0e889c5eccaef~mv2.png/v1/fit/w_2500,h_1330,al_c/ad99cf_95fa857bc9324789a9e0e889c5eccaef~mv2.png",
    socialLinks: socialSets.tropical,
    contactEmails: ["info@tropical7s.com"],
    externalLinks: [{ label: "Tropical 7s", url: externalLinks.tropical }],
  },
  "mens-rugby-world-cup-2027": {
    image: "https://resources.worldrugby-rims.pulselive.com/photo-resources/2024/12/11/e3f535e2-78b6-48de-a000-f17413a5f883/WebbEllisCup_RWC27_Australia.png?width=1200&height=630",
    socialLinks: socialSets.rugbyWorldCup,
    externalLinks: [{ label: "RWC 2027 tickets", url: externalLinks.rwc2027Tickets }],
  },
  "mens-rugby-world-cup-2027-draw": {
    image: "https://resources.worldrugby-rims.pulselive.com/photo-resources/2024/12/11/e3f535e2-78b6-48de-a000-f17413a5f883/WebbEllisCup_RWC27_Australia.png?width=1200&height=630",
    socialLinks: socialSets.rugbyWorldCup,
  },
  "majorca-beach-rugby-2027": {
    socialLinks: socialSets.majorca,
    externalLinks: [{ label: "Majorca Beach Rugby", url: externalLinks.majorca }],
  },
  "algarve-7s-2027": {
    image: "https://static.wixstatic.com/media/c4dd98_afd295fa598143bc94802db84b8458ef~mv2.jpg/v1/fill/w_2500,h_1767,al_c/c4dd98_afd295fa598143bc94802db84b8458ef~mv2.jpg",
    socialLinks: socialSets.algarve,
    contactEmails: ["info@sports-ventures.com", "algarve7s@sports-ventures.com"],
    externalLinks: [{ label: "Algarve 7s", url: externalLinks.algarve }],
  },
};

const eventImageAssets = {
  "abingdon-7s": "/assets/events/abingdon-7s.webp",
  "alaska-midnight-sun-7s": "/assets/events/alaska-midnight-sun-7s.png",
  "algarve-7s": "/assets/events/algarve-7s.png",
  "algarve-7s-2027": "/assets/events/algarve-7s-2027.jpg",
  "ameland-beach-rugby": "/assets/events/ameland-beach-rugby.png",
  "ameland-beach-rugby-2026": "/assets/events/ameland-beach-rugby-2026.png",
  "amsterdam-7s": "/assets/events/amsterdam-7s.jpg",
  "asia-pacific-seniors-touch-cup-2026": "/assets/events/asia-pacific-seniors-touch-cup-2026.jpg",
  "autumn-tag-rugby-tournament": "/assets/events/autumn-tag-rugby-tournament.webp",
  "balaton-beach-rugby": "/assets/events/balaton-beach-rugby.png",
  "bali-10s": "/assets/events/bali-10s.webp",
  "beach-rugby-championship-2026": "/assets/events/beach-rugby-championship-2026.jpg",
  "beach-rugby-tournament-by-wight-wave-beach-sports-festival-2022": "/assets/events/beach-rugby-tournament-by-wight-wave-beach-sports-festival-2022.png",
  "beerfoot-beach-7s": "/assets/events/beerfoot-beach-7s.webp",
  "beverley-womens-7s": "/assets/events/beverley-womens-7s.png",
  "billingham-rugby-festival": "/assets/events/billingham-rugby-festival.png",
  "bomber-county-10s": "/assets/events/bomber-county-10s.webp",
  "bournemouth-7s-2": "/assets/events/bournemouth-7s-2.png",
  "british-irish-cup-tag-rugby-2026": "/assets/events/british-irish-cup-tag-rugby-2026.png",
  "brussels-rugby-7s": "/assets/events/brussels-rugby-7s.png",
  "budapest-7s": "/assets/events/budapest-7s.jpg",
  "can-am-7s": "/assets/events/can-am-7s.webp",
  "chassiscab-daf-7s": "/assets/events/chassiscab-daf-7s.jpg",
  "cheltenham-7s": "/assets/events/cheltenham-7s.png",
  "chester-7s": "/assets/events/chester-7s.jpg",
  "chiswick-7s": "/assets/events/chiswick-7s.png",
  "cleveland-beach-rugby": "/assets/events/cleveland-beach-rugby.png",
  "costa-blanca-beach-rugby": "/assets/events/costa-blanca-beach-rugby.png",
  "cyril-7s": "/assets/events/cyril-7s.webp",
  "decky-memorial-touch-rugby-tournament": "/assets/events/decky-memorial-touch-rugby-tournament.webp",
  "doordash-national-youth-championships-2026": "/assets/events/doordash-national-youth-championships-2026.jpg",
  "edinburgh-city-7s": "/assets/events/edinburgh-city-7s.png",
  "eggchaser-7s": "/assets/events/eggchaser-7s.jpg",
  "egham-7s": "/assets/events/egham-7s.png",
  "emirates-dubai-7s": "/assets/events/emirates-dubai-7s.png",
  "emirates-dubai-7s-2026": "/assets/events/emirates-dubai-7s-2026.png",
  "energia-7s-2022": "/assets/events/energia-7s-2022.jpg",
  "european-grand-old-rugby-festival-verona-italy": "/assets/events/european-grand-old-rugby-festival-verona-italy.jpg",
  "european-touch-championships-2026": "/assets/events/european-touch-championships-2026.jpg",
  "european-university-games-7s-2026": "/assets/events/european-university-games-7s-2026.webp",
  "european-youth-touch-championships-2026": "/assets/events/european-youth-touch-championships-2026.jpg",
  "exmouth-beach-rugby-fest": "/assets/events/exmouth-beach-rugby-fest.jpg",
  "fajana": "/assets/events/fajana.webp",
  "fat-blokes-7s": "/assets/events/fat-blokes-7s.png",
  "figueira-beach-rugby": "/assets/events/figueira-beach-rugby.png",
  "figueira-beach-rugby-2026": "/assets/events/figueira-beach-rugby-2026.png",
  "flag-city-10s": "/assets/events/flag-city-10s.webp",
  "forest-sevens": "/assets/events/forest-sevens.webp",
  "frome-7s": "/assets/events/frome-7s.png",
  "gibraltar-7s": "/assets/events/gibraltar-7s.png",
  "grenada-rugby-world-7s": "/assets/events/grenada-rugby-world-7s.webp",
  "grenada-rugby-world-7s-2": "/assets/events/grenada-rugby-world-7s-2.png",
  "heart-of-wales-7s": "/assets/events/heart-of-wales-7s.png",
  "house-of-hope-7s": "/assets/events/house-of-hope-7s.png",
  "hsbc-cape-town-7s": "/assets/events/hsbc-cape-town-7s.webp",
  "hsbc-hong-kong-sevens": "/assets/events/hsbc-hong-kong-sevens.webp",
  "hsbc-los-angeles-7s-2": "/assets/events/hsbc-los-angeles-7s-2.webp",
  "hsbc-new-zealand-7s": "/assets/events/hsbc-new-zealand-7s.webp",
  "hsbc-sydney-7s": "/assets/events/hsbc-sydney-7s.webp",
  "isuzu-touch-rugby-tournament": "/assets/events/isuzu-touch-rugby-tournament.png",
  "jc-technique-sevens": "/assets/events/jc-technique-sevens.png",
  "jf7s-wimbledon": "/assets/events/jf7s-wimbledon.png",
  "jungle-sevens": "/assets/events/jungle-sevens.png",
  "kootenai-7s": "/assets/events/kootenai-7s.webp",
  "ldn-7s": "/assets/events/ldn-7s.jpg",
  "lignano-beach-rugby": "/assets/events/lignano-beach-rugby.png",
  "lignano-beach-rugby-2026": "/assets/events/lignano-beach-rugby-2026.png",
  "lit-7s": "/assets/events/lit-7s.png",
  "lit-7s-london-2026": "/assets/events/lit-7s-london-2026.jpg",
  "london9s-2022-international-amateur-rugby9s-festival": "/assets/events/london9s-2022-international-amateur-rugby9s-festival.jpg",
  "lumberjack-10s": "/assets/events/lumberjack-10s.webp",
  "lusty-glaze-beach": "/assets/events/lusty-glaze-beach.png",
  "macclesfield-7s": "/assets/events/macclesfield-7s.png",
  "majorca-beach-rugby-2": "/assets/events/majorca-beach-rugby-2.png",
  "majorca-beach-rugby-2027": "/assets/events/majorca-beach-rugby-2027.png",
  "manor-7s": "/assets/events/manor-7s.jpg",
  "manor-7s-2": "/assets/events/manor-7s-2.png",
  "marseille-south-beach-rugby": "/assets/events/marseille-south-beach-rugby.png",
  "matthew-new-memorial-7s": "/assets/events/matthew-new-memorial-7s.jpg",
  "memorial-10s-rugby": "/assets/events/memorial-10s-rugby.jpg",
  "mens-rugby-world-cup-2027": "/assets/events/mens-rugby-world-cup-2027.webp",
  "mens-rugby-world-cup-2027-draw": "/assets/events/mens-rugby-world-cup-2027-draw.webp",
  "midlands-midnight-7s": "/assets/events/midlands-midnight-7s.jpg",
  "mkruggerfest": "/assets/events/mkruggerfest.png",
  "moonshine-7s": "/assets/events/moonshine-7s.png",
  "national-junior-touch-cup-2026": "/assets/events/national-junior-touch-cup-2026.webp",
  "national-pub-7s": "/assets/events/national-pub-7s.png",
  "nations-championship-2026": "/assets/events/nations-championship-2026.jpg",
  "north-sea-beach-rugby": "/assets/events/north-sea-beach-rugby.png",
  "north-sea-beach-rugby-2026": "/assets/events/north-sea-beach-rugby-2026.png",
  "norwich-7s": "/assets/events/norwich-7s.png",
  "november-london-7s-tournament": "/assets/events/november-london-7s-tournament.webp",
  "old-pen-7s": "/assets/events/old-pen-7s.png",
  "oldershaw-cider-7s": "/assets/events/oldershaw-cider-7s.webp",
  "orkney-rfc-social-10s-tournament": "/assets/events/orkney-rfc-social-10s-tournament.webp",
  "pacific-nations-cup-2026": "/assets/events/pacific-nations-cup-2026.webp",
  "pigfest-10s": "/assets/events/pigfest-10s.png",
  "premier-rugby-sevens-the-bay-area": "/assets/events/premier-rugby-sevens-the-bay-area.webp",
  "premier-rugby-sevens-the-championship": "/assets/events/premier-rugby-sevens-the-championship.webp",
  "premier-rugby-sevens-the-district": "/assets/events/premier-rugby-sevens-the-district.webp",
  "prishtina-7s": "/assets/events/prishtina-7s.webp",
  "rock-n-roll-7s": "/assets/events/rock-n-roll-7s.png",
  "rugby-europe-u18-boys-7s-championship-2026": "/assets/events/rugby-europe-u18-boys-7s-championship-2026.webp",
  "rugby-europe-u18-boys-7s-trophy-1-2026": "/assets/events/rugby-europe-u18-boys-7s-trophy-1-2026.webp",
  "rugby-europe-u18-boys-7s-trophy-2-2026": "/assets/events/rugby-europe-u18-boys-7s-trophy-2-2026.webp",
  "rugby-europe-u18-girls-7s-championship-2026": "/assets/events/rugby-europe-u18-girls-7s-championship-2026.webp",
  "rugby-europe-u18-girls-7s-trophy-2026": "/assets/events/rugby-europe-u18-girls-7s-trophy-2026.webp",
  "rugby-ramble": "/assets/events/rugby-ramble.jpg",
  "rugby-world-cup-sevens-2022": "/assets/events/rugby-world-cup-sevens-2022.webp",
  "rugbytown-7s": "/assets/events/rugbytown-7s.webp",
  "rugbytown-7s-2026": "/assets/events/rugbytown-7s-2026.webp",
  "sardi-7s": "/assets/events/sardi-7s.webp",
  "school-sport-australia-touch-football-2026": "/assets/events/school-sport-australia-touch-football-2026.jpg",
  "seaside-7s": "/assets/events/seaside-7s.png",
  "seven-hills-rugby-7s": "/assets/events/seven-hills-rugby-7s.png",
  "siege-7s": "/assets/events/siege-7s.png",
  "sitges-sevens": "/assets/events/sitges-sevens.png",
  "sixways-7s": "/assets/events/sixways-7s.jpg",
  "sopot-beach-rugby": "/assets/events/sopot-beach-rugby.png",
  "south-coast-5s-beach-touch-rugby": "/assets/events/south-coast-5s-beach-touch-rugby.jpg",
  "south-devon-7s": "/assets/events/south-devon-7s.jpg",
  "south-island-7s": "/assets/events/south-island-7s.png",
  "south-island-7s-2": "/assets/events/south-island-7s-2.jpg",
  "southampton-ladies-rugby-7": "/assets/events/southampton-ladies-rugby-7.webp",
  "split-mens-7s-championship-series-2026": "/assets/events/split-mens-7s-championship-series-2026.webp",
  "split-womens-7s-championship-series-2026": "/assets/events/split-womens-7s-championship-series-2026.webp",
  "sports-tours-7s-broadstreet": "/assets/events/sports-tours-7s-broadstreet.png",
  "spytech-7s": "/assets/events/spytech-7s.jpg",
  "steel-city-7s": "/assets/events/steel-city-7s.webp",
  "streatham-croydon-carnival-7s": "/assets/events/streatham-croydon-carnival-7s.jpg",
  "summer-social-rugby-2022": "/assets/events/summer-social-rugby-2022.jpg",
  "sundogs-festival": "/assets/events/sundogs-festival.jpg",
  "super-sevens-series-bury-rugby-club": "/assets/events/super-sevens-series-bury-rugby-club.png",
  "super-sevens-series-cobham": "/assets/events/super-sevens-series-cobham.png",
  "super-sevens-series-stafford-leg": "/assets/events/super-sevens-series-stafford-leg.webp",
  "tagfest-coventry-warwickshire-2022": "/assets/events/tagfest-coventry-warwickshire-2022.png",
  "tagfest-leeds-2026": "/assets/events/tagfest-leeds-2026.jpg",
  "tagfest-london": "/assets/events/tagfest-london.webp",
  "tagfest-oxford": "/assets/events/tagfest-oxford.webp",
  "tagfest-yorkshire": "/assets/events/tagfest-yorkshire.webp",
  "tennessee-7s": "/assets/events/tennessee-7s.webp",
  "tigna-7s": "/assets/events/tigna-7s.webp",
  "tropical-7s": "/assets/events/tropical-7s.jpg",
  "tropical-7s-2027": "/assets/events/tropical-7s-2027.png",
  "tuilagi-sport-rugby-festival": "/assets/events/tuilagi-sport-rugby-festival.png",
  "ultimate-sevens-2026": "/assets/events/ultimate-sevens-2026.png",
  "ultimate-tour-la-manga-club": "/assets/events/ultimate-tour-la-manga-club.png",
  "victoria-falls-international-sevens": "/assets/events/victoria-falls-international-sevens.png",
  "warsaw-rugby-festival": "/assets/events/warsaw-rugby-festival.webp",
  "weston-s-mare-beach-rugby-festival": "/assets/events/weston-s-mare-beach-rugby-festival.png",
  "weymouth-beach-rugby-fest": "/assets/events/weymouth-beach-rugby-fest.png",
  "whiskey-10s-rugby-tournament": "/assets/events/whiskey-10s-rugby-tournament.jpg",
  "wight-wave-beach-rugby-tournament": "/assets/events/wight-wave-beach-rugby-tournament.png",
  "world-rugby-junior-championship-2026": "/assets/events/world-rugby-junior-championship-2026.jpg",
  "world-rugby-nations-cup-november-2026": "/assets/events/world-rugby-nations-cup-november-2026.webp",
  "worthing-rugby-7s": "/assets/events/worthing-rugby-7s.png",
  "wxv-global-series-challenger-2026": "/assets/events/wxv-global-series-challenger-2026.png",
  "xmasters-beach-rugby-2": "/assets/events/xmasters-beach-rugby-2.png",
  "youth-olympic-games-rugby-7s-2026": "/assets/events/youth-olympic-games-rugby-7s-2026.jpg",
  "zia-7s": "/assets/events/zia-7s.webp"
};

function localImageFor(slug, fallbackIndex = 0) {
  return eventImageAssets[slug] || imageFor(slug, fallbackIndex);
}

function uniqueLinks(...groups) {
  const links = groups.flat().filter((link) => link?.url);
  return [...new Map(links.map((link) => [link.url.toLowerCase(), link])).values()];
}

function uniqueStrings(...groups) {
  return [...new Set(groups.flat().filter(Boolean))];
}

function enrichEvent(event) {
  const shared = profileEventEnrichments[event.profileSlug] || {};
  const direct = eventEnrichments[event.slug] || {};
  return {
    ...event,
    image: eventImageAssets[event.slug] || (direct.image ?? event.image) || shared.image || "",
    description: direct.description || event.description || event.summary,
    socialLinks: uniqueLinks(shared.socialLinks || [], event.socialLinks || [], direct.socialLinks || []),
    externalLinks: uniqueLinks(shared.externalLinks || [], event.externalLinks || [], direct.externalLinks || []),
    contactEmails: uniqueStrings(shared.contactEmails || [], event.contactEmails || [], direct.contactEmails || []),
    contactPhones: uniqueStrings(shared.contactPhones || [], event.contactPhones || [], direct.contactPhones || []),
  };
}

const normalizedArchiveEvents = archiveEvents.map((event) => ({
  ...event,
  country: event.country || event.city || "",
  profileSlug: "rugbymonkey-archive",
  isPast: true,
}));

const allEvents = [...currentEvents, ...recentEvents].map(enrichEvent).concat(normalizedArchiveEvents.map(enrichEvent));

const findEvent = (slug) => allEvents.find((item) => item.slug === slug);

const profiles = [
  {
    slug: "rugbymonkey-archive",
    title: "Rugbymonkey Tournament Calendar",
    type: "Directory",
    location: "Worldwide",
    initials: "RM",
    focus: ["7s", "15s", "Beach", "Touch", "Tag"],
    summary:
      "A global rugby calendar for finding upcoming tournaments, repeat events, destinations, team entry routes, tickets, profiles, and media.",
    eventSlugs: ["rugbytown-7s-2026", "emirates-dubai-7s-2026", "tropical-7s-2027"],
    url: "/events",
  },
  {
    slug: "lit7s",
    title: "LIT7s",
    type: "Tournament operator",
    location: "London and series markets",
    initials: "L7",
    focus: ["7s", "Elite", "Open", "Festival"],
    summary:
      "LIT7s brings together competitive rugby, a spectator festival, team entry, VIP, parking, live entertainment, and tournament media.",
    eventSlugs: ["lit-7s-london-2026"],
    url: externalLinks.lit,
  },
  {
    slug: "world-rugby",
    title: "World Rugby",
    type: "Governing body",
    location: "Global",
    initials: "WR",
    focus: ["15s", "7s", "National teams", "Youth"],
    summary:
      "World Rugby event profiles anchor national-team discovery, global championships, pathway tournaments, and major future tournament demand.",
    eventSlugs: ["nations-championship-2026", "world-rugby-junior-championship-2026", "wxv-global-series-challenger-2026", "mens-rugby-world-cup-2027"],
    url: "https://www.world.rugby/",
  },
  {
    slug: "rugby-europe",
    title: "Rugby Europe",
    type: "Regional competition body",
    location: "Europe",
    initials: "RE",
    focus: ["7s", "Beach", "National teams", "Youth"],
    summary:
      "Rugby Europe connects senior, youth, sevens, and beach rugby events across the continent with national-team competition.",
    eventSlugs: ["split-mens-7s-championship-series-2026", "beach-rugby-championship-2026"],
    url: "https://www.rugbyeurope.eu/",
  },
  {
    slug: "rugbytown-usa",
    title: "RugbyTown USA",
    type: "Venue and event host",
    location: "Glendale, Colorado",
    initials: "RT",
    focus: ["7s", "Stadium", "Invitational"],
    summary:
      "RugbyTown USA gives sevens fans a destination stadium weekend at Infinity Park, with tickets, schedule, and tournament hospitality.",
    eventSlugs: ["rugbytown-7s-2026"],
    url: externalLinks.rugbyTown,
  },
  {
    slug: "emirates-dubai-7s",
    title: "Emirates Dubai 7s",
    type: "Festival tournament",
    location: "Dubai",
    initials: "D7",
    focus: ["7s", "Festival", "Invitational", "Travel"],
    summary:
      "Dubai's tournament profile brings rugby, ticketing, team registration, live entertainment, travel, and mass-participation energy into one weekend.",
    eventSlugs: ["emirates-dubai-7s-2026"],
    url: externalLinks.dubai,
  },
  {
    slug: "tropical-7s",
    title: "Tropical 7s",
    type: "Youth and senior sevens",
    location: "Tampa, Florida",
    initials: "T7",
    focus: ["7s", "Youth", "Academy", "Senior"],
    summary:
      "Tropical 7s is a Florida sevens destination with youth, academy, U23, and senior divisions, plus training and team registration.",
    eventSlugs: ["tropical-7s-2027"],
    url: externalLinks.tropical,
  },
  {
    slug: "touch-rugby",
    title: "Touch Rugby",
    type: "Touch and tag pathway",
    location: "Global",
    initials: "TR",
    focus: ["Touch", "Tag", "Youth", "Masters"],
    summary:
      "Touch and tag tournament profiles make it easier to find youth, open, mixed, senior, and masters events across rugby-adjacent formats.",
    eventSlugs: ["european-touch-championships-2026", "european-youth-touch-championships-2026", "school-sport-australia-touch-football-2026", "tagfest-leeds-2026"],
    url: "/touch",
  },
  {
    slug: "beach-rugby",
    title: "Beach Rugby Circuit",
    type: "Beach rugby profile",
    location: "Europe and global destinations",
    initials: "BR",
    focus: ["Beach", "Travel", "Clubs", "Festival"],
    summary:
      "Beach rugby listings highlight destination tournaments with team packages, repeat editions, travel links, and visual media.",
    eventSlugs: ["beach-rugby-championship-2026", "majorca-beach-rugby-2027", "lignano-beach-rugby-2026"],
    url: "/beach",
  },
  {
    slug: "ultimate-sevens",
    title: "Ultimate Sevens",
    type: "Professional sevens series",
    location: "Europe",
    initials: "U7",
    focus: ["7s", "Professional", "Men", "Women"],
    summary:
      "Ultimate Sevens adds a professional club-series shape to the global sevens calendar, with destination rounds and finals energy.",
    eventSlugs: ["ultimate-sevens-2026"],
    url: externalLinks.ultimateSevens,
  },
  {
    slug: "algarve-7s",
    title: "Algarve 7s",
    type: "Destination sevens",
    location: "Portugal",
    initials: "A7",
    focus: ["7s", "Clubs", "Vets", "Travel"],
    summary:
      "Algarve 7s is positioned as a Portugal destination tournament for elite, open, women's, men's, and vets club sides.",
    eventSlugs: ["algarve-7s-2027", "algarve-7s"],
    url: externalLinks.algarve,
  },
  {
    slug: "try-tag-rugby",
    title: "Try Tag Rugby",
    type: "Tag rugby organizer",
    location: "United Kingdom and Ireland",
    initials: "TT",
    focus: ["Tag", "Mixed", "Social", "Community"],
    summary:
      "Try Tag Rugby event profiles help social and competitive mixed teams find one-day tournaments and local community events.",
    eventSlugs: ["tagfest-leeds-2026"],
    url: externalLinks.tryTagLeeds,
  },
];

const teams = [
  {
    slug: "usa-eagles",
    title: "USA Eagles",
    location: "United States",
    initials: "USA",
    focus: ["15s", "7s", "Men", "Women"],
    summary:
      "The USA profile links international 15s windows, sevens pathways, RugbyTown interest, Pacific Nations Cup fixtures, and domestic fan demand.",
    eventSlugs: ["pacific-nations-cup-2026", "rugbytown-7s-2026"],
  },
  {
    slug: "fiji-rugby",
    title: "Fiji Rugby",
    location: "Fiji",
    initials: "FIJ",
    focus: ["15s", "7s", "Pacific"],
    summary:
      "Fiji remains a central draw across Pacific 15s competition and global sevens culture, with tournament pages surfacing fixtures and fan links.",
    eventSlugs: ["pacific-nations-cup-2026", "emirates-dubai-7s-2026"],
  },
  {
    slug: "japan-rugby",
    title: "Japan Rugby",
    location: "Japan",
    initials: "JPN",
    focus: ["15s", "Touch", "Host events"],
    summary:
      "Japan sits across Pacific Nations Cup hosting, Asia Pacific touch competition, club pathways, and international rugby travel.",
    eventSlugs: ["pacific-nations-cup-2026", "asia-pacific-seniors-touch-cup-2026"],
  },
  {
    slug: "canada-rugby",
    title: "Canada Rugby",
    location: "Canada",
    initials: "CAN",
    focus: ["15s", "Pacific", "National teams"],
    summary:
      "Canada's tournament profile connects Pacific Nations Cup fixtures, national-team schedules, sevens pathways, and North American supporters.",
    eventSlugs: ["pacific-nations-cup-2026"],
  },
  {
    slug: "rugby-europe-national-squads",
    title: "Rugby Europe National Squads",
    location: "Europe",
    initials: "EUR",
    focus: ["7s", "Youth", "Beach"],
    summary:
      "European national squads are discoverable across senior sevens, U18 sevens, beach rugby, and university tournament pages.",
    eventSlugs: ["split-mens-7s-championship-series-2026", "rugby-europe-u18-girls-7s-championship-2026"],
  },
  {
    slug: "travelling-club-teams",
    title: "Travelling Club Teams",
    location: "Worldwide",
    initials: "CLB",
    focus: ["7s", "Beach", "Open", "Social"],
    summary:
      "Club pages make it easier for open, vets, social, beach, and touring teams to find events with registration and travel links.",
    eventSlugs: ["algarve-7s-2027", "majorca-beach-rugby-2027", "tagfest-leeds-2026"],
  },
];

const people = [
  {
    slug: "perry-baker",
    title: "Perry Baker",
    role: "USA sevens profile",
    initials: "PB",
    summary:
      "A sevens icon profile for fan discovery, USA tournament context, RugbyTown interest, youth inspiration, and short-form media clips.",
    eventSlugs: ["rugbytown-7s-2026", "emirates-dubai-7s-2026"],
  },
  {
    slug: "naya-tapper",
    title: "Naya Tapper",
    role: "USA sevens profile",
    initials: "NT",
    summary:
      "A women's sevens profile connecting elite pathways, USA rugby audiences, tournament media, and future women-focused event discovery.",
    eventSlugs: ["tropical-7s-2027", "rugbytown-7s-2026"],
  },
  {
    slug: "portia-woodman-wickliffe",
    title: "Portia Woodman-Wickliffe",
    role: "Sevens and 15s profile",
    initials: "PW",
    summary:
      "A global rugby profile for linking women's rugby fans, sevens audiences, international competition history, and tournament media.",
    eventSlugs: ["emirates-dubai-7s-2026", "mens-rugby-world-cup-2027"],
  },
  {
    slug: "club-team-manager",
    title: "Club Team Manager",
    role: "Registration profile",
    initials: "TM",
    summary:
      "Team managers can compare tournament dates, divisions, travel needs, parking, team entry, spectator links, and event media before registering.",
    eventSlugs: ["lit-7s-london-2026", "algarve-7s-2027", "majorca-beach-rugby-2027"],
  },
];

const nav = [
  ["Events", "/events"],
  ["7s", "/sevens"],
  ["15s", "/fifteens"],
  ["Beach", "/beach"],
  ["Touch", "/touch"],
  ["Teams", "/teams"],
  ["Profiles", "/profiles"],
  ["Media", "/media"],
  ["FAQ", "/faq"],
];

function safe(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  })[char]);
}

function isExternal(url = "") {
  return /^(https?:|mailto:|tel:)/.test(url);
}

function linkAttrs(url) {
  return isExternal(url) ? ' target="_blank" rel="noopener noreferrer"' : "";
}

function href(url) {
  if (!url) return "/";
  return isExternal(url) ? url : url.startsWith("/") ? url : `/${url}`;
}

function cssImage(url, variable = "--hero-image") {
  return url ? `style="${variable}: url(&quot;${safe(url)}&quot;)"` : "";
}

function formatDateBadge(event) {
  if (!event.dateSort || event.dateSort.includes("2027-05-01") || event.dateSort.includes("2027-06-01")) {
    return ["", event.date.split(" ")[0] || "TBA"];
  }
  const date = new Date(`${event.dateSort}T12:00:00Z`);
  if (Number.isNaN(date.getTime())) return ["", "TBA"];
  return [date.toLocaleString("en-US", { month: "short" }), String(date.getUTCDate()).padStart(2, "0")];
}

function phase(event) {
  if (event.isPast) return "Past";
  const start = new Date(`${event.dateSort}T00:00:00-04:00`);
  const end = new Date(`${event.endDateSort || event.dateSort}T23:59:59-04:00`);
  if (!Number.isNaN(start.getTime()) && start <= today && end >= today) return "Live";
  if (!Number.isNaN(start.getTime()) && start > today) return "Upcoming";
  return "Past";
}

function sortedEvents(events) {
  return [...events].sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)) || String(a.dateSort).localeCompare(String(b.dateSort)) || a.title.localeCompare(b.title));
}

function searchText(event) {
  return [
    event.title,
    event.date,
    event.location,
    event.city,
    event.region,
    event.country,
    event.code,
    event.kind,
    event.level,
    event.summary,
    event.description,
    ...(event.contactEmails || []),
    ...(event.contactPhones || []),
    ...(event.socialLinks || []).flatMap((link) => [link.label, link.url]),
    ...(event.externalLinks || []).flatMap((link) => [link.label, link.url]),
    ...(event.divisions || []),
    ...(event.amenities || []),
  ]
    .join(" ")
    .toLowerCase();
}

function currentPath() {
  return window.location.pathname || "/";
}

function navigate(path) {
  window.history.pushState({}, "", path);
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function button(label, url, variant = "secondary", icon = icons.arrow) {
  return `<a class="button ${variant}" href="${safe(href(url))}"${linkAttrs(url)}>${safe(label)} ${icon}</a>`;
}

function actionButton(label, url, variant = "secondary") {
  if (!url) return "";
  return button(label, url, variant, isExternal(url) ? icons.external : icons.arrow);
}

function meta(icon, text) {
  return `<li class="meta">${icon}<span>${safe(text)}</span></li>`;
}

function linkList(title, links = []) {
  const cleaned = uniqueLinks(links).filter((link) => link?.url && link?.label);
  if (!cleaned.length) return "";
  return `
    <div class="resource-list">
      <h3>${safe(title)}</h3>
      ${cleaned.map((link) => `<a href="${safe(href(link.url))}"${linkAttrs(link.url)}>${safe(link.label)} ${isExternal(link.url) ? icons.external : icons.arrow}</a>`).join("")}
    </div>
  `;
}

function eventResourcePanel(event) {
  const primaryLinks = uniqueLinks(
    isExternal(event.officialUrl) ? [{ label: "Official website", url: event.officialUrl }] : [],
    isExternal(event.ticketUrl) ? [{ label: "Tickets", url: event.ticketUrl }] : [],
    isExternal(event.registerUrl) ? [{ label: "Registration", url: event.registerUrl }] : [],
    event.externalLinks || []
  );
  const contactLinks = [
    ...(event.contactEmails || []).map((email) => ({ label: email, url: `mailto:${email}` })),
    ...(event.contactPhones || []).map((phone) => ({ label: phone, url: `tel:${phone.replace(/[^\d+]/g, "")}` })),
  ];
  const html = [
    linkList("Event links", primaryLinks),
    linkList("Social media", event.socialLinks || []),
    linkList("Contact", contactLinks),
  ].join("");
  return html ? `<div class="detail-resources">${html}</div>` : "";
}

function eventActionButtons(event) {
  const actions = [
    isExternal(event.officialUrl) ? actionButton("Event website", event.officialUrl, "secondary") : "",
    isExternal(event.ticketUrl) ? actionButton("Tickets", event.ticketUrl || event.officialUrl, "primary") : "",
    isExternal(event.registerUrl) ? actionButton("Team registration", event.registerUrl || event.officialUrl, "secondary") : "",
  ].join("");
  return actions || button("Browse events", "/events", "primary");
}

function eventCard(event) {
  const [month, day] = formatDateBadge(event);
  const route = `/events/${event.slug}`;
  const p = phase(event);
  const image = event.image || "";
  return `
    <article class="event-card">
      <a class="event-media" href="${route}">
        ${image ? `<img src="${safe(image)}" alt="${safe(event.title)}" loading="lazy" />` : ""}
        ${!image ? `<div class="event-media-fallback"><div><span>Rugbymonkey</span><strong>${safe(event.code)}</strong></div></div>` : ""}
        <div class="event-date"><span>${safe(month || p)}</span><b>${safe(day)}</b></div>
      </a>
      <div class="event-body">
        <div class="chip-list">
          ${event.featured ? `<span class="tag tag-featured">Featured</span>` : ""}
          <span class="tag">${safe(p)}</span>
          <span class="tag">${safe(event.code)}</span>
          <span class="tag">${safe(event.region)}</span>
        </div>
        <h3><a href="${route}">${safe(event.title)}</a></h3>
        <p>${safe(event.summary)}</p>
        <ul class="meta-list">
          ${meta(icons.calendar, event.date)}
          ${meta(icons.pin, event.location)}
          ${meta(icons.users, `${event.level} - ${(event.divisions || []).slice(0, 3).join(", ")}`)}
        </ul>
        <div class="event-actions">
          ${button("Details", route, "secondary")}
          ${p !== "Past" && event.ticketUrl ? actionButton("Tickets", event.ticketUrl, "primary") : ""}
          ${p !== "Past" && event.registerUrl ? actionButton("Register", event.registerUrl, "secondary") : ""}
        </div>
      </div>
    </article>
  `;
}

function rowCard(event) {
  const image = event.image || "";
  return `
    <article class="row-card">
      ${image ? `<img class="row-thumb" src="${safe(image)}" alt="${safe(event.title)}" loading="lazy" />` : `<div class="row-thumb"></div>`}
      <div>
        <div class="chip-list">
          ${event.featured ? `<span class="tag tag-featured">Featured</span>` : ""}
          <span class="tag">${safe(phase(event))}</span>
          <span class="tag">${safe(event.code)}</span>
          <span class="tag">${safe(event.region)}</span>
        </div>
        <h3><a href="/events/${safe(event.slug)}">${safe(event.title)}</a></h3>
        <p>${safe(event.date)} - ${safe(event.location)}</p>
      </div>
      <div class="actions">
        ${button("Open", `/events/${event.slug}`, "secondary")}
      </div>
    </article>
  `;
}

function profileCard(profile) {
  const events = profile.eventSlugs.map((slug) => findEvent(slug)).filter(Boolean);
  return `
    <article class="profile-card">
      <div class="profile-top">
        <div class="avatar">${safe(profile.initials)}</div>
        <div>
          <h3><a href="/profiles/${safe(profile.slug)}">${safe(profile.title)}</a></h3>
          <span class="tag">${safe(profile.type)}</span>
        </div>
      </div>
      <p>${safe(profile.summary)}</p>
      <div class="chip-list">${profile.focus.map((item) => `<span class="pill">${safe(item)}</span>`).join("")}</div>
      <div class="actions">
        ${button("Profile", `/profiles/${profile.slug}`, "secondary")}
        ${events[0] ? button("Featured event", `/events/${events[0].slug}`, "primary") : ""}
      </div>
    </article>
  `;
}

function teamCard(team) {
  return `
    <article class="team-card">
      <div class="team-top">
        <div class="avatar">${safe(team.initials)}</div>
        <div>
          <h3><a href="/teams/${safe(team.slug)}">${safe(team.title)}</a></h3>
          <span class="tag">${safe(team.location)}</span>
        </div>
      </div>
      <p>${safe(team.summary)}</p>
      <div class="chip-list">${team.focus.map((item) => `<span class="pill">${safe(item)}</span>`).join("")}</div>
      <div class="actions">${button("Team page", `/teams/${team.slug}`, "secondary")}</div>
    </article>
  `;
}

function personCard(person) {
  return `
    <article class="profile-card">
      <div class="profile-top">
        <div class="avatar">${safe(person.initials)}</div>
        <div>
          <h3>${safe(person.title)}</h3>
          <span class="tag">${safe(person.role)}</span>
        </div>
      </div>
      <p>${safe(person.summary)}</p>
      <div class="actions">${button("Related events", `/profiles`, "secondary")}</div>
    </article>
  `;
}

function header() {
  const path = currentPath();
  return `
    <header class="site-header" data-header>
      <a class="brand" href="/" aria-label="Rugbymonkey home">
        <span class="brand-mark">RM</span>
        <span><strong>Rugbymonkey</strong><span class="brand-text">Rugby tournaments</span></span>
      </a>
      <nav class="main-nav" aria-label="Primary navigation">
        ${nav.map(([label, url]) => `<a href="${url}"${path === url ? ' aria-current="page"' : ""}>${label}</a>`).join("")}
        <a href="/register"${path === "/register" ? ' aria-current="page"' : ""}>Register</a>
      </nav>
      <button class="icon-button menu-toggle" data-menu-toggle aria-label="Open navigation">${icons.menu}</button>
    </header>
  `;
}

function footer() {
  return `
    <footer class="footer">
      <div class="footer-inner">
        <a class="brand" href="/">
          <span class="brand-mark">RM</span>
          <span><strong>Rugbymonkey</strong><span class="brand-text">Global rugby calendar</span></span>
        </a>
        <div class="footer-links">
          <a href="/events">Events</a>
          <a href="/past-events">Past events</a>
          <a href="/register">Register</a>
          <a href="/submit">Submit tournament</a>
          <a href="/faq">FAQ</a>
        </div>
      </div>
    </footer>
  `;
}

function pageHero(title, copy, actions = "", image = localImageFor("rugbytown-7s", 0)) {
  return `
    <section class="detail-hero" ${cssImage(image, "--detail-image")}>
      <div class="stack">
        <p class="eyebrow">Rugbymonkey</p>
        <h1>${safe(title)}</h1>
        <p class="lead">${safe(copy)}</p>
        ${actions ? `<div class="hero-actions">${actions}</div>` : ""}
      </div>
    </section>
  `;
}

function homePage() {
  const upcoming = sortedEvents(allEvents.filter((event) => phase(event) !== "Past")).slice(0, 9);
  const past = sortedEvents(allEvents.filter((event) => phase(event) === "Past")).reverse().slice(0, 6);
  const heroImage = localImageFor("rugbytown-7s", 3);
  return `
    <main class="page">
      <section class="hero" ${cssImage(heroImage)}>
        <div class="hero-layout">
          <div>
            <p class="eyebrow">Worldwide rugby tournament calendar</p>
            <h1>Find rugby tournaments worldwide</h1>
            <p class="lead">Search 7s, 15s, beach rugby, touch, tag, youth, club, and national-team tournaments with team entry, spectator tickets, event media, and tournament profiles in one place.</p>
            <div class="hero-actions">
              ${button("Browse events", "/events", "primary")}
              ${button("Team registration", "/register", "secondary")}
              ${button("Past events", "/past-events", "secondary")}
            </div>
          </div>
          <aside class="search-panel">
            <h3>Search tournaments</h3>
            <form class="search-form" data-home-search>
              <input name="q" placeholder="Search London, Dubai, beach, U18, touch..." aria-label="Search events" />
              <button class="button primary" type="submit" aria-label="Search">${icons.search}</button>
            </form>
            <div class="quick-links">
              <a class="pill" href="/sevens">7s</a>
              <a class="pill" href="/fifteens">15s</a>
              <a class="pill" href="/beach">Beach</a>
              <a class="pill" href="/touch">Touch</a>
              <a class="pill" href="/events?status=upcoming">Upcoming</a>
              <a class="pill" href="/events?region=Europe">Europe</a>
              <a class="pill" href="/events?region=North%20America">North America</a>
            </div>
          </aside>
        </div>
      </section>

      <section class="section light">
        <div class="section-head">
          <div>
            <p class="eyebrow">Upcoming</p>
            <h2>Register, buy tickets, plan the weekend</h2>
          </div>
          <p>Upcoming events include dates, venues, divisions, ticket routes, team entry, travel notes, and tournament contacts.</p>
        </div>
        <div class="grid three">${upcoming.map(eventCard).join("")}</div>
      </section>

      <section class="section olive">
        <div class="section-head">
          <div>
            <p class="eyebrow">Formats</p>
            <h2>Browse by format</h2>
          </div>
          <p>Find sevens, fifteens, beach rugby, touch, and tag tournaments by date, destination, age grade, team level, and entry route.</p>
        </div>
        <div class="grid four">
          ${formatTile("7s", "Fast tournament weekends, elite invitational circuits, youth pathways, club festivals, and destination sevens.", "/sevens")}
          ${formatTile("15s", "National-team windows, World Cup routes, club championships, college rugby, and full-field tournament calendars.", "/fifteens")}
          ${formatTile("Beach", "Coastal and destination tournaments with team packages, media, repeat events, and social weekends.", "/beach")}
          ${formatTile("Touch and Tag", "Mixed, youth, senior, masters, and community tournaments for touch and tag teams.", "/touch")}
        </div>
      </section>

      <section class="section light">
        <div class="section-head">
          <div>
            <p class="eyebrow">Profiles</p>
            <h2>Organizers, teams, players</h2>
          </div>
          <p>Tournament operators, national squads, touring clubs, sevens players, and team managers are grouped with their related events.</p>
        </div>
        <div class="grid three">${profiles.slice(0, 6).map(profileCard).join("")}</div>
      </section>

      <section class="section">
        <div class="section-head">
          <div>
            <p class="eyebrow">Past events</p>
            <h2>Past tournament archive</h2>
          </div>
          <p>Browse previous editions, venues, divisions, destination details, media, organizer notes, and available contact links from the rugby calendar.</p>
        </div>
        <div class="grid three">${past.map(eventCard).join("")}</div>
      </section>
    </main>
  `;
}

function formatTile(title, copy, url) {
  return `
    <article class="panel-card">
      <h3>${safe(title)}</h3>
      <p>${safe(copy)}</p>
      <div class="actions">${button("Explore", url, "secondary")}</div>
    </article>
  `;
}

function filteredEventsFromUrl(defaultCode = "") {
  const params = new URLSearchParams(window.location.search);
  const query = (params.get("q") || "").trim().toLowerCase();
  const code = params.get("code") || defaultCode;
  const region = params.get("region") || "";
  const status = params.get("status") || "";
  const filtered = allEvents.filter((event) => {
    const eventPhase = phase(event).toLowerCase();
    const codeMatch = !code || event.code.toLowerCase() === code.toLowerCase();
    const regionMatch = !region || event.region === region;
    const statusMatch = !status || eventPhase === status;
    const queryMatch = !query || searchText(event).includes(query);
    return codeMatch && regionMatch && statusMatch && queryMatch;
  });
  return {
    query,
    code,
    region,
    status,
    events: sortedEvents(filtered),
  };
}

function filterBar(state, defaultCode = "") {
  const regions = [...new Set(allEvents.map((event) => event.region).filter(Boolean))].sort();
  return `
    <form class="filter-bar" data-filter-form data-default-code="${safe(defaultCode)}">
      <input name="q" value="${safe(state.query)}" placeholder="Search tournament, team, city, format..." aria-label="Search events" />
      <select name="code" aria-label="Filter format">
        ${["", "7s", "15s", "Beach", "Touch", "Tag"].map((code) => `<option value="${safe(code)}"${state.code === code ? " selected" : ""}>${safe(code || "All formats")}</option>`).join("")}
      </select>
      <select name="region" aria-label="Filter region">
        <option value="">All regions</option>
        ${regions.map((region) => `<option value="${safe(region)}"${state.region === region ? " selected" : ""}>${safe(region)}</option>`).join("")}
      </select>
      <select name="status" aria-label="Filter status">
        ${["", "upcoming", "live", "past"].map((status) => `<option value="${safe(status)}"${state.status === status ? " selected" : ""}>${safe(status || "All dates")}</option>`).join("")}
      </select>
      <button class="button primary" type="submit">Search ${icons.search}</button>
    </form>
  `;
}

function eventsPage(defaultCode = "", title = "Tournament calendar", copy = "Search upcoming and past rugby events by format, region, division, team profile, and registration need.") {
  const state = filteredEventsFromUrl(defaultCode);
  const events = state.events;
  const upcoming = events.filter((event) => phase(event) !== "Past");
  const past = events.filter((event) => phase(event) === "Past").reverse();
  return `
    <main class="page">
      ${pageHero(title, copy, button("Submit tournament", "/submit", "secondary") + button("Register team", "/register", "primary"), localImageFor("emirates-dubai-7s", 4))}
      <section class="section">
        ${filterBar(state, defaultCode)}
        <div class="results-bar">${safe(events.length)} matching events</div>
        ${upcoming.length ? `<div class="grid three">${upcoming.map(eventCard).join("")}</div>` : `<div class="empty-state"><h3>No upcoming matches for this search</h3><p>Try another format, destination, or a broader keyword.</p></div>`}
      </section>
      <section class="section light">
        <div class="section-head">
          <div>
            <p class="eyebrow">Archive</p>
            <h2>Past tournament pages</h2>
          </div>
          <p>Past events include photos, team references, repeat editions, destination notes, organizer links, and available contact details.</p>
        </div>
        <div class="row-list">${past.slice(0, 32).map(rowCard).join("")}</div>
      </section>
    </main>
  `;
}

function eventDetailPage(slug) {
  const event = findEvent(slug);
  if (!event) return notFoundPage();
  const related = allEvents
    .filter((item) => item.slug !== event.slug && (item.code === event.code || item.region === event.region))
    .slice(0, 3);
  const profile = profiles.find((item) => item.slug === event.profileSlug);
  return `
    <main class="page">
      ${pageHero(event.title, event.summary, eventActionButtons(event), event.image)}
      <section class="section">
        <div class="detail-wrap">
          <article class="detail-main">
            <p class="eyebrow">${safe(event.code)} tournament</p>
            <h2>${safe(event.title)}</h2>
            <p>${safe(event.summary)}</p>
            ${event.description && event.description !== event.summary ? `<div class="rich-description"><h3>About this event</h3><p>${safe(event.description)}</p></div>` : ""}
            <div class="chip-list">
              ${event.featured ? `<span class="tag tag-featured">Featured</span>` : ""}
              <span class="tag">${safe(phase(event))}</span>
              <span class="tag">${safe(event.level)}</span>
              <span class="tag">${safe(event.region)}</span>
              <span class="tag">${safe(event.country)}</span>
            </div>
            <h3>Divisions</h3>
            <div class="chip-list">${(event.divisions || []).map((item) => `<span class="pill">${safe(item)}</span>`).join("")}</div>
            <h3>Event details</h3>
            <div class="chip-list">${(event.amenities || []).map((item) => `<span class="pill">${safe(item)}</span>`).join("")}</div>
            ${eventResourcePanel(event)}
          </article>
          <aside class="detail-side">
            <h3>Next steps</h3>
            <ul class="meta-list">
              ${meta(icons.calendar, event.date)}
              ${meta(icons.pin, event.location)}
              ${meta(icons.users, `${event.code} - ${event.level}`)}
            </ul>
            ${eventActionButtons(event)}
            ${profile ? button(profile.title, `/profiles/${profile.slug}`, "secondary") : ""}
          </aside>
        </div>
      </section>
      <section class="section light">
        <div class="section-head">
          <div>
            <p class="eyebrow">Related</p>
            <h2>More rugby to explore</h2>
          </div>
          <p>Keep searching by format, destination, and team level.</p>
        </div>
        <div class="grid three">${related.map(eventCard).join("")}</div>
      </section>
    </main>
  `;
}

function registerPage() {
  const upcoming = sortedEvents(allEvents.filter((event) => phase(event) !== "Past")).slice(0, 14);
  return `
    <main class="page">
      ${pageHero("Register for rugby tournaments", "Choose the right tournament, review divisions and travel needs, then open the team-entry or ticket route for the event.", button("Browse events", "/events", "secondary") + button("Submit tournament", "/submit", "primary"), localImageFor("tropical-7s", 5))}
      <section class="section light">
        <div class="section-head">
          <div>
            <p class="eyebrow">Team entry and tickets</p>
            <h2>Open registration routes</h2>
          </div>
          <p>Use each row to enter a team, buy tickets, check VIP options, or continue to event details.</p>
        </div>
        <div class="row-list">${upcoming.map(rowCard).join("")}</div>
      </section>
    </main>
  `;
}

function submitPage() {
  return `
    <main class="page">
      ${pageHero("Submit a tournament", "Send dates, venue, divisions, ticket links, registration links, media, and organizer contact details.", button("Email tournament details", "mailto:events@rugbymonkey.com?subject=Tournament%20submission", "primary", icons.external), localImageFor("algarve-7s", 8))}
      <section class="section light">
        <div class="split">
          <form class="form-card" data-contact-form>
            <div class="success-box">Ready to send. Your email client will open with the tournament details.</div>
            <label>Tournament name <input name="title" required placeholder="Event name" /></label>
            <label>Date <input name="date" placeholder="Dates or event window" /></label>
            <label>Location <input name="location" placeholder="Venue, city, country" /></label>
            <label>Format
              <select name="format">
                <option>7s</option>
                <option>15s</option>
                <option>Beach</option>
                <option>Touch</option>
                <option>Tag</option>
              </select>
            </label>
            <label>Website <input name="website" type="url" placeholder="https://..." /></label>
            <label>Notes <textarea name="notes" placeholder="Divisions, tickets, entry deadline, media, contact info"></textarea></label>
            <button class="button primary" type="submit">Send tournament ${icons.external}</button>
          </form>
          <aside class="panel-card">
            <h3>Useful tournament details</h3>
            <p>Date, venue, format, age grade, gender divisions, team entry, ticket route, travel notes, parking, media, organizer contact, and team information.</p>
            <div class="chip-list">
              <span class="pill">Dates</span>
              <span class="pill">Divisions</span>
              <span class="pill">Tickets</span>
              <span class="pill">Team entry</span>
              <span class="pill">Media</span>
              <span class="pill">Travel</span>
            </div>
          </aside>
        </div>
      </section>
    </main>
  `;
}

function profilesPage() {
  return `
    <main class="page">
      ${pageHero("Rugby profiles", "Tournament organizers, governing bodies, travelling clubs, team managers, national squads, and player spotlights sit next to the events they shape.", button("Teams", "/teams", "secondary") + button("Events", "/events", "primary"), localImageFor("grenada-rugby-world-7s", 7))}
      <section class="section light">
        <div class="grid three">${profiles.map(profileCard).join("")}</div>
      </section>
      <section class="section">
        <div class="section-head">
          <div>
            <p class="eyebrow">Spotlights</p>
            <h2>Player and manager spotlights</h2>
          </div>
          <p>Player and manager spotlights sit alongside teams, national programs, registration needs, and event media.</p>
        </div>
        <div class="grid four">${people.map(personCard).join("")}</div>
      </section>
    </main>
  `;
}

function profileDetailPage(slug) {
  const profile = profiles.find((item) => item.slug === slug);
  if (!profile) return notFoundPage();
  const events = profile.eventSlugs.map((eventSlug) => findEvent(eventSlug)).filter(Boolean);
  return `
    <main class="page">
      ${pageHero(profile.title, profile.summary, button("Events", "/events", "secondary") + button("Open website", profile.url, "primary", isExternal(profile.url) ? icons.external : icons.arrow), events[0]?.image || localImageFor("lit-7s", 1))}
      <section class="section light">
        <div class="section-head">
          <div>
            <p class="eyebrow">${safe(profile.type)}</p>
            <h2>${safe(profile.location)}</h2>
          </div>
          <p>${safe(profile.summary)}</p>
        </div>
        <div class="grid three">${events.map(eventCard).join("")}</div>
      </section>
    </main>
  `;
}

function teamsPage() {
  return `
    <main class="page">
      ${pageHero("Teams and rugby communities", "Find national squads, club teams, touring sides, university programs, and team managers connected to upcoming and past tournaments.", button("Register team", "/register", "primary") + button("Profiles", "/profiles", "secondary"), localImageFor("alaska-midnight-sun-7s", 9))}
      <section class="section light">
        <div class="grid three">${teams.map(teamCard).join("")}</div>
      </section>
    </main>
  `;
}

function teamDetailPage(slug) {
  const team = teams.find((item) => item.slug === slug);
  if (!team) return notFoundPage();
  const events = team.eventSlugs.map((eventSlug) => findEvent(eventSlug)).filter(Boolean);
  return `
    <main class="page">
      ${pageHero(team.title, team.summary, button("Related events", "/events", "primary"), events[0]?.image || localImageFor("tropical-7s", 2))}
      <section class="section light">
        <div class="grid three">${events.map(eventCard).join("")}</div>
      </section>
    </main>
  `;
}

function mediaPage() {
  const media = [
    ["RugbyTown stadium weekend", "Tickets, teams, and full-event storytelling around Infinity Park.", localImageFor("rugbytown-7s", 1), "/events/rugbytown-7s-2026"],
    ["LIT7s London day", "70+ teams, spectator tickets, team entry, parking, food, bars, DJ, cheerleaders, and tournament media at Wasps Rugby Club.", localImageFor("lit-7s-london-2026", 2), "/events/lit-7s-london-2026"],
    ["Beach rugby destinations", "Coastal tournaments build repeat visits through team photos and event memory.", localImageFor("figueira-beach-rugby", 3), "/beach"],
    ["Dubai festival energy", "Rugby, live entertainment, tickets, and international travel in one profile.", localImageFor("emirates-dubai-7s", 4), "/events/emirates-dubai-7s-2026"],
  ];
  return `
    <main class="page">
      ${pageHero("Tournament media", "Photos, clips, destination cards, team shots, organizer notes, past-event media, registration links, and ticket links.", button("Past events", "/past-events", "primary") + button("Submit media", "/submit", "secondary"), localImageFor("grenada-rugby-world-7s-2", 10))}
      <section class="section">
        <div class="grid two">
          ${media.map(([title, copy, image, url]) => `
            <a class="media-card" href="${url}" ${cssImage(image, "--media-image")}>
              <h3>${safe(title)}</h3>
              <p>${safe(copy)}</p>
            </a>
          `).join("")}
        </div>
      </section>
    </main>
  `;
}

function pastEventsPage() {
  const past = sortedEvents(allEvents.filter((event) => phase(event) === "Past")).reverse();
  return `
    <main class="page">
      ${pageHero("Past rugby events", "Browse previous editions by format, destination, team type, photos, organizer links, and available contact details.", button("Upcoming events", "/events?status=upcoming", "primary") + button("Media", "/media", "secondary"), localImageFor("ameland-beach-rugby", 11))}
      <section class="section light">
        <div class="row-list">${past.slice(0, 70).map(rowCard).join("")}</div>
      </section>
    </main>
  `;
}

function faqPage() {
  const faqs = [
    ["How do I enter a team?", "Open the event page, choose Team registration, and follow the tournament's entry route for divisions, squad size, pricing, and deadlines."],
    ["Can spectators buy tickets here?", "Event pages include ticket, parking, VIP, and official event links whenever they are available."],
    ["Does Rugbymonkey cover 15s as well as 7s?", "Yes. The calendar includes 15s, 7s, beach rugby, touch, tag, youth, club, university, national-team, and destination tournament profiles."],
    ["What can I find on past event pages?", "Past event pages include dates, venues, divisions, photos, organizer notes, available contact details, and related tournament links."],
    ["Can organizers add a tournament?", "Yes. Use Submit tournament to send dates, venue, divisions, official links, ticket links, registration links, and media details."],
    ["What should team managers check first?", "Confirm the date, venue, format, divisions, team-entry route, travel logistics, roster needs, and ticket options for supporters."],
  ];
  return `
    <main class="page">
      ${pageHero("Rugbymonkey FAQ", "Answers for players, team managers, spectators, organizers, families, and rugby fans using the tournament calendar.", button("Browse events", "/events", "primary") + button("Submit tournament", "/submit", "secondary"), localImageFor("tropical-7s", 12))}
      <section class="section light">
        <div class="grid two">
          ${faqs.map(([title, copy]) => `<article class="faq-card"><h3>${safe(title)}</h3><p>${safe(copy)}</p></article>`).join("")}
        </div>
      </section>
    </main>
  `;
}

function notFoundPage() {
  return `
    <main class="page">
      ${pageHero("Page not found", "Try the tournament calendar, format pages, teams, profiles, media, or FAQ.", button("Return home", "/", "primary"), localImageFor("rugbytown-7s", 1))}
    </main>
  `;
}

function pageForPath(path) {
  if (path === "/") return homePage();
  if (path === "/events" || path === "/tournaments") return eventsPage();
  if (path.startsWith("/events/")) return eventDetailPage(decodeURIComponent(path.split("/").pop()));
  if (path === "/sevens") return eventsPage("7s", "Rugby 7s tournaments", "Find elite, open, youth, destination, international, and club sevens events with registration and ticket routes.");
  if (path === "/fifteens") return eventsPage("15s", "Rugby 15s tournaments", "Find international windows, World Cup profiles, national-team events, and full-field rugby tournament pages.");
  if (path === "/beach") return eventsPage("Beach", "Beach rugby tournaments", "Find beach rugby weekends, destination tournaments, travel-heavy team events, and media-rich past editions.");
  if (path === "/touch") return eventsPage("Touch", "Touch and tag rugby tournaments", "Find touch, tag, mixed, youth, senior, masters, and community rugby-adjacent tournaments.");
  if (path === "/clubs") return teamsPage();
  if (path === "/register") return registerPage();
  if (path === "/submit") return submitPage();
  if (path === "/profiles") return profilesPage();
  if (path.startsWith("/profiles/")) return profileDetailPage(decodeURIComponent(path.split("/").pop()));
  if (path === "/teams") return teamsPage();
  if (path.startsWith("/teams/")) return teamDetailPage(decodeURIComponent(path.split("/").pop()));
  if (path === "/media") return mediaPage();
  if (path === "/past-events") return pastEventsPage();
  if (path === "/faq") return faqPage();
  return notFoundPage();
}

function bindInteractions() {
  document.querySelector("[data-menu-toggle]")?.addEventListener("click", () => {
    document.querySelector("[data-header]")?.classList.toggle("is-open");
  });

  document.querySelector("[data-home-search]")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const query = new FormData(event.currentTarget).get("q") || "";
    navigate(`/events?q=${encodeURIComponent(String(query))}`);
  });

  const filterForm = document.querySelector("[data-filter-form]");
  const applyFilters = (form) => {
    const params = new URLSearchParams();
    for (const [key, value] of new FormData(form).entries()) {
      if (String(value).trim()) params.set(key, String(value).trim());
    }
    navigate(`/events${params.toString() ? `?${params}` : ""}`);
  };

  filterForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    applyFilters(event.currentTarget);
  });

  filterForm?.querySelectorAll("select").forEach((select) => {
    select.addEventListener("change", () => applyFilters(filterForm));
  });

  document.querySelector("[data-contact-form]")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const body = Object.entries(data)
      .filter(([, value]) => String(value).trim())
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n");
    form.classList.add("is-sent");
    window.location.href = `mailto:events@rugbymonkey.com?subject=${encodeURIComponent(`Tournament submission: ${data.title || ""}`)}&body=${encodeURIComponent(body)}`;
  });
}

function render() {
  const path = currentPath().replace(/\/+$/, "") || "/";
  app.innerHTML = `${header()}${pageForPath(path)}${footer()}`;
  bindInteractions();
}

document.addEventListener("click", (event) => {
  const link = event.target.closest("a");
  if (!link) return;
  const url = link.getAttribute("href") || "";
  if (!url || isExternal(url) || url.startsWith("#") || link.target) return;
  event.preventDefault();
  navigate(url);
});

window.addEventListener("popstate", render);

render();
