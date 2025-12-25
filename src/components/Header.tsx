"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";

type Item = { label: string; href: string; desc?: string };

export default function Header() {
  const beers: Item[] = useMemo(
    () => [
      { label: "3 o’clock", href: "/piva/3-oclock" },
      { label: "5 o’clock", href: "/piva/5-oclock" },
      { label: "8 o’clock", href: "/piva/8-oclock" },
      { label: "10 o’clock", href: "/piva/10-oclock" },
    ],
    []
  );

  const taprooms: Item[] = useMemo(
    () => [
      { label: "Time Taproom — Vračar", href: "/pivnica/vracar", desc: "Rezervacije · Tap list" },
      { label: "Time Taproom — Dorćol", href: "/pivnica/dorcol", desc: "Live · Events" },
    ],
    []
  );

  const [scrolled, setScrolled] = useState(false);
  const [openBeers, setOpenBeers] = useState(false);
  const [openTap, setOpenTap] = useState(false);

  // Mobile menu
  const [mobileOpen, setMobileOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenBeers(false);
        setOpenTap(false);
        if (mobileOpen) setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (!t.closest("[data-dd]")) {
        setOpenBeers(false);
        setOpenTap(false);
      }
    };
    window.addEventListener("mousedown", onClick);
    return () => window.removeEventListener("mousedown", onClick);
  }, []);

  useEffect(() => {
    if (!panelRef.current) return;

    const tl = gsap.timeline({ paused: true });
    tl.set(panelRef.current, { display: "block" });
    tl.fromTo(
      panelRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.2, ease: "power2.out" }
    );
    tl.fromTo(
      ".m-panel",
      { y: -12, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.35, ease: "power3.out" },
      "<"
    );
    tl.fromTo(
      ".m-item",
      { y: 14, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.35, ease: "power3.out", stagger: 0.06 },
      "-=0.12"
    );

    tlRef.current = tl;

    gsap.set(panelRef.current, { display: "none", opacity: 0 });

    return () => {
      tl.kill();
      tlRef.current = null;
    };
  }, []);

  useEffect(() => {
    const tl = tlRef.current;
    if (!tl) return;
    if (mobileOpen) tl.play(0);
    else {

      tl.reverse();
      tl.eventCallback("onReverseComplete", () => {
        if (panelRef.current) gsap.set(panelRef.current, { display: "none" });
      });
    }
  }, [mobileOpen]);

  const closeAll = () => {
    setOpenBeers(false);
    setOpenTap(false);
    setMobileOpen(false);
  };

  return (
    <header
      className={[
        "fixed top-0 z-50 w-full",
        "bg-black",
        scrolled ? "border-b border-white/10" : "border-b border-transparent",
        "transition-colors duration-300",
      ].join(" ")}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          {/* Logo only */}
          <Link href="/" className="flex items-center" onClick={closeAll}>
            <Image
              src="/brand/logo.svg"
              alt="Time Brewery"
              width={28}
              height={28}
              priority
              className="opacity-90 hover:opacity-100 transition"
            />
          </Link>

          {/* Desktop nav */}
<nav className="hidden md:flex items-center gap-8">
  {[
    { label: "Piva", href: "/piva" },
    { label: "Pivovarna", href: "/pivovarna" },
    { label: "Pivnica", href: "/pivnica" },
    { label: "O nama", href: "/o-nama" },
    { label: "Kontakt", href: "/kontakt" },
  ].map((item) => (
    <Link
      key={item.href}
      href={item.href}
      className="group relative text-sm text-white/75 hover:text-white transition"
      onClick={closeAll}
    >
      {item.label}
      <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-white/80 transition-transform duration-300 group-hover:scale-x-100" />
    </Link>
  ))}
</nav>


          {/* Right side: desktop CTAs OR mobile burger */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="https://booking.time-brewery.com"
                className="group relative overflow-hidden rounded-sm border border-white/20 px-4 py-2 text-sm font-semibold text-white/80 transition hover:text-black"
              >
                <span className="absolute inset-0 -z-10 translate-y-full bg-white transition-transform duration-300 ease-out group-hover:translate-y-0" />
                Booking
              </Link>
              <Link
                href="https://shop.time-brewery.com"
                className="group relative overflow-hidden rounded-sm bg-white px-4 py-2 text-sm font-semibold text-black transition hover:opacity-95"
              >
                <span className="pointer-events-none absolute -left-20 top-0 h-full w-16 rotate-12 bg-black/10 transition-transform duration-500 ease-out group-hover:translate-x-[240px]" />
                Shop
              </Link>
            </div>

            {/* Mobile burger */}
            <button
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/15 bg-black hover:bg-white/5 transition"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Menu"
              aria-expanded={mobileOpen}
            >
              <span className="relative block h-4 w-5">
                <span
                  className={[
                    "absolute left-0 top-0 h-px w-full bg-white transition-transform duration-300",
                    mobileOpen ? "translate-y-[7px] rotate-45" : "",
                  ].join(" ")}
                />
                <span
                  className={[
                    "absolute left-0 top-[7px] h-px w-full bg-white transition-opacity duration-300",
                    mobileOpen ? "opacity-0" : "opacity-100",
                  ].join(" ")}
                />
                <span
                  className={[
                    "absolute left-0 bottom-0 h-px w-full bg-white transition-transform duration-300",
                    mobileOpen ? "translate-y-[-7px] -rotate-45" : "",
                  ].join(" ")}
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile GSAP panel */}
      <div ref={panelRef} className="fixed inset-0 z-[60] bg-black/85 backdrop-blur-sm">
        <div className="m-panel mx-auto max-w-7xl px-4 pt-20 pb-10 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" onClick={closeAll} className="opacity-90 hover:opacity-100 transition">
              <Image src="/brand/logo.svg" alt="Time Brewery" width={30} height={30} />
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className="rounded-md border border-white/15 bg-black px-3 py-2 text-sm text-white/75 hover:bg-white/5 transition"
            >
              Zatvori
            </button>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-12">
            {/* Left column */}
            <div className="m-item space-y-2">
  {[
    { label: "Piva", href: "/piva" },
    { label: "Pivovarna", href: "/pivovarna" },
    { label: "Pivnica", href: "/pivnica" },
    { label: "O nama", href: "/o-nama" },
    { label: "Kontakt", href: "/kontakt" },
  ].map((item) => (
    <Link
      key={item.href}
      href={item.href}
      onClick={closeAll}
      className="group flex items-center justify-between rounded-md border border-white/10 px-4 py-4 hover:bg-white/5 transition"
    >
      <div className="text-lg font-semibold text-white/85 group-hover:text-white transition">
        {item.label}
      </div>
      <span className="text-white/40 group-hover:text-white/80 transition">→</span>
    </Link>
  ))}
</div>


            {/* Right column */}
            <div className="lg:col-span-6 space-y-4">
              <Link
                href="/o-nama"
                onClick={closeAll}
                className="m-item group flex items-center justify-between rounded-md border border-white/10 px-4 py-4 hover:bg-white/5 transition"
              >
                <div className="text-lg font-semibold text-white/85 group-hover:text-white">O nama</div>
                <span className="text-white/40 group-hover:text-white/80 transition">→</span>
              </Link>

              <Link
                href="/kontakt"
                onClick={closeAll}
                className="m-item group flex items-center justify-between rounded-md border border-white/10 px-4 py-4 hover:bg-white/5 transition"
              >
                <div className="text-lg font-semibold text-white/85 group-hover:text-white">Kontakt</div>
                <span className="text-white/40 group-hover:text-white/80 transition">→</span>
              </Link>

              <div className="m-item mt-6 flex gap-3">
                <Link
                  href="https://booking.time-brewery.com"
                  onClick={closeAll}
                  className="flex-1 rounded-sm border border-white/20 px-4 py-3 text-center text-sm font-semibold text-white/85 hover:bg-white hover:text-black transition"
                >
                  Booking
                </Link>
                <Link
                  href="https://shop.time-brewery.com"
                  onClick={closeAll}
                  className="flex-1 rounded-sm bg-white px-4 py-3 text-center text-sm font-semibold text-black hover:opacity-90 transition"
                >
                  Shop
                </Link>
              </div>

              <div className="m-item pt-6 text-xs tracking-[0.26em] text-white/35">
                ENJOY YOUR MOMENT
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}