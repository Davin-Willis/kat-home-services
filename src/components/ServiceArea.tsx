"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import SawEdge from "./SawEdge";

const NEIGHBORHOODS = [
  "The Highlands",
  "St. Matthews",
  "Jeffersontown",
  "Middletown",
  "Fern Creek",
  "Highview",
  "Okolona",
  "Shively",
  "Pleasure Ridge Park",
  "Valley Station",
  "Prospect",
  "Crescent Hill",
];

function PhoneIcon() {
  return (
    <svg
      width="20"
      height="20"
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

export default function ServiceArea() {
  return (
    <section id="contact" className="relative bg-paper py-24 sm:py-32">
      <SawEdge fill="var(--color-paper)" className="absolute inset-x-0 -top-4" />
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
        <Reveal>
          <p className="font-mono text-xs font-bold tracking-[0.25em] text-gold-600 uppercase">
            <span aria-hidden="true">■ </span>Service area
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy-800 sm:text-4xl lg:text-5xl">
            Louisville based, Louisville proud
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-stone-600">
            We work all over Louisville and the surrounding area. Not sure
            if you&rsquo;re in range? Call anyway — worst case, we point you
            to somebody good.
          </p>

          <ul className="mt-8 flex flex-wrap gap-2.5">
            {NEIGHBORHOODS.map((hood, i) => (
              <Reveal key={hood} delay={i * 0.04}>
                <li className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-medium text-navy-800">
                  {hood}
                </li>
              </Reveal>
            ))}
          </ul>
        </Reveal>

        {/* Contact card — the target of every "Get a free estimate" CTA */}
        <Reveal delay={0.15}>
          <div className="rounded-3xl bg-navy-800 p-8 shadow-2xl shadow-navy-800/25 sm:p-10">
            <h3 className="font-display text-2xl font-bold text-white">
              Get your free estimate
            </h3>
            <p className="mt-3 leading-relaxed text-stone-300">
              Fastest way: call or text photos of the job to either of us.
              We&rsquo;ll get you a straight price.
            </p>

            <div className="mt-8 space-y-4">
              <motion.a
                href="tel:+15029105976"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-between gap-3 rounded-2xl bg-gold-500 px-6 py-4 shadow-lg shadow-gold-500/25 transition-colors hover:bg-gold-400"
              >
                <span className="flex items-center gap-3 font-display text-lg font-bold text-navy-950">
                  <PhoneIcon />
                  (502) 910-5976
                </span>
                <span className="font-mono text-xs tracking-[0.2em] text-navy-800 uppercase">
                  Alex
                </span>
              </motion.a>

              <motion.a
                href="tel:+15026745581"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-between gap-3 rounded-2xl bg-gold-500 px-6 py-4 shadow-lg shadow-gold-500/25 transition-colors hover:bg-gold-400"
              >
                <span className="flex items-center gap-3 font-display text-lg font-bold text-navy-950">
                  <PhoneIcon />
                  (502) 674-5581
                </span>
                <span className="font-mono text-xs tracking-[0.2em] text-navy-800 uppercase">
                  Tony
                </span>
              </motion.a>

              <a
                href="mailto:Info@KATHomeServices.com"
                className="block rounded-2xl border border-stone-600/50 px-6 py-4 text-center font-medium text-stone-200 transition-colors hover:border-stone-400 hover:text-white"
              >
                Info@KATHomeServices.com
              </a>
            </div>

            <p className="mt-6 text-center text-sm text-stone-400">
              Fully insured · Free estimates, always
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
