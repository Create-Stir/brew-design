/**
 * CLAUDE DESIGN SAMPLE — Typography patterns
 * Production: scattered across MovieGrid, HeroSection, Subtext
 */
import React from "react";

export function SectionTitlesSample() {
  const category = "Trending Now"; // MovieGrid section.name
  const subheading = "Independent films everyone's talking about"; // section.subheading

  return (
    <div className="space-y-8 p-6 bg-black">
      {/* Homepage section title */}
      <div>
        <h2 className="text-2xl md:text-3xl font-swisse-med tracking-tighter text-white">
          {category}
        </h2>
        <p className="text-sm text-white/60 mt-1 tracking-wide">{subheading}</p>
      </div>

      {/* Movie page title (text fallback when no logo) */}
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-swisse-med text-white tracking-tighter leading-none">
        Past Lives
      </h1>

      {/* Subtext editorial headline */}
      <h1 className="text-3xl md:text-5xl font-instrument-serif text-white leading-tight">
        Why Slow Cinema Is Having a Moment
      </h1>

      {/* Mono category badge (Subtext) */}
      <span className="text-[10px] font-geist uppercase tracking-[0.25em] text-stir-yellow/80 border border-stir-yellow/30 px-2 py-0.5 rounded">
        Essay
      </span>

      {/* Cast role label */}
      <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-stir-yellow/80">
        Director · Writer
      </span>
    </div>
  );
}

export default SectionTitlesSample;
