import Reveal from "./Reveal";
import SawEdge from "./SawEdge";
import SectionHeading from "./SectionHeading";

const SERVICES = [
  "Handyman",
  "Minor plumbing & electrical",
  "Carpentry",
  "Repair",
  "Remodel",
  "Flooring",
  "Paint",
  "Decks",
  "Demolition",
];

function CheckIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <circle cx="8" cy="8" r="8" className="fill-gold-500/20" />
      <path
        d="M4.5 8.2 7 10.7l4.5-5.4"
        className="stroke-gold-600"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative bg-paper pt-24 pb-4 sm:pt-32">
      <SawEdge fill="var(--color-paper)" className="absolute inset-x-0 -top-4" />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          align="left"
          eyebrow="Services"
          title="If yours isn't listed,"
          titleMuted="ask anyway."
          intro="Big or small, inside or out, this is the work we take on every week."
        />

        <Reveal className="mt-12">
          <ul className="grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <li
                key={service}
                className="flex items-center gap-3 border-b border-stone-200 pb-4 font-display text-xl font-bold text-navy-800"
              >
                <CheckIcon />
                {service}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
