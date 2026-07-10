import { mkdir, readFile, writeFile } from 'node:fs/promises';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { parse, parseFragment, serialize } from 'parse5';
import { createServer } from 'vite';
import { loadSiteRoutes, siteRoot } from './site-routes.mjs';

const outputRoot = new URL('../dist/lit/', import.meta.url);
const template = await readFile(new URL('index.html', outputRoot), 'utf8');
const routes = await loadSiteRoutes();
const renderServer = await createServer({
  appType: 'custom',
  base: '/lit/',
  logLevel: 'silent',
  server: { middlewareMode: true }
});
const { default: App } = await renderServer.ssrLoadModule('/src/App.tsx');

globalThis.window = {
  addEventListener() {},
  cancelAnimationFrame() {},
  history: {
    pushState() {},
    replaceState() {}
  },
  location: {
    hash: '',
    pathname: '/lit/'
  },
  removeEventListener() {},
  requestAnimationFrame() {
    return 0;
  },
  scrollTo() {}
};

function findNode(node, predicate) {
  if (predicate(node)) {
    return node;
  }

  for (const child of node.childNodes ?? []) {
    const match = findNode(child, predicate);

    if (match) {
      return match;
    }
  }

  return undefined;
}

function getAttribute(node, name) {
  return node.attrs?.find((attribute) => attribute.name === name)?.value;
}

function setAttribute(node, name, value) {
  const attribute = node.attrs?.find((item) => item.name === name);

  if (attribute) {
    attribute.value = value;
  } else {
    node.attrs ??= [];
    node.attrs.push({ name, value });
  }
}

function setMeta(document, attributeName, attributeValue, content) {
  const element = findNode(
    document,
    (node) => node.tagName === 'meta' && getAttribute(node, attributeName) === attributeValue
  );

  if (element) {
    setAttribute(element, 'content', content);
  }
}

function setRootMarkup(document, pathname) {
  const root = findNode(
    document,
    (node) => node.tagName === 'div' && getAttribute(node, 'id') === 'root'
  );

  if (!root) {
    throw new Error('Root element missing from route template');
  }

  globalThis.window.location.pathname = pathname;
  globalThis.window.location.hash = '';
  const fragment = parseFragment(renderToString(React.createElement(App)));
  root.childNodes = fragment.childNodes;
  root.childNodes.forEach((child) => {
    child.parentNode = root;
  });
}

for (const route of routes) {
  const document = parse(template);
  const canonicalUrl = `${siteRoot}${route.path}`;
  const titleElement = findNode(document, (node) => node.tagName === 'title');
  const canonicalElement = findNode(
    document,
    (node) => node.tagName === 'link' && getAttribute(node, 'rel') === 'canonical'
  );
  const preloadElement = findNode(
    document,
    (node) => node.tagName === 'link' && getAttribute(node, 'rel') === 'preload' && getAttribute(node, 'as') === 'image'
  );
  const schemaElement = findNode(
    document,
    (node) => node.tagName === 'script' && getAttribute(node, 'id') === 'site-structured-data'
  );

  if (titleElement?.childNodes?.[0]) {
    titleElement.childNodes[0].value = route.title;
  }

  if (canonicalElement) {
    setAttribute(canonicalElement, 'href', canonicalUrl);
  }

  if (preloadElement) {
    setAttribute(preloadElement, 'href', route.image);
  }

  if (schemaElement?.childNodes?.[0]) {
    schemaElement.childNodes[0].value = JSON.stringify(route.schema);
  }

  setMeta(document, 'name', 'description', route.description);
  setMeta(document, 'property', 'og:type', route.ogType);
  setMeta(document, 'property', 'og:title', route.title);
  setMeta(document, 'property', 'og:description', route.description);
  setMeta(document, 'property', 'og:url', canonicalUrl);
  setMeta(document, 'property', 'og:image', route.image);
  setMeta(document, 'name', 'twitter:title', route.title);
  setMeta(document, 'name', 'twitter:description', route.description);
  setMeta(document, 'name', 'twitter:image', route.image);
  setRootMarkup(document, `/lit/${route.path}`);

  const routeDirectory = new URL(route.path, outputRoot);
  await mkdir(routeDirectory, { recursive: true });
  await writeFile(new URL('index.html', routeDirectory), serialize(document));
}

const homeDocument = parse(template);
setRootMarkup(homeDocument, '/lit/');
await writeFile(new URL('index.html', outputRoot), serialize(homeDocument));

const notFoundDocument = parse(template);
const notFoundTitle = findNode(notFoundDocument, (node) => node.tagName === 'title');
const notFoundCanonical = findNode(
  notFoundDocument,
  (node) => node.tagName === 'link' && getAttribute(node, 'rel') === 'canonical'
);
const notFoundSchema = findNode(
  notFoundDocument,
  (node) => node.tagName === 'script' && getAttribute(node, 'id') === 'site-structured-data'
);

if (notFoundTitle?.childNodes?.[0]) {
  notFoundTitle.childNodes[0].value = 'Page unavailable | LIT7s';
}

if (notFoundCanonical) {
  setAttribute(notFoundCanonical, 'href', siteRoot);
}

if (notFoundSchema?.childNodes?.[0]) {
  notFoundSchema.childNodes[0].value = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Page unavailable | LIT7s',
    url: siteRoot
  });
}

setMeta(notFoundDocument, 'name', 'description', 'Return to the LIT7s event calendar, tournament guides and latest news.');
setMeta(notFoundDocument, 'name', 'robots', 'noindex,follow');
setMeta(notFoundDocument, 'property', 'og:title', 'Page unavailable | LIT7s');
setMeta(notFoundDocument, 'property', 'og:description', 'Return to the LIT7s event calendar, tournament guides and latest news.');
setMeta(notFoundDocument, 'property', 'og:url', siteRoot);
setMeta(notFoundDocument, 'name', 'twitter:title', 'Page unavailable | LIT7s');
setMeta(notFoundDocument, 'name', 'twitter:description', 'Return to the LIT7s event calendar, tournament guides and latest news.');
setRootMarkup(notFoundDocument, '/lit/__unavailable__/');
await writeFile(new URL('404.html', outputRoot), serialize(notFoundDocument));
await renderServer.close();
