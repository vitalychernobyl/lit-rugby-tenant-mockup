const securityHeaders = {
  "content-security-policy": "default-src 'self'; base-uri 'self'; font-src 'self' https://fonts.gstatic.com; form-action 'self'; frame-ancestors 'none'; img-src 'self' data: https:; script-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; upgrade-insecure-requests",
  "permissions-policy": "camera=(), geolocation=(), microphone=()",
  "referrer-policy": "strict-origin-when-cross-origin",
  "x-content-type-options": "nosniff",
  "x-frame-options": "DENY",
};

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const isLitRoute = url.pathname === "/lit" || url.pathname === "/lit/index.html" || url.pathname.startsWith("/lit/");
    const isAsset = /\.[a-z0-9]+$/i.test(url.pathname);
    const shouldServeShell = isLitRoute && !isAsset;

    if (url.pathname === "/lit" || url.pathname === "/lit/index.html") {
      url.pathname = "/";
    } else if (url.pathname.startsWith("/lit/")) {
      url.pathname = url.pathname.slice("/lit".length) || "/";
    }

    if (shouldServeShell) {
      url.searchParams.set("_shell", "global-rugby-20260708");
    }

    const assetRequest = new Request(url.toString(), request);
    const response = await env.ASSETS.fetch(assetRequest);

    const headers = new Headers(response.headers);
    for (const [name, value] of Object.entries(securityHeaders)) headers.set(name, value);
    if (shouldServeShell) headers.set("cache-control", "no-store, must-revalidate");

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  },
};
