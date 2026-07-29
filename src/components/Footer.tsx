import Image from "next/image";
import { asset } from "@/lib/asset";
import SawEdge from "./SawEdge";

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
          KAT Home Services, LLC · Fully insured · Louisville, KY
          <br />
          Alex (502) 910-5976 · Tony (502) 674-8851 ·{" "}
          <a
            href="mailto:Info@KATHomeServices.com"
            className="transition-colors hover:text-gold-500"
          >
            Info@KATHomeServices.com
          </a>
        </p>
        <div className="h-px w-24 bg-stone-600/40" />
        <p className="text-sm text-stone-400">
          © {new Date().getFullYear()} KAT Home Services, LLC. All rights
          reserved.
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
