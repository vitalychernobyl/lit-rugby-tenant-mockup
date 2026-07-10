import {
  articlePages,
  brand,
  calendarEvents,
  contentPages,
  events,
  faqItems,
  guideCollections,
  links,
  mediaPackages,
  socials
} from '../data/siteContent';

function collectStringValues(value: unknown): string[] {
  if (typeof value === 'string') {
    return [value];
  }

  if (Array.isArray(value)) {
    return value.flatMap((item) => collectStringValues(item));
  }

  if (value && typeof value === 'object') {
    return Object.values(value).flatMap((item) => collectStringValues(item));
  }

  return [];
}

describe('site content', () => {
  it('uses green as the primary LIT7s brand accent and reserves red for USA cues', () => {
    expect(brand.primaryAccent).toBe('green');
    expect(brand.usaAccent).toBe('red');
  });

  it('consolidates LIT7s, Super Sevens, Florida and camps into one event model', () => {
    const titles = events.map((event) => event.title);

    expect(titles).toEqual(
      expect.arrayContaining([
        'LIT7s London',
        'LIT Super Sevens Series 2026',
        'LIT Florida International 7s',
        'The Olympic Experience',
        'The IMG Experience'
      ])
    );
  });

  it('keeps current Instagram handles visible in the content model', () => {
    expect(socials.map((social) => social.handle)).toEqual([
      '@lit7s',
      '@lit7susa',
      '@supersevensseriesuk'
    ]);
  });

  it('specifies researched dates for the 2026 event calendar', () => {
    expect(calendarEvents.map((event) => `${event.title}: ${event.date}`)).toEqual(
      expect.arrayContaining([
        'Manor 7s: 9 May 2026',
        'Oxford 7s: 16 May 2026',
        'Hertford 7s: 13 June 2026',
        'National Pub 7s: 27 June 2026',
        'LIT7s London: 18 July 2026',
        'LIT Florida International 7s: 28 November 2026'
      ])
    );
  });

  it('links every calendar entry to the relevant local event page', () => {
    expect(calendarEvents.every((event) => event.href.startsWith('#event/'))).toBe(true);
    expect(calendarEvents.find((event) => event.title === 'Next LIT7s USA Camp')?.href).toBe(
      '#event/the-img-experience'
    );
  });

  it('has detail-page content and past event history for every featured event', () => {
    expect(events.every((event) => event.slug && event.detailPage && event.pastEvents.length > 0)).toBe(
      true
    );
  });

  it('gives every past event a clickable page with detail and media links', () => {
    expect(
      events.every((event) =>
        event.pastEvents.every((past) => {
          const pastEvent = past as typeof past & {
            slug?: string;
            details?: unknown[];
            sourceLinks?: unknown[];
            mediaLinks?: unknown[];
            winners?: unknown[];
            articles?: unknown[];
          };

          return (
            pastEvent.slug &&
            pastEvent.details &&
            pastEvent.details.length > 0 &&
            pastEvent.sourceLinks &&
            pastEvent.sourceLinks.length > 0 &&
            pastEvent.mediaLinks &&
            pastEvent.mediaLinks.length > 0 &&
            ((pastEvent.winners && pastEvent.winners.length > 0) ||
              (pastEvent.articles && pastEvent.articles.length > 0))
          );
        })
      )
    ).toBe(true);
  });

  it('adds detail links and media evidence to every event detail page', () => {
    expect(
      events.every((event) => {
        const detailPage = event.detailPage as typeof event.detailPage & {
          sourceLinks?: unknown[];
          mediaLinks?: unknown[];
          winners?: unknown[];
          articles?: unknown[];
        };

        return (
          detailPage.sourceLinks &&
          detailPage.sourceLinks.length > 0 &&
          ((detailPage.mediaLinks && detailPage.mediaLinks.length > 0) ||
            (detailPage.winners && detailPage.winners.length > 0) ||
            (detailPage.articles && detailPage.articles.length > 0))
        );
      })
    ).toBe(true);
  });

  it('includes winners and published articles from the Super Sevens event history', () => {
    const series = events.find((event) => event.slug === 'lit-super-sevens-series-2026');
    expect(series).toBeDefined();
    const detailPage = series!.detailPage as (typeof events)[number]['detailPage'] & {
      winners?: Array<{ title: string; items: string[] }>;
      articles?: Array<{ title: string; href: string }>;
    };

    expect(detailPage.winners?.flatMap((winner) => winner.items)).toEqual(
      expect.arrayContaining(['2025 Men: British Army', '2025 Women: Shogun Rugby'])
    );
    expect(detailPage.articles?.map((article) => article.title)).toEqual(
      expect.arrayContaining([
        '2026 Charity Partner Announced!',
        '2025 Series Kicks Off!',
        '2025 Venues Announced!',
        'LIT Super Sevens Series 2025 Announced'
      ])
    );
  });

  it('includes the LIT7s London event guides, media hub and 2024 winners', () => {
    const london = events.find((event) => event.slug === 'lit7s-london');
    expect(london).toBeDefined();
    const detailPage = london!.detailPage as (typeof events)[number]['detailPage'] & {
      sourceLinks?: Array<{ label: string }>;
      mediaLinks?: Array<{ label: string }>;
      winners?: Array<{ title: string; items: string[] }>;
    };

    expect(detailPage.sourceLinks?.map((link) => link.label)).toEqual(
      expect.arrayContaining(['Tournament Information', 'Schedule', 'What to Pack', 'VIP Tickets'])
    );
    expect(detailPage.mediaLinks?.map((link) => link.label)).toEqual(
      expect.arrayContaining(['Past LIT7s videos and photos'])
    );
    expect(detailPage.winners?.flatMap((winner) => winner.items)).toEqual(
      expect.arrayContaining([
        "Shogun Rugby, Men's Open Cup Winners",
        "Wild Dogs, Alpha Pack, Women's Open Winners",
        "Surrey Exiles, Men's Social Cup Winners"
      ])
    );
  });

  it('moves the LIT7s content pages into local guide pages', () => {
    expect(contentPages.map((page) => page.slug)).toEqual(
      expect.arrayContaining([
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
        'lit7s-london-7s-preview-2024',
        'news',
        'lit7s-media',
        'lit7s-video-collection',
        'lit7s-tournament-photos',
        'super-sevens-bury-2024-gallery',
        'super-sevens-bury-2024-livestream',
        'super-sevens-2023-media',
        'super-sevens-finals-analysis',
        'media-packages',
        'food-and-drink',
        'entertainment',
        'fancy-dress',
        'narni-shakers',
        'touch-competition',
        'facebook-groups',
        'partners',
        'opportunities',
        'match-ball-partner',
        'florida-international-7s',
        'florida-terms',
        'olympic-experience',
        'img-experience',
        'tournament-app',
        'contact'
      ])
    );
    expect(contentPages.every((page) => page.sections.length > 0)).toBe(true);
  });

  it('groups every local content page into the front-page guide library', () => {
    const groupedPageSlugs = new Set(guideCollections.flatMap((collection) => collection.pageSlugs));

    expect(contentPages.every((page) => groupedPageSlugs.has(page.slug))).toBe(true);
  });

  it('uses local page links for guide content', () => {
    expect(JSON.stringify({ links, events, contentPages, articlePages })).not.toContain('www.lit7s.com');
    expect(links.lit7sTournamentInfo).toBe('#page/tournament-information');
    expect(links.lit7sMedia).toBe('#page/lit7s-media');
    expect(links.olympicExperience).toBe('#page/olympic-experience');
    expect(links.articleSeriesKicksOff).toBe('#article/2025-series-kicks-off');
  });

  it('includes local gallery assets for media and camp pages', () => {
    const galleryItems = contentPages.flatMap((page) => page.gallery ?? []);

    expect(galleryItems.length).toBeGreaterThanOrEqual(10);
    expect(galleryItems.every((item) => item.image.includes('/assets/'))).toBe(true);
    expect(galleryItems.map((item) => item.title)).toEqual(
      expect.arrayContaining(['2023 Official Video', 'Premier Sports Campus', 'Olympic camp training'])
    );
  });

  it('keeps the primary media package browsing path on local pages', () => {
    expect(mediaPackages.every((item) => item.href?.startsWith('#page/'))).toBe(true);
    expect(mediaPackages.map((item) => item.href)).toEqual(
      expect.arrayContaining([
        '#page/lit7s-video-collection',
        '#page/lit7s-tournament-photos',
        '#page/super-sevens-bury-2024-gallery',
        '#page/super-sevens-bury-2024-livestream',
        '#page/super-sevens-2023-media',
        '#page/super-sevens-finals-analysis'
      ])
    );

    const mediaPagePayload = contentPages
      .filter((page) =>
        [
          'lit7s-media',
          'lit7s-video-collection',
          'lit7s-tournament-photos',
          'super-sevens-bury-2024-gallery',
          'super-sevens-bury-2024-livestream',
          'super-sevens-2023-media',
          'super-sevens-finals-analysis',
          'media-packages'
        ].includes(page.slug)
      )
      .flatMap((page) => [page.ctas ?? [], page.gallery ?? []]);

    expect(JSON.stringify(mediaPagePayload)).not.toContain('super7sseries.com');
    expect(JSON.stringify(mediaPagePayload)).not.toContain('youtube.com');
    expect(JSON.stringify(mediaPagePayload)).not.toContain('facebook.com/LIT7s');
  });

  it('keeps Super Sevens event resources on local pages', () => {
    const publicModel = JSON.stringify({ events, contentPages, articlePages, mediaPackages });

    expect(publicModel).not.toContain('super7sseries.com');
    expect(links.superSevensAnalysisPage).toBe('#page/super-sevens-finals-analysis');
  });

  it('moves articles, media packages and answer content into the site', () => {
    expect(articlePages.length).toBeGreaterThanOrEqual(20);
    expect(articlePages.map((article) => article.slug)).toEqual(
      expect.arrayContaining([
        '2026-charity-partner-announced',
        '2025-series-kicks-off',
        'super-sevens-vaquita-apparel-partnership',
        'a-beginners-guide-to-watching-rugby-sevens',
        'sportsballshop-match-ball-partner'
      ])
    );
    expect(mediaPackages.length).toBeGreaterThanOrEqual(10);
    expect(faqItems.map((item) => item.question)).toEqual(
      expect.arrayContaining(['When is LIT7s London 2026?', 'Can spectators buy tickets?'])
    );
  });

  it('exposes every imported article from the local news page', () => {
    const newsPage = contentPages.find((page) => page.slug === 'news');

    expect(newsPage).toBeDefined();
    expect(newsPage!.gallery?.map((item) => item.href)).toEqual(
      articlePages.map((article) => `#article/${article.slug}`)
    );
    expect(newsPage!.sections[0].cards?.map((card) => card.title)).toEqual(
      articlePages.map((article) => article.title)
    );
  });

  it('keeps public copy focused on LIT7s without migration wording', () => {
    const publicCopy = collectStringValues({
      contentPages,
      articlePages,
      faqItems,
      mediaPackages,
      events,
      calendarEvents
    })
      .join(' ')
      .toLowerCase();

    expect(publicCopy).not.toContain('provenance');
    expect(publicCopy).not.toContain('rebuilt');
    expect(publicCopy).not.toContain('remade');
    expect(publicCopy).not.toContain('reviewed');
    expect(publicCopy).not.toContain('not found');
    expect(publicCopy).not.toContain('www.lit7s.com');
  });

  it('keeps migrated article and explainer page body copy close to source text', () => {
    const publicCopy = collectStringValues({ articlePages, contentPages }).join(' ');

    expect(publicCopy).toContain(
      'Restart Rugby is the official charity of the Rugby Players Association'
    );
    expect(publicCopy).toContain(
      'Rugby Sevens is a faster, higher-scoring, and more exciting form of traditional rugby'
    );
    expect(publicCopy).toContain(
      'SportsBallShop.co.uk as our official match ball partner for the 11th year running'
    );
    expect(publicCopy).toContain('Vaquita Apparel as the official merchandise supplier for the 2023 series');
    expect(publicCopy).toContain('We have a variety of tasty food stalls on offer for everyone’s needs');
    expect(publicCopy).toContain('FRN is thrilled to welcome mixed touch rugby teams to the Festival');
    expect(publicCopy).toContain('London International 7s Tournament (LIT), founded in 2012');
    expect(publicCopy).toContain('Find Rugby Now (FRN) is thrilled to be hosting its 11th annual rugby 7s tournament');
    expect(publicCopy).toContain('The innaugural LIT7s London 7s will be taking place on Saturday, 25 May 2024');
    expect(publicCopy).toContain('Join our FRN 7s Facebook Group to stay up to date');
  });
});
