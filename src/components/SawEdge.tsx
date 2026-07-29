type SawEdgeProps = {
  /** CSS color of the section this edge belongs to, e.g. "var(--color-paper)" */
  fill: string;
  className?: string;
};

/**
 * Our take on spur.us's pixel-dither section transitions: a saw-blade edge.
 * Render it inside a `relative` section, absolutely positioned at -top-4,
 * with `fill` matching that section's background — the teeth bite into
 * whatever section sits above.
 */
export default function SawEdge({ fill, className = "" }: SawEdgeProps) {
  const teeth = 48;
  const width = 1440;
  const height = 16;
  const step = width / teeth;

  let d = `M0 ${height}`;
  for (let i = 0; i < teeth; i++) {
    d += ` L${(i * step + step / 2).toFixed(1)} 0 L${((i + 1) * step).toFixed(1)} ${height}`;
  }
  d += " Z";

  return (
    <svg
      aria-hidden="true"
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      className={`pointer-events-none block h-4 w-full ${className}`}
    >
      <path d={d} fill={fill} />
    </svg>
  );
}
