/**
 * CLAUDE DESIGN SAMPLE — MovieCard (Landscape 16:9)
 * Production: src/components/MovieCard.tsx
 * Used in: MovieGrid landscape trays, store sections
 */
import React from "react";
import { IoSparklesSharp } from "react-icons/io5";

export function MovieCardLandscapeSample() {
  const movie = {
    id: 338969,
    title: "The Toxic Avenger",
    year: "2025",
    genre: "Action",
    thumbnail: "https://image.tmdb.org/t/p/w500/sIonGSpGNtH72OzbJllPOEMNjVU.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/wyg8OaiDFru4NWuEnhCIsF3W1Ek.jpg",
    description: "When a downtrodden janitor is exposed to a catastrophic toxic accident...",
    vod_tag: "Trending", // StatusBadge label
    metadata: { card_style: "horizontal" as const },
  };

  return (
    <div className="w-[280px] group relative cursor-pointer">
      {/* Card shell — 16:9 aspect ratio */}
      <div className="relative aspect-video rounded-lg overflow-hidden bg-zinc-900 border border-white/5 shadow-2xl transition-transform duration-300 group-hover:scale-105">
        <img
          src={movie.backdrop}
          alt={movie.title}
          className="w-full h-full object-cover"
        />
        {/* Bottom gradient for title legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

        {/* Status badge — top left, clipped corner */}
        <div className="absolute top-0 left-0 z-10">
          <div className="bg-white text-black text-xs font-bold px-3 py-0.5 rounded-md rounded-br-none shadow-xl flex items-center gap-1.5 uppercase tracking-tighter">
            <IoSparklesSharp className="w-4 h-4" />
            {movie.vod_tag}
          </div>
        </div>

        {/* Hover play icon */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
            <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent ml-1" />
          </div>
        </div>

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <p className="text-white font-swisse-med text-sm truncate">{movie.title}</p>
          <p className="text-white/60 text-xs">{movie.year} · {movie.genre}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieCardLandscapeSample;
