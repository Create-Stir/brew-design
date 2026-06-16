/**
 * CLAUDE DESIGN SAMPLE — MovieTabs
 * Production: src/app/.../hero_section/MovieTabs.tsx
 */
import React from "react";

export function MovieTabsSample() {
  const activeTab = "reviews"; // "reviews" | "details" | "extras" | "episodes" | "faq" | "merchandise"
  const tabs = [
    { id: "reviews", label: "Reviews" },
    { id: "extras", label: "Extras", hasIcon: true },
    { id: "details", label: "Details" },
    { id: "faq", label: "FAQ" },
  ];

  return (
    <div className="w-full">
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-6 min-w-max pb-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`relative pb-2 text-sm font-medium whitespace-nowrap transition-colors ${
                activeTab === tab.id ? "text-white" : "text-white/50 hover:text-white/80"
              }`}
            >
              {tab.hasIcon && <span className="mr-1">🛍</span>}
              {tab.label}
              {activeTab === tab.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-stir-yellow rounded-full" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieTabsSample;
