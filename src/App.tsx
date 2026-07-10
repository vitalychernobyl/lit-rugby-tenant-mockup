import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowRight,
  CalendarDays,
  ChevronRight,
  ClipboardList,
  FileText,
  Images,
  Instagram,
  Link2,
  MapPin,
  Menu,
  Newspaper,
  PlayCircle,
  Ticket,
  Trophy,
  X,
  Youtube
} from 'lucide-react';
import {
  audienceCards,
  articlePages,
  brand,
  calendarEvents,
  coaches,
  contentPages,
  events,
  faqItems,
  featuredRail,
  guideCollections,
  links,
  navItems,
  proofPoints,
  socials,
  visualCalendarMonths,
  type ArticlePage,
  type CalendarEvent,
  type ContentPage,
  type ContentPageSection,
  type EventArticle,
  type EventLink,
  type EventType,
  type GalleryItem,
  type PastEvent,
  type SiteEvent,
  type WinnerGroup
} from './data/siteContent';
import './styles.css';

const filters: Array<'All' | EventType> = ['All', 'Tournament', 'Camp', 'Series'];

interface SelectedRoute {
  eventSlug?: string;
  pastSlug?: string;
  pageSlug?: string;
  articleSlug?: string;
}

interface SelectedPastEventRoute {
  eventSlug: string;
  pastSlug: string;
}

type ArticleMediaFit = 'cover' | 'contain';
type ArticlePageWithMediaFit = ArticlePage & { mediaFit?: ArticleMediaFit };

const siteOrigin = 'https://rugbymonkey.com';
const siteBasePath = import.meta.env.BASE_URL;

function getRoutePath(route: SelectedRoute) {
  if (route.eventSlug && route.pastSlug) {
    return `${siteBasePath}event/${route.eventSlug}/past/${route.pastSlug}/`;
  }

  if (route.eventSlug) {
    return `${siteBasePath}event/${route.eventSlug}/`;
  }

  if (route.pageSlug) {
    return `${siteBasePath}page/${route.pageSlug}/`;
  }

  if (route.articleSlug) {
    return `${siteBasePath}article/${route.articleSlug}/`;
  }

  return siteBasePath;
}

function getPublicHref(href: string) {
  const route = getRouteFromHref(href);
  return route ? getRoutePath(route) : href;
}

