/**
 * CLAUDE DESIGN SAMPLE — Skeleton / loading states
 * Production: src/components/ui/Skeleton.tsx, LibrarySkeleton, etc.
 */
import React from "react";

function Shimmer({ className }: { className?: string }) {
  return (
    <div className={`animate-pulse bg-white/10 rounded ${className}`} />
  );
}

export function SkeletonSamples() {
  return (
    <div className="space-y-8 p-6 bg-black">
      {/* Movie card skeleton */}
      <div>
        <Shimmer className="h-6 w-48 mb-4" />
        <div className="flex gap-3">
          {[1, 2, 3, 4].map((i) => (
            <Shimmer key={i} className="w-[140px] aspect-[2/3] rounded-lg flex-shrink-0" />
          ))}
        </div>
      </div>

      {/* Hero skeleton */}
      <Shimmer className="w-full h-[400px] rounded-xl" />

      {/* Movie page skeleton */}
      <div className="space-y-4">
        <Shimmer className="h-8 w-64" />
        <Shimmer className="h-4 w-96" />
        <div className="flex gap-3">
          <Shimmer className="h-12 w-36 rounded-lg" />
          <Shimmer className="h-12 w-12 rounded-full" />
        </div>
      </div>

      {/* Brew spinner */}
      <div className="flex items-center gap-3">
        <div
          className="w-8 h-8 rounded-full animate-spin"
          style={{
            background: "conic-gradient(from 0deg, #ffc15e, transparent, #ffc15e)",
            mask: "radial-gradient(farthest-side, transparent calc(100% - 3px), black calc(100% - 3px))",
          }}
        />
        <span className="text-white/50 text-sm">Loading...</span>
      </div>
    </div>
  );
}

export default SkeletonSamples;
