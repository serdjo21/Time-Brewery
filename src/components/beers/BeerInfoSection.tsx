"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Beer } from "./beersData";

export default function BeerInfoSection({ beer }: { beer: Beer }) {
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
      const items = root.querySelectorAll("[data-anim='item']");
      const rail = root.querySelector("[data-anim='rail']");

      gsap.set(a, { y: 16, opacity: 0 });
      gsap.set(items, { y: 16, opacity: 0 });
      if (rail) gsap.set(rail, { scaleX: 0, transformOrigin: "0% 50%" });

      const tl = gsap.timeline({
        scrollTrigger: { trigger: root, start: "top 82%", toggleActions: "play none none reverse" },
      });

      if (rail) tl.to(rail, { scaleX: 1, duration: 0.6, ease: "power2.out" }, 0);
      tl.to(a, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out", stagger: 0.08 }, 0.12)
        .to(items, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out", stagger: 0.08 }, 0.18);
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="relative overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(60%_55%_at_30%_20%,rgba(215,180,106,0.10),transparent_62%)]" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(rgba(255,255,255,0.22)_1px,transparent_1px)] [background-size:22px_22px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div data-anim="rail" className="h-px w-full bg-white/10" />

        <div className="mt-10 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p data-anim="a" className="text-[11px] tracking-[0.28em] text-white/60">
              PROFIL
            </p>
            <h2 data-anim="a" className="mt-4 text-balance text-4xl font-semibold tracking-[-0.03em] md:text-5xl">
              What makes {beer.title} special?
            </h2>
            <p data-anim="a" className="mt-5 max-w-prose text-base leading-relaxed text-white/70 md:text-lg">
              Taste that makes the {beer.title } unique.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {beer.tags.map((t) => (
                <span key={t} data-anim="item" className="border border-white/14 bg-black/30 px-3 py-2 text-[12px] text-white/75">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-3">
              {beer.profile.map((p) => (
                <div key={p.label} data-anim="item" className="border border-white/10 bg-black/30 px-5 py-4">
                  <div className="text-xs tracking-[0.22em] text-white/45">{p.label}</div>
                  <div className="mt-1 text-sm font-semibold text-white/85">{p.value}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div data-anim="item" className="border border-white/10 bg-black/30 px-5 py-4">
                <div className="text-xs tracking-[0.22em] text-white/45">NOTES</div>
                <ul className="mt-3 space-y-2 text-sm text-white/70">
                  {beer.notes.map((n) => (
                    <li key={n} className="flex gap-3">
                      <span className="mt-[7px] h-1 w-1 rounded-full bg-[#D7B46A]" />
                      <span>{n}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div data-anim="item" className="border border-white/10 bg-black/30 px-5 py-4">
                <div className="text-xs tracking-[0.22em] text-white/45">GOES WITH</div>
                <ul className="mt-3 space-y-2 text-sm text-white/70">
                  {beer.pairing.map((n) => (
                    <li key={n} className="flex gap-3">
                      <span className="mt-[7px] h-1 w-1 rounded-full bg-[#D7B46A]" />
                      <span>{n}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p data-anim="item" className="mt-5 text-xs text-white/45">
              * data is approximate and may vary between batches. check the label for exact values.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
