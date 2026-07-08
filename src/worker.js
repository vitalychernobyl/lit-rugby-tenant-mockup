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

    if (!shouldServeShell) return response;

    const headers = new Headers(response.headers);
    headers.set("Cache-Control", "no-store, must-revalidate");
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  },
};
