"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Props = {
  id?: string;
  kicker?: string;
  title?: string;
  copy?: string;
  points?: string[];
  ctaHref?: string;
  ctaLabel?: string;
  imageSrc: string;
  imageAlt?: string;
};

export default function IdentitySection({
  id = "identitet",
  kicker = "CRAFT PIVARA",
  title = "Pravimo pivo bez kompromisa.",
  copy = "Male serije, čisti stilovi i ozbiljan ukus. Ako nije dobro — ne izlazi.",
  points = ["Male serije. Velika kontrola.", "Sastojci zbog ukusa.", "Pivo sa karakterom."],
  ctaHref = "/pivara",
  ctaLabel = "Pogledaj pivaru",
  imageSrc,
  imageAlt = "Pivara",
}: Props) {
  const rootRef = useRef<HTMLElement | null>(null);
  const imgWrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const root = rootRef.current;
    if (!root) return;

    // Respect reduced motion
    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      const kickerEl = root.querySelector("[data-anim='kicker']");
      const titleEl = root.querySelector("[data-anim='title']");
      const copyEl = root.querySelector("[data-anim='copy']");
      const listEls = root.querySelectorAll("[data-anim='point']");
      const ctaEl = root.querySelector("[data-anim='cta']");
      const hairlineEl = root.querySelector("[data-anim='hairline']");
      const imageEl = root.querySelector("[data-anim='image']");

      // Initial states (oštre, ne “floaty”)
      gsap.set([kickerEl, titleEl, copyEl, listEls, ctaEl], {
        y: 14,
        opacity: 0,
      });
      gsap.set(hairlineEl, { scaleX: 0, transformOrigin: "50% 50%" });

      // Reveal timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top 78%",
          end: "bottom 50%",
          toggleActions: "play none none reverse",
        },
      });

      tl.to(hairlineEl, { scaleX: 1, duration: 0.6, ease: "power2.out" }, 0)
        .to(kickerEl, { y: 0, opacity: 1, duration: 0.45, ease: "power2.out" }, 0.05)
        .to(titleEl, { y: 0, opacity: 1, duration: 0.55, ease: "power2.out" }, 0.12)
        .to(copyEl, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }, 0.18)
        .to(
          listEls,
          { y: 0, opacity: 1, duration: 0.45, ease: "power2.out", stagger: 0.08 },
          0.25
        )
        .to(ctaEl, { y: 0, opacity: 1, duration: 0.45, ease: "power2.out" }, 0.35);

      // Subtle parallax (image moves a bit)
      if (imgWrapRef.current && imageEl) {
        gsap.to(imageEl, {
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
    <section ref={rootRef} id={id} className="relative overflow-hidden bg-black text-white">
      {/* Background (no glass) */}
      <div className="pointer-events-none absolute inset-0">
        <div data-anim="hairline" className="absolute inset-x-0 top-0 h-px bg-white/10" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(rgba(255,255,255,0.25)_1px,transparent_1px)] [background-size:18px_18px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
          {/* TEXT */}
          <div className="lg:col-span-5">
            <p
              data-anim="kicker"
              className="text-[11px] font-medium tracking-[0.28em] text-white/60"
            >
              {kicker}
            </p>

            <h2
              data-anim="title"
              className="mt-4 text-balance text-4xl font-semibold tracking-[-0.03em] md:text-5xl"
            >
              {title}
            </h2>

            <p
              data-anim="copy"
              className="mt-5 max-w-prose text-pretty text-base leading-relaxed text-white/70 md:text-lg"
            >
              {copy}
            </p>

            <ul className="mt-7 space-y-3">
              {points.slice(0, 3).map((p, i) => (
                <li key={i} data-anim="point" className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/70" />
                  <p className="text-sm leading-relaxed text-white/70">{p}</p>
                </li>
              ))}
            </ul>

            <div data-anim="cta" className="mt-9">
              <Link
                href={ctaHref}
                className="group inline-flex items-center gap-3 border border-white/20 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40"
              >
                <span>{ctaLabel}</span>
                <span className="inline-block transition group-hover:translate-x-1">→</span>
              </Link>

              <p className="mt-3 text-xs text-white/45">
                Pivo prvo mora bit dobro nama. Tek onda ide drugima.
              </p>
            </div>
          </div>

          {/* IMAGE */}
          <div className="lg:col-span-7" ref={imgWrapRef}>
            <div className="relative overflow-hidden border border-white/10">
              <div className="relative aspect-[16/10] w-full">
                {/* parallax target */}
                <div data-anim="image" className="absolute inset-0">
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 58vw"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/15 to-transparent" />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/15" />
              </div>

              <div className="flex items-center justify-between gap-4 border-t border-white/10 bg-black px-5 py-4">
                <p className="text-xs tracking-[0.22em] text-white/45">
                  SMALL BATCH / CLEAN STYLE
                </p>
                <p className="text-xs text-white/55">Iz pivare direktno u čašu.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
