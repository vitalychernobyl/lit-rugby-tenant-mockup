import { createServer } from 'vite';

export const siteRoot = 'https://rugbymonkey.com/lit/';

const organization = {
  '@type': 'SportsOrganization',
  '@id': `${siteRoot}#organization`,
  name: 'LIT7s',
  url: siteRoot,
  sport: 'Rugby sevens',
  sameAs: [
    'https://www.instagram.com/lit7s/',
    'https://www.instagram.com/lit7susa/',
    'https://www.instagram.com/supersevensseriesuk/',
    'https://www.facebook.com/LIT7s/',
    'https://www.youtube.com/@LIT7s'
  ]
};

const website = {
  '@type': 'WebSite',
  '@id': `${siteRoot}#website`,
  name: 'LIT7s',
  url: siteRoot,
  publisher: { '@id': organization['@id'] }
};

function absoluteImage(image) {
  return new URL(image.replace(/^\/+/, ''), siteRoot).href;
}

function isoDate(date) {
  const months = {
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

  return match && months[match[2]]
    ? `${match[3]}-${months[match[2]]}-${match[1].padStart(2, '0')}`
    : undefined;
}

export async function loadSiteRoutes() {
  const server = await createServer({
    appType: 'custom',
    logLevel: 'silent',
    server: { middlewareMode: true }
  });

  try {
    const { articlePages, contentPages, events } = await server.ssrLoadModule('/src/data/siteContent.ts');

    return [
      ...events.flatMap((event) => {
        const eventPath = `event/${event.slug}/`;
        const eventUrl = `${siteRoot}${eventPath}`;
        const image = absoluteImage(event.image);
        const startDate = isoDate(event.date);
        const eventStatus = startDate
          ? startDate < '2026-07-09'
            ? 'https://schema.org/EventCompleted'
            : 'https://schema.org/EventScheduled'
          : event.type === 'Series'
            ? 'https://schema.org/EventScheduled'
            : undefined;
        const eventRoute = {
          path: eventPath,
          priority: '0.9',
          title: `${event.title} | LIT7s`,
          description: event.detailPage.overview,
          image,
          ogType: 'website',
          schema: {
            '@type': 'SportsEvent',
            name: event.title,
            description: event.detailPage.overview,
            ...(startDate ? { startDate } : {}),
            ...(eventStatus ? { eventStatus } : {}),
            eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
            sport: 'Rugby sevens',
            image,
            url: eventUrl,
            organizer: { '@id': organization['@id'] },
            location: { '@type': 'Place', name: event.location },
            ...(event.ticketHref
              ? {
                  offers: {
                    '@type': 'Offer',
                    url: event.ticketHref,
                    availability: 'https://schema.org/InStock',
                    category: 'Spectator tickets'
                  }
                }
              : {})
          }
        };
        const pastRoutes = event.pastEvents.map((pastEvent) => {
          const path = `${eventPath}past/${pastEvent.slug}/`;
          const pastDate = isoDate(pastEvent.date);

          return {
            path,
            priority: '0.7',
            title: `${pastEvent.title} | LIT7s`,
            description: pastEvent.summary,
            image,
            ogType: 'website',
            schema: {
              '@type': 'SportsEvent',
              name: pastEvent.title,
              description: pastEvent.summary,
              ...(pastDate ? { startDate: pastDate } : {}),
              eventStatus: 'https://schema.org/EventCompleted',
              eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
              sport: 'Rugby sevens',
              image,
              url: `${siteRoot}${path}`,
              organizer: { '@id': organization['@id'] },
              location: { '@type': 'Place', name: pastEvent.location }
            }
          };
        });

        return [eventRoute, ...pastRoutes];
      }),
      ...contentPages.map((page) => {
        const path = `page/${page.slug}/`;
        const image = absoluteImage(page.image);

        return {
          path,
          priority: '0.7',
          title: `${page.title} | LIT7s`,
          description: page.summary,
          image,
          ogType: 'website',
          schema: {
            '@type': 'WebPage',
            name: page.title,
            description: page.summary,
            image,
            url: `${siteRoot}${path}`,
            isPartOf: { '@id': `${siteRoot}#website` }
          }
        };
      }),
      ...articlePages.map((article) => {
        const path = `article/${article.slug}/`;
        const image = absoluteImage(article.image);

        return {
          path,
          priority: '0.8',
          title: `${article.title} | LIT7s`,
          description: article.summary,
          image,
          ogType: 'article',
          schema: {
            '@type': 'Article',
            headline: article.title,
            description: article.summary,
            datePublished: isoDate(article.date),
            image,
            mainEntityOfPage: `${siteRoot}${path}`,
            publisher: { '@id': organization['@id'] }
          }
        };
      })
    ].map((route) => ({
      ...route,
      schema: {
        '@context': 'https://schema.org',
        '@graph': [organization, website, route.schema]
      }
    }));
  } finally {
    await server.close();
  }
}
