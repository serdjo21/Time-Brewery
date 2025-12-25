import Image from "next/image";

export default function PivovarnaProcess() {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <p className="text-[11px] tracking-[0.28em] text-white/60">
          PROCESS
        </p>

        <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-[-0.03em]">
          From raw materials to glass.
        </h2>

        <div className="mt-10 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5 space-y-4 text-white/70 text-lg">
            <p>
              We use carefully selected malts, hops and yeast strains suited
              to each beer style.
            </p>
            <p>
              Brewing, fermentation and maturation are fully controlled to
              ensure stability and clarity in every batch.
            </p>
            <p>
              The beer is unfiltered and unpasteurised, preserving aroma and
              character.
            </p>
          </div>

          <div className="lg:col-span-7 grid gap-4 sm:grid-cols-2">
            <div className="relative aspect-[4/5] overflow-hidden border border-white/10">
              <Image src="/pivovarna/process-1.jpg" alt="" fill className="object-cover" />
            </div>
            <div className="relative aspect-[4/5] overflow-hidden border border-white/10">
              <Image src="/pivovarna/process-2.jpg" alt="" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
