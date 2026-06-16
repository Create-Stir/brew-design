/**
 * CLAUDE DESIGN SAMPLE — ShareDrawer
 * Production: src/components/ShareDrawer.tsx
 */
import React from "react";

export function ShareDrawerSample() {
  const movie = {
    title: "Past Lives",
    backdrop: "https://image.tmdb.org/t/p/original/9DYFYhmbXRGsMhfUgXM3VSP9uLX.jpg",
    shareUrl: "https://brew.tv/us/movie/past-lives",
  };

  const shareOptions = [
    { id: "copy", label: "Copy Link", icon: "🔗" },
    { id: "twitter", label: "Twitter", icon: "𝕏" },
    { id: "whatsapp", label: "WhatsApp", icon: "💬" },
    { id: "story", label: "Share Story", icon: "📱" },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      <div className="fixed inset-0 bg-black/70" />
      <div className="relative z-10 w-full max-w-lg bg-zinc-900 rounded-t-2xl border border-white/10 p-6">
        <div className="w-10 h-1 bg-white/20 rounded-full mx-auto mb-6" />

        <h2 className="text-white font-swisse-med text-lg mb-1">Share {movie.title}</h2>
        <p className="text-white/50 text-sm mb-6">Spread the word about this film</p>

        {/* Story image preview */}
        <div className="aspect-[9/16] max-h-48 mx-auto rounded-xl overflow-hidden mb-6 border border-white/10">
          <img src={movie.backdrop} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
            <p className="text-white font-swisse-med">{movie.title}</p>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {shareOptions.map((opt) => (
            <button key={opt.id} className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-lg">
                {opt.icon}
              </div>
              <span className="text-white/60 text-xs">{opt.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShareDrawerSample;
