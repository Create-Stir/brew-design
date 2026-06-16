/**
 * CLAUDE DESIGN SAMPLE — PricingCard (Brew+ Subscription)
 * Production: src/app/[locale]/subscribe/components/PricingCard.tsx
 */
import React from "react";
import { SAMPLE_PLANS } from "../sample-data";

export function PricingCardSample() {
  const selectedPlan = "yearly"; // "monthly" | "yearly"
  const plans = SAMPLE_PLANS;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg">
      {plans.map((plan) => {
        const isSelected = plan.interval_unit === selectedPlan;
        const monthlyEquivalent = plan.interval_unit === "yearly"
          ? (plan.price / 12).toFixed(2)
          : plan.price.toFixed(2);

        return (
          <button
            key={plan.id}
            className={`relative p-6 rounded-2xl border text-left transition-all ${
              isSelected
                ? "border-stir-yellow bg-stir-yellow/10"
                : "border-white/10 bg-white/5 hover:bg-white/10"
            }`}
          >
            {plan.interval_unit === "yearly" && (
              <span className="absolute -top-2.5 left-4 bg-stir-yellow text-black text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                Best Value
              </span>
            )}

            <p className="text-white/60 text-sm mb-1">{plan.name}</p>
            <div className="flex items-baseline gap-1 mb-1">
              <span className="text-3xl font-swisse-med text-white">
                {plan.currency_symbol}{plan.price.toFixed(2)}
              </span>
              <span className="text-white/50 text-sm">/{plan.interval_unit === "yearly" ? "year" : "month"}</span>
            </div>

            {plan.perceived_price && (
              <p className="text-white/40 text-sm line-through mb-2">
                {plan.currency_symbol}{plan.perceived_price.toFixed(2)}
              </p>
            )}

            {plan.interval_unit === "yearly" && (
              <p className="text-stir-yellow/80 text-xs">
                {plan.currency_symbol}{monthlyEquivalent}/mo billed annually
              </p>
            )}

            <div className={`mt-4 w-5 h-5 rounded-full border-2 flex items-center justify-center ${
              isSelected ? "border-stir-yellow bg-stir-yellow" : "border-white/30"
            }`}>
              {isSelected && <span className="text-black text-xs">✓</span>}
            </div>
          </button>
        );
      })}
    </div>
  );
}

export default PricingCardSample;
