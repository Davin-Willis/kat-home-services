"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/** Shared deceleration curve — snappy start, soft landing. */
export const EASE = [0.22, 1, 0.36, 1] as const;

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger siblings by passing increasing delays (seconds). */
  delay?: number;
  /** How far the element slides up from, in px. */
  y?: number;
};

/**
 * Scroll-triggered reveal: fades + slides content up as it enters the
 * viewport. `once: true` means it plays a single time — content stays put
 * when scrolling back up. The negative margin makes elements start
 * animating slightly before they'd be fully visible, which feels smoother.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px 0px" }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
