"use client";

import { useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { EASE } from "./Reveal";

export type LightboxImage = {
  src: string;
  alt: string;
  /** Caption line, e.g. the project or service name. */
  title: string;
  /** Optional highlighted prefix, e.g. "Before" / "After" / "Finished". */
  label?: string;
};

/** Corner badge that signals a photo can be tapped to enlarge. */
export function ExpandIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
    </svg>
  );
}

/** Full-screen viewer so the work is actually inspectable, not thumbnail-sized. */
export default function Lightbox({
  image,
  onClose,
}: {
  image: LightboxImage | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!image) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    document.documentElement.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.documentElement.style.overflow = "";
    };
  }, [image, onClose]);

  return (
    <AnimatePresence>
      {image && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: EASE }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-navy-950/95 p-4 backdrop-blur-sm sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={image.label ? `${image.title}: ${image.label}` : image.title}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close photo"
            className="absolute top-4 right-4 flex h-11 w-11 items-center justify-center rounded-full border border-stone-500/50 text-2xl leading-none text-stone-200 transition-colors hover:border-gold-500 hover:text-gold-400"
          >
            ×
          </button>
          <motion.div
            initial={{ scale: 0.96, y: 12 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.96, y: 12 }}
            transition={{ duration: 0.25, ease: EASE }}
            onClick={(event) => event.stopPropagation()}
            className="flex max-h-full flex-col items-center"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={1600}
              height={1200}
              className="h-auto max-h-[80vh] w-auto max-w-full rounded-xl object-contain"
            />
            <p className="mt-4 text-center text-sm text-stone-300">
              {image.label && (
                <>
                  <span className="font-bold text-gold-500 uppercase">{image.label}</span>
                  <span className="mx-2 text-stone-500">·</span>
                </>
              )}
              {image.title}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
