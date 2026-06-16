/**
 * CLAUDE DESIGN SAMPLE — CookieConsentBanner
 * Production: src/components/CookieConsentBanner.tsx
 */
import React from "react";

export function CookieConsentBannerSample() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="max-w-4xl mx-auto bg-zinc-900 border border-white/10 rounded-xl p-4 md:p-6 flex flex-col md:flex-row items-start md:items-center gap-4 shadow-2xl">
        <div className="flex-1">
          <p className="text-white text-sm font-medium mb-1">We use cookies</p>
          <p className="text-white/60 text-xs leading-relaxed">
            We use cookies to improve your experience and analyze site traffic. By continuing, you agree to our cookie policy.
          </p>
        </div>
        <div className="flex gap-2 flex-shrink-0">
          <button className="text-white/70 text-sm px-4 py-2 hover:text-white transition-colors">
            Reject
          </button>
          <button className="bg-stir-yellow text-black font-bold text-sm px-4 py-2 rounded-lg hover:bg-stir-yellow-hover transition-colors">
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}

export default CookieConsentBannerSample;
