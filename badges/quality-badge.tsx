/**
 * CLAUDE DESIGN SAMPLE — QualityBadge
 * Production: src/components/QualityBadge.tsx
 * Used in: hero purchase section, buy/rent dialog — AV quality logos
 */
import React from "react";

export function QualityBadgeSample() {
  const qualities = [
    { type: "video_resolution", apiValue: "4K", display: "4K UHD", logo: "https://createstir.b-cdn.net/stir-static/quality/4k.png" },
    { type: "video_resolution", apiValue: "1080p", display: "Full HD", logo: "https://createstir.b-cdn.net/stir-static/quality/hd.png" },
    { type: "audio_quality", apiValue: "dolby_atmos", display: "Dolby Atmos", logo: "https://createstir.b-cdn.net/stir-static/quality/dolby-atmos.png" },
    { type: "video_enhancement", apiValue: "dolby_vision", display: "Dolby Vision", logo: "https://createstir.b-cdn.net/stir-static/quality/dolby-vision.png" },
  ];

  return (
    <div className="flex flex-wrap items-center gap-3 p-4 bg-black/40 rounded-lg">
      {qualities.map((q) => (
        <div key={q.apiValue} className="flex items-center justify-center rounded-[3px] overflow-hidden h-[20px]">
          {/* In production: img from getQualityDisplay() CDN logo */}
          <span className="text-white/80 text-[10px] font-bold border border-white/30 px-1.5 py-0.5 rounded uppercase tracking-wider">
            {q.display}
          </span>
        </div>
      ))}
    </div>
  );
}

export default QualityBadgeSample;
