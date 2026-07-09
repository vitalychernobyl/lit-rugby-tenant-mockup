export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const isAsset = /\.[a-z0-9]+$/i.test(url.pathname);
    const shouldServeShell = !isAsset;

    if (shouldServeShell || url.pathname === "/index.html") {
      return shellResponse();
    }

    const response = await env.ASSETS.fetch(new Request(url.toString(), request));

    return response;
  },
};

function shellResponse() {
  return new Response(
    `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Rugbymonkey - Rugby Tournaments Calendar</title>
    <meta
      name="description"
      content="Find rugby tournaments, team entry, spectator tickets, media, and event details across 7s, 15s, beach rugby, touch, tag, and youth competitions."
    />
    <meta name="theme-color" content="#0b120d" />
    <link rel="icon" href="/assets/rugbymonkey-logo-rm9.png" type="image/png" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="stylesheet" href="/styles-rm9.css" />
  </head>
  <body>
    <div id="app" class="site-shell" aria-live="polite"></div>
    <script type="module" src="/app-rm9.js"></script>
  </body>
</html>`,
    {
      headers: {
        "content-type": "text/html; charset=utf-8",
        "cache-control": "no-store, must-revalidate",
      },
    },
  );
}
