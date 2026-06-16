/**
 * CLAUDE DESIGN SAMPLE — MovieInfoSection (Hero info block)
 * Production: src/app/.../hero_section/MovieInfoSection.tsx
 */
import React from "react";

export function MovieInfoSectionSample() {
  const movie = {
    title: "Past Lives",
    logo_url: null as string | null,
    year: "2023",
    runtime: "1h 46m",
    genres: ["Drama", "Romance"],
    average_rating: 8.4,
    total_ratings: 1247,
    synopsis: "Two childhood friends reunite decades later, confronting notions of love and destiny.",
    leave_date: null as string | null, // "leaving soon" ISO date
  };

  return (
    <div className="max-w-2xl space-y-4">
      {/* Title logo or text */}
      {movie.logo_url ? (
        <img src={movie.logo_url} alt={movie.title} className="h-20 w-auto" />
      ) : (
        <h1 className="text-5xl font-swisse-med text-white tracking-tighter">{movie.title}</h1>
      )}

      {/* Star rating block */}
      <div className="flex items-center gap-3">
        <span className="text-3xl font-swisse-med text-stir-yellow">{(movie.average_rating / 2).toFixed(1)}</span>
        <div>
          <div className="flex text-stir-yellow text-sm">★★★★☆</div>
          <p className="text-white/50 text-xs">{movie.total_ratings.toLocaleString()} ratings</p>
        </div>
      </div>

      {/* Metadata line */}
      <p className="text-white/70 text-sm">{movie.year} · {movie.runtime} · {movie.genres.join(" · ")}</p>

      {/* Leaving soon badge */}
      {movie.leave_date && (
        <span className="inline-block bg-stir-orange/20 text-stir-orange text-xs font-bold px-3 py-1 rounded uppercase">
          Leaving Soon
        </span>
      )}

      {/* Synopsis preview with read more */}
      <p className="text-white/80 text-sm leading-relaxed line-clamp-3">
        {movie.synopsis}
        <button className="text-stir-yellow ml-1 hover:underline">Read more</button>
      </p>

      {/* Action buttons row */}
      <div className="flex items-center gap-3 pt-2">
        <button className="bg-stir-yellow text-black font-bold px-8 py-3 rounded-md">▶ Watch Now</button>
        {["Share", "Trailer", "Languages", "List"].map((a) => (
          <button key={a} className="w-10 h-10 rounded-full bg-white/10 border border-white/10 text-white text-xs hover:bg-white/20">{a[0]}</button>
        ))}
      </div>
    </div>
  );
}

export default MovieInfoSectionSample;
