"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function PivnicaHero() {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      const a = root.querySelectorAll("[data-anim='a']");
      const rail = root.querySelector("[data-anim='rail']");
      const bg = root.querySelector("[data-anim='bg']");

      gsap.set(a, { y: 18, opacity: 0 });
      if (rail) gsap.set(rail, { scaleX: 0, transformOrigin: "0% 50%" });

      gsap
        .timeline({ delay: 0.05 })
        .to(rail, { scaleX: 1, duration: 0.6, ease: "power2.out" }, 0)
        .to(a, { y: 0, opacity: 1, duration: 0.55, ease: "power2.out", stagger: 0.08 }, 0.12);

      if (bg) gsap.to(bg, { y: 18, ease: "none", scrollTrigger: { trigger: root, start: "top top", end: "bottom top", scrub: true } });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="relative overflow-hidden bg-black text-white">
      {/* Background image (zamijeni putanju kad ubaciš finalnu sliku pivnice) */}
      <div className="absolute inset-0">
        <div data-anim="bg" className="absolute inset-0">
          <Image
            src="/pivnica/hero-bar.jpg"
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_55%_at_60%_20%,rgba(215,180,106,0.12),transparent_62%)]" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(rgba(255,255,255,0.22)_1px,transparent_1px)] [background-size:22px_22px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-16 md:pt-20">
        <div data-anim="rail" className="h-px w-full bg-white/10" />

        <div className="grid gap-12 py-14 md:py-20 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <p data-anim="a" className="text-[11px] tracking-[0.28em] text-white/60">
              TAPROOM
            </p>

            <h1 data-anim="a" className="mt-4 text-balance text-5xl font-semibold tracking-[-0.04em] md:text-6xl">
              Time Brewery Taproom
            </h1>

            <p data-anim="a" className="mt-5 max-w-prose text-base leading-relaxed text-white/75 md:text-lg">
              Next to the brewery, our taproom is the perfect place to enjoy fresh pints and hearty food in a relaxed atmosphere.
            </p>

            <div data-anim="a" className="mt-9 flex flex-wrap gap-3">
              <a
                href="tel:+38623207370"
                className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black hover:opacity-90 transition"
              >
                Call for reservations
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/18 px-6 py-3 text-sm font-semibold text-white/85 hover:bg-white/10 transition"
              >
                Instagram
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/18 px-6 py-3 text-sm font-semibold text-white/85 hover:bg-white/10 transition"
              >
                Facebook
              </a>
            </div>

            <p data-anim="a" className="mt-4 text-xs text-white/50">
              Reservations & orders: <span className="text-white/75">02 320 73 70</span>
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="border border-white/10 bg-black/40">
              <div className="p-8 md:p-10">
                <div data-anim="a" className="text-xs tracking-[0.22em] text-white/50">
                  LOCATION
                </div>
                <div data-anim="a" className="mt-3 text-lg font-semibold text-white/85">
                  Time Brewery d.o.o.
                </div>
                <div data-anim="a" className="mt-2 text-sm text-white/70">
                  Dobrava 47<br />
                  2360 Radlje ob Dravi
                </div>

                <div className="mt-6 grid gap-3">
                  <div data-anim="a" className="flex items-center justify-between border border-white/10 bg-black/30 px-5 py-4">
                    <div className="text-xs tracking-[0.22em] text-white/45">TAPROOM</div>
                    <div className="text-sm font-semibold text-white/80">+386 2 320 73 70</div>
                  </div>
                  <div data-anim="a" className="flex items-center justify-between border border-white/10 bg-black/30 px-5 py-4">
                    <div className="text-xs tracking-[0.22em] text-white/45">BREWERY</div>
                    <div className="text-sm font-semibold text-white/80">+386 41 962 751</div>
                  </div>
                  <div data-anim="a" className="flex items-center justify-between border border-white/10 bg-black/30 px-5 py-4">
                    <div className="text-xs tracking-[0.22em] text-white/45">EMAIL</div>
                    <a className="text-sm font-semibold text-white/80 hover:opacity-90" href="mailto:info@time-brewery.com">
                      info@time-brewery.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/10 px-8 py-5 md:px-10">
                <p className="text-xs text-white/50">
                  * ssss
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pb-10 md:pb-12" />
      </div>
    </section>
  );
}
