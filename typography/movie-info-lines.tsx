/**
 * CLAUDE DESIGN SAMPLE — MovieInfoLines
 * Production: src/app/.../hero_section/MovieInfoLines.tsx
 * Used in: movie page hero metadata row
 */
import React from "react";

export function MovieInfoLinesSample() {
  const movie = {
    year: "2023",
    runtime_minutes: 106, // converted to "1h 46m"
    genres: ["Drama", "Romance"], // genre array
    content_rating: "PG-13", // MPAA / equivalent
    average_rating: 8.4, // 0–10 user rating
    total_ratings: 1247,
    project_type: "movie", // "movie" | "series"
    season_count: undefined as number | undefined, // for series
  };

  const runtime = "1h 46m";
  const infoLine = [movie.year, runtime, ...movie.genres.slice(0, 2)].join(" · ");

  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-white/70">
      {/* Main info line */}
      <span>{infoLine}</span>

      {/* Content rating badge */}
      {movie.content_rating && (
        <span className="border border-white/30 text-white/60 text-xs px-1.5 py-0.5 rounded">
          {movie.content_rating}
        </span>
      )}

      {/* Star rating inline */}
      <span className="flex items-center gap-1 text-stir-yellow">
        ★ {(movie.average_rating / 2).toFixed(1)}
        <span className="text-white/40 text-xs">({movie.total_ratings})</span>
      </span>

      {/* Series badge */}
      {movie.project_type === "series" && movie.season_count && (
        <span className="text-white/50">{movie.season_count} Seasons</span>
      )}
    </div>
  );
}

export default MovieInfoLinesSample;
