/**
 * CLAUDE DESIGN SAMPLE — MovieShowcase2 (Homepage Hero Carousel)
 * Production: src/components/MovieShowcase2.tsx
 * Used in: homepage + store hero — auto-rotating full-width slides
 */
import React from "react";
import { ChevronLeft, ChevronRight, Info } from "lucide-react";
import { SAMPLE_SHOWCASE } from "../sample-data";

export function MovieShowcase2Sample() {
  const slide = SAMPLE_SHOWCASE;
  // slide fields explained inline:
  // backgroundImage — full-width backdrop
  // logo — title treatment PNG (optional, falls back to text title)
  // infoLine — "2023 · Drama · 1h 46m"
  // ctaText — "Watch Now" | "Rent $4.99" | "Coming Soon"
  // primaryColor — hex for bottom gradient theming
  // vodTag — status badge label

  return (
    <section className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden bg-black">
      {/* Backdrop image */}
      <img
        src={slide.backgroundImage}
        alt={slide.title}
        className="absolute inset-0 w-full h-full object-cover object-top"
      />

      {/* Gradient overlay — themed to primaryColor */}
      <div
        className="absolute inset-0"
        style={{ background: slide.gradient }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />

      {/* Content — bottom-left aligned */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:p-16 max-w-3xl">
        {/* Status badge */}
        {slide.vodTag && (
          <div className="inline-flex bg-white text-black text-xs font-bold px-3 py-0.5 rounded-md rounded-br-none uppercase mb-4">
            {slide.vodTag}
          </div>
        )}

        {/* Title logo or text */}
        {slide.logo ? (
          <img src={slide.logo} alt={slide.title} className="h-16 md:h-24 w-auto object-contain mb-4" />
        ) : (
          <h1 className="text-4xl md:text-6xl font-swisse-med text-white tracking-tighter mb-4">
            {slide.title}
          </h1>
        )}

        {/* Info line */}
        <p className="text-white/70 text-sm md:text-base mb-3">{slide.infoLine}</p>

        {/* Description — 2 lines max */}
        <p className="text-white/80 text-sm md:text-base line-clamp-2 mb-6 max-w-xl">
          {slide.description}
        </p>

        {/* CTA row */}
        <div className="flex items-center gap-3">
          <button className="bg-stir-yellow text-black font-bold text-sm md:text-base px-6 md:px-8 py-3 rounded-md hover:bg-stir-yellow-hover transition-colors">
            {slide.ctaText}
          </button>
          <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-4 py-3 rounded-md hover:bg-white/20 transition-colors flex items-center gap-2">
            <Info className="w-4 h-4" />
            More Info
          </button>
        </div>
      </div>

      {/* Carousel nav arrows */}
      <button className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 backdrop-blur flex items-center justify-center text-white hover:bg-black/60 transition-colors">
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 backdrop-blur flex items-center justify-center text-white hover:bg-black/60 transition-colors">
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-4 right-6 flex gap-2">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className={`h-1 rounded-full transition-all ${i === 0 ? "w-8 bg-stir-yellow" : "w-4 bg-white/30"}`} />
        ))}
      </div>
    </section>
  );
}

export default MovieShowcase2Sample;
