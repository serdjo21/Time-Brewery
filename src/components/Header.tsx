"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Header() {
  /* -------------------------------------------------
   * HOOKS – uvijek u istom redoslijedu
   * ------------------------------------------------- */

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const panelRef = useRef<HTMLDivElement | null>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  /* -------------------------------------------------
   * EFFECTS
   * ------------------------------------------------- */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!panelRef.current) return;

    const tl = gsap.timeline({ paused: true });
    tl.set(panelRef.current, { display: "block" });
    tl.fromTo(panelRef.current, { opacity: 0 }, { opacity: 1, duration: 0.2 });
    tl.fromTo(
      ".m-panel",
      { y: -12, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.35, ease: "power3.out" },
      "<"
    );
    tl.fromTo(
      ".m-item",
      { y: 14, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.35, stagger: 0.06 },
      "-=0.15"
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

    if (mobileOpen) {
      tl.play(0);
    } else {
      tl.reverse();
      tl.eventCallback("onReverseComplete", () => {
        if (panelRef.current)
          gsap.set(panelRef.current, { display: "none" });
      });
    }
  }, [mobileOpen]);

  /* -------------------------------------------------
   * GUARD – TEK POSLIJE SVIH HOOK-OVA
   * ------------------------------------------------- */

  const navItems = [
    { label: "Piva", href: "/piva" },
    { label: "Pivovarna", href: "/pivovarna" },
    { label: "Pivnica", href: "/pivnica" },
    { label: "Kontakt", href: "/kontakt" },
  ];

  /* -------------------------------------------------
   * RENDER
   * ------------------------------------------------- */
  return (
    <header
      className={[
        "fixed top-0 z-50 w-full bg-black transition-colors duration-300",
        scrolled ? "border-b border-white/10" : "border-b border-transparent",
      ].join(" ")}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
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
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative text-sm text-white/75 hover:text-white transition"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-white/80 transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          {/* CTAs + burger */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex gap-3">
              <Link
                href="https://booking.time-brewery.com"
                className="relative overflow-hidden rounded-sm border border-white/20 px-4 py-2 text-sm font-semibold text-white/80 hover:text-black transition"
              >
                <span className="absolute inset-0 -z-10 translate-y-full bg-white transition-transform duration-300 group-hover:translate-y-0" />
                Booking
              </Link>
              <Link
                href="https://shop.time-brewery.com"
                className="relative overflow-hidden rounded-sm bg-white px-4 py-2 text-sm font-semibold text-black hover:opacity-95 transition"
              >
                Shop
              </Link>
            </div>

            <button
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/15 bg-black hover:bg-white/5 transition"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Menu"
              aria-expanded={mobileOpen}
            >
              <span className="relative block h-4 w-5">
                <span className={`absolute top-0 h-px w-full bg-white transition ${mobileOpen ? "translate-y-[7px] rotate-45" : ""}`} />
                <span className={`absolute top-[7px] h-px w-full bg-white transition ${mobileOpen ? "opacity-0" : ""}`} />
                <span className={`absolute bottom-0 h-px w-full bg-white transition ${mobileOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile panel */}
      <div ref={panelRef} className="fixed inset-0 z-[60] bg-black/85 backdrop-blur-sm">
        <div className="m-panel mx-auto max-w-7xl px-4 pt-20 pb-10">
          <div className="space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="m-item flex items-center justify-between rounded-md border border-white/10 px-4 py-4 text-lg font-semibold text-white/85 hover:bg-white/5"
              >
                {item.label}
                <span className="text-white/40">→</span>
              </Link>
            ))}
          </div>

          <div className="m-item mt-8 flex gap-3">
            <Link
              href="https://booking.time-brewery.com"
              className="flex-1 rounded-sm border border-white/20 px-4 py-3 text-center text-sm font-semibold text-white/85 hover:bg-white hover:text-black transition"
            >
              Booking
            </Link>
            <Link
              href="https://shop.time-brewery.com"
              className="flex-1 rounded-sm bg-white px-4 py-3 text-center text-sm font-semibold text-black hover:opacity-90 transition"
            >
              Shop
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
