import type { NextConfig } from "next";

// This site serves from the root of the custom domain kathomeservices.com
// (GitHub Pages + public/CNAME), so there is deliberately NO basePath or
// assetPrefix — adding one would break every asset URL.
const nextConfig: NextConfig = {
  // Static export: `next build` emits plain HTML/CSS/JS into ./out —
  // deployable to any static host (GitHub Pages, Vercel, ...).
  output: "export",
  // The default <Image> optimizer needs a server, which a static export
  // doesn't have — required for GitHub Pages.
  images: { unoptimized: true },
};

export default nextConfig;
