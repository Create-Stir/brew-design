/**
 * CLAUDE DESIGN SAMPLE — RandomMoviePicker
 * Production: src/components/RandomMoviePicker.tsx
 */
import React from "react";

export function RandomMoviePickerSample() {
  const sectionTitle = "Can't decide?";
  const ctaLabel = "Surprise Me";

  return (
    <section className="relative px-4 md:px-8 py-12 overflow-hidden">
      <div className="relative bg-gradient-to-br from-stir-purple/20 to-stir-blue/10 border border-white/10 rounded-2xl p-8 md:p-12 text-center">
        <div className="text-5xl mb-4">🎲</div>
        <h2 className="text-2xl md:text-3xl font-swisse-med text-white tracking-tighter mb-3">
          {sectionTitle}
        </h2>
        <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
          Let fate pick your next film from our curated collection of independent cinema.
        </p>
        <button className="bg-stir-yellow text-black font-bold px-8 py-3.5 rounded-xl hover:bg-stir-yellow-hover transition-colors text-base">
          {ctaLabel}
        </button>
      </div>
    </section>
  );
}

export default RandomMoviePickerSample;
