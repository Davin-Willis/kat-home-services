"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Readiness-gated splash for mobile: a brief brand moment while the page
 * finishes loading, instead of a flash of half-styled content on slow
 * connections. Gated on actual readiness (document load + fonts), not a
 * fixed timer, with a hard 2.5s cap so it can never trap anyone.
 * Desktop never sees it (md:hidden).
 */
export default function MobileLoader() {
  // Render the overlay on first paint so it covers hydration; hide once ready.
  const [done, setDone] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const finish = () => {
      if (!cancelled) setDone(true);
    };

    const whenLoaded =
      document.readyState === "complete"
        ? Promise.resolve()
        : new Promise<void>((resolve) => {
            window.addEventListener("load", () => resolve(), { once: true });
          });
    const whenFonts =
      "fonts" in document ? document.fonts.ready.then(() => undefined) : Promise.resolve();

    Promise.all([whenLoaded, whenFonts]).then(finish);
    const failSafe = window.setTimeout(finish, 2500);

    return () => {
      cancelled = true;
      window.clearTimeout(failSafe);
    };
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loader"
          exit={{ opacity: 0, transition: { duration: 0.4 } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-5 bg-navy-950 md:hidden"
          aria-hidden="true"
        >
          {/* Plain <img>: tiny file, must not wait on any framework machinery */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/kat-logo.png"
            alt=""
            width={128}
            height={120}
            className="w-32 animate-pulse"
          />
          <p className="font-mono text-[10px] tracking-[0.3em] text-gold-500 uppercase">
            KAT Home Services
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
