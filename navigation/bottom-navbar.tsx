/**
 * CLAUDE DESIGN SAMPLE — BottomNavbar (Mobile)
 * Production: src/components/BottomNavbar.tsx
 */
import React from "react";

export function BottomNavbarSample() {
  const activeTab = "home"; // "home" | "store" | "dice" | "library" | "profile"

  const tabs = [
    { id: "home", label: "Home", icon: "🏠" },
    { id: "store", label: "Store", icon: "🛍" },
    { id: "dice", label: "Surprise", icon: "🎲" },
    { id: "library", label: "Library", icon: "📚" },
    { id: "profile", label: "Profile", icon: "👤" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-t border-white/10 md:hidden">
      <div className="flex items-center justify-around h-16 px-2">
        {tabs.map((tab) => (
          <button key={tab.id} className="flex flex-col items-center gap-0.5 min-w-[56px]">
            <span className={`text-lg ${activeTab === tab.id ? "opacity-100" : "opacity-50"}`}>
              {tab.icon}
            </span>
            <span className={`text-[10px] ${activeTab === tab.id ? "text-stir-yellow font-bold" : "text-white/50"}`}>
              {tab.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
}

export default BottomNavbarSample;
