"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function TaproomSection() {
  const rootRef = useRef<HTMLElement | null>(null);
  const imgWrapRef = useRef<HTMLDivElement | null>(null);

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
      const k = root.querySelector("[data-anim='k']");
      const t = root.querySelector("[data-anim='t']");
      const c = root.querySelector("[data-anim='c']");
      const chips = root.querySelectorAll("[data-anim='chip']");
      const cta = root.querySelector("[data-anim='cta']");
      const img = root.querySelector("[data-anim='img']");

      gsap.set([k, t, c, chips, cta], { y: 16, opacity: 0 });
      gsap.set(rail, { scaleX: 0, transformOrigin: "0% 50%" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top 82%",
          end: "bottom 55%",
          toggleActions: "play none none reverse",
        },
      });

      tl.to(rail, { scaleX: 1, duration: 0.6, ease: "power2.out" }, 0)
        .to(k, { y: 0, opacity: 1, duration: 0.45, ease: "power2.out" }, 0.08)
        .to(t, { y: 0, opacity: 1, duration: 0.55, ease: "power2.out" }, 0.12)
        .to(c, { y: 0, opacity: 1, duration: 0.55, ease: "power2.out" }, 0.18)
        .to(chips, { y: 0, opacity: 1, duration: 0.45, ease: "power2.out", stagger: 0.06 }, 0.24)
        .to(cta, { y: 0, opacity: 1, duration: 0.45, ease: "power2.out" }, 0.32);

      // diskretna parallax na slici
      if (img && imgWrapRef.current) {
        gsap.to(img, {
          y: -18,
          ease: "none",
          scrollTrigger: {
            trigger: imgWrapRef.current,
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
    <section ref={rootRef} id="taproom" className="relative overflow-hidden bg-black text-white">
      {/* drugačiji background: “slanted cut” + fine grain */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(rgba(255,255,255,0.22)_1px,transparent_1px)] [background-size:22px_22px]" />
        <div className="absolute -left-24 top-0 h-[140%] w-[60%] -skew-x-[14deg] bg-white/5" />
        <div className="absolute inset-0 bg-[radial-gradient(55%_45%_at_25%_25%,rgba(215,180,106,0.10),transparent_62%)]" />
        <div data-anim="rail" className="absolute inset-x-0 top-0 h-px bg-white/10" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          {/* SLIKA LIJEVO */}
          <div className="lg:col-span-7">
            <div ref={imgWrapRef} className="relative overflow-hidden border border-white/10 bg-black">
              <div className="relative aspect-[16/10] w-full">
                <div data-anim="img" className="absolute inset-0">
                  <Image
                    src="/hero/taproom.jpg"
                    alt="Time Brewery pivnica"
                    fill
                    className="object-cover"
                    priority={false}
                  />
                </div>

                {/* oštar overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0">
                  <div className="flex items-center justify-between gap-4 border-t border-white/10 bg-black/60 px-5 py-4 backdrop-blur-[0px]">
                    <p className="text-xs tracking-[0.22em] text-white/45">TIME BREWERY</p>
                  </div>
                </div>

                {/* mali “badge” */}
              </div>
            </div>
          </div>

          {/* TEKST DESNO */}
          <div className="lg:col-span-5">
            <p data-anim="k" className="text-[11px] font-medium tracking-[0.28em] text-white/60">
              TAPROOM
            </p>

            <h2
              data-anim="t"
              className="mt-4 text-balance text-4xl font-semibold tracking-[-0.03em] md:text-5xl"
            >
              Time Brewery taproom.
            </h2>

            <p data-anim="c" className="mt-5 max-w-prose text-base leading-relaxed text-white/70 md:text-lg">
              Our taproom is more than just a place to drink beer. It's a space where craft meets community, where every pour tells a story, and where you can experience the true essence of Time Brewery. Join us for fresh drafts, seasonal specials, and exclusive brews served straight from the source.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {[
                "Fresh",
                "Seasonal series",
                "Draft specials",
              ].map((x) => (
                <span
                  key={x}
                  data-anim="chip"
                  className="inline-flex items-center border border-white/14 bg-black/30 px-3 py-2 text-[12px] font-medium text-white/75"
                >
                  {x}
                </span>
              ))}
            </div>

            <div data-anim="cta" className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="/pivnica"
                className="inline-flex items-center gap-3 rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black hover:opacity-90 transition"
              >
                <span>About taproom</span>
                <span className="inline-block">→</span>
              </Link>

              <Link
                href="/kontakt"
                className="inline-flex items-center gap-3 rounded-2xl border border-white/18 px-6 py-3 text-sm font-semibold text-white/85 hover:bg-white/10 transition"
              >
                <span>Reservations</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
