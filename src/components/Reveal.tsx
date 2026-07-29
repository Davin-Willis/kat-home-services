"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/** Shared deceleration curve — snappy start, soft landing. */
export const EASE = [0.22, 1, 0.36, 1] as const;
export const EASE_CSS = "cubic-bezier(0.22, 1, 0.36, 1)";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger siblings by passing increasing delays (seconds). */
  delay?: number;
  /** How far the element slides up from, in px. */
  y?: number;
};

/**
 * Fail-open scroll reveal. The server HTML renders content fully visible, so
 * nothing depends on JavaScript to appear (no blank sections without JS, on
 * anchor jumps, or on back-button restores). After hydration, elements still
 * well below the fold are faded down and slide in as they approach; if the
 * observer never fires, content simply stays visible.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hidden, setHidden] = useState(false);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Only elements comfortably below the fold join the animation — anything
    // at or near the viewport stays visible from the first paint.
    if (el.getBoundingClientRect().top < window.innerHeight * 0.9) return;

    setHidden(true);
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) show(false);
      },
      { rootMargin: "0px 0px -40px 0px" },
    );
    // Anchor navigation jumps the viewport instead of scrolling through it,
    // so the moment a hash link is used, everything fails open at once —
    // instantly, with no fade to lag behind the jump.
    const onHashChange = () => show(true);
    function show(instant: boolean) {
      if (instant) setAnimate(false);
      setHidden(false);
      observer.disconnect();
      window.removeEventListener("hashchange", onHashChange);
    }
    observer.observe(el);
    window.addEventListener("hashchange", onHashChange);
    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: hidden ? 0 : 1,
        transform: hidden ? `translateY(${y}px)` : "none",
        transition: animate
          ? `opacity 0.7s ${EASE_CSS} ${delay}s, transform 0.7s ${EASE_CSS} ${delay}s`
          : "none",
      }}
    >
      {children}
    </div>
  );
}
