"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ShopTeaserSection() {
  const rootRef = useRef<HTMLElement | null>(null);
  const canRef = useRef<HTMLDivElement | null>(null);

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
      const rail = root.querySelector("[data-anim='rail']");
      const a = root.querySelectorAll("[data-anim='a']");
      const stat = root.querySelectorAll("[data-anim='stat']");
      const shine = root.querySelector("[data-anim='shine']");
      const can = root.querySelector("[data-anim='can']");
      const ticker = root.querySelector("[data-anim='ticker']");

      gsap.set(rail, { scaleX: 0, transformOrigin: "0% 50%" });
      gsap.set(a, { y: 18, opacity: 0 });
      gsap.set(stat, { y: 14, opacity: 0 });
      if (shine) gsap.set(shine, { xPercent: -140, opacity: 0.0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top 82%",
          end: "bottom 58%",
          toggleActions: "play none none reverse",
        },
      });

      tl.to(rail, { scaleX: 1, duration: 0.6, ease: "power2.out" }, 0)
        .to(a, { y: 0, opacity: 1, duration: 0.55, ease: "power2.out", stagger: 0.08 }, 0.12)
        .to(stat, { y: 0, opacity: 1, duration: 0.45, ease: "power2.out", stagger: 0.08 }, 0.22);

      // “shine sweep” preko desnog panela
      if (shine) {
        tl.to(shine, { opacity: 1, duration: 0.01 }, 0.15).to(
          shine,
          { xPercent: 140, duration: 1.05, ease: "power2.out" },
          0.18
        );
      }

      // parallax/float na can
      if (can && canRef.current) {
        gsap.to(can, {
          y: -14,
          rotate: 1.1,
          ease: "none",
          scrollTrigger: {
            trigger: canRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // ticker lagani horizontalni drift
      if (ticker) {
        gsap.to(ticker, {
          x: -60,
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} id="shop" className="relative overflow-hidden bg-black text-white">
      {/* Background: crno + diskretan grain + zlatni halo */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(rgba(255,255,255,0.22)_1px,transparent_1px)] [background-size:22px_22px]" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_55%_at_65%_30%,rgba(215,180,106,0.12),transparent_62%)]" />
        <div data-anim="rail" className="absolute inset-x-0 top-0 h-px bg-white/10" />
      </div>

      {/* Ticker traka (da sekcija ima svoj identitet) */}
      <div className="relative border-b border-white/10 bg-black/80">
        <div className="mx-auto max-w-7xl overflow-hidden px-6 py-3">
          <div
            data-anim="ticker"
            className="whitespace-nowrap text-[11px] tracking-[0.28em] text-white/50"
          >
            SHOP • LIMITED EDITION • BUNDLES • GLASSES • GIFT BOX • SHOP • LIMITED EDITION • BUNDLES • GLASSES • GIFT BOX •
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Copy */}
          <div className="lg:col-span-6">
            <div
              data-anim="a"
              className="inline-flex items-center gap-2 border border-white/15 bg-black/50 px-3 py-1 text-[11px] tracking-[0.22em] text-white/65"
            >
              NEW STORE IS <span className="h-1 w-1 rounded-full bg-[#D7B46A]" /> LIVE
            </div>

            <h2 data-anim="a" className="mt-4 text-balance text-4xl font-semibold tracking-[-0.03em] md:text-5xl">
              Order your favorite brews online.
            </h2>

            <p data-anim="a" className="mt-5 max-w-prose text-base leading-relaxed text-white/70 md:text-lg">
              from our brewery straight to your door. order beer, merch, and more with just a few clicks.
            </p>

            <div data-anim="a" className="mt-9 flex flex-wrap gap-3">
              <a
                href="https://shop.time-brewery.com"
                className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black hover:opacity-90 transition"
              >
                Open Shop
              </a>
              <Link
                href="/piva"
                className="rounded-2xl border border-white/18 px-6 py-3 text-sm font-semibold text-white/85 hover:bg-white/10 transition"
              >
                Browse Beers
              </Link>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {[
                { k: "Pakovanje", v: "Sigurno i čisto" },
                { k: "Bundle", v: "Mix po ukusu" },
                { k: "Poklon", v: "Gift ready" },
              ].map((x) => (
                <div
                  key={x.k}
                  data-anim="stat"
                  className="border border-white/10 bg-black/30 px-4 py-4"
                >
                  <div className="text-xs tracking-[0.22em] text-white/45">{x.k}</div>
                  <div className="mt-1 text-sm font-semibold text-white/80">{x.v}</div>
                </div>
              ))}
            </div>

            <p data-anim="a" className="mt-6 text-xs text-white/45">
              shop.time-brewery.com
            </p>
          </div>

          {/* Visual */}
          <div ref={canRef} className="lg:col-span-6">
            <div className="relative overflow-hidden border border-white/10 bg-black">
              {/* shine layer */}
              <div
                data-anim="shine"
                className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 rotate-12 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.10),transparent)]"
              />

              <div className="relative aspect-[10/9] w-full">
                <div className="absolute inset-0 bg-[radial-gradient(55%_55%_at_50%_40%,rgba(255,255,255,0.06),transparent_62%)]" />
                <Image
                  data-anim="can"
                  src="/hero/beer-8oclock.png"
                  alt="Time Brewery can"
                  fill
                  className="object-contain p-10 drop-shadow-[0_70px_120px_rgba(0,0,0,0.70)]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

                {/* corner label */}
                <div className="absolute bottom-5 left-5 inline-flex items-center gap-2 border border-white/15 bg-black/55 px-3 py-1 text-[11px] tracking-[0.22em] text-white/70">
                  ONLINE RELEASE <span className="h-1 w-1 rounded-full bg-[#D7B46A]" /> LIMITED
                </div>
              </div>

              <div className="flex items-center justify-between gap-4 border-t border-white/10 px-5 py-4">
                <p className="text-xs tracking-[0.22em] text-white/45">SHOP</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
