import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const STEPS = [
  {
    number: "01",
    title: "Text us the job",
    description:
      "Send photos of what needs doing straight to Alex or Tony: the bathroom, the floor, the wall you want gone.",
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
      "We show up when we said we would, protect your floors, and walk the finished job with you before we leave.",
  },
];

function PanelLabel({ children }: { children: string }) {
  return (
    <p className="font-display text-[11px] font-bold tracking-[0.14em] text-stone-400 uppercase">
      {children}
    </p>
  );
}

/** Mock UI panels — one small prop per step, shown side by side with it. */
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
          <PanelLabel>Your text thread</PanelLabel>
          {["IMG_0714.jpg · hall bathroom", "IMG_1262.jpg · kitchen floor", "IMG_2274.jpg · backyard shed"].map(
            (file) => (
              <div
                key={file}
                className="rounded-lg rounded-bl-sm bg-navy-700/70 px-4 py-2.5 text-xs text-stone-300"
              >
                {file}
              </div>
            ),
          )}
          <div className="ml-10 rounded-lg rounded-br-sm bg-gold-500 px-4 py-2.5 text-sm font-medium text-navy-950">
            This is Alex. We can handle all three, quote to you tomorrow. 👍
          </div>
        </div>
      )}

      {index === 1 && (
        <div className="mt-5">
          <PanelLabel>Your estimate</PanelLabel>
          <div className="mt-4 space-y-2.5 text-xs text-stone-300">
            {[
              ["Refresh hall bathroom", "itemized"],
              ["New LVP · kitchen floor", "itemized"],
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
          <PanelLabel>Job day</PanelLabel>
          <div className="mt-4 space-y-3">
            {["Vanity set, plumbed, and tested", "Floors laid straight, trim back on", "Shed sided, painted, done"].map(
              (task) => (
                <div key={task} className="flex items-center gap-3 text-sm text-stone-200">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold-500 text-[10px] font-bold text-navy-950">
                    ✓
                  </span>
                  {task}
                </div>
              ),
            )}
          </div>
          <p className="mt-5 border-t border-stone-600/40 pt-4 text-xs text-stone-400">
            Swept up · walked through · fully insured
          </p>
        </div>
      )}
    </div>
  );
}

/**
 * Three steps, side by side, no scroll-jacking: the section reads in one
 * screen and every step stays at full contrast.
 */
export default function Process() {
  return (
    <section id="process" className="bg-white py-24 sm:py-32">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeading
          align="left"
          eyebrow="Process"
          title="Three steps."
          titleMuted="That's the whole thing."
        />

        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {STEPS.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.08} className="flex h-full flex-col">
              <p className="text-sm font-bold text-gold-600">{step.number}</p>
              <h3 className="mt-2 font-display text-2xl font-bold text-navy-800">
                {step.title}
              </h3>
              <p className="mt-2.5 leading-relaxed text-stone-600">
                {step.description}
              </p>
              <div className="mt-6 md:mt-auto md:pt-6">
                <StepPanel index={i} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
