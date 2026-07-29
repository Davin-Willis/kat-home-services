"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { asset } from "@/lib/asset";

const TRUST_BADGES = ["Fully insured", "Free estimates", "Louisville owned"];

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="8" className="fill-gold-500/20" />
      <path
        d="M4.5 8.2 7 10.7l4.5-5.4"
        className="stroke-gold-500"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * The hero renders fully visible in the server HTML — no entrance animation
 * gates it, so the headline and call buttons are on screen from the first
 * paint even before JavaScript loads. The only motion is the scroll-out
 * parallax, which starts from the resting position.
 */
export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const prefersReduced = useReducedMotion();

  // Progress 0 → 1 as the hero scrolls off the top of the viewport.
  // The scrollbar is the playhead: scrub back up and it plays in reverse.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // The two headline lines exit at different speeds (parallax), the
  // supporting content more gently, everything fading on the way out.
  const line1Y = useTransform(scrollYProgress, [0, 1], [0, -220]);
  const line2Y = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const logoY = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const bottomY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative isolate flex min-h-screen flex-col justify-between overflow-hidden bg-navy-900 px-5 pt-28 pb-14 sm:px-10 sm:pt-36"
    >
      {/* Slow-drifting glow blobs — navy depth + a warm gold cast */}
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, 60, -30, 0], y: [0, -40, 30, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 -left-40 -z-10 h-[36rem] w-[36rem] rounded-full bg-navy-700/60 blur-3xl"
      />
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, -50, 40, 0], y: [0, 35, -25, 0] }}
        transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-48 top-1/3 -z-10 h-[32rem] w-[32rem] rounded-full bg-gold-500/10 blur-3xl"
      />

      {/* Faint blueprint grid, warmed to match the stone neutrals */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #c3bca9 1px, transparent 1px), linear-gradient(to bottom, #c3bca9 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      {/* Top band: the bobcat is the brand centerpiece — it shares the
          stage with the headline instead of hiding in a corner. */}
      <motion.div
        style={prefersReduced ? undefined : { opacity: fade }}
        className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between md:gap-14"
      >
        <div className="min-w-0">
          {/* Mobile: logo front and center above the headline */}
          <div className="mb-8 flex justify-center md:hidden">
            <Image
              src={asset("/images/kat-logo.png")}
              alt="KAT Home Services bobcat logo"
              width={176}
              height={165}
              priority
              className="w-44 drop-shadow-[0_10px_30px_rgba(195,154,85,0.25)]"
            />
          </div>

          <p className="mb-8 font-display text-sm font-bold tracking-[0.14em] text-gold-500 uppercase">
            Home repair &amp; remodeling · Louisville, KY
          </p>

          <h1 className="font-display font-bold tracking-tight text-white">
            <motion.span
              style={prefersReduced ? undefined : { y: line1Y }}
              className="block text-[11vw] leading-[0.95] sm:text-[9vw] md:text-[8vw]"
            >
              Small fixes.
            </motion.span>
            <motion.span
              style={prefersReduced ? undefined : { y: line2Y }}
              className="block pl-[6vw] text-[11vw] leading-[0.95] sm:text-[9vw] md:pl-[10vw] md:text-[8vw]"
            >
              Full <span className="text-gold-500">remodels.</span>
            </motion.span>
          </h1>
        </div>

        {/* Desktop: big bobcat riding shotgun with the headline */}
        <motion.div
          style={prefersReduced ? undefined : { y: logoY }}
          className="hidden shrink-0 md:block"
        >
          <Image
            src={asset("/images/kat-logo.png")}
            alt="KAT Home Services bobcat logo"
            width={340}
            height={319}
            priority
            className="w-[24vw] max-w-85 drop-shadow-[0_16px_45px_rgba(195,154,85,0.28)]"
          />
        </motion.div>
      </motion.div>

      {/* Bottom band: copy + CTAs bottom-left, featured project bottom-right */}
      <motion.div
        style={prefersReduced ? undefined : { y: bottomY, opacity: fade }}
        className="mt-16 flex flex-wrap items-end justify-between gap-x-16 gap-y-10"
      >
        <div className="max-w-md">
          <p className="text-lg leading-relaxed text-stone-300">
            KAT Home Services is Alex and Tony, a Louisville crew that handles
            bathrooms, kitchens, flooring, trim, and the rest of the list.
            Clean work at a fair price, from owners who answer their own
            phones.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <motion.a
              href="tel:+15029105976"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full bg-gold-500 px-6 py-3.5 font-display text-base font-bold text-navy-950 shadow-lg shadow-gold-500/25 transition-colors hover:bg-gold-400"
            >
              Call Alex (502) 910-5976
            </motion.a>
            <motion.a
              href="tel:+15026748851"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full border border-stone-500/60 px-6 py-3.5 font-display text-base font-bold text-stone-200 transition-colors hover:border-gold-500 hover:text-gold-400"
            >
              Call Tony (502) 674-8851
            </motion.a>
          </div>

          <a
            href="#services"
            className="group mt-6 inline-block text-base font-medium text-stone-300 transition-colors hover:text-gold-400"
          >
            See our services{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>

          <ul className="mt-7 flex flex-wrap gap-x-7 gap-y-3">
            {TRUST_BADGES.map((badge) => (
              <li
                key={badge}
                className="flex items-center gap-2 text-sm font-medium text-stone-300"
              >
                <CheckIcon />
                {badge}
              </li>
            ))}
          </ul>
        </div>

        {/* Featured card: a real KAT job, not a placeholder */}
        <div className="w-full max-w-sm">
          <div className="rounded-2xl border border-stone-500/40 bg-navy-950/70 p-5 backdrop-blur-sm">
            <p className="font-display text-[11px] font-bold tracking-[0.14em] text-stone-400 uppercase">
              Recent work
            </p>
            <div className="mt-4 overflow-hidden rounded-xl">
              <Image
                src={asset("/images/kitchen-after.jpg")}
                alt="Finished open-concept kitchen with exposed wood beam and pass-through counter"
                width={640}
                height={480}
                priority
                className="aspect-video w-full object-cover"
              />
            </div>
            <div className="mt-4 flex items-baseline justify-between gap-4">
              <p className="font-display text-lg font-bold text-white">
                Open-concept kitchen
              </p>
              <p className="text-sm whitespace-nowrap text-stone-400">Louisville, KY</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
