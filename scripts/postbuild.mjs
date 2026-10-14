// GitHub Pages serves static files only: give each client-side route its own index.html so deep
// links (e.g. the privacy policy URL used by the app and App Store) load directly with status 200.
import { copyFileSync, mkdirSync } from "node:fs";

const routes = ["privacy", "support"];
for (const route of routes) {
  mkdirSync(`dist/${route}`, { recursive: true });
  copyFileSync("dist/index.html", `dist/${route}/index.html`);
}
copyFileSync("dist/index.html", "dist/404.html");
console.log(`postbuild: copied index.html for ${routes.join(", ")} and 404.html`);
