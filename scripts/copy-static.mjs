import { copyFile, cp, mkdir } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
await mkdir(resolve(root, "dist", "assets"), { recursive: true });
await cp(resolve(root, "assets"), resolve(root, "dist", "assets"), { recursive: true, force: true });

for (const file of [
  "favicon.ico",
  "favicon-32x32.png",
  "favicon-192x192.png",
  "apple-touch-icon.png",
  "og-sna-after-school.png"
]) {
  await copyFile(resolve(root, file), resolve(root, "dist", file));
}
