import Image from "next/image";
import Link from "next/link";

export default function PivovarnaQuality() {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          <div className="lg:col-span-6">
            <p className="text-[11px] tracking-[0.28em] text-white/60">
              QUALITY
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-[-0.03em]">
              Consistency matters.
            </h2>

            <p className="mt-5 text-white/70 text-lg">
              Our brewery operates with strict quality control at every stage.
              From raw materials to packaging, each step is monitored to ensure
              reliability and safety.
            </p>

            <p className="mt-4 text-white/60">
              This allows us to scale production while maintaining the same
              standards expected from a craft brewery.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                href="/piva"
                className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black"
              >
                Explore our beers
              </Link>

              <Link
                href="/pivnica"
                className="rounded-2xl border border-white/20 px-6 py-3 text-sm text-white/80"
              >
                Visit the taproom
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[16/10] overflow-hidden border border-white/10">
              <Image
                src="/pivovarna/wide-brewery.jpg"
                alt="Brewery tanks"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
