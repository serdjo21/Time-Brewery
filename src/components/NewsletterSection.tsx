"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function NewsletterSection() {
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
      const line = root.querySelector("[data-anim='line']");
      const a = root.querySelectorAll("[data-anim='a']");

      gsap.set(a, { y: 14, opacity: 0 });
      if (line) gsap.set(line, { scaleX: 0, transformOrigin: "0% 50%" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      if (line) {
        tl.to(line, { scaleX: 1, duration: 0.55, ease: "power2.out" }, 0);
      }

      tl.to(a, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.08,
      }, 0.12);
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} id="newsletter" className="relative overflow-hidden bg-black text-white">
      {/* background: crno + fini grain */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(rgba(255,255,255,0.22)_1px,transparent_1px)] [background-size:22px_22px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-14 md:py-18">
        {/* gornja linija */}
        <div data-anim="line" className="mb-10 h-px w-full bg-white/10" />

        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <p data-anim="a" className="text-[11px] tracking-[0.28em] text-white/55">
              NEWSLETTER
            </p>

            <h3 data-anim="a" className="mt-3 text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
              Stay notified.
            </h3>

            <p data-anim="a" className="mt-3 max-w-prose text-base text-white/70">
                Subscribe to our newsletter to receive updates on new releases, events, and exclusive offers.
            </p>
          </div>

          <div className="lg:col-span-5">
            <form data-anim="a" className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                required
                placeholder="email adresa"
                className="h-12 flex-1 border border-white/15 bg-black/60 px-4 text-sm text-white placeholder:text-white/35 outline-none focus:border-white/35"
              />
              <button
                type="submit"
                className="h-12 rounded-2xl bg-white px-6 text-sm font-semibold text-black hover:opacity-90 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
