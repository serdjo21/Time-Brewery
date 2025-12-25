"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { beers } from "./beersData";

export default function BeersIndexGrid() {
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
      const cards = root.querySelectorAll("[data-anim='card']");
      gsap.set(a, { y: 16, opacity: 0 });
      gsap.set(cards, { y: 18, opacity: 0 });

      gsap.timeline({
        scrollTrigger: { trigger: root, start: "top 85%", toggleActions: "play none none reverse" },
      })
        .to(a, { y: 0, opacity: 1, duration: 0.55, ease: "power2.out", stagger: 0.08 }, 0)
        .to(cards, { y: 0, opacity: 1, duration: 0.55, ease: "power2.out", stagger: 0.08 }, 0.12);
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="relative overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(60%_55%_at_55%_18%,rgba(215,180,106,0.10),transparent_62%)]" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(rgba(255,255,255,0.22)_1px,transparent_1px)] [background-size:22px_22px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20">
        <p data-anim="a" className="text-[11px] tracking-[0.28em] text-white/60">
          BEERS
        </p>
        <h1 data-anim="a" className="mt-4 text-balance text-5xl font-semibold tracking-[-0.04em] md:text-6xl">
          Our beer selection.
        </h1>
        <p data-anim="a" className="mt-5 max-w-prose text-base text-white/70 md:text-lg">
          Five signature brews, each with its own character and story.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {beers.map((b) => (
            <Link
              key={b.key}
              href={`/piva/${b.key}`}
              data-anim="card"
              className="group border border-white/10 bg-black/35 hover:bg-white/5 transition"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image src={b.heroBg} alt="" fill className="object-cover opacity-70 group-hover:opacity-90 transition" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
                  <div>
                    <div className="text-lg font-semibold text-white/90">{b.title}</div>
                    <div className="mt-1 text-xs tracking-[0.22em] text-white/55">{b.style}</div>
                  </div>
                  <div className="text-xs text-white/60">{b.abv}</div>
                </div>
              </div>

              <div className="flex items-center justify-between gap-4 border-t border-white/10 px-5 py-4">
                <div className="text-xs text-white/55">{b.subtitle}</div>
                <div className="text-white/45 group-hover:text-white/80 transition">→</div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10">
          <a
            href="https://shop.time-brewery.com"
            className="inline-flex items-center gap-3 rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black hover:opacity-90 transition"
          >
                Open store <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
