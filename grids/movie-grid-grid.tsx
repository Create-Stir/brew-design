/**
 * CLAUDE DESIGN SAMPLE — MovieGrid (Grid Layout)
 * Production: src/components/MovieGrid.tsx (listType: "grid")
 * Used in: category pages, search results, related tab
 */
import React from "react";
import { SAMPLE_MOVIES } from "../sample-data";

export function MovieGridGridSample() {
  const category = "Drama"; // section.name
  const movies = SAMPLE_MOVIES;
  const maxGridColumns = 4; // responsive: 2 mobile, 3 tablet, 4 desktop

  return (
    <section className="px-4 md:px-8 lg:px-12 py-8">
      <h2 className="text-2xl md:text-3xl font-swisse-med tracking-tighter text-white mb-6">
        {category}
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {movies.map((movie) => (
          <div key={movie.id} className="group cursor-pointer">
            <div className="aspect-[2/3] rounded-lg overflow-hidden bg-zinc-900 border border-white/5 shadow-lg group-hover:scale-[1.03] transition-transform">
              <img src={movie.thumbnail} alt={movie.title} className="w-full h-full object-cover" />
              {movie.progress != null && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
                  <div className="h-full bg-stir-yellow" style={{ width: `${movie.progress}%` }} />
                </div>
              )}
            </div>
            <p className="text-white text-sm font-swisse-med mt-2 truncate">{movie.title}</p>
            <p className="text-white/50 text-xs">{movie.year} · {movie.genre}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/** Top 10 ranked grid variant */
export function MovieGridRankedSample() {
  const category = "Top 10 This Week";
  const movies = SAMPLE_MOVIES;

  return (
    <section className="px-4 md:px-8 py-8">
      <h2 className="text-2xl font-swisse-med tracking-tighter text-white mb-6">{category}</h2>
      <div className="flex gap-4 overflow-x-auto scrollbar-hide">
        {movies.map((movie, i) => (
          <div key={movie.id} className="flex-shrink-0 flex items-end gap-2">
            <span className="text-[100px] font-swisse-med text-white/15 leading-none">{i + 1}</span>
            <div className="w-[140px] aspect-[2/3] rounded-lg overflow-hidden mb-4">
              <img src={movie.thumbnail} alt={movie.title} className="w-full h-full object-cover" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MovieGridGridSample;
