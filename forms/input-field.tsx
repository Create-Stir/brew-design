/**
 * CLAUDE DESIGN SAMPLE — Input fields & forms
 * Production: src/components/ui/input.tsx, auth steps, CommentSection
 */
import React from "react";

export function InputFieldSample() {
  return (
    <div className="space-y-4 max-w-sm">
      {/* Standard text input */}
      <input
        placeholder="Email address"
        className="w-full h-9 bg-white/5 border border-white/10 rounded-lg px-4 text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-stir-yellow/50"
      />

      {/* Phone with country code */}
      <div className="flex gap-2">
        <button className="bg-white/10 border border-white/10 rounded-lg px-3 py-2 text-white text-sm">🇺🇸 +1</button>
        <input placeholder="Phone number" className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 text-white placeholder:text-white/40" />
      </div>

      {/* Textarea with character counter */}
      <div className="relative">
        <textarea
          placeholder="Write your review..."
          rows={4}
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/40 resize-none"
        />
        <span className="absolute bottom-3 right-3 text-white/40 text-xs">142 / 500</span>
      </div>
    </div>
  );
}

export function OtpInputSample() {
  const digits = ["", "", "", "", "", ""]; // 6-digit OTP

  return (
    <div className="flex gap-2 justify-center">
      {digits.map((digit, i) => (
        <input
          key={i}
          maxLength={1}
          defaultValue={digit}
          className="w-12 h-14 bg-white/5 border border-white/10 rounded-lg text-center text-white text-xl font-bold focus:border-stir-yellow focus:outline-none"
        />
      ))}
    </div>
  );
}

export function CommentFormSample() {
  const review = {
    rating: 8, // 0–10
    heading: "", // review title
    body: "", // review text
  };

  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-4 max-w-lg">
      <h3 className="text-white font-swisse-med">Write a Review</h3>

      {/* Star rating input */}
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((s) => (
          <button key={s} className="text-2xl text-stir-yellow hover:scale-110 transition-transform">★</button>
        ))}
        <span className="text-white/50 text-sm ml-2">{(review.rating / 2).toFixed(1)} / 5</span>
      </div>

      <input placeholder="Review headline (optional)" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white text-sm placeholder:text-white/40" />
      <textarea placeholder="Share your thoughts..." rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/40 resize-none" />

      <button className="bg-stir-yellow text-black font-bold px-6 py-2 rounded-lg text-sm">Submit Review</button>
    </div>
  );
}

export default InputFieldSample;
