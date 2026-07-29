import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  /** Optional second half of the title, rendered muted — two-tone display. */
  titleMuted?: string;
  intro?: string;
  /** Flip text colors for dark (navy) sections. */
  dark?: boolean;
  align?: "center" | "left";
};

/** Consistent section opener: small gold eyebrow, two-tone display title, optional intro. */
export default function SectionHeading({
  eyebrow,
  title,
  titleMuted,
  intro,
  dark = false,
  align = "center",
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <Reveal className={centered ? "mx-auto max-w-2xl text-center" : "max-w-3xl"}>
      <p
        className={`font-display text-sm font-bold tracking-[0.14em] uppercase ${
          dark ? "text-gold-500" : "text-gold-600"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl ${
          dark ? "text-white" : "text-navy-800"
        }`}
      >
        {title}
        {titleMuted && (
          <span className={dark ? "text-stone-300" : "text-stone-500"}> {titleMuted}</span>
        )}
      </h2>
      {intro && (
        <p
          className={`mt-5 text-lg leading-relaxed ${
            dark ? "text-stone-300" : "text-stone-600"
          }`}
        >
          {intro}
        </p>
      )}
    </Reveal>
  );
}
