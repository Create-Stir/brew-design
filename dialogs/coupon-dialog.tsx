/**
 * CLAUDE DESIGN SAMPLE — CouponDialog
 * Production: src/components/payment/CouponDialog.tsx
 */
import React from "react";

export function CouponDialogSample() {
  const couponCode = ""; // user input
  const error = null as string | null; // validation error message
  const isApplying = false;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/70" />
      <div className="relative z-10 w-full max-w-sm bg-zinc-900 rounded-2xl border border-white/10 p-6">
        <h2 className="text-white font-swisse-med text-lg mb-1">Apply Coupon</h2>
        <p className="text-white/50 text-sm mb-4">Enter your coupon code to get a discount</p>

        <input
          placeholder="COUPON CODE"
          defaultValue={couponCode}
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white uppercase tracking-widest placeholder:text-white/30 focus:border-stir-yellow focus:outline-none mb-2"
        />

        {error && <p className="text-red-400 text-xs mb-3">{error}</p>}

        <button className="w-full bg-stir-yellow text-black font-bold py-3 rounded-lg mt-2 hover:bg-stir-yellow-hover transition-colors">
          {isApplying ? "Applying..." : "Apply Coupon"}
        </button>
      </div>
    </div>
  );
}

export default CouponDialogSample;
