export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const isAsset = /\.[a-z0-9]+$/i.test(url.pathname);
    const shouldServeShell = !isAsset;

    if (shouldServeShell || url.pathname === "/index.html") {
      url.pathname = "/";
    }

    if (shouldServeShell) {
      url.searchParams.set("_shell", "rugbymonkey-20260708");
    }

    const response = await env.ASSETS.fetch(new Request(url.toString(), request));

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
