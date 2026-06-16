/**
 * CLAUDE DESIGN SAMPLE — CastAndCrew section
 * Production: src/app/.../CastAndCrew.tsx
 */
import React from "react";
import { SAMPLE_CAST } from "../sample-data";

export function CastAndCrewSample() {
  const sectionTitle = "Cast & Crew";
  const cast = SAMPLE_CAST;

  return (
    <section className="px-4 md:px-8 py-8">
      <h2 className="text-2xl font-swisse-med tracking-tighter text-white mb-6">{sectionTitle}</h2>
      <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
        {cast.map((member) => (
          <div key={member.id} className="flex-shrink-0 w-[120px] group cursor-pointer">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 mb-3 bg-white/5">
              <img
                src={member.avatar_url}
                alt={member.full_name}
                className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-stir-yellow/80 mb-0.5">
              {Array.isArray(member.job) ? member.job[0] : member.job}
            </p>
            <p className="text-white font-swisse-med text-sm line-clamp-1">{member.full_name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CastAndCrewSample;
