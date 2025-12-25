"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Beer } from "./beersData";

export default function BeerHero({ beer }: { beer: Beer }) {
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
      const can = root.querySelector("[data-anim='can']");
      const bg = root.querySelector("[data-anim='bg']");
      const rail = root.querySelector("[data-anim='rail']");

      gsap.set(a, { y: 18, opacity: 0 });
      gsap.set(rail, { scaleX: 0, transformOrigin: "0% 50%" });

      gsap.timeline({ delay: 0.05 })
        .to(rail, { scaleX: 1, duration: 0.6, ease: "power2.out" }, 0)
        .to(a, { y: 0, opacity: 1, duration: 0.55, ease: "power2.out", stagger: 0.08 }, 0.12);

      if (can) {
        gsap.to(can, {
          y: -10,
          rotate: 0.8,
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      if (bg) {
        gsap.to(bg, {
          y: 22,
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="relative overflow-hidden bg-black text-white">
      {/* background image */}
      <div className="absolute inset-0">
        <div data-anim="bg" className="absolute inset-0">
          <Image src={beer.heroBg} alt="" fill className="object-cover" priority />
        </div>
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_55%_at_60%_20%,rgba(215,180,106,0.12),transparent_62%)]" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(rgba(255,255,255,0.22)_1px,transparent_1px)] [background-size:22px_22px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-16 md:pt-20">
        <div data-anim="rail" className="h-px w-full bg-white/10" />

        <div className="grid items-center gap-12 py-14 md:py-20 lg:grid-cols-12">
          {/* left: text */}
          <div className="lg:col-span-6">
            <p data-anim="a" className="text-[11px] tracking-[0.28em] text-white/60">
              BEERS
            </p>
            <h1 data-anim="a" className="mt-4 text-balance text-5xl font-semibold tracking-[-0.04em] md:text-6xl">
              {beer.title}
            </h1>
            <p data-anim="a" className="mt-3 text-sm tracking-[0.22em] text-white/60">
              {beer.subtitle}
            </p>
            <p data-anim="a" className="mt-6 max-w-prose text-base leading-relaxed text-white/75 md:text-lg">
              {beer.intro}
            </p>

            <div data-anim="a" className="mt-9 flex flex-wrap gap-3">
              <a
                href="https://shop.time-brewery.com"
                className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black hover:opacity-90 transition"
              >
                Buy in store
              </a>
            </div>

            <div data-anim="a" className="mt-10 grid gap-3 sm:grid-cols-3">
              {[
                { k: "Style", v: beer.style },
                { k: "ABV", v: beer.abv },
                { k: "IBU", v: beer.ibu },
              ].map((x) => (
                <div key={x.k} className="border border-white/10 bg-black/35 px-4 py-4">
                  <div className="text-xs tracking-[0.22em] text-white/45">{x.k}</div>
                  <div className="mt-1 text-sm font-semibold text-white/85">{x.v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* right: can */}
          <div className="lg:col-span-6">
            <div className="relative overflow-hidden border border-white/10 bg-black/40">
              <div className="relative aspect-[10/9] w-full">
                <Image
                  data-anim="can"
                  src={beer.canImage}
                  alt={`${beer.title} can`}
                  fill
                  className="object-contain p-10 drop-shadow-[0_70px_120px_rgba(0,0,0,0.70)]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
              <div className="flex items-center justify-between gap-4 border-t border-white/10 px-5 py-4">
                <p className="text-xs tracking-[0.22em] text-white/45">{beer.style}</p>
                <p className="text-xs text-white/55">{beer.color}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pb-10 md:pb-12" />
      </div>
    </section>
  );
}
