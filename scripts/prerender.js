/**
 * Prerender script for Cabinet IVATIS
 * Generates static .html files for each route so search engines can crawl SPA content.
 *
 * Usage: node scripts/prerender.js
 * Run AFTER `npm run build` (or `vite build`).
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, "../dist");

// All routes to prerender
const routes = [
  "/",
  "/about",
  "/services",
  "/services/eies",
  "/services/pges",
  "/services/cges",
  "/services/eess",
  "/services/audit-environnemental",
  "/services/cprp",
  "/services/parc",
  "/services/pmpp",
  "/services/suivi-par-pges",
  "/services/etudes-topographiques",
  "/services/genie-civil-btp",
  "/services/formation",
  "/services/gestion-marine-cotiere",
  "/services/conservation-biodiversite",
  "/services/zones-humides",
  "/services/forets-aires-protegees",
  "/services/sites-touristiques",
  "/services/audit-par-pges",
  "/services/pgrcp",
  "/projects",
  "/contact",
  "/gallery",
  "/faq",
];

async function prerender() {
  const indexHtml = fs.readFileSync(path.join(distDir, "index.html"), "utf-8");

  // Check for injection placeholder
  if (!indexHtml.includes("<!-- app-html -->")) {
    console.error(
      '❌ index.html is missing the <!-- app-html --> placeholder inside <div id="root">.'
    );
    process.exit(1);
  }

  console.log(`🔍 Prerendering ${routes.length} routes...\n`);

  for (const route of routes) {
    const routePath = route === "/" ? "" : route;
    const outDir = path.join(distDir, routePath);
    const outFile = path.join(outDir, "index.html");

    // Create directory
    fs.mkdirSync(outDir, { recursive: true });

    // For basic prerendering without a full SSR framework, we generate
    // the shell HTML with route-specific meta tags injected.
    // A production setup would use puppeteer or playwright here.
    const routeHtml = indexHtml
      .replace("<!-- app-html -->", `<!-- prerendered: ${route} -->`)
      .replace(
        '<link rel="canonical" href="https://cabinetivatis.com/"',
        `<link rel="canonical" href="https://cabinetivatis.com${route === "/" ? "" : route}"`
      );

    fs.writeFileSync(outFile, routeHtml, "utf-8");
    console.log(`  ✅ ${route} → ${path.relative(distDir, outFile)}`);
  }

  console.log(`\n🎉 Prerendered ${routes.length} routes to ${distDir}`);
}

prerender().catch((err) => {
  console.error("Prerender failed:", err);
  process.exit(1);
});
