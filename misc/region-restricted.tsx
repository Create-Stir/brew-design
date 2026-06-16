/**
 * CLAUDE DESIGN SAMPLE — RegionRestrictedMessage
 * Production: src/components/custom/RegionRestrictedMessage.tsx
 */
import React from "react";

export function RegionRestrictedMessageSample() {
  const movieName = "Past Lives";
  const variant = "hero" as "hero" | "player"; // placement context

  return (
    <div className="flex flex-col items-center justify-center text-center p-8 bg-black/60 backdrop-blur-md rounded-xl border border-white/10 max-w-md">
      <div className="text-4xl mb-4">🌍</div>
      <h3 className="text-white font-swisse-med text-lg mb-2">Not available in your region</h3>
      <p className="text-white/60 text-sm mb-6">
        {movieName} is not available to stream in your country due to licensing restrictions.
      </p>
      <div className="flex flex-col gap-2 w-full">
        <button className="bg-stir-yellow text-black font-bold py-3 rounded-lg text-sm">
          🎲 Surprise Me
        </button>
        <button className="bg-white/10 text-white border border-white/20 py-3 rounded-lg text-sm hover:bg-white/20 transition-colors">
          Browse Available Titles
        </button>
      </div>
    </div>
  );
}

export default RegionRestrictedMessageSample;
