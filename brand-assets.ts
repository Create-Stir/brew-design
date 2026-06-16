/**
 * Brew brand assets — logos, wordmarks, badges
 * Single source of truth for Claude Design reference.
 * All URLs point to CDN; sizes match src/lib/imageUrlOptimizer.ts IMAGE_PRESETS.
 */

// ─── PRIMARY BRAND MARKS ──────────────────────────────────────

/** Stacked 3-line mark: "Watch / hidden / gems" — header (US routes) */
export const WATCH_HIDDEN_GEMS_LOGO = {
  src: "https://createstir.b-cdn.net/stir-static/watch-hidden-gems.png",
  alt: "Watch hidden gems",
  /** Header: h-10 md:h-12, preset watchHiddenGemsLogo */
  header: { width: 80, height: 64, className: "h-10 md:h-12 w-auto object-contain" },
  /** Footer: larger stacked display, preset watchHiddenGemsFooter */
  footer: { width: 280, height: 224, className: "h-36 sm:h-44 md:h-20 w-auto object-contain" },
  usedIn: ["Header (US)", "Footer", "GhichPichLite landing"],
} as const;

/** Main Brew wordmark — "brew" script logo */
export const BREW_WORDMARK = {
  src: "https://createstir.b-cdn.net/stir-static/brew.png",
  alt: "Brew",
  width: 180,
  height: 90,
  className: "h-10 md:h-12 w-auto object-contain",
  usedIn: ["Header (non-US)", "Footer", "LoginDialog", "NavigationTray", "ShareDrawer"],
} as const;

/** Brew wordmark — US TV app variant (local public asset) */
export const BREWTV_WORDMARK = {
  src: "/brewtv-logo.png",
  alt: "Brew TV",
  width: 180,
  height: 90,
  className: "h-10 md:h-12 w-auto object-contain",
  usedIn: ["Header (US routes)", "Footer (US routes)"],
} as const;

/** Square/OG Brew logo — SEO, social, legal pages */
export const BREW_LOGO_OG = {
  src: "https://createstir.b-cdn.net/stir-static/brew_logo.png",
  alt: "Brew - Watch hidden gems",
  usedIn: ["Open Graph meta", "FAQs", "Terms", "Privacy", "Cinema Explorer SEO"],
} as const;

/** Brew+ subscription wordmark (webp) */
export const BREW_PLUS_WORDMARK = {
  src: "https://createstir.b-cdn.net/stir-static/brew%2B.webp",
  alt: "Brew+",
  className: "h-[14px] md:h-4 w-auto object-contain",
  usedIn: ["MovieShowcase2", "VHS spine", "RelatedMoviesGrid", "BrewPlusPage", "Subscribe"],
} as const;

/** Brew+ text logo (CSS component — no image) */
export const BREW_PLUS_TEXT_LOGO = {
  component: "BrewPlusLogo", // src/components/BrewPlusLogo.tsx
  fonts: { brew: "font-archivo-black", plus: "font-instrument-serif italic" },
  sizes: ["xs", "sm", "md", "lg", "xl"],
  layouts: ["horizontal", "stacked"],
  modes: ["light", "dark", "custom"],
} as const;

/** Login dialog hero text (i18n, not image) — alternative to stacked logo */
export const WATCH_HIDDEN_GEMS_TEXT = {
  en: ["Watch", "Hidden", "Gems"], // Auth.watchHiddenGems — split by <br />
  className: "text-5xl leading-[0.9] tracking-[-0.08em] font-swisse-med font-medium text-white",
  usedIn: ["LoginDialog hero (non-US)"],
} as const;

// ─── SUB-BRANDS ───────────────────────────────────────────────

export const SUBTEXT_LOGO = {
  src: "https://createstir.b-cdn.net/stir-static/subtext-logo.png",
  alt: "Subtext",
  className: "h-9 md:h-11 w-auto object-contain",
  usedIn: ["Subtext blog nav", "Header (Subtext pages)"],
} as const;

export const BARSAATI_LOGO = {
  src: "https://createstir.b-cdn.net/stir-static/barsaati-nav.png",
  alt: "Barsaati",
  usedIn: ["Writers Room"],
} as const;

// ─── PLATFORM / APP STORE BADGES ──────────────────────────────

