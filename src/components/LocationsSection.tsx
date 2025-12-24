"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Place = {
  name: string;
  city: string;
  note: string;
};

export default function LocationsSection({
  embedSrc = "https://www.google.com/maps/embed?pb=PASTE_YOUR_EMBED_HERE",
}: {
  embedSrc?: string;
}) {
  const rootRef = useRef<HTMLElement | null>(null);

  const places: Place[] = [
    { name: "Place", city: "Ljubljana", note: "Address example" },
    { name: "Place", city: "Ptuj", note: "Address example" },
    { name: "Place", city: "Maribor", note: "Address example" },
    { name: "Place", city: "Ormozh", note: "Address example" },
  ];

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
      const list = root.querySelectorAll("[data-anim='item']");
      const map = root.querySelector("[data-anim='map']");

      gsap.set(rail, { scaleX: 0, transformOrigin: "50% 50%" });
      gsap.set([a, list, map], { y: 16, opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top 80%",
          end: "bottom 55%",
          toggleActions: "play none none reverse",
        },
      });

      tl.to(rail, { scaleX: 1, duration: 0.6, ease: "power2.out" }, 0)
        .to(a, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out", stagger: 0.08 }, 0.12)
        .to(list, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out", stagger: 0.07 }, 0.22)
        .to(map, { y: 0, opacity: 1, duration: 0.55, ease: "power2.out" }, 0.28);
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} id="prodajna-mjesta" className="relative overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.07] [background-image:radial-gradient(rgba(255,255,255,0.25)_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="absolute inset-0 bg-[radial-gradient(70%_55%_at_25%_20%,rgba(215,180,106,0.12),transparent_60%)]" />
        <div data-anim="rail" className="absolute inset-x-0 top-0 h-px bg-white/10" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <p data-anim="a" className="text-[11px] font-medium tracking-[0.28em] text-white/60">
              Find our beers here.
            </p>
            <h2 data-anim="a" className="mt-4 text-balance text-4xl font-semibold tracking-[-0.03em] md:text-5xl">
              Points of Sale
              <br />
              Our partners
            </h2>
            <p data-anim="a" className="mt-5 max-w-prose text-base leading-relaxed text-white/70 md:text-lg">
              Our beers are available at select locations. Check out the map and list below to find a store or bar near you.
            </p>

            <div className="mt-8 grid gap-3">
              {places.map((p) => (
                <div
                  key={`${p.name}-${p.city}`}
                  data-anim="item"
                  className="group flex items-start justify-between gap-4 border border-white/10 bg-black/30 px-4 py-4 hover:bg-white/5 transition"
                >
                  <div>
                    <div className="text-sm font-semibold text-white/85 group-hover:text-white transition">
                      {p.name}
                    </div>
                    <div className="mt-1 text-xs text-white/55">{p.city}</div>
                  </div>
                  <div className="text-xs tracking-[0.22em] text-white/45">{p.note}</div>
                </div>
              ))}
            </div>

            <p data-anim="a" className="mt-8 text-xs text-white/45">
              Become a partner and stock Time Brewery beers at your location.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div data-anim="map" className="overflow-hidden border border-white/10 bg-black">
              {/* Google Maps embed */}
              <div className="relative aspect-[16/10] w-full">
                <iframe
                  src={embedSrc}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 h-full w-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  aria-label="Google Maps - prodajna mjesta"
                />
              </div>

              <div className="flex items-center justify-between gap-4 border-t border-white/10 px-5 py-4">
                <p className="text-xs tracking-[0.22em] text-white/45">MAP</p>
                <p className="text-xs text-white/55">U embed ubaci pravi pb= kod</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
