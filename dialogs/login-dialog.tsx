/**
 * CLAUDE DESIGN SAMPLE — LoginDialog
 * Production: src/components/auth/LoginDialog.tsx
 */
import React from "react";

export function LoginDialogSample() {
  const step = "phone" as "phone" | "otp" | "profile"; // auth flow step
  const phoneNumber = "+1 (555) 123-4567";

  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col">
      <div className="flex-1 flex flex-col max-w-sm mx-auto w-full px-6 py-10 justify-center">
        {/* Close */}
        <button className="absolute top-6 right-6 text-white/50 hover:text-white text-xl">✕</button>

        {/* Logo */}
        <div className="mb-8 text-center">
          <span className="text-2xl font-swisse-med text-white">Brew</span>
        </div>

        {step === "phone" && (
          <>
            <h2 className="text-xl font-swisse-med text-white mb-2">Sign in or create account</h2>
            <p className="text-white/60 text-sm mb-6">Enter your phone number to continue</p>
            <div className="flex gap-2 mb-4">
              <button className="bg-white/10 border border-white/10 rounded-lg px-3 py-3 text-white text-sm">🇺🇸 +1</button>
              <input
                placeholder="Phone number"
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/40"
              />
            </div>
            <button className="w-full bg-stir-yellow text-black font-bold py-3 rounded-lg mb-4">Continue</button>
            <div className="flex items-center gap-3 my-4">
              <div className="flex-1 h-px bg-white/10" />
              <span className="text-white/40 text-xs">or</span>
              <div className="flex-1 h-px bg-white/10" />
            </div>
            <button className="w-full bg-white text-black font-medium py-3 rounded-lg mb-3 flex items-center justify-center gap-2">
              Continue with Google
            </button>
            <button className="w-full bg-white text-black font-medium py-3 rounded-lg flex items-center justify-center gap-2">
              Continue with Apple
            </button>
          </>
        )}

        {step === "otp" && (
          <>
            <h2 className="text-xl font-swisse-med text-white mb-2">Enter verification code</h2>
            <p className="text-white/60 text-sm mb-6">Sent to {phoneNumber}</p>
            <div className="flex gap-2 justify-center mb-6">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <input
                  key={i}
                  maxLength={1}
                  className="w-12 h-14 bg-white/5 border border-white/10 rounded-lg text-center text-white text-xl font-bold"
                />
              ))}
            </div>
            <button className="w-full bg-stir-yellow text-black font-bold py-3 rounded-lg">Verify</button>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginDialogSample;
