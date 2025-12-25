"use client";

import Image from "next/image";

export default function PivovarnaHero() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Image
          src="/pivovarna/hero-brewery.jpg"
          alt="Time Brewery – Brewery"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
        <p className="text-[11px] tracking-[0.28em] text-white/60">
          BREWERY
        </p>

        <h1 className="mt-4 text-5xl md:text-6xl font-semibold tracking-[-0.04em]">
          Where the beer is made.
        </h1>

        <p className="mt-6 max-w-prose text-white/75 text-lg">
          Time Brewery is a modern craft brewery focused on clean processes,
          precise recipes and consistent quality.
        </p>
      </div>
    </section>
  );
}
