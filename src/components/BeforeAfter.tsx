"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { asset } from "@/lib/asset";
import Lightbox, { ExpandIcon, type LightboxImage } from "./Lightbox";
import Reveal from "./Reveal";
import SawEdge from "./SawEdge";
import SectionHeading from "./SectionHeading";

type JobImage = { src: string; alt: string; label: string };

type Job = {
  title: string;
  description: string;
  images: JobImage[];
};

// Real KAT jobs, each presented as one unit: befores, progress shots, and
// afters together. Every photo opens the shared lightbox at full size.
const JOBS: Job[] = [
  {
    title: "Open-concept kitchen",
    description:
      "Load-bearing wall out, beam set, new floors in, and a pass-through counter built in its place. One closed-off kitchen turned into the center of the house.",
    images: [
      {
        src: "/images/kitchen-before.jpg",
        alt: "Kitchen before renovation, closed off from the living room",
        label: "Before",
      },
      {
        src: "/images/wall-removal-during.jpg",
        alt: "Load-bearing wall being removed and replaced with a beam between kitchen and living room",
        label: "During",
      },
      {
        src: "/images/flooring-install.jpg",
        alt: "Luxury vinyl plank flooring being installed across the kitchen",
        label: "New floors",
      },
      {
        src: "/images/kitchen-after.jpg",
        alt: "Finished open-concept kitchen with exposed wood beam and pass-through counter",
        label: "After",
      },
      {
        src: "/images/living-room-after.jpg",
        alt: "Living room after renovation with new pass-through counter into the kitchen",
        label: "After",
      },
    ],
  },
  {
    title: "Two full bathroom remodels",
    description:
      "New vanities, quartz tops, mirrors, lighting, hardware, tile, and flooring. Two dated bathrooms in the same house, each with its own look.",
    images: [
      {
        src: "/images/tile-shower.jpg",
        alt: "New white tile tub surround with two inlaid mosaic niches",
        label: "Tile work",
      },
      {
        src: "/images/bathroom-remodel-gold.jpg",
        alt: "Remodeled bathroom with sage walls and gold fixtures",
        label: "Bath 1",
      },
      {
        src: "/images/bathroom-remodel-black.jpg",
        alt: "Remodeled bathroom with white vanity and matte black fixtures",
        label: "Bath 2",
      },
    ],
  },
  {
    title: "Backyard shed rebuild",
    description:
      "Weathered shed rebuilt from the runners up: new framing, siding, and paint, plus insulation, power, a light, and a window AC inside.",
    images: [
      {
        src: "/images/shed-before.jpg",
        alt: "Weathered shed before rebuild",
        label: "Before",
      },
      {
        src: "/images/shed-after.jpg",
        alt: "Rebuilt shed with fresh white siding and black trim",
        label: "After",
      },
      {
        src: "/images/shed-side-after.jpg",
        alt: "Side view of the rebuilt shed with white siding, black metal wainscot, and a window AC unit",
        label: "After",
      },
    ],
  },
];

// Detail jobs with a single photo so far; shown smaller, side by side.
const DETAIL_JOBS: Job[] = [
  {
    title: "Tongue-and-groove pine ceiling",
    description:
      "Knotty pine run across a vaulted ceiling, fit around the beam and can lights.",
    images: [
      {
        src: "/images/pine-ceiling.jpg",
        alt: "Vaulted tongue-and-groove pine ceiling with recessed lighting over a kitchen",
        label: "Finished",
      },
    ],
  },
  {
    title: "Picture-frame accent wall",
    description:
      "Trim built out, caulked, and painted for a feature wall.",
    images: [
      {
        src: "/images/accent-wall.jpg",
        alt: "Painted accent wall with picture-frame trim molding",
        label: "In progress",
      },
    ],
  },
];

function JobPhoto({
  image,
  jobTitle,
  aspect,
  onOpen,
}: {
  image: JobImage;
  jobTitle: string;
  aspect: string;
  onOpen: (image: LightboxImage) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen({ ...image, title: jobTitle })}
      aria-label={`Enlarge photo: ${image.alt}`}
      className="group/photo relative block overflow-hidden rounded-lg"
    >
      <Image
        src={asset(image.src)}
        alt={image.alt}
        width={480}
        height={360}
        className={`${aspect} w-full cursor-zoom-in object-cover transition-transform duration-500 group-hover/photo:scale-[1.03]`}
      />
      <span className="absolute bottom-2 left-2 rounded-full bg-navy-950/80 px-2.5 py-1 text-[10px] font-semibold tracking-[0.1em] text-gold-500 uppercase backdrop-blur-sm">
        {image.label}
      </span>
      <span className="absolute right-2 bottom-2 flex h-7 w-7 items-center justify-center rounded-full bg-navy-950/80 text-stone-300 backdrop-blur-sm transition-colors group-hover/photo:text-gold-400">
        <ExpandIcon />
      </span>
    </button>
  );
}

export default function BeforeAfter() {
  const [lightbox, setLightbox] = useState<LightboxImage | null>(null);

  return (
    <section id="work" className="relative bg-navy-800 py-24 sm:py-32">
      <SawEdge fill="var(--color-navy-800)" className="absolute inset-x-0 -top-4" />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          dark
          eyebrow="Before & after"
          title="Real jobs,"
          titleMuted="start to finish."
          intro="No stock photos here. This is our work. Tap any photo for a closer look, and ask us for references if you want to talk to the homeowners."
        />

        <div className="mt-16 space-y-6">
          {JOBS.map((job, i) => (
            <Reveal key={job.title} delay={i === 0 ? 0 : 0.08}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="rounded-2xl border border-stone-600/40 bg-navy-900/70 p-5 sm:p-7"
              >
                <div className="mb-5 max-w-3xl">
                  <h3 className="font-display text-2xl font-bold text-white">
                    {job.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-stone-300">
                    {job.description}
                  </p>
                </div>
                <div
                  className={`grid gap-2 ${
                    job.images.length > 3
                      ? "grid-cols-2 sm:grid-cols-3"
                      : "grid-cols-1 sm:grid-cols-3"
                  }`}
                >
                  {job.images.map((image, j) => (
                    <JobPhoto
                      key={image.src}
                      image={image}
                      jobTitle={job.title}
                      aspect={
                        // In a 5-photo collage the last tile stretches to
                        // fill the row on small screens.
                        job.images.length > 3 && j === job.images.length - 1
                          ? "aspect-[4/3] max-sm:col-span-2 max-sm:aspect-[8/3]"
                          : "aspect-[4/3]"
                      }
                      onOpen={setLightbox}
                    />
                  ))}
                </div>
              </motion.article>
            </Reveal>
          ))}

          {/* Single-photo detail jobs, paired up so they read as one row */}
          <div className="grid gap-6 md:grid-cols-2">
            {DETAIL_JOBS.map((job, i) => (
              <Reveal key={job.title} delay={i * 0.08} className="h-full">
                <motion.article
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="flex h-full flex-col rounded-2xl border border-stone-600/40 bg-navy-900/70 p-5 sm:p-7"
                >
                  <div className="mb-5">
                    <h3 className="font-display text-2xl font-bold text-white">
                      {job.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-stone-300">
                      {job.description}
                    </p>
                  </div>
                  <div className="mt-auto">
                    <JobPhoto
                      image={job.images[0]}
                      jobTitle={job.title}
                      aspect="aspect-[16/10]"
                      onOpen={setLightbox}
                    />
                  </div>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <Lightbox image={lightbox} onClose={() => setLightbox(null)} />
    </section>
  );
}
