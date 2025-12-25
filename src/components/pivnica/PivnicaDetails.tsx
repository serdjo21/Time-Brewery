"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function PivnicaDetails() {
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
      const blocks = root.querySelectorAll("[data-anim='b']");
      gsap.set(blocks, { y: 16, opacity: 0 });

      gsap.timeline({
        scrollTrigger: { trigger: root, start: "top 85%", toggleActions: "play none none reverse" },
      }).to(blocks, { y: 0, opacity: 1, duration: 0.55, ease: "power2.out", stagger: 0.08 });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="relative overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(rgba(255,255,255,0.22)_1px,transparent_1px)] [background-size:22px_22px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* GROUPS */}
          <div id="groups" className="lg:col-span-6">
            <div data-anim="b" className="border border-white/10 bg-black/35">
              <div className="p-8 md:p-10">
                <div className="text-[11px] tracking-[0.28em] text-white/60">FOR GROUPS</div>
                <h3 className="mt-4 text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
                  Tasting, lunch, private room.
                </h3>

                <ul className="mt-6 space-y-3 text-sm text-white/70">
                  <li className="flex gap-3">
                    <span className="mt-[7px] h-1 w-1 rounded-full bg-[#D7B46A]" />
                    <span>
                      Guided tasting of four beers, with snacks served in between.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-[7px] h-1 w-1 rounded-full bg-[#D7B46A]" />
                    <span>
                      We explain what defines great beer and how to taste properly.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-[7px] h-1 w-1 rounded-full bg-[#D7B46A]" />
                    <span>
                      You’ll also hear our story and see a short video about the hop farm and the brewery.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-[7px] h-1 w-1 rounded-full bg-[#D7B46A]" />
                    <span>
                      For larger groups we can tailor a special meal offer (lunch or dinner).
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-[7px] h-1 w-1 rounded-full bg-[#D7B46A]" />
                    <span>
                      A private room is available for celebrations—up to 30 people.
                    </span>
                  </li>
                </ul>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="tel:+38623207370"
                    className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black hover:opacity-90 transition"
                  >
                    Reserve
                  </a>
                  <a
                    href="mailto:info@time-brewery.com"
                    className="rounded-2xl border border-white/18 px-6 py-3 text-sm font-semibold text-white/85 hover:bg-white/10 transition"
                  >
                    Email
                  </a>
                </div>
              </div>

              <div className="border-t border-white/10 px-8 py-5 md:px-10">
                <p className="text-xs text-white/50">Phone: 02 320 73 70</p>
              </div>
            </div>
          </div>

          {/* COMPANIES */}
          <div id="companies" className="lg:col-span-6">
            <div data-anim="b" className="border border-white/10 bg-black/35">
              <div className="p-8 md:p-10">
                <div className="text-[11px] tracking-[0.28em] text-white/60">FOR COMPANIES</div>
                <h3 className="mt-4 text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
                  Seminars, workshops, meetings.
                </h3>

                <ul className="mt-6 space-y-3 text-sm text-white/70">
                  <li className="flex gap-3">
                    <span className="mt-[7px] h-1 w-1 rounded-full bg-[#D7B46A]" />
                    <span>
                      A dedicated room for closed groups (up to 30), with a TV for presentations.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-[7px] h-1 w-1 rounded-full bg-[#D7B46A]" />
                    <span>
                      Suitable for strategic meetings, workshops, seminars and business events—quiet and focused.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-[7px] h-1 w-1 rounded-full bg-[#D7B46A]" />
                    <span>
                      Team building option: tour of the estate and brewery, brewing process overview, plus a meal.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-[7px] h-1 w-1 rounded-full bg-[#D7B46A]" />
                    <span>
                      External partners can organize social games connected to hops and brewing, by agreement.
                    </span>
                  </li>
                </ul>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="tel:+38623207370"
                    className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black hover:opacity-90 transition"
                  >
                    Call to arrange
                  </a>
                  <a
                    href="mailto:info@time-brewery.com"
                    className="rounded-2xl border border-white/18 px-6 py-3 text-sm font-semibold text-white/85 hover:bg-white/10 transition"
                  >
                    info@time-brewery.com
                  </a>
                </div>
              </div>

              <div className="border-t border-white/10 px-8 py-5 md:px-10">
                <p className="text-xs text-white/50">“It’s time to connect as a winning team.”</p>
              </div>
            </div>
          </div>
        </div>

        <div data-anim="b" className="mt-12 grid gap-4 lg:grid-cols-2">
  <div className="relative overflow-hidden border border-white/10 bg-black/35">
    <div className="relative aspect-[16/10] w-full">
      <Image src="/pivnica/vibe-sign.jpg" alt="Taproom sign" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
    </div>
  </div>

  <div className="relative overflow-hidden border border-white/10 bg-black/35">
    <div className="relative aspect-[16/10] w-full">
      <Image src="/pivnica/hero-bar.jpg" alt="Taproom bar" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
    </div>
  </div>
</div>


        {/* Location strip */}
        <div data-anim="b" className="mt-12 border border-white/10 bg-black/35">
          <div className="grid gap-8 p-8 md:p-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <div className="text-[11px] tracking-[0.28em] text-white/60">WHERE TO FIND US</div>
              <div className="mt-3 text-lg font-semibold text-white/85">Dobrava 47, 2360 Radlje ob Dravi</div>
              <div className="mt-2 text-sm text-white/70">
                Taproom: +386 2 320 73 70 · Brewery: +386 41 962 751 · Email: info@time-brewery.com
              </div>
            </div>
            <div className="lg:col-span-4">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Dobrava+47+2360+Radlje+ob+Dravi"
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black hover:opacity-90 transition"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>

        <p className="mt-6 text-xs text-white/45">
          * Content adapted from the official taproom page (offers for groups and companies, contact and location).
        </p>
      </div>
    </section>
  );
}
