/**
 * CLAUDE DESIGN SAMPLE — SynopsisDialog
 * Production: src/app/.../hero_section/SynopsisDialog.tsx
 */
import React from "react";

export function SynopsisDialogSample() {
  const title = "Past Lives";
  const synopsis = `Nora and Hae Sung, two deeply connected childhood friends, are wrested apart after Nora's family emigrates from South Korea. Twenty years later, they are reunited for one fateful week as they confront notions of love and destiny.

Celine Song's directorial debut is a profoundly moving story of identity, connection, and the paths our lives take.`;

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center">
      <div className="fixed inset-0 bg-black/70" />
      <div className="relative z-10 w-full max-w-lg bg-zinc-900 rounded-t-2xl md:rounded-2xl border border-white/10 p-6 md:p-8">
        <div className="flex items-start justify-between mb-4">
          <h2 className="text-xl font-swisse-med text-white">Synopsis</h2>
          <button className="text-white/50 hover:text-white">✕</button>
        </div>
        <p className="text-white/50 text-sm mb-4">{title}</p>
        <p className="text-white/80 text-sm leading-relaxed whitespace-pre-line">{synopsis}</p>
      </div>
    </div>
  );
}

export default SynopsisDialogSample;
