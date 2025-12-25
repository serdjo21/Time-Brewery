"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function PivnicaAtmosphereSection() {
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
      const img = root.querySelector("[data-anim='img']");
      gsap.set(a, { y: 16, opacity: 0 });
      if (img) gsap.set(img, { y: 18 });

      gsap.timeline({
        scrollTrigger: { trigger: root, start: "top 85%", toggleActions: "play none none reverse" },
      })
        .to(a, { y: 0, opacity: 1, duration: 0.55, ease: "power2.out", stagger: 0.08 }, 0)
        .to(img, { y: 0, duration: 0.9, ease: "power2.out" }, 0.05);

      if (img) {
        gsap.to(img, {
          y: 22,
          ease: "none",
          scrollTrigger: { trigger: root, start: "top bottom", end: "bottom top", scrub: true },
        });
      }
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="relative overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:22px_22px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-14 md:py-18">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <p data-anim="a" className="text-[11px] tracking-[0.28em] text-white/60">
              ATMOSPHERE
            </p>
            <h2 data-anim="a" className="mt-4 text-4xl md:text-5xl font-semibold tracking-[-0.03em]">
                A space to relax and connect.
            </h2>
            <p data-anim="a" className="mt-4 max-w-prose text-white/70 text-base md:text-lg">
                Place yourself in our cozy taproom, designed for comfort and good times.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="relative overflow-hidden border border-white/10 bg-black/40">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  data-anim="img"
                  src="/pivnica/wide-bar.jpg"
                  alt="Taproom interior"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 60vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
              </div>
              <div className="flex items-center justify-between border-t border-white/10 px-5 py-4">
                <span className="text-xs tracking-[0.22em] text-white/45">TIME BREWERY · TAPROOM</span>
                <span className="text-xs text-white/55">Radlje ob Dravi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