function getRouteFromHref(href: string): SelectedRoute | undefined {
  const hrefEventMatch = href.match(/^#event\/([^/]+)(?:\/past\/([^/]+))?$/);
  const hrefPageMatch = href.match(/^#page\/([^/]+)$/);
  const hrefArticleMatch = href.match(/^#article\/([^/]+)$/);

  if (!hrefEventMatch && !hrefPageMatch && !hrefArticleMatch) {
    return undefined;
  }

  return {
    eventSlug: hrefEventMatch?.[1],
    pastSlug: hrefEventMatch?.[2],
    pageSlug: hrefPageMatch?.[1],
    articleSlug: hrefArticleMatch?.[1]
  };
}

function getRouteFromLocation(): SelectedRoute {
  const hashRoute = getRouteFromHref(window.location.hash);

  if (hashRoute) {
    return hashRoute;
  }

  if (window.location.hash) {
    return {};
  }

  const basePath = siteBasePath.replace(/^\/+|\/+$/g, '');
  const pathParts = window.location.pathname.replace(/^\/+|\/+$/g, '').split('/').filter(Boolean);

  if (basePath && pathParts[0] === basePath) {
    pathParts.shift();
  }

  if (pathParts[0] === 'event' && pathParts[1]) {
    return {
      eventSlug: pathParts[1],
      pastSlug: pathParts[2] === 'past' ? pathParts[3] : undefined
    };
  }

  if (pathParts[0] === 'page' && pathParts[1]) {
    return { pageSlug: pathParts[1] };
  }

  if (pathParts[0] === 'article' && pathParts[1]) {
    return { articleSlug: pathParts[1] };
  }

  return pathParts.length > 0 ? { pageSlug: '__unavailable__' } : {};
}

function normalizeRouteUrl() {
  const hashRoute = getRouteFromHref(window.location.hash);

  if (hashRoute) {
    window.history.replaceState(null, '', getRoutePath(hashRoute));
    return;
  }

  if (window.location.hash && window.location.pathname !== siteBasePath) {
    window.history.replaceState(null, '', `${siteBasePath}${window.location.hash}`);
  }
}

function setMetaContent(selector: string, content: string) {
  let element = document.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    const attributeMatch = selector.match(/^meta\[(name|property)="([^"]+)"\]$/);

    if (!attributeMatch) {
      return;
    }

    element = document.createElement('meta');
    element.setAttribute(attributeMatch[1], attributeMatch[2]);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

function getIsoDate(date: string) {
  const monthNumbers: Record<string, string> = {
    January: '01',
    February: '02',
    March: '03',
    April: '04',
    May: '05',
    June: '06',
    July: '07',
    August: '08',
    September: '09',
    October: '10',
    November: '11',
    December: '12'
  };
  const match = date.match(/^(\d{1,2}) ([A-Za-z]+) (\d{4})$/);

  if (!match || !monthNumbers[match[2]]) {
    return undefined;
  }

  return `${match[3]}-${monthNumbers[match[2]]}-${match[1].padStart(2, '0')}`;
}

function getCalendarEventEndTimestamp(date: string) {
  const monthNumbers: Record<string, number> = {
    January: 0,
    February: 1,
    March: 2,
    April: 3,
    May: 4,
    June: 5,
    July: 6,
    August: 7,
    September: 8,
    October: 9,
    November: 10,
    December: 11
  };
  const year = date.match(/\b(20\d{2})\b/)?.[1];
  const monthMatches = [
    ...date.matchAll(
      new RegExp(`\\b(${Object.keys(monthNumbers).join('|')})\\b`, 'gi')
    )
  ];
  const finalMonth = monthMatches[monthMatches.length - 1];

  if (!year || !finalMonth || finalMonth.index === undefined) {
    return undefined;
  }

  const dayMatches = [...date.slice(0, finalMonth.index).matchAll(/\b(\d{1,2})\b/g)];
  const finalDay = dayMatches[dayMatches.length - 1]?.[1];

  if (!finalDay) {
    return undefined;
  }

  const normalizedMonth =
    finalMonth[1].charAt(0).toUpperCase() + finalMonth[1].slice(1).toLowerCase();

  return Date.UTC(Number(year), monthNumbers[normalizedMonth], Number(finalDay), 23, 59, 59);
}

function isPastCalendarEvent(event: CalendarEvent, referenceDate = new Date()) {
  if (/previous|completed/i.test(event.status)) {
    return true;
  }

  const eventEndTimestamp = getCalendarEventEndTimestamp(event.date);

  if (eventEndTimestamp === undefined) {
    return false;
  }

  const todayTimestamp = Date.UTC(
    referenceDate.getFullYear(),
    referenceDate.getMonth(),
    referenceDate.getDate()
  );

  return eventEndTimestamp < todayTimestamp;
}

function getArticleMediaFit(article: ArticlePage): ArticleMediaFit {
  const explicitFit = (article as ArticlePageWithMediaFit).mediaFit;

  if (explicitFit === 'contain' || explicitFit === 'cover') {
    return explicitFit;
  }

  const imageParts = article.image.split('/');
  const filename = imageParts[imageParts.length - 1]?.toLowerCase() ?? '';
  return /(artwork|charity|flyer|graphic|guide|logo|poster)/.test(filename) ? 'contain' : 'cover';
}

function getEventSlugFromHref(href: string) {
  const match = href.match(/^#event\/([^/]+)(?:\/past\/([^/]+))?$/);
  return match?.[1];
}

function scrollToPageTop() {
  if (navigator.userAgent.toLowerCase().includes('jsdom')) {
    return;
  }

  const previousScrollBehavior = document.documentElement.style.scrollBehavior;

  try {
    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  } catch {
    // Some embedded browser environments may block scrolling.
  } finally {
    document.documentElement.style.scrollBehavior = previousScrollBehavior;
  }
}

function shouldUseNativeNavigation(event: React.MouseEvent<HTMLAnchorElement>) {
  const isAuxiliaryClick = typeof event.button === 'number' && event.button !== 0;

  return (
    event.defaultPrevented ||
    isAuxiliaryClick ||
    event.metaKey ||
    event.altKey ||
    event.ctrlKey ||
    event.shiftKey
  );
}

function navigateToEventRoute(slug: string, onSelectEvent: (slug: string) => void) {
  window.history.pushState(null, '', getRoutePath({ eventSlug: slug }));
  onSelectEvent(slug);
  scrollToPageTop();
}

function navigateToContentPageRoute(slug: string, onSelectPage: (slug: string) => void) {
  window.history.pushState(null, '', getRoutePath({ pageSlug: slug }));
  onSelectPage(slug);
  scrollToPageTop();
}

function navigateToArticleRoute(slug: string, onSelectArticle: (slug: string) => void) {
  window.history.pushState(null, '', getRoutePath({ articleSlug: slug }));
  onSelectArticle(slug);
  scrollToPageTop();
}

function navigateToPastEventRoute({
  eventSlug,
  pastSlug,
  onSelectRoute
}: {
  eventSlug: string;
  pastSlug: string;
  onSelectRoute: (route: SelectedPastEventRoute) => void;
}) {
  window.history.pushState(null, '', getRoutePath({ eventSlug, pastSlug }));
  onSelectRoute({ eventSlug, pastSlug });
  scrollToPageTop();
}

function Logo() {
  return (
    <a className="logo" href="#top" aria-label="LIT7s home">
      <span>LIT</span>
      <strong>7</strong>
      <span>s</span>
    </a>
  );
}

function ExternalLink({
  href,
  children,
  className = ''
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const opensExternally = /^https?:\/\//.test(href);
  const localRoute = getRouteFromHref(href);
  const publicHref = getPublicHref(href);

  return (
    <a
      className={className}
      href={publicHref}
      target={opensExternally ? '_blank' : undefined}
      rel={opensExternally ? 'noopener noreferrer' : undefined}
      onClick={(event) => {
        if (!localRoute || shouldUseNativeNavigation(event)) {
          return;
        }

        event.preventDefault();
        window.history.pushState(null, '', publicHref);
        window.dispatchEvent(new PopStateEvent('popstate'));
        scrollToPageTop();
      }}
    >
      {children}
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileNavRef = useRef<HTMLElement>(null);

  const handleMobileNavClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith('#')) {
      setOpen(false);
      return;
    }

    event.preventDefault();
    setOpen(false);
    window.history.pushState(null, '', getPublicHref(href));
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        document.getElementById(href.slice(1))?.scrollIntoView({ block: 'start' });
      });
    });
  };

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    const backgroundElements = Array.from(document.querySelectorAll('main, footer'));
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        window.requestAnimationFrame(() => menuButtonRef.current?.focus());
        return;
      }

      if (event.key !== 'Tab') {
        return;
      }

      const navLinks = Array.from(mobileNavRef.current?.querySelectorAll<HTMLElement>('a[href]') ?? []);
      const focusableElements = [menuButtonRef.current, ...navLinks].filter(
        (element): element is HTMLElement => Boolean(element)
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement?.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement?.focus();
      }
    };

    document.body.style.overflow = 'hidden';
    backgroundElements.forEach((element) => element.setAttribute('inert', ''));
    window.addEventListener('keydown', handleKeyDown);
    window.requestAnimationFrame(() => mobileNavRef.current?.querySelector<HTMLElement>('a[href]')?.focus());

    return () => {
      document.body.style.overflow = previousOverflow;
      backgroundElements.forEach((element) => element.removeAttribute('inert'));
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  return (
    <>
      <header className="site-header">
        <Logo />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={getPublicHref(item.href)}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <div className="social-quick" aria-label="Social links">
            <ExternalLink href={links.instagram} className="icon-link">
              <Instagram size={18} aria-hidden="true" />
              <span className="sr-only">Instagram</span>
            </ExternalLink>
          <ExternalLink href={links.youtube} className="icon-link">
            <Youtube size={19} aria-hidden="true" />
            <span className="sr-only">YouTube</span>
          </ExternalLink>
        </div>
          <ExternalLink href={links.spectatorTickets} className="button button-outline button-small">
            Spectator Tickets
            <Ticket size={18} aria-hidden="true" />
          </ExternalLink>
          <ExternalLink href={links.teamEntry} className="button button-primary button-small">
            Enter Team
            <ArrowRight size={18} aria-hidden="true" />
          </ExternalLink>
          <button
            ref={menuButtonRef}
            className="menu-button"
            type="button"
            data-testid="mobile-menu-toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </header>
      {open ? (
        <nav
          ref={mobileNavRef}
          id="mobile-navigation"
          className="mobile-nav"
          aria-label="Mobile navigation"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={getPublicHref(item.href)}
              onClick={(event) => handleMobileNavClick(event, item.href)}
            >
              {item.label}
            </a>
          ))}
          <ExternalLink href={links.teamEntry} className="button button-primary">
            Enter Team
            <ArrowRight size={18} aria-hidden="true" />
          </ExternalLink>
          <ExternalLink href={links.spectatorTickets} className="button button-outline">
            Spectator Tickets
            <Ticket size={18} aria-hidden="true" />
          </ExternalLink>
        </nav>
      ) : null}
    </>
  );
}

