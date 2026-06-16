/**
 * CLAUDE DESIGN SAMPLE — BonusClips tray
 * Production: src/app/.../BonusClips.tsx
 */
import React from "react";

export function BonusClipsSample() {
  const clips = [
    { id: 1, title: "Behind the Scenes", duration: "4:32", thumbnail: "https://image.tmdb.org/t/p/w500/placeholder.jpg", isLocked: false },
    { id: 2, title: "Director's Commentary", duration: "12:08", thumbnail: "https://image.tmdb.org/t/p/w500/placeholder.jpg", isLocked: true },
    { id: 3, title: "Deleted Scene", duration: "2:15", thumbnail: "https://image.tmdb.org/t/p/w500/placeholder.jpg", isLocked: true },
  ];

  return (
    <section className="px-4 md:px-8 py-6">
      <h2 className="text-xl font-swisse-med text-white mb-4 tracking-tighter">Bonus Clips</h2>
      <div className="flex gap-3 overflow-x-auto scrollbar-hide">
        {clips.map((clip) => (
          <div key={clip.id} className="flex-shrink-0 w-[200px] group cursor-pointer">
            <div className="relative aspect-video rounded-lg overflow-hidden bg-zinc-900 border border-white/10">
              <img src={clip.thumbnail} alt={clip.title} className="w-full h-full object-cover" />
              {clip.isLocked && (
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                  <span className="text-white text-2xl">🔒</span>
                </div>
              )}
              <div className="absolute bottom-2 right-2 bg-black/70 text-white text-[10px] px-1.5 py-0.5 rounded">
                {clip.duration}
              </div>
              {!clip.isLocked && (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-8 h-8 rounded-full bg-white/30 flex items-center justify-center">▶</div>
                </div>
              )}
            </div>
            <p className="text-white text-sm mt-2 truncate">{clip.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BonusClipsSample;
