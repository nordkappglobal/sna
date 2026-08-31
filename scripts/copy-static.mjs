import { cp, mkdir } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
await mkdir(resolve(root, "dist", "assets"), { recursive: true });
await cp(resolve(root, "assets"), resolve(root, "dist", "assets"), { recursive: true, force: true });
