# Brew Fonts

Typography files for the Brew design system. Upload this entire `fonts/` folder to Claude Design alongside the component samples.

## Font files

| File | Tailwind class | Usage |
|------|----------------|-------|
| `Suise.ttf` | `font-swisse` | **Body text** — metadata lines (year, country, genre), descriptions, UI copy |
| `SuiseMed.otf` | `font-swisse-med` | **Display / headings** — titles, section headers, CTAs, movie card titles, nav |
| `Helvetica.ttf` | `font-helvetica` | Legacy fallback (rarely used directly) |
| `InstrumentSerif-Regular.woff2` | `font-instrument-serif` | **Editorial** — Subtext blog headlines, Brew+ "plus" italic |
| `InstrumentSerif-Italic.woff2` | `font-instrument-serif italic` | Brew+ stacked logo, editorial emphasis |
| `ArchivoBlack-Regular.woff2` | `font-archivo-black` | Brew+ "brew" word in CSS text logo |
| `Geist-Regular.woff2` | `font-geist` | Subtext category badges, mono labels |
| `Geist-Medium.woff2` | `font-geist font-medium` | Subtext uppercase labels |

> **Note:** Production filenames use `Suise` (not "Swisse") — this is the actual font name on disk in `vod-frontend/public/fonts/`.

## Usage rules

```
Headings & bold UI     → font-swisse-med   (Suise Med)
Body & metadata        → font-swisse       (Suise Regular)   ← "2024 • India" lines
Editorial / Subtext    → font-instrument-serif
Brew+ logo "brew"       → font-archivo-black
Category badges        → font-geist uppercase tracking-wider
```

**Common mistake:** Metadata spans like `2024 • India` must include `font-swisse` — without it they fall back to system `ui-sans-serif`.

Example:
```tsx
<span className="text-sm text-white/60 font-swisse tracking-tighter">
  2024 • India
</span>
```

## CSS setup

Import `fonts.css` in your preview HTML or app:

```html
<link rel="stylesheet" href="./fonts/fonts.css" />
```

Or in React/Next.js, copy the `@font-face` blocks from `fonts.css`.

## Production source

Loaded in `vod-frontend/src/app/[locale]/layout.tsx` via `next/font/local` and `next/font/google`.
