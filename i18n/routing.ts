import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["fr", "en"],
  defaultLocale: "fr",
  // 'always' (no middleware): every URL is /fr/... or /en/...
  // Required for static export + Cloudflare Workers (Next 16 middleware
  // runs Node-only, which OpenNext/Cloudflare rejects).
  localePrefix: "always",
  pathnames: {
    "/": "/",
    "/services": {
      fr: "/services",
      en: "/services",
    },
    "/about": {
      fr: "/a-propos",
      en: "/about",
    },
    "/barber-laval": {
      fr: "/barbier-laval",
      en: "/barber-laval",
    },
    "/franchise": {
      fr: "/franchise",
      en: "/franchise",
    },
    "/contact": {
      fr: "/contact",
      en: "/contact",
    },
  },
});

export type Locale = (typeof routing.locales)[number];
