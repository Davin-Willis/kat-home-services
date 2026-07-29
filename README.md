# kathomeservices.com

Production website for **KAT Home Services, LLC** — fully insured home repair
and remodeling in Louisville, KY. Owners: Alex Kirsch and Tony Bartley.

Built with Next.js (static export), Tailwind CSS v4, and Framer Motion.

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy

Every push to `main` builds a static export (`next build` → `out/`) and
publishes it to GitHub Pages via `.github/workflows/deploy.yml`.

The site serves from the **root** of the custom domain `kathomeservices.com`
(`public/CNAME`), so `next.config.ts` deliberately has **no basePath or
assetPrefix** — adding one would break every asset URL.

DNS (at the registrar) points the apex to GitHub Pages' A records
(185.199.108.153 / .109 / .110 / .111) and `www` to
`davin-willis.github.io` via CNAME.

## Content notes

- Photos in `public/images` are real KAT project photos, resized for web.
- The testimonial slot currently shows "Recent work" project cards; swap in
  real customer reviews when the client provides them.
