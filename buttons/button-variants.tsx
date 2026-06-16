/**
 * CLAUDE DESIGN SAMPLE — Button variants (shadcn)
 * Production: src/components/ui/button.tsx
 */
import React from "react";

export function ButtonVariantsSample() {
  const variants = [
    { name: "default", classes: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90" },
    { name: "destructive", classes: "bg-destructive text-white hover:bg-destructive/90" },
    { name: "outline", classes: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground" },
    { name: "secondary", classes: "bg-secondary text-secondary-foreground hover:bg-secondary/80" },
    { name: "ghost", classes: "hover:bg-accent hover:text-accent-foreground" },
    { name: "link", classes: "text-primary underline-offset-4 hover:underline" },
  ];

  const sizes = [
    { name: "sm", classes: "h-8 px-3 text-sm" },
    { name: "default", classes: "h-9 px-4" },
    { name: "lg", classes: "h-10 px-6" },
    { name: "icon", classes: "size-9" },
  ];

  return (
    <div className="p-6 bg-zinc-900 rounded-xl space-y-6">
      {/* Brew primary CTAs */}
      <div>
        <p className="text-white/50 text-xs uppercase tracking-wider mb-3">Brew Primary CTAs</p>
        <div className="flex flex-wrap gap-3">
          <button className="bg-stir-yellow text-black font-bold px-6 py-3 rounded-md hover:bg-stir-yellow-hover transition-colors">
            Watch Now
          </button>
          <button className="bg-white/10 text-white border border-white/20 px-6 py-3 rounded-md hover:bg-white/20 transition-colors">
            Rent $4.99
          </button>
          <button className="bg-stir-blue text-white font-bold px-6 py-3 rounded-md hover:bg-stir-blue-hover transition-colors">
            Subscribe
          </button>
        </div>
      </div>

      {/* shadcn variants */}
      <div>
        <p className="text-white/50 text-xs uppercase tracking-wider mb-3">shadcn Variants</p>
        <div className="flex flex-wrap gap-3">
          {variants.map((v) => (
            <button key={v.name} className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-all px-4 py-2 ${v.classes}`}>
              {v.name}
            </button>
          ))}
        </div>
      </div>

      {/* Icon buttons */}
      <div>
        <p className="text-white/50 text-xs uppercase tracking-wider mb-3">Icon / Ghost</p>
        <div className="flex gap-3">
          <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
            ▶
          </button>
          <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
            +
          </button>
          <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
            ↗
          </button>
        </div>
      </div>
    </div>
  );
}

export default ButtonVariantsSample;
