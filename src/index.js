export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/image") {
      const key = url.searchParams.get("key");
      if (!key) return new Response("missing key", { status: 400 });
      const obj = await env.IMAGES.get(key);
      if (!obj) return new Response("not found", { status: 404 });
      const h = new Headers();
      obj.writeHttpMetadata(h);
      h.set("Access-Control-Allow-Origin", "*");
      h.set("Cache-Control", "public, max-age=86400");
      return new Response(obj.body, { headers: h });
    }
    return new Response(JSON.stringify({ ok: true, usage: "/image?key=..." }), {
      headers: { "Content-Type": "application/json" },
    });
  },
};
