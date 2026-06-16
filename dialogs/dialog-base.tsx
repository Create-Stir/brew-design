/**
 * CLAUDE DESIGN SAMPLE — Dialog base (Radix/shadcn)
 * Production: src/components/ui/dialog.tsx
 */
import React from "react";
import { XIcon } from "lucide-react";

export function DialogBaseSample() {
  const isOpen = true; // dialog open state
  const title = "Dialog Title";
  const description = "Optional description text for context.";

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50 animate-in fade-in-0" />

      {/* Content */}
      <div className="fixed top-1/2 left-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 bg-background rounded-lg border p-6 shadow-lg animate-in zoom-in-95">
        {/* Header */}
        <div className="flex flex-col gap-2 text-center sm:text-left mb-4">
          <h2 className="text-lg font-semibold text-white">{title}</h2>
          <p className="text-sm text-white/60">{description}</p>
        </div>

        {/* Body slot */}
        <div className="py-2 text-white/80 text-sm">
          Dialog body content goes here.
        </div>

        {/* Footer */}
        <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-2 mt-6">
          <button className="px-4 py-2 rounded-md border border-white/20 text-white hover:bg-white/10 transition-colors">
            Cancel
          </button>
          <button className="px-4 py-2 rounded-md bg-stir-yellow text-black font-bold hover:bg-stir-yellow-hover transition-colors">
            Confirm
          </button>
        </div>

        {/* Close button */}
        <button className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors">
          <XIcon className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

/** Full-screen drawer variant (LoginDialog style) */
export function DialogDrawerSample() {
  return (
    <div className="fixed inset-0 z-50 bg-black">
      <div className="flex flex-col h-full max-w-md mx-auto px-6 py-8">
        <button className="self-end text-white/50 hover:text-white mb-8">✕</button>
        <h2 className="text-2xl font-swisse-med text-white mb-2">Sign in to Brew</h2>
        <p className="text-white/60 text-sm mb-8">Watch independent cinema from around the world.</p>
        {/* Form content slot */}
        <div className="space-y-4 flex-1">
          <input placeholder="Phone or email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/40" />
          <button className="w-full bg-stir-yellow text-black font-bold py-3 rounded-lg">Continue</button>
        </div>
      </div>
    </div>
  );
}

export default DialogBaseSample;
