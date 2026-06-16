/**
 * CLAUDE DESIGN SAMPLE — MovieLibraryCard
 * Production: src/components/MovieLibraryCard.tsx
 * Used in: /my-library page — shows owned/rented titles with expiry + progress
 */
import React from "react";

export function MovieLibraryCardSample() {
  const movie = {
    id: 755898,
    title: "War of the Worlds",
    year: "2025",
    thumbnail: "https://image.tmdb.org/t/p/w500/yvirUYrva23IudARHn3mMGVxWqM.jpg",
    purchase_type: "rent" as const, // "rent" | "buy"
    order_expires_at: "2026-06-20T00:00:00Z", // rental expiry ISO date
    progress: 62, // 0–100 watch progress
  };

  const expiresLabel = "Expires Jun 20"; // formatted from order_expires_at

  return (
    <div className="w-[140px] md:w-[160px] group cursor-pointer">
      <div className="relative aspect-[2/3] rounded-xl overflow-hidden bg-zinc-900 border border-white/10 shadow-xl">
        <img src={movie.thumbnail} alt={movie.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />

        {/* Purchase type badge — top right */}
        <div className="absolute top-2 right-2">
          <span className="bg-black/80 backdrop-blur-md text-white text-[10px] font-bold uppercase px-2 py-0.5 rounded border border-white/10">
            {movie.purchase_type}
          </span>
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-black/70">
          <div className="h-full bg-stir-yellow" style={{ width: `${movie.progress}%` }} />
        </div>
      </div>

      <div className="mt-2 px-1">
        <p className="text-white font-swisse-med text-sm truncate">{movie.title}</p>
        <p className="text-stir-yellow/70 text-[10px] uppercase tracking-wider font-bold mt-0.5">
          {expiresLabel}
        </p>
      </div>
    </div>
  );
}

export default MovieLibraryCardSample;
