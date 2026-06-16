/**
 * CLAUDE DESIGN SAMPLE — HeroSection (Movie Page)
 * Production: src/app/.../hero_section/HeroSection.tsx
 */
import React from "react";

export function HeroSectionSample() {
  const movie = {
    title: "Past Lives",
    logo_url: null as string | null, // title treatment PNG
    backdrop: "https://image.tmdb.org/t/p/original/9DYFYhmbXRGsMhfUgXM3VSP9uLX.jpg",
    year: "2023",
    genres: ["Drama", "Romance"],
    runtime: "1h 46m",
    synopsis: "Two childhood friends reunite decades later, confronting the paths their lives have taken.",
    average_rating: 8.4,
    ctaText: "Watch Now",
    ctaSubtitle: "Included with Brew+",
  };

  return (
    <section className="relative w-full min-h-[85vh] bg-black overflow-hidden">
      {/* Backdrop */}
      <img
        src={movie.backdrop}
        alt={movie.title}
        className="absolute inset-0 w-full h-full object-cover object-top"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />

      {/* Hero content — bottom aligned */}
      <div className="relative z-10 flex flex-col justify-end min-h-[85vh] px-4 md:px-8 lg:px-12 pb-8 md:pb-12">
        {/* Title */}
        {movie.logo_url ? (
          <img src={movie.logo_url} alt={movie.title} className="h-16 md:h-24 w-auto mb-4" />
        ) : (
          <h1 className="text-4xl md:text-6xl font-swisse-med text-white tracking-tighter mb-4">
            {movie.title}
          </h1>
        )}

        {/* Info line */}
        <p className="text-white/70 text-sm mb-3">
          {movie.year} · {movie.runtime} · {movie.genres.join(" · ")}
        </p>

        {/* Star rating */}
        <div className="flex items-center gap-1 mb-4">
          <span className="text-stir-yellow">★★★★☆</span>
          <span className="text-white/60 text-sm">{(movie.average_rating / 2).toFixed(1)}</span>
        </div>

        {/* Synopsis preview */}
        <p className="text-white/80 text-sm line-clamp-2 max-w-xl mb-6">{movie.synopsis}</p>

        {/* CTA row */}
        <div className="flex items-center gap-3 mb-4">
          <button className="bg-stir-yellow text-black font-bold px-8 py-3.5 rounded-md hover:bg-stir-yellow-hover transition-colors flex flex-col items-center">
            <span>▶ {movie.ctaText}</span>
            <span className="text-[10px] font-normal text-black/60">{movie.ctaSubtitle}</span>
          </button>
          <button className="w-11 h-11 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-white/20">+</button>
          <button className="w-11 h-11 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-white/20">↗</button>
        </div>

        {/* Tabs */}
        <div className="flex gap-6 border-t border-white/10 pt-4">
          {["Reviews", "Extras", "Details", "FAQ"].map((tab, i) => (
            <button key={tab} className={`text-sm pb-1 ${i === 0 ? "text-white border-b-2 border-stir-yellow" : "text-white/50"}`}>
              {tab}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroSectionSample;
