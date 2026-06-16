/**
 * CLAUDE DESIGN SAMPLE — TestimonialCard
 * Production: src/components/TestimonialCard.tsx
 */
import React from "react";
import { SAMPLE_TESTIMONIAL } from "../sample-data";

export function TestimonialCardSample() {
  const testimonial = SAMPLE_TESTIMONIAL;
  // testimonial.name — publication/person name
  // testimonial.role — "Publication" | "Filmmaker"
  // testimonial.review — quote text
  // testimonial.rating — 0–10 optional

  return (
    <div className="relative w-64 bg-zinc-900 border border-white/10 rounded-xl overflow-hidden shadow-2xl">
      {/* Video/image header */}
      <div className="aspect-video bg-white/5 relative">
        <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-contain p-4" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
            <span className="text-white text-sm ml-0.5">▶</span>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center gap-1 mb-2">
          {[1, 2, 3, 4, 5].map((s) => (
            <span key={s} className="text-stir-yellow text-xs">★</span>
          ))}
        </div>
        <p className="text-white/80 text-sm leading-relaxed line-clamp-3 mb-3">
          "{testimonial.review}"
        </p>
        <p className="text-white font-swisse-med text-sm">{testimonial.name}</p>
        <p className="text-white/50 text-xs">{testimonial.role}</p>
      </div>
    </div>
  );
}

export default TestimonialCardSample;
