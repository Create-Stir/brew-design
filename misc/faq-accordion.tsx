/**
 * CLAUDE DESIGN SAMPLE — FaqAccordion
 * Production: src/components/FaqAccordion.tsx
 */
import React from "react";
import { SAMPLE_FAQ } from "../sample-data";

export function FaqAccordionSample() {
  const title = "Frequently Asked Questions";
  const items = SAMPLE_FAQ;
  const openIndex = 0; // which item is expanded

  return (
    <div className="bg-white/10 p-4 py-2 pt-3 pb-0 rounded-xl border border-white/10 max-w-2xl">
      <h2 className="text-xl font-[400] mb-4 tracking-tighter text-white">{title}</h2>

      <div className="space-y-0 divide-y divide-white/10">
        {items.map((item, index) => (
          <div key={index} className="py-4">
            <button className="flex items-center justify-between w-full text-left focus:outline-none">
              <span className="text-white font-medium text-sm pr-4">{item.question}</span>
              <span className="text-white flex-shrink-0">{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <p className="text-gray-300 text-sm mt-3 leading-relaxed">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FaqAccordionSample;