function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-media" />
      <div className="hero-content">
        <div>
          <h1 id="hero-title">London International Rugby Sevens</h1>
          <p>
            The home of LIT7s London, the LIT Super Sevens Series, USA camps, tournament media,
            spectator tickets and team entry.
          </p>
          <div className="hero-ctas">
            <a className="button button-primary" href="#events">
              View Events
              <ArrowRight size={20} aria-hidden="true" />
            </a>
            <ExternalLink href={links.teamEntry} className="button button-outline">
              Enter a Team
              <ArrowRight size={20} aria-hidden="true" />
            </ExternalLink>
            <ExternalLink href={links.spectatorTickets} className="button button-outline">
              Spectator Tickets
              <Ticket size={20} aria-hidden="true" />
            </ExternalLink>
          </div>
        </div>
      </div>
      <div className="event-rail" aria-label="Featured LIT7s dates">
        {featuredRail.map((item) => {
          const Icon = item.icon;
          return (
            <a key={item.title} className={`rail-item accent-${item.accent}`} href={getPublicHref(item.href)}>
              <Icon size={30} aria-hidden="true" />
              <span>
                <strong>{item.title}</strong>
                <small>{item.detail}</small>
              </span>
              <ChevronRight size={22} aria-hidden="true" />
            </a>
          );
        })}
      </div>
    </section>
  );
}

