/**
 * CLAUDE DESIGN SAMPLE — MovieCard (Portrait 2:3)
 * Production: src/components/MovieCard.tsx (card_style: "vertical")
 * Used in: MovieGrid portrait trays, trending rows
 */
import React from "react";
import { BiTrendingUp } from "react-icons/bi";

export function MovieCardPortraitSample() {
  const movie = {
    id: 1038392,
    title: "Past Lives",
    year: "2023",
    genre: "Drama",
    thumbnail: "https://image.tmdb.org/t/p/w500/kxQrKDyq2DW0u2X9AkcRQsKAvbW.jpg",
    vod_tag: "New",
    progress: undefined as number | undefined, // 0–100 if continue-watching
    metadata: { card_style: "vertical" as const },
  };

  return (
    <div className="w-[160px] md:w-[180px] group relative cursor-pointer">
      <div className="relative aspect-[2/3] rounded-lg overflow-hidden bg-zinc-900 border border-white/5 shadow-2xl transition-all duration-500 group-hover:scale-[1.08] group-hover:z-50">
        <img src={movie.thumbnail} alt={movie.title} className="w-full h-full object-cover" />

        {/* Status badge */}
        <div className="absolute top-0 left-0 z-10">
          <div className="bg-white text-black text-xs font-bold px-3 py-0.5 rounded-md rounded-br-none shadow-xl flex items-center gap-1 uppercase">
            <BiTrendingUp className="w-4 h-4" />
            {movie.vod_tag}
          </div>
        </div>

        {/* Watch progress bar (continue watching) */}
        {movie.progress != null && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
            <div className="h-full bg-stir-yellow" style={{ width: `${movie.progress}%` }} />
          </div>
        )}

        {/* Hover gradient + title */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3">
          <p className="text-white font-swisse-med text-sm">{movie.title}</p>
          <p className="text-white/60 text-xs">{movie.year}</p>
        </div>
      </div>
    </div>
  );
}

/** Continue-watching variant with progress bar visible */
export function MovieCardPortraitWithProgressSample() {
  const movie = {
    id: 755898,
    title: "War of the Worlds",
    year: "2025",
    thumbnail: "https://image.tmdb.org/t/p/w500/yvirUYrva23IudARHn3mMGVxWqM.jpg",
    progress: 62, // percent watched
  };

  return (
    <div className="w-[160px] group relative cursor-pointer">
      <div className="relative aspect-[2/3] rounded-lg overflow-hidden bg-zinc-900 border border-white/5">
        <img src={movie.thumbnail} alt={movie.title} className="w-full h-full object-cover" />
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-black/60">
          <div className="h-full bg-stir-yellow rounded-r-full" style={{ width: `${movie.progress}%` }} />
        </div>
      </div>
      <p className="text-white/80 text-xs mt-2 truncate">{movie.title}</p>
    </div>
  );
}

export default MovieCardPortraitSample;
