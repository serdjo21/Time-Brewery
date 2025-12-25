"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function PivnicaFoodSection() {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const root = rootRef.current;
    if (!root) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      const a = root.querySelectorAll("[data-anim='a']");
      const img = root.querySelectorAll("[data-anim='img']");
      gsap.set(a, { y: 16, opacity: 0 });
      gsap.set(img, { y: 18, opacity: 0 });

      gsap.timeline({
        scrollTrigger: { trigger: root, start: "top 85%", toggleActions: "play none none reverse" },
      })
        .to(a, { y: 0, opacity: 1, duration: 0.55, ease: "power2.out", stagger: 0.08 }, 0)
        .to(img, { y: 0, opacity: 1, duration: 0.7, ease: "power2.out", stagger: 0.12 }, 0.12);
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="relative overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_55%_at_70%_25%,rgba(215,180,106,0.10),transparent_62%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:22px_22px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <p data-anim="a" className="text-[11px] tracking-[0.28em] text-white/60">
              FOOD
            </p>
            <h2 data-anim="a" className="mt-4 text-4xl md:text-5xl font-semibold tracking-[-0.03em]">
              Dishes crafted to pair with our beers.
            </h2>
            <p data-anim="a" className="mt-4 max-w-prose text-white/70 text-base md:text-lg">
                Our kitchen serves up hearty, flavorful dishes crafted to pair perfectly with our beers. Think elevated pub classics made from quality ingredients.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div data-anim="a" className="border border-white/10 bg-black/35 px-5 py-4">
                <div className="text-xs tracking-[0.22em] text-white/45">PAIRINGS</div>
                <div className="mt-2 text-sm font-semibold text-white/85">Meat · fries · sauces</div>
              </div>
              <div data-anim="a" className="border border-white/10 bg-black/35 px-5 py-4">
                <div className="text-xs tracking-[0.22em] text-white/45">GROUPS</div>
                <div className="mt-2 text-sm font-semibold text-white/85">Tasting + meal options</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 grid gap-4 sm:grid-cols-2">
            <div data-anim="img" className="relative overflow-hidden border border-white/10 bg-black/40">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/pivnica/food-plate.jpg"
                  alt="Taproom food"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 30vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
              </div>
            </div>

            <div data-anim="img" className="relative overflow-hidden border border-white/10 bg-black/40">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/pivnica/food-steak.jpg"
                  alt="Taproom steak"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 30vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
