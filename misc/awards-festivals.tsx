/**
 * CLAUDE DESIGN SAMPLE — AwardsFestivals laurels
 * Production: src/app/.../AwardsFestivals.tsx
 */
import React from "react";

export function AwardsFestivalsSample() {
  const awards = [
    { festival: "Cannes", year: "2023", category: "Best Screenplay" },
    { festival: "Oscars", year: "2024", category: "Best Picture Nominee" },
    { festival: "Sundance", year: "2023", category: "Audience Award" },
  ];

  return (
    <section className="px-4 md:px-8 py-6">
      <h2 className="text-xl font-swisse-med text-white mb-4 tracking-tighter">Awards & Festivals</h2>
      <div className="flex flex-wrap gap-4">
        {awards.map((award) => (
          <div key={award.festival} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
            {/* Wreath/laurel icon placeholder */}
            <div className="w-10 h-10 rounded-full bg-stir-yellow/20 flex items-center justify-center text-lg">🏆</div>
            <div>
              <p className="text-white font-swisse-med text-sm">{award.festival} {award.year}</p>
              <p className="text-white/50 text-xs">{award.category}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AwardsFestivalsSample;
