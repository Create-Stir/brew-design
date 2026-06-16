/**
 * CLAUDE DESIGN SAMPLE — RandomMovieDialog ("Surprise Me" dice)
 * Production: src/components/RandomMovieDialog.tsx
 */
import React from "react";

export function RandomMovieDialogSample() {
  const selectedMovie = {
    id: 1038392,
    title: "Past Lives",
    poster: "https://image.tmdb.org/t/p/w500/kxQrKDyq2DW0u2X9AkcRQsKAvbW.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/9DYFYhmbXRGsMhfUgXM3VSP9uLX.jpg",
    slug: "past-lives",
  };

  const rollsRemaining = 2; // dice rolls left in 24h window
  const isRolling = false; // shuffle animation state

  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center">
      <button className="absolute top-6 right-6 text-white/50 hover:text-white text-xl">✕</button>

      <div className="text-center mb-8">
        <div className="text-6xl mb-4">{isRolling ? "🎲" : "🎬"}</div>
        <h2 className="text-2xl font-swisse-med text-white mb-2">
          {isRolling ? "Rolling..." : "Your pick is"}
        </h2>
        {!isRolling && (
          <p className="text-3xl font-swisse-med text-stir-yellow">{selectedMovie.title}</p>
        )}
      </div>

      {!isRolling && (
        <div className="w-48 aspect-[2/3] rounded-xl overflow-hidden shadow-2xl border border-white/10 mb-8">
          <img src={selectedMovie.poster} alt={selectedMovie.title} className="w-full h-full object-cover" />
        </div>
      )}

      <div className="flex gap-3">
        <button className="bg-stir-yellow text-black font-bold px-8 py-3 rounded-lg">
          Watch Now
        </button>
        <button className="bg-white/10 text-white border border-white/20 px-6 py-3 rounded-lg">
          Roll Again ({rollsRemaining} left)
        </button>
      </div>
    </div>
  );
}

export default RandomMovieDialogSample;
