/**
 * CLAUDE DESIGN SAMPLE — ReleaseCountdown
 * Production: src/components/ReleaseCountdown.tsx
 * Used in: coming-soon titles, pre-order hero sections
 */
import React from "react";

export function ReleaseCountdownSample() {
  const releaseTimestamp = "2026-07-01T00:00:00Z"; // ISO release date
  const distribution = "coming_soon"; // "coming_soon" | "pre_order" | "live"

  // Demo static countdown values (production calculates from releaseTimestamp)
  const countdown = {
    days: 15,
    hours: 8,
    minutes: 42,
    seconds: 30,
  };

  return (
    <div className="inline-flex items-center gap-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-lg px-4 py-2">
      <span className="text-stir-yellow text-xs font-bold uppercase tracking-wider mr-2">
        {distribution === "coming_soon" ? "Coming Soon" : "Pre-Order"}
      </span>
      {[
        { value: countdown.days, label: "d" },
        { value: countdown.hours, label: "h" },
        { value: countdown.minutes, label: "m" },
        { value: countdown.seconds, label: "s" },
      ].map((unit, i) => (
        <React.Fragment key={unit.label}>
          {i > 0 && <span className="text-white/40 text-sm">:</span>}
          <div className="flex flex-col items-center min-w-[28px]">
            <span className="text-white font-swisse-med text-lg leading-none">
              {String(unit.value).padStart(2, "0")}
            </span>
            <span className="text-white/50 text-[9px] uppercase">{unit.label}</span>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

export default ReleaseCountdownSample;
