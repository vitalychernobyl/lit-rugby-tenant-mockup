export default {
  fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/lit" || url.pathname === "/lit/index.html") {
      url.pathname = "/";
    } else if (url.pathname.startsWith("/lit/")) {
      url.pathname = url.pathname.slice("/lit".length) || "/";
    }

    const assetRequest = new Request(url.toString(), request);
    return env.ASSETS.fetch(assetRequest);
  },
};
