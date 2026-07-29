"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Global animation settings. reducedMotion="user" tells Framer Motion to
 * respect the OS-level "prefers reduced motion" setting: transform-based
 * animations (slides, scales) are skipped, opacity fades are kept.
 */
export default function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
