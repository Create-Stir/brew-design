/**
 * CLAUDE DESIGN SAMPLE — ErrorPage
 * Production: src/components/ui/ErrorPage.tsx
 */
import React from "react";

export function ErrorPageSample() {
  const errorCode = 404; // 404 | 500
  const title = errorCode === 404 ? "Page not found" : "Something went wrong";
  const message = errorCode === 404
    ? "The page you're looking for doesn't exist or has been moved."
    : "We're working on fixing this. Please try again later.";

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-6 text-center">
      <p className="text-[120px] font-swisse-med text-white/10 leading-none mb-4">{errorCode}</p>
      <h1 className="text-2xl md:text-3xl font-swisse-med text-white mb-3">{title}</h1>
      <p className="text-white/60 text-sm max-w-md mb-8">{message}</p>
      <button className="bg-stir-yellow text-black font-bold px-6 py-3 rounded-lg hover:bg-stir-yellow-hover transition-colors">
        Go Home
      </button>
    </div>
  );
}

export default ErrorPageSample;
