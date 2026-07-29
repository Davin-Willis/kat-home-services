"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { asset } from "@/lib/asset";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Before & After", href: "#work" },
  { label: "Contact", href: "#contact" },
];

function PhoneIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.4 2.1L8.1 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.6 2z" />
    </svg>
  );
}

/**
 * Renders visible in the server HTML (no entrance animation) so the nav and
 * call buttons are usable from the first paint.
 */
export default function Header() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [callMenuOpen, setCallMenuOpen] = useState(false);

  // Fires whenever scrollY changes — cheaper than a window scroll listener
  // because Framer Motion batches reads outside React renders.
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-navy-950/85 backdrop-blur-md shadow-lg shadow-navy-950/30"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between gap-3 px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-3">
          <Image
            src={asset("/images/kat-logo.png")}
            alt=""
            width={44}
            height={41}
            priority
            className="h-11 w-auto drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]"
          />
          <span className="font-display text-lg font-bold tracking-tight whitespace-nowrap text-white">
            KAT{" "}
            <span className="hidden text-gold-500 sm:inline">Home Services</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-stone-300 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Mobile: call shortcut, since the nav links are hidden. Opens a
              two-choice menu so either owner is one tap away. */}
          <div className="relative md:hidden">
            <button
              type="button"
              onClick={() => setCallMenuOpen((open) => !open)}
              aria-label="Call Tony or Alex"
              aria-haspopup="true"
              aria-expanded={callMenuOpen}
              className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${
                callMenuOpen
                  ? "border-gold-400 bg-gold-500/10 text-gold-400"
                  : "border-gold-500/60 text-gold-500 hover:border-gold-400 hover:text-gold-400"
              }`}
            >
              <PhoneIcon />
            </button>
            {callMenuOpen && (
              <>
                {/* Click-away backdrop */}
                <div
                  className="fixed inset-0"
                  onClick={() => setCallMenuOpen(false)}
                  aria-hidden="true"
                />
                <div className="fixed top-20 right-4 z-10 w-60 overflow-hidden rounded-xl border border-stone-600/40 bg-navy-950/95 shadow-xl shadow-navy-950/50 backdrop-blur-md">
                  <a
                    href="tel:+15026748851"
                    onClick={() => setCallMenuOpen(false)}
                    className="block px-4 py-3.5 transition-colors hover:bg-navy-800"
                  >
                    <span className="block font-display text-sm font-bold text-white">
                      Call Tony
                    </span>
                    <span className="block text-sm text-stone-300">
                      (502) 674-8851
                    </span>
                  </a>
                  <a
                    href="tel:+15029105976"
                    onClick={() => setCallMenuOpen(false)}
                    className="block border-t border-stone-600/30 px-4 py-3.5 transition-colors hover:bg-navy-800"
                  >
                    <span className="block font-display text-sm font-bold text-white">
                      Call Alex
                    </span>
                    <span className="block text-sm text-stone-300">
                      (502) 910-5976
                    </span>
                  </a>
                </div>
              </>
            )}
          </div>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-full bg-gold-500 px-5 py-2.5 font-display text-sm font-bold whitespace-nowrap text-navy-950 shadow-md shadow-gold-500/25 transition-colors hover:bg-gold-400"
          >
            <span className="sm:hidden">Free estimate</span>
            <span className="hidden sm:inline">Get a free estimate</span>
          </motion.a>
        </div>
      </div>
    </header>
  );
}
