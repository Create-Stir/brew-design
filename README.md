# Brew Design Reference

> **Repo:** [Create-Stir/brew-design](https://github.com/Create-Stir/brew-design)  
> Self-contained React samples of every UI element on the Brew OTT platform (`vod-frontend`).  
> Use as visual + structural reference for Claude Design and other AI design tools.

## How to use

1. Pick the category folder that matches what you're designing.
2. Each file is a **single component** with **inline sample data** (field comments explain each value).
3. Tailwind classes match production — reuse them as-is.
4. See `design-tokens.ts` for brand colors/fonts and `sample-data.ts` for shared dummy objects.

## Brand logos

All logo URLs, sizes, and usage contexts live in **`brand-assets.ts`**. Visual samples in **`logos/brand-logos.tsx`**.

| Asset | CDN URL | Used in |
|-------|---------|---------|
| Watch hidden gems (stacked) | `watch-hidden-gems.png` | Header (US), Footer |
| Brew wordmark | `brew.png` | Header (non-US), Login, Footer |
| Brew+ wordmark | `brew%2B.webp` | Showcase, Subscribe, VHS spine |
| Brew OG / SEO | `brew_logo.png` | Open Graph, legal pages |
| Subtext | `subtext-logo.png` | Editorial blog nav |
| App store badges | `icon-apple-store.svg`, etc. | Footer |

Login dialog uses **text** ("Watch / Hidden / Gems") on non-US routes, not the stacked image.

## Folder structure

| Folder | Contents |
|--------|----------|
| `brand-assets.ts` | All logo URLs, sizes, usage map |
| `logos/` | Brand logo visual samples (header, footer, Brew+, app badges) |
| `cards/` | MovieCard (landscape, portrait, VHS), library card, cast card, director card, ending-screen card |
| `grids/` | MovieGrid (scroll + grid), DirectorGrid, related movies |
| `showcases/` | MovieShowcase2 hero carousel |
| `badges/` | StatusBadge, QualityBadge, ReleaseCountdown |
| `buttons/` | Button variants, Watch Now, hero action buttons |
| `typography/` | Section titles, movie info lines, star rating |
| `dialogs/` | Base dialog, buy/rent, login, poster gallery, synopsis, random movie, share drawer |
| `navigation/` | Header, bottom navbar, footer, movie page tabs |
| `hero/` | Movie page hero, info section, purchase options |
| `forms/` | Input, OTP, comment/review form |
| `subscription/` | Brew+ pricing cards |
| `editorial/` | Subtext blog cards and hero carousel |
| `player/` | Video controls bar, progress bar |
| `skeletons/` | Loading / shimmer placeholders |
| `misc/` | FAQ accordion, cookie banner, error page, region restricted, random picker, testimonial |

## Design tokens (quick ref)

- **Primary accent:** `stir-yellow` (#ffc15e)
- **Secondary accents:** `stir-blue`, `stir-purple`, `stir-orange`
- **Display font:** `font-swisse-med`
- **Body font:** `font-swisse` / `font-geist`
- **Background:** dark (`bg-black`, `bg-zinc-900`, gradients from backdrop)
- **Cards:** `rounded-xl`, `border border-white/10`, `bg-white/5`
- **Badges:** clipped corner (`rounded-br-none`), uppercase, bold

## Sample data types

All types live in `sample-data.ts`. Key shapes:

- `SampleMovie` — card/grid item
- `SampleShowcaseMovie` — homepage hero slide
- `SampleCastMember` — cast headshot card
- `SampleDirector` — director showcase item
- `SampleReview` — user review
- `SampleSubscriptionPlan` — Brew+ plan
- `SampleBlogArticle` — Subtext editorial article
- `SampleFaqItem` — FAQ accordion item

## Production source map

| Sample file | Production component |
|-------------|---------------------|
| `cards/movie-card-*.tsx` | `src/components/MovieCard.tsx` |
| `grids/movie-grid-*.tsx` | `src/components/MovieGrid.tsx` |
| `showcases/movie-showcase-2.tsx` | `src/components/MovieShowcase2.tsx` |
| `badges/status-badge.tsx` | `src/components/StatusBadge.tsx` |
| `navigation/header.tsx` | `src/components/header/Header.tsx` |
| `hero/hero-section.tsx` | `src/app/.../hero_section/HeroSection.tsx` |
| `dialogs/buy-rent-dialog.tsx` | `src/components/payment/BuyRentDialog.tsx` |
