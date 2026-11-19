# A Little Escape for Us ♡

A small, mobile-first scrapbook invitation: an envelope, a handwritten letter, three sealed
getaway cards, a choice, and a postcard confirmation. React + Vite + Tailwind + Framer Motion.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build && npm run preview   # test the production build
```

## Edit the content

Everything personal lives in **`src/config.js`** — letter, names, destinations, highlights,
image paths, getaway dates, button labels. Nothing personal is hard-coded in components.

- **Dates:** set `getaway.dates` (e.g. `'13–15 Dec'`). Empty shows "Let's pick them together".
- **Photos of you two:** add `src` to `letter.polaroids` items. Without it, a doodle shows.
- **Property photos:** see [`docs/ASSET_INVENTORY.md`](docs/ASSET_INVENTORY.md). Missing files
  show a labelled placeholder automatically, so the site never looks broken.

## How it behaves

- The chosen destination is saved in `localStorage`; on refresh she lands back on the
  "It's a date!" postcard. "Wait, let me pick again" and "Start the whole thing again" clear it.
- Music is **off by default**. The toggle plays a soft, original music-box tune generated in the
  browser (no audio file).
- Respects `prefers-reduced-motion`.

## Publish on GitHub Pages

1. Create a new repo on GitHub (e.g. `a-little-escape`). Private repos need a paid plan for Pages;
   on a free plan the repo must be public — read the privacy note below first.
2. Push this folder:
   ```bash
   git remote add origin https://github.com/<you>/a-little-escape.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` builds and deploys on every push to `main`.
   Your link: `https://<you>.github.io/a-little-escape/`

`vite.config.js` uses `base: './'`, so all assets resolve relatively and the build works under
any repo name.

## Privacy note

A public repo and its Pages site are visible to anyone with the link (the page has `noindex`,
but that's not protection). Don't commit private photos, phone numbers or booking details.
