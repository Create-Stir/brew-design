/**
 * CLAUDE DESIGN SAMPLE — WatchNowButton (Hero primary CTA)
 * Production: src/app/.../purchase_section/WatchNowButton.tsx
 */
import React from "react";

export function WatchNowButtonSample() {
  const title = "Watch Now"; // CTA label — also "Resume" | "Play Trailer"
  const subtitle = "Included with Brew+"; // animated rotating subtitle
  const isLoading = false;

  return (
    <button className="group relative bg-stir-yellow text-black font-bold text-base md:text-lg px-8 md:px-10 py-3.5 md:py-4 rounded-md hover:bg-stir-yellow-hover transition-all hover:scale-[1.02] active:scale-[0.98] min-w-[180px]">
      <div className="flex flex-col items-center">
        <span className="flex items-center gap-2">
          {isLoading ? (
            <span className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
          ) : (
            <span className="text-lg">▶</span>
          )}
          {title}
        </span>
        {subtitle && (
          <span className="text-[10px] md:text-xs font-normal text-black/60 mt-0.5 tracking-wide">
            {subtitle}
          </span>
        )}
      </div>
    </button>
  );
}

/** Rent / Buy variant */
export function PurchaseButtonSample() {
  const label = "Rent HD"; // "Rent HD" | "Buy HD" | "Rent SD"
  const price = "$4.99"; // formatted price
  const quality = "HD"; // quality tier badge

  return (
    <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-6 py-3 rounded-md hover:bg-white/20 transition-colors flex flex-col items-center min-w-[120px]">
      <span className="font-bold text-sm">{label}</span>
      <span className="text-stir-yellow font-swisse-med text-lg">{price}</span>
      <span className="text-[10px] text-white/50 uppercase tracking-wider">{quality}</span>
    </button>
  );
}

export default WatchNowButtonSample;
