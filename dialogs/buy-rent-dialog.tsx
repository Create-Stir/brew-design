/**
 * CLAUDE DESIGN SAMPLE — BuyRentDialog
 * Production: src/components/payment/BuyRentDialog.tsx
 */
import React from "react";

export function BuyRentDialogSample() {
  const movie = {
    title: "Past Lives",
    poster: "https://image.tmdb.org/t/p/w500/kxQrKDyq2DW0u2X9AkcRQsKAvbW.jpg",
    year: "2023",
  };

  const rentOptions = [
    { id: "rent-hd", label: "Rent HD", price: "$4.99", quality: "1080p", isPopular: true },
    { id: "rent-sd", label: "Rent SD", price: "$3.99", quality: "720p", isPopular: false },
  ];

  const buyOptions = [
    { id: "buy-hd", label: "Buy HD", price: "$14.99", quality: "1080p", isPopular: true },
  ];

  const selectedOption = "rent-hd";
  const appliedCoupon = null; // coupon object if applied

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center">
      <div className="fixed inset-0 bg-black/70" />
      <div className="relative z-10 w-full max-w-md bg-zinc-900 rounded-t-2xl md:rounded-2xl border border-white/10 p-6 max-h-[90vh] overflow-y-auto">
        {/* Movie summary header */}
        <div className="flex gap-4 mb-6">
          <img src={movie.poster} alt={movie.title} className="w-16 h-24 rounded-lg object-cover" />
          <div>
            <h3 className="text-white font-swisse-med text-lg">{movie.title}</h3>
            <p className="text-white/50 text-sm">{movie.year}</p>
          </div>
        </div>

        {/* Rent options */}
        <p className="text-white/50 text-xs uppercase tracking-wider mb-3">Rent</p>
        <div className="space-y-2 mb-4">
          {rentOptions.map((opt) => (
            <button
              key={opt.id}
              className={`w-full flex items-center justify-between p-4 rounded-xl border transition-colors ${
                selectedOption === opt.id
                  ? "border-stir-yellow bg-stir-yellow/10"
                  : "border-white/10 bg-white/5 hover:bg-white/10"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-4 h-4 rounded-full border-2 ${selectedOption === opt.id ? "border-stir-yellow bg-stir-yellow" : "border-white/30"}`} />
                <div className="text-left">
                  <p className="text-white font-medium text-sm">{opt.label}</p>
                  <p className="text-white/50 text-xs">{opt.quality}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-stir-yellow font-swisse-med text-lg">{opt.price}</p>
                {opt.isPopular && <p className="text-[10px] text-stir-yellow/70 uppercase">Popular</p>}
              </div>
            </button>
          ))}
        </div>

        {/* Buy options */}
        <p className="text-white/50 text-xs uppercase tracking-wider mb-3">Buy</p>
        <div className="space-y-2 mb-6">
          {buyOptions.map((opt) => (
            <button key={opt.id} className="w-full flex items-center justify-between p-4 rounded-xl border border-white/10 bg-white/5">
              <p className="text-white text-sm">{opt.label}</p>
              <p className="text-white font-swisse-med">{opt.price}</p>
            </button>
          ))}
        </div>

        {/* Coupon + CTA */}
        <button className="text-stir-yellow text-sm mb-4 hover:underline">Have a coupon?</button>
        <button className="w-full bg-stir-yellow text-black font-bold py-3.5 rounded-xl hover:bg-stir-yellow-hover transition-colors">
          Continue to Payment
        </button>
      </div>
    </div>
  );
}

export default BuyRentDialogSample;