export const APP_STORE_BADGES = {
  apple: {
    src: "https://createstir.b-cdn.net/stir-static/icon-apple-store.svg",
    alt: "Download on the App Store",
    width: 180,
    height: 44,
  },
  googlePlay: {
    src: "https://createstir.b-cdn.net/stir-static/icon-google-play.png",
    alt: "Get it on Google Play",
    width: 180,
    height: 40,
  },
  googleTv: {
    src: "https://createstir.b-cdn.net/stir-static/google-tv-logo.png",
    alt: "Google TV",
    width: 140,
    height: 24,
  },
  amazonFireTv: {
    src: "https://createstir.b-cdn.net/stir-static/amazon-fire-tv-logo.png",
    alt: "Amazon Fire TV",
    width: 170,
    height: 48,
  },
  appleTv: {
    src: "https://createstir.b-cdn.net/stir-static/apple-tv-logo.png",
    alt: "Apple TV",
    width: 120,
    height: 20,
  },
} as const;

// ─── IN-PRODUCT ICONS ─────────────────────────────────────────

export const BREW_COIN = {
  src: "https://createstir.b-cdn.net/stir-static/brew-coin-small.webp",
  alt: "Brew Coin",
  usedIn: ["CoinPurchaseButton", "CoinUnlockDialog"],
} as const;

export const FESTIVAL_WREATH = {
  src: "https://createstir.b-cdn.net/stir-static/wreath.png",
  alt: "Festival laurel",
  width: 32,
  height: 32,
  usedIn: ["StatusBadge (Cannes, Venice, Berlin, Sundance, Toronto)"],
} as const;

export const DEFAULT_USER_AVATAR = {
  src: "https://createstir.b-cdn.net/project-assets/common/default_user.png",
  alt: "Default user avatar",
  usedIn: ["CastMemberCard fallback", "UserProfile"],
} as const;

/** Brew avatar pool — profile picker */
export const BREW_AVATAR_PATTERN = {
  src: "https://createstir.b-cdn.net/stir-static/brew-avatars/brew-avatar-{id}.png",
  idRange: "001–050", // zero-padded 3 digits
  usedIn: ["Profile page avatar picker"],
} as const;

// ─── AV QUALITY LOGOS ─────────────────────────────────────────
// Full list in src/lib/qualityMapping.json

export const QUALITY_LOGOS = {
  "4k": "https://createstir.b-cdn.net/campaign-assets/common-vod/icons/4k.png",
  fullHd: "https://createstir.b-cdn.net/campaign-assets/common-vod/icons/full_hd.png",
  hd: "https://createstir.b-cdn.net/campaign-assets/common-vod/icons/hd.png",
  dolbyAtmos: "https://createstir.b-cdn.net/campaign-assets/common-vod/icons/dolby_atoms.png",
  dolbyVision: "https://createstir.b-cdn.net/campaign-assets/common-vod/icons/dolby_vision.png",
  hdr10: "https://createstir.b-cdn.net/campaign-assets/common-vod/icons/hdr_10.png",
  surround51: "https://createstir.b-cdn.net/campaign-assets/common-vod/icons/surround_5_1.png",
} as const;

// ─── MOVIE TITLE ART (per-film, dynamic) ────────────────────────

export const TITLE_ART_LOGO = {
  /** Per-movie title treatment PNG from campaign API */
  field: "logo_url", // ContentData.logo_url / LegacyMovieData.logo_url
  preset: "titleArtLogo", // 160×52 CDN preset
  className: "h-16 md:h-24 w-auto object-contain",
  usedIn: ["MovieShowcase2", "HeroSection", "MovieInfoSection"],
} as const;

/** All brand assets indexed by key */
export const BRAND_ASSETS = {
  watchHiddenGems: WATCH_HIDDEN_GEMS_LOGO,
  brewWordmark: BREW_WORDMARK,
  brewTvWordmark: BREWTV_WORDMARK,
  brewLogoOg: BREW_LOGO_OG,
  brewPlusWordmark: BREW_PLUS_WORDMARK,
  brewPlusTextLogo: BREW_PLUS_TEXT_LOGO,
  watchHiddenGemsText: WATCH_HIDDEN_GEMS_TEXT,
  subtext: SUBTEXT_LOGO,
  barsaati: BARSAATI_LOGO,
  appStore: APP_STORE_BADGES,
  brewCoin: BREW_COIN,
  festivalWreath: FESTIVAL_WREATH,
  defaultAvatar: DEFAULT_USER_AVATAR,
  qualityLogos: QUALITY_LOGOS,
  titleArt: TITLE_ART_LOGO,
} as const;