function EventsDirectory({ onSelectEvent }: { onSelectEvent: (slug: string) => void }) {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>('All');
  const filteredEvents = useMemo(
    () => events.filter((event) => activeFilter === 'All' || event.type === activeFilter),
    [activeFilter]
  );

  return (
    <section className="section event-directory" id="events" aria-label="Events and camps directory">
      <div className="section-heading centered">
        <h2>Choose your next LIT7s experience</h2>
        <p>One calendar for elite teams, social sides, youth players, spectators and partners.</p>
      </div>
      <div className="filter-tabs" aria-label="Event filters">
        {filters.map((filter) => (
          <button
            key={filter}
            className={activeFilter === filter ? 'active' : ''}
            type="button"
            data-filter={filter}
            onClick={() => setActiveFilter(filter)}
          >
            {filter === 'Tournament' ? 'Tournaments' : filter === 'Camp' ? 'Camps' : filter}
          </button>
        ))}
      </div>
      <div className="event-list">
        {filteredEvents.map((event) => (
          <article key={event.title} className={`event-card accent-${event.accent}`}>
            <div className="event-image">
              <img
                src={event.image}
                alt={`${event.title} rugby sevens event`}
                loading="lazy"
                decoding="async"
              />
              <div className="event-date-badge" aria-label={`Date: ${event.date}`}>
                <CalendarDays size={18} aria-hidden="true" />
                <span>{event.date}</span>
              </div>
            </div>
            <div className="event-info">
              <div className="event-type">{event.type}</div>
              <h3>{event.title}</h3>
              <p>{event.summary}</p>
              <dl>
                <div>
                  <dt>Location</dt>
                  <dd>{event.location}</dd>
                </div>
              </dl>
            </div>
            <div className="event-actions">
              <a
                className="button button-outline"
                href={getRoutePath({ eventSlug: event.slug })}
                aria-label={`View ${event.title} details`}
                onClick={(clickEvent) => {
                  if (shouldUseNativeNavigation(clickEvent)) {
                    return;
                  }

                  clickEvent.preventDefault();
                  navigateToEventRoute(event.slug, onSelectEvent);
                }}
              >
                View details
                <ArrowRight size={18} aria-hidden="true" />
              </a>
              {event.ctas.map((cta) => (
                <ExternalLink
                  key={cta.label}
                  href={cta.href}
                  className={cta.primary ? 'button button-primary' : 'button button-outline'}
                >
                  {cta.label}
                  <ArrowRight size={18} aria-hidden="true" />
                </ExternalLink>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function CalendarEventCard({
  event,
  onSelectEvent
}: {
  event: CalendarEvent;
  onSelectEvent: (slug: string) => void;
}) {
  const eventSlug = getEventSlugFromHref(event.href);

  return (
    <a
      className={`calendar-card accent-${event.accent}`}
      href={getPublicHref(event.href)}
      onClick={(clickEvent) => {
        if (!eventSlug || shouldUseNativeNavigation(clickEvent)) {
          return;
        }

        clickEvent.preventDefault();
        navigateToEventRoute(eventSlug, onSelectEvent);
      }}
    >
      <div className="calendar-date">
        <span>{event.month}</span>
        <strong>{event.day}</strong>
      </div>
      <div className="calendar-copy">
        <div className="event-type">{event.category}</div>
        <h3>{event.title}</h3>
        <p>{event.detail}</p>
        <div className="calendar-meta">
          <span>
            <CalendarDays size={17} aria-hidden="true" />
            {event.date}
          </span>
          <span>
            <MapPin size={17} aria-hidden="true" />
            {event.location}
          </span>
        </div>
      </div>
      <div className="calendar-status">
        {event.status}
        <ArrowRight size={16} aria-hidden="true" />
      </div>
    </a>
  );
}

function EventCalendar({ onSelectEvent }: { onSelectEvent: (slug: string) => void }) {
  const currentEvents = calendarEvents.filter((event) => !isPastCalendarEvent(event));
  const pastEvents = calendarEvents.filter((event) => isPastCalendarEvent(event));

  return (
    <section className="section calendar-section" id="calendar" aria-label="Calendar of LIT7s events">
      <div className="section-heading">
        <h2>Calendar of events</h2>
        <p>
          Confirmed LIT Super Sevens Series, LIT7s, USA tournament and camp dates in one place.
        </p>
      </div>
      <div className="visual-calendar" aria-label="Visual event calendar">
        {visualCalendarMonths.map((month) => (
          <section key={month.month} className="visual-month">
            <div className="visual-month-heading">
              <strong>{month.month}</strong>
              <span>{month.span}</span>
            </div>
            <div className="visual-month-events">
              {month.events.map((calendarEvent) => {
                const eventSlug = getEventSlugFromHref(calendarEvent.href);

                return (
                  <a
                    key={`${month.month}-${calendarEvent.title}`}
                    className={`visual-event accent-${calendarEvent.accent}`}
                    href={getPublicHref(calendarEvent.href)}
                    onClick={(clickEvent) => {
                      if (!eventSlug || shouldUseNativeNavigation(clickEvent)) {
                        return;
                      }

                      clickEvent.preventDefault();
                      navigateToEventRoute(eventSlug, onSelectEvent);
                    }}
                  >
                    <span className="visual-day">{calendarEvent.day}</span>
                    <span>
                      <strong>{calendarEvent.title}</strong>
                      <small>
                        {calendarEvent.category} · {calendarEvent.status}
                      </small>
                    </span>
                  </a>
                );
              })}
            </div>
          </section>
        ))}
      </div>
      <div className="calendar-groups" aria-label="Detailed event calendar">
        <section className="calendar-event-group calendar-current-events" aria-labelledby="current-events-title">
          <h3 id="current-events-title">Upcoming and current events</h3>
          <div className="calendar-list">
            {currentEvents.map((event) => (
              <CalendarEventCard
                key={`${event.title}-${event.date}`}
                event={event}
                onSelectEvent={onSelectEvent}
              />
            ))}
          </div>
        </section>
        {pastEvents.length ? (
          <details className="calendar-past-disclosure">
            <summary>
              Past events <span>({pastEvents.length})</span>
            </summary>
            <div className="calendar-list calendar-past-events">
              {pastEvents.map((event) => (
                <CalendarEventCard
                  key={`${event.title}-${event.date}`}
                  event={event}
                  onSelectEvent={onSelectEvent}
                />
              ))}
            </div>
          </details>
        ) : null}
      </div>
    </section>
  );
}

function GuidesSection({ onSelectPage }: { onSelectPage: (slug: string) => void }) {
  const pagesBySlug = new Map(contentPages.map((page) => [page.slug, page]));

  return (
    <section className="section guides-section" id="guides" aria-label="LIT7s guide pages">
      <div className="section-heading">
        <h2>Tournament information</h2>
        <p>
          Everything teams, spectators, partners and media need for LIT7s London, the Super Sevens
          Series and LIT7s USA.
        </p>
      </div>
      <div className="guide-collection-grid">
        {guideCollections.map((collection) => {
          const Icon = collection.icon;
          return (
            <article key={collection.title} className="guide-collection">
              <div className="guide-collection-heading">
                <Icon size={30} aria-hidden="true" />
                <div>
                  <h3>{collection.title}</h3>
                  <p>{collection.summary}</p>
                </div>
              </div>
              <div className="guide-link-list">
                {collection.pageSlugs.map((slug) => {
                  const page = pagesBySlug.get(slug);

                  if (!page) {
                    return null;
                  }

                  return (
                    <a
                      key={page.slug}
                      href={getRoutePath({ pageSlug: page.slug })}
                      className="guide-link"
                      onClick={(clickEvent) => {
                        if (shouldUseNativeNavigation(clickEvent)) {
                          return;
                        }

                        clickEvent.preventDefault();
                        navigateToContentPageRoute(page.slug, onSelectPage);
                      }}
                    >
                      <span>
                        <strong>{page.title}</strong>
                        <small>{page.category}</small>
                      </span>
                      <ArrowRight size={18} aria-hidden="true" />
                    </a>
                  );
                })}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function GalleryGrid({ items }: { items: GalleryItem[] }) {
  if (!items.length) {
    return null;
  }

  return (
    <div className="content-gallery" aria-label="Page gallery">
      {items.map((item) => {
        const card = (
          <>
            <img
              src={item.image}
              alt={`${item.title}: ${item.caption}`}
              loading="lazy"
              decoding="async"
            />
            <span className="gallery-label">
              <PlayCircle size={15} aria-hidden="true" />
              {item.category}
            </span>
            <div>
              <h3>{item.title}</h3>
              <p>{item.caption}</p>
            </div>
          </>
        );

        return item.href ? (
          <ExternalLink key={item.title} href={item.href} className="gallery-card">
            {card}
          </ExternalLink>
        ) : (
          <article key={item.title} className="gallery-card">
            {card}
          </article>
        );
      })}
    </div>
  );
}

function getSectionAnchor(pageSlug: string, heading: string) {
  return `${pageSlug}-${heading.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
}

function ContentPageSectionBlock({
  pageSlug,
  section
}: {
  pageSlug: string;
  section: ContentPageSection;
}) {
  return (
    <article className="content-panel" id={getSectionAnchor(pageSlug, section.heading)}>
      <div className="detail-panel-heading">
        <ClipboardList size={26} aria-hidden="true" />
        <span>{section.heading}</span>
      </div>
      {section.copy?.map((paragraph, index) => (
        <p key={`${section.heading}-copy-${index}`} className="content-copy">
          {paragraph}
        </p>
      ))}
      {section.items ? (
        <ul className="detail-list content-list">
          {section.items.map((item, index) => (
            <li key={`${section.heading}-item-${index}`}>{item}</li>
          ))}
        </ul>
      ) : null}
      {section.cards ? (
        <div className="content-card-grid">
          {section.cards.map((card) => (
            <section key={card.title} className="content-mini-card">
              <h3>{card.title}</h3>
              <p>{card.copy}</p>
              {card.items ? (
                <ul>
                  {card.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>
      ) : null}
      {section.timeline ? (
        <div className="content-timeline">
          {section.timeline.map((item) => (
            <section key={`${item.time}-${item.title}`} className="timeline-item">
              <strong>{item.time}</strong>
              <div>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </div>
            </section>
          ))}
        </div>
      ) : null}
    </article>
  );
}

function ContentPageView({ page }: { page: ContentPage }) {
  return (
    <main>
      <section className={`content-page accent-${page.accent}`} aria-label={`Content page for ${page.title}`}>
        <div className="content-page-hero">
          <div className="content-page-media">
            <img src={page.image} alt={`${page.title} featured image`} decoding="async" fetchPriority="high" />
          </div>
          <div className="content-page-intro">
            <a className="detail-back" href="#guides">
              <ChevronRight size={18} aria-hidden="true" />
              Back to guides
            </a>
            <div className="event-type">{page.category}</div>
            <h1>{page.title}</h1>
            <p>{page.summary}</p>
            {page.ctas?.length ? (
              <div className="detail-actions">
                {page.ctas.map((cta) => (
                  <ExternalLink
                    key={cta.label}
                    href={cta.href}
                    className={cta.primary ? 'button button-primary' : 'button button-outline'}
                  >
                    {cta.label}
                    <ArrowRight size={18} aria-hidden="true" />
                  </ExternalLink>
                ))}
              </div>
            ) : null}
          </div>
        </div>
        {page.quickFacts?.length ? (
          <div className="content-facts" aria-label={`${page.title} quick facts`}>
            {page.quickFacts.map((fact) => (
              <div key={`${fact.label}-${fact.value}`}>
                <span>{fact.label}</span>
                <strong>{fact.value}</strong>
              </div>
            ))}
          </div>
        ) : null}
        <div className="content-layout">
          <div className="content-main">
            {page.sections.map((section) => (
              <ContentPageSectionBlock key={section.heading} pageSlug={page.slug} section={section} />
            ))}
          </div>
          <aside className="content-side-panel">
            <div className="detail-panel-heading">
              <FileText size={26} aria-hidden="true" />
              <span>Page index</span>
            </div>
            <nav aria-label={`${page.title} section index`}>
              {page.sections.map((section) => (
                <button
                  key={section.heading}
                  type="button"
                  onClick={() => {
                    document
                      .getElementById(getSectionAnchor(page.slug, section.heading))
                      ?.scrollIntoView({ block: 'start' });
                  }}
                >
                  {section.heading}
                </button>
              ))}
            </nav>
          </aside>
        </div>
        <GalleryGrid items={page.gallery ?? []} />
      </section>
    </main>
  );
}

function ArticleSectionNav({ article }: { article: ArticlePage }) {
  return (
    <nav aria-label={`${article.title} section index`}>
      {article.sections.map((section) => (
        <button
          key={section.heading}
          type="button"
          onClick={() => {
            document
              .getElementById(getSectionAnchor(article.slug, section.heading))
              ?.scrollIntoView({ block: 'start' });
          }}
        >
          {section.heading}
        </button>
      ))}
    </nav>
  );
}

function ArticlePageView({ article }: { article: ArticlePage }) {
  const mediaFit = getArticleMediaFit(article);

  return (
    <main>
      <section className="content-page article-page" aria-label={`Article page for ${article.title}`}>
        <div className="content-page-hero">
          <div className={`content-page-media article-page-media media-fit-${mediaFit}`}>
            <img
              className={`article-featured-image media-fit-${mediaFit}`}
              src={article.image}
              alt={`${article.title} article image`}
              decoding="async"
              fetchPriority="high"
              style={{ objectFit: mediaFit }}
            />
          </div>
          <div className="content-page-intro">
            <ExternalLink className="detail-back" href="#page/news">
              <ChevronRight size={18} aria-hidden="true" />
              Back to news
            </ExternalLink>
            <div className="event-type">{article.category}</div>
            <h1>{article.title}</h1>
            <p>{article.summary}</p>
            <div className="article-meta-line">
              <CalendarDays size={18} aria-hidden="true" />
              <span>{article.date}</span>
            </div>
            {article.ctas?.length ? (
              <div className="detail-actions">
                {article.ctas.map((cta) => (
                  <ExternalLink
                    key={cta.label}
                    href={cta.href}
                    className={cta.primary ? 'button button-primary' : 'button button-outline'}
                  >
                    {cta.label}
                    <ArrowRight size={18} aria-hidden="true" />
                  </ExternalLink>
                ))}
              </div>
            ) : null}
          </div>
        </div>
        <div className="content-layout article-content-layout">
          <aside className="content-side-panel article-section-index article-section-index-desktop">
            <div className="detail-panel-heading">
              <Newspaper size={26} aria-hidden="true" />
              <span>Article sections</span>
            </div>
            <ArticleSectionNav article={article} />
          </aside>
          <details className="content-side-panel article-section-index-mobile">
            <summary>
              <Newspaper size={22} aria-hidden="true" />
              <span>Jump to article section</span>
            </summary>
            <ArticleSectionNav article={article} />
          </details>
          <div className="content-main article-content-main">
            {article.sections.map((section) => (
              <ContentPageSectionBlock key={section.heading} pageSlug={article.slug} section={section} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function NewsSection({ onSelectArticle }: { onSelectArticle: (slug: string) => void }) {
  return (
    <section className="section news-section" id="news" aria-label="LIT7s news and articles">
      <div className="section-heading">
        <h2>News, stories and tournament updates</h2>
        <p>
          Series announcements, round reviews, rugby sevens guides and partner news from across
          LIT7s tournaments and camps.
        </p>
      </div>
      <div className="news-grid">
        {articlePages.slice(0, 6).map((article) => (
          <a
            key={article.slug}
            href={getRoutePath({ articleSlug: article.slug })}
            className="news-card"
            onClick={(clickEvent) => {
              if (shouldUseNativeNavigation(clickEvent)) {
                return;
              }

              clickEvent.preventDefault();
              navigateToArticleRoute(article.slug, onSelectArticle);
            }}
          >
            <div className="news-card-media">
              <img
                src={article.image}
                alt={`${article.title} article image`}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="news-card-copy">
              <span>{article.category}</span>
              <h3>{article.title}</h3>
              <small>{article.date}</small>
              <p>{article.summary}</p>
            </div>
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        ))}
      </div>
      <div className="section-action">
        <ExternalLink href={links.newsPage} className="button button-outline">
          View all news
          <ArrowRight size={18} aria-hidden="true" />
        </ExternalLink>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="section faq-section" aria-label="LIT7s frequently asked questions">
      <div className="section-heading">
        <h2>Quick answers</h2>
        <p>
          Key tournament, ticket, division and USA event answers for teams, spectators and search
          assistants.
        </p>
      </div>
      <div className="faq-grid">
        {faqItems.map((item) => (
          <article key={item.question} className="faq-item">
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function DetailResourceLink({
  link
}: {
  link: EventLink;
}) {
  return (
    <ExternalLink href={link.href} className="detail-resource-link">
      <span>
        <strong>{link.label}</strong>
        {link.note ? <small>{link.note}</small> : null}
      </span>
      <ArrowRight size={18} aria-hidden="true" />
    </ExternalLink>
  );
}

function DetailResourceGroup({
  title,
  links
}: {
  title: string;
  links: EventLink[];
}) {
  if (!links.length) {
    return null;
  }

  return (
    <div className="detail-resource-group">
      <h3>{title}</h3>
      <div className="detail-resource-list">
        {links.map((link) => (
          <DetailResourceLink key={`${title}-${link.label}`} link={link} />
        ))}
      </div>
    </div>
  );
}

function DetailInfoGrid({
  sourceLinks,
  mediaLinks,
  winners,
  articles
}: {
  sourceLinks: EventLink[];
  mediaLinks: EventLink[];
  winners: WinnerGroup[];
  articles: EventArticle[];
}) {
  const hasDetails =
    sourceLinks.length > 0 || mediaLinks.length > 0 || winners.length > 0 || articles.length > 0;

  if (!hasDetails) {
    return null;
  }

  return (
    <div className="detail-info-grid">
      <article className="detail-panel detail-links-panel">
        <div className="detail-panel-heading">
          <Link2 size={28} aria-hidden="true" />
          <span>Event information & media</span>
        </div>
        <DetailResourceGroup title="Tournament information" links={sourceLinks} />
        <DetailResourceGroup title="Media and galleries" links={mediaLinks} />
      </article>
      {winners.length > 0 ? (
        <article className="detail-panel">
          <div className="detail-panel-heading">
            <Images size={28} aria-hidden="true" />
            <span>Results & winners</span>
          </div>
          <div className="winner-group-list">
            {winners.map((winner) => (
              <section key={winner.title} className="winner-group">
                <h3>{winner.title}</h3>
                <ul>
                  {winner.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {winner.sourceHref ? (
                  <ExternalLink href={winner.sourceHref} className="detail-inline-link">
                    View details
                    <ArrowRight size={16} aria-hidden="true" />
                  </ExternalLink>
                ) : null}
              </section>
            ))}
          </div>
        </article>
      ) : null}
      <article className="detail-panel detail-articles-panel">
        <div className="detail-panel-heading">
          <Newspaper size={28} aria-hidden="true" />
          <span>News and articles</span>
        </div>
        {articles.length > 0 ? (
          <div className="article-list">
            {articles.map((article) => (
              <ExternalLink key={article.title} href={article.href} className="article-link">
                <span>
                  <strong>{article.title}</strong>
                  <small>{article.date}</small>
                  <p>{article.summary}</p>
                </span>
                <ArrowRight size={18} aria-hidden="true" />
              </ExternalLink>
            ))}
          </div>
        ) : (
          <p className="article-empty">
            Event updates, media and team information are listed above.
          </p>
        )}
      </article>
    </div>
  );
}

function EventDetailPage({
  event,
  onSelectPastEvent
}: {
  event: SiteEvent;
  onSelectPastEvent: (route: SelectedPastEventRoute) => void;
}) {
  const detailCtas = event.ctas.filter(
    (cta) => !(event.ticketHref && cta.href === event.ticketHref && /ticket/i.test(cta.label))
  );

  return (
    <main>
      <section
        className={`event-detail-page accent-${event.accent}`}
        aria-label={`Event detail for ${event.title}`}
      >
        <div className="detail-hero">
          <div className="detail-media">
            <img
              src={event.image}
              alt={`${event.title} rugby sevens event`}
              decoding="async"
              fetchPriority="high"
            />
            <div className="event-date-badge" aria-label={`Date: ${event.date}`}>
              <CalendarDays size={18} aria-hidden="true" />
              <span>{event.date}</span>
            </div>
          </div>
          <div className="detail-intro">
            <a className="detail-back" href="#events">
              <ChevronRight size={18} aria-hidden="true" />
              Back to events
            </a>
            <div className="event-type">{event.detailPage.eyebrow}</div>
            <h1>{event.title}</h1>
            <p>{event.detailPage.overview}</p>
            <div className="detail-actions">
              {event.ticketHref ? (
                <ExternalLink href={event.ticketHref} className="button button-primary">
                  Spectator Tickets
                  <Ticket size={18} aria-hidden="true" />
                </ExternalLink>
              ) : null}
              {detailCtas.map((cta) => (
                <ExternalLink
                  key={cta.label}
                  href={cta.href}
                  className={cta.primary && !event.ticketHref ? 'button button-primary' : 'button button-outline'}
                >
                  {cta.label}
                  <ArrowRight size={18} aria-hidden="true" />
                </ExternalLink>
              ))}
            </div>
          </div>
        </div>
        <div className="detail-grid">
          <article className="detail-panel">
            <div className="detail-panel-heading">
              <Trophy size={28} aria-hidden="true" />
              <span>Upcoming event</span>
            </div>
            <h2>{event.detailPage.upcomingTitle}</h2>
            <dl className="detail-facts">
              <div>
                <dt>Date</dt>
                <dd>{event.date}</dd>
              </div>
              <div>
                <dt>Location</dt>
                <dd>{event.location}</dd>
              </div>
            </dl>
            <ul className="detail-list">
              {event.detailPage.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </article>
          <article className="detail-panel">
            <div className="detail-panel-heading">
              <CalendarDays size={28} aria-hidden="true" />
              <span>Past years</span>
            </div>
            <div className="past-event-list">
              {event.pastEvents.map((past) => (
                <a
                  key={`${past.year}-${past.title}`}
                  className="past-event-card"
                  href={getRoutePath({ eventSlug: event.slug, pastSlug: past.slug })}
                  aria-label={`View ${past.title} page`}
                  onClick={(clickEvent) => {
                    if (shouldUseNativeNavigation(clickEvent)) {
                      return;
                    }

                    clickEvent.preventDefault();
                    navigateToPastEventRoute({
                      eventSlug: event.slug,
                      pastSlug: past.slug,
                      onSelectRoute: onSelectPastEvent
                    });
                  }}
                >
                  <strong>{past.year}</strong>
                  <div>
                    <h3>{past.title}</h3>
                    <small>
                      {past.date} · {past.location}
                    </small>
                    <p>{past.summary}</p>
                  </div>
                  <ArrowRight className="past-event-arrow" size={18} aria-hidden="true" />
                </a>
              ))}
            </div>
          </article>
        </div>
        <DetailInfoGrid
          sourceLinks={event.detailPage.sourceLinks}
          mediaLinks={event.detailPage.mediaLinks}
          winners={event.detailPage.winners}
          articles={event.detailPage.articles}
        />
      </section>
    </main>
  );
}

function PastEventPage({
  event,
  pastEvent,
  onSelectEvent
}: {
  event: SiteEvent;
  pastEvent: PastEvent;
  onSelectEvent: (slug: string) => void;
}) {
  return (
    <main>
      <section
        className={`event-detail-page accent-${event.accent}`}
        aria-label={`Past event page for ${pastEvent.title}`}
      >
        <div className="detail-hero">
          <div className="detail-media">
            <img
              src={event.image}
              alt={`${pastEvent.title} rugby sevens event`}
              decoding="async"
              fetchPriority="high"
            />
            <div className="event-date-badge" aria-label={`Date: ${pastEvent.date}`}>
              <CalendarDays size={18} aria-hidden="true" />
              <span>{pastEvent.date}</span>
            </div>
          </div>
          <div className="detail-intro">
            <a
              className="detail-back"
              href={getRoutePath({ eventSlug: event.slug })}
              onClick={(clickEvent) => {
                if (shouldUseNativeNavigation(clickEvent)) {
                  return;
                }

                clickEvent.preventDefault();
                navigateToEventRoute(event.slug, onSelectEvent);
              }}
            >
              <ChevronRight size={18} aria-hidden="true" />
              Back to {event.title}
            </a>
            <div className="event-type">Past {event.type}</div>
            <h1>{pastEvent.title}</h1>
            <p>{pastEvent.summary}</p>
            <div className="detail-actions">
              {pastEvent.sourceLinks[0] ? (
                <ExternalLink href={pastEvent.sourceLinks[0].href} className="button button-primary">
                  Event Info
                  <ArrowRight size={18} aria-hidden="true" />
                </ExternalLink>
              ) : null}
              {pastEvent.mediaLinks[0] ? (
                <ExternalLink href={pastEvent.mediaLinks[0].href} className="button button-outline">
                  Media Gallery
                  <Images size={18} aria-hidden="true" />
                </ExternalLink>
              ) : null}
            </div>
          </div>
        </div>
        <div className="detail-grid">
          <article className="detail-panel">
            <div className="detail-panel-heading">
              <Trophy size={28} aria-hidden="true" />
              <span>Event details</span>
            </div>
            <h2>{pastEvent.year} event</h2>
            <dl className="detail-facts">
              <div>
                <dt>Date</dt>
                <dd>{pastEvent.date}</dd>
              </div>
              <div>
                <dt>Location</dt>
                <dd>{pastEvent.location}</dd>
              </div>
            </dl>
            <ul className="detail-list">
              {pastEvent.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </article>
          <article className="detail-panel">
            <div className="detail-panel-heading">
              <CalendarDays size={28} aria-hidden="true" />
              <span>Event family</span>
            </div>
            <h2>{event.title}</h2>
            <p className="event-parent-copy">{event.detailPage.overview}</p>
            <a
              className="detail-inline-link"
              href={getRoutePath({ eventSlug: event.slug })}
              onClick={(clickEvent) => {
                if (shouldUseNativeNavigation(clickEvent)) {
                  return;
                }

                clickEvent.preventDefault();
                navigateToEventRoute(event.slug, onSelectEvent);
              }}
            >
              View current event
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </article>
        </div>
        <DetailInfoGrid
          sourceLinks={pastEvent.sourceLinks}
          mediaLinks={pastEvent.mediaLinks}
          winners={pastEvent.winners}
          articles={pastEvent.articles}
        />
      </section>
    </main>
  );
}

function ProgramOverview() {
  return (
    <section className="section program-overview" id="series">
      <div className="section-heading">
        <h2>One global network. Endless rugby 7s opportunities.</h2>
        <p>
          LIT7s brings the tournament-day energy of London, the competitive structure of Super
          Sevens, and the development pathway of USA camps into one clear calendar.
        </p>
      </div>
      <div className="program-grid">
        {audienceCards.map((card) => {
          const Icon = card.icon;
          return (
            <article key={card.title}>
              <Icon size={30} aria-hidden="true" />
              <h3>{card.title}</h3>
              <p>{card.copy}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function ProofSection() {
  return (
    <section className="section proof-section" id="media">
      <div className="section-heading">
        <h2>A rugby 7s network built from the touchline up</h2>
        <p>
          Explore tournament results, player pathways, media and social channels from across the
          LIT7s rugby sevens network.
        </p>
      </div>
      <div className="proof-grid">
        {proofPoints.map((point) => {
          const Icon = point.icon;
          return (
            <article key={point.title} className={point.accent === 'usa' ? 'accent-usa' : ''}>
              <Icon size={32} aria-hidden="true" />
              <h3>{point.title}</h3>
              <p>{point.copy}</p>
            </article>
          );
        })}
      </div>
      <div className="social-strip" aria-label="LIT7s Instagram channels">
        {socials.map((social) => (
          <ExternalLink
            key={social.handle}
            href={social.href}
            className={social.accent === 'usa' ? 'social-card accent-usa' : 'social-card'}
          >
            <Instagram size={24} aria-hidden="true" />
            <span>
              <strong>{social.handle}</strong>
              <small>
                {social.followers} followers · {social.label}
              </small>
            </span>
          </ExternalLink>
        ))}
      </div>
      <div className="coach-rail" id="camps" aria-label="LIT7s camp coaches and leaders">
        {coaches.map((coach) => (
          <article key={coach.name}>
            <img
              src={coach.image}
              alt={`${coach.name}, ${coach.detail}`}
              loading="lazy"
              decoding="async"
            />
            <h3>{coach.name}</h3>
            <p>{coach.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function PartnersFooter() {
  return (
    <footer className="site-footer" id="partners">
      <div className="footer-cta">
        <h2>Bring your team to the next LIT7s event</h2>
        <div>
          <ExternalLink href={links.teamEntry} className="button button-primary">
            Enter Team
            <ArrowRight size={18} aria-hidden="true" />
          </ExternalLink>
          <ExternalLink href={links.spectatorTickets} className="button button-outline">
            Spectator Tickets
            <Ticket size={18} aria-hidden="true" />
          </ExternalLink>
          <ExternalLink href={links.contact} className="button button-outline">
            Contact LIT7s
            <ArrowRight size={18} aria-hidden="true" />
          </ExternalLink>
        </div>
      </div>
      <div className="footer-bottom">
        <Logo />
        <p>{brand.line}</p>
        <nav aria-label="Footer navigation">
          {navItems.map((item) => (
            <a key={item.href} href={getPublicHref(item.href)}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="footer-socials">
          <ExternalLink href={links.instagram} className="icon-link">
            <Instagram size={20} aria-hidden="true" />
            <span className="sr-only">Instagram</span>
          </ExternalLink>
          <ExternalLink href={links.youtube} className="icon-link">
            <Youtube size={21} aria-hidden="true" />
            <span className="sr-only">YouTube</span>
          </ExternalLink>
          <ExternalLink href={links.spectatorTickets} className="icon-link">
            <Ticket size={20} aria-hidden="true" />
            <span className="sr-only">Tickets</span>
          </ExternalLink>
        </div>
        <ExternalLink href={links.contact} className="footer-email">
          admin@lit7s.com
        </ExternalLink>
      </div>
    </footer>
  );
}

function UnavailableRoute() {
  return (
    <main>
      <section className="route-unavailable" aria-label="Unavailable route">
        <div className="event-type">LIT7s</div>
        <h1>This page is unavailable</h1>
        <p>Return to the LIT7s event calendar, tournament guides and latest news.</p>
        <a className="button button-primary" href="#top">
          Return to LIT7s
          <ArrowRight size={18} aria-hidden="true" />
        </a>
      </section>
    </main>
  );
}

export default function App() {
  const initialRoute = getRouteFromLocation();
  const [selectedEventSlug, setSelectedEventSlug] = useState(initialRoute.eventSlug);
  const [selectedPastSlug, setSelectedPastSlug] = useState(initialRoute.pastSlug);
  const [selectedPageSlug, setSelectedPageSlug] = useState(initialRoute.pageSlug);
  const [selectedArticleSlug, setSelectedArticleSlug] = useState(initialRoute.articleSlug);
  const selectedEvent = events.find((event) => event.slug === selectedEventSlug);
  const selectedPastEvent = selectedEvent?.pastEvents.find((past) => past.slug === selectedPastSlug);
  const selectedContentPage = contentPages.find((page) => page.slug === selectedPageSlug);
  const selectedArticlePage = articlePages.find((article) => article.slug === selectedArticleSlug);
  const hasInvalidRoute = Boolean(
    (selectedEventSlug && !selectedEvent) ||
      (selectedPastSlug && !selectedPastEvent) ||
      (selectedPageSlug && !selectedContentPage) ||
      (selectedArticleSlug && !selectedArticlePage)
  );
  const selectEventRoute = (slug: string) => {
    setSelectedEventSlug(slug);
    setSelectedPastSlug(undefined);
    setSelectedPageSlug(undefined);
    setSelectedArticleSlug(undefined);
  };
  const selectPastEventRoute = ({ eventSlug, pastSlug }: SelectedPastEventRoute) => {
    setSelectedEventSlug(eventSlug);
    setSelectedPastSlug(pastSlug);
    setSelectedPageSlug(undefined);
    setSelectedArticleSlug(undefined);
  };
  const selectContentPageRoute = (slug: string) => {
    setSelectedEventSlug(undefined);
    setSelectedPastSlug(undefined);
    setSelectedPageSlug(slug);
    setSelectedArticleSlug(undefined);
  };
  const selectArticleRoute = (slug: string) => {
    setSelectedEventSlug(undefined);
    setSelectedPastSlug(undefined);
    setSelectedPageSlug(undefined);
    setSelectedArticleSlug(slug);
  };

  useEffect(() => {
    const handleLocationChange = () => {
      const route = getRouteFromLocation();
      setSelectedEventSlug(route.eventSlug);
      setSelectedPastSlug(route.pastSlug);
      setSelectedPageSlug(route.pageSlug);
      setSelectedArticleSlug(route.articleSlug);
      normalizeRouteUrl();
    };

    normalizeRouteUrl();
    window.addEventListener('hashchange', handleLocationChange);
    window.addEventListener('popstate', handleLocationChange);
    return () => {
      window.removeEventListener('hashchange', handleLocationChange);
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  useEffect(() => {
    const homeDescription =
      'London International Rugby Sevens tournament information, LIT Super Sevens Series dates, USA camps, galleries, tickets and team entry.';
    const title = hasInvalidRoute
      ? 'Page unavailable | LIT7s'
      : selectedArticlePage
        ? `${selectedArticlePage.title} | LIT7s`
        : selectedContentPage
          ? `${selectedContentPage.title} | LIT7s`
          : selectedPastEvent
            ? `${selectedPastEvent.title} | LIT7s`
            : selectedEvent
              ? `${selectedEvent.title} | LIT7s`
              : 'LIT7s | London International Rugby Sevens Tournament';
    const description = hasInvalidRoute
      ? 'Return to the LIT7s event calendar, tournament guides and latest news.'
      : selectedArticlePage?.summary ??
        selectedContentPage?.summary ??
        selectedPastEvent?.summary ??
        selectedEvent?.detailPage.overview ??
        homeDescription;
    const image =
      selectedArticlePage?.image ?? selectedContentPage?.image ?? selectedEvent?.image ??
      `${siteBasePath}assets/hero-rugby.jpeg`;
    const canonicalPath = hasInvalidRoute
      ? window.location.pathname
      : getRoutePath({
          eventSlug: selectedEvent?.slug,
          pastSlug: selectedPastEvent?.slug,
          pageSlug: selectedContentPage?.slug,
          articleSlug: selectedArticlePage?.slug
        });
    const canonicalUrl = new URL(canonicalPath, siteOrigin).href;
    const imageUrl = new URL(image, siteOrigin).href;
    let canonicalElement = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');

    if (!canonicalElement) {
      canonicalElement = document.createElement('link');
      canonicalElement.rel = 'canonical';
      document.head.appendChild(canonicalElement);
    }

    document.title = title;
    canonicalElement.setAttribute('href', canonicalUrl);
    setMetaContent('meta[name="description"]', description);
    setMetaContent('meta[name="robots"]', hasInvalidRoute ? 'noindex,follow' : 'index,follow,max-image-preview:large');
    setMetaContent('meta[property="og:type"]', selectedArticlePage ? 'article' : 'website');
    setMetaContent('meta[property="og:title"]', title);
    setMetaContent('meta[property="og:description"]', description);
    setMetaContent('meta[property="og:url"]', canonicalUrl);
    setMetaContent('meta[property="og:image"]', imageUrl);
    setMetaContent('meta[name="twitter:title"]', title);
    setMetaContent('meta[name="twitter:description"]', description);
    setMetaContent('meta[name="twitter:image"]', imageUrl);

    const existingSchema = document.getElementById('route-structured-data');
    existingSchema?.remove();

    const staticSchemaContent = document.getElementById('site-structured-data')?.textContent ?? '';
    const hasStaticRouteSchema = staticSchemaContent.includes(canonicalUrl);

    if (
      !hasInvalidRoute &&
      !hasStaticRouteSchema &&
      (selectedArticlePage || selectedContentPage || selectedEvent)
    ) {
      const routeSchema = document.createElement('script');
      const eventDate = selectedEvent ? getIsoDate(selectedPastEvent?.date ?? selectedEvent.date) : undefined;
      const schema = selectedArticlePage
        ? {
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: selectedArticlePage.title,
            description,
            datePublished: getIsoDate(selectedArticlePage.date),
            image: imageUrl,
            mainEntityOfPage: canonicalUrl,
            publisher: { '@id': `${siteOrigin}${siteBasePath}#organization` }
          }
        : selectedContentPage
          ? {
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              name: selectedContentPage.title,
              description,
              image: imageUrl,
              url: canonicalUrl,
              isPartOf: { '@id': `${siteOrigin}${siteBasePath}#website` }
            }
          : {
              '@context': 'https://schema.org',
              '@type': 'SportsEvent',
              name: selectedPastEvent?.title ?? selectedEvent?.title,
              description,
              ...(eventDate ? { startDate: eventDate } : {}),
              eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
              image: imageUrl,
              url: canonicalUrl,
              organizer: { '@id': `${siteOrigin}${siteBasePath}#organization` },
              location: {
                '@type': 'Place',
                name: selectedPastEvent?.location ?? selectedEvent?.location
              }
            };

      routeSchema.id = 'route-structured-data';
      routeSchema.type = 'application/ld+json';
      routeSchema.textContent = JSON.stringify(schema);
      document.head.appendChild(routeSchema);
    }
  }, [
    hasInvalidRoute,
    selectedArticlePage,
    selectedContentPage,
    selectedEvent,
    selectedPastEvent
  ]);

  useLayoutEffect(() => {
    if (!selectedEventSlug && !selectedPageSlug && !selectedArticleSlug) {
      const anchor = window.location.hash.slice(1);

      if (!anchor) {
        return undefined;
      }

      const frame = window.requestAnimationFrame(() => {
        const target = document.getElementById(anchor);

        if (typeof target?.scrollIntoView === 'function') {
          target.scrollIntoView({ block: 'start' });
        }
      });

      return () => window.cancelAnimationFrame(frame);
    }

    scrollToPageTop();
    return undefined;
  }, [selectedEventSlug, selectedPastSlug, selectedPageSlug, selectedArticleSlug]);

  return (
    <>
      <Header />
      {hasInvalidRoute ? (
        <UnavailableRoute />
      ) : selectedArticlePage ? (
        <ArticlePageView article={selectedArticlePage} />
      ) : selectedContentPage ? (
        <ContentPageView page={selectedContentPage} />
      ) : selectedEvent && selectedPastEvent ? (
        <PastEventPage
          event={selectedEvent}
          pastEvent={selectedPastEvent}
          onSelectEvent={selectEventRoute}
        />
      ) : selectedEvent ? (
        <EventDetailPage event={selectedEvent} onSelectPastEvent={selectPastEventRoute} />
      ) : (
        <main>
          <Hero />
          <EventsDirectory onSelectEvent={selectEventRoute} />
          <EventCalendar onSelectEvent={selectEventRoute} />
          <NewsSection onSelectArticle={selectArticleRoute} />
          <GuidesSection onSelectPage={selectContentPageRoute} />
          <ProgramOverview />
          <ProofSection />
          <FaqSection />
        </main>
      )}
      <PartnersFooter />
    </>
  );
}
