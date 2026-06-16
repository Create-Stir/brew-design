/**
 * CLAUDE DESIGN SAMPLE — Footer
 * Production: src/components/Footer.tsx
 */
import React from "react";
import { WATCH_HIDDEN_GEMS_LOGO, BREW_WORDMARK } from "../brand-assets";

export function FooterSample() {
  const linkGroups = [
    {
      title: "Browse",
      links: ["Home", "Store", "Explore", "Brew+", "Subtext"],
    },
    {
      title: "Support",
      links: ["Help Center", "Contact Us", "FAQ"],
    },
    {
      title: "Legal",
      links: ["Terms of Service", "Privacy Policy", "Cookie Policy"],
    },
  ];

  return (
    <footer className="bg-black border-t border-white/10 px-4 md:px-8 lg:px-12 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div>
            <img
              src={WATCH_HIDDEN_GEMS_LOGO.src}
              alt="Watch hidden gems on Brew TV"
              className={WATCH_HIDDEN_GEMS_LOGO.footer.className}
            />
            <img
              src={BREW_WORDMARK.src}
              alt={BREW_WORDMARK.alt}
              className="h-12 w-auto object-contain mt-4"
            />
            <p className="text-white/50 text-sm mt-2 leading-relaxed">
              Independent & world cinema, curated for you.
            </p>
          </div>
          {linkGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-white/80 text-sm font-medium mb-3">{group.title}</h3>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-white/50 text-sm hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
          <p className="text-white/40 text-xs">© 2026 Brew. All rights reserved.</p>
          <div className="flex gap-4">
            {["Twitter", "Instagram", "YouTube"].map((social) => (
              <a key={social} href="#" className="text-white/40 text-xs hover:text-white transition-colors">
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterSample;
