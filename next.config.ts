import type { NextConfig } from "next";

// ============================================================================
// PREVIEW MODE — REVERT BEFORE GOING LIVE ON kathomeservices.com
//
// basePath is TEMPORARILY set so the site can be previewed directly at
// https://davin-willis.github.io/kat-home-services/ while the custom domain
// still points at the client's old Squarespace site.
//
// Before the DNS repoint, revert BOTH of these or the production site breaks:
//   1. Set BASE_PATH back to "" (empty string)
//   2. Restore public/CNAME containing: kathomeservices.com
//      and re-set the custom domain in the repo's Pages settings
// ============================================================================
const BASE_PATH = "/kat-home-services";

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
