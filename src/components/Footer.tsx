import Image from "next/image";
import { asset } from "@/lib/asset";
import SawEdge from "./SawEdge";

function FacebookIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M13.5 21.9v-7.4h2.5l.5-3.1h-3V9.5c0-.9.3-1.6 1.6-1.6h1.5V5.1c-.3 0-1.2-.1-2.2-.1-2.3 0-3.8 1.4-3.8 3.9v2.5H8.1v3.1h2.5v7.4a10 10 0 0 0 2.9 0z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative bg-navy-950 pt-16 pb-8">
      <SawEdge fill="var(--color-navy-950)" className="absolute inset-x-0 -top-4" />
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 text-center sm:px-8">
        <Image
          src={asset("/images/kat-logo.png")}
          alt="KAT Home Services bobcat logo"
          width={96}
          height={90}
          className="w-24"
        />
        <p className="text-sm leading-relaxed text-stone-400">
          KAT Home Services, LLC · Fully insured · Bardstown, KY
          <br />
          Tony (502) 674-8851 · Alex (502) 910-5976 ·{" "}
          <a
            href="mailto:Info@KATHomeServices.com"
            className="transition-colors hover:text-gold-500"
          >
            Info@KATHomeServices.com
          </a>
        </p>
        <a
          href="https://www.facebook.com/KAThomeservices"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-stone-400 transition-colors hover:text-gold-500"
        >
          <FacebookIcon />
          facebook.com/KAThomeservices
        </a>
        <div className="h-px w-24 bg-stone-600/40" />
        <p className="text-sm text-stone-400">
          © {new Date().getFullYear()} KAT Home Services, LLC. All rights
          reserved.
        </p>
        <p className="text-xs text-stone-500">
          Website by{" "}
          <a
            href="https://davinwillis.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-stone-600/60 underline-offset-2 transition-colors hover:text-stone-300"
          >
            Davin Willis
          </a>
        </p>
      </div>

      {/* Giant edge-to-edge wordmark */}
      <div className="overflow-hidden">
        <p
          aria-hidden="true"
          className="mt-12 px-2 text-center font-display text-[9.2vw] leading-[0.85] font-bold tracking-tight whitespace-nowrap text-white/95 select-none"
        >
          KAT <span className="text-gold-500">Home Services</span>
        </p>
      </div>
    </footer>
  );
}
