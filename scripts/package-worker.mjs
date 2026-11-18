import { cp, mkdir, rm } from "node:fs/promises";
await rm("dist", { recursive: true, force: true });
await mkdir("dist/server", { recursive: true });
await cp("out", "dist/client", { recursive: true });
await cp("worker/index.mjs", "dist/server/index.js");
