/**
 * CLAUDE DESIGN SAMPLE — StarRating
 * Production: src/components/ui/StarRating.tsx
 * Scale: 0–10 input, displayed as 5 stars (rating / 2)
 */
import React from "react";

export function StarRatingSample() {
  const rating = 8; // 0–10 scale (displays as 4/5 stars)
  const size = "md" as const; // "sm" | "md" | "lg" | "2xl"
  const interactive = false; // true for review input

  const displayRating = rating / 2; // convert to 5-star scale
  const sizeClasses = { sm: "w-2.5 h-2.5", md: "w-3.5 h-3.5", lg: "w-4.5 h-4.5", "2xl": "w-7 h-7" };

  const starPath = "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z";

  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((starValue) => {
        const isFull = starValue <= Math.floor(displayRating);
        const isHalf = !isFull && starValue <= Math.ceil(displayRating);

        return (
          <svg key={starValue} viewBox="0 0 24 24" className={`${sizeClasses[size]} transition-colors`}>
            <path d={starPath} fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/20" />
            {(isFull || isHalf) && (
              <path
                d={starPath}
                fill="currentColor"
                className="text-stir-yellow"
                clipPath={isHalf ? `url(#half-${starValue})` : undefined}
              />
            )}
            {isHalf && (
              <defs>
                <clipPath id={`half-${starValue}`}>
                  <rect x="0" y="0" width="12" height="24" />
                </clipPath>
              </defs>
            )}
          </svg>
        );
      })}
      <span className="text-white/60 text-sm ml-1">{(rating / 2).toFixed(1)}</span>
    </div>
  );
}

/** Large hero rating display */
export function StarRatingHeroSample() {
  const averageRating = 8.4;
  const totalRatings = 1247;

  return (
    <div className="flex items-center gap-3">
      <span className="text-4xl md:text-5xl font-swisse-med text-stir-yellow">
        {(averageRating / 2).toFixed(1)}
      </span>
      <div>
        <StarRatingSample />
        <p className="text-white/50 text-xs mt-0.5">{totalRatings.toLocaleString()} ratings</p>
      </div>
    </div>
  );
}

export default StarRatingSample;
