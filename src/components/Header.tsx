"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { EASE } from "./Reveal";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Our Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  // Fires whenever scrollY changes — cheaper than a window scroll listener
  // because Framer Motion batches reads outside React renders.
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  return (
    <motion.header
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: EASE }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-navy-950/85 backdrop-blur-md shadow-lg shadow-navy-950/30"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-3">
          <Image
            src="/images/kat-logo.png"
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

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs font-medium tracking-[0.15em] text-stone-300 uppercase transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

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
    </motion.header>
  );
}
