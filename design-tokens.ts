/**
 * Brew design tokens — reference for Claude Design
 * Matches tailwind.config.js + globals.css
 */

export const COLORS = {
  stirYellow: "#ffc15e",
  stirYellowHover: "#f9d59b",
  stirBlue: "#13A3E2",
  stirOrange: "#DB4A2B",
  stirBlack: "#1D1E2C",
  white10: "rgba(255,255,255,0.1)",
  white20: "rgba(255,255,255,0.2)",
  black50: "rgba(0,0,0,0.5)",
} as const;

export const FONTS = {
  display: "font-swisse-med", // Swiss-style display headings
  body: "font-swisse",
  editorial: "font-instrument-serif",
  mono: "font-geist",
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
  sectionSubheading: "text-sm text-white/60 tracking-wide",
  primaryCta: "bg-stir-yellow text-black font-bold rounded-md px-6 py-3 hover:bg-stir-yellow-hover transition-colors",
  ghostCta: "bg-white/10 text-white border border-white/20 rounded-md px-4 py-2 hover:bg-white/20 transition-colors",
  gradientOverlay: "bg-gradient-to-t from-black via-black/40 to-transparent",
  scrollbarHide: "overflow-x-auto scrollbar-hide",
} as const;
