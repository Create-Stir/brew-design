/**
 * CLAUDE DESIGN SAMPLE — RelatedMoviesGrid
 * Production: src/app/.../RelatedMoviesGrid.tsx
 * Used in: movie page related tab — 2×2 grid
 */
import React from "react";

export function RelatedMoviesGridSample() {
  const movies = [
    { id: 1, title: "Aftersun", thumbnail: "https://image.tmdb.org/t/p/w500/placeholder.jpg", year: "2022" },
    { id: 2, title: "Minari", thumbnail: "https://image.tmdb.org/t/p/w500/placeholder.jpg", year: "2020" },
    { id: 3, title: "The Farewell", thumbnail: "https://image.tmdb.org/t/p/w500/placeholder.jpg", year: "2019" },
    { id: 4, title: "Drive My Car", thumbnail: "https://image.tmdb.org/t/p/w500/placeholder.jpg", year: "2021" },
  ];

  return (
    <div className="grid grid-cols-2 gap-3 md:gap-4 max-w-lg">
      {movies.map((movie) => (
        <div key={movie.id} className="group cursor-pointer">
          <div className="aspect-video rounded-lg overflow-hidden bg-zinc-900 border border-white/10">
            <img src={movie.thumbnail} alt={movie.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
          </div>
          <p className="text-white text-sm mt-2 truncate font-swisse-med">{movie.title}</p>
          <p className="text-white/50 text-xs">{movie.year}</p>
        </div>
      ))}
    </div>
  );
}

export default RelatedMoviesGridSample;
