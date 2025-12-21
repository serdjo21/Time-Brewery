"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Slide = {
  key: string;
  title: string;
  sub: string;
  img: string;
  accent?: string; // mala riječ (opciono)
};

export default function Hero() {
  const slides = useMemo<Slide[]>(
    () => [
      { key: "3", title: "3 o’clock", sub: "Lager · 4.9%", img: "/hero/beer-3oclock.png", accent: "Core" },
      { key: "5", title: "5 o’clock", sub: "Fresh · Clean", img: "/hero/beer-5oclock.png", accent: "New" },
      { key: "8", title: "8 o’clock", sub: "Bold · Smooth", img: "/hero/beer-8oclock.png", accent: "Limited" },
      { key: "10", title: "10 o’clock", sub: "Late · Strong", img: "/hero/beer-10oclock.png", accent: "Night" },
      // ako hoćeš i “sva piva” kao 5ti:
      // { key: "all", title: "Sva piva", sub: "Kompletna ponuda", img: "/hero/beers.png", accent: "Lineup" },
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);
  const timerRef = useRef<number | null>(null);

  const next = () => {
    setDir(1);
    setIndex((i) => (i + 1) % slides.length);
  };

  const prev = () => {
    setDir(-1);
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  };

  const start = () => {
    stop();
    timerRef.current = window.setInterval(() => next(), 3800);
  };

  const stop = () => {
    if (timerRef.current) window.clearInterval(timerRef.current);
    timerRef.current = null;
  };

  useEffect(() => {
    start();
    return () => stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slides.length]);

  const s = slides[index];

  return (
    <section
      className="relative min-h-[92vh] overflow-hidden bg-[#0B0D10] pt-20"
      onMouseEnter={stop}
      onMouseLeave={start}
      onTouchStart={stop}
      onTouchEnd={start}
    >
      {/* oštar background (bez “brusenog”) */}
      {/* Background photo + tamnjenje */}
<div className="pointer-events-none absolute inset-0">
  {/* fotka lokala */}
  <Image
    src="/hero/taproom.jpg"
    alt="Time Brewery taproom"
    fill
    priority
    className="object-cover"
  />

  {/* zatamni + podigni kontrast da izgleda profi */}
  <div className="absolute inset-0 bg-black/65" />

  {/* vignette (oštri fokus u centru) */}
  <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_25%,rgba(0,0,0,0.15),rgba(0,0,0,0.75))]" />

  {/* minimal grid (da ostane taj “oštar” feel) */}
  <div className="absolute inset-0 opacity-[0.10] [background-image:linear-gradient(to_right,rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:84px_84px]" />
</div>

      {/* content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          {/* LEFT minimal copy */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <Image src="/brand/logo.svg" alt="Time Brewery" width={30} height={30} />
              <span className="text-xs tracking-[0.28em] text-white/60">TIME BREWERY</span>
            </div>

            <div className="mt-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={s.key}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  {s.accent ? (
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1 text-[11px] tracking-[0.22em] text-white/65">
                      {s.accent}
                      <span className="h-1 w-1 rounded-full bg-[#D7B46A]" />
                      ENJOY YOUR MOMENT
                    </div>
                  ) : (
                    <div className="text-[11px] tracking-[0.22em] text-white/55">ENJOY YOUR MOMENT</div>
                  )}

                  <h1 className="mt-4 text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                    {s.title}
                  </h1>
                  <p className="mt-3 text-base text-white/65">{s.sub}</p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* minimal CTA: 2 linka max, bez “polja” */}
            <div className="mt-8 flex gap-3">
              <a
                href="https://shop.time-brewery.com"
                className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black hover:opacity-90 transition"
              >
                Shop
              </a>
              <a
                href="https://booking.time-brewery.com"
                className="rounded-2xl border border-white/18 bg-white/0 px-5 py-3 text-sm font-semibold text-white/85 hover:bg-white/10 transition"
              >
                Booking
              </a>
            </div>

            {/* mali indikator (profi, ne napadan) */}
            <div className="mt-10 flex items-center gap-3">
              <div className="h-[2px] w-10 bg-[#D7B46A]" />
              <div className="text-xs tracking-[0.22em] text-white/45">
                {String(index + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
              </div>
            </div>
          </div>

          {/* RIGHT full image */}
          <div className="relative lg:col-span-7">
            <div className="relative mx-auto h-[62vh] w-full max-w-[560px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={s.key}
                  className="absolute inset-0"
                  initial={{ opacity: 0, x: dir === 1 ? 14 : -14, filter: "blur(8px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, x: dir === 1 ? -14 : 14, filter: "blur(8px)" }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                >
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    priority
                    className="object-contain select-none drop-shadow-[0_70px_120px_rgba(0,0,0,0.70)]"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* ultra-minimal controls (optional, skoro ne vidiš) */}
            <div className="mt-5 flex items-center justify-center gap-3">
              <button
                onClick={prev}
                className="rounded-full border border-white/15 bg-black/20 px-3 py-2 text-sm text-white/70 hover:bg-white/10 transition"
                aria-label="Prev"
              >
                ←
              </button>

              <div className="flex gap-2">
                {slides.map((x, i) => (
                  <button
                    key={x.key}
                    onClick={() => {
                      setDir(i > index ? 1 : -1);
                      setIndex(i);
                    }}
                    className={[
                      "h-1.5 w-7 rounded-full transition",
                      i === index ? "bg-[#D7B46A]" : "bg-white/20 hover:bg-white/35",
                    ].join(" ")}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="rounded-full border border-white/15 bg-black/20 px-3 py-2 text-sm text-white/70 hover:bg-white/10 transition"
                aria-label="Next"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}