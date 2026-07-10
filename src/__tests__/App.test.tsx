import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import App from '../App';

describe('App', () => {
  beforeEach(() => {
    window.history.pushState(null, '', '/');
  });

  it('renders the unified LIT7s hero and primary actions', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', { name: /london international rugby sevens/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /view events/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /enter a team/i })).toBeInTheDocument();
  });

  it('filters events without splitting the site into separate brands', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole('button', { name: /^camps$/i }));

    const directory = screen.getByLabelText('Events and camps directory');
    expect(within(directory).getByText('The Olympic Experience')).toBeInTheDocument();
    expect(within(directory).getByText('The IMG Experience')).toBeInTheDocument();
    expect(within(directory).queryByText('LIT7s London')).not.toBeInTheDocument();
  });

  it('places each event date in a visual badge over the event image', () => {
    render(<App />);

    const directory = screen.getByLabelText('Events and camps directory');
    expect(within(directory).getByLabelText('Date: 18 July 2026')).toHaveClass(
      'event-date-badge'
    );
    expect(within(directory).getByLabelText('Date: 28 November 2026')).toHaveClass(
      'event-date-badge'
    );
  });

  it('keeps event detail actions visually short with event-specific accessible names', () => {
    render(<App />);

    const directory = screen.getByLabelText('Events and camps directory');
    const londonDetails = within(directory).getByRole('link', {
      name: 'View LIT7s London details'
    });

    expect(londonDetails).toHaveTextContent('View details');
    expect(londonDetails).not.toHaveTextContent('LIT7s London');
  });

  it('renders a dated calendar of events', () => {
    render(<App />);

    const calendar = screen.getByLabelText('Calendar of LIT7s events');
    expect(within(calendar).getByRole('heading', { name: /calendar of events/i })).toBeInTheDocument();
    expect(within(calendar).getByText('9 May 2026')).toBeInTheDocument();
    expect(within(calendar).getAllByText('LIT7s London').length).toBeGreaterThanOrEqual(1);
    expect(within(calendar).getByText('28 November 2026')).toBeInTheDocument();
  });

  it('renders a visual calendar on the front page', () => {
    render(<App />);

    const visualCalendar = screen.getByLabelText('Visual event calendar');
    expect(within(visualCalendar).getByText('May')).toBeInTheDocument();
    expect(within(visualCalendar).getByText('June')).toBeInTheDocument();
    expect(within(visualCalendar).getByText('LIT7s London')).toBeInTheDocument();
  });

  it('releases the mobile menu before scrolling to an anchor section', async () => {
    const user = userEvent.setup();
    const animationFrame = vi
      .spyOn(window, 'requestAnimationFrame')
      .mockImplementation((callback) => {
        callback(0);
        return 1;
      });
    render(<App />);

    const calendar = screen.getByLabelText('Calendar of LIT7s events');
    const scrollIntoView = vi.fn();
    Object.defineProperty(calendar, 'scrollIntoView', { value: scrollIntoView });

    await user.click(screen.getByTestId('mobile-menu-toggle'));
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' });
    await user.click(within(mobileNav).getByRole('link', { name: 'Calendar' }));

    expect(window.location.hash).toBe('#calendar');
    expect(scrollIntoView).toHaveBeenCalledWith({ block: 'start' });
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument();
    animationFrame.mockRestore();
  });

  it('links every detailed calendar card to its event page', async () => {
    const user = userEvent.setup();
    render(<App />);

    const detailedCalendar = screen.getByLabelText('Detailed event calendar');
    const londonCard = within(detailedCalendar).getByRole('link', { name: /lit7s london/i });
    expect(londonCard).toHaveAttribute('href', '/event/lit7s-london/');

    await user.click(londonCard);

    expect(screen.getByLabelText('Event detail for LIT7s London')).toBeInTheDocument();
  });

  it('groups current events before past events and collapses the past list', () => {
    render(<App />);

    const detailedCalendar = screen.getByLabelText('Detailed event calendar');
    const currentEvents = within(detailedCalendar).getByRole('region', {
      name: 'Upcoming and current events'
    });
    const pastDisclosure = detailedCalendar.querySelector('details');

    expect(within(currentEvents).getByText('Next LIT7s USA Camp')).toBeInTheDocument();
    expect(pastDisclosure).not.toBeNull();
    expect(pastDisclosure).not.toHaveAttribute('open');
    expect(pastDisclosure?.querySelector('summary')).toHaveTextContent('Past events');
    expect(pastDisclosure).toHaveTextContent('The IMG Experience');
    expect(
      currentEvents.compareDocumentPosition(pastDisclosure as Node) & Node.DOCUMENT_POSITION_FOLLOWING
    ).toBeTruthy();
  });

  it('links event cards through to a detail page with upcoming and past-year information', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole('link', { name: /view lit7s london details/i }));

    const detail = screen.getByLabelText('Event detail for LIT7s London');
    expect(within(detail).getByRole('heading', { name: 'LIT7s London' })).toBeInTheDocument();
    expect(within(detail).getByText('Upcoming event')).toBeInTheDocument();
    expect(within(detail).getByText('Past years')).toBeInTheDocument();
    expect(within(detail).getAllByText('18 July 2026').length).toBeGreaterThanOrEqual(1);
  });

  it('renders the guide library and opens local content pages in-site', async () => {
    const user = userEvent.setup();
    render(<App />);

    const guides = screen.getByLabelText('LIT7s guide pages');
    expect(
      within(guides).getByRole('heading', { name: /tournament information/i, level: 2 })
    ).toBeInTheDocument();

    await user.click(within(guides).getByRole('link', { name: /tournament information/i }));

    const contentPage = screen.getByLabelText('Content page for Tournament Information');
    expect(within(contentPage).getByRole('heading', { name: 'Tournament Information' })).toBeInTheDocument();
    expect(within(contentPage).getAllByText('LIT7s 2026 events').length).toBeGreaterThanOrEqual(1);
    expect(within(contentPage).getByText(/LIT SUPER 7S SERIES/)).toBeInTheDocument();
    expect(within(contentPage).getByText(/18TH JULY 2026/)).toBeInTheDocument();
  });

  it('renders the media page with local gallery cards', () => {
    window.history.pushState(null, '', '/#page/lit7s-media');
    render(<App />);

    const mediaPage = screen.getByLabelText('Content page for LIT7s Media');
    expect(within(mediaPage).getByText('12 LIT7s videos')).toBeInTheDocument();
    expect(within(mediaPage).getAllByText('2023 Official Video').length).toBeGreaterThanOrEqual(1);
    expect(within(mediaPage).getByText('Past tournament teams')).toBeInTheDocument();
  });

  it('opens local news article pages from the front page', async () => {
    const user = userEvent.setup();
    render(<App />);

    const news = screen.getByLabelText('LIT7s news and articles');
    await user.click(within(news).getByRole('link', { name: /2026 charity partner announced/i }));

    const article = screen.getByLabelText('Article page for 2026 Charity Partner Announced!');
    expect(within(article).getByRole('heading', { name: '2026 Charity Partner Announced!' })).toBeInTheDocument();
    expect(within(article).getByText('28 April 2026')).toBeInTheDocument();
    expect(within(article).getByRole('link', { name: /view series calendar/i })).toHaveAttribute(
      'href',
      '/event/lit-super-sevens-series-2026/'
    );
  });

  it('places the article section index before the body and contains obvious artwork', () => {
    window.history.pushState(null, '', '/article/2026-charity-partner-announced/');
    render(<App />);

    const article = screen.getByLabelText('Article page for 2026 Charity Partner Announced!');
    const sectionIndex = article.querySelector('.article-section-index');
    const articleBody = article.querySelector('.article-content-main');
    const featuredImage = within(article).getByAltText(
      '2026 Charity Partner Announced! article image'
    );

    expect(sectionIndex).not.toBeNull();
    expect(articleBody).not.toBeNull();
    expect(
      sectionIndex!.compareDocumentPosition(articleBody as Node) & Node.DOCUMENT_POSITION_FOLLOWING
    ).toBeTruthy();
    expect(featuredImage).toHaveClass('media-fit-contain');
    expect(featuredImage).toHaveStyle({ objectFit: 'contain' });
  });

  it('exposes the complete news archive from the homepage and site navigation', async () => {
    const user = userEvent.setup();
    render(<App />);

    expect(
      screen
        .getAllByRole('link', { name: 'News' })
        .every((link) => link.getAttribute('href') === '/page/news/')
    ).toBe(true);

    await user.click(screen.getByRole('link', { name: /view all news/i }));

    expect(screen.getByLabelText('Content page for News and Articles')).toBeInTheDocument();
  });

  it('keeps LIT7s guide links internal from event detail pages', async () => {
    const user = userEvent.setup();
    window.history.pushState(null, '', '/#event/lit7s-london');
    render(<App />);

    const londonDetail = screen.getByLabelText('Event detail for LIT7s London');
    const tournamentInfoLink = within(londonDetail).getByRole('link', {
      name: /tournament information/i
    });

    expect(tournamentInfoLink).toHaveAttribute('href', '/page/tournament-information/');
    expect(tournamentInfoLink).not.toHaveAttribute('target');

    await user.click(tournamentInfoLink);
    expect(screen.getByLabelText('Content page for Tournament Information')).toBeInTheDocument();
  });

  it('links past years through to event pages with media, results and article links', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole('link', { name: /view lit7s london details/i }));
    const londonDetail = screen.getByLabelText('Event detail for LIT7s London');

    await user.click(within(londonDetail).getByRole('link', { name: /view lit7s london 2024 page/i }));

    const eventPage = screen.getByLabelText('Past event page for LIT7s London 2024');
    expect(within(eventPage).getByRole('heading', { name: 'LIT7s London 2024' })).toBeInTheDocument();
    expect(within(eventPage).getByRole('link', { name: /back to lit7s london/i })).toBeInTheDocument();
    expect(within(eventPage).getByText('Event information & media')).toBeInTheDocument();
    expect(within(eventPage).getByRole('link', { name: /past lit7s videos and photos/i })).toBeInTheDocument();
    expect(within(eventPage).getByText('2024 LIT7s Winners')).toBeInTheDocument();
    expect(within(eventPage).getByText("Shogun Rugby, Men's Open Cup Winners")).toBeInTheDocument();
    expect(within(eventPage).getByRole('link', { name: /2025 series kicks off/i })).toBeInTheDocument();
  });

  it('renders event links, media galleries, winners and articles on detail pages', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole('link', { name: /view lit7s london details/i }));

    const londonDetail = screen.getByLabelText('Event detail for LIT7s London');
    expect(within(londonDetail).getByText('Event information & media')).toBeInTheDocument();
    expect(within(londonDetail).getByRole('link', { name: /tournament information/i })).toBeInTheDocument();
    expect(within(londonDetail).getByRole('link', { name: /past lit7s videos and photos/i })).toBeInTheDocument();
    expect(within(londonDetail).getByText('2024 LIT7s Winners')).toBeInTheDocument();
    expect(within(londonDetail).getByText("Shogun Rugby, Men's Open Cup Winners")).toBeInTheDocument();

    await user.click(within(londonDetail).getByRole('link', { name: /back to events/i }));
    await user.click(screen.getByRole('link', { name: /view lit super sevens series 2026 details/i }));

    const seriesDetail = screen.getByLabelText('Event detail for LIT Super Sevens Series 2026');
    expect(within(seriesDetail).getByText("2025 Men's Winners")).toBeInTheDocument();
    expect(within(seriesDetail).getByText('2025 Men: British Army')).toBeInTheDocument();
    expect(within(seriesDetail).getByRole('link', { name: /2025 series kicks off/i })).toBeInTheDocument();
  });

  it('shows an event-updates empty state when no dedicated article is available', () => {
    window.history.pushState(null, '', '/#event/lit-florida-international-7s');
    render(<App />);

    const floridaDetail = screen.getByLabelText('Event detail for LIT Florida International 7s');
    expect(within(floridaDetail).getByText('News and articles')).toBeInTheDocument();
    expect(
      within(floridaDetail).getByText(/event updates, media and team information are listed above/i)
    ).toBeInTheDocument();
  });

  it('renders SEO answer content on the front page', () => {
    render(<App />);

    const faq = screen.getByLabelText('LIT7s frequently asked questions');
    expect(within(faq).getByRole('heading', { name: /when is lit7s london 2026/i })).toBeInTheDocument();
    expect(within(faq).getByText(/saturday 18 july 2026/i)).toBeInTheDocument();
    expect(within(faq).getByRole('heading', { name: /can spectators buy tickets/i })).toBeInTheDocument();
  });

  it('adds spectator ticket links in multiple front-page locations', () => {
    render(<App />);

    expect(screen.getAllByRole('link', { name: /spectator tickets/i }).length).toBeGreaterThanOrEqual(
      3
    );
  });

  it('opens the mobile menu with the same site sections', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole('button', { name: /open menu/i }));

    const mobileNav = screen.getByLabelText('Mobile navigation');
    expect(within(mobileNav).getByRole('link', { name: 'Events' })).toBeInTheDocument();
    expect(within(mobileNav).getByRole('link', { name: 'Camps' })).toBeInTheDocument();
    expect(within(mobileNav).getByRole('link', { name: 'Series' })).toBeInTheDocument();
  });

  it('closes the mobile menu with Escape and restores page interaction', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole('button', { name: /open menu/i }));
    expect(document.querySelector('main')).toHaveAttribute('inert');

    await user.keyboard('{Escape}');

    expect(screen.queryByLabelText('Mobile navigation')).not.toBeInTheDocument();
    expect(document.querySelector('main')).not.toHaveAttribute('inert');
    expect(screen.getByRole('button', { name: /open menu/i })).toHaveFocus();
  });

  it('uses descriptive alternative text for meaningful images', () => {
    render(<App />);

    expect(screen.getByAltText('LIT7s London rugby sevens event')).toBeInTheDocument();
    expect(screen.getByAltText(/Perry Baker/)).toBeInTheDocument();
  });

  it('loads clean path routes with route-specific metadata', () => {
    window.history.pushState(null, '', '/article/2026-charity-partner-announced/');
    render(<App />);

    expect(screen.getByLabelText('Article page for 2026 Charity Partner Announced!')).toBeInTheDocument();
    expect(document.title).toBe('2026 Charity Partner Announced! | LIT7s');
    expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute(
      'href',
      'https://rugbymonkey.com/article/2026-charity-partner-announced/'
    );
    expect(document.querySelector('meta[property="og:type"]')).toHaveAttribute('content', 'article');
  });

  it('renders unknown paths as unavailable and prevents indexing', () => {
    window.history.pushState(null, '', '/missing-page/');
    render(<App />);

    expect(screen.getByRole('heading', { name: 'This page is unavailable' })).toBeInTheDocument();
    expect(document.querySelector('meta[name="robots"]')).toHaveAttribute('content', 'noindex,follow');
  });
});
