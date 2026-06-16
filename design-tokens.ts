/**
 * Brew design tokens — reference for Claude Design
 * Matches tailwind.config.js + globals.css + layout.tsx fonts
 */

export const COLORS = {
  stirYellow: "#ffc15e",
  stirYellowHover: "#f9d59b",
  stirBlue: "#13A3E2",
  stirPurple: "#AC72FF",
  stirOrange: "#DB4A2B",
  stirBlack: "#1D1E2C",
  white10: "rgba(255,255,255,0.1)",
  white20: "rgba(255,255,255,0.2)",
  black50: "rgba(0,0,0,0.5)",
} as const;

/**
 * Typography — see fonts/README.md for files and usage rules.
 *
 * IMPORTANT: "font-swisse" is NOT system-ui. It is the custom Suise.ttf font.
 * Body/metadata text (year • country • genre) must use font-swisse explicitly.
 */
export const FONTS = {
  /** Headings, titles, CTAs, nav, bold UI — SuiseMed.otf */
  display: "font-swisse-med",
  /** Body copy, metadata lines, descriptions — Suise.ttf */
  body: "font-swisse",
  /** Subtext editorial headlines — Instrument Serif */
  editorial: "font-instrument-serif",
  /** Subtext category badges, mono labels — Geist */
  label: "font-geist",
  /** Brew+ CSS logo "brew" word — Archivo Black */
  brewPlus: "font-archivo-black",
  /** Legacy fallback — Helvetica.ttf */
  helvetica: "font-helvetica",
} as const;

/** Font file mapping (fonts/ folder) */
export const FONT_FILES = {
  "font-swisse": { file: "Suise.ttf", family: "Suise", cssVar: "--font-swisse" },
  "font-swisse-med": { file: "SuiseMed.otf", family: "Suise Med", cssVar: "--font-swisse-med" },
  "font-helvetica": { file: "Helvetica.ttf", family: "Helvetica Brew", cssVar: "--font-helvetica" },
  "font-instrument-serif": { file: "InstrumentSerif-Regular.woff2", family: "Instrument Serif", cssVar: "--font-instrument-serif" },
  "font-archivo-black": { file: "ArchivoBlack-Regular.woff2", family: "Archivo Black", cssVar: "--font-archivo-black" },
  "font-geist": { file: "Geist-Regular.woff2", family: "Geist", cssVar: "--font-geist" },
} as const;

/** Typography patterns by UI element */
export const TYPOGRAPHY = {
  /** Movie page title */
  heroTitle: "text-4xl md:text-6xl font-swisse-med tracking-[-0.068em] text-white",
  /** Section tray heading ("Trending Now") */
  sectionTitle: "text-2xl md:text-3xl font-swisse-med tracking-tighter text-white",
  /** Metadata line: "2024 • 1h 46m • Drama • India" */
  metadataLine: "text-xs md:text-sm font-swisse font-medium tracking-tighter text-white/60",
  /** Card title on hover */
  cardTitle: "text-sm font-swisse-med text-white",
  /** Subtext editorial headline */
  editorialHeadline: "font-instrument-serif text-4xl md:text-5xl tracking-tight text-white",
  /** Subtext category badge */
  categoryBadge: "font-geist text-[10px] uppercase tracking-[0.25em] text-stir-yellow/80",
  /** Primary CTA button */
  ctaButton: "font-swisse-med font-bold",
} as const;

export const RADIUS = {
  card: "rounded-xl",
  cardSm: "rounded-lg",
  badge: "rounded-md rounded-br-none", // clipped corner badge
  pill: "rounded-full",
} as const;

export const SPACING = {
  sectionGap: "gap-8 md:gap-12",
  trayPadding: "px-4 md:px-8 lg:px-12",
  cardGap: "gap-3 md:gap-4",
} as const;

/** Common Tailwind class combos used across Brew */
export const PATTERNS = {
  glassCard: "bg-white/5 backdrop-blur-md border border-white/10 rounded-xl",
  sectionTitle: "text-2xl md:text-3xl font-swisse-med tracking-tighter text-white",
  sectionSubheading: "text-sm text-white/60 font-swisse tracking-wide",
  primaryCta: "bg-stir-yellow text-black font-bold font-swisse-med rounded-md px-6 py-3 hover:bg-stir-yellow-hover transition-colors",
  ghostCta: "bg-white/10 text-white border border-white/20 font-swisse-med rounded-md px-4 py-2 hover:bg-white/20 transition-colors",
  gradientOverlay: "bg-gradient-to-t from-black via-black/40 to-transparent",
  scrollbarHide: "overflow-x-auto scrollbar-hide",
  metadataText: "text-xs font-swisse font-medium tracking-tighter text-white/60",
} as const;
