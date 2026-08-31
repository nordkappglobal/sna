import { existsSync } from "node:fs";
import { createRequire } from "node:module";
import { join, resolve } from "node:path";
import { defineConfig } from "vite";

const require = createRequire(import.meta.url);

export default defineConfig({
  publicDir: false,
  plugins: [
    {
      name: "vercel-api-dev-server",
      configureServer(server) {
        server.middlewares.use("/api", (request, response, next) => {
          const urlPath = request.url.split("?")[0];
          let filePath = join(process.cwd(), "api", urlPath);
          if (existsSync(`${filePath}.js`)) filePath = `${filePath}.js`;
          else if (existsSync(join(filePath, "index.js"))) filePath = join(filePath, "index.js");
          else return next();

          let body = "";
          request.on("data", (chunk) => { body += chunk.toString(); });
          request.on("end", async () => {
            try { request.body = body ? JSON.parse(body) : {}; }
            catch { request.body = body; }
            response.status = (code) => { response.statusCode = code; return response; };
            response.json = (data) => {
              response.setHeader("Content-Type", "application/json");
              response.end(JSON.stringify(data));
            };
            try {
              require("dotenv").config();
              delete require.cache[require.resolve(filePath)];
              await require(filePath)(request, response);
            } catch (error) {
              console.error("API Error:", error);
              if (!response.headersSent) response.status(500).json({ ok: false, error: "internal_error" });
            }
          });
        });
      }
    }
  ],
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        landing: resolve(import.meta.dirname, "index.html"),
        admin: resolve(import.meta.dirname, "admin/index.html"),
        thankYou: resolve(import.meta.dirname, "thank-you.html")
      }
    }
  }
});
