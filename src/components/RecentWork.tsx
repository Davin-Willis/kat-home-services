"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { asset } from "@/lib/asset";
import Lightbox, { ExpandIcon, type LightboxImage } from "./Lightbox";
import Reveal from "./Reveal";
import SawEdge from "./SawEdge";
import SectionHeading from "./SectionHeading";

type ProjectImage = { src: string; alt: string; label: string };

type Project = {
  title: string;
  description: string;
  images: ProjectImage[];
};

// Real KAT projects, shown honestly: befores next to afters.
const PROJECTS: Project[] = [
  {
    title: "Open-concept kitchen",
    description:
      "Load-bearing wall out, beam set, and a pass-through counter built in its place. One closed-off kitchen turned into the center of the house.",
    images: [
      {
        src: "/images/kitchen-before.jpg",
        alt: "Kitchen before renovation, closed off from the living room",
        label: "Before",
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
      "New vanities, quartz tops, mirrors, lighting, hardware, and flooring. Two dated bathrooms in the same house, each with its own look.",
    images: [
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
    ],
  },
  {
    title: "Tongue-and-groove pine ceiling",
    description:
      "Knotty pine run across a vaulted ceiling, fit around the beam and can lights. The kind of detail work that changes the whole room.",
    images: [
      {
        src: "/images/pine-ceiling.jpg",
        alt: "Vaulted tongue-and-groove pine ceiling with recessed lighting over a kitchen",
        label: "Finished",
      },
    ],
  },
];

export default function RecentWork() {
  const [lightbox, setLightbox] = useState<LightboxImage | null>(null);

  return (
    <section id="work" className="relative bg-navy-800 py-24 sm:py-32">
      <SawEdge fill="var(--color-navy-800)" className="absolute inset-x-0 -top-4" />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          dark
          eyebrow="Recent work"
          title="Real jobs, around Louisville"
          intro="No stock photos here. This is our work, befores and all. Tap any photo for a closer look, and ask us for references if you want to talk to the homeowners."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.title} delay={(i % 2) * 0.12}>
              <motion.figure
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="flex h-full flex-col overflow-hidden rounded-2xl border border-stone-600/40 bg-navy-900/70"
              >
                <div
                  className={`grid gap-px bg-navy-950 ${
                    project.images.length === 1 ? "grid-cols-1" : "grid-cols-2"
                  }`}
                >
                  {project.images.map((image) => (
                    <button
                      key={image.src}
                      type="button"
                      onClick={() =>
                        setLightbox({ ...image, title: project.title })
                      }
                      aria-label={`Enlarge photo: ${image.alt}`}
                      className="group/photo relative block cursor-zoom-in"
                    >
                      <Image
                        src={asset(image.src)}
                        alt={image.alt}
                        width={480}
                        height={600}
                        className={`w-full object-cover transition-transform duration-500 group-hover/photo:scale-[1.03] ${
                          project.images.length === 1
                            ? "aspect-[8/5]"
                            : "aspect-[4/5]"
                        }`}
                      />
                      <span className="absolute bottom-2 left-2 rounded-full bg-navy-950/80 px-2.5 py-1 text-[10px] font-semibold tracking-[0.1em] text-gold-500 uppercase backdrop-blur-sm">
                        {image.label}
                      </span>
                      <span className="absolute right-2 bottom-2 flex h-7 w-7 items-center justify-center rounded-full bg-navy-950/80 text-stone-300 backdrop-blur-sm transition-colors group-hover/photo:text-gold-400">
                        <ExpandIcon />
                      </span>
                    </button>
                  ))}
                </div>
                <figcaption className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-2.5 flex-1 leading-relaxed text-stone-300">
                    {project.description}
                  </p>
                </figcaption>
              </motion.figure>
            </Reveal>
          ))}
        </div>
      </div>

      <Lightbox image={lightbox} onClose={() => setLightbox(null)} />
    </section>
  );
}
