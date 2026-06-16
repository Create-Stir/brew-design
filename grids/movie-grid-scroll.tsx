/**
 * CLAUDE DESIGN SAMPLE — MovieGrid (Horizontal Scroll Tray)
 * Production: src/components/MovieGrid.tsx (listType: "scroll")
 * Used in: homepage rows, collection pages
 */
import React from "react";
import { ChevronRight } from "lucide-react";
import { SAMPLE_MOVIES } from "../sample-data";

export function MovieGridScrollSample() {
  const category = "Trending Now"; // section.name from API
  const subheading = "Independent films everyone's talking about"; // section.subheading
  const movies = SAMPLE_MOVIES.slice(0, 4);
  const hasViewMore = true; // show "View All" CTA
  const showRanking = false; // true for top-10 style numbered rows
  const orientation = "portrait" as const; // "portrait" | "landscape"

  return (
    <section className="px-4 md:px-8 lg:px-12 py-6 md:py-8">
      {/* Section header */}
      <div className="flex items-end justify-between mb-4 md:mb-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-swisse-med tracking-tighter text-white">
            {category}
          </h2>
          {subheading && (
            <p className="text-sm text-white/60 mt-1 tracking-wide">{subheading}</p>
          )}
        </div>
        {hasViewMore && (
          <button className="flex items-center gap-1 text-white/70 hover:text-white text-sm font-medium transition-colors">
            View All <ChevronRight className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Horizontal scroll tray */}
      <div className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide pb-2 -mx-4 px-4 md:-mx-8 md:px-8">
        {movies.map((movie, index) => (
          <div key={movie.id} className="flex-shrink-0 relative" style={{ width: orientation === "portrait" ? 160 : 280 }}>
            {showRanking && (
              <span className="absolute -left-2 bottom-0 text-[80px] font-swisse-med text-white/10 leading-none z-0 select-none">
                {index + 1}
              </span>
            )}
            <div className={`relative z-10 aspect-[2/3] rounded-lg overflow-hidden bg-zinc-900 border border-white/5 group cursor-pointer hover:scale-105 transition-transform ${orientation === "landscape" ? "aspect-video" : ""}`}>
              <img
                src={orientation === "portrait" ? movie.thumbnail : movie.backdrop}
                alt={movie.title}
                className="w-full h-full object-cover"
              />
              {movie.vod_tag && (
                <div className="absolute top-0 left-0 bg-white text-black text-[10px] font-bold px-2 py-0.5 rounded-md rounded-br-none uppercase">
                  {movie.vod_tag}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MovieGridScrollSample;
