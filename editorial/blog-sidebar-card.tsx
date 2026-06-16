/**
 * CLAUDE DESIGN SAMPLE — BlogSidebarCard (Subtext editorial)
 * Production: src/app/subtext/BlogSidebarCard.tsx
 */
import React from "react";
import { SAMPLE_BLOG_ARTICLES } from "../sample-data";

export function BlogSidebarCardSample() {
  const article = SAMPLE_BLOG_ARTICLES[0];
  // article.slug — URL slug
  // article.cover_img — hero image
  // article.badge_text — category e.g. "Essay"
  // article.title — headline

  return (
    <article className="group cursor-pointer flex gap-4 items-start">
      <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden bg-white/5">
        <img src={article.cover_img} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="flex-1 min-w-0">
        {article.badge_text && (
          <span className="text-[10px] font-geist uppercase tracking-[0.2em] text-stir-yellow/80 mb-1 block">
            {article.badge_text}
          </span>
        )}
        <h3 className="text-sm font-swisse-med text-white leading-snug line-clamp-2 group-hover:text-stir-yellow transition-colors">
          {article.title}
        </h3>
      </div>
    </article>
  );
}

/** Full-width editorial hero card */
export function BlogHeroCardSample() {
  const article = SAMPLE_BLOG_ARTICLES[0];

  return (
    <article className="relative aspect-[21/9] rounded-2xl overflow-hidden cursor-pointer group">
      <img src={article.cover_img} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
        {article.badge_text && (
          <span className="text-[10px] font-geist uppercase tracking-[0.25em] text-stir-yellow/80 mb-3 block">
            {article.badge_text}
          </span>
        )}
        <h2 className="text-2xl md:text-4xl font-instrument-serif text-white leading-tight max-w-2xl">
          {article.title}
        </h2>
        {article.tagline && (
          <p className="text-white/60 text-sm mt-2 max-w-xl">{article.tagline}</p>
        )}
      </div>
    </article>
  );
}

export default BlogSidebarCardSample;
