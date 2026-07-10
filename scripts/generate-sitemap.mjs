import { writeFile } from 'node:fs/promises';
import { loadSiteRoutes, siteRoot } from './site-routes.mjs';

const routes = await loadSiteRoutes();
const urls = [{ loc: siteRoot, priority: '1.0' }, ...routes.map((route) => ({
  loc: `${siteRoot}${route.path}`,
  priority: route.priority
}))];
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(({ loc, priority }) => `  <url><loc>${loc}</loc><priority>${priority}</priority></url>`).join('\n')}
</urlset>
`;

await writeFile(new URL('../public/sitemap.xml', import.meta.url), xml);
