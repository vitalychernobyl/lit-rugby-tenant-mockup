import type { LucideIcon } from 'lucide-react';
import {
  BookOpen,
  CalendarDays,
  Contact,
  Globe2,
  Newspaper,
  MapPin,
  Medal,
  PlayCircle,
  Radio,
  ShieldCheck,
  Ticket,
  Trophy,
  UsersRound,
  Waves
} from 'lucide-react';

const assetPath = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;

const sourceParagraphs = (copy: string) =>
  copy
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

const sourceArticleSections = (copy: string): ContentPageSection[] => [
  {
    heading: 'Article',
    copy: sourceParagraphs(copy)
  }
];

const sourcePageSections = (heading: string, copy: string): ContentPageSection[] => [
  {
    heading,
    copy: sourceParagraphs(copy)
  }
];

export type EventType = 'Tournament' | 'Camp' | 'Series';
export type EventAccent = 'green' | 'usa';

export interface CalendarEvent {
  title: string;
  date: string;
  month: string;
  day: string;
  location: string;
  category: string;
  detail: string;
  status: string;
  accent: EventAccent;
  href: string;
}

export interface VisualCalendarMonth {
  month: string;
  span: string;
  events: Array<{
    day: string;
    title: string;
    category: string;
    status: string;
    accent: EventAccent;
    href: string;
  }>;
}

export interface PastEvent {
  slug: string;
  year: string;
  title: string;
  date: string;
  location: string;
  summary: string;
  details: string[];
  sourceLinks: EventLink[];
  mediaLinks: EventLink[];
  winners: WinnerGroup[];
  articles: EventArticle[];
}

export interface EventLink {
  label: string;
  href: string;
  note?: string;
}

export interface WinnerGroup {
  title: string;
  items: string[];
  sourceHref?: string;
}

export interface EventArticle {
  title: string;
  href: string;
  date: string;
  summary: string;
  image?: string;
  category?: string;
}

