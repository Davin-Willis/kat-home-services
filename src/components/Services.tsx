"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import SawEdge from "./SawEdge";
import SectionHeading from "./SectionHeading";

type Service = {
  title: string;
  description: string;
  image: string;
  alt: string;
};

// Every card is a real KAT job photo — the work sells itself.
const SERVICES: Service[] = [
  {
    title: "Bathroom remodels",
    description:
      "Vanities, tubs, tile, lighting, floors — partial refreshes or the whole room, finished down to the caulk lines.",
    image: "/images/bathroom-remodel-gold.jpg",
    alt: "Remodeled bathroom with sage green walls, dark wood vanity, and gold fixtures",
  },
  {
    title: "Kitchens & wall removal",
    description:
      "Open up the floor plan, set the beam, and rebuild the space — structure and finish work handled by the same crew.",
    image: "/images/wall-removal-during.jpg",
    alt: "Load-bearing wall being removed and replaced with a beam between kitchen and living room",
  },
  {
    title: "Tile & showers",
    description:
      "Tub surrounds, custom niches, floors — laid out square, set level, and grouted clean.",
    image: "/images/tile-shower.jpg",
    alt: "New white tile tub surround with two inlaid mosaic niches",
  },
  {
    title: "Flooring",
    description:
      "Luxury vinyl plank, laminate, and more — old floors out, subfloor squared away, new floors laid straight.",
    image: "/images/flooring-install.jpg",
    alt: "Luxury vinyl plank flooring being installed across a kitchen",
  },
  {
    title: "Trim & accent walls",
    description:
      "Picture-frame molding, wainscoting, tongue-and-groove ceilings — the details that make a room feel finished.",
    image: "/images/accent-wall.jpg",
    alt: "Painted accent wall with picture-frame trim molding",
  },
  {
    title: "Sheds & outbuildings",
    description:
      "Repairs, rebuilds, and full makeovers — framing, siding, roofing, paint, even power and AC if you want it.",
    image: "/images/shed-after.jpg",
    alt: "Backyard shed rebuilt with fresh white siding and black trim",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-paper py-24 sm:py-32">
      <SawEdge fill="var(--color-paper)" className="absolute inset-x-0 -top-4" />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          align="left"
          eyebrow="Services"
          title="One crew,"
          titleMuted="the whole job."
          intro="These are the jobs Louisville calls us for most. If yours isn't pictured, ask anyway — between Alex and Tony, it's probably covered."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            // Staggered delay = cards cascade in as the grid scrolls into view
            <Reveal key={service.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group h-full overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-navy-800/8"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    width={640}
                    height={400}
                    className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <span className="absolute top-3 right-3 rounded-full bg-navy-950/80 px-2.5 py-1 font-mono text-xs text-gold-500 backdrop-blur-sm">
                    0{i + 1}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-navy-800">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 leading-relaxed text-stone-600">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
