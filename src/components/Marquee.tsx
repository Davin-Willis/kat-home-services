const TRADES = [
  "Bathrooms",
  "Kitchens",
  "Tile",
  "Flooring",
  "Trim",
  "Drywall",
  "Paint",
  "Sheds",
];

function Row({ idPrefix }: { idPrefix: string }) {
  return (
    <>
      {TRADES.map((trade) => (
        <span key={`${idPrefix}-${trade}`} className="flex items-center gap-8 sm:gap-14">
          <span className="font-display text-6xl font-bold tracking-tight text-navy-800 sm:text-8xl">
            {trade}
          </span>
          <span aria-hidden="true" className="font-display text-4xl text-gold-500 sm:text-6xl">
            →
          </span>
        </span>
      ))}
    </>
  );
}

/**
 * Infinite text marquee cycling the trades. The list renders twice inside a
 * w-max flex row; the CSS animation translates it -50%, which lines up
 * exactly with the start of the second copy — a seamless loop with zero
 * JavaScript.
 */
export default function Marquee() {
  return (
    <div aria-hidden="true" className="overflow-hidden bg-paper py-10 sm:py-14">
      <div className="animate-marquee flex w-max gap-8 pr-8 sm:gap-14 sm:pr-14">
        <Row idPrefix="a" />
        <Row idPrefix="b" />
      </div>
    </div>
  );
}
