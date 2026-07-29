"use client";

import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { EASE } from "./Reveal";
import SectionHeading from "./SectionHeading";

const STEPS = [
  {
    number: "01",
    title: "Text us the job",
    description:
      "Send photos of what needs doing straight to Alex or Tony — the bathroom, the floor, the wall you want gone.",
  },
  {
    number: "02",
    title: "Get a straight price",
    description:
      "We'll talk it through and get you a clear, written quote. No hourly mystery math, no surprises later.",
  },
  {
    number: "03",
    title: "We do it right",
    description:
      "We show up when we said, protect your floors, work clean, and walk the finished job with you before we leave.",
  },
];

/** Mock UI panels — the cycling visual that walks through the process. */
function StepPanel({ index }: { index: number }) {
  return (
    <div className="rounded-2xl bg-navy-800 p-6 shadow-2xl shadow-navy-800/30">
      <div className="flex items-center gap-1.5" aria-hidden="true">
        <span className="h-2 w-2 rounded-full bg-gold-500" />
        <span className="h-2 w-2 rounded-full bg-stone-500/50" />
        <span className="h-2 w-2 rounded-full bg-stone-500/50" />
      </div>

      {index === 0 && (
        <div className="mt-5 space-y-3">
          <p className="font-mono text-[10px] tracking-[0.25em] text-stone-400 uppercase">
            ■ Your text thread
          </p>
          {["IMG_0714.jpg — hall bathroom", "IMG_1262.jpg — kitchen floor", "IMG_2274.jpg — backyard shed"].map(
            (file) => (
              <div
                key={file}
                className="rounded-lg rounded-bl-sm bg-navy-700/70 px-4 py-2.5 font-mono text-xs text-stone-300"
              >
                {file}
              </div>
            ),
          )}
          <div className="ml-10 rounded-lg rounded-br-sm bg-gold-500 px-4 py-2.5 text-sm font-medium text-navy-950">
            This is Alex — we can handle all three. Quote to you tomorrow. 👍
          </div>
        </div>
      )}

      {index === 1 && (
        <div className="mt-5">
          <p className="font-mono text-[10px] tracking-[0.25em] text-stone-400 uppercase">
            ■ Your estimate
          </p>
          <div className="mt-4 space-y-2.5 font-mono text-xs text-stone-300">
            {[
              ["Refresh hall bathroom", "itemized"],
              ["New LVP — kitchen floor", "itemized"],
              ["Reside + paint shed", "itemized"],
            ].map(([item, tag]) => (
              <div key={item} className="flex items-baseline justify-between gap-4">
                <span>{item}</span>
                <span className="text-stone-500">{tag}</span>
              </div>
            ))}
          </div>
          <div className="mt-5 flex items-baseline justify-between border-t border-stone-600/40 pt-4">
            <span className="text-sm text-stone-300">Whole job, one number</span>
            <span className="font-display text-xl font-bold text-gold-500">In writing.</span>
          </div>
        </div>
      )}

      {index === 2 && (
        <div className="mt-5">
          <p className="font-mono text-[10px] tracking-[0.25em] text-stone-400 uppercase">
            ■ Job day
          </p>
          <div className="mt-4 space-y-3">
            {["Vanity set, plumbed, and tested", "Floors laid straight, trim back on", "Shed sided, painted, done"].map(
              (task) => (
                <div key={task} className="flex items-center gap-3 text-sm text-stone-200">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold-500 font-mono text-[10px] font-bold text-navy-950">
                    ✓
                  </span>
                  {task}
                </div>
              ),
            )}
          </div>
          <p className="mt-5 border-t border-stone-600/40 pt-4 font-mono text-xs text-stone-400">
            Swept up · walked through · fully insured
          </p>
        </div>
      )}
    </div>
  );
}

/**
 * Pinned scroll sequence. The outer wrapper is 320vh tall; the inner screen
 * sticks while scroll progress through the wrapper drives which step is
 * active. Scrubbing backwards reverses it. On mobile the pinning is
 * disabled and all steps render at full strength.
 */
export default function Process() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActive(Math.min(STEPS.length - 1, Math.floor(v * STEPS.length)));
  });

  return (
    <section id="process" className="bg-white">
      <div ref={wrapRef} className="relative md:h-[320vh]">
        <div className="py-24 md:sticky md:top-0 md:flex md:h-screen md:flex-col md:justify-center md:py-0">
          <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
            <SectionHeading
              align="left"
              eyebrow="Process"
              title="Three steps."
              titleMuted="That's the whole thing."
            />

            <div className="mt-14 grid items-center gap-14 md:grid-cols-2">
              {/* Steps + scroll-scrubbed progress track */}
              <div className="relative pl-8">
                <div
                  aria-hidden="true"
                  className="absolute top-1 bottom-1 left-0 w-0.5 bg-stone-200"
                />
                <motion.div
                  aria-hidden="true"
                  style={{ scaleY: scrollYProgress }}
                  className="absolute top-1 bottom-1 left-0 w-0.5 origin-top bg-gold-500"
                />

                <div className="space-y-12">
                  {STEPS.map((step, i) => (
                    <div
                      key={step.number}
                      className={`transition-opacity duration-300 ${
                        i === active ? "opacity-100" : "md:opacity-30"
                      }`}
                    >
                      <p
                        className={`font-mono text-sm font-bold ${
                          i === active ? "text-gold-600" : "text-stone-400"
                        }`}
                      >
                        {step.number}
                      </p>
                      <h3 className="mt-2 font-display text-2xl font-bold text-navy-800 sm:text-3xl">
                        {step.title}
                      </h3>
                      <p className="mt-2.5 max-w-md leading-relaxed text-stone-600">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Swapping media panel — desktop only; mobile reads fine without it */}
              <div className="hidden md:block">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.35, ease: EASE }}
                  >
                    <StepPanel index={active} />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
