/**
 * CLAUDE DESIGN SAMPLE — Header
 * Production: src/components/header/Header.tsx
 */
import React from "react";
import { WATCH_HIDDEN_GEMS_LOGO, BREW_WORDMARK } from "../brand-assets";

export function HeaderSample() {
  const activeNav = "home"; // "home" | "explore" | "store" | "brewplus"
  const isScrolled = false;
  const isLoggedIn = true;
  const userName = "Film Lover";
  const isUSRoute = true; // US → watch-hidden-gems.png, non-US → brew.png

  const navItems = [
    { id: "home", label: "Home" },
    { id: "explore", label: "Explore" },
    { id: "store", label: "Store" },
    { id: "brewplus", label: "Brew+" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${isScrolled ? "bg-black/90 backdrop-blur-md" : "bg-gradient-to-b from-black/80 to-transparent"}`}>
      <div className="flex items-center justify-between px-4 md:px-8 h-14 md:h-16">
        {/* Logo — US: stacked "Watch hidden gems", non-US: brew wordmark */}
        {isUSRoute ? (
          <img
            src={WATCH_HIDDEN_GEMS_LOGO.src}
            alt={WATCH_HIDDEN_GEMS_LOGO.alt}
            width={WATCH_HIDDEN_GEMS_LOGO.header.width}
            height={WATCH_HIDDEN_GEMS_LOGO.header.height}
            className={`${WATCH_HIDDEN_GEMS_LOGO.header.className} border-l border-white/30 pl-3 ml-3`}
          />
        ) : (
          <img
            src={BREW_WORDMARK.src}
            alt={BREW_WORDMARK.alt}
            width={BREW_WORDMARK.width}
            height={BREW_WORDMARK.height}
            className={BREW_WORDMARK.className}
          />
        )}

        {/* Desktop nav pills */}
        <nav className="hidden md:flex items-center gap-1 bg-white/5 backdrop-blur-md rounded-full p-1 border border-white/10">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                activeNav === item.id
                  ? "bg-white text-black"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <button className="text-white/70 hover:text-white text-sm hidden md:block">🔍</button>
          <button className="text-white/70 hover:text-white text-sm">🎲</button>
          {isLoggedIn ? (
            <div className="w-8 h-8 rounded-full bg-stir-yellow flex items-center justify-center text-black text-xs font-bold">
              {userName[0]}
            </div>
          ) : (
            <button className="text-white text-sm font-medium">Sign In</button>
          )}
        </div>
      </div>
    </header>
  );
}

export default HeaderSample;
