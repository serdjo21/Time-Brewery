import Image from "next/image";

export default function PivovarnaPhilosophy() {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20 grid gap-12 lg:grid-cols-12 items-center">
        <div className="lg:col-span-5">
          <p className="text-[11px] tracking-[0.28em] text-white/60">
            PHILOSOPHY
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-[-0.03em]">
            Craft without shortcuts.
          </h2>

          <p className="mt-5 text-white/70 text-lg">
            Our approach is simple: good raw materials, controlled fermentation
            and patience. We don’t chase trends — we focus on balance,
            drinkability and repeatability.
          </p>

          <p className="mt-4 text-white/60">
            Every beer is brewed with the same goal: to taste the same today,
            tomorrow and next year.
          </p>
        </div>

        <div className="lg:col-span-7">
          <div className="relative aspect-[16/10] overflow-hidden border border-white/10">
            <Image
              src="/pivovarna/philosophy.jpg"
              alt="Brewery interior"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
