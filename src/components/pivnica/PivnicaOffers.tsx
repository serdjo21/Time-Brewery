"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function PivnicaOffers() {
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
      const rail = root.querySelector("[data-anim='rail']");

      gsap.set(a, { y: 16, opacity: 0 });
      gsap.set(cards, { y: 18, opacity: 0 });
      if (rail) gsap.set(rail, { scaleX: 0, transformOrigin: "0% 50%" });

      const tl = gsap.timeline({
        scrollTrigger: { trigger: root, start: "top 85%", toggleActions: "play none none reverse" },
      });

      if (rail) tl.to(rail, { scaleX: 1, duration: 0.6, ease: "power2.out" }, 0);
      tl.to(a, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out", stagger: 0.08 }, 0.12)
        .to(cards, { y: 0, opacity: 1, duration: 0.55, ease: "power2.out", stagger: 0.08 }, 0.18);
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
              OFFERS
            </p>
            <h2 data-anim="a" className="mt-4 text-balance text-4xl font-semibold tracking-[-0.03em] md:text-5xl">
              Choose the experience.
            </h2>
            <p data-anim="a" className="mt-5 max-w-prose text-base leading-relaxed text-white/70 md:text-lg">
              For small groups, larger gatherings, and company events—structured, clean, and easy to book.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-5 md:grid-cols-2">
              <a
                data-anim="card"
                href="#groups"
                className="group border border-white/10 bg-black/35 hover:bg-white/5 transition"
              >
                <div className="p-7">
                  <div className="text-xs tracking-[0.22em] text-white/45">FOR GROUPS</div>
                  <div className="mt-3 text-xl font-semibold text-white/85">Guided tasting + lunch/dinner</div>
                  <p className="mt-3 text-sm text-white/70">
                    Guided tasting of four beers, snacks in between, and the option to complete it with a meal.
                  </p>
                  <div className="mt-6 text-white/45 group-hover:text-white/80 transition">→ Details</div>
                </div>
              </a>

              <a
                data-anim="card"
                href="#companies"
                className="group border border-white/10 bg-black/35 hover:bg-white/5 transition"
              >
                <div className="p-7">
                  <div className="text-xs tracking-[0.22em] text-white/45">FOR COMPANIES</div>
                  <div className="mt-3 text-xl font-semibold text-white/85">Private room + seminars</div>
                  <p className="mt-3 text-sm text-white/70">
                    A dedicated room (up to 30), TV for presentations, and a calm setup for workshops and meetings.
                  </p>
                  <div className="mt-6 text-white/45 group-hover:text-white/80 transition">→ Details</div>
                </div>
              </a>
            </div>
            

            <div data-anim="a" className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="tel:+38623207370"
                className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black hover:opacity-90 transition"
              >
                Book by phone
              </a>
              <span className="text-xs text-white/50">02 320 73 70</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
