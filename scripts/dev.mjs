import { spawn } from "node:child_process";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
// Next.js uses --hostname; preview hosts may pass the equivalent --host flag.
const args = process.argv
  .slice(2)
  .filter((a) => a !== "--strictPort")
  .map((a) => (a === "--host" ? "--hostname" : a));
// The managed preview serves the tested production export; normal npm run dev uses Next.js HMR.
const preview = process.argv.includes("--strictPort");
const entry = preview
  ? ["scripts/serve.mjs", ...args]
  : [require.resolve("next/dist/bin/next"), "dev", ...args];
const child = spawn(process.execPath, entry, {
  stdio: "inherit",
  env: process.env,
});
for (const signal of ["SIGINT", "SIGTERM"])
  process.on(signal, () => child.kill(signal));
child.on("exit", (code) => process.exit(code ?? 1));
