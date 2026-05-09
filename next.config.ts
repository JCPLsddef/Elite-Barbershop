import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  turbopack: {
    root: ".",
  },
  images: {
    formats: ["image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/pages/a-propos-de-nous", destination: "/a-propos", permanent: true },
      { source: "/pages/barbier-laval", destination: "/barbier-laval", permanent: true },
      { source: "/pages/franchise", destination: "/franchise", permanent: true },
      { source: "/pages/contact", destination: "/contact", permanent: true },
      { source: "/pages/nos-produits-premium", destination: "/services", permanent: true },
      { source: "/pages/data-sharing-opt-out", destination: "/", permanent: true },
      { source: "/products/loretto-super-dust", destination: "/services", permanent: true },
      { source: "/products/:slug*", destination: "/", permanent: true },
      { source: "/collections/:slug*", destination: "/", permanent: true },
      { source: "/blogs/:slug*", destination: "/", permanent: true },
      { source: "/cdn/:slug*", destination: "/", permanent: true },
    ];
  },
};

export default withNextIntl(nextConfig);
