"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Beer } from "./beersData";

export default function BeerShopSection({ beer }: { beer: Beer }) {
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
      gsap.set(a, { y: 16, opacity: 0 });

      gsap.timeline({
        scrollTrigger: { trigger: root, start: "top 85%", toggleActions: "play none none reverse" },
      }).to(a, { y: 0, opacity: 1, duration: 0.55, ease: "power2.out", stagger: 0.08 });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="relative overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(55%_55%_at_70%_30%,rgba(215,180,106,0.10),transparent_62%)]" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(rgba(255,255,255,0.22)_1px,transparent_1px)] [background-size:22px_22px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-14 md:py-18">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center border border-white/10 bg-black/40">
          <div className="lg:col-span-8 p-8 md:p-10">
            <p data-anim="a" className="text-[11px] tracking-[0.28em] text-white/55">
              SHOP
            </p>
            <h3 data-anim="a" className="mt-3 text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
              {beer.title} u shop-u.
            </h3>
            <p data-anim="a" className="mt-3 max-w-prose text-base text-white/70">
              Ako je dostupno — naći ćeš ga odmah. Ako nije, biće opet kad batch izađe.
            </p>
          </div>

          <div className="lg:col-span-4 p-8 md:p-10 border-t lg:border-t-0 lg:border-l border-white/10">
            <a
              data-anim="a"
              href="https://shop.time-brewery.com"
              className="w-full inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black hover:opacity-90 transition"
            >
              Otvori Shop
            </a>
            <p data-anim="a" className="mt-3 text-xs text-white/45">
              shop.time-brewery.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
