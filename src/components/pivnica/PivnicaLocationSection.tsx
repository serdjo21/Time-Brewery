"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function PivnicaLocationSection() {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const root = rootRef.current;
    if (!root) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      const a = root.querySelectorAll("[data-anim='a']");
      const map = root.querySelector("[data-anim='map']");

      gsap.set(a, { y: 16, opacity: 0 });
      gsap.set(map, { y: 20, opacity: 0 });

      gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      })
        .to(a, {
          y: 0,
          opacity: 1,
          duration: 0.55,
          ease: "power2.out",
          stagger: 0.08,
        })
        .to(
          map,
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power2.out",
          },
          "-=0.3"
        );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="relative bg-black text-white">
      {/* texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:22px_22px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* TEXT */}
          <div className="lg:col-span-5">
            <p data-anim="a" className="text-[11px] tracking-[0.28em] text-white/60">
              LOCATION
            </p>

            <h2
              data-anim="a"
              className="mt-4 text-4xl md:text-5xl font-semibold tracking-[-0.03em]"
            >
              Where to find us.
            </h2>

            <p
              data-anim="a"
              className="mt-4 max-w-prose text-white/70 text-base md:text-lg"
            >
              Our taproom is located right next to the brewery in Radlje ob Dravi.
              Easy access, parking on site, and beer straight from the tanks.
            </p>

            <div data-anim="a" className="mt-6 space-y-2 text-sm text-white/70">
              <div>
                <strong className="text-white/85">Address:</strong><br />
                Dobrava 47, 2360 Radlje ob Dravi
              </div>
              <div>
                <strong className="text-white/85">Taproom:</strong> +386 2 320 73 70
              </div>
              <div>
                <strong className="text-white/85">Email:</strong>{" "}
                <a
                  href="mailto:info@time-brewery.com"
                  className="hover:opacity-80 transition"
                >
                  info@time-brewery.com
                </a>
              </div>
            </div>

            <div data-anim="a" className="mt-8">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Dobrava+47+2360+Radlje+ob+Dravi"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black hover:opacity-90 transition"
              >
                Open in Google Maps
              </a>
            </div>
          </div>

          {/* MAP */}
          <div className="lg:col-span-7">
            <div
              data-anim="map"
              className="relative overflow-hidden border border-white/10 bg-black/40"
            >
              <div className="relative aspect-[16/10] w-full">
                <iframe
                  src="https://www.google.com/maps?q=Dobrava%2047%2C%202360%20Radlje%20ob%20Dravi&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 h-full w-full grayscale-[0.2] contrast-[1.05]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
