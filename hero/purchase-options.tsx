/**
 * CLAUDE DESIGN SAMPLE — PurchaseOptionsSection
 * Production: src/app/.../purchase_section/PurchaseOptionsSection.tsx
 */
import React from "react";

export function PurchaseOptionsSample() {
  const state = {
    hasRented: false,
    hasPurchased: false,
    hasActiveSubscription: true, // Brew+ subscriber
    availableForRent: true,
    availableForBuy: true,
    isComingSoon: false,
    rentPrice: "$4.99",
    buyPrice: "$14.99",
  };

  return (
    <div className="space-y-4 p-4 bg-black/40 backdrop-blur-md rounded-xl border border-white/10 max-w-sm">
      {state.hasActiveSubscription ? (
        /* SVOD — included with subscription */
        <button className="w-full bg-stir-yellow text-black font-bold py-3.5 rounded-lg flex flex-col items-center">
          <span>▶ Watch Now</span>
          <span className="text-[10px] font-normal text-black/60">Included with Brew+</span>
        </button>
      ) : (
        /* TVOD — rent or buy */
        <div className="grid grid-cols-2 gap-2">
          {state.availableForRent && (
            <button className="bg-white/10 border border-white/20 text-white py-3 rounded-lg flex flex-col items-center hover:bg-white/20 transition-colors">
              <span className="text-xs text-white/60">Rent HD</span>
              <span className="font-swisse-med text-stir-yellow text-lg">{state.rentPrice}</span>
            </button>
          )}
          {state.availableForBuy && (
            <button className="bg-white/10 border border-white/20 text-white py-3 rounded-lg flex flex-col items-center hover:bg-white/20 transition-colors">
              <span className="text-xs text-white/60">Buy HD</span>
              <span className="font-swisse-med text-white text-lg">{state.buyPrice}</span>
            </button>
          )}
        </div>
      )}

      {/* Quality badges row */}
      <div className="flex gap-2 justify-center">
        {["4K", "Dolby Vision", "Dolby Atmos"].map((q) => (
          <span key={q} className="text-[10px] text-white/50 border border-white/20 px-1.5 py-0.5 rounded uppercase">{q}</span>
        ))}
      </div>

      {/* Coupon link */}
      <button className="w-full text-stir-yellow text-sm hover:underline">Apply coupon code</button>
    </div>
  );
}

export default PurchaseOptionsSample;
