/**
 * CLAUDE DESIGN SAMPLE — MovieCard (VHS/DVD shelf style)
 * Production: src/components/MovieCard.tsx (card_style: "vhs" | "dvd")
 * Used in: curated VHS-style trays, retro collections
 */
import React from "react";

export function MovieCardVHSSample() {
  const movie = {
    id: 1311031,
    title: "Demon Slayer: Infinity Castle",
    year: "2025",
    country: "JP",
    director: "Haruo Sotozaki",
    thumbnail: "https://image.tmdb.org/t/p/w500/sUsVimPdA1l162FvdBIlmKBlWHx.jpg",
    metadata: { card_style: "vhs" as const },
  };

  // VHS cards sit on a shelf — spine visible at rest, cover expands on hover
  const isExpanded = false; // toggle for demo: true = hovered state

  return (
    <div
      className="relative cursor-pointer mx-6"
      style={{
        perspective: "1500px",
        width: isExpanded ? "300px" : "60px",
        height: "440px",
        transition: "width 200ms cubic-bezier(0.34, 1.1, 0.64, 1)",
      }}
    >
      <div
        className="relative w-full h-full"
        style={{
          transformStyle: "preserve-3d",
          transform: isExpanded
            ? "rotateY(10deg) translateZ(40px)"
            : "rotateY(78deg) rotateZ(-3deg)",
          transformOrigin: "left bottom",
        }}
      >
        {/* Front cover */}
        <div
          className="absolute inset-0 bg-zinc-900 rounded-sm overflow-hidden border border-white/5 shadow-2xl"
          style={{ width: "300px", height: "440px", transform: "translateZ(60px)" }}
        >
          <img src={movie.thumbnail} alt={movie.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>

        {/* Spine (visible when collapsed) */}
        <div
          className="absolute top-0 left-0 bg-[#111111] border-r border-white/20 flex flex-col items-center"
          style={{
            width: "60px",
            height: "440px",
            transform: "rotateY(-90deg)",
            transformOrigin: "left center",
          }}
        >
          <div className="mt-12 flex-grow flex items-center justify-center">
            <div
              className="whitespace-nowrap text-white font-bold font-swisse-med text-lg"
              style={{ transform: "rotate(90deg)", width: "320px", textAlign: "center" }}
            >
              {movie.director || movie.title}
            </div>
          </div>
          {/* Vintage spec badges on spine */}
          <div className="mb-8 flex flex-col items-center gap-2 opacity-60">
            <div className="border border-white/50 px-1 py-0.5 rounded-[1px]">
              <span className="text-[7px] text-white font-mono">{movie.year}</span>
            </div>
            <div className="border border-stir-yellow/70 px-1 py-0.5 rounded-[1px]">
              <span className="text-[7px] text-stir-yellow font-mono font-bold">HQ</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCardVHSSample;
