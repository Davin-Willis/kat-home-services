/**
 * Fixed bottom-left brand chip. The demo site ran a playful fake counter
 * here; on a real business site we keep the element but make it factual.
 */
export default function Ticker() {
  return (
    <div className="pointer-events-none fixed bottom-4 left-4 z-40 hidden items-center gap-2.5 rounded-full border border-stone-600/40 bg-navy-950/85 px-4 py-2 backdrop-blur-md sm:flex">
      <span aria-hidden="true" className="h-2 w-2 bg-gold-500" />
      <span className="font-mono text-[11px] tracking-[0.15em] text-stone-300 uppercase">
        Fully insured · Louisville, KY
      </span>
    </div>
  );
}
