/**
 * CLAUDE DESIGN SAMPLE — StatusBadge variants
 * Production: src/components/StatusBadge.tsx
 * Used on: movie cards, showcase slides, cast cards
 */
import React from "react";
import { IoSparklesSharp } from "react-icons/io5";
import { BiTrendingUp } from "react-icons/bi";
import { AiFillFire } from "react-icons/ai";

export function StatusBadgeSample() {
  const badges = [
    { label: "New", variant: "white" as const, icon: <IoSparklesSharp className="w-4 h-4" /> },
    { label: "Trending", variant: "white" as const, icon: <BiTrendingUp className="w-4 h-4" /> },
    { label: "Hot", variant: "white" as const, icon: <AiFillFire className="w-4 h-4" /> },
    { label: "Cannes", variant: "yellow" as const, icon: null }, // festival = wreath icon only in prod
    { label: "Coming Soon", variant: "black" as const, icon: null },
  ];

  const variantClasses = {
    white: "bg-white text-black shadow-lg",
    yellow: "bg-stir-yellow text-black shadow-[0_0_15px_rgba(251,191,36,0.3)]",
    black: "bg-black/80 backdrop-blur-md text-white border border-white/10",
  };

  return (
    <div className="flex flex-wrap gap-3 p-6 bg-zinc-900 rounded-xl">
      {badges.map((badge) => (
        <div
          key={badge.label}
          className={`
            ${variantClasses[badge.variant]}
            text-xs md:text-sm font-bold px-3 py-0.5 rounded-md rounded-br-none
            shadow-xl backdrop-blur-sm tracking-tighter uppercase
            flex items-center gap-1.5
          `}
        >
          {badge.icon}
          <span>{badge.label}</span>
        </div>
      ))}
    </div>
  );
}

/** Cast role badge variant */
export function StatusBadgeCastSample() {
  const label = "As Nora"; // cast role label

  return (
    <div className="bg-white text-black text-xs font-bold px-3 py-0.5 rounded-md rounded-br-none shadow-xl uppercase flex items-center gap-1">
      <span className="w-3.5 h-3.5 rounded-full bg-black/20" /> {/* person icon placeholder */}
      {label}
    </div>
  );
}

export default StatusBadgeSample;
