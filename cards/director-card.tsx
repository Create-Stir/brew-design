/**
 * CLAUDE DESIGN SAMPLE — DirectorGrid card
 * Production: src/components/DirectorGrid.tsx
 * Used in: homepage director showcase sections
 */
import React from "react";

export function DirectorCardSample() {
  const director = {
    name: "Wong Kar-wai", // director_name from API metadata
    movie: "In the Mood for Love", // featured film title
    year: "2000",
    poster: "https://image.tmdb.org/t/p/w500/placeholder.jpg",
    slug: "in-the-mood-for-love",
  };

  const isHovered = false; // demo state

  return (
    <div className="flex-shrink-0 cursor-pointer" style={{ width: isHovered ? 320 : 200 }}>
      {/* Director name — large display type */}
      <h3 className="text-3xl md:text-4xl font-swisse-med text-white tracking-tighter mb-4 leading-none">
        {director.name}
      </h3>

      {/* Film poster card */}
      <div className="relative aspect-[2/3] rounded-lg overflow-hidden border border-white/10 shadow-2xl transition-all duration-500">
        <img src={director.poster} alt={director.movie} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p className="text-white font-swisse-med text-lg">{director.movie}</p>
          <p className="text-white/60 text-sm">{director.year}</p>
        </div>
      </div>
    </div>
  );
}

/** Full DirectorGrid row with section title */
export function DirectorGridSample() {
  const sectionTitle = "Directors to Discover"; // section.name from API
  const directors = [
    { name: "Wong Kar-wai", movie: "In the Mood for Love", year: "2000", poster: "https://image.tmdb.org/t/p/w500/placeholder.jpg" },
    { name: "Bong Joon-ho", movie: "Parasite", year: "2019", poster: "https://image.tmdb.org/t/p/w500/placeholder.jpg" },
    { name: "Celine Song", movie: "Past Lives", year: "2023", poster: "https://image.tmdb.org/t/p/w500/kxQrKDyq2DW0u2X9AkcRQsKAvbW.jpg" },
  ];

  return (
    <section className="px-4 md:px-8 lg:px-12 py-8">
      <h2 className="text-2xl md:text-3xl font-swisse-med tracking-tighter text-white mb-6">
        {sectionTitle}
      </h2>
      <div className="flex gap-8 overflow-x-auto scrollbar-hide pb-4">
        {directors.map((d) => (
          <div key={d.name} className="flex-shrink-0 w-[200px]">
            <h3 className="text-2xl font-swisse-med text-white tracking-tighter mb-3">{d.name}</h3>
            <div className="aspect-[2/3] rounded-lg overflow-hidden border border-white/10">
              <img src={d.poster} alt={d.movie} className="w-full h-full object-cover" />
            </div>
            <p className="text-white/80 text-sm mt-2">{d.movie} · {d.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DirectorGridSample;
