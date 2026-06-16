/**
 * CLAUDE DESIGN SAMPLE — PosterDialog
 * Production: src/app/.../PosterDialog.tsx
 */
import React from "react";

export function PosterDialogSample() {
  const title = "Past Lives";
  const year = "2023";
  const posters = [
    "https://image.tmdb.org/t/p/w780/kxQrKDyq2DW0u2X9AkcRQsKAvbW.jpg",
    "https://image.tmdb.org/t/p/w780/placeholder.jpg",
    "https://image.tmdb.org/t/p/w780/placeholder2.jpg",
  ];
  const activeIndex = 0;

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex flex-col">
      <div className="flex items-center justify-between p-4">
        <h2 className="text-white font-swisse-med">{title} ({year})</h2>
        <button className="text-white/50 hover:text-white">✕</button>
      </div>

      {/* Main poster */}
      <div className="flex-1 flex items-center justify-center px-4">
        <img
          src={posters[activeIndex]}
          alt={`${title} poster ${activeIndex + 1}`}
          className="max-h-[70vh] max-w-full object-contain rounded-lg shadow-2xl"
        />
      </div>

      {/* Thumbnail strip */}
      <div className="flex gap-2 justify-center p-4 overflow-x-auto">
        {posters.map((poster, i) => (
          <button
            key={i}
            className={`flex-shrink-0 w-12 h-16 rounded overflow-hidden border-2 transition-colors ${
              i === activeIndex ? "border-stir-yellow" : "border-transparent opacity-60"
            }`}
          >
            <img src={poster} alt="" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>

      <div className="flex justify-center pb-6">
        <button className="text-white/70 hover:text-white text-sm flex items-center gap-2">
          ↓ Download Poster
        </button>
      </div>
    </div>
  );
}

export default PosterDialogSample;