export interface ArticlePage {
  slug: string;
  title: string;
  date: string;
  category: string;
  summary: string;
  image: string;
  mediaFit?: 'cover' | 'contain';
  sections: ContentPageSection[];
  ctas?: Array<{
    label: string;
    href: string;
    primary?: boolean;
  }>;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ContentPageCard {
  title: string;
  copy: string;
  items?: string[];
}

export interface ContentPageTimelineItem {
  time: string;
  title: string;
  detail: string;
}

export interface GalleryItem {
  title: string;
  category: string;
  image: string;
  caption: string;
  href?: string;
}

export interface ContentPageSection {
  heading: string;
  copy?: string[];
  items?: string[];
  cards?: ContentPageCard[];
  timeline?: ContentPageTimelineItem[];
}

export interface ContentPage {
  slug: string;
  title: string;
  category: string;
  summary: string;
  image: string;
  accent: EventAccent;
  quickFacts?: Array<{
    label: string;
    value: string;
  }>;
  sections: ContentPageSection[];
  gallery?: GalleryItem[];
  ctas?: Array<{
    label: string;
    href: string;
    primary?: boolean;
  }>;
}

export interface EventDetailPage {
  eyebrow: string;
  overview: string;
  upcomingTitle: string;
  details: string[];
  sourceLinks: EventLink[];
  mediaLinks: EventLink[];
  winners: WinnerGroup[];
  articles: EventArticle[];
}

export interface SiteEvent {
  slug: string;
  title: string;
  type: EventType;
  date: string;
  location: string;
  summary: string;
  image: string;
  ticketHref?: string;
  detailPage: EventDetailPage;
  pastEvents: PastEvent[];
  ctas: Array<{
    label: string;
    href: string;
    primary?: boolean;
  }>;
  accent: EventAccent;
}

export interface ProofPoint {
  icon: LucideIcon;
  title: string;
  copy: string;
  accent?: EventAccent;
}

export const brand = {
  name: 'LIT7s',
  primaryAccent: 'green',
  usaAccent: 'red',
  line: 'Play. Compete. Belong.'
} as const;

export const navItems = [
  { label: 'Events', href: '#events' },
  { label: 'Calendar', href: '#calendar' },
  { label: 'News', href: '#page/news' },
  { label: 'Guides', href: '#guides' },
  { label: 'Camps', href: '#camps' },
  { label: 'Series', href: '#series' },
  { label: 'Media', href: '#media' },
  { label: 'Partners', href: '#partners' }
];

export const links = {
  teamEntry: 'https://ticketpass.org/event/EWDVGH/lit-super-sevens-series-2026-team-entry',
  spectatorTickets: 'https://ticketpass.org/event/EYBIHR/london-international-7s-tournament-2026-lit7s',
  playerApplication: 'https://forms.gle/pVzp6UastvNNWKtq9',
  ambassadorApplication:
    'https://docs.google.com/forms/d/1wtUTLfQSKRXgwcroWsygApTFnKcxalknEYHFZFfXelU/viewform?edit_requested=true',
  floridaRegistration: 'https://app.eventconnect.io/events/36742/registration-type/create?nav=hidden',
  campCheckout: 'https://forms.gle/pVzp6UastvNNWKtq9',
  contact: 'mailto:admin@lit7s.com',
  lit7sHome: '#top',
  aboutLit7s: '#page/about-lit7s',
  lit7sFestivalInformation2023: '#page/festival-information-2023',
  lit7sTournamentInfo: '#page/tournament-information',
  lit7sSchedule: '#page/schedule',
  lit7sWhatToPack: '#page/what-to-pack',
  lit7sVipTickets: '#page/vip-tickets',
  lit7sCompetitions: '#page/sevens-competitions',
  lit7sTeamRegistrationInfo: '#page/team-registration',
  teamRegistrationInterest: '#page/team-registration-interest',
  lit7sPrizes: '#page/prizes-and-awards',
  lit7sRules: '#page/sevens-rules',
  lit7sMedia: '#page/lit7s-media',
  foodAndDrink: '#page/food-and-drink',
  entertainment: '#page/entertainment',
  fancyDress: '#page/fancy-dress',
  narniShakers: '#page/narni-shakers',
  touchCompetition: '#page/touch-competition',
  facebookGroups: '#page/facebook-groups',
  partnersPage: '#page/partners',
  opportunities: '#page/opportunities',
  newsPage: '#page/news',
  mediaPackages: '#page/media-packages',
  lit7sVideoCollection: '#page/lit7s-video-collection',
  lit7sTournamentPhotos: '#page/lit7s-tournament-photos',
  superSevensBury2024GalleryPage: '#page/super-sevens-bury-2024-gallery',
  superSevensBury2024LivestreamPage: '#page/super-sevens-bury-2024-livestream',
  superSevens2023MediaPage: '#page/super-sevens-2023-media',
  rugbySevensGuide: '#page/rugby-sevens-guide',
  matchBallPartner: '#page/match-ball-partner',
  london7s2024: '#page/london-7s-2024',
  london7sPreview2024: '#page/lit7s-london-7s-preview-2024',
  superSevensSeriesPage: '#page/lit-super-sevens-series',
  superSevensVenuesDatesPage: '#page/super-sevens-venues-dates',
  superSevensTeamsPage: '#page/super-sevens-teams',
  superSevensResultsPage: '#page/super-sevens-results',
  superSevensRulesPage: '#page/super-sevens-rules',
  superSevensEliteEntryPage: '#page/super-sevens-elite-entry',
  tournamentAppPage: '#page/tournament-app',
  superSevensAnalysisPage: '#page/super-sevens-finals-analysis',
  articleCharityPartner: '#article/2026-charity-partner-announced',
  articleSeriesKicksOff: '#article/2025-series-kicks-off',
  articleVenuesAnnounced: '#article/2025-venues-announced',
  articleSeries2025Announced: '#article/lit-super-sevens-series-2025-announced',
  articleRugbySevensGuide: '#article/a-beginners-guide-to-watching-rugby-sevens',
  articleSportsBallShop: '#article/sportsballshop-match-ball-partner',
  olympicExperience: '#page/olympic-experience',
  imgExperience: '#page/img-experience',
  floridaEvent: '#page/florida-international-7s',
  floridaTerms: '#page/florida-terms',
  instagram: 'https://www.instagram.com/lit7s/',
  instagramUsa: 'https://www.instagram.com/lit7susa/',
  instagramSeries: 'https://www.instagram.com/supersevensseriesuk/',
  facebookLit7s: 'https://www.facebook.com/LIT7s/',
  youtube: 'https://www.youtube.com/@LIT7s'
};

export const articlePages: ArticlePage[] = [
  {
    slug: '2026-charity-partner-announced',
    title: '2026 Charity Partner Announced!',
    date: '28 April 2026',
    category: 'Series News',
    summary:
      'Restart Rugby joins the 2026 LIT Super Sevens Series as the charity partner across the five-event UK summer calendar.',
    image: assetPath('assets/news/super-2026-charity.jpg'),
    mediaFit: 'contain',
    sections: sourceArticleSections(`
The LIT Super 7 Series is proud to announce Restart Rugby as our Official Charity Partner for the 2026 Series.

As the largest Rugby 7s series in Europe, LIT7s has always been about more than just world-class rugby — it’s about community, impact, and creating a platform that brings people together. Partnering with Restart Rugby takes that mission to the next level.

Who are Restart Rugby?

Restart Rugby is the official charity of the Rugby Players Association, delivering vital support to current and former elite rugby players facing serious injury, illness, or hardship.  From funding specialist rehabilitation and medical treatment, to providing mental health support, career transition guidance, and financial assistance — Restart Rugby plays a crucial role in looking after the people who give everything to the game.  Quite simply, they do incredibly important work behind the scenes to support rugby players when they need it most.

What to expect this summer

Restart Rugby will be present at all five LIT Super 7 Series events, bringing energy, purpose, and plenty of ways for everyone to get involved:

◦ On-site activations: Fun, interactive games for players and spectators throughout the day.
◦ Ambassadors: Expect appearances from well-known rugby names — and possibly a few legends
◦ Fundraising initiatives: Raising much-needed funds to continue their life-changing work
◦ Community engagement: A chance to connect directly with the charity and learn more about their impact

On the pitch

At the showpiece LIT7s (Wasps FC) event, Restart Rugby will also be fielding men’s and women’s sevens teams.

And if you know anything about rugby… you’ll know what that could mean.

Keep an eye on those team sheets — we wouldn’t be surprised to see some very familiar (and very exciting) names stepping back onto the pitch.

Join us

We’re incredibly excited to welcome Restart Rugby into the LIT family and to use the platform of the Series to support such a meaningful cause.  Make sure you visit their stands, get involved in the activations, and support the fundraising efforts across the summer.

📍It all kicks off on May 9th at Manor 7s (Eton Manor RFC). We can't wait to see you there!
    `),
    ctas: [
      { label: 'View Series Calendar', href: '#event/lit-super-sevens-series-2026', primary: true },
      { label: 'Spectator Tickets', href: links.spectatorTickets }
    ]
  },
  {
    slug: '2025-series-kicks-off',
    title: '2025 Series Kicks Off!',
    date: '6 May 2025',
    category: 'Series News',
    summary:
      'The expanded LIT Super Sevens Series kicks off with the combined LIT7s and Super Sevens platform.',
    image: assetPath('assets/news/super-2025-kickoff.avif'),
    sections: sourceArticleSections(`
LIT Super Sevens Series 2025: The UK’s Biggest Rugby 7s Summer Yet

Hammerhead 7s, 2024 SSS Winners

Rugby sevens in the UK is about to experience its most exciting summer to date. The newly formed LIT Super Sevens Series 2025 marks a landmark merger between two of the sport’s most dynamic forces: the Super Sevens Series, the UK’s elite-level 7s competition, and the London International 7s Tournament Series (LIT7s), the country’s premier open and social rugby series.

The result? The largest rugby sevens series in the UK and Europe, with over 200 teams competing across six events between May and July.

This bold new chapter combines the intensity and international pedigree of the Super Sevens Series with the unmatched atmosphere and inclusivity of LIT7s. It promises elite performance, grassroots growth, and unforgettable experiences.

A Legacy of Excellence Meets Festival Spirit

The Super Sevens Series, founded in 2012 by Terry Sands and Barrie Torbett, has long been the proving ground for elite 7s talent. Over the years, it has welcomed international teams from China, Spain, Germany, and Hong Kong, and showcased stars such as Sam Cross, Harry Randell, Semi Radradra, Ross McCann, and David Strettle.

2024 LIT7s London 7s Winners, Shogun Rugby

LIT7s, also launched in 2012 by Ellaine Gelman, has grown into the UK’s largest open and social 7s series. In 2024, over 165 teams competed, including sides from France, Switzerland, Jordan and China. Its showpiece event at Wasps FC, attracted more than 1,125 players, cementing its place as the UK’s biggest rugby sevens tournament.

Together, they form the LIT Super Sevens Series – a dynamic new platform for every level of the game, from grassroots players to international stars creating the biggest series in Europe.

The 2025 Series: Bigger, Broader, and More Inclusive

The 2025 series kicks off with Manor 7s on 10 May, and spans six high-energy events:

Manor 7s (Eton Manor RFC) – 10 May

Oxford 7s (Oxford Quins RFC) – 17 May

Shelford 7s (Shelford RFC) – 7 June

National Pub 7s (Harpenden RFC) – 21 June

Bury St Edmunds 7s (Bury St Edmunds RFC) – 5 July

LIT7s (Wasps FC) – 19 July

Breaking Down the Buzz

Over 200 men’s and women’s teams will compete across Elite, Open, and Social categories.

The Men’s Elite division has expanded from 12 to 16 teams, with an international lineup featuring top-tier squads from Hong Kong, China, Belgium, Wales and multiple Fijian teams. UK-based Shogun, one of the world’s most successful 7s teams, will compete alongside military sides, including core team British Army and guest side RAF.

British Army, 2024 SS Winners

On the women’s side, this year’s Elite competition will be the biggest ever, increasing from 8 to 12 teams, including Premiership clubs Trailfinders Women and Bath.

GB Olympian Abi Burton will lead Trailfinders’ campaign, while reigning champions Hammerheads return, boasting multiple GB 7s players.

The Open division promises further diversity, with teams from Cyprus, Malta, and Gibraltar adding to the global spirit of the competition.

With no Twickenham 7s on the calendar this year, the LIT Super Sevens Series is the ultimate way to experience elite international rugby in the UK — all minimal cost (tickets are free for two legs and go no higher than £12 for others).

Several legs are already sold out for team entries, reflecting the growing appetite for high-quality, accessible rugby events. With events hosted at community-focused rugby clubs across the country, the series supports local teams by bringing in vital revenue, sponsors, and fresh players.

Whether you're a rugby purist, or new to the game, the LIT Super Sevens Series 2025 promises fast-paced action, vibrant crowds, and a celebration of rugby sevens like no other.

By: Will Miller
    `),
    ctas: [
      { label: 'View LIT7s London', href: '#event/lit7s-london', primary: true },
      { label: 'View Media Packages', href: links.mediaPackages }
    ]
  },
  {
    slug: '2025-venues-announced',
    title: '2025 Venues Announced!',
    date: '15 October 2024',
    category: 'Series News',
    summary:
      'The 2025 venue announcement set out the next UK series route across club hosts and the London tournament stop.',
    image: assetPath('assets/news/super-2025-venues.avif'),
    mediaFit: 'contain',
    sections: sourceArticleSections(`
The venues for the 2025 LIT Super Sevens Series have been announced. We are thrilled to be working with such prestigious rugby clubs and tournaments.

10 May 2025 - Manor 7s, Eton Manor RFC (Open & Social)

17 May 2025 - Oxford 7s, Oxford Harlequins RFC (Elite, Open & Social)

7 June 2025 - Shelford 7s, Shelford RFC (Elite, Open & Social)

21 June 2025 - National Pub 7s, Harpenden RFC (Elite, Open & Social)

5 July 2025 - Bury St Edmunds 7s

Bury St Edmunds RFC (Elite, Men's Open (non-Series), Mixed Touch)

19 July - LIT7s, Wasps FC (Elite, Open & Social)(NON-SERIES, END OF SEASON PARTY EVENT WITH 70+ TEAMS)
    `),
    ctas: [{ label: 'See 2026 Calendar', href: '#calendar', primary: true }]
  },
  {
    slug: 'lit-super-sevens-series-2025-announced',
    title: 'LIT Super Sevens Series 2025 Announced',
    date: '23 September 2024',
    category: 'Series News',
    summary:
      'LIT7s and Super Sevens join forces under the LIT Super Sevens Series, creating a larger UK rugby 7s platform.',
    image: assetPath('assets/news/super-2025-announced.jpg'),
    sections: sourceArticleSections(`
We are thrilled to announce that the Super Sevens Series, UK’s elite rugby sevens series, is joining forces with the London International 7s Tournament Series (LIT7s Series), UK’s premier social rugby sevens series, to form “LIT Super Sevens Series”. In 2025 the newly formed series will become UK’s largest rugby sevens series and feature over 200 Men’s and Women’s Social, Open and Elite teams over four legs of competition.

With the huge success of the sport at the Paris Olympics, this merger is the most exciting development for rugby sevens in decades that will bring more spectators to events and help player and referee growth across all levels.

Established in 2012, the Super Sevens Series was founded by Terry Sands (former England 7s Manager) and Barrie Torbett with the aim of bringing together the best men’s and women’s sevens teams in the UK to compete at the highest level in the country and create a pathway for professional sevens participation for players and referees alike.

Players such as Sam Cross, Harry Randell, Semi Radrada, Ross McCann, David Strettle and many other household names have played in the Super Sevens Series as part of their journey towards playing for their respective countries.

In addition to growing local talent in the UK, over the years international sides like Hong Kong, China, Germany and Spain have also taken part in the Super Sevens Series due to the high-quality rugby that it offers to teams wanting to develop and compete at the highest level. The motto of the Super Sevens Series is “serious rugby’.

Sands and Torbett said, “The Series has achieved so much since its inception in 2012 with countless players and referees using the Series as an opportunity to gain experience and develop their skills to help them achieve their ambitions to represent their country at the highest level possible. So many teams have experienced what it’s like to participate in a multi leg series where a very different commitment is required to perform consistently throughout the series. All have benefited significantly from participation, and we believe the Series can maintain its quality whilst being available to a larger combined audience.”

The London International 7s Tournament (“LIT7s”), was founded in 2012 by Ellaine Gelman, and has grown into the largest rugby sevens tournament in the UK with 70 teams competing in 2024.

Over the years LIT7s has welcomed international sides including the Chinese National Team, the French National 7s Champions, the Jordanian National Side, HK Football Club Women and many others.

This year, LIT hosted the inaugural LIT London 7s - a large stadium event at Wimbledon AFC which saw the competition of elite teams from the USA, New Zealand, Fiji, Ireland, Jamaica and Great Britain and more.

The LIT7s Series was founded in 2023 to grow rugby sevens and is currently the only amateur series in the UK featuring 60 teams across four events at rugby clubs around the country that include well known teams like Shogun Rugby.

LIT7s CEO Ellaine Gelman said, “We are excited to bring the Super Sevens Series into the LIT family and to continue what Terry (Sands) and Barrie (Torbett) have created to continue growing the sport in this country.

We are extremely proud of the opportunities our tournaments create for rugby sevens players in the UK and the amount of people we have introduced to the sport.

One of my favourite success stories is of a Women’s player picked up at our LIT7s tournament by Saracens. She was recognised for her blistering pace and was scouted by England Rugby and GB7s.

We strive to provide these kinds of opportunities for players in the UK where the pathway to international sevens is not linear.”

The new LIT Super Sevens Series will provide social and up-and-coming players with an opportunity to play rugby sevens series alongside elite and international sides like Spain, Germany and Hong Kong. This will help teams develop and move up the ranks as they gain experience. The larger events will be more accessible for spectators and help grow the fan base for the sport.

In 2025, the new LIT Super Sevens Series teams will compete in four legs over the summer and culminate with a party celebration where Series winners will be announced at the LIT7s Tournament in July at Wasps Rugby Club.

With this merger, we are excited to begin a new chapter for UK rugby sevens. Join us!

More information can be found on LIT7s social media @LIT7s or @supersevensseriesuk.
    `),
    ctas: [{ label: 'Explore Events', href: '#events', primary: true }]
  },
  {
    slug: '2024-charity-partner-wooden-spoon',
    title: '2024 Charity Partner: Wooden Spoon',
    date: '12 March 2024',
    category: 'Series News',
    summary:
      'Wooden Spoon was named as the charity partner for the 2024 series, connecting rugby 7s with community impact.',
    image: assetPath('assets/news/super-2024-charity.avif'),
    mediaFit: 'contain',
    sections: sourceArticleSections(`
The 2024 Nirvana Spa Super Sevens Series is thrilled to announce its partnership with Wooden Spoon, the children's charity of rugby, as its official charity partner for the 2024 tournament. This collaboration not only signifies the series' commitment to community and social responsibility but also leverages the passionate rugby community to support Wooden Spoon's transformative work with children and young people across the UK and Ireland.

About Wooden Spoon

For those not aware of the amazing work of the Wooden Spoon, they are a pioneering charity within the rugby community, dedicated to changing the lives of children and young people with disabilities or facing disadvantage. Through fundraising over £1 million annually, Wooden Spoon provides crucial support to local charities, ensuring those children and young people facing challenges receive the opportunities they deserve. Celebrating its rugby heritage and the core values of Passion, Integrity, Teamwork, and Fun, Wooden Spoon has made an indelible impact since 1983, contributing over £31 million to more than 1,465 projects and helping over 1.5 million children and young people.

A United Front for Change

The partnership between the Nirvana Spa Super Sevens Series 2024 and Wooden Spoon is set to amplify the impact of rugby's charitable spirit. The series will see fundraising efforts at each leg of the tournament, inviting fans and participants to contribute to Wooden Spoon's cause. Additionally, the presence of Wooden Spoon ambassadors throughout the series will highlight the charity's vital work and foster a deeper connection between the rugby community and the charity's mission.

Barrie Torbett, Tournament Director of the Super Sevens Series, expressed excitement about the collaboration: "Partnering with Wooden Spoon as our official charity for 2024 exemplifies our shared belief in Transforming Children’s Lives Through The Power of Rugby. We are honoured to have Wooden Spoon partner with us and have a productive mutual partnership going forward."

Engage and Support

The Nirvana Spa Super Sevens Series invites all rugby fans and community members to join in supporting Wooden Spoon. Through this partnership, the series aims to create a lasting impact, enriching the lives of children and young people by harnessing the collective power and generosity of the rugby community.

For more information on how to participate in fundraisers or learn more about the Nirvana Spa Super Sevens Series and Wooden Spoon, follow the series social channels and Wooden Spoon.

Contact Information:

Website: www.woodenspoon.org.uk

Email: charity@woodenspoon.org.uk

Spoonews publication: Spoonews Winter 2023 by Wooden Spoon - Issuu
    `),
    ctas: [{ label: 'Series Details', href: '#event/lit-super-sevens-series-2026', primary: true }]
  },
  {
    slug: '2024-vision-for-growth-inclusion-excellence',
    title: '2024 Vision for Growth, Inclusion and Excellence',
    date: '4 February 2024',
    category: 'Series News',
    summary:
      'A series vision built around bigger venues, stronger inclusion and a higher standard of rugby 7s competition.',
    image: assetPath('assets/news/super-2024-vision.avif'),
    mediaFit: 'contain',
    sections: sourceArticleSections(`
Since our inception in 2009, the Super Sevens Series has been a beacon of evolution, passion and resilience within the UK rugby sevens landscape. Transitioning through various phases of change—in venues, formats and alternative pretender competitions —today, it stands as a testament to the dedication of the rugby community. Governed and run by those who breathe rugby, the Series embodies the spirit of the game, operating as the only non-profit independent tournament in the country, with the singular aim of elevating rugby sevens to unprecedented heights in the UK!

Elevating Exposure and Participation

The deliberate structuring of the 2024 Series over three legs (rather than previous four legs) —Farnham, Newbury, and Bury St Edmunds—reflects our core mission to bring rugby sevens into the limelight across the UK. By spanning the series across these strategically selected locations, we're not just hosting a tournament; we're trying to ignite the 7s passion nationwide! This movement aims to inspire everyone in or outside the rugby community , encouraging participation and nurturing the next generation of international rugby sevens stars.

A Pathway for Development

The choice of venues and the spread of the series dates are designed to offer more than just competitive play. They are a platform for development—for players, coaches, referees, and managers aspiring to the zenith of rugby sevens. Each leg of the series serves as a stepping stone, offering invaluable experience and exposure to the highest level of semi-professional rugby sevens in the UK.

Creating Unique Experiences

The 2024 Series is tailored to provide a special and unique experience for all stakeholders—athletes, spectators, volunteers, and sponsors like Nirvana Spa. The vibrancy of Farnham, the accessibility of Newbury, and the proven engagement of Bury St Edmunds are chosen to ensure each event is memorable, fostering a sense of community and belonging among all who partake in the series.

Raising Standards Through Careful Planning

Our mission to raise the standard of rugby sevens in the UK is reflected in the meticulous planning and execution of the series. By operating a well-organized semi-professional series at carefully selected venues, we're setting a benchmark for excellence, organisation, and sportsmanship, aligning with our goal to enhance the sport's profile and quality within the nation.

A National Identity and Collaborative Approach

The Super Sevens Series stands out in a crowded landscape of over 150 tournaments and 300 sevens-specific teams between May and August. By offering a national identity and top-level focus, the series provides direction and inspiration for everyone involved in the game, from grassroots to elite levels. Our collaborative approach, powered by a family of dedicated volunteers, sets us apart, ensuring the series not only survives but thrives, facing the challenges of generating revenue and exposure head-on.

A Commitment to Consistency and Excellence

The unique structure of the Super Sevens Series sets it apart from the myriad of "one-off" tournaments in the rugby sevens landscape. Our series is meticulously designed to challenge teams not just in a single event, but over a span of three distinct and demanding legs. This format of "Serious Sevens" demands commitment, consistency, and a sustained level of high performance from participating teams.

This distinguishing feature of the Super Sevens Series has been a key factor in attracting esteemed international teams such as Spain, China, Germany, and Hong Kong. These teams recognize the value of competing in a series that tests their skills, strategies, and stamina across multiple events. It's a testament to the series' ability to provide a robust and competitive environment, one that mirrors the challenges and rigor of top-tier international play.

By participating in the Super Sevens Series, teams are not just entering a tournament; they are committing to a journey of growth, resilience, and excellence. This journey is what sets our series apart, making it a beacon for teams seeking to prove themselves in the realm of "Serious Sevens."

Looking to the Future

Inspired by our "big brother," the World Sevens Series, we are committed to continual evolution, aiming to leave a lasting legacy and contribute significantly to the growth of rugby sevens in the UK and beyond. The structure of the 2024 Series—its locations, timing, and goals—is a strategic step towards realizing this vision, promising a brighter, more inclusive, and highly competitive future for rugby sevens.

As we look forward to the 2024 Super Sevens Series, we're not just planning a series of events; we're laying the groundwork for the future of rugby sevens in the UK. Together, with the unwavering support of our volunteers, sponsors, and the rugby community, we're ready to make history, one try at a time.
    `)
  },
  {
    slug: '2024-series-opener-farnham',
    title: '2024 Series Opener at Farnham',
    date: '15 May 2024',
    category: 'Round Review',
    summary:
      'The 2024 series opened at Farnham with a full day of elite, open and social rugby 7s action.',
    image: assetPath('assets/news/super-2024-farnham.jpg'),
    sections: sourceArticleSections(`
Round 1: Thrilling Rugby Action at Farnham RFC

The Nirvana Spa Super Sevens Series UK launched its first round on May 11, 2024, at Farnham RFC, marking a day filled with high-octane rugby sevens. Established in 2009, this prestigious tournament continues to uplift rugby sevens in the UK, providing a premier platform for showcasing talent.

Morning Group Phase Highlights

The day began with electrifying matches. British Army triumphed over Rugby Deutschland 26-5, and Hong Kong China Rugby outplayed Esher Mavericks 34-19. Shogun RFC dominated Academic Barbarians 43-10, while Vaquita Fiji Warriors bested Apache 31-19.

The Elite Women’s division saw Vaquita Hammerhead 7's crushing Hong Kong China Rugby 52-5. A tense match between Savvy Panthers and BOOM Beavers ended in a 10-10 draw.

Midday Matches: Tight Contests and Dominant Performances

Shogun RFC women overpowered Brunel Trailfinders 31-10, and Hammerhead Sharks crushed Wooden Spoon Marauders 54-7. In Group D, Stunts defeated Esher Mavericks 42-7, while British Army narrowly edged Vaquita Hammerhead 7s 15-14.

Vaquita Hammerhead 7's women continued their dominance, defeating BOOM Beavers 24-17. Brunel Trailfinders secured a win over Wooden Spoon Marauders 22-12.

Afternoon Action: Knockout Phase Begins

The knockout phase intensified. British Army advanced with a 36-5 win over Stunts, and Rugby Deutschland upset Hong Kong China Rugby 17-5. Shogun RFC triumphed over Vaquita Hammerhead 7's 33-12 in the Women’s Cup semifinals, while Hammerhead Sharks defeated BOOM Beavers 33-14.

Evening Showdowns: Finals and Closing Battles

In the finals, Vaquita Hammerhead 7s won the Men’s Bowl Final 33-7 against Wooden Spoon Marauders. Brunel Trailfinders claimed the Women’s Plate Final, defeating Wooden Spoon Marauders 29-14.

The Women’s Cup Final saw Hammerhead Sharks narrowly beat Shogun RFC 21-14. Shogun RFC dominated Stunts in the Men’s Plate Final 41-5. The grand finale was a thrilling Men’s Cup Final where British Army edged out Apache 29-24.

Check out the standings at the end of Round 1 as these will affect the seeding and therfore the Groups for round 2!

Looking Ahead

With the first round complete, anticipation builds for the next rounds at Newbury RFC on June 8 and the grand finale at Bury St Edmunds RFC on June 22. The Nirvana Spa Super Sevens Series UK, with support from partners like Vaquita (apparel partner) and Wooden Spoon (charity partner), continues to elevate the rugby sevens scene, providing an exceptional platform for players, coaches, and fans alike.
    `),
    ctas: [{ label: 'View Media Packages', href: links.mediaPackages, primary: true }]
  },
  {
    slug: '2023-season-wrap-up',
    title: '2023 Season Wrap-up',
    date: '6 July 2023',
    category: 'Season Review',
    summary:
      'The 2023 Super Sevens season closed with winners, standings and major storylines across the UK series.',
    image: assetPath('assets/news/super-2023-wrap.jpg'),
    sections: sourceArticleSections(`
The echoes of the referee's whistle have faded, the crowds have departed, and the Greene King IPA Haberden pitches are quiet once again after the successful conclusion of the Nirvana Spa Super Sevens Series UK. This competition provided a phenomenal display of international sevens rugby, with teams from across the globe demonstrating their skill, speed, and sportsmanship in a series of electrifying showdowns.

In the Elite Men's division, Rugby Deutschland demonstrated their prowess, claiming the coveted number one spot with a remarkable total of 67 tournament points. Their game was defined by strategic precision, exceptional speed, and a cohesive team dynamic that allowed them to secure 73 tries, the highest in their division. Their performance across the series solidified their reputation as a formidable force in the world of sevens rugby.

Chasing closely on their heels were the Barracudas, who finished second in the series, with an impressive points difference of 282. With their signature blend of relentless attack and solid defence, they managed to strike a balance that took them far in the series, securing their position as one of the top teams in the world.

In third place, the Apache showcased their strength and resilience, overcoming fierce competitors and solidifying their standing within the series. Their ability to remain focused and competitive in high-pressure situations was a testament to their tenacity, earning them well-deserved recognition in the series.

The Elite Women's division saw equally intense competition. The Hammerheads emerged victorious, showcasing a perfect blend of strategy, strength, and skill. Their relentless pursuit of victory saw them overcome various challenges, securing first place in the series with a superior points difference.

Matching them stride for stride were the Samurai RFC, who showcased their class, power, and precision throughout the series, finishing second only due to points difference. Their performance highlighted their resilience and the strength of women's rugby in the modern game.

Rounding off the top three in the women's division were the Lionesses. Their journey through the series was marked by determination and impressive team dynamics, attributes that no doubt contributed to their success.

A series of this magnitude relies heavily on the support and dedication of many individuals and organisations. We extend additional thanks to each of our hosts, the referee team who generously volunteered their time, and our dedicated volunteer workforce. Their combined effort helped us successfully manage each leg of the tournament and the demanding months in between.

We also wish to express our immense gratitude to our partners and sponsors. Nirvana Spa, our tournament sponsor, contributed significantly to the success of the series, enhancing the spectacle of our beloved game. Vaquita Apparel, our kit partner, provided top-quality apparel, instilling confidence and boosting morale among the players. Lastly, our hydration partner Nutrition X played a crucial role in maintaining the athletes' peak performance levels by ensuring they remained well-hydrated throughout the games.

In summary, the Nirvana Spa Super Sevens Series UK was a true testament to the thrilling nature of rugby sevens. We witnessed phenomenal displays of sportsmanship, unforgettable tries, and intensely competitive games. Our heartfelt thanks go to the players, sponsors, referees, volunteers, hosts, and of course, the dedicated fans. We eagerly anticipate what the next season will bring!
    `),
    ctas: [{ label: 'Series Event Page', href: '#event/lit-super-sevens-series-2026', primary: true }]
  },
  {
    slug: '2023-dramatic-finale',
    title: '2023 Dramatic Finale',
    date: '6 July 2023',
    category: 'Round Review',
    summary:
      'The 2023 finale delivered a close finish to the series race and a strong end-of-season rugby 7s stage.',
    image: assetPath('assets/news/super-2023-finale.jpg'),
    sections: sourceArticleSections(`
The electric atmosphere at The Greene King IPA Haberden, Bury St Edmunds set the stage for the unforgettable final leg of the Super Sevens Series. Packed with adrenaline-infused action, the grand finale offered up performances that both delighted spectators and reshaped the landscape of sevens rugby.

The Elite Men's competition roared into action with Rugby Deutschland squaring off against the Wooden Spoon Marauders on Pitch 1, where Deutschland asserted their dominance, securing an impressive 28-10 victory. Concurrently on Pitch 2, the Wild Dogs unleashed their prowess against the Lions, clinching a 33-17 triumph and stamping their authority early on.

In Group B of the men's division, Apache exhibited an impressive display of power against the Akuma Beavers, holding them scoreless in a 24-0 rout. Meanwhile, in Group C, the Hong Kong China Dragons breathed fire onto the pitch, snatching a hard-fought 31-14 victory against the Stunts.

On the women's side, Group A saw the Lionesses roar past the Wooden Spoon Marauders with a resounding 27-5 victory. Over in Group B, Hammerhead 7's made a splash against Bath Rugby, registering an emphatic 33-7 win.

As the day heated up, Wild Dogs held their ground against the SAMURAI Renegades with a decisive 27-7 win. The Barracuda's demonstrated their potency in Group C, slicing through the Stunts with an impressive 34-14 win.

The Lionesses continued their winning streak in the women's competition with a 27-17 victory over Savvy Panthers, while Hammerhead 7's continued to churn the waters, overwhelming the Wild Dogs with a hefty 36-5 win.

Progressing into the Men's Cup Quarterfinals, Rugby Deutschland preserved their undefeated run with a thrilling 31-26 victory over the Lions. The Wild Dogs carried their group stage success into the quarterfinals, pouncing on Hammerhead 7s with a resounding 28-14 triumph.

In the semi-finals, Barracuda's managed to swim past Rugby Deutschland in a nail-biting 24-19 game. On the women's side, the Lionesses showed their might, narrowly edging past the Wild Dogs 25-22, while the Hammerhead 7's displayed their dominance by storming past Savvy Panthers with a staggering 48-0 victory.

The finals were a spectacle to behold. Akuma Beavers clinched the Men's Bowl Final in a thrilling face-off against the Wooden Spoon Marauders with a 26-17 win. Samurai RFC clinched the Women's Plate Final with a comprehensive 36-0 victory over Bath Rugby. In the Women's Cup Final, Hammerhead 7's outplayed the Lionesses 24-14 to take home the trophy, while the Lions claimed the Men's Plate Final with a dominant 35-14 win over the Hammerhead 7s.

The climax of the day, the Men's Cup Final, was an edge-of-your-seat match where the Barracuda's reeled in the Wild Dogs with a 22-5 victory, taking home the coveted Cup.

As the sun set over The Greene King IPA Haberden, the cheers from the crowd and the roars of victory from the triumphant teams echoed across the stadium, marking the end of an exhilarating day of rugby. From thrilling comebacks to dominant displays, the final leg of the Super Sevens Series will surely live long in the memory of rugby fans around the world.
    `),
    ctas: [{ label: 'Media Packages', href: links.mediaPackages, primary: true }]
  },
  {
    slug: '2023-cobham-round',
    title: '2023 Cobham Round',
    date: '20 June 2023',
    category: 'Round Review',
    summary:
      'Cobham hosted a key 2023 Super Sevens round with Dragons, Beavers and other series sides in the mix.',
    image: assetPath('assets/news/super-2023-cobham.jpeg'),
    sections: sourceArticleSections(`
The Super Sevens Series (S7S) continued to enthral rugby sevens fans with a day of thrilling battles and jaw-dropping plays in the third leg at Cobham RFC on June 17. The heat of the competition, matched only by the 30= degree heat on the day, only amplified as the teams vied for glory in the Elite Men's and Women's contests, eyeing the ultimate prize to be decided on July 1 at Bury St Edmunds.

The day got off to an explosive start as Rugby Deutschland showcased their mastery with a commanding 33-7 victory over the Akuma Beavers in the Elite Men's competition. CRX Marlborough followed suit, defeating the Stunts with a strong 38-10 win. In other early highlights, the Barracudas outmanoeuvred the Lions, netting a 31-7 victory.

In the Women's Elite competition, Samurai RFC left an indelible mark with an impressive 52-0 victory against Bath Rugby, while the Lionesses roared past the Wild Dogs with a score of 31-12. Momentum continued to build as the Akuma Beavers put up a spirited fight but fell to a determined Hammerhead 7's side, 38-7.

Midday brought an adrenaline surge as the competition heated up. The Wooden Spoon Marauders eked out a 32-26 victory against the Savvy Panthers in a tightly fought contest. In a surprise turn of events, the Wild Dogs upset Rugby Deutschland in a tightly contested 26-21 victory that had spectators on the edge of their seats.

In a face-off between the titans of the Women's Elite competition, Samurai RFC narrowly edged past the Lionesses 35-33 in what was undeniably one of the most exciting matches of the day. The Wild Dogs also clawed their way past Bath Rugby, notching a solid 46-5 victory.

As the day progressed into the afternoon, the elimination stages brought forward more thrilling rugby. The China Flying Dragons breathed fire, edging past the Wild Dogs 29-24, while Rugby Deutschland redeemed themselves with a decisive 27-12 victory against CRX Marlborough.

Meanwhile, in the Women's Plate Semi-Final, the Wild Dogs showed their resilience with a commanding 34-0 win against the Savvy Panthers, and the Wooden Spoon Marauders overcame Bath Rugby with a 32-19 scoreline.

The day concluded with the all-important finals. The Akuma Beavers hoisted the Men's Bowl after edging the Lions 26-21, while the Wild Dogs secured the Women's Plate with a 19-14 win against the Wooden Spoon Marauders. In the Women's Cup final, Akuma Beavers demonstrated their dominance with a 17-5 victory against Hammerhead 7's.

The Men's Plate saw a close contest between the Barracuda's and CRX Marlborough, with the former triumphing 19-14. The day culminated with a stunning showdown in the Men's Cup final, where the China Flying Dragons soared high above Rugby Deutschland, claiming a resounding 36-12 victory.

Post the third leg, Rugby Deutschland and Samurai RFC are leading the Elite Men's and Women's divisions with total tournament points of 55 and 52, respectively. Both teams have showcased exceptional form, with Samurai RFC, in particular, displaying a formidable point difference of 234 in the Women's division.

Despite their win, the China Flying Dragons still have work to do, currently sitting in the fifth position with 30 total tournament points. It is unfortunate that they missed the first leg at Farnham due to issues with their Visas as their recent victory could have seen them with a genuine chance of challenging for the title. How however, despite their momentum they need to hope a lot goes wrong for others and they have a great day at the final leg at Bury St Edmunds on July 1 to be in with any chance of being victorious overall.

What an extraordinary day of sevens rugby it was at Cobham RFC, and amidst the breathtaking plays and dazzling displays of teamwork, two players stood tall, carving their names into the annals of the Super Sevens Series.

In the Elite Women's division, it was Becca Wye who stole the show with her magnificent prowess. Unyielding, swift, and precise, Wye was the torch that lit the path to victory, cementing her name as the Women's Player of the Tournament.

Over on the Elite Men's side, Wang Bao of China Flying Dragons showcased why he is considered a force to be reckoned with. A thrilling blend of speed, strength, and strategy, Bao displayed a rugby masterclass on the pitch. His exhilarating performance throughout the day rightfully earned him the coveted title of Men's Player of the Tournament.

As we anticipate the upcoming action, with such tight competition in both the Elite Men's and Women's divisions, the teams regroup for the fourth and final leg of the S7S at Bury St Edmunds on July 1! With anticipation building to see who will claim the ultimate prize in both the Elite Men's and Women's competitions. Stay tuned for more intense Rugby Sevens action!
    `)
  },
  {
    slug: '2023-round-two',
    title: '2023 Round Two',
    date: '5 June 2023',
    category: 'Round Review',
    summary:
      'Round two of the 2023 series kept the early-season standings moving and widened the team storylines.',
    image: assetPath('assets/news/super-2023-round-two.jpg'),
    sections: sourceArticleSections(`
On a day where Rugby Deutschland, Samurai Women and Savvy Panthers all confirmed their second sets of silverwear in the Series so far, rugby passion ignited the field of Newbury RFC on June 3rd, as the second leg of the Super Sevens Series (S7S) took UK rugby enthusiasts by storm. Elite men's and women's squads went head-to-head, showing off their prowess in a thrilling series of matches that further raised the profile of UK Rugby Sevens.

The day's action kicked off with an authoritative display from Rugby Deutschland, who decisively outplayed Stunts with a 39-0 victory. Concurrently on Pitch 2, Apache demonstrated their power, defeating the Lions with a score of 31-12. The early morning games set the tone for the day, with high-quality rugby leaving spectators and players alike buzzing with excitement.

Next up, China's Flying Dragons scorched their way past Hong Kong China Dragons, winning 27-0 in a dazzling display of agility and tactical brilliance. The Barracudas followed suit by overpowering the Wooden Spoon Marauders in a 36-14 victory, showcasing the very best of Rugby Sevens.

In the women's competition, the Samurai RFC and the Lionesses left their mark. Samurai RFC's precision and skill were on full display as they triumphed 40-7 over Hammerheads 2, while the Lionesses clawed their way to a narrow 24-19 victory against the Wild Dogs in a nail-biting contest. Hammerhead 7's and the Wooden Spoon Marauders also carved out wins against Bath Rugby (32-14) and Savvy Panthers (24-17), respectively.

The intensity only heightened as the day progressed, with each game acting as a thrilling theatre of tactical nous and raw talent. Apache barely scraped a win against Hammerhead 7s, with a one-point margin (15-14) keeping spectators on the edge of their seats, while Rugby Deutschland lost a hard-fought battle against the Wild Dogs (17-12).

By the time the men's Cup final rolled around, the energy at Newbury RFC was electric. Apache, after a day of tough battles, found themselves staring down Rugby Deutschland. In a spectacular display of strength and agility, Rugby Deutschland pulled ahead to a 26-12 victory, proving that they are a force to be reckoned with in the world of Rugby Sevens.

In the women's competition, the Cup final saw Samurai RFC take on the Wooden Spoon Marauders. In a close encounter, Samurai RFC came out on top with a 24-19 win, their relentless determination proving too much for the Marauders.

Thanks to our sponsors Nirvana Spa, Vaquita Apparel, and Nutrition X, the second leg of the S7S was an event to remember. The teams now regroup and look ahead to the third leg at Cobham RFC. If the action so far is anything to go by, we're all in for a treat. Stay tuned!
    `)
  },
  {
    slug: '2023-series-opener',
    title: '2023 Series Opener',
    date: '16 May 2023',
    category: 'Round Review',
    summary:
      'The opening 2023 Super Sevens round launched the season with early results and media coverage.',
    image: assetPath('assets/news/super-2023-opener.jpeg'),
    sections: sourceArticleSections(`
As the sun rose over Farnham RFC, rugby fans and teams from around the county, country and world eagerly turned out for the start of the Nirvana Super Sevens Series (S7S). The first day of the series did not disappoint, treating spectators to a smorgasbord of rugby action.

The day started strong with the Hong Kong China Dragons breathing fire against the Hammerhead 7s, ending with a decisive 29-7 victory. The Dragons' performance was a dazzling display of rugby finesse, leaving spectators eager for more.

Not to be outdone, Rugby Deutschland put on a powerhouse performance against the Akuma Beavers, securing a confident 28-10 win. The match was a showcase of German precision and discipline, signaling they were a force to be reckoned with.

The women's matches also provided their share of adrenaline. Samurai RFC and the Savvy Panthers faced off against their respective opponents, each demonstrating their mettle. Samurai RFC’s fierce onslaught against the Wild Dogs led to a whopping 39-0 victory. Meanwhile, the Savvy Panthers fell to the Lionesses, in a tense match ending 20-10.

However, the match of the morning arguably belonged to the Hammerhead 7's women's team. Their ruthless 46-0 demolition of the Akuma Beavers was a testament to their preparation and determination, leaving a lasting impression as the morning games wrapped up.

As the day heated up, so did the competition. The Hong Kong China Dragons continued their impressive run with a 27-19 victory over the Wooden Spoon Marauders, while Rugby Deutschland maintained their winning streak with a solid 21-10 win against the Lions.

In the women's games, the Savvy Panthers redeemed themselves with a hard-fought 19-17 win over the Samurai RFC. Meanwhile, the Lionesses continued to roar with a 41-21 triumph over the Wild Dogs, further adding to the day's excitement.

As the sun began to set and the stakes got higher, the Dragons and the Apache faced their respective opponents in the Cup quarterfinals. The Dragons maintained their fiery form with a 26-7 win over CRX Marlborough, while the Apache were victorious against the Hammerhead 7s, ending 35-17.

The Samurai RFC women's team reminded everyone why they were champions, defeating the Wooden Spoon Marauders 31-7 in the Cup semifinals. The Hammerhead 7's women's team followed suit, overcoming the Lionesses with a 24-5 victory.

The day culminated in a heart-stopping finale as the men's teams from Hong Kong and Rugby Deutschland clashed in the Cup Final. In a nail-biting match, Rugby Deutschland edged out the Dragons 19-17, ending the day with a thrilling victory that left spectators on the edge of their seats.

The first leg of the S7S was an unforgettable showcase of talent, strategy, and athleticism. Now, all eyes are on Newbury RFC, where the next leg takes place on June 3rd. If today was any indication, the rugby world is in for another fantastic day of action. As is tradition, a Male and Female player of the Leg was achosen, both goign to Cup Final Winners, in the Womens Case it was Dutch player Mariet Luijken of Samurai RFC Warriors and for the Men, it was Rugby Deutschland number 10, Jakob Dipper - Congratulations to both and we lookforward to seeing you at coming legs! Check out the current standings to see how things look after the first leg.
    `)
  },
  {
    slug: 'super-sevens-vaquita-apparel-partnership',
    title: 'Vaquita Apparel Teams Up with Super Sevens Series',
    date: '12 May 2023',
    category: 'Partner News',
    summary:
      'Vaquita Apparel joined the Super Sevens Series as the official merchandise supplier for the 2023 series.',
    image: assetPath('assets/news/super-2023-opener.jpeg'),
    sections: sourceArticleSections(`
The Super Sevens Series (S7S), the UKs premier rugby 7s competition, is thrilled to announce its partnership with Vaquita Apparel as the official merchandise supplier for the 2023 series. This collaboration marks the first significant sponsorship and partnership deal for Vaquita Apparel.

The Super Sevens Series is on a mission to elevate the profile and importance of rugby 7s in the UK, develop the next generation of men's and women's rugby sevens internationals, and provide a unique experience for all involved. The partnership with Vaquita Apparel aligns perfectly with this mission, supplying both match kits and leisurewear for the S7S team.

"Vaquita Apparel brings a fresh, dynamic approach to our series" said Barrie Torbett, Tournament Director for S7S. "They understand our commitment to developing rugby talent in the UK and share our passion for excellence. We look forward to seeing our people perform in style with Vaquita's high-quality apparel".

The collaboration will be widely promoted across various platforms. A 20-second promotional clip showcasing the new S7S team gear from Vaquita Apparel will be shared on both brands' social media platforms. Additionally, followers can look forward to a behind-the-scenes interview with S7S management, discussing the exciting partnership.

The Super Sevens Series, known for its professional photography and match video, will offer fans a visual feast with action shots of teams and branded match balls, all adorned in Vaquita Apparel. "We are incredibly proud to partner with Super Sevens Series, a competition that truly prioritises the sport and athletes" said Tracey Lorimer, Founder of Vaquita Apparel. "This partnership marks a significant milestone for Vaquita and aligns with our vision to support and inspire athletes".

The Super Sevens Series will kick off on May 13, 2023, at Farnham RFC, followed by matches at

Newbury RFC, Cobham RFC, and culminating at Bury St Edmunds RFC on July 1, 2023. For more

details on the partnership and event dates, visit the S7S website or follow S7S and Vaquita Apparel on social media.

About Super Sevens Series:

The Super Sevens Series (S7S) is a leading rugby 7s competition in the UK, dedicated to raising the profile of rugby sevens and creating a pathway for players, coaches, referees, and managers to reach the highest level of the game. The series operates over four weekends at four venues, combining top-level rugby with a festival atmosphere.

About Vaquita Apparel:

Vaquita Apparel is a brand-new sportswear, leisurewear and corporate wear provider offering

bespoke designs and tailor-made clothing solutions for your business and sports team.

With over 15 years in the industry, we have a wealth of experience in sourcing the finest products and the highest quality logo applications available on the market - we rigorously test and put all products through a tough quality assurance process to ensure that every product that leaves the factory is of the highest quality.

Press Contact:

Tracey Lorimer

tracey@vaquita-apparel.com

01449 404348
    `),
    ctas: [{ label: 'Series News', href: links.newsPage, primary: true }]
  },
  {
    slug: 'super-sevens-referees-pathway',
    title: 'Super Sevens Referees Pathway',
    date: '17 April 2023',
    category: 'Pathway',
    summary:
      'The referee pathway supports rugby 7s match officials and strengthens tournament-day delivery.',
    image: assetPath('assets/news/super-referees-pathway.jpeg'),
    sections: sourceArticleSections(`
As we gear up for the 2023 Super Sevens Series, you may have spotted a few familiar faces appearing on the World Sevens, and European Rugby stages.

George Selwood, Adam Leal, Finlay Brown, Katie Ritchie, Richard Haughton, Craig Chan, Ano Kuwai, and Holly Wood have been taking charge of games across the World Sevens Series in various locations across the globe, including most recently in Hong Kong.

In addition to the World Sevens Series, referee Ano Kuwai (JRFU) has been named in the referee team for the World Rugby Sevens Challenger Series taking place later this month in South Africa.

Speaking of the appointments, and the success the referees have had, our Super Sevens Series Referee Manager Michael Tutty said; “The vision of Terry Sands and Barrie Torbett with the Super Sevens Series was also to help with referee development. Little did they know that this would become the crucial stepping stone to success for many referees. We have had referees with International Invitation Finals, HSBC World Series, European Rugby, Commonwealth Games, Olympic Games and Sevens World Cup success. The Super Sevens Series helps people.”

Adding to that, Series Founder and Director, Barrie Torbett; “We are delighted that, in addition to the SSS developing rugby players who have gone onto International recognition, our referees are also appearing in the World Series and Premiership rugby.”

We look forward to welcoming a strong team of experienced referees back to the competition across this summer.
    `)
  },
  {
    slug: '2022-bigger-bolder-better',
    title: '2022: Bigger, Bolder, Better',
    date: '21 December 2021',
    category: 'Series News',
    summary:
      'The 2022 series positioned Super Sevens for a bigger, bolder season across UK rugby 7s.',
    image: assetPath('assets/news/super-2022-bigger.jpg'),
    sections: sourceArticleSections(`
The dates for the Super Sevens Series UK have been announced, and we for one cant wait. Kicking off in style at Newbury on Saturday 14th May, London Irish Saturday 28th May, Stafford 11th June and ending the tournament in Aldershot 25th June.
    `)
  },
  {
    slug: '2022-newbury-samurai-double',
    title: 'Newbury: Samurai Men and Women Win Cups',
    date: '20 May 2022',
    category: 'Round Review',
    summary:
      'Samurai Rugby delivered a Newbury cup double in the 2022 Super Sevens season.',
    image: assetPath('assets/news/super-2022-newbury.jpg'),
    sections: sourceArticleSections(`
Results of Newbury First Leg of Super Sevens Series 2022

SAMURAI RFC MEN'S TOOK THE MEN'S CUP to be the overall winners securing their place with a Golden Try in Extra Time!

With James Pavey as Player of the Tournament from Samurai's

SAMURAI RFC WOMEN'S TOOK THE WOMEN'S CUP

With Emma Hennisey as the Player of the Tournament from Samurai's

The Men's Plate was won by Navy Sharks

The Women's Plate was won by Savvy Panthers

The Men's Bowl was won by Stunt 7s
    `),
    ctas: [{ label: 'Series Results', href: '#event/lit-super-sevens-series-2026', primary: true }]
  },
  {
    slug: '2021-aldershot-apache-plate',
    title: 'Aldershot Apache Plate Win',
    date: '2021',
    category: 'Round Review',
    summary:
      'Apache featured in the 2021 Aldershot coverage with a plate-winning performance.',
    image: assetPath('assets/news/super-2021-apache.jpg'),
    sections: sourceArticleSections(`
Apache 7s take home the trophy at the Super Seven Series plate final in Aldershot last week, winning 33 – 5! What a triumph!
    `)
  },
  {
    slug: '2021-aldershot-womens',
    title: '2021 Aldershot Women’s Series Action',
    date: '2021',
    category: 'Round Review',
    summary:
      'Women’s rugby 7s was central to the 2021 Aldershot coverage and the wider Super Sevens competition model.',
    image: assetPath('assets/news/super-2021-womens.jpeg'),
    sections: sourceArticleSections(`
Samurai RFC Ladies secured the top spot at Aldershot this weekend. Looking forward to next week’s performances from all teams at Newbury.
    `)
  },
  {
    slug: '2021-tom-varndell-aldershot',
    title: 'Tom Varndell at Aldershot',
    date: '2021',
    category: 'Feature',
    summary:
      'Former international winger Tom Varndell featured in the Aldershot series story.',
    image: assetPath('assets/news/super-2021-tom-varndell.jpg'),
    sections: sourceArticleSections(`
Tom Varndell, the current Premiership Top Try Scorer, was at Aldershot playing for Core Team Samurai RFC.
    `)
  },
  {
    slug: '2021-ramblin-jesters-women-win',
    title: 'Ramblin Jesters Women Win',
    date: '2021',
    category: 'Round Review',
    summary:
      'Ramblin Jesters Women claimed a notable 2021 series win.',
    image: assetPath('assets/news/super-2021-ramblin.jpg'),
    sections: sourceArticleSections(`
Ramblin Jesters Womens won the Cup final at Newbury with their amazing 29 - 12 win over Wooden Spoon Mauraders, gaining 20 points! We can’t wait to see what they’ll bring next!
    `)
  },
  {
    slug: '2021-semi-radradra-newbury',
    title: 'Semi Radradra at Newbury',
    date: '2021',
    category: 'Feature',
    summary:
      'Semi Radradra’s Newbury appearance sits among the standout player moments in Super Sevens coverage.',
    image: assetPath('assets/news/super-2021-semi.jpeg'),
    sections: sourceArticleSections(`
Semi Radradra was at Newbury! playing for Core Team Wooden Spoon Marauders. The following day Semi was selected in the Fiji 7s Team to take part in the 2020 Olympics.
    `)
  },
  {
    slug: '2021-wooden-spoon-marauders-plate',
    title: 'Wooden Spoon Marauders Plate Win',
    date: '2021',
    category: 'Round Review',
    summary:
      'Wooden Spoon Marauders featured in the 2021 plate competition coverage.',
    image: assetPath('assets/news/super-2021-wooden-spoon.jpeg'),
    sections: sourceArticleSections(`
The Wooden Spoon Marauders take the victory in Newbury this week winning the Plate cup final! Congratulations to the team, keep up the amazing performances!
    `)
  },
  {
    slug: '2021-samurai-rfc-newbury',
    title: 'Samurai RFC at Newbury',
    date: '2021',
    category: 'Round Review',
    summary:
      'Samurai RFC’s Newbury performance is part of the series’ invitational rugby history.',
    image: assetPath('assets/news/super-2021-samurai.jpg'),
    sections: sourceArticleSections(`
Samurai RFC maintain their winning streak from Aldershot, beating Speranza 22 at Newbury this weekend 29 -21, winning them the Cup final in Newbury. Will they be able to maintain their title at Nottingham?
    `)
  },
  {
    slug: '2021-aldershot-mens-winners',
    title: 'Aldershot Men’s Winners',
    date: '2021',
    category: 'Round Review',
    summary:
      'Aldershot men’s winners featured in the 2021 Super Sevens coverage.',
    image: assetPath('assets/news/super-2021-mens.jpeg'),
    sections: sourceArticleSections(`
Samurai RFC Mens team have claimed victory, coming first in the Aldershot leg of the Super Sevens Series, beating British Army 33 - 5. What an exciting start to the series!
    `)
  },
  {
    slug: 'a-beginners-guide-to-watching-rugby-sevens',
    title: 'A Beginner’s Guide to Watching Rugby Sevens',
    date: 'LIT7s Guide',
    category: 'Rugby 7s Guide',
    summary:
      'A quick guide to rugby sevens rules, scoring, match rhythm, tactics and what spectators should watch for at LIT7s.',
    image: assetPath('assets/imported/rugby-sevens-guide.avif'),
    sections: sourceArticleSections(`
Rugby Sevens is a faster, higher-scoring, and more exciting form of traditional rugby played with just 7 players on each side. It is touted to be an adrenaline-fueled ordeal for both players and fans. Here is a beginner’s guide to everything you need to watch and enjoy Rugby Sevens.

Understanding the Basics

Rugby Sevens have modified rules to regular rugby. Similar to an American touchdown, the goal is to gain more points than the other team by grounding the ball in the in-goal area of the other team. A try is worth five points in rugby, and a team can add an additional two points with a conversion kick after scoring a try. 

They are fast-paced games. The time between matches is shorter, which creates more scoring opportunities as the players are usually more spread out. This wide-open spacing leads to thrilling breakaways and strategic plays that keep fans on the edge of their seat. 

Key Rules and Gameplay

Sevens Rugby has its own rules that set it apart from traditional Rugby:

Team Configuration: Rugby Sevens Teams consist of seven players rather than the fifteen that are a staple feature of regular rugby. 

Length of a Match: Each match consists of two seven-minute halves (with a short halftime). 

Scoring: A try is worth five points, and a conversion is two points. One of the reasons why penalty goals are rare is because of the fast-paced nature of the game. 

Scrums and Lineouts: Scrums have only three players from each team involved, so they are far quicker and less contested. Lineouts feature fewer players, too, further increasing game speed. 

Sin Bins: A player receiving a yellow card has to leave the field for two minutes. This is far more disruptive to teams who play with fewer players on the field.

Such rules create a dynamic environment where strategy and teamwork become vital. 

Watching Rugby Sevens

It is important to understand and appreciate the tactics employed by a team when watching Rugby Sevens. Rather than restrict attention to merely lateral or linear attacking methods, coaches exploit space on the field. The players at both ends must be skilled at quick thinking and preserving possession through furious periods of play. 

And for you as a viewer, the more you know about where the players are supposed to be, the better you can understand what is happening. For example, forwards are usually involved in scrums and rucks, while backs are key for fast breaks and scoring tries. When analysing what teams do when passing into the attack and their approach to moving from defence into a counterattack, you get an idea about the kind of tactics a team is employing. 

Engaging with Rugby Betting

Many fans want to make their Rugby Sevens viewing more interesting by betting on it. Lottoland Sports article on rugby betting shares with us some good tips that can increase your experience when entering the game. Watching the odds and reading up on team strategies can improve the fans’ viewing experience as they bet on particular games or entire tournaments. 

Conclusion

Rugby Sevens is a thrilling sport that requires both athleticism and strategy. By understanding its rules and framework, you can make the most of this extremely electrifying flavour of rugby. From attending live matches to betting on your team, Rugby Sevens guarantees an unforgettable experience filled with humanity and excitement.
    `),
    ctas: [{ label: 'Read Rules Page', href: links.lit7sRules, primary: true }]
  },
  {
    slug: 'sportsballshop-match-ball-partner',
    title: 'SportsBallShop Match Ball Partner',
    date: 'Partner News',
    category: 'Partner News',
    summary:
      'SportsBallShop.co.uk continues as a LIT7s match ball partner with Lusum rugby balls and a discount for teams and players.',
    image: assetPath('assets/imported/sportsballshop-logo.png'),
    mediaFit: 'contain',
    sections: sourceArticleSections(`
LIT7s Series is proud to announce SportsBallShop.co.uk as our official match ball partner for the 11th year running!

Unique to LIT7s, we’ll be using the pink version of their fantastic Lusum rugby balls throughout the LIT7s Series. We’ve been using these fantastic rugby balls for over a decade and absolutely love working with this company!

Get 20% OFF the full range of Lusum rugby balls for your team! Just go to https://www.sportsballshop.co.uk/collections/lusum-rugby-balls and use code LIT7SRUGBY when you checkout.

Don’t forget to follow them on Facebook and Instagram for great deals on a wide range of sports ball and kit:

https://www.instagram.com/sportsballshop.co.uk/

https://www.facebook.com/SportsBallShop
    `),
    ctas: [{ label: 'Partner With LIT7s', href: links.partnersPage, primary: true }]
  }
];

export const mediaPackages: GalleryItem[] = [
  {
    title: 'LIT7s video collection',
    category: 'Video',
    image: assetPath('assets/gallery/lit7s-video-2023.jpg'),
    caption: 'Official LIT7s videos from 2012, 2013, 2014, 2015, 2016, 2018, 2019, 2021, 2022 and 2023.',
    href: links.lit7sVideoCollection
  },
  {
    title: 'LIT7s tournament photos',
    category: 'Photos',
    image: assetPath('assets/gallery/lit7s-gallery-match.jpg'),
    caption: 'Teams, winners, match action, food, entertainment and spectator photos from London tournament days.',
    href: links.lit7sTournamentPhotos
  },
  {
    title: 'London 7s stadium event',
    category: 'London 7s',
    image: assetPath('assets/imported/lit-london-action-2.jpg'),
    caption: 'AFC Wimbledon stadium event visuals, elite rugby, fan experience and event-day festival moments.',
    href: links.london7s2024
  },
  {
    title: 'Food and drink',
    category: 'Festival',
    image: assetPath('assets/imported/lit-food-market.jpg'),
    caption: 'BBQ, falafel, Mexican food, crepes, ice cream, beer, Pimms and pitch-side drinks.',
    href: links.foodAndDrink
  },
  {
    title: 'Entertainment package',
    category: 'Festival',
    image: assetPath('assets/imported/lit-entertainment-dancers.jpg'),
    caption: 'Cheerleaders, drum band, face painting, DJ, Red Bull Wings, Narni Shakers and party energy.',
    href: links.entertainment
  },
  {
    title: 'Bury St Edmunds 2024 gallery',
    category: 'Super Sevens',
    image: assetPath('assets/news/super-2024-farnham.jpg'),
    caption: 'Round-three Super Sevens photo gallery and match-day media package.',
    href: links.superSevensBury2024GalleryPage
  },
  {
    title: 'Bury St Edmunds 2024 livestream',
    category: 'Livestream',
    image: assetPath('assets/news/super-2023-finale.jpg'),
    caption: 'Round-three livestream package with match footage and commentary.',
    href: links.superSevensBury2024LivestreamPage
  },
  {
    title: '2023 Super Sevens round photos',
    category: 'Super Sevens',
    image: assetPath('assets/news/super-2023-cobham.jpeg'),
    caption: 'Farnham, Newbury, Cobham and Bury St Edmunds event media from the 2023 season.',
    href: links.superSevens2023MediaPage
  },
  {
    title: 'Finals analysis clips',
    category: 'Analysis',
    image: assetPath('assets/news/super-2023-wrap.jpg'),
    caption: 'Mike Friday-style finals analysis themes, coaching notes and series performance talking points.',
    href: links.superSevensAnalysisPage
  },
  {
    title: 'USA camp media',
    category: 'USA Camps',
    image: assetPath('assets/gallery/olympic-camp-training.jpeg'),
    caption: 'Coach sessions, camp groups, player feedback moments and behind-the-scenes LIT7s USA content.',
    href: links.olympicExperience
  },
  {
    title: 'Florida event visuals',
    category: 'USA Tournament',
    image: assetPath('assets/gallery/florida-event-preview.avif'),
    caption: 'Premier Sports Campus tournament visuals for the LIT Florida International 7s pathway.',
    href: links.floridaEvent
  }
];

export const faqItems: FaqItem[] = [
  {
    question: 'When is LIT7s London 2026?',
    answer:
      'LIT7s London 2026 is scheduled for Saturday 18 July 2026 and is the closing stop of the 2026 LIT Super Sevens Series.'
  },
  {
    question: 'Where is LIT7s London played?',
    answer:
      'The 2026 London tournament is listed for Wasps FC, Twyford Avenue Sports Ground, Twyford Ave, Acton, London W3 9QA.'
  },
  {
    question: 'What divisions can teams enter?',
    answer:
      'LIT7s London lists men’s and women’s open and social rugby 7s divisions. The wider LIT Super Sevens Series includes elite, open and social teams.'
  },
  {
    question: 'Can spectators buy tickets?',
    answer:
      'Yes. Spectator tickets are linked throughout the site for LIT7s London, with VIP and standard event-day options surfaced in the tournament pages.'
  },
  {
    question: 'What is the LIT Super Sevens Series?',
    answer:
      'It is a five-event UK rugby 7s series running from 9 May to 18 July 2026, ending with LIT7s London at Wasps FC.'
  },
  {
    question: 'Does LIT7s run USA events and camps?',
    answer:
      'Yes. LIT7s USA includes the LIT Florida International 7s on 28 November 2026 and USA rugby 7s camp programming such as the Olympic Experience and IMG Experience.'
  }
];

export const featuredRail = [
  {
    title: 'Series Dates',
    detail: '9 May - 18 July 2026',
    icon: CalendarDays,
    accent: 'green' as EventAccent,
    href: '#calendar'
  },
  {
    title: 'LIT7s London',
    detail: '18 July 2026',
    icon: Trophy,
    accent: 'green' as EventAccent,
    href: '#events'
  },
  {
    title: 'LIT Florida 7s',
    detail: '28 November 2026',
    icon: Waves,
    accent: 'usa' as EventAccent,
    href: '#events'
  },
  {
    title: 'USA Camps',
    detail: 'Next camp date TBC',
    icon: ShieldCheck,
    accent: 'green' as EventAccent,
    href: '#calendar'
  }
];

export const contentPages: ContentPage[] = [
  {
    slug: 'about-lit7s',
    title: 'London International Tournament',
    category: 'About LIT7s',
    summary:
      'The London International Tournament overview covering the LIT7s tournament, series, London 7s, camps and rugby sevens mission.',
    image: assetPath('assets/gallery/lit7s-gallery-match.jpg'),
    accent: 'green',
    quickFacts: [
      { label: 'Founded', value: '2012' },
      { label: 'Tournament', value: 'LIT7s London' },
      { label: 'Series', value: 'LIT Super Sevens' },
      { label: 'Camps', value: 'LIT Rugby Sevens Camp USA' }
    ],
    sections: sourcePageSections('About London International Tournament', `
London International 7s Tournament (LIT), founded in 2012, is dedicated to advancing rugby sevens by organizing premier tournaments, series, and training camps that unite players and fans worldwide.

We are proud to host LIT7s Tournament – UK’s largest rugby 7s tournament with 70+ teams, LIT7s Amateur Series – UK’s largest and only amateur series, LIT London 7s – UK’s premier and only international stadium sevens tournament, LIT Rugby Sevens Camp USA – premiere training camp, and we are excited to be joined by LIT’ Super Sevens Series – UK’s largest elite sevens competition.

Our mission is to deliver exceptional rugby sevens experiences and promote the sport’s growth and accessibility. By combining high-level competition with vibrant festival atmospheres, LIT7s aims to celebrate rugby culture and inspire participation across all levels.

2023 Winners

🏆 British Army, Men’s Open Cup Winners
🏆 Wild Dogs, Alpha Pack, Women’s Open Winners
🏆 British Army Development, Men’s Open Plate Winners
🏆 London Bears, Women’s Social Cup Winners
🏆 Wasps, Women’s Social Plate Winners
🏆 Phoenix 7s, Men’s Social Cup Winners
🏆 Camden Roosters, Men’s Social Plate Winners
    `),
    gallery: [
      {
        title: 'London International Tournament',
        category: 'About',
        image: assetPath('assets/gallery/lit7s-gallery-match.jpg'),
        caption: 'Rugby sevens tournament action from the LIT event platform.'
      },
      {
        title: 'LIT7s tournament crowd',
        category: 'Festival',
        image: assetPath('assets/gallery/lit7s-gallery-crowd.jpg'),
        caption: 'Tournament and festival atmosphere around the rugby.'
      }
    ],
    ctas: [
      { label: 'View Events', href: '#events', primary: true },
      { label: 'Tournament Information', href: links.lit7sTournamentInfo }
    ]
  },
  {
    slug: 'tournament-information',
    title: 'Tournament Information',
    category: 'London Tournament',
    summary:
      'The flagship LIT7s London guide for teams, spectators, divisions, entertainment and event-day expectations.',
    image: assetPath('assets/gallery/lit7s-tournament-action.jpg'),
    accent: 'green',
    quickFacts: [
      { label: 'Event', value: 'LIT7s London' },
      { label: 'Date', value: '18 July 2026' },
      { label: 'Venue', value: 'Wasps Rugby Club, West London' },
      { label: 'Format', value: "Men's and women's open/social rugby 7s" }
    ],
    sections: sourcePageSections('LIT7s 2026 events', `
LIT7s 

WE WELCOME YOU TO OUR NEXT EVENT! 

LIT7s Tournament | LIT Super 7s Series | LIT7s USA 

Apply for LIT7s USA Ambassador Program >

Register for Next Camp: LIT Rugby 7s Camp >

Register for 
LIT Super Sevens Series >

2026 LIT7S EVENTS 

LIT SUPER 7S SERIES – THE BIGGEST EUROPEAN 7s SERIES!5 TOURNAMENTS (MAY – JULY) – MEN’S & WOMEN’S 7S – ELITE, OPEN & SOCIALTeams can enter ONE tournament or all FIVE! The more you enter, the more points you will receive toward the Series (both for participating and winning). Winners will be announced after tournament 4 and presented with £500 prize money and win the title of “The Best [Open/Social] 7s in the UK”! More information about the elite competition can be found here. ____________________________________________________LIT 7S – THE UK’S BIGGEST RUGBY 7S TOURNAMENT!18TH JULY 2026– MEN’S & WOMEN’S 7S – ELITE, OPEN & SOCIALThe 14th annual LIT7s is the hottest sevens tournament in the UK featuring 70+ amateur and elite teams from all over the world. Held at WASPS Rugby Club in West London & features an all-day bar, party with live music, DJ, cheerleaders, food & much more 

Team Registration

Spectator Ticket 

Getting to Wasps 

Venue
Wasps Rugby Club in West London
Address:
Twyford Avenue Sports Ground, Twyford Ave, Acton, London W3 9QA
Google Maps >
Public transport
We recommend teams to be environmentally-friendly and where possible travel to the festival using public transport. However, please check that no train strikes will affect your travel on the day
The nearest train station to the festival is Acton Central. The nearest underground stations to the festival are Ealing Common or Acton Town. There are several buses that run by the grounds, so you can walk from the station or choose to catch one of these.
Timings
Final schedule and timings will be released next week, but we can confirm that the first matches will kick-off at 9:30 AM. 

ParkingParking is available but limited and must be purchased in advance. Cost is £10 per car and we have very limited spaces, so please carpool and buy your ticket ASAP if you require a space so you don’t miss out. Tickets can be purchased here. 

Buy Parking >

18 July 2026 

LIT 7s 

What to expect from UK’s hottest sevens tournament: Over 70+ amateur and elite teams for the best competition, excellent organization, major prizes. All day bar, live music, night party, cheerleaders, food and much more! 

2024 LIT7s Winners 

🏆 Shogun Rugby, Men’s Open Cup Winners🏆 Wild Dogs, Alpha Pack, Women’s Open Winners🏆 CNCF 7s, Men’s Open Plate Winners🏆 All the Gear, No Idea, Women’s Social Cup Winners🏆 Legion 7s, Women’s Social Plate Winners🏆 Surrey Exiles, Men’s Social Cup Winners🏆 OG 7s, Men’s Social Plate Winners 

LIT 7s Fun 

18 July 2026
    `),
    gallery: [
      {
        title: 'London match action',
        category: 'Tournament',
        image: assetPath('assets/gallery/lit7s-tournament-action.jpg'),
        caption: 'Tournament-day rugby 7s action from the LIT7s London event model.'
      },
      {
        title: 'Pitch-side festival',
        category: 'Atmosphere',
        image: assetPath('assets/gallery/lit7s-gallery-crowd.jpg'),
        caption: 'A large team and spectator footprint built around the rugby.'
      },
      {
        title: 'Finals energy',
        category: 'Rugby',
        image: assetPath('assets/gallery/lit7s-gallery-match.jpg'),
        caption: 'Competitive open and social rugby with silverware on the line.'
      }
    ],
    ctas: [
      { label: 'Enter Team', href: links.teamEntry, primary: true },
      { label: 'Spectator Tickets', href: links.spectatorTickets }
    ]
  },
  {
    slug: 'festival-information-2023',
    title: 'Festival Information 2023',
    category: 'London Tournament',
    summary:
      'Original festival information for the 2023 London International Rugby 7s Tournament at Wasps Rugby Club.',
    image: assetPath('assets/gallery/lit7s-gallery-party.jpg'),
    accent: 'green',
    quickFacts: [
      { label: 'Year', value: '2023' },
      { label: 'Anniversary', value: '11th year' },
      { label: 'Venue', value: 'Wasps Rugby Club' },
      { label: 'Teams', value: '50+ rugby teams' }
    ],
    sections: sourcePageSections('Festival information', `
London International Rugby 7s Tournament 2023 (“LIT 7s”) 

11th Year Anniversary!

50 + Rugby Teams | FRN Cheerleaders | DJ + Music! 

Find Rugby Now (FRN) is thrilled to be hosting its 11th annual rugby 7s tournament at the beautiful Wasps Rugby Club in West London.

This year’s tournament will welcome both social and competitive teams alike, welcoming over 50 men’s and women’s rugby 7s teams. Four competitions will be run on the day:

Men’s Open

Men’s Social

Women’s Open

Women’s Social

Along with the rugby, there is also plenty of entertainment for spectators, including the official FRN cheerleaders, a variety of musical entertainment, the Red Bull girls, Pimms & Lemonade, pitch-side bars + more!

ENJOY AWESOME ENTERTAINMENT 

LIT 7s will feature fancy dress themed after-party until 12AM, DJ & music, professional cheerleaders, entertainment for the kids and great prizes! You can also look forward to some awesome silverware, which will be handed out by well-known international players .

WATCH ELITE AND AMATEUR TEAMS BATTLE IT OUT

The festival will feature Open and Social divisions for both men’s and women’s rugby sevens, which will provide something for everyone – from seasoned professionals to social drinking teams!

ENTER A TEAM or BUY A SPECTATORS TICKET TODAY – EARLY BIRD OFFERS! 

Early bird offers now available for both spectator tickets ( only £11 !) and teams. Don’t miss out and get your spectator / team entry today!
    `),
    ctas: [
      { label: 'Current Tournament Information', href: links.lit7sTournamentInfo, primary: true },
      { label: 'Spectator Tickets', href: links.spectatorTickets }
    ]
  },
  {
    slug: 'schedule',
    title: 'Schedule',
    category: 'London Tournament',
    summary:
      'A practical event-day run sheet covering registration, briefings, kickoff, finals, presentations and the evening party.',
    image: assetPath('assets/hero-rugby.jpeg'),
    accent: 'green',
    quickFacts: [
      { label: 'Registration', value: '8:30 AM - 9:00 AM' },
      { label: 'Kickoff', value: '9:30 AM' },
      { label: 'Cup Finals', value: '6:30 PM' },
      { label: 'Party Ends', value: '11:30 PM' }
    ],
    sections: sourcePageSections('Schedule', `
Schedule 

8.30 – 9.00: Team Registration9.10: Captain’s Briefing 19.30: Tournament kicks off10.10: Captain’s Briefing 218.30: Cup Finals19.00: Presentations19.30: Fancy Dress Party21.00: Box Office closes23.30: Party ends 

19 July 2025
    `),
    ctas: [{ label: 'Spectator Tickets', href: links.spectatorTickets, primary: true }]
  },
  {
    slug: 'what-to-pack',
    title: 'What to Pack',
    category: 'London Tournament',
    summary: 'A simple packing guide for players, team managers and spectators coming to LIT7s London.',
    image: assetPath('assets/gallery/lit7s-gallery-team.jpg'),
    accent: 'green',
    sections: sourcePageSections('What to pack', `
What to Pack 

LIT 7s want you to have a great time! We have put together a short packing list for you so you know exactly what to bring with you to the Tournament:PlayersRugby KitGumshieldSnacks / Protein for between matchesT-shirt/Vest for between matchesShoes for showerTowelFancy Dress!Money for yummy food & drinksPhone Charger / Spare battery for long dayJumper for the eveningConfirmation email w/t tickets (only team managers!)SpectatorsFlip flopsFancy dress!Camera / PhonePhone Charger / Spare battery for long dayMoney for yummy food & drinksYour friends!Please don’t bring any alcoholic drinks into the premises – we have a ton of amazingly priced alcohol on sale throughout the event! 

19 July 2025
    `),
    ctas: [{ label: 'Spectator Tickets', href: links.spectatorTickets, primary: true }]
  },
  {
    slug: 'vip-tickets',
    title: 'VIP Tickets',
    category: 'London Tournament',
    summary:
      'A updated VIP ticket page for spectators who want a more comfortable base at LIT7s London.',
    image: assetPath('assets/gallery/lit7s-gallery-party.jpg'),
    accent: 'green',
    sections: sourcePageSections('VIP tickets', `
VIP Tickets
We have a limited number of VIP tickets on offer. Come rub shoulders with international rugby players and VIPs in our private VIP area, which includes lunch and drinks.
VIP Package – Day Only – £80.00
– Entry & all day access to Tournament– All day access to VIP area– Buffet Lunch– Drinks at Buffet Lunch– Drinks in VIP area until 5pm– Entry to nighttime fancy dress party until 12AM– LIT7s Goodie Bag
If you have any questions about VIP tickets, please email admin@lit7s.com for more information.

19 July 2025
    `),
    ctas: [{ label: 'Spectator Tickets', href: links.spectatorTickets, primary: true }]
  },
  {
    slug: 'sevens-competitions',
    title: 'Sevens Competitions',
    category: 'London Tournament',
    summary: 'The competition structure for open and social teams across men\'s and women\'s rugby 7s.',
    image: assetPath('assets/gallery/lit7s-gallery-match.jpg'),
    accent: 'green',
    sections: sourcePageSections('Sevens competitions', `
Sevens Competitions 

Men’s OpenThis competition carries the highest prize money and teams will include competitive sides from the UK and abroad. The entrants in this category will enjoy a good level of competition to challenge their rugby 7s abilities. We would expect this competition to consist of experienced rugby 7s sides that regularly compete on the 7s circuit. Prizes will be presented to the top two placed team.Men’s SocialThis men’s competition is for teams are taking part in LIT 7s primarily to enjoy the day out and play some enjoyable rugby 7’s with teammates and friends. Fancy dress and imaginative team strip are greatly encouraged in this competition. There is a trophy for the winners and players competing in this category shall be considered for the social player of the tournament prize. Prizes will be presented to the top two placed team.Women’s OpenThis competition is for women’s teams who want to experience competitive rugby. We would expect this competition to consist of experienced rugby 7s sides, invitational teams and also teams of experienced 15s players that have confidence playing in open field.Women’s SocialThis is for those Ladies teams who would like enjoy LIT7s, but have had very little experience playing rugby or rugby 7s. The best way to learn how to play 7s rugby is to play, so if you want more experience, sign up for this competition! Fancy dress and imaginative team strip are greatly encouraged. There is a trophy for the winners and players competing in this category can still be considered for the player of the tournament prize. Competition will be structured depending upon the number of teams entered. 

LIT 7s 

What to expect from UK’s hottest sevens tournament: Over 70+ amateur and elite teams for the best competition, excellent organization, major prizes. All day bar, live music, night party, cheerleaders, food and much more! 

19 July 2025
    `),
    ctas: [{ label: 'Enter Team', href: links.teamEntry, primary: true }]
  },
  {
    slug: 'team-registration',
    title: 'Team Registration',
    category: 'London Tournament',
    summary: 'Team entry, confirmation, tournament packs and arrival guidance for LIT7s London.',
    image: assetPath('assets/gallery/lit7s-gallery-crowd.jpg'),
    accent: 'green',
    quickFacts: [
      { label: 'Entry fee', value: 'GBP320' },
      { label: 'Squad', value: '15 players + 1 manager' },
      { label: 'Manager role', value: 'Player info, tickets and pack collection' }
    ],
    sections: sourcePageSections('Team registration', `
Team Registration 

Register your team here for LIT7s here.Registration Fees Entry Fee: £320 to enter team of 15 players and one manager.Registration – Once your team registration application and payment is received, your team manager will receive an email confirmation with all of the latest tournament information. The team manager will need to send us a completed list of the players’ information that will be competing in the Festival closer to the date of the event.On arrival at the venue – All team managers must visit the Registration area to collect your Tournament Pack, register the team and collect all player tickets. This pack will contain details of your team’s matches and start times and any last minute changes to the schedule.To avoid queuing at the event, please ensure that your team manager arrives early to register your team and collect your team’s tickets and player wristbands. 

LIT 7s 

What to expect from UK’s hottest sevens tournament: Over 60+ amateur and elite teams for the best competition, excellent organization, major prizes. All day bar, live music, night party, cheerleaders, food and much more! 

19 July 2025
    `),
    ctas: [{ label: 'Enter Team', href: links.teamEntry, primary: true }]
  },
  {
    slug: 'team-registration-interest',
    title: 'Registration of Interest',
    category: 'Team Registration',
    summary:
      'Historical registration-of-interest page text for teams that were not yet ready to pay for tournament entry.',
    image: assetPath('assets/gallery/lit7s-gallery-team.jpg'),
    accent: 'green',
    sections: sourcePageSections('Registration of interest', `
2019 LIT 7s

Registration of Interest

Team entry for the 7s and 10s ais £175 until 10 April and £195 thereafter.

This page is intended for those that would like to register their interest, but are not yet in a position to pay for tournament entry.

**Please note that your team place is not confirmed until payment is made**

Manager's/ Captain's Name: 
First 

Last 

Manager's / Captain's Email and Telephone: 

Team Name: 

Tournament: 
Men's 7s Women's 7s Men's 10's Mixed Touch 

Level: 
Social Competitive / Open Elite 

Any questions or concern: 

Submit Reset 

We will contact you as soon as we receive your form.

Please email sevens@findrugbynow.com if you have any queries.
    `),
    ctas: [
      { label: 'Current Team Entry', href: links.teamEntry, primary: true },
      { label: 'Team Registration Info', href: links.lit7sTeamRegistrationInfo }
    ]
  },
  {
    slug: 'prizes-and-awards',
    title: 'Prizes and Awards',
    category: 'London Tournament',
    summary: 'The awards structure for open winners, social winners, runners-up and players of the tournament.',
    image: assetPath('assets/gallery/lit7s-gallery-party.jpg'),
    accent: 'green',
    sections: sourcePageSections('Prizes and awards', `
Prizes and Awards 

7s Open WinnersThe men’s open competition* winners will receive a cash prize and medals for players.The women’s open competition* winners will receive a cash prize (depending on the amount of team entries) and medals for players. Both the men’s and women’s open runners-up will receive a small trophy and £100 cash prize.7s Social WinnersThe men’s social winners will receive a large trophy as well as a crate of beer.The women’s social winners will receive a large trophy as well as a crate of beer.Both the men’s and women’s runners-up will receive a small trophy as well as a crate of beerPlayer of the Tournament PrizesThere will be Player of the Tournament Prizes awarded for each competition:Men’s OpenMen’s SocialWomen’s OpenWomen’s Social 

19 July 2025
    `)
  },
  {
    slug: 'sevens-rules',
    title: 'Sevens Rules',
    category: 'Rules',
    summary: 'The open and social competition rules summary for LIT Super Sevens and LIT7s events.',
    image: assetPath('assets/hero-rugby.jpeg'),
    accent: 'green',
    quickFacts: [
      { label: 'Squad size', value: 'Up to 14 players' },
      { label: 'Match length', value: '7-minute halves' },
      { label: 'Substitutions', value: 'Unlimited rolling subs' },
      { label: 'Arrival', value: 'Pitch 5 minutes before kickoff' }
    ],
    sections: sourcePageSections('Open and social competition rules', `
Super Sevens Open & SocialCompetition Rules 

Updated: 29 April 2026

Summary

Teams can include up to 14 players.
Unlimited rolling substitutions will apply throughout all of the competitions.
7 minute halves will be played in all matches including finals.
Teams should report to the pitch 5 mins before the start of each match
The first team named in the schedule will kick off and the other team will choose the end of the pitch to receive. 

General Rules
These rules (the “Rules”), including their interpretation, are matters for the Disciplinary Committee. The Disciplinary Committee will comprise of the Tournament Director, Head Referee and Fixtures Manager (or respective nominated deputies on their behalf) and, when available, the Judiciary Officer. The Disciplinary Committee will arbitrate on all matters concerning the Rules of the Tournament. The Disciplinary Committee will be convened only in the event of an official complaint being registered with the Tournament Director. In the event of any matters arising that are not covered by the Rules, or ambiguity of these Rules, the Disciplinary Committee shall make a ruling after interpreting the Rules in the best interests of the game. Its decision shall be final, without appeal. 
Registration, Squad Size and Administrative Rules
1. A representative of each team must submit a Tournament Registration Form at least one hour before their first match. 
2. A maximum squad size for the tournament of 14 players is in place. For each game, all 14 players will be permitted to play, seven (7) starting the game and five (7) substitutes. 
3. During the pool stages, Social teams can borrow players from other teams within the Social competition only. During the knock-out stages, borrowing of players may only be done with permission from the Tournament Director or their appointed representative. 
4. Open teams cannot borrow players, except with consent from the Tournament Director or their appointed representative.
5. All teams should try and bring an alternative match shirt in case of a colour clash or be prepared to turn shirts inside out. The referee’s decision on what constitutes a clash is final.
6. In the Pool games 3 points will be awarded for a win and 2 points will be awarded for a draw and 1 point for a loss, 0 points will be awarded for a no show, abandonment or disqualification.
7. The final draw will be made available on the day of the competition.
8. All players must have adequate playing insurance through their team including travel insurance, if appropriate (standard RFU insurance is a minimum requirement).
9. The Organisers, their employees or their helpers cannot be held responsible for any loss, or damage, to any individual’s property or valuables. It is the responsibility of the Team Captain/Manager to make appropriate arrangements.
Playing Rules
1. Games will be played under World Rugby Laws variations for Sevens and any relevant RFU Law Variations for the 2026/27 and, from 1 July, 2026/27 seasons, including the Domestic Law Variation to reduce tackle height. 
2. Games will start on time. Any teams not present on the pitch five (5) minutes will be deemed as a no-show and points awarded accordingly. The game will not be played if the teams arrive after five (5) minutes to avoid delaying further matches. Alternatively, the team that has arrived on time agrees to play the remaining time of the match as a friendly with the no-show points still being allocated.
3. The first team named in the schedule will kick off and the other team will choose the end of the pitch to receive. In case of doubt, the referee’s decision will be final.
2. In case of a drawn match in the pool stages, no extra time will be played and the result at full time will stand. 
3. In the event of a knock-out stage match being drawn at the end of normal time, extra time will be played in accordance with World Rugby Laws, except no coin toss will take place and the team that kicked off first in the match will do so again from its initial starting end. There will be a 2-minute water break at the end of normal time. 
In the event that after two (2) five-minute periods of additional time (with no water break between the consecutive periods), neither team has scored, the winner of the game will be decided by the toss of a coin between the two respective team Captains. The receiving Captain from the last restart will call the coin toss.
4. In the event of a team being unable to continue to field 7 players during a game, other than through sending-off, then the game is abandoned and:
(a) If a pool game, then the team that caused the game to be abandoned and points awarded accordingly.(b) If a knock-out game, the other side goes through.
5. For a kick at goal after a try has been scored between the posts, where possible the kick will be made from behind in-goal so that the ball is more readily available for the restart of the game i.e. the ball is kicked towards the halfway line.
Match Officials and Substitutions
1. LIT Series will appoint suitably qualified referees to each match. 
2. Each team must provide a Touch Judge for each of their games, except where Assistant Referees and/or Fourth Officials are appointed by the Tournament. Teams’ Touch Judges must keep up with play and fulfill any duties as instructed by the match referee. They may be a substitute player, in which case, they must wear a shirt or other clothing to sufficiently differentiate them from their on-field teammates.
3. In accordance with World Rugby Laws, referees are the sole judges of fact and law during a match. Abuse of match officials by players, coaches, staff or team supporters will not be tolerated and may result in a team’s disqualification.
4. Unlimited rolling substitutions will apply throughout all of the competitions. Substitutions must be made with the permission of the referee at a time when the ball is dead (not during live play and, for the avoidance of doubt, not after a penalty kick has been awarded). 
5. All substitutes, coaches and support staff must stay within their designated technical area or, where one is not marked out, must stand next to the other team around the halfway line on the same side of the pitch.
Discipline
1. For persistent or deliberate fouls or other infringements, the Referee may issue a Yellow Card to dismiss a player to the Sin Bin for a period of two minutes. 
2. If a player receives two yellow cards in one game, the player will automatically be given a red card and will be referred to the Disciplinary Committee.3. If a player in a Tournament receives a yellow or red card they shall not be substituted for another player.
4. Should the Referee consider the infringement to be more serious, a player may be issued a Red Card; the player will be dismissed from the field of play and will take no further part in the game or any further games in the Tournament until the player attends a hearing held by the Disciplinary Committee. The Disciplinary Committee shall strive to meet promptly. Any hearing will be conducted in accordance with the Disciplinary Committee’s processes and all outcomes will be upheld during and after the Tournament. 
5. Any serious breach of discipline shall normally be reported to the player’s Home Union as per normal disciplinary procedures. 
6. Any disciplinary issues such as touch line or technical area breaches (e.g. swearing at match officials or unsportsman-like conduct), shall be dealt with severely and are likely to result in the deduction of one (1) or more LIT Series points from the team that committed the offence.
Series Points
Points for the final standings at each Tournament will be allocated to the LIT Series as follows:

Points Awarded (Place)

Competition Size

16 teams 

12 teams (or less)

Cup Winners 

20 (1st) 

20 (1st) 

Cup Finalists 

17 (2nd) 

17 (2nd) 

Cup Semi-Finalists x 2 

14 (3rd & 4th) 

14 (3rd & 4th) 

Plate Winners 

12 (5th) 

12 (5th) 

Plate Finalist 

10 (6th) 

10 (6th) 

Plate Semi-Finalists x 2 

7 (7th & 8th) 

7 (7th & 8th) 

1sr runners up

4 (9,10,11&12)

4 (9th & 10th)

2nd runners-up

2 (13,14,15&16th) 

2 (11th &12th)

In the event of two or more teams being equal on total Tournament points for the overall Open or Social Competition title, the highest placed team will be determined in the following order:

The points difference: Total Points Scored (across all 4 tournaments) minus Total Points Against (across all 4 tournaments). 
The team that has scored the highest points total in all matches (across all 4 tournaments). 
The team that scored the highest number of tries in all matches (across all 4 tournaments). 
The team that concedes the least number of tries in all matches (across all 4 tournaments). 
If the teams are still tied after all the above, the winner will be decided by the toss of a coin between the Managers of the concerned.

LIT SUPER 7s SERIES
    `)
  },
  {
    slug: 'lit7s-media',
    title: 'LIT7s Media',
    category: 'Media',
    summary: 'LIT7s videos, photo galleries, reviews and tournament atmosphere presented in the new media hub.',
    image: assetPath('assets/gallery/lit7s-gallery-match.jpg'),
    accent: 'green',
    quickFacts: [
      { label: 'Video library', value: '12 LIT7s videos' },
      { label: 'Photo library', value: 'Tournament teams, winners, food and entertainment' },
      { label: 'Reviews', value: 'Past event reviews from 2012, 2013, 2014, 2015, 2016 and 2019' }
    ],
    sections: sourcePageSections('LIT7s media', `
LIT7s Media 

We have been hosting LIT7s for 13 years, so we have plenty of reviews, photos and videos to share! Check out past media content below to see what is in store for you at this year’s LIT7s! 

Watch the 2024 Highlights Video 

Watch Official LIT7s Videos from past 11 years 

See photos from past LIT7s 

Read Reviews from past Tournaments 

Past LIT7s Videos 

Past LIT7s Videos

12 Videos

2023 Official Video 

0:52

2022 Official Video 

0:37

2021 Official Video 

3:00

2019 Official Video 

2:04

2019 Promo Video 

1:47

2018 Official Video 

2:59

2016 Official Video 

2:00

2015 Official Video 

4:02

2014 Official Video 

3:30

2013 Official Video 

3:39

2012 Official Video 

1:52

Title 

LIT7s Photos 

The best place to check our photos from past events is on our social media pages. Check out past tournament winners and participant teams as well as the variety of food and entertainment that we have had on offer over the years! 

Check out @LIT7s on Facebook 

We have endless amounts of photos on our Facebook page for the past 11 years all categorised into albums and sorted by year! 

Check out @LIT7s on Insta! 

We have some awesome photos and videos on Instagram from past tournaments! 

Past LIT7s Reviews 

2019 Review

2015 Review

2013 Review

2016 Review

2014 Review

2012 Review
    `),
    gallery: [
      {
        title: '2023 Official Video',
        category: 'Video',
        image: assetPath('assets/gallery/lit7s-video-2023.jpg'),
        caption: 'A featured LIT7s video in the media library.',
        href: links.lit7sVideoCollection
      },
      {
        title: '2022 Official Video',
        category: 'Video',
        image: assetPath('assets/gallery/lit7s-video-2022.jpg'),
        caption: 'Video content from recent tournament seasons in the LIT7s media library.',
        href: links.lit7sVideoCollection
      },
      {
        title: 'Past tournament teams',
        category: 'Photos',
        image: assetPath('assets/gallery/lit7s-gallery-team.jpg'),
        caption: 'Team and participant media from past LIT7s tournaments.'
      },
      {
        title: 'Food, music and entertainment',
        category: 'Photos',
        image: assetPath('assets/gallery/lit7s-gallery-party.jpg'),
        caption: 'Festival atmosphere alongside the rugby.'
      }
    ],
    ctas: [
      { label: 'Video Collection', href: links.lit7sVideoCollection, primary: true },
      { label: 'Tournament Photos', href: links.lit7sTournamentPhotos }
    ]
  },
  {
    slug: 'lit7s-video-collection',
    title: 'LIT7s Video Collection',
    category: 'Media',
    summary:
      'The LIT7s video library with tournament films, promos and year-by-year event atmosphere from 2012 through 2023.',
    image: assetPath('assets/gallery/lit7s-video-2023.jpg'),
    accent: 'green',
    quickFacts: [
      { label: 'Videos', value: '12 listed videos' },
      { label: 'Years', value: '2012-2023' },
      { label: 'Format', value: 'Official videos, promos and tournament edits' }
    ],
    sections: [
      {
        heading: 'Video list',
        items: [
          '2023 Official Video - 0:52',
          '2022 Official Video - 0:37',
          '2021 Official Video - 3:00',
          '2019 Official Video - 2:04',
          '2019 Promo Video - 1:47',
          '2018 Official Video - 2:59',
          '2016 Official Video - 2:00',
          '2015 Official Video - 2:04',
          '2014 Official Video - 3:30',
          '2013 Official Video - 3:39',
          '2012 Official Video - 1:52'
        ]
      },
      {
        heading: 'What the videos show',
        copy: [
          'The video library captures match action, team moments, crowd energy, food, entertainment and the end-of-day tournament atmosphere that defines LIT7s.'
        ]
      }
    ],
    gallery: [
      {
        title: '2023 video package',
        category: 'Video',
        image: assetPath('assets/gallery/lit7s-video-2023.jpg'),
        caption: 'Recent LIT7s video package and tournament-day visuals.'
      },
      {
        title: '2022 video package',
        category: 'Video',
        image: assetPath('assets/gallery/lit7s-video-2022.jpg'),
        caption: 'Short-form LIT7s event video from the 2022 tournament cycle.'
      }
    ],
    ctas: [
      { label: 'Media Packages', href: links.mediaPackages, primary: true },
      { label: 'Tournament Photos', href: links.lit7sTournamentPhotos }
    ]
  },
  {
    slug: 'lit7s-tournament-photos',
    title: 'LIT7s Tournament Photos',
    category: 'Media',
    summary:
      'LIT7s tournament photo packages covering teams, winners, match action, food, entertainment and spectator atmosphere.',
    image: assetPath('assets/gallery/lit7s-gallery-match.jpg'),
    accent: 'green',
    sections: [
      {
        heading: 'Photo categories',
        items: [
          'Tournament teams and participant photos',
          'Winners and trophy moments',
          'Match action and finals energy',
          'Food village and drinks areas',
          'Entertainment, music and party moments',
          'Spectator and sideline atmosphere'
        ]
      },
      {
        heading: 'How photos are used',
        copy: [
          'The tournament photo package supports teams, sponsors, spectators, press, social media and future event promotion.'
        ]
      }
    ],
    gallery: [
      {
        title: 'Match action',
        category: 'Photos',
        image: assetPath('assets/gallery/lit7s-gallery-match.jpg'),
        caption: 'Rugby 7s action from the London tournament format.'
      },
      {
        title: 'Team photos',
        category: 'Teams',
        image: assetPath('assets/gallery/lit7s-gallery-team.jpg'),
        caption: 'Team and participant media for players and clubs.'
      },
      {
        title: 'Party atmosphere',
        category: 'Festival',
        image: assetPath('assets/gallery/lit7s-gallery-party.jpg'),
        caption: 'Music, food, evening social and sideline energy.'
      }
    ],
    ctas: [
      { label: 'Media Packages', href: links.mediaPackages, primary: true },
      { label: 'Video Collection', href: links.lit7sVideoCollection }
    ]
  },
  {
    slug: 'super-sevens-bury-2024-gallery',
    title: 'Bury St Edmunds 2024 Gallery',
    category: 'Super Sevens Media',
    summary:
      'Round-three Super Sevens photo package from Bury St Edmunds with match-day images, teams and series atmosphere.',
    image: assetPath('assets/news/super-2024-farnham.jpg'),
    accent: 'green',
    sections: [
      {
        heading: 'Gallery package',
        copy: [
          'The Bury St Edmunds 2024 gallery sits inside the wider Super Sevens media library and gives teams and supporters a visual record of the round.'
        ],
        items: [
          'Round-three match-day photos',
          'Team and player moments',
          'Series atmosphere from the Bury St Edmunds stop',
          'Photography credited to Tim Anger on the original gallery listing'
        ]
      },
      {
        heading: 'Connected content',
        items: [
          'Bury St Edmunds 2024 livestream package',
          '2024 series storylines',
          'Super Sevens results and standings',
          'LIT Super Sevens Series event page'
        ]
      }
    ],
    gallery: [
      {
        title: 'Bury 2024 gallery',
        category: 'Photos',
        image: assetPath('assets/news/super-2024-farnham.jpg'),
        caption: 'Photo-led Super Sevens media from the 2024 series environment.',
        href: links.superSevensBury2024GalleryPage
      },
      {
        title: 'Series results',
        category: 'Results',
        image: assetPath('assets/news/super-2023-wrap.jpg'),
        caption: 'Results and standings context for recent Super Sevens seasons.',
        href: links.superSevensResultsPage
      }
    ],
    ctas: [
      { label: 'Media Packages', href: links.mediaPackages, primary: true },
      { label: 'Series Results', href: links.superSevensResultsPage }
    ]
  },
  {
    slug: 'super-sevens-bury-2024-livestream',
    title: 'Bury St Edmunds 2024 Livestream',
    category: 'Super Sevens Media',
    summary:
      'Round-three livestream package from Bury St Edmunds, with match coverage connected to the wider Super Sevens media library.',
    image: assetPath('assets/news/super-2023-finale.jpg'),
    accent: 'green',
    sections: [
      {
        heading: 'Livestream package',
        copy: [
          'The Bury St Edmunds livestream gives teams and supporters a match-footage destination for the 2024 series round.'
        ],
        items: [
          'Round-three match coverage',
          'NextGenXV livestream destination',
          'Useful for players, coaches, media and supporters reviewing the round',
          'Paired with the Bury St Edmunds gallery and Super Sevens standings'
        ]
      }
    ],
    gallery: [
      {
        title: 'Livestream package',
        category: 'Livestream',
        image: assetPath('assets/news/super-2023-finale.jpg'),
        caption: 'Match footage and commentary package for the Bury St Edmunds round.',
        href: links.superSevensBury2024LivestreamPage
      },
      {
        title: 'Bury gallery',
        category: 'Photos',
        image: assetPath('assets/news/super-2024-farnham.jpg'),
        caption: 'Photo package connected to the same Super Sevens round.',
        href: links.superSevensBury2024GalleryPage
      }
    ],
    ctas: [
      { label: 'Bury Gallery', href: links.superSevensBury2024GalleryPage, primary: true },
      { label: 'Media Packages', href: links.mediaPackages }
    ]
  },
  {
    slug: 'super-sevens-2023-media',
    title: '2023 Super Sevens Media',
    category: 'Super Sevens Media',
    summary:
      '2023 Super Sevens media and round coverage from Farnham, Newbury, Cobham, Bury St Edmunds and the series finale.',
    image: assetPath('assets/news/super-2023-cobham.jpeg'),
    accent: 'green',
    sections: [
      {
        heading: '2023 coverage',
        copy: [
          'The 2023 media package groups round stories, photos and season coverage so teams can follow the progression from the opener through the finale.'
        ],
        items: [
          '2023 series opener',
          '2023 round two coverage',
          'Cobham round coverage',
          'Dramatic finale coverage',
          'Season wrap-up and results context'
        ]
      },
      {
        heading: 'Round articles',
        cards: [
          {
            title: '2023 Season Wrap-up',
            copy: 'Season-wide results and storylines across the Super Sevens calendar.'
          },
          {
            title: '2023 Dramatic Finale',
            copy: 'Final round coverage and title-race context.'
          },
          {
            title: '2023 Cobham Round',
            copy: 'Mid-series match-day storylines from Cobham.'
          },
          {
            title: '2023 Series Opener',
            copy: 'Opening round coverage from the 2023 season.'
          }
        ]
      }
    ],
    gallery: [
      {
        title: 'Cobham 2023',
        category: 'Round Media',
        image: assetPath('assets/news/super-2023-cobham.jpeg'),
        caption: 'Mid-series match-day visuals and round coverage.',
        href: '#article/2023-cobham-round'
      },
      {
        title: '2023 finale',
        category: 'Round Media',
        image: assetPath('assets/news/super-2023-finale.jpg'),
        caption: 'Final round coverage and title-race storylines.',
        href: '#article/2023-dramatic-finale'
      },
      {
        title: '2023 wrap-up',
        category: 'Season Media',
        image: assetPath('assets/news/super-2023-wrap.jpg'),
        caption: 'Season-wide coverage, winners and standings context.',
        href: '#article/2023-season-wrap-up'
      }
    ],
    ctas: [
      { label: 'Series Results', href: links.superSevensResultsPage, primary: true },
      { label: 'News and Articles', href: links.newsPage }
    ]
  },
  {
    slug: 'super-sevens-finals-analysis',
    title: 'Super Sevens Finals Analysis',
    category: 'Super Sevens Media',
    summary:
      'Finals analysis themes, coaching notes and performance talking points from selected Super Sevens cup finals.',
    image: assetPath('assets/news/super-2023-wrap.jpg'),
    accent: 'green',
    quickFacts: [
      { label: 'Focus', value: 'Finals analysis and coaching themes' },
      { label: 'Use case', value: 'Players, coaches, selectors and media teams' },
      { label: 'Connected pages', value: 'Results, 2023 media and Bury livestream' }
    ],
    sections: [
      {
        heading: 'Finals analysis focus',
        copy: [
          'The finals analysis package turns selected Super Sevens cup-final clips into useful performance context for teams, coaches, spectators and media.',
          'Analysis, results and media packages cover both event discovery and detailed rugby performance.'
        ],
        items: [
          'Attacking shape and spacing in cup finals',
          'Restarts, kick pressure and first-contact moments',
          'Defensive resets and fatigue management late in tournament days',
          'Momentum swings between pool play, semifinals and finals',
          'Series standards that help open, social and elite teams understand the level'
        ]
      },
      {
        heading: 'How teams use it',
        cards: [
          {
            title: 'Players',
            copy: 'Use the analysis themes to understand what decides late-stage 7s matches: restarts, support lines, tackle outcomes and decision speed.'
          },
          {
            title: 'Coaches',
            copy: 'Pair the analysis notes with results and media pages when preparing teams for future Super Sevens and LIT7s tournaments.'
          },
          {
            title: 'Media',
            copy: 'Use the themes as context for recaps, social clips, preview stories and sponsor-facing tournament narratives.'
          }
        ]
      }
    ],
    gallery: [
      {
        title: 'Series results',
        category: 'Results',
        image: assetPath('assets/news/super-2023-wrap.jpg'),
        caption: 'Year-by-year standings and winners context for analysis clips.',
        href: links.superSevensResultsPage
      },
      {
        title: '2023 media',
        category: 'Round Media',
        image: assetPath('assets/news/super-2023-cobham.jpeg'),
        caption: 'Round reviews, photos and season media connected to the analysis themes.',
        href: links.superSevens2023MediaPage
      },
      {
        title: 'Bury livestream',
        category: 'Livestream',
        image: assetPath('assets/news/super-2023-finale.jpg'),
        caption: 'Livestream package for match-footage context and round review.',
        href: links.superSevensBury2024LivestreamPage
      }
    ],
    ctas: [
      { label: 'Series Results', href: links.superSevensResultsPage, primary: true },
      { label: 'Media Packages', href: links.mediaPackages }
    ]
  },
  {
    slug: 'food-and-drink',
    title: 'Food and Drink',
    category: 'Festival',
    summary:
      'The food, drinks and pitch-side refreshment guide for spectators, players and team guests at LIT7s London.',
    image: assetPath('assets/imported/lit-food-market.jpg'),
    accent: 'green',
    quickFacts: [
      { label: 'Food styles', value: 'BBQ, falafel, Mexican and crepes' },
      { label: 'Dietary options', value: 'Meat, vegetarian, vegan and pescatarian choices' },
      { label: 'Drinks', value: 'Beer, Pimms, lemonade and soft drinks' }
    ],
    sections: sourcePageSections('Food and drinks', `
We have a variety of tasty food stalls on offer for everyone’s needs. BBQ, Falafel, Mexican, Crepes – whatever your dietary preference, we will have something for you – whether you are vegan, vegetarian, pescatarian or a meat eater!

Expect a variety of flavours and options ranging from hot food to give you well needed sustenance to keep you going throughout the tournament to ice cream to keep you cool on the hot summer day.
The food will be complemented with some well-needed drink options to keep you cool on a hot day. Whether you fancy a pint of beer of some posh Pimms and Lemonade, we’ve got you covered!
Email sevens@findrugbynow.com if you have any questions.
    `),
    gallery: [
      {
        title: 'BBQ and hot food',
        category: 'Food',
        image: assetPath('assets/imported/lit-food-bbq.jpg'),
        caption: 'Hot food options for teams and spectators across the event day.'
      },
      {
        title: 'Food village',
        category: 'Food',
        image: assetPath('assets/imported/lit-food-market.jpg'),
        caption: 'Festival food setup built around a long rugby 7s day.'
      },
      {
        title: 'Pitch-side drinks',
        category: 'Drinks',
        image: assetPath('assets/imported/lit-food-drinks.jpg'),
        caption: 'Bars and summer drinks support the sideline atmosphere.'
      }
    ],
    ctas: [{ label: 'Spectator Tickets', href: links.spectatorTickets, primary: true }]
  },
  {
    slug: 'entertainment',
    title: 'Entertainment',
    category: 'Festival',
    summary:
      'Music, performers, party moments, family entertainment and the festival feel around LIT7s London.',
    image: assetPath('assets/imported/lit-entertainment-dancers.jpg'),
    accent: 'green',
    sections: sourcePageSections('Entertainment', `
There will be plenty of entertainment on the day to keep both the kids and adults entertained with free activities and performances throughout the Festival. Previous enteratainment has included:

FRN Cheerleaders
Brazilian Drum Band
Face Painting
Free Red Bull from the Red Bull Wings Team
DJ Mista Mojo
Narni Shakers dancers
Carribean Music
Professional Photographers
Protein Samples
+ Much more!

Did we mention that all of this is included in the price of your ticket?
    `),
    gallery: [
      {
        title: 'Narni Shakers',
        category: 'Performance',
        image: assetPath('assets/imported/lit-entertainment-dancers.jpg'),
        caption: 'Dance and fire performance energy around the festival site.'
      },
      {
        title: 'Crowd atmosphere',
        category: 'Festival',
        image: assetPath('assets/imported/lit-entertainment-crowd.jpg'),
        caption: 'Music, sideline activity and team celebrations after the rugby.'
      },
      {
        title: 'Live band moments',
        category: 'Music',
        image: assetPath('assets/imported/lit-entertainment-band.jpg'),
        caption: 'Live entertainment keeps the tournament moving between matches.'
      }
    ],
    ctas: [{ label: 'Spectator Tickets', href: links.spectatorTickets, primary: true }]
  },
  {
    slug: 'fancy-dress',
    title: 'Fancy Dress',
    category: 'Festival',
    summary: 'Fancy dress theme information for the LIT7s festival and party atmosphere.',
    image: assetPath('assets/gallery/lit7s-gallery-party.jpg'),
    accent: 'green',
    sections: sourcePageSections('Fancy dress', `
The 2024 Fancy Dress theme is HEROES – in honour of our charity partner, Rugby for Heroes, whose invitational team will be representing Fiji in the men’s competition. The theme can be interpreted broadly – come as a superhero, a fire fighter, a soldier, a doctor or whomever you think is a HERO – there are so many possibilities!
    `),
    gallery: [
      {
        title: 'Party atmosphere',
        category: 'Festival',
        image: assetPath('assets/gallery/lit7s-gallery-party.jpg'),
        caption: 'Fancy dress and the evening party are part of the LIT7s festival identity.'
      }
    ],
    ctas: [{ label: 'Spectator Tickets', href: links.spectatorTickets, primary: true }]
  },
  {
    slug: 'narni-shakers',
    title: 'The Narni Shakers',
    category: 'Festival',
    summary: 'Narni Shakers performance information for the London rugby 7s festival entertainment package.',
    image: assetPath('assets/imported/lit-entertainment-dancers.jpg'),
    accent: 'green',
    sections: sourcePageSections('The Narni Shakers', `
We are thrilled to welcome the Narni Shakers to the London Rugby 7s Festival for the fifth year in a row!

DJ Charlotte Devaney’s performance will be complemented by The Narni Shakers DJ dance show – an all girl show that has travelled around the world performing at the hottest night clubs and events!

The beautiful ladies will be performing choreographed routines with a FIRE SHOW to delight the crowds whilst interacting with the DJ.

We loved their performance last year – their dancing is not to be missed!

Check out their website here.
    `),
    gallery: [
      {
        title: 'Narni Shakers',
        category: 'Performance',
        image: assetPath('assets/imported/lit-entertainment-dancers.jpg'),
        caption: 'Dance and fire performance energy around the festival site.'
      }
    ],
    ctas: [{ label: 'Entertainment', href: links.entertainment, primary: true }]
  },
  {
    slug: 'touch-competition',
    title: 'Touch Competition',
    category: 'Tournament',
    summary: 'Mixed touch rugby competition information for LIT7s festival participation.',
    image: assetPath('assets/gallery/lit7s-gallery-team.jpg'),
    accent: 'green',
    sections: sourcePageSections('Touch competition', `
FRN is thrilled to welcome mixed touch rugby teams to the Festival for the fourth year in a row!

The aim of the day is to provide for a competitive level of competition for mixed touch rugby teams and to also increase participation in the sport. Touch Rugby is a fast moving, minimal contact evasive game played by both men and women. The game is simple to learn and lots of fun – with no need to worry about getting hurt, making it suitable for mixed teams and people of varying abilities and experience.

Matches will be 6-a-side with 6 Substitutes.
Two women must be playing on the pitch at any given time.
FIT playing rules will apply with any exceptions to be confirmed before the tournament.

All players in the squad need to be 17 yrs old or over on the day of the event. Entry fee includes tickets to the days festivities and entertainment.
    `),
    gallery: [
      {
        title: 'Team photos',
        category: 'Teams',
        image: assetPath('assets/gallery/lit7s-gallery-team.jpg'),
        caption: 'Touch rugby sits alongside the wider festival participation model.'
      }
    ],
    ctas: [{ label: 'Enter Team', href: links.teamEntry, primary: true }]
  },
  {
    slug: 'facebook-groups',
    title: 'Facebook Groups',
    category: 'Community',
    summary:
      'Social community links and original group copy for updates, photos, videos, competitions and rugby news.',
    image: assetPath('assets/gallery/lit7s-gallery-crowd.jpg'),
    accent: 'green',
    sections: sourcePageSections('Facebook groups', `
Join our FRN 7s Facebook Group to stay up to date with all of the latest updates on the festival here: https://www.facebook.com/LIT7s .

Check out photos and videos from last year’s tournament, see the latest competitions, interact with other players and spectators and win free prizes!

There will also be an opportunity to snag discount kit from our kit sponsors as well as other prize and discounts.

You can also join our other FB pages if you want to keep up with our other events and interesting rugby news:

Main Page: https://www.facebook.com/findrugbynow 

Touch Page: https://www.facebook.com/frntouchrugby
    `),
    ctas: [
      { label: 'LIT7s Facebook', href: links.facebookLit7s, primary: true },
      { label: 'Instagram', href: links.instagram }
    ]
  },
  {
    slug: 'partners',
    title: 'Partners and Sponsors',
    category: 'Partners',
    summary:
      'Partnership, sponsorship, trading and advertising opportunities across LIT7s London, Super Sevens and LIT7s USA.',
    image: assetPath('assets/imported/lit-partnership.jpg'),
    accent: 'green',
    sections: sourcePageSections('Sponsor and partner opportunities', `
Are you interested in working with us?
LIT 7s would love to partner with companies that share our vision.
If you are interested in becoming a partner or sponsor of LIT7s, trading or advertising at the festival, we have a variety of packages and sponsorship opportunities on offer.
We are always looking for good people to work with that can add value to our event. Please email us at admin@lit7s.com for more information.
    `),
    gallery: [
      {
        title: 'SportsBallShop',
        category: 'Partner',
        image: assetPath('assets/imported/sportsballshop-logo.png'),
        caption: 'Match ball partner and equipment offer for rugby players.'
      },
      {
        title: 'Wasps FC',
        category: 'Venue',
        image: assetPath('assets/imported/partner-wasps.png'),
        caption: 'London tournament venue partner for the Wasps FC event base.'
      },
      {
        title: 'Grenada Rugby',
        category: 'Rugby',
        image: assetPath('assets/imported/partner-grenada.png'),
        caption: 'International rugby relationships remain part of the LIT7s network.'
      }
    ],
    ctas: [{ label: 'Partner With LIT7s', href: links.contact, primary: true }]
  },
  {
    slug: 'opportunities',
    title: 'Jobs, Volunteers and Ambassadors',
    category: 'Opportunities',
    summary:
      'Ways to support LIT7s through event planning, marketing, volunteering, ambassador work and tournament-day delivery.',
    image: assetPath('assets/imported/lit-opportunities.jpg'),
    accent: 'green',
    sections: sourcePageSections('Opportunities', `
Marketing, Event Planning and PR Internship Opportunity

We are looking for interns to join our dynamic event planning team to help us put together our best Festival to date!
Candidates will need to be able to demonstrate enthusiasm and interest in rugby as well as some previous work experience (although this does not have to be in event planning).
Candidates will also need to be able to commit at least 1 day per week to the job.
Please note that at this time the internship is unpaid, however it will include many benefits and would be extremely advantageous to anyone looking to gain experience within the events and festival industry.
If you are interested in applying, please email your CV and a cover letter to admin@lit7s.com.

Volunteers
Would you like a free ticket to the event for you and your friends? If so, we have a limited amount of places for on-the-day volunteers. Benefits will include free entry, stash, access to VIP area, free lunch + drinks.
If you are interested in applying, please email us on admin@lit7s.com.
    `),
    gallery: [
      {
        title: 'Event operations',
        category: 'Opportunities',
        image: assetPath('assets/imported/lit-opportunities.jpg'),
        caption: 'Behind-the-scenes delivery work around a rugby 7s festival.'
      },
      {
        title: 'Volunteers',
        category: 'Team',
        image: assetPath('assets/imported/lit-volunteers.jpg'),
        caption: 'Volunteers and event teams help run the match-day experience.'
      }
    ],
    ctas: [
      { label: 'Email LIT7s', href: links.contact, primary: true },
      { label: 'Ambassador Application', href: links.ambassadorApplication }
    ]
  },
  {
    slug: 'news',
    title: 'News and Articles',
    category: 'News',
    summary:
      'LIT7s and Super Sevens articles, round reviews, partner news, rugby sevens guides and tournament announcements.',
    image: assetPath('assets/news/super-2025-kickoff.avif'),
    accent: 'green',
    sections: [
      {
        heading: 'All stories',
        cards: articlePages.map((article) => ({
          title: article.title,
          copy: `${article.date} - ${article.summary}`,
          items: [article.category]
        }))
      },
      {
        heading: 'Coverage areas',
        items: [
          'LIT7s London and London International Tournament updates',
          'LIT Super Sevens Series announcements and round reviews',
          'USA camps and Florida tournament information',
          'Partner news, rugby sevens guides and media packages'
        ]
      }
    ],
    gallery: articlePages.map((article) => ({
      title: article.title,
      category: article.category,
      image: article.image,
      caption: article.summary,
      href: `#article/${article.slug}`
    })),
    ctas: [{ label: 'View Events', href: '#events', primary: true }]
  },
  {
    slug: 'media-packages',
    title: 'Media Packages and Galleries',
    category: 'Media',
    summary:
      'Video, photo, livestream and gallery packages across LIT7s London, Super Sevens, Florida and USA camps.',
    image: assetPath('assets/gallery/lit7s-video-2023.jpg'),
    accent: 'green',
    sections: [
      {
        heading: 'What is included',
        items: [
          'LIT7s video library from 2012 through 2023',
          'London tournament photo categories including teams, winners, food and entertainment',
          'Super Sevens round galleries and livestream packages',
          'USA camp training and group media',
          'Florida tournament venue and event visuals'
        ]
      }
    ],
    gallery: mediaPackages,
    ctas: [
      { label: 'Video Collection', href: links.lit7sVideoCollection, primary: true },
      { label: 'Tournament Photos', href: links.lit7sTournamentPhotos }
    ]
  },
  {
    slug: 'rugby-sevens-guide',
    title: 'Beginner’s Guide to Rugby Sevens',
    category: 'Rugby 7s Guide',
    summary:
      'A spectator-friendly rugby sevens guide covering players, match length, scoring, restarts, cards and tactical cues.',
    image: assetPath('assets/imported/rugby-sevens-guide-rules.avif'),
    accent: 'green',
    quickFacts: [
      { label: 'Players', value: '7 per side' },
      { label: 'Match length', value: '7-minute halves' },
      { label: 'Try', value: '5 points' },
      { label: 'Conversion', value: '2 points' }
    ],
    sections: articlePages.find((article) => article.slug === 'a-beginners-guide-to-watching-rugby-sevens')?.sections ?? [],
    gallery: [
      {
        title: 'Rugby sevens guide',
        category: 'Guide',
        image: assetPath('assets/imported/rugby-sevens-guide.avif'),
        caption: 'A spectator guide for following the fastest version of rugby.'
      },
      {
        title: 'Rules summary',
        category: 'Guide',
        image: assetPath('assets/imported/rugby-sevens-guide-rules.avif'),
        caption: 'Key rules and tactical cues for new rugby sevens fans.'
      }
    ],
    ctas: [
      { label: 'Read Full Article', href: links.articleRugbySevensGuide, primary: true },
      { label: 'Sevens Rules', href: links.lit7sRules }
    ]
  },
  {
    slug: 'match-ball-partner',
    title: 'Match Ball Partner',
    category: 'Partner News',
    summary:
      'SportsBallShop.co.uk match ball partner information, rugby ball offer and LIT7s partner placement.',
    image: assetPath('assets/imported/sportsballshop-logo.png'),
    accent: 'green',
    sections: articlePages.find((article) => article.slug === 'sportsballshop-match-ball-partner')?.sections ?? [],
    gallery: [
      {
        title: 'SportsBallShop partner',
        category: 'Partner',
        image: assetPath('assets/imported/sportsballshop-logo.png'),
        caption: 'Match ball and equipment partner for LIT7s tournament activity.'
      }
    ],
    ctas: [
      { label: 'Read Partner Story', href: links.articleSportsBallShop, primary: true },
      { label: 'Partner With LIT7s', href: links.partnersPage }
    ]
  },
  {
    slug: 'london-7s-2024',
    title: 'London 7s Stadium Event',
    category: 'London 7s',
    summary:
      'The 25 May 2024 AFC Wimbledon stadium event with elite invitational rugby, fans, food, fancy dress and live entertainment.',
    image: assetPath('assets/imported/lit-london-action-2.jpg'),
    accent: 'green',
    quickFacts: [
      { label: 'Date', value: '25 May 2024' },
      { label: 'Venue', value: 'AFC Wimbledon' },
      { label: 'Teams', value: '8 men and 4 women elite teams' },
      { label: 'Fans', value: 'Up to 9,000 spectators' }
    ],
    sections: sourcePageSections('London 7s', `
LONDON 7s 

THANK YOU ALL FOR AN AMAZING EVENT! 

12 COUNTRIES | 9,000 FANS | 8 MEN'S & 4 WOMEN'S TEAMS Representing GB, NZ, Fiji, USA, Ireland, Jamaica + more! 

LIVE YouTube Broadcast >

Or: RugbyPass, EuroVision, Facebook Live (soon) 

Tournament Schedule >

Getting here >

Buy your ticket! 

General Admission 

Assigned Stadium Seating 

£ 
20+ 

Reserved seating 

Access to fan zone 

Food market 

Afterparty with DJ Haskell 

Buy your ticket 

Family Area

Family Area 

Bring the kids 

£ 
20+ 

£15 Child 

All General Admission + 

Family Friendly Area 

Discount for kids 

Buy your ticket 

Party Stand 

18+ fun | Limited Sale 

£35 
£ 
20 

Unreserved seating 

18+ party atmosphere 

Support your team 

Buy your ticket 

SALE 

VIP 

Comfort & Views 

£ 
99 

All General Admission Plus + 

Premium location & views 

Plush seating 

Coffee and Tea Service 

Concierge Service 

Buy your ticket 

25 May 2024, Bank Holiday SaturdayAFC Wimbledon Stadium, LondonGET YOUR TICKET >> 

FANCY DRESS THEME 

The 2024 Fancy Dress theme is HEROES – in honour of our charity partner, Rugby for Heroes, whose invitational team will be representing Fiji in the men’s competition. The theme can be interpreted broadly – come as a superhero, a fire fighter, a soldier, a doctor or whomever you think is a HERO – there are so many possibilities! 

AFTER PARTY with JAMES HASKELL! 

The event will include amazing entertainment including live dance performances, headline DJs and special guests throughout the day.All tickets will include entry into the after party on site which will include live music from DJ James Haskell! 

PARTY STAND 

For those that are 18+ and looking for a crazy fun day out with their friends, tickets can be purchased in the Party Stand. Get your fancy dress on and party the day away watching some awesome rugby, meeting new friends and enjoying all the food and drinks options on offer. 

Make sure to book the South Stand for a good time. Buy a ticket > 

FAMILY AREA 

For those looking for a family day out, tickets can be purchased in the Family Friendly Zone.There will also be a Kid-Zone with activities for young ones to enjoy! Make sure to book Blocks in West Stand 101 to 105, which are the designated family area. 

LIVE DANCE PERFORMANCES FROM IMD LEGION 

We are thrilled to announce that fans will be entertained on the day with live dance performances from one of the World’s hottest dance groups – IMD Legion, who featured on Britain’s Got Talent on several occasions! Check out their awesome audition from BGT here! 

FOOD OPTIONS 

A variety of food and drink options at the Stadium including delicious food trucks and over 10 bars conveniently located at every step. The food court will include:Dough Shack (Pizza), Mypie (Pies and Sausage Rolls), La Posta (Argentinian steak sandwiches), Ding Ding (Chinese duck wraps), Naked Chips (Chips), Greek Gyros and Souvlaki, Hot Dogs & pies (concession stands), Nopalito (Mexican wraps), Boutique coffee, and more. 

ABOUT LONDON 7s 

On 25 May 2024, 12 rugby sevens teams from all over the world including GB, Fiji, USA, Ireland, Jamaica and Uganda will battle the best elite teams in the world at the first ever LIT7s London 7s at AFC Wimbledon Stadium in front of 9,000 spectators.
This will be the ONLY opportunity to watch international-calibre men’s and women’s sevens teams competing in a stadium event in the UK this year. The event will include amazing entertainment including live dance performances, headline DJs and special guests throughout the day. 
Get ready for a unique all-day event including rugby 7s stars like Tom Mitchell and Rocky Clark and influencers including Rugby with Amy and Victoria Rush who will be interacting with spectators and teams on the day for fun exclusive interviews. 

25 May 2024, Bank Holiday SaturdayAFC Wimbledon Stadium, LondonGET YOUR TICKET >> 

Getting to Wimbledon 

Getting to the ground
Cherry Red Records Stadium (AFC Wimbledon)Plough LaneLondonSW17 0NR
Parking
There are limited parking options available around the ground. Where possible, supporters are advised to travel by public transport as parking spaces cannot be guaranteed.
The Club has 20 blue badge parking spaces for home fans and 8 for away fans available on a matchday. These spaces are just off site and can be booked by emailing dlo@afcwimbledon.ltd.uk. There will be a drop off/pick up zone outside the main stand which has a waiting area while waiting for a carer/PA to park and return. 

Public transportThe stadium is well served by public transport links, with Earlsfield Station (trains to Waterloo and the South West), Haydons Road (Thameslink and Southern trains to the South Coast, Central London and Hertfordshire) and Tooting Broadway (Tube Northern Line) all within walking distance.A number of bus services run along Garratt Lane between Earlsfield and Tooting Broadway, while the 493 bus runs from Wimbledon Station (Tube District Line, Tram, South Western Railway and Thameslink) directly outside the Cherry Red Records Stadium.Below is a map of all TFL links to the Cherry Red Records Stadium. 

Frequently Asked Questions 

What is LIT7s London 7s?Eery year London plays host to one of the most thrilling rugby tournaments in the world. On May 25th get ready for the ultimate rugby spectacle at London 7s, the best and only international stadium sevens tournament in the UK in 2024! 12 TEAMS & 9,000 FANS at Wimbledon Stadium.What teams are taking part?We have 12 international and elite teams taking part in the event – 8 men’s and 4 women’s. Check out the Teams section above for more information. We have teams from Fiji, USA, Ireland, Great Britain, Uganda, Jamaica, Africa and United Kingdom.How much are tickets?Tickets start from £25 for adults and £15 for kids on Ticketmaster.co.uk. Make sure you get yours quick as prices will be increasing as we approach the event.Is this a 1 day or 2 day event?This is a one day event – on Saturday, 25 May – Bank Holiday Weekend.Is this the same event that used to take place at Twickenham?No, unfortunately London is no longer a stop on the new SNVS Series. However, we could not stand by and watch international rugby 7s disappear from the UK.The LIT7s London 7s has the same awesome elements that Twickenham 7s had to offer…fantastic international rugby, fancy dress, live DJs, Entertainment + lots of fun!This is the only opportunity to watch international 7s in a stadium in the UK in 2024.Is there a party stand or a family stand?Absolutely. For those looking for a wild day out with their friends, tickets can be purchased in the Party Stands. Get your fancy dress on and party the day away dancing to some awesome DJs. The after party will be DJed by none other than James Haskell!For those looking for a family day out, tickets can be purchased in the Family Friendly Zone and there will be a Kid-Zone with activities for young ones to enjoy! Blocks in West Stand 101 to 105 are the family area.Do I need to purchase tickets to the after partyNo, as part of your ticket to LIT7s London 7s you will have access to the after party on site at the stadium with DJ James Haskell.What is the fancy dress theme?The fancy dress theme is HEROES, in honour of our charity partner Help for Heroes.Are you associated with a charity?Absolutely, our partner charity is Rugby for Heroes. Their invitational side will be representing Fiji in the tournament.Can we park at the stadium?Check out the How to Get here and Parking sections below. Please take public transport unless you require car transport for disability reasons. There is no stadium parking. 

25 May 2024, Bank Holiday SaturdayAFC Wimbledon Stadium, LondonGET YOUR TICKET >>
    `),
    gallery: [
      {
        title: 'Stadium rugby',
        category: 'London 7s',
        image: assetPath('assets/imported/lit-london-action-1.jpg'),
        caption: 'Elite rugby 7s in the AFC Wimbledon stadium setting.'
      },
      {
        title: 'Fan experience',
        category: 'London 7s',
        image: assetPath('assets/imported/lit-london-action-2.jpg'),
        caption: 'Spectator and event-day atmosphere around the stadium programme.'
      },
      {
        title: 'Match-day action',
        category: 'London 7s',
        image: assetPath('assets/imported/lit-london-action-3.jpg'),
        caption: 'Elite invitational rugby with a festival event structure.'
      }
    ],
    ctas: [{ label: 'LIT7s London 2026', href: '#event/lit7s-london', primary: true }]
  },
  {
    slug: 'lit7s-london-7s-preview-2024',
    title: 'LIT7s London 7s Preview 2024',
    category: 'London 7s',
    summary:
      'The 25 May 2024 AFC Wimbledon invitation preview with team package, tournament schedule and event background.',
    image: assetPath('assets/imported/lit-london-action-2.jpg'),
    accent: 'green',
    quickFacts: [
      { label: 'Date', value: '25 May 2024' },
      { label: 'Venue', value: 'AFC Wimbledon, South West London' },
      { label: 'Tournament', value: '8 men’s and 4 women’s teams' },
      { label: 'Prize fund', value: 'GBP10,000' }
    ],
    sections: sourcePageSections('AFC Wimbledon preview', `
BY SPECIAL INVITATION – NOT OPEN FOR ENTRY TO GENERAL PUBLIC 

SUMMARY: The innaugural LIT7s London 7s will be taking place on Saturday, 25 May 2024 at AFC Wimbledon in South West London. This is a Bank Holiday Weekend in the UK and we are hoping to sell out the stadium with over 9,000 spectators and entertain fans worldwide with a live livestream and broadcast of the event. We would like to invite your team to take part in this exclusive event.

DETAILS: 
DATE: 25 May 2024 
VENUE: AFC Wimbledon, South West London
TOURNAMENT: 1 day event – 8 men’s and 4 women’s teams
ATENDANCE: 9,000 spectators
PRIZES: £10,000 prize fund (£4k for men’s & women’s winners, £1k for runner’s up)
COST: £600

WHAT IS INCLUDED: 
– Reception for all teams on Friday, 24 May (confirmed)
– Catered buffet lunch for 13 players + 3 staff on tournament day (£25pp)(confirmed)
– Dinner vouchers for 13 player + 3 staff on tournament day (£15-20pp)( TBC )
– Transport to Venue for 16 persons per team on 25 May (buses or other transport)
– Use of local gym on Friday & Saturday ( TBC )
– Assistance with logistic planning like Airport transfers
– If requested, assigned Tournament Liaison to assist you throughout tournament ( TBC )
– Physio care on the day of the tournament

SCHEDULE (TIMINGS TBC): 
Friday, 24 May: 
5:00pm: Team Reception at AFC Wimbledon & Team Presentations + Songs
5:30pm: Captain’s Photos
5:30pm: Manager’s/Coaches Meeting
6:00pm: Manager’s/Coaches Stadium Walk Through

Saturday, 25 May: 
8:00am: Stadium opens for teams
9:00am: Stadium opens for spectators
9:30am: Tournament Kicks Off
7:30pm: Tournament ends
After: Tournament After Party

Background: 
Last year the HSBC 7s Series London 7s welcomed 76,000 spectators. This event is no longer happening in London. There is a huge demand for international standard rugby 7s in this city and we are really excited to be able to fill this void this year with a fun experience for fans and a high level competition for teams that showcases the best of the world’s rugby 7s.

LIT7s

We have been hosting LIT7s (a rugby 7s tournament featuring 70 teams from around the world) for 12 years in London (check out @LIT7s on Instagram for more info) and will be hosting the LIT7s Series, an amateur rugby 7s series in the UK this year, so we have a huge amount of experience hosting rugby 7s tournaments. We are confident that we will give your team an amazing experience and a fantastic standard of rugby competition.

Any questions? Please contact ellaine@lit7s.com .
    `),
    gallery: [
      {
        title: 'AFC Wimbledon match action',
        category: 'London 7s',
        image: assetPath('assets/imported/lit-london-action-2.jpg'),
        caption: 'AFC Wimbledon stadium rugby sevens action.'
      },
      {
        title: 'London 7s atmosphere',
        category: 'London 7s',
        image: assetPath('assets/imported/lit-london-action-3.jpg'),
        caption: 'The London 7s stadium event environment for teams and fans.'
      }
    ],
    ctas: [
      { label: 'London 7s Stadium Event', href: links.london7s2024, primary: true },
      { label: 'LIT7s London 2026', href: '#event/lit7s-london' }
    ]
  },
  {
    slug: 'lit-super-sevens-series',
    title: 'LIT Super Sevens Series',
    category: 'Series',
    summary:
      'Europe’s largest rugby 7s series, combining elite, open and social men’s and women’s competitions across the UK.',
    image: assetPath('assets/news/super-2025-announced.jpg'),
    accent: 'green',
    quickFacts: [
      { label: '2026 dates', value: '9 May - 18 July 2026' },
      { label: 'UK events', value: '5 tournament dates' },
      { label: 'Elite teams', value: '10 men and 8 women listed for 2026' },
      { label: 'Format', value: 'Elite, open and social rugby 7s' }
    ],
    sections: [
      {
        heading: 'Series overview',
        copy: [
          'The LIT Super Sevens Series brings elite, open and social rugby 7s into one UK summer calendar, with LIT7s London as the series finale.',
          'The series combines the long-running LIT7s tournament platform with the Super Sevens competition pathway to create a larger stage for teams, spectators, partners and media.'
        ],
        items: [
          'Elite competition entry is invitation-only',
          'Open and social competitions are open to clubs, invitational sides and teams from the UK and beyond',
          'Each host event is planned as a high-energy rugby 7s festival with teams, spectators and off-pitch atmosphere',
          'Series winners are decided across the summer calendar'
        ]
      },
      {
        heading: 'Purpose',
        items: [
          'Bring greater exposure to rugby sevens in the UK',
          'Encourage participation for men’s and women’s teams',
          'Create development pathways for players, coaches, referees and managers',
          'Raise the standard of UK rugby sevens through well-run tournament events',
          'Give elite and social players a shared event platform'
        ]
      },
      {
        heading: '2025 merger',
        copy: [
          'In 2025, the former Super Sevens Series and LIT7s Series joined to create the LIT Super Sevens Series, combining elite, open and social competition into a larger UK rugby 7s platform.'
        ]
      }
    ],
    gallery: [
      {
        title: 'Series announcement',
        category: 'Series',
        image: assetPath('assets/news/super-2025-announced.jpg'),
        caption: 'The combined LIT and Super Sevens platform launched a larger UK rugby 7s series.'
      },
      {
        title: '2025 kick-off',
        category: 'Series',
        image: assetPath('assets/news/super-2025-kickoff.avif'),
        caption: 'The expanded series brings more teams, dates and media into one calendar.'
      }
    ],
    ctas: [
      { label: 'Series Calendar', href: links.superSevensVenuesDatesPage, primary: true },
      { label: 'Enter Team', href: links.teamEntry }
    ]
  },
  {
    slug: 'super-sevens-venues-dates',
    title: 'Super Sevens Venues and Dates',
    category: 'Series',
    summary:
      'The 2026 LIT Super Sevens Series schedule, including four UK series rounds plus the LIT7s London finale.',
    image: assetPath('assets/news/super-2025-venues.avif'),
    accent: 'green',
    quickFacts: [
      { label: 'Round 1', value: 'Manor 7s - 9 May 2026' },
      { label: 'Round 2', value: 'Oxford 7s - 16 May 2026' },
      { label: 'Round 3', value: 'Hertford 7s - 13 June 2026' },
      { label: 'Finale', value: 'LIT7s London - 18 July 2026' }
    ],
    sections: [
      {
        heading: '2026 schedule',
        timeline: [
          { time: '9 May', title: 'Manor 7s', detail: 'Opening series round at Eton Manor RFC.' },
          { time: '16 May', title: 'Oxford 7s', detail: 'Second series round at Oxford Quins RFC.' },
          { time: '13 June', title: 'Hertford 7s', detail: 'Mid-series round at Hertford RFC.' },
          { time: '27 June', title: 'National Pub 7s', detail: 'Fourth UK series stop at Harpenden RFC.' },
          { time: '18 July', title: 'LIT7s London', detail: 'Series finale and London International 7s tournament at Wasps FC.' },
          { time: '28 Nov', title: 'LIT Florida International 7s', detail: 'USA tournament date outside the UK series standings.' }
        ]
      },
      {
        heading: 'How the calendar works',
        copy: [
          'The four Super Sevens rounds build toward the LIT7s London finale, giving elite teams a multi-leg competition while open and social teams can enter individual events.'
        ]
      }
    ],
    ctas: [
      { label: 'Visual Calendar', href: '#calendar', primary: true },
      { label: 'LIT7s London Details', href: '#event/lit7s-london' }
    ]
  },
  {
    slug: 'super-sevens-teams',
    title: 'Super Sevens Teams',
    category: 'Series',
    summary:
      'Team information for the elite, open and social sides competing across the LIT Super Sevens Series.',
    image: assetPath('assets/news/super-2023-opener.jpeg'),
    accent: 'green',
    quickFacts: [
      { label: '2026 elite men', value: '10 teams listed' },
      { label: '2026 elite women', value: '8 teams listed' },
      { label: 'Open/social', value: 'Teams from the UK and beyond' },
      { label: 'Elite entry', value: 'Invitation only' }
    ],
    sections: [
      {
        heading: 'Elite teams',
        copy: [
          'The 2026 elite competition brings together international, Premiership and invitational rugby 7s teams across the series.'
        ],
        items: [
          'International sides referenced for the elite field include China and Hong Kong',
          'Premiership club names referenced include Saracens and Bath',
          'Elite invitational sides referenced include British Army, Shogun, Apache and Preseli Babas',
          'The 2026 series lists 10 elite men’s teams and 8 elite women’s teams',
          'Guest sides can compete at individual legs alongside core teams'
        ]
      },
      {
        heading: 'Open and social teams',
        copy: [
          'Open and social divisions give clubs, university groups, invitational teams and festival sides a way into the same event calendar.'
        ],
        items: [
          'Open and social team entry is open through the team-entry flow',
          'Teams can enter individual events rather than the full elite series',
          'Open and social series winners are announced before the LIT7s finale'
        ]
      },
      {
        heading: 'Recent winners',
        items: [
          '2025 men’s series winners: British Army',
          '2025 women’s series winners: Shogun Rugby',
          '2024 winners referenced in series coverage include Hammerhead 7s and British Army'
        ]
      }
    ],
    ctas: [
      { label: 'Enter Open or Social Team', href: links.teamEntry, primary: true },
      { label: 'Elite Expression of Interest', href: links.superSevensEliteEntryPage }
    ]
  },
  {
    slug: 'super-sevens-results',
    title: 'Super Sevens Results and Standings',
    category: 'Series',
    summary:
      'Results, winners and standings context for the LIT Super Sevens Series and recent Super Sevens seasons.',
    image: assetPath('assets/news/super-2023-wrap.jpg'),
    accent: 'green',
    quickFacts: [
      { label: '2025 men', value: 'British Army' },
      { label: '2025 women', value: 'Shogun Rugby' },
      { label: 'Tracked years', value: '2022, 2023, 2024 and 2025' },
      { label: 'Live scores', value: 'Tournify tournament app' }
    ],
    sections: [
      {
        heading: '2025 winners',
        items: ['Men’s series winners: British Army', 'Women’s series winners: Shogun Rugby']
      },
      {
        heading: 'Recent standings pages',
        copy: [
          'The series has published standings pages for recent seasons, with men’s and women’s results tracked across the tournament rounds.'
        ],
        cards: [
          {
            title: '2025 results',
            copy: 'The combined LIT Super Sevens Series season with British Army and Shogun Rugby listed as winners.'
          },
          {
            title: '2024 standings',
            copy: 'Round-by-round standings from the 2024 Super Sevens season.'
          },
          {
            title: '2023 standings',
            copy: 'Season standings and coverage across the 2023 Super Sevens rounds.'
          },
          {
            title: '2022 standings',
            copy: 'Earlier results and standings from the Super Sevens competition pathway.'
          }
        ]
      },
      {
        heading: 'Live scoring',
        copy: [
          'The series uses Tournify to help teams, managers, friends and families follow fixtures, pitch allocations, live scores, group tables and knockout draws during each event.'
        ]
      }
    ],
    ctas: [
      { label: 'Tournament App', href: links.tournamentAppPage, primary: true },
      { label: 'Series News', href: links.newsPage }
    ]
  },
  {
    slug: 'super-sevens-rules',
    title: 'Super Sevens Rules',
    category: 'Rules',
    summary:
      'Rules and competition guidance for elite, open and social LIT Super Sevens Series teams.',
    image: assetPath('assets/imported/rugby-sevens-guide-rules.avif'),
    accent: 'green',
    sections: [
      {
        heading: 'Elite series rules',
        copy: [
          'The elite series is structured around core and guest teams competing across one-day tournament rounds.'
        ],
        items: [
          'Elite entry is by invitation only',
          'Core teams compete across the series; guest teams may be added at individual legs',
          'The elite series is designed to create the title of best elite team in the UK',
          'Team enquiries go through admin@lit7s.com'
        ]
      },
      {
        heading: 'Open and social rules',
        copy: [
          'Open and social teams compete in rugby 7s divisions built for competitive club sides, invitational teams and festival teams.'
        ],
        items: [
          'Teams should follow tournament registration and squad submission guidance',
          'Match rules follow rugby sevens event rules, with event-specific updates issued before each leg',
          'Teams should arrive on time for fixtures and monitor Tournify for pitch and draw updates',
          'Open and social divisions are designed to keep competitive balance and a strong festival experience'
        ]
      },
      {
        heading: 'Match-day expectations',
        items: [
          'Respect match officials and event staff',
          'Use the tournament app for fixtures, live scores and knockout draws',
          'Follow event-specific registration, kit and insurance requirements',
          'Bring an alternate shirt where colour clashes are possible'
        ]
      }
    ],
    ctas: [
      { label: 'Sevens Rules Guide', href: links.lit7sRules, primary: true },
      { label: 'Enter Team', href: links.teamEntry }
    ]
  },
  {
    slug: 'super-sevens-elite-entry',
    title: 'Elite Team Expression of Interest',
    category: 'Series Entry',
    summary:
      'Elite competition interest information for guest teams and core teams in the LIT Super Sevens Series.',
    image: assetPath('assets/news/super-2022-newbury.jpg'),
    accent: 'green',
    sections: [
      {
        heading: 'Elite entry model',
        copy: [
          'The elite competition is invitation-only, with core and guest team places considered by the series team.'
        ],
        items: [
          'Core teams compete across the main series rounds',
          'Guest teams can express interest in individual event legs',
          'Teams should include contact details, team background and competition level when enquiring',
          'Elite enquiries should be sent to admin@lit7s.com'
        ]
      },
      {
        heading: 'Open and social entry',
        copy: [
          'Teams that are not entering the elite competition can use the open and social team-entry flow for the relevant event.'
        ]
      }
    ],
    ctas: [
      { label: 'Email LIT7s', href: links.contact, primary: true },
      { label: 'Enter Open or Social Team', href: links.teamEntry }
    ]
  },
  {
    slug: 'florida-international-7s',
    title: 'LIT Florida International 7s',
    category: 'USA Tournament',
    summary:
      'The USA tournament page presented in-site with divisions, venue details, registration, accommodation and event features.',
    image: assetPath('assets/gallery/florida-stadium.avif'),
    accent: 'usa',
    quickFacts: [
      { label: 'Date', value: '28 November 2026' },
      { label: 'Venue', value: 'Premier Sports Campus, Bradenton' },
      { label: 'Entry model', value: 'Adult, university and youth 7s' },
      { label: 'Venue scale', value: '23 FIFA-regulation Bermuda grass fields' }
    ],
    sections: sourcePageSections('LIT Florida International 7s', `
LIT Florida International 7s 

Men's, Women's, Youth 7s | November 29, 2025Premier Sports Campus, Bradenton, Florida 

Reserve a Spot

SOCIAL, OPEN & ELITE RUGBY 7s FESTIVAL (ADULT & YOUTH)
Join LIT7s this Thanksgiving weekend in November at the LIT Florida International 7s, our first rugby 7s tournament in the United States for an experience like no other with a once-in-a-lifetime opportunity to meet Olympians and USA Rugby stars. 
The tournament will take place on Saturday, November 29 at the Premier Sports Campus in Bradenton, Florida, USA. Team registration is now open and the online team registration link can be found HERE.
During cold November, when there will be snow on the ground in some parts of the USA and Europe, we will be partying it up in the sunshine in beautiful Florida weather.We will be hosting elite, open and social men’s and women’s competitions along with age-grade rugby (eg U23, U18, U16 etc depending on interest).The tournament will include:– Stadium with surrounding pitches – Livestream with professional commentary– Professional photographers– Social media presenters– Fun party atmosphere– Great food stalls and pitch side bars– Entertainment 

LIT7s has been running rugby 7s tournaments for over 13 years and currently runs the LARGEST RUGBY 7s SERIES in the UNITED KINGDOM. We are looking to bring our event experience and influence in Europe to create the best rugby 7s tournament in the USA, which attracts both domestic and international teams to take part.

Based on tournament interest, we are expecting a sell-out event and limits on team numbers have been put in place for each division.

Proposed divisions for the LIT Florida 7s include:

Adult Men’s: Elite, Open & Social 
Adult Women’s: Elite, Open & Social 
Men’s U23/University: Elite, Open & Social 
Women’s U23/University: Elite, Open & Social 
Boys U18: Elite, Open & Development
Girls U18: Elite, Open & Development
U16 Boys 
U16 Girls 

If there is sufficient interest, we would consider adding U14 divisions. Please contact us on admin@lit7s.com if interested.
Team registration can be made directly via the tournament registration page and is on a first-come, first-served basis.

Teams looking to enter more than one team in any single division are kindly asked to seek approval from the tournament organizers before registering.

Team registration is only guaranteed once payment of the team registration fee and all team, player, and coach compliance requirements have been satisfied – see HERE for further compliance requirements and registration terms & conditions.

EventConnect, the tournament’s accommodation partner, offers discounted hotel rate for a large number hotels in the Tampa area (additional hotel inventory will continue to be added) – latest hotel availability and current pricing can be viewed HERE.

EventConnect guarantees the best available group rate for the dates and room type being offered and ensures your team’s accommodation bookings integrates seamlessly with the tournament’s registration platform. Once a team has registered for the tournament, rooms can be held without charge for up to 10 days after which a small deposit is required to confirm the booking – please refer to the booking and cancellation terms for each individual property as they may differ from hotel to hotel. Teams are urged to book their accommodation as early as possible. Teams can only make accommodation holds and confirmed reservations if they are successfully registered for the tournament.

The early bird registration fee for all divisions is $700 dollars per team for a 15-person squad. The team registration fee can be paid online at the point of registration. 
Questions or any general registration enquiries about the 2025 tournament can be directed to admin@lit7s.com. 

Early bird discount available until September 15, 2025. 
Follow us on @LIT7s and @LIT7sUSA for regular updates about the camp 

Early Bird Entry: $700 ( EARLY BIRD PRICE VALID ONLY UNTIL 15 SEPTEMBER!)1 day Saturday tournament at Premier Sports Campus in Bradenton, Florida 

Register Your Team

Contact for Questions > 

Premier Sports CampusBradenton, Florida5895 Post Blvd, Lakewood Ranch, Florida 34211 

LIT7s is proud to call Premier Sports Campus at Lakewood Ranch its new home for the LIT Florida International 7s. Located in the heart of Florida’s Gulf Coast, this top-tier facility boasts 23 FIFA-regulation Bermuda grass fields and a 3,000+ seat stadium — a perfect match for the tournament’s growing ambitions.
    `),
    gallery: [
      {
        title: 'Premier Sports Campus',
        category: 'Venue',
        image: assetPath('assets/gallery/florida-stadium.avif'),
        caption: 'Bradenton venue base for LIT Florida International 7s.'
      },
      {
        title: 'Event preview',
        category: 'USA Tournament',
        image: assetPath('assets/gallery/florida-event-preview.avif'),
        caption: 'USA tournament visual content presented into a local gallery card.'
      }
    ],
    ctas: [
      { label: 'Register Team', href: links.floridaRegistration, primary: true },
      { label: 'Terms & Conditions', href: links.floridaTerms }
    ]
  },
  {
    slug: 'florida-terms',
    title: 'Florida Terms & Conditions',
    category: 'USA Tournament',
    summary: 'A plain-language in-site version of the Florida event registration, conduct, safety and waiver terms.',
    image: assetPath('assets/florida-7s.avif'),
    accent: 'usa',
    sections: sourcePageSections('Terms and conditions', `
Effective Date: 15 August 2025

1. Registration

All teams must register for the LIT Florida International 7s (the “Event”) via the Sporting Solutions LLC (“LIT7s”) official online platform and pay the team registration fee in full at the time of entry.

Registration is provisional until payment is received and all USA Rugby (or home union) compliance requirements are met. 

Entry is at LIT7s’ sole discretion. Divisions may be merged or adjusted; teams will be notified if moved. 

Once a division is full, teams will be placed on a waitlist (no payment required until a spot is offered).

If a team is not accepted, the registration fee will be refunded within 30 days.

2. Cancellations & Refunds

LIT7s may cancel, postpone, or alter the Event or any division at any time.

Refunds, full or partial, are at the Event Director’s sole discretion.

No refunds will be given for force majeure events, including but not limited to: severe weather, natural disasters, acts or omissions of government authorities, terrorism, epidemics, pandemics, national/state emergencies, or any other event beyond LIT7s’ reasonable control.

LIT7s has no liability for incidental or consequential losses (e.g., travel or accommodation costs).

Teams withdrawing for documented medical or exceptional reasons may receive a partial or full refund at the Event Director’s discretion.

If the Event is cancelled for force majeure, LIT7s may at its full discretion transfer the entry to a future Event.

3. Third-Party Bookings

Accommodation, travel, and other services booked through third parties are separate from Event registration and subject to those providers’ terms.

LIT7s accepts no responsibility for cancellations, disputes, or costs related to third-party arrangements.

4. Team & Player Eligibility

USA teams: All players, coaches, and team officials must be current USA Rugby members in good standing, comply with all USA Rugby regulations, sign all mandatory waivers and release forms, and pay the applicable USA Rugby membership fees.

Non-USA teams: All players, coaches, and team officials must be in good standing with their home union, comply with World Rugby and USA Rugby requirements, and submit a Permission to Tour letter from the home Union to LIT7s no later than 10th November 2025.

All players must:

Register via the Event system;

Provide proof of age; and

Complete the Player Consent & Medical Release form (signed by a parent/guardian if under 18). 

Once registered for a team, a player may not register for another team in the Event. 

All teams must comply with USA Rugby’s SafeSport Code, MAAPP, and other safeguarding policies. LIT7s will not refund or be held liable for any costs associated with a team or player’s enforced withdrawal from the Event due to non-eligibility.

LIT7s has sole discretion to interpret and enforce eligibility rules, including removal of non-compliant teams or players without refund.

5. Health, Safety & Medical Authority

All players must have valid medical insurance covering rugby and related activities, including emergency treatment and repatriation. 

LIT7s medical staff decisions are final and binding for participation and return-to-play clearance.

In emergencies, the Event’s athletic trainers and medical team may arrange treatment without further consent if delay would risk life or health.

Costs for all diagnosis, treatment, hospital care, transport, or medication are the sole responsibility of the player/team.

Players diagnosed as unfit to play (e.g., concussion) may not return until cleared by a qualified healthcare professional. 

Participants must comply with all concussion and safety protocols in effect at the Event, even if they differ from home union standards.

By registering for and/or participating in the Event, all players, coaches, and team officials acknowledge, accept, and agree to the following:

Knowledge & Competency

All players and coaches must have a reasonable understanding of the Laws of Rugby Union and the techniques required to coach, train, and play the game safely.

All participants must possess the physical fitness, skill, and competency necessary to take part in the Event without undue risk to themselves or others.

Medical Fitness to Participate

Players must not suffer from any medical condition or impairment that would normally preclude safe participation in rugby or similar physical activities.

Each participant is solely responsible for ensuring they are medically fit to compete. The Event Organizers make no guarantee of medical suitability.

Consent to Medical Treatment

Participants hereby grant full permission to the Event’s appointed trainer, physician, and/or other qualified medical personnel to administer first aid or other necessary medical treatment during the Event.

In the event of serious illness, injury, or accident, participants authorize emergency responders and/or hospital personnel to administer such further treatment as deemed necessary in their professional judgment.

All associated costs for diagnosis, treatment, hospital care, medication, and/or transport are the sole responsibility of the registered team and/or player.

Emergency Contact

In the event of serious injury, the team manager shall make reasonable efforts to contact the player’s parent, guardian, or designated emergency contact prior to treatment, when practicable.

Return-to-Play Policy

If a player is diagnosed or assessed by medical staff or a qualified healthcare professional as unfit to play (including, but not limited to, concussion), they shall not be permitted to participate further in the Event until they have obtained written clearance from a qualified healthcare professional.

Assumption of Risk & Infectious Disease Acknowledgement

Participation in rugby inherently involves the risk of serious injury, including, but not limited to, sprains, fractures, concussion, spinal injury, permanent disability, or death.

Participation may also involve risk of exposure to infectious diseases, including but not limited to MRSA, influenza, and COVID-19.

The Event Organizers may implement protocols, policies, procedures, and/or match rule changes to mitigate these risks, including compliance with applicable public health authority mandates in effect at the time of the Event.

By participating, all players, coaches, and officials voluntarily assume all risks—both known and unknown—associated with participation, and release the Event Organizers, their officers, employees, contractors, and volunteers from any liability for injury, illness, loss, or damage arising from participation, except where prohibited by law.

6. Conduct & Behaviour

LIT7s may refuse entry or remove, without refund, any player, team, supporter, or attendee for unsafe, abusive, disruptive, discriminatory, or damaging conduct on or off the field.

Teams are responsible for the behaviour of their coaches, players, and supporters.

All participants must follow tournament rules, regulations, and disciplinary procedures.

7. Intellectual Property & Media

All Event names, logos, and related IP belong to LIT7s and may not be used without written consent.

Broadcasting, live streaming, or commercial posting of match footage requires prior written approval and may be subject to a fee.

By participating, (or allowing a minor to participate), you grant LIT7s the irrevocable right to use photographs, video, and other media of the participant for promotional and commercial purposes without additional consent, payment, or the right to inspect or approve. or compensation.

8. Privacy

Participant data may be used to communicate about the Event, gather feedback, and share information about future LIT7s events. 

LIT7s may share limited contact details with selected service providers and partners in line with our privacy policy.

9. Liability & Florida Waiver Notice

Assumption of Risk: Rugby is a contact sport and carries an inherent risk of injury, illness, or death. By registering, all participants (or their parent/legal guardian if under 18) acknowledge these risks and agree to participate voluntarily.

In consideration of being allowed to participate in the LIT Florida International 7s (“Event”), all participants (players, coaches, and team officials) for themselves and any minor participants, hereby:

Waive, release, and discharge Sporting Solutions LLC (LIT7s), its officers, employees, agents, contractors, venue operators, and sponsors from any and all claims for personal injury, property damage, or wrongful death arising from participation in the Event, except where caused by gross negligence or intentional misconduct.

Agree to indemnify and hold harmless all released parties from any claims brought by or on behalf of the participant.

10. No Guarantee of Matches

LIT7s makes no guarantee as to the number of matches a team will play. 

The schedule is subject to change due to weather, withdrawals, disciplinary actions, or other unforeseen circumstances.

11. Personal Property

Participants are responsible for their own equipment, valuables, and personal items. 

LIT7s accepts no responsibility for loss, theft, or damage to personal property.

12. Governing Law & Dispute Resolution

These Terms are governed by the laws of the State of Florida. 

Any disputes must be brought exclusively in the state or federal courts located in Bradenton, Florida, and participants consent to the jurisdiction of such courts.

Participants waive the right to a jury trial and agree that no class or collective actions may be brought against LIT7s.

13. Severability

If any provision of these Terms & Conditions is found unenforceable, the remaining provisions shall remain in full force and effect.

Acknowledgement

By agreeing to these Terms and Conditions, the team representative confirms they have read, understood, and agreed to these Terms & Conditions, and have the authority to bind the team and all participants to them.

Florida Minor Waiver Notice (Florida Statutes § 744.301): The natural guardian agreeing to this release acknowledges that they are waiving certain legal rights on behalf of the minor, including the right to sue for ordinary negligence, and that this waiver is binding under Florida law.
    `),
    ctas: [{ label: 'Register Team', href: links.floridaRegistration, primary: true }]
  },
  {
    slug: 'olympic-experience',
    title: 'The Olympic Experience',
    category: 'USA Camp',
    summary:
      'The Chula Vista camp page presented with coaches, inclusions, room and board, food, transport and itinerary.',
    image: assetPath('assets/olympic-experience.avif'),
    accent: 'green',
    quickFacts: [
      { label: 'Dates', value: '27 February - 1 March 2026' },
      { label: 'Venue', value: 'Olympic Training Center, Chula Vista' },
      { label: 'Age', value: 'Players 12+; no rugby beginners' },
      { label: 'Registration', value: '3-day camp from $550' }
    ],
    sections: sourcePageSections('The Olympic Experience', `
"The Olympic Experience" 

LIT Rugby Sevens Camp | February 27 - March 1, 2026Olympic Training Center, Chula Vista, California 

Reserve a Spot

THE OLYMPIC EXPERIENCE
Join LIT7s this February for its 4th rugby sevens camp in the United States – an exclusive three-day rugby 7s training camp at the Olympic Training Center in Chula Vista, California (“CVEATC“), for a rugby 7s training experience like no other with a once-in-a-lifetime opportunity to train and live like an Olympian at the home of USA 7s National Team with Olympians and USA Rugby coaches. 
Our legendary coaches include some of the most well known rugby players and coaches in the world today led by Head Coach, Perry Baker (3 x Olympian and 2 x World Rugby Sevens Player of the Year). See full coaching list below.
Over the course of the camp, you will experience an elite training environment including fitness testing and technical skill sessions whilst having a lot of fun with your fellow players and our world-class coaches. 

On Friday you will hear from some of rugby’s most prestigious guest speakers and a panel session with all of our coaches with an opportunity for YOU to ask any questions that you may have. The panel will specifically cover player pathway opportunities for men and women in the USA as well as useful advice from our coaches on different topics.

All players will receive a tank top, shorts, photos with our superstar coaches and lunch on both days of the camp.
Players 12+ welcome including Adult Men, Adult Women, Youth Boys and Youth Girls. No rugby beginners please.
There are VERY limited places available so please register ASAP to avoid disappointment! Our last three camp sold out so make sure you don’t miss out. Early bird discount available until 15th January 2026.
Follow us on @LIT7s and @LIT7sUSA for regular updates about the camp 

Camp Videos 

Meet Our Coaches 

Perry Baker (Head Coach), 3 x Olympian and 2 x World Rugby Sevens Player of the Year;Naya Tapper, 2 x Olympian and Olympic Bronze Medal Winner;Carlin Isles, 2 x Olympian and “Fastest Rugby Player in the World”;Kelly Griffin, Olympian, PR7s Coach & USA Rugby Women’s High Performance Pathways Coach;JK Anderson, USA Falcons, PR7s Coach and NAV 7s Head Coach; Irene Gardner, USA 7s International, PR7s Coach & USA Rugby Women’s High Performance Pathways Head Coach (Speaker); Josh Schnell, USA Men’s Olympic Head of Physical Performance (Speaker); andEllaine Gelman, LIT7s CEO & Director of Rugby of LIT USA 7s. 

Interviews with Camper's Parents 

What Does Camp Registration Include? 

3 Day Rugby 7s Camp

LIT7s Reversible Tank Top (Blue/Red)

LIT7s Shorts (Black)

LIT7s Stickers

Lunch on Saturday at CVEATC

Lunch on Sunday at CVEATC

Treat at the end of Camp

Photo Album surprise

Personal Written Feedback from our Coaches (after camp)

Interview with a Camper 

Room & Board Option 

Accommodation is not included in the $550 Registration Fee, but there is an additional $450 room and board option for those that would like to stay on-site.This option includes accommodation on Friday and Saturday in the CVEATC rooms where the USA 7s Teams stay. All meals are included (further information set out below). Housekeeping, laundry facilities and WiFi are also available to all guests. 

Transportation 

The Chula Vista Olympic Training Center is located only 35 minutes from San Diego International Airport, so we recommend that campers take a taxi / Uber / pre-booked shuttle to get to the venue.If you need any assistance with a younger camper, please email admin@lit7s.com and we would be happy to assist you. 

Food Options 

All players will be provided with lunch on Saturday and Sunday, but those boarding will also receive additional meals on Friday, Saturday and Sunday. This includes:Friday – DinnerSaturday – Breakfast & Dinner (lunch already provided)Sunday – Breakfast (lunch already provided) 

Additional Kit Options Available 

IMG Camp Itinerary 

DAY 1 (FRIDAY): Registration, Introduction, Venue Tour & Panel TalksArrival from 3:00 PM: Registration & Kit CollectionTour of the facilityRegistration for campPick up kit bagsUse on-site gym (optional)Dinner at the on-site cafeteria for those boardingGuest Speakers + Panel with coaches including:Josh Schnell, USA Men’s Olympic Rugby Head of Physical PerformanceIrene Gardner, USA Women’s Pathway Head CoachPanel Session with Perry Baker, Naya Tapper, Kelly Griffin and JK AndersonFinish at 9:00 PMDAY 2 (SATURDAY): Skills, Speed and Game Fundamentals Arrival at 8:30AM for Photos with coaches Fitness TestingCoaching sessions focussed on improving your ball handling skills, decision-making, attack and defence work. Sprint specific sessions with the “fastest rugby players in the world” – Carlin Isles and Perry Baker – on the running track. Lunch together as a groupTouch Rugby matchesRecovery intro sessionProfessional ice baths at the Olympic training center Dinner at the on-site cafeteria for those boardingDay 3 (SUNDAY): Advanced Sevens Tactics & Game SimulationArrival at 9:00AM to pitchTackling, Ruck Technique, Speed of Possession sessionsSet Piece Technique sessionsLunch together as a groupPlayers showcase their skills in full rugby sevens matches, which will be filmed and photographedLIT7s Players of the Camp AwardsClosing Remarks & autograph opportunityFinish at 4:30 PM 

Photos from Past Camps 

Other Fun Videos 

3-day Camp: $550 (PRICE GOING UP – FINAL PRICE $650!)3 days at the Olympic Training Center with our world-class Olympic coaches. Includes tank top, shorts, 2 lunches + some freebies.Room + Board: $4502 nights of on-site accommodation on Friday & Saturday nights. Includes 6 meals (2 breakfasts, 2 lunches and 2 dinners on site).Modish Rugger Olympic T-Shirt: $30High quality comfort colors shirt. Room + Board (FOR PARENTS): $4752 nights of on-site accommodation on Friday & Saturday nights. Includes 6 meals (2 breakfasts, 2 lunches and 2 dinners on site) 

Reserve a Spot

Contact for Questions > 

The Olympic Training CenterSan Diego, California2800 Olympic PkwyChula Vista, CA 91915 

Home of USA Rugby 7s. CVEATC is a 155-acre training facility for Olympics & Paralympics that provides athletes and National Governing Bodies with world-class facilities and resources in a performance-oriented environment that allows athletes to reach their full potential. 

Follow us on @LIT7s and @LIT7sUSA for regular updates about the camp . 

 

 

LinkedIn 

Email 

WhatsApp 

Print
    `),
    gallery: [
      {
        title: 'Olympic camp training',
        category: 'Camp',
        image: assetPath('assets/gallery/olympic-camp-training.jpeg'),
        caption: 'Training environment and field sessions from the USA camp pathway.'
      },
      {
        title: 'Speed and skills',
        category: 'Camp',
        image: assetPath('assets/gallery/olympic-camp-speed.jpeg'),
        caption: 'Camp sessions focus on speed, skill and game fundamentals.'
      },
      {
        title: 'Camp group',
        category: 'Camp',
        image: assetPath('assets/gallery/olympic-camp-group.jpeg'),
        caption: 'Group camp moments and player development sessions.'
      }
    ],
    ctas: [{ label: 'Reserve Camp Spot', href: links.campCheckout, primary: true }]
  },
  {
    slug: 'img-experience',
    title: 'The IMG Experience',
    category: 'USA Camp',
    summary:
      'The Bradenton camp page presented with coach roster, camp inclusions, accommodation, food and itinerary.',
    image: assetPath('assets/florida-flyer.jpg'),
    accent: 'green',
    quickFacts: [
      { label: 'Dates', value: '14-16 November 2025' },
      { label: 'Venue', value: 'IMG Academy, Bradenton' },
      { label: 'Age', value: 'Players 13+; no rugby beginners' },
      { label: 'Registration', value: '3-day camp from $450' }
    ],
    sections: sourcePageSections('The IMG Experience', `
"The IMG Experience" 

LIT Rugby Sevens Camp | November 14-16, 2025IMG Academy, Florida 

Reserve a Spot

Join LIT7s this November for its third rugby sevens camp in the United States – an exclusive three-day rugby 7s training camp at the IMG Academy in Bradenton, Florida, for a rugby 7s training experience like no other with a once-in-a-lifetime opportunity to train with Olympians and USA Rugby coaches. Over the course of the camp, you will experience an elite training environment including fitness testing and technical skill sessions whilst having a lot of fun meeting players from all over the US and abroad. We pride ourselves on providing the very best player experience and all players will receive personal feedback from our coaches with useful and practical take-home advice to improve their game.Players 13+ welcome including Adult Men, Adult Women, Youth Boys and Youth Girls. No rugby beginners please.There are VERY limited places available so please register ASAP to avoid disappointment! 

Camp Videos 

Meet Our Coaches 

Perry Baker (Head Coach), 3 x Olympian and 2 x World Rugby Sevens Player of the YearNaya Tapper, 2 x Olympian and Olympic Bronze Medal WinnerKelly Griffin, Olympian, PR7s Coach and USA Rugby Women’s Pathways CoachJK Anderson, USA 7s Falcons and PR7s CoachIrene Gardner, USA 7s International, PR7s Coach and USA Rugby Women’s Pathways Head Coach (Speaker)Josh Schnell, USA Men’s Olympic Head of Physical Performance (Speaker)Ellaine Gelman, LIT7s CEO & Director of Rugby of LIT USA 7s 

Interviews with Camper's Parents 

What Does Camp Registration Include? 

3 Day Rugby 7s Camp

LIT7s Reversible Tank Top (Blue/Red)

LIT7s Shorts (Black)

LIT7s Stickers

Lunch on Saturday at IMG Academy

Lunch on Sunday at IMG Academy

Treat at the end of Camp

Photo Album surprise

Personal Written Feedback from our Coaches (after camp)

Interview with a Camper 

Accommodation Options 

Accommodation is not included in the $450 Registration Fee, but there are two options for on-site accommodation:(1) Villa Option – Limited spaces are available for on-site accommodation in the Academy Park Villas on Friday and Saturday. You will share a Villa with 5 other campers & stay next door to your Olympic coaches – walking distance from the cafeteria and the camp pitches!(2) Legacy Hotel – After registering you will receive a link that gives you 10% off for the hotel, which is located on-site at IMG. 

Transportation 

IMG is conveniently only a 15 minute drive from Sarasota-Bradenton International Airport (SRQ), so we recommend that campers take a taxi / Uber / pre-booked shuttle to reach IMG.If you need any assistance with a younger camper, please email admin@lit7s.com and we would be happy to assist you. 

Additional Food Options 

All players will be provided with lunch on Saturday and Sunday, but optional breakfast and dinner are also available on Friday, Saturday and Sunday. This could be a convenient option if you are staying on-site at a Villa or at the Hotel. This package includes:Friday – DinnerSaturday – Breakfast & Dinner (lunch already provided)Sunday – Breakfast (lunch already provided)PLEASE NOTE: There is also an option to dine on-site at the hotel restaurant. 

Additional Kit Options Available 

IMG Camp Itinerary 

DAY 1 (FRIDAY): Registration, Introduction, Venue Tour & Panel Talks

Arrival from 3:00 PM: Registration & Kit Collection
5:00 PM: Venue Tour (Optional)
6:00 PM: Dinner (Optional)
7:00 PM: Official Camp Kick Off, Speakers & Panel Talk at Hotel including:

Josh Schnell, USA Men’s Olympic Rugby Head of Physical Performance
Irene Gardner, USA Women’s Pathway Head Coach
Panel Session with Perry Baker, Naya Tapper, Kelly Griffin and JK Anderson

Finish at 9:00 PM

DAY 2 (SATURDAY): Skills, Speed and Game Fundamentals 

Arrival at 8:30 AM to pitch for Introductions & Photos 
Connection Session (dynamic stretching, mobility, light handling)
Session 1: Speed and Fitness
Session 2: Core Sevens Skills
Group Lunch in the IMG Academy Food Hall
Session 3: Specific Drills-Decision making attack
Session 4: Flag X – Tactical Awareness & Game Simulation 
Cool down & stretching
Group Debrief
Finish at 5:00 PM

Day 3 (SUNDAY): Advanced Sevens Tactics & Game Simulation

Arrival at 9:00AM to pitch (note: on site campers must leave belongings in hotel before training)
Warm Up / Activation / Ball Handling
Session 1: 1 v 1 Tackling, Ruck Technique, Speed of Possession
Session 2: Set Piece Technique
Session 3: Full Field Sevens Simulation
Recovery & Group Lunch in the IMG Academy Food Hall
Warm Up & Skills Refresh
Session 4: Full Field Sevens Simulation
Cool Down & Group Debrief
Q&A Session, Closing Remarks, Camp Awards
Finish at 5:00 PM

Photos from Past Camps 

Other Fun Videos 

3-Day Camp: $450 Join us on Friday, Saturday and Sunday at IMG Academy for a 3-day camp with our world-class Olympic coaches (includes tank top, shorts, lunch on both days and some freebies) 

Reserve a Spot

Contact for Questions > 

IMG AcademyBradenton, Florida5650 Bolletieri Blvd.Bradenton, FL 34210 

IMG Academy is a world-class 3 billion dollar facility, which is specifically designed for athletes. IMG has an incredible 600-acre campus including state-of-the-art student centre and cafeteria.The venue is conveniently located just a 15-minute drive from Sarasota-Bradenton International Airport. 

Follow us on @LIT7s and @LIT7sUSA for regular updates about the camp . 

 

 

LinkedIn 

Email 

WhatsApp 

Print
    `),
    gallery: [
      {
        title: 'IMG camp pathway',
        category: 'Camp',
        image: assetPath('assets/gallery/olympic-camp-group.jpeg'),
        caption: 'The IMG page is presented with the same camp media model and in-site history.'
      },
      {
        title: 'Coach feedback model',
        category: 'Development',
        image: assetPath('assets/gallery/olympic-camp-training.jpeg'),
        caption: 'Coach feedback and player development are central to the camp offer.'
      }
    ],
    ctas: [{ label: 'Reserve Camp Spot', href: links.campCheckout, primary: true }]
  },
  {
    slug: 'tournament-app',
    title: 'Tournament App',
    category: 'Series',
    summary: 'The Tournify tournament app guidance for fixtures, pitches, live scores, standings and knockout draws.',
    image: assetPath('assets/gallery/lit7s-gallery-crowd.jpg'),
    accent: 'green',
    sections: [
      {
        heading: 'How the app is used',
        copy: [
          'The LIT Super Sevens Series uses Tournify so teams, managers, friends and families can follow each leg of the series.'
        ],
        items: [
          'Fixtures, pitch allocations and match times',
          'Live pitch-side score uploads',
          'Group results and standings',
          'Knockout-stage draws',
          'Browser access where available, with the mobile app recommended for the best experience'
        ]
      },
      {
        heading: 'How to follow',
        items: [
          'Download the relevant Tournify app.',
          'Search for LIT Super Sevens.',
          'Follow the tournament leg you are interested in.',
          'Use browser links for supported events where app access is not convenient.'
        ]
      }
    ],
    ctas: [{ label: 'Tournament App Details', href: links.tournamentAppPage, primary: true }]
  },
  {
    slug: 'contact',
    title: 'Contact LIT7s',
    category: 'Contact',
    summary: 'Contact details and social channels for teams, spectators, partners and camp families.',
    image: assetPath('assets/gallery/lit7s-gallery-crowd.jpg'),
    accent: 'green',
    sections: [
      {
        heading: 'Get in touch',
        copy: [
          'For team, spectator, camp, partnership or general LIT7s questions, email admin@lit7s.com or message the LIT7s social channels.'
        ],
        items: ['Email: admin@lit7s.com', 'Instagram: @lit7s', 'USA Instagram: @lit7susa', 'Series Instagram: @supersevensseriesuk']
      }
    ],
    ctas: [
      { label: 'Email LIT7s', href: links.contact, primary: true },
      { label: 'Instagram', href: links.instagram }
    ]
  }
];

export const guideCollections = [
  {
    title: 'Tournament information',
    icon: BookOpen,
    summary: 'LIT7s London details for teams, spectators, rules, schedule and event-day planning.',
    pageSlugs: [
      'about-lit7s',
      'tournament-information',
      'festival-information-2023',
      'schedule',
      'what-to-pack',
      'vip-tickets',
      'sevens-competitions',
      'team-registration',
      'team-registration-interest',
      'prizes-and-awards',
      'sevens-rules',
      'rugby-sevens-guide',
      'london-7s-2024',
      'lit7s-london-7s-preview-2024'
    ]
  },
  {
    title: 'USA tournament and camps',
    icon: Globe2,
    summary: 'Florida tournament and USA camp pages with registration, venue and itinerary details.',
    pageSlugs: ['florida-international-7s', 'florida-terms', 'olympic-experience', 'img-experience']
  },
  {
    title: 'Series, teams and results',
    icon: Trophy,
    summary: 'Super Sevens overview, dates, teams, standings, rules and elite entry information.',
    pageSlugs: [
      'lit-super-sevens-series',
      'super-sevens-venues-dates',
      'super-sevens-teams',
      'super-sevens-results',
      'super-sevens-rules',
      'super-sevens-elite-entry'
    ]
  },
  {
    title: 'Media, news and festival',
    icon: PlayCircle,
    summary: 'News, galleries, food, entertainment, partners, opportunities and contact pages.',
    pageSlugs: [
      'news',
      'lit7s-media',
      'media-packages',
      'lit7s-video-collection',
      'lit7s-tournament-photos',
      'super-sevens-bury-2024-gallery',
      'super-sevens-bury-2024-livestream',
      'super-sevens-2023-media',
      'super-sevens-finals-analysis',
      'food-and-drink',
      'entertainment',
      'fancy-dress',
      'narni-shakers',
      'touch-competition',
      'facebook-groups',
      'partners',
      'opportunities',
      'match-ball-partner',
      'tournament-app',
      'contact'
    ]
  }
];

export const events: SiteEvent[] = [
  {
    slug: 'lit-super-sevens-series-2026',
    title: 'LIT Super Sevens Series 2026',
    type: 'Series',
    date: '9 May - 18 July 2026',
    location: 'United Kingdom',
    summary:
      "Five confirmed UK dates for Elite, Open & Social men's and women's rugby 7s.",
    image: assetPath('assets/news/super-2025-kickoff.avif'),
    ticketHref: links.spectatorTickets,
    detailPage: {
      eyebrow: 'UK Series',
      overview:
        'The Super Sevens Series brings Elite, Open and Social rugby 7s teams through a five-round UK calendar run by LIT7s.',
      upcomingTitle: '2026 series calendar',
      details: [
        'Manor 7s - 9 May 2026 at Eton Manor RFC',
        'Oxford 7s - 16 May 2026 at Oxford Quins RFC',
        'Hertford 7s - 13 June 2026 at Hertford RFC',
        'National Pub 7s - 27 June 2026 at Harpenden RFC',
        'LIT7s London finale - 18 July 2026 at Wasps FC',
        '2026 elite competition lists 10 elite men\'s teams and 8 elite women\'s teams',
        'Core and guest sides include international, Premiership and invitational teams',
        'Open and social divisions are open to teams from the UK and beyond',
        'Each event is planned as a 50-75 team festival with rugby, spectators and off-pitch atmosphere',
        'Open and social series winners are announced after tournament 4 with a GBP500 prize'
      ],
      sourceLinks: [
        {
          label: 'Series Information',
          href: links.superSevensSeriesPage,
          note: 'Series overview, 2026 teams, 2025 winners and event schedule'
        },
        {
          label: '2026 venues and dates',
          href: links.superSevensVenuesDatesPage,
          note: 'Date page for the four series rounds plus LIT7s'
        },
        {
          label: 'Tournament app',
          href: links.tournamentAppPage,
          note: 'Tournify app details for fixtures, pitches, live scores and standings'
        },
        {
          label: '2025 results',
          href: links.superSevensResultsPage,
          note: '2025 standings history'
        },
        {
          label: '2024 results',
          href: links.superSevensResultsPage,
          note: '2024 standings history'
        },
        {
          label: '2023 results',
          href: links.superSevensResultsPage,
          note: '2023 standings history'
        },
        {
          label: '2022 results',
          href: links.superSevensResultsPage,
          note: '2022 standings history'
        }
      ],
      mediaLinks: [
        {
          label: '2026 series albums',
          href: links.mediaPackages,
          note: 'Series media packages, galleries, livestreams and event photo links'
        },
        {
          label: 'Bury St Edmunds 2024 gallery',
          href: links.superSevensBury2024GalleryPage,
          note: 'Round 3 photo gallery and match-day media package'
        },
        {
          label: 'Bury St Edmunds 2024 livestream',
          href: links.superSevensBury2024LivestreamPage,
          note: 'Round 3 livestream package'
        },
        {
          label: 'Mike Friday analysis',
          href: links.superSevensAnalysisPage,
          note: 'Finals analysis themes, coaching notes and selected series performance talking points'
        }
      ],
      winners: [
        {
          title: "2025 Men's Winners",
          items: ['2025 Men: British Army'],
          sourceHref: links.superSevensResultsPage
        },
        {
          title: "2025 Women's Winners",
          items: ['2025 Women: Shogun Rugby'],
          sourceHref: links.superSevensResultsPage
        },
        {
          title: '2024 Series winners referenced in published coverage',
          items: ['Hammerhead 7s, 2024 SSS Winners', 'British Army, 2024 SS Winners'],
          sourceHref: links.articleSeriesKicksOff
        }
      ],
      articles: [
        {
          title: '2026 Charity Partner Announced!',
          href: links.articleCharityPartner,
          date: '28 April 2026',
          summary: 'Restart Rugby announced as official charity partner across all five 2026 events.'
        },
        {
          title: '2025 Series Kicks Off!',
          href: links.articleSeriesKicksOff,
          date: '6 May 2025',
          summary: 'Preview of the expanded LIT Super Sevens Series and the merger with LIT7s.'
        },
        {
          title: '2025 Venues Announced!',
          href: links.articleVenuesAnnounced,
          date: '15 October 2024',
          summary: 'Published list of the 2025 Manor, Oxford, Shelford, National Pub, Bury and LIT7s dates.'
        },
        {
          title: 'LIT Super Sevens Series 2025 Announced',
          href: links.articleSeries2025Announced,
          date: '23 September 2024',
          summary: 'Announcement that Super Sevens joined forces with LIT7s.'
        }
      ]
    },
    pastEvents: [
      {
        slug: '2025-season',
        year: '2025',
        title: 'Super Sevens Series 2025',
        date: '2025 season',
        location: 'United Kingdom',
        summary: 'Previous Elite, Open and Social series season across UK host clubs.',
        details: [
          '2025 standings, winners and coverage remain part of the series event history',
          '2025 series winners: British Army men and Shogun Rugby women',
          'The 2025 season introduced the combined LIT Super Sevens platform and the expanded UK summer calendar',
          'Standings pages, media albums and articles are grouped together for easy year-by-year browsing'
        ],
        sourceLinks: [
          {
            label: '2025 results',
            href: links.superSevensResultsPage,
            note: 'Super Sevens 2025 standings history'
          },
          {
            label: 'Series Information',
            href: links.superSevensSeriesPage,
            note: 'Current series home with 2025 winners and calendar context'
          },
          {
            label: '2024 results',
            href: links.superSevensResultsPage,
            note: 'Previous standings linked from the series'
          }
        ],
        mediaLinks: [
          {
            label: '2026 series albums',
            href: links.mediaPackages,
            note: 'Series media packages and recent event albums'
          },
          {
            label: '@supersevensseriesuk Instagram',
            href: links.instagramSeries,
            note: 'Series social updates and past-event media'
          },
          {
            label: 'Bury St Edmunds 2024 gallery',
            href: links.superSevensBury2024GalleryPage,
            note: 'Super Sevens round gallery package'
          }
        ],
        winners: [
          {
          title: "2025 Men's Winners",
          items: ['2025 Men: British Army'],
          sourceHref: links.superSevensResultsPage
        },
        {
          title: "2025 Women's Winners",
          items: ['2025 Women: Shogun Rugby'],
          sourceHref: links.superSevensResultsPage
          }
        ],
        articles: [
          {
            title: '2025 Series Kicks Off!',
            href: links.articleSeriesKicksOff,
            date: '6 May 2025',
            summary: 'Preview of the expanded LIT Super Sevens Series and the merger with LIT7s.'
          },
          {
            title: '2025 Venues Announced!',
            href: links.articleVenuesAnnounced,
            date: '15 October 2024',
            summary: 'Published venue announcement for the 2025 Super Sevens calendar.'
          },
          {
            title: 'LIT Super Sevens Series 2025 Announced',
            href: links.articleSeries2025Announced,
            date: '23 September 2024',
            summary: 'Announcement that Super Sevens joined forces with LIT7s.'
          }
        ]
      },
      {
        slug: 'series-origin-history',
        year: '2011',
        title: 'Series established',
        date: 'Established in 2011',
        location: 'United Kingdom',
        summary: 'The competition platform that grew into the current Super Sevens Series.',
        details: [
          'Event history for the competition platform that grew into the current LIT Super Sevens Series',
          'Results pages cover recent standings from 2022 through 2025',
          'Super Sevens and LIT7s joined into one platform for the current series model',
          'Standings, event galleries and media cards are grouped together for teams and fans'
        ],
        sourceLinks: [
          {
            label: 'Series Information',
            href: links.superSevensSeriesPage,
            note: 'Series history, current format and 2026 schedule'
          },
          {
            label: '2022 results',
            href: links.superSevensResultsPage,
            note: 'Earlier standings page for the series'
          },
          {
            label: '2023 results',
            href: links.superSevensResultsPage,
            note: '2023 standings history'
          },
          {
            label: '2024 results',
            href: links.superSevensResultsPage,
            note: '2024 standings history'
          },
          {
            label: '2025 results',
            href: links.superSevensResultsPage,
            note: '2025 standings history'
          }
        ],
        mediaLinks: [
          {
            label: '@supersevensseriesuk Instagram',
            href: links.instagramSeries,
            note: 'Series social media updates'
          },
          {
            label: 'Bury St Edmunds 2024 gallery',
            href: links.superSevensBury2024GalleryPage,
            note: 'Super Sevens photo gallery'
          },
          {
            label: 'Bury St Edmunds 2024 livestream',
            href: links.superSevensBury2024LivestreamPage,
            note: 'Livestream package'
          }
        ],
        winners: [],
        articles: [
          {
            title: 'LIT Super Sevens Series 2025 Announced',
            href: links.articleSeries2025Announced,
            date: '23 September 2024',
            summary: 'Published background on the Super Sevens and LIT7s combined platform.'
          }
        ]
      }
    ],
    ctas: [{ label: 'Enter Team', href: links.teamEntry, primary: true }],
    accent: 'green'
  },
  {
    slug: 'lit7s-london',
    title: 'LIT7s London',
    type: 'Tournament',
    date: '18 July 2026',
    location: 'London, United Kingdom',
    summary: 'The flagship London International 7s festival with teams, fans, media and live event atmosphere.',
    image: assetPath('assets/news/super-2025-announced.jpg'),
    ticketHref: links.spectatorTickets,
    detailPage: {
      eyebrow: 'UK Tournament',
      overview:
        'LIT7s London is the flagship London International 7s festival and the closing stop of the 2026 UK series.',
      upcomingTitle: '2026 LIT7s London',
      details: [
        'Date: 18 July 2026',
        'Venue: Wasps Rugby Club, Twyford Avenue Sports Ground, Twyford Ave, Acton, London W3 9QA',
        'First matches are expected to kick off at 9:30 AM; final detailed timings are released closer to event week',
        'Nearest train station: Acton Central; nearby underground stations: Ealing Common and Acton Town',
        'Limited advance-purchase parking has previously been listed at GBP10 per car',
        'Competition divisions include Men\'s Open, Men\'s Social, Women\'s Open and Women\'s Social',
        'Tournament format includes open and social rugby, team packs, player wristbands and captains briefings',
        'Includes elite competition, social rugby, spectators, media and tournament-day entertainment',
        'Past schedule guidance includes team registration, captain briefings, cup finals, presentations and a fancy dress party',
        'Event guidance includes player and spectator packing lists, VIP ticket information, competition rules and prize information'
      ],
      sourceLinks: [
        {
          label: 'Tournament Information',
          href: links.lit7sTournamentInfo,
          note: 'Tournament overview, divisions and spectator entertainment'
        },
        {
          label: 'Schedule',
          href: links.lit7sSchedule,
          note: 'Registration, briefing, kickoff, finals, presentations and party timing guide'
        },
        {
          label: 'What to Pack',
          href: links.lit7sWhatToPack,
          note: 'Player and spectator packing lists'
        },
        {
          label: 'VIP Tickets',
          href: links.lit7sVipTickets,
          note: 'VIP area package information'
        },
        {
          label: 'Sevens Competitions',
          href: links.lit7sCompetitions,
          note: 'Men\'s and women\'s open/social division descriptions'
        },
        {
          label: 'Team Registration Info',
          href: links.lit7sTeamRegistrationInfo,
          note: 'Team fee, manager confirmation and event-day registration information'
        },
        {
          label: 'Prizes and Awards',
          href: links.lit7sPrizes,
          note: 'Open, social and player-of-the-tournament prize details'
        },
        {
          label: 'Sevens Rules',
          href: links.lit7sRules,
          note: 'Open and social competition rules summary'
        }
      ],
      mediaLinks: [
        {
          label: 'Past LIT7s videos and photos',
          href: links.lit7sMedia,
          note: 'In-site media hub with videos, Facebook albums and Instagram links'
        },
        {
          label: 'LIT7s tournament photos',
          href: links.lit7sTournamentPhotos,
          note: 'Winners, participant teams, food and entertainment galleries'
        },
        {
          label: '@LIT7s Instagram',
          href: links.instagram,
          note: 'Current and past tournament photo/video updates'
        }
      ],
      winners: [
        {
          title: '2024 LIT7s Winners',
          items: [
            "Shogun Rugby, Men's Open Cup Winners",
            "Wild Dogs, Alpha Pack, Women's Open Winners",
            "CNCF 7s, Men's Open Plate Winners",
            "All the Gear, No Idea, Women's Social Cup Winners",
            "Legion 7s, Women's Social Plate Winners",
            "Surrey Exiles, Men's Social Cup Winners",
            "OG 7s, Men's Social Plate Winners"
          ],
          sourceHref: '#event/lit7s-london/past/2024'
        }
      ],
      articles: [
        {
          title: '2025 Series Kicks Off!',
          href: links.articleSeriesKicksOff,
          date: '6 May 2025',
          summary: 'Includes LIT7s London 2024 winner reference and 2025 LIT7s calendar context.'
        },
        {
          title: 'LIT Super Sevens Series 2025 Announced',
          href: links.articleSeries2025Announced,
          date: '23 September 2024',
          summary: 'Explains how LIT7s became part of the combined LIT Super Sevens platform.'
        }
      ]
    },
    pastEvents: [
      {
        slug: '2025',
        year: '2025',
        title: 'LIT7s London 2025',
        date: '2025 event',
        location: 'London, United Kingdom',
        summary: 'Previous London International 7s event season.',
        details: [
          'The tournament information guide preserves the London event format, divisions and spectator entertainment',
          'The schedule page captures the registration, briefing, kickoff, finals, presentation and party flow used for event planning',
          'Competition information covers men\'s and women\'s open/social divisions',
          'Media links point to past LIT7s videos, Facebook albums and Instagram updates'
        ],
        sourceLinks: [
          {
            label: 'Tournament Information',
            href: links.lit7sTournamentInfo,
            note: 'London tournament overview and divisions'
          },
          {
            label: 'Schedule',
            href: links.lit7sSchedule,
            note: 'Event-day registration, kickoff, finals, presentations and party timings'
          },
          {
            label: 'Sevens Competitions',
            href: links.lit7sCompetitions,
            note: 'Men\'s and women\'s open/social competition descriptions'
          },
          {
            label: 'Prizes and Awards',
            href: links.lit7sPrizes,
            note: 'Prize and player-of-the-tournament information'
          }
        ],
        mediaLinks: [
          {
            label: 'Past LIT7s videos and photos',
            href: links.lit7sMedia,
            note: 'In-site media hub with videos, Facebook albums and Instagram links'
          },
          {
            label: 'LIT7s tournament photos',
            href: links.lit7sTournamentPhotos,
            note: 'Tournament galleries and team/event photo albums'
          },
          {
            label: '@LIT7s Instagram',
            href: links.instagram,
            note: 'Current and historical LIT7s tournament updates'
          }
        ],
        winners: [
          {
            title: '2025 winner updates',
            items: ['Winner updates are added when the event team confirms each division result'],
            sourceHref: links.lit7sMedia
          }
        ],
        articles: [
          {
            title: '2025 Series Kicks Off!',
            href: links.articleSeriesKicksOff,
            date: '6 May 2025',
            summary: 'Provides 2025 LIT Super Sevens context and LIT7s London event calendar background.'
          }
        ]
      },
      {
        slug: '2024',
        year: '2024',
        title: 'LIT7s London 2024',
        date: '2024 event',
        location: 'London, United Kingdom',
        summary: 'Past London tournament year with winners, media and event detail.',
        details: [
          'The 2024 LIT7s winners are listed by division',
          'LIT7s media hub links to past tournament videos, Facebook albums and Instagram galleries',
          'Super Sevens coverage references LIT7s London 2024 and the Shogun Rugby title',
          'Event details, winners and media cards are grouped together for the 2024 tournament'
        ],
        sourceLinks: [
          {
            label: '2024 winners',
            href: links.lit7sTournamentPhotos,
            note: 'Winner list for the 2024 LIT7s divisions'
          },
          {
            label: 'Tournament Information',
            href: links.lit7sTournamentInfo,
            note: 'Tournament format and event-day information'
          },
          {
            label: 'Prizes and Awards',
            href: links.lit7sPrizes,
            note: 'Open, social and player-of-the-tournament prize details'
          }
        ],
        mediaLinks: [
          {
            label: 'Past LIT7s videos and photos',
            href: links.lit7sMedia,
          note: 'Media hub with videos and photo links'
          },
          {
            label: 'LIT7s tournament photos',
            href: links.lit7sTournamentPhotos,
            note: 'Winners, participant teams, food and entertainment galleries'
          },
          {
            label: '@LIT7s Instagram',
            href: links.instagram,
            note: 'Tournament updates and gallery-style posts'
          }
        ],
        winners: [
          {
            title: '2024 LIT7s Winners',
            items: [
              "Shogun Rugby, Men's Open Cup Winners",
              "Wild Dogs, Alpha Pack, Women's Open Winners",
              "CNCF 7s, Men's Open Plate Winners",
              "All the Gear, No Idea, Women's Social Cup Winners",
              "Legion 7s, Women's Social Plate Winners",
              "Surrey Exiles, Men's Social Cup Winners",
              "OG 7s, Men's Social Plate Winners"
            ]
          }
        ],
        articles: [
          {
            title: '2025 Series Kicks Off!',
            href: links.articleSeriesKicksOff,
            date: '6 May 2025',
            summary: 'Includes the LIT7s London 2024 winner reference and 2025 calendar context.'
          },
          {
            title: 'LIT Super Sevens Series 2025 Announced',
            href: links.articleSeries2025Announced,
            date: '23 September 2024',
            summary: 'Explains the combined LIT7s and Super Sevens platform after the 2024 season.'
          }
        ]
      }
    ],
    ctas: [
      { label: 'Spectator Tickets', href: links.spectatorTickets, primary: true },
      { label: 'Enter Team', href: links.teamEntry }
    ],
    accent: 'green'
  },
  {
    slug: 'lit-florida-international-7s',
    title: 'LIT Florida International 7s',
    type: 'Tournament',
    date: '28 November 2026',
    location: 'Premier Sports Campus, Bradenton',
    summary: 'The LIT7s USA tournament pathway for adult, university and youth 7s teams in Florida.',
    image: assetPath('assets/florida-7s.avif'),
    detailPage: {
      eyebrow: 'USA Tournament',
      overview:
        'LIT Florida International 7s brings the European LIT7s tournament platform into the USA for adult, university and youth sides.',
      upcomingTitle: '2026 Florida tournament',
      details: [
        'Date: 28 November 2026',
        'Venue: Premier Sports Campus, Bradenton, Florida',
        'Adult men and women: Elite, Open and Social divisions',
        'University/U23 men and women: Elite, Open and Social divisions',
        'Youth divisions include Boys U18, Girls U18, U16 Boys and U16 Girls, with U14 possible based on interest',
        'Event plan includes stadium and surrounding pitches, livestream, professional photographers and social media presenters',
        'Food stalls, pitch-side bars, entertainment and party atmosphere are part of the event format',
        'Team registration and accommodation booking run through EventConnect',
        'Premier Sports Campus lists 23 FIFA-regulation Bermuda grass fields and a 3,000+ seat stadium'
      ],
      sourceLinks: [
        {
          label: 'Tournament Information',
          href: links.floridaEvent,
          note: 'LIT Florida International 7s event page'
        },
        {
          label: 'Team Registration',
          href: links.floridaRegistration,
          note: 'EventConnect registration page'
        },
        {
          label: 'Tournament Terms & Conditions',
          href: links.floridaTerms,
          note: 'Compliance, registration and terms page'
        },
        {
          label: 'Premier Sports Campus',
          href: 'https://www.imgacademy.com/venues/premier-sports-campus',
          note: 'Venue page for Lakewood Ranch / Bradenton'
        }
      ],
      mediaLinks: [
        {
          label: '@LIT7sUSA Instagram',
          href: links.instagramUsa,
          note: 'USA tournament and camp updates'
        },
        {
          label: '@LIT7s Instagram',
          href: links.instagram,
          note: 'Main LIT7s social channel'
        },
        {
          label: 'LIT7s video collection',
          href: links.lit7sVideoCollection,
          note: 'Video library for LIT7s content'
        }
      ],
      winners: [
        {
          title: 'Florida winners',
          items: ['2026 winners will be added after the 28 November 2026 tournament'],
          sourceHref: links.floridaEvent
        }
      ],
      articles: []
    },
    pastEvents: [
      {
        slug: '2025',
        year: '2025',
        title: 'LIT Florida International 7s 2025',
        date: '2025 event',
        location: 'Premier Sports Campus, Bradenton',
        summary: 'Previous LIT Florida International 7s listing from the LIT7s USA pathway.',
        details: [
          'The Florida event guide describes the adult, university and youth rugby 7s festival format',
          'Event plan includes stadium and surrounding pitches, livestream, photographers, social media presenters, food stalls, pitch-side bars and party atmosphere',
          'Team registration and accommodation booking are routed through EventConnect',
          'Premier Sports Campus is the listed Bradenton venue with a large multi-field sports campus setup'
        ],
        sourceLinks: [
          {
            label: 'Tournament Information',
            href: links.floridaEvent,
            note: 'LIT Florida International 7s event page'
          },
          {
            label: 'Team Registration',
            href: links.floridaRegistration,
            note: 'EventConnect registration and accommodation flow'
          },
          {
            label: 'Tournament Terms & Conditions',
            href: links.floridaTerms,
            note: 'LIT Florida registration and event terms'
          },
          {
            label: 'Premier Sports Campus',
            href: 'https://www.imgacademy.com/venues/premier-sports-campus',
            note: 'Venue information for the Bradenton tournament site'
          }
        ],
        mediaLinks: [
          {
            label: '@LIT7sUSA Instagram',
            href: links.instagramUsa,
            note: 'USA tournament and camp updates'
          },
          {
            label: '@LIT7s Instagram',
            href: links.instagram,
            note: 'Main LIT7s social channel'
          },
          {
            label: 'LIT7s video collection',
            href: links.lit7sVideoCollection,
            note: 'Video library for LIT7s content'
          }
        ],
        winners: [
          {
            title: '2025 Florida winner updates',
            items: ['Winner updates are added when the event team confirms each division result'],
            sourceHref: links.floridaEvent
          }
        ],
        articles: []
      },
      {
        slug: 'usa-pathway-history',
        year: '2024',
        title: 'LIT7s USA Florida pathway',
        date: 'Prior USA tournament activity',
        location: 'Florida, USA',
        summary: 'Earlier USA tournament and pathway activity connected to LIT7s.',
        details: [
          'Event history for earlier USA tournament pathway activity connected to LIT7s',
          'The Florida tournament page defines the USA tournament format and venue model',
          'USA social and video channels carry past pathway media',
          'Winner updates are added as division results become available'
        ],
        sourceLinks: [
          {
            label: 'Tournament Information',
            href: links.floridaEvent,
            note: 'Current USA tournament information'
          },
          {
            label: 'Tournament Terms & Conditions',
            href: links.floridaTerms,
            note: 'LIT Florida event terms'
          },
          {
            label: 'Premier Sports Campus',
            href: 'https://www.imgacademy.com/venues/premier-sports-campus',
            note: 'Venue information for the Florida tournament setting'
          }
        ],
        mediaLinks: [
          {
            label: '@LIT7sUSA Instagram',
            href: links.instagramUsa,
            note: 'Best public channel for USA pathway media'
          },
          {
            label: '@LIT7s Instagram',
            href: links.instagram,
            note: 'Main LIT7s tournament and camp channel'
          },
          {
            label: 'LIT7s video collection',
            href: links.lit7sVideoCollection,
            note: 'Video library for LIT7s content'
          }
        ],
        winners: [
          {
            title: '2024 Florida pathway results',
            items: ['Winner updates are added as division results become available'],
            sourceHref: links.floridaEvent
          }
        ],
        articles: []
      }
    ],
    ctas: [{ label: 'Enter Team', href: links.floridaRegistration, primary: true }],
    accent: 'usa'
  },
  {
    slug: 'the-olympic-experience',
    title: 'The Olympic Experience',
    type: 'Camp',
    date: '27 February - 1 March 2026',
    location: 'Chula Vista, California',
    summary:
      'The 2026 Chula Vista camp at the Olympic Training Center with elite coaches and player pathway sessions.',
    image: assetPath('assets/olympic-experience.avif'),
    detailPage: {
      eyebrow: 'USA Camp',
      overview:
        'The Olympic Experience is the LIT Rugby 7s camp built around living and training like an Olympian in Chula Vista.',
      upcomingTitle: 'Next Olympic Experience camp',
      details: [
        'Confirmed dates: 27 February - 1 March 2026',
        'Venue: Olympic Training Center, Chula Vista, California',
        'Three-day rugby 7s camp at the home of the USA 7s National Team',
        'Players 12+ welcome across adult men, adult women, youth boys and youth girls; not for rugby beginners',
        'Registration includes LIT7s reversible tank top, shorts, stickers, lunch Saturday and Sunday, coach photos and personal written feedback',
        'Room and board option includes Friday/Saturday accommodation and six meals on site',
        'Transportation guidance: Chula Vista Olympic Training Center is about 35 minutes from San Diego International Airport',
        'Itinerary includes Friday registration and panel talks, Saturday skills/speed/game fundamentals and Sunday advanced sevens tactics/game simulation',
        'Camp awards and an autograph opportunity close the Sunday schedule'
      ],
      sourceLinks: [
        {
          label: 'The Olympic Experience event page',
          href: links.olympicExperience,
          note: 'Camp page with coaches, registration inclusions and itinerary'
        },
        {
          label: 'Reserve a Spot',
          href: links.campCheckout,
          note: 'Camp checkout and reservation flow'
        },
        {
          label: 'Olympic Training Center',
          href: 'https://maps.app.goo.gl/',
          note: 'Camp guide links to the Chula Vista venue map'
        }
      ],
      mediaLinks: [
        {
          label: 'Photos from past camps',
          href: links.olympicExperience,
          note: 'Event page includes camp photo/video sections'
        },
        {
          label: '@LIT7sUSA Instagram',
          href: links.instagramUsa,
          note: 'Camp updates and behind-the-scenes media'
        },
        {
          label: '@LIT7s Instagram',
          href: links.instagram,
          note: 'Main LIT7s updates'
        }
      ],
      winners: [
        {
          title: 'Camp awards',
          items: ['LIT7s Players of the Camp Awards are part of the Sunday close'],
          sourceHref: links.olympicExperience
        }
      ],
      articles: []
    },
    pastEvents: [
      {
        slug: '2026',
        year: '2026',
        title: 'The Olympic Experience 2026',
        date: '27 February - 1 March 2026',
        location: 'Olympic Training Center, Chula Vista',
        summary: 'Three-day LIT Rugby 7s camp at the home of USA Rugby 7s.',
        details: [
          'Three-day rugby 7s camp at the Olympic Training Center in Chula Vista',
          'Camp is built around living and training like an Olympian at the home of the USA 7s National Team',
          'Player groups include adult men, adult women, youth boys and youth girls ages 12+; not for rugby beginners',
          'Registration inclusions list LIT7s gear, lunch Saturday and Sunday, coach photos and personal written feedback',
          'Itinerary includes Friday registration and panel talks, Saturday skills/speed/game fundamentals and Sunday advanced sevens tactics/game simulation'
        ],
        sourceLinks: [
          {
            label: 'The Olympic Experience event page',
            href: links.olympicExperience,
            note: 'Camp page with dates, coaches, itinerary and registration inclusions'
          },
          {
            label: 'Reserve a Spot',
            href: links.campCheckout,
            note: 'Camp checkout and reservation flow'
          },
          {
            label: 'Olympic Training Center map',
            href: 'https://maps.app.goo.gl/',
            note: 'Venue map link referenced from the camp guide'
          }
        ],
        mediaLinks: [
          {
            label: 'Photos from past camps',
            href: links.olympicExperience,
            note: 'Event page includes photo and video sections'
          },
          {
            label: '@LIT7sUSA Instagram',
            href: links.instagramUsa,
            note: 'USA camp updates and behind-the-scenes media'
          },
          {
            label: '@LIT7s Instagram',
            href: links.instagram,
            note: 'Main LIT7s updates'
          }
        ],
        winners: [
          {
            title: 'Camp awards',
            items: ['LIT7s Players of the Camp Awards are part of the Sunday close'],
            sourceHref: links.olympicExperience
          }
        ],
        articles: []
      },
      {
        slug: 'usa-camp-pathway',
        year: '2025',
        title: 'LIT7s USA camp pathway',
        date: 'Previous USA camp cycle',
        location: 'United States',
        summary: 'Earlier LIT7s USA player development camp activity.',
        details: [
          'Event history for the broader LIT7s USA camp pathway before the 2026 Olympic Experience listing',
          'USA camp pages establish the player development format, coach-feedback model and media approach',
          'Media for prior camp cycles is centralized through the LIT7s USA Instagram and LIT7s video/social channels',
          'Camp pages focus on player development, awards and coach feedback rather than tournament brackets'
        ],
        sourceLinks: [
          {
            label: 'The Olympic Experience event page',
            href: links.olympicExperience,
            note: 'Current Chula Vista camp page'
          },
          {
            label: 'The IMG Experience event page',
            href: links.imgExperience,
            note: 'Bradenton camp page showing the same LIT Rugby 7s camp format'
          },
          {
            label: 'Reserve a Spot',
            href: links.campCheckout,
            note: 'Camp checkout and reservation flow'
          }
        ],
        mediaLinks: [
          {
            label: '@LIT7sUSA Instagram',
            href: links.instagramUsa,
            note: 'USA camp pathway media and updates'
          },
          {
            label: '@LIT7s Instagram',
            href: links.instagram,
            note: 'Main LIT7s social channel'
          },
          {
            label: 'LIT7s video collection',
            href: links.lit7sVideoCollection,
            note: 'Video library for LIT7s content'
          }
        ],
        winners: [
          {
            title: 'Camp awards',
            items: ['Camp pathway pages use player awards and coach feedback rather than tournament winners'],
            sourceHref: links.olympicExperience
          }
        ],
        articles: []
      }
    ],
    ctas: [
      { label: 'Reserve Camp Spot', href: links.campCheckout, primary: true },
      { label: 'Player Application', href: links.playerApplication }
    ],
    accent: 'green'
  },
  {
    slug: 'the-img-experience',
    title: 'The IMG Experience',
    type: 'Camp',
    date: '14-16 November 2025; next date TBC',
    location: 'IMG Academy, Bradenton',
    summary:
      'A high-performance IMG Academy camp format for players 13+ through adult divisions. The next camp date is pending.',
    image: assetPath('assets/hero-rugby.jpeg'),
    detailPage: {
      eyebrow: 'USA Camp',
      overview:
        'The IMG Experience is the high-performance LIT Rugby 7s camp format hosted at IMG Academy in Bradenton.',
      upcomingTitle: 'Next IMG Experience camp',
      details: [
        'Next camp date: TBC',
        'Previous confirmed camp: 14-16 November 2025',
        'Venue: IMG Academy, Bradenton',
        'Three-day rugby 7s camp at IMG Academy for players 13+ through adult divisions; not for rugby beginners',
        'Registration includes reversible tank top, shorts, stickers, Saturday/Sunday lunch, photo album surprise and personal written coach feedback',
        'Coach group includes Perry Baker, Naya Tapper, Kelly Griffin, JK Anderson, Irene Gardner, Josh Schnell and Ellaine Gelman',
        'Accommodation options include Academy Park Villas and Legacy Hotel after registration',
        'IMG is about 15 minutes from Sarasota-Bradenton International Airport',
        'Itinerary includes Friday registration and panel talks, Saturday skills/speed/game fundamentals and Sunday advanced sevens tactics/game simulation',
        'IMG Academy is described as a 600-acre campus with athlete-focused facilities'
      ],
      sourceLinks: [
        {
          label: 'The IMG Experience event page',
          href: links.imgExperience,
          note: 'IMG camp page with coaches, itinerary and registration inclusions'
        },
        {
          label: 'Reserve a Spot',
          href: links.campCheckout,
          note: 'Camp checkout and reservation flow'
        },
        {
          label: 'IMG Academy',
          href: 'https://www.imgacademy.com/',
          note: 'IMG Academy venue site'
        }
      ],
      mediaLinks: [
        {
          label: 'Photos from past IMG camps',
          href: links.imgExperience,
          note: 'Event page includes photos from past camps and camp videos'
        },
        {
          label: '@LIT7sUSA Instagram',
          href: links.instagramUsa,
          note: 'USA camp updates and past camp media'
        },
        {
          label: 'LIT7s video collection',
          href: links.lit7sVideoCollection,
          note: 'Video library for LIT7s content'
        }
      ],
      winners: [
        {
          title: 'Camp awards',
          items: ['Camp awards are included in the Sunday Q&A / closing schedule'],
          sourceHref: links.imgExperience
        }
      ],
      articles: []
    },
    pastEvents: [
      {
        slug: '2025',
        year: '2025',
        title: 'The IMG Experience 2025',
        date: '14-16 November 2025',
        location: 'IMG Academy, Bradenton',
        summary: 'Previous LIT Rugby 7s camp at IMG Academy.',
        details: [
          'Three-day LIT Rugby 7s camp at IMG Academy for players 13+ through adult divisions',
          'The camp guide lists registration inclusions: reversible tank top, shorts, stickers, Saturday/Sunday lunch, photo album surprise and written coach feedback',
          'Coach group includes Perry Baker, Naya Tapper, Kelly Griffin, JK Anderson, Irene Gardner, Josh Schnell and Ellaine Gelman',
          'Itinerary includes Friday registration and panel talks, Saturday skill blocks and Sunday advanced sevens tactics/game simulation',
          'Accommodation options are referenced after registration through Academy Park Villas and Legacy Hotel'
        ],
        sourceLinks: [
          {
            label: 'The IMG Experience event page',
            href: links.imgExperience,
            note: 'IMG camp page with coaches, itinerary and registration inclusions'
          },
          {
            label: 'Reserve a Spot',
            href: links.campCheckout,
            note: 'Camp checkout and reservation flow'
          },
          {
            label: 'IMG Academy',
            href: 'https://www.imgacademy.com/',
            note: 'IMG Academy venue site'
          }
        ],
        mediaLinks: [
          {
            label: 'Photos from past IMG camps',
            href: links.imgExperience,
            note: 'Event page includes photos from past camps and camp videos'
          },
          {
            label: '@LIT7sUSA Instagram',
            href: links.instagramUsa,
            note: 'USA camp updates and past camp media'
          },
          {
            label: 'LIT7s video collection',
            href: links.lit7sVideoCollection,
            note: 'Video library for LIT7s content'
          }
        ],
        winners: [
          {
            title: 'Camp awards',
            items: ['Camp awards are included in the Sunday Q&A / closing schedule'],
            sourceHref: links.imgExperience
          }
        ],
        articles: []
      },
      {
        slug: 'usa-camp-development',
        year: '2024',
        title: 'LIT7s USA camp development',
        date: 'Previous camp activity',
        location: 'United States',
        summary: 'Earlier USA camp programming connected to the LIT7s player pathway.',
        details: [
          'Event history for earlier USA camp programming connected to the LIT7s player pathway',
          'IMG and Olympic camp pages define the current camp format, coach feedback, gear inclusions and photo/video approach',
          'Media for previous camp activity is routed through the LIT7s USA Instagram, main LIT7s Instagram and LIT7s YouTube',
          'Camp pages focus on player development, awards and coach feedback rather than tournament brackets'
        ],
        sourceLinks: [
          {
            label: 'The IMG Experience event page',
            href: links.imgExperience,
            note: 'IMG Academy camp page'
          },
          {
            label: 'The Olympic Experience event page',
            href: links.olympicExperience,
            note: 'Chula Vista camp page'
          },
          {
            label: 'Reserve a Spot',
            href: links.campCheckout,
            note: 'Camp checkout and reservation flow'
          }
        ],
        mediaLinks: [
          {
            label: '@LIT7sUSA Instagram',
            href: links.instagramUsa,
            note: 'USA camp media and updates'
          },
          {
            label: '@LIT7s Instagram',
            href: links.instagram,
            note: 'Main LIT7s social channel'
          },
          {
            label: 'LIT7s video collection',
            href: links.lit7sVideoCollection,
            note: 'Video library for LIT7s content'
          }
        ],
        winners: [
          {
            title: 'Camp awards',
            items: ['Camp development pages use player awards and written feedback rather than tournament winners'],
            sourceHref: links.imgExperience
          }
        ],
        articles: []
      }
    ],
    ctas: [
      { label: 'Reserve Camp Spot', href: links.campCheckout, primary: true },
      { label: 'Player Application', href: links.playerApplication }
    ],
    accent: 'green'
  }
];

export const calendarEvents: CalendarEvent[] = [
  {
    title: 'The IMG Experience',
    date: '14-16 November 2025',
    month: 'Nov',
    day: '14-16',
    location: 'IMG Academy, Bradenton',
    category: 'USA Camp',
    detail: 'Previous IMG Academy camp format; next IMG camp date is pending.',
    status: 'Previous camp',
    accent: 'green',
    href: '#event/the-img-experience'
  },
  {
    title: 'The Olympic Experience',
    date: '27 February - 1 March 2026',
    month: 'Feb-Mar',
    day: '27-1',
    location: 'Olympic Training Center, Chula Vista',
    category: 'USA Camp',
    detail: 'Three-day LIT Rugby 7s camp at the home of USA Rugby 7s.',
    status: 'Completed',
    accent: 'green',
    href: '#event/the-olympic-experience'
  },
  {
    title: 'Manor 7s',
    date: '9 May 2026',
    month: 'May',
    day: '9',
    location: 'Eton Manor RFC',
    category: 'Super Sevens Round',
    detail: 'Opening 2026 Super Sevens Series round.',
    status: 'Completed',
    accent: 'green',
    href: '#event/lit-super-sevens-series-2026'
  },
  {
    title: 'Oxford 7s',
    date: '16 May 2026',
    month: 'May',
    day: '16',
    location: 'Oxford Quins RFC',
    category: 'Super Sevens Round',
    detail: 'Second UK series stop for Elite, Open and Social teams.',
    status: 'Completed',
    accent: 'green',
    href: '#event/lit-super-sevens-series-2026'
  },
  {
    title: 'Hertford 7s',
    date: '13 June 2026',
    month: 'Jun',
    day: '13',
    location: 'Hertford RFC',
    category: 'Super Sevens Round',
    detail: 'Mid-series Hertford round.',
    status: 'Completed',
    accent: 'green',
    href: '#event/lit-super-sevens-series-2026'
  },
  {
    title: 'National Pub 7s',
    date: '27 June 2026',
    month: 'Jun',
    day: '27',
    location: 'Harpenden RFC',
    category: 'Super Sevens Round',
    detail: 'Fourth round before the LIT7s finale.',
    status: 'Completed',
    accent: 'green',
    href: '#event/lit-super-sevens-series-2026'
  },
  {
    title: 'LIT7s London',
    date: '18 July 2026',
    month: 'Jul',
    day: '18',
    location: 'Wasps FC, London',
    category: 'Series Finale',
    detail: 'The 14th annual LIT7s and UK series finale.',
    status: 'Upcoming',
    accent: 'green',
    href: '#event/lit7s-london'
  },
  {
    title: 'LIT Florida International 7s',
    date: '28 November 2026',
    month: 'Nov',
    day: '28',
    location: 'Premier Sports Campus, Bradenton',
    category: 'USA Tournament',
    detail: 'Adult, university and youth rugby 7s tournament in Florida.',
    status: 'Upcoming',
    accent: 'usa',
    href: '#event/lit-florida-international-7s'
  },
  {
    title: 'Next LIT7s USA Camp',
    date: 'Date TBC',
    month: 'TBC',
    day: 'Camp',
    location: 'United States',
    category: 'USA Camp',
    detail: '@lit7susa currently lists the next camp date as TBC.',
    status: 'Date pending',
    accent: 'green',
    href: '#event/the-img-experience'
  }
];

export const visualCalendarMonths: VisualCalendarMonth[] = [
  {
    month: 'May',
    span: 'Series opening',
    events: [
      {
        day: '9',
        title: 'Manor 7s',
        category: 'Super Sevens',
        status: 'Round 1',
        accent: 'green',
        href: '#event/lit-super-sevens-series-2026'
      },
      {
        day: '16',
        title: 'Oxford 7s',
        category: 'Super Sevens',
        status: 'Round 2',
        accent: 'green',
        href: '#event/lit-super-sevens-series-2026'
      }
    ]
  },
  {
    month: 'June',
    span: 'Mid-series',
    events: [
      {
        day: '13',
        title: 'Hertford 7s',
        category: 'Super Sevens',
        status: 'Round 3',
        accent: 'green',
        href: '#event/lit-super-sevens-series-2026'
      },
      {
        day: '27',
        title: 'National Pub 7s',
        category: 'Super Sevens',
        status: 'Round 4',
        accent: 'green',
        href: '#event/lit-super-sevens-series-2026'
      }
    ]
  },
  {
    month: 'July',
    span: 'Finale',
    events: [
      {
        day: '18',
        title: 'LIT7s London',
        category: 'Finale',
        status: 'Tickets open',
        accent: 'green',
        href: '#event/lit7s-london'
      }
    ]
  },
  {
    month: 'November',
    span: 'USA',
    events: [
      {
        day: '28',
        title: 'LIT Florida International 7s',
        category: 'USA Tournament',
        status: 'Team entry open',
        accent: 'usa',
        href: '#event/lit-florida-international-7s'
      }
    ]
  },
  {
    month: 'TBC',
    span: 'USA camps',
    events: [
      {
        day: 'Camp',
        title: 'Next LIT7s USA Camp',
        category: 'USA Camp',
        status: 'Date pending',
        accent: 'green',
        href: '#event/the-img-experience'
      }
    ]
  }
];

export const proofPoints: ProofPoint[] = [
  {
    icon: CalendarDays,
    title: '13+ years of LIT7s tournaments',
    copy: 'A long-running rugby 7s platform trusted by teams, coaches and fans.'
  },
  {
    icon: Trophy,
    title: "Europe's largest rugby 7s series",
    copy: 'Elite, Open and Social teams competing across the UK.'
  },
  {
    icon: Globe2,
    title: 'USA camps and Florida tournament',
    copy: 'LIT7s USA brings camps, player development and tournament pathways stateside.',
    accent: 'usa'
  },
  {
    icon: Medal,
    title: 'Olympians and international players',
    copy: 'Coaching and event leadership connected to the highest levels of rugby 7s.'
  }
];

export const socials = [
  {
    handle: '@lit7s',
    followers: '16.8k',
    href: links.instagram,
    label: 'Main LIT7s network'
  },
  {
    handle: '@lit7susa',
    followers: '5.3k',
    href: links.instagramUsa,
    label: 'USA camps and tournament updates',
    accent: 'usa' as EventAccent
  },
  {
    handle: '@supersevensseriesuk',
    followers: '6.1k',
    href: links.instagramSeries,
    label: 'UK Super Sevens Series'
  }
];

export const coaches = [
  { name: 'Perry Baker', detail: 'Head Coach, 3x Olympian', image: assetPath('assets/coach-perry.jpeg') },
  { name: 'Naya Tapper', detail: 'Olympic bronze medalist', image: assetPath('assets/coach-naya.jpeg') },
  { name: 'Carlin Isles', detail: 'USA 7s Olympian', image: assetPath('assets/coach-perry.jpeg') },
  { name: 'Kelly Griffin', detail: 'Olympian and pathways coach', image: assetPath('assets/coach-kelly.jpeg') },
  { name: 'JK Anderson', detail: 'USA Falcons and PR7s coach', image: assetPath('assets/coach-jk.jpeg') },
  { name: 'Irene Gardner', detail: 'USA 7s international', image: assetPath('assets/coach-naya.jpeg') },
  { name: 'Josh Schnell', detail: 'Olympic performance leader', image: assetPath('assets/coach-jk.jpeg') },
  { name: 'Ellaine Gelman', detail: 'LIT7s CEO and Director of Rugby', image: assetPath('assets/coach-kelly.jpeg') }
];

export const audienceCards = [
  {
    icon: UsersRound,
    title: 'Elite to Social',
    copy: 'A calendar built for international sides, club teams, university squads and festival players.'
  },
  {
    icon: Radio,
    title: 'Media Ready',
    copy: 'Livestreams, social presenters, photographers and content built around the event day.'
  },
  {
    icon: Ticket,
    title: 'Fans Welcome',
    copy: 'Spectator tickets, VIP moments, food, bars and tournament-day energy in one place.'
  },
  {
    icon: Contact,
    title: 'Partner Paths',
    copy: 'Sponsor, trading, recruiting and ambassador opportunities connected to the full network.'
  }
];
