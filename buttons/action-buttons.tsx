/**
 * CLAUDE DESIGN SAMPLE — ActionButtons (Hero icon row)
 * Production: src/app/.../hero_section/ActionButtons.tsx
 */
import React from "react";

export function ActionButtonsSample() {
  const actions = [
    { id: "share", label: "Share", icon: "↗" },
    { id: "trailer", label: "Trailer", icon: "▶" },
    { id: "languages", label: "Languages", icon: "🌐" },
    { id: "list", label: "My List", icon: "+" },
  ];

  return (
    <div className="flex items-center gap-2 md:gap-3">
      {actions.map((action) => (
        <button
          key={action.id}
          className="flex flex-col items-center gap-1 group"
        >
          <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white group-hover:bg-white/20 transition-colors">
            <span className="text-sm">{action.icon}</span>
          </div>
          <span className="text-[10px] text-white/60 group-hover:text-white/80 transition-colors hidden md:block">
            {action.label}
          </span>
        </button>
      ))}
    </div>
  );
}

export default ActionButtonsSample;
