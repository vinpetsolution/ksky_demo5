import type { NextConfig } from "next";

const ONE_DAY = 60 * 60 * 24;
const ONE_WEEK = ONE_DAY * 7;

const nextConfig: NextConfig = {
  reactCompiler: true,

  async headers() {
    return [
      {
        // Static assets in /public (not content-hashed): browser caches 1 day,
        // serves stale for up to 1 week while revalidating in background.
        // Long-term caching is handled at the Cloudflare edge via Cache Rules.
        source: "/:prefix(img|font|brands)/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: `public, max-age=${ONE_DAY}, stale-while-revalidate=${ONE_WEEK}`,
          },
        ],
      },
      {
        // HTML documents must NEVER be cached by the browser: after a redeploy
        // the old HTML references hashed /_next/static chunks that no longer
        // exist, which breaks hydration and leaves users stuck on the loading
        // screen. no-cache forces revalidation on every navigation.
        source: "/((?!_next/|img/|font/|brands/|favicon).*)",
        headers: [
          { key: "Cache-Control", value: "no-cache, must-revalidate" },
        ],
      },
    ];
  },
};

export default nextConfig;
