import type { NextConfig } from "next";

// PRODUCTION: the site serves from the root of the custom domain
// kathomeservices.com (GitHub Pages + public/CNAME + the repo's Pages
// custom-domain setting), so BASE_PATH stays empty. Setting it to a
// subpath (e.g. "/kat-home-services") switches the build to github.io
// preview mode; src/lib/asset.ts picks it up automatically.
const BASE_PATH = "";

const nextConfig: NextConfig = {
  // Static export: `next build` emits plain HTML/CSS/JS into ./out —
  // deployable to any static host (GitHub Pages, Vercel, ...).
  output: "export",
  // The default <Image> optimizer needs a server, which a static export
  // doesn't have — required for GitHub Pages.
  images: { unoptimized: true },
  basePath: BASE_PATH,
  // Exposed so src/lib/asset.ts can prefix public/ image paths, which
  // next/image does not do automatically for plain src strings.
  env: { NEXT_PUBLIC_BASE_PATH: BASE_PATH },
};

export default nextConfig;
