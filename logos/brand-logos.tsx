/**
 * CLAUDE DESIGN SAMPLE — Brand logos & wordmarks
 * Production refs: Header.tsx, Footer.tsx, BrewPlusLogo.tsx, LoginDialog.tsx
 *
 * Shows every Brew logo in its typical placement context.
 */
import React from "react";
import {
  WATCH_HIDDEN_GEMS_LOGO,
  BREW_WORDMARK,
  BREW_PLUS_WORDMARK,
  SUBTEXT_LOGO,
  APP_STORE_BADGES,
  FESTIVAL_WREATH,
  BREW_COIN,
  WATCH_HIDDEN_GEMS_TEXT,
} from "../brand-assets";

/** Header logo row — US uses stacked "Watch hidden gems", non-US uses brew.png */
export function HeaderLogosSample() {
  const isUSRoute = true; // toggles which logo shows in header

  return (
    <div className="flex items-center gap-4 p-4 bg-black border-b border-white/10">
      {isUSRoute ? (
        /* US header: stacked "Watch hidden gems" image */
        <img
          src={WATCH_HIDDEN_GEMS_LOGO.src}
          alt={WATCH_HIDDEN_GEMS_LOGO.alt}
          width={WATCH_HIDDEN_GEMS_LOGO.header.width}
          height={WATCH_HIDDEN_GEMS_LOGO.header.height}
          className={WATCH_HIDDEN_GEMS_LOGO.header.className}
        />
      ) : (
        /* Non-US header: brew wordmark */
        <img
          src={BREW_WORDMARK.src}
          alt={BREW_WORDMARK.alt}
          width={BREW_WORDMARK.width}
          height={BREW_WORDMARK.height}
          className={BREW_WORDMARK.className}
        />
      )}
    </div>
  );
}

/** Footer brand block — both logos stacked */
export function FooterLogosSample() {
  return (
    <div className="flex flex-col gap-4 p-6 bg-black">
      {/* "Watch hidden gems" — large on mobile, compact on desktop */}
      <img
        src={WATCH_HIDDEN_GEMS_LOGO.src}
        alt="Watch hidden gems on Brew TV"
        width={WATCH_HIDDEN_GEMS_LOGO.footer.width}
        height={WATCH_HIDDEN_GEMS_LOGO.footer.height}
        className={WATCH_HIDDEN_GEMS_LOGO.footer.className}
      />
      {/* Brew wordmark below */}
      <img
        src={BREW_WORDMARK.src}
        alt={BREW_WORDMARK.alt}
        width={BREW_WORDMARK.width}
        height={BREW_WORDMARK.height}
        className="h-12 w-auto object-contain"
      />
    </div>
  );
}

/** Login dialog hero — brew.png + text "Watch Hidden Gems" (not image) */
export function LoginHeroLogosSample() {
  const lines = WATCH_HIDDEN_GEMS_TEXT.en; // ["Watch", "Hidden", "Gems"]

  return (
    <div className="p-8 bg-black max-w-md">
      <img
        src={BREW_WORDMARK.src}
        alt={BREW_WORDMARK.alt}
        className="h-14 w-auto object-contain mb-8"
      />
      <h1 className={WATCH_HIDDEN_GEMS_TEXT.className}>
        {lines.map((line, idx) => (
          <span key={line}>
            {line}
            {idx < lines.length - 1 && <br />}
          </span>
        ))}
      </h1>
    </div>
  );
}

/** Brew+ wordmark — image + CSS text variant */
export function BrewPlusLogosSample() {
  return (
    <div className="flex flex-col gap-6 p-6 bg-zinc-900 rounded-xl">
      {/* Image wordmark (webp) */}
      <div>
        <p className="text-white/50 text-xs uppercase mb-2">Image wordmark</p>
        <img
          src={BREW_PLUS_WORDMARK.src}
          alt={BREW_PLUS_WORDMARK.alt}
          className={BREW_PLUS_WORDMARK.className}
        />
      </div>

      {/* CSS text logo (BrewPlusLogo component style) */}
      <div>
        <p className="text-white/50 text-xs uppercase mb-2">CSS text logo (horizontal)</p>
        <div className="flex flex-row items-baseline whitespace-nowrap">
          <span className="text-2xl font-archivo-black tracking-[-0.08em] bg-gradient-to-b from-gray-200 to-white bg-clip-text text-transparent">
            brew
          </span>
          <span className="text-2xl -ml-0.5 font-instrument-serif italic bg-gradient-to-b from-[#f3e3a1] via-[#c5a15a] to-[#8d6e32] bg-clip-text text-transparent">
            plus
          </span>
        </div>
      </div>

      {/* Stacked layout (bottom nav tab) */}
      <div>
        <p className="text-white/50 text-xs uppercase mb-2">CSS text logo (stacked)</p>
        <div className="flex flex-col items-center leading-[0.85]">
          <span className="text-[17px] font-archivo-black tracking-[-0.08em] bg-gradient-to-b from-gray-200 to-white bg-clip-text text-transparent">
            brew
          </span>
          <span className="text-[20px] font-instrument-serif italic bg-gradient-to-b from-[#f3e3a1] via-[#c5a15a] to-[#8d6e32] bg-clip-text text-transparent -mt-px">
            plus
          </span>
        </div>
      </div>
    </div>
  );
}

/** Subtext editorial logo */
export function SubtextLogoSample() {
  return (
    <div className="p-4 bg-black">
      <img
        src={SUBTEXT_LOGO.src}
        alt={SUBTEXT_LOGO.alt}
        className={SUBTEXT_LOGO.className}
      />
    </div>
  );
}

/** App store + TV platform badges (footer) */
export function AppStoreBadgesSample() {
  const badges = APP_STORE_BADGES;

  return (
    <div className="flex flex-wrap gap-3 p-4 bg-black items-center">
      <img src={badges.apple.src} alt={badges.apple.alt} className="h-11 w-auto" />
      <img src={badges.googlePlay.src} alt={badges.googlePlay.alt} className="h-10 w-auto" />
      <img src={badges.googleTv.src} alt={badges.googleTv.alt} className="h-6 w-auto opacity-70" />
      <img src={badges.amazonFireTv.src} alt={badges.amazonFireTv.alt} className="h-12 w-auto opacity-70" />
      <img src={badges.appleTv.src} alt={badges.appleTv.alt} className="h-5 w-auto opacity-70" />
    </div>
  );
}

/** In-product icons: coin, festival wreath */
export function ProductIconsSample() {
  return (
    <div className="flex items-center gap-6 p-4 bg-zinc-900 rounded-xl">
      <div className="flex flex-col items-center gap-1">
        <img src={BREW_COIN.src} alt={BREW_COIN.alt} className="h-8 w-8" />
        <span className="text-white/50 text-[10px]">Brew Coin</span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <img src={FESTIVAL_WREATH.src} alt={FESTIVAL_WREATH.alt} className="w-8 h-8 object-contain" />
        <span className="text-white/50 text-[10px]">Festival wreath</span>
      </div>
    </div>
  );
}

/** Full catalog grid — all logos at a glance for Claude Design */
export function BrandLogosCatalogSample() {
  return (
    <div className="space-y-8 p-6 bg-black">
      <h2 className="text-xl font-swisse-med text-white tracking-tighter">Brand Logos Catalog</h2>
      <HeaderLogosSample />
      <FooterLogosSample />
      <LoginHeroLogosSample />
      <BrewPlusLogosSample />
      <SubtextLogoSample />
      <AppStoreBadgesSample />
      <ProductIconsSample />
    </div>
  );
}

export default BrandLogosCatalogSample;
