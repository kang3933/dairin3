import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { resolve, sep, extname } from "node:path";
import { Readable } from "node:stream";
import { DatabaseSync } from "node:sqlite";
import worker from "../worker/index.mjs";

const root = resolve("out");
const args = process.argv.slice(2);
const option = (name, fallback) => args.includes(name) ? args[args.indexOf(name) + 1] : fallback;
const port = Number(option("--port", process.env.PORT ?? "3000"));
const host = option("--hostname", "127.0.0.1");
const database = new DatabaseSync(":memory:");
database.exec(await readFile("drizzle/0000_consultations.sql", "utf8"));
const mimeTypes = {
  ".html": "text/html; charset=utf-8", ".css": "text/css", ".js": "text/javascript",
  ".json": "application/json", ".txt": "text/plain; charset=utf-8", ".ico": "image/x-icon",
  ".png": "image/png", ".jpeg": "image/jpeg", ".webp": "image/webp",
  ".ttf": "font/ttf", ".woff2": "font/woff2", ".mp4": "video/mp4",
};

async function assets(request) {
  const path = decodeURIComponent(new URL(request.url).pathname);
  let file = resolve(root, "." + path);
  if (file !== root && !file.startsWith(root + sep)) return new Response(null, { status: 403 });

  let status = 200;
  try {
    if ((await stat(file)).isDirectory()) file = resolve(file, "index.html");
    await stat(file);
  } catch {
    status = 404;
    file = resolve(root, "404.html");
  }

  const bytes = await readFile(file);
  const headers = new Headers({ "Content-Type": mimeTypes[extname(file)] ?? "application/octet-stream" });
  const range = request.headers.get("range")?.match(/^bytes=(\d+)-(\d*)$/);
  if (range && status === 200) {
    const start = Number(range[1]);
    const end = Math.min(range[2] ? Number(range[2]) : bytes.length - 1, bytes.length - 1);
    if (start > end) return new Response(null, { status: 416, headers: { "Content-Range": `bytes */${bytes.length}` } });
    headers.set("Content-Range", `bytes ${start}-${end}/${bytes.length}`);
    headers.set("Content-Length", String(end - start + 1));
    return new Response(bytes.subarray(start, end + 1), { status: 206, headers });
  }
  headers.set("Content-Length", String(bytes.length));
  headers.set("Accept-Ranges", "bytes");
  return new Response(request.method === "HEAD" ? null : bytes, { status, headers });
}

const env = {
  ASSETS: { fetch: assets },
  DB: {
    prepare(sql) {
      return {
        bind(...parameters) {
          return { run: () => ({ success: true, meta: database.prepare(sql).run(...parameters) }) };
        },
      };
    },
  },
};

createServer(async (incoming, outgoing) => {
  try {
    const rawHost = incoming.headers["x-forwarded-host"] ?? incoming.headers.host;
    const scheme = incoming.headers["x-forwarded-proto"] ?? "http";
    const request = new Request(`${scheme}://${rawHost}${incoming.url}`, {
      method: incoming.method,
      headers: incoming.headers,
      ...(incoming.method === "GET" || incoming.method === "HEAD" ? {} : { body: Readable.toWeb(incoming), duplex: "half" }),
    });
    const response = await worker.fetch(request, env);
    outgoing.writeHead(response.status, Object.fromEntries(response.headers));
    if (response.body) Readable.fromWeb(response.body).pipe(outgoing);
    else outgoing.end();
  } catch {
    outgoing.writeHead(500).end("Unable to serve this response.");
  }
}).listen(port, host, () => console.log(`DAIRIN: http://${host}:${port}`));
