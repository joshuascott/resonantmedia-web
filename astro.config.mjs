import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.resonantmedia.com",
  integrations: [sitemap()],
  redirects: {
    "/blog": "/",
    "/who-we-are": "/",
    "/our-process": "/#approach",
    "/why-all-the-mountains": "/",
    "/privacy-policy": "/privacy",
    "/contact-us": "/#contact",
    "/sitemap": "/sitemap-index.xml",
    "/rendering-html-as-coldfusion-on-iis-7-5": "/",
    "/google-syncing-on-ical": "/",
    "/version-7-0-crisp-and-clean": "/",
  },
});
