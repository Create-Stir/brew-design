/**
 * CLAUDE DESIGN SAMPLE — EndingScreenCard
 * Production: src/components/video_player/EndingScreenCard.tsx
 * Used in: post-playback recommendation carousel with autoplay countdown
 */
import React from "react";

export function EndingScreenCardSample() {
  const movie = {
    id: 1038392,
    title: "Past Lives",
    thumbnail: "https://image.tmdb.org/t/p/w500/kxQrKDyq2DW0u2X9AkcRQsKAvbW.jpg",
    year: "2023",
  };

  const autoplayProgress = 45; // 0–100 countdown border progress
  const showAutoplay = true;

  return (
    <div className="relative w-[200px] cursor-pointer group">
      {/* Countdown border ring (autoplay next) */}
      {showAutoplay && (
        <div className="absolute -inset-[3px] rounded-xl overflow-hidden">
          <div
            className="absolute inset-0 rounded-xl"
            style={{
              background: `conic-gradient(#ffc15e ${autoplayProgress * 3.6}deg, transparent 0deg)`,
            }}
          />
        </div>
      )}

      <div className="relative aspect-video rounded-xl overflow-hidden bg-zinc-900 border border-white/10">
        <img src={movie.thumbnail} alt={movie.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
          <div className="w-10 h-10 rounded-full bg-white/30 backdrop-blur flex items-center justify-center">
            <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-0.5" />
          </div>
        </div>
      </div>

      <p className="text-white font-swisse-med text-sm mt-2 truncate">{movie.title}</p>
      {showAutoplay && (
        <p className="text-stir-yellow text-xs">Up next · {Math.round((100 - autoplayProgress) / 100 * 10)}s</p>
      )}
    </div>
  );
}

export default EndingScreenCardSample;
