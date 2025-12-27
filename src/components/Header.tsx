import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "Piva", href: "/piva" },
  { label: "Pivovarna", href: "/pivovarna" },
  { label: "Pivnica", href: "/pivnica" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black">
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
              className="opacity-90 transition hover:opacity-100"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative text-sm text-white/75 transition hover:text-white"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-white/80 transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="https://booking.time-brewery.com"
              className="group relative overflow-hidden rounded-sm border border-white/20 px-4 py-2 text-sm font-semibold text-white/85 transition hover:text-black"
            >
              <span className="absolute inset-0 -z-10 translate-y-full bg-white transition-transform duration-300 group-hover:translate-y-0" />
              Booking
            </Link>
            <Link
              href="https://shop.time-brewery.com"
              className="relative overflow-hidden rounded-sm bg-white px-4 py-2 text-sm font-semibold text-black transition hover:opacity-95"
            >
              Shop
            </Link>
          </div>

          {/* Mobile hamburger (NO hooks, NO JS) */}
          <details className="md:hidden group">
            <summary
              aria-label="Menu"
              className="list-none inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border border-white/15 bg-black transition hover:bg-white/5"
            >
              {/* Burger / X */}
              <span className="relative block h-4 w-5">
                <span className="absolute top-0 h-px w-full bg-white transition-transform duration-200 group-open:translate-y-[7px] group-open:rotate-45" />
                <span className="absolute top-[7px] h-px w-full bg-white transition-opacity duration-200 group-open:opacity-0" />
                <span className="absolute bottom-0 h-px w-full bg-white transition-transform duration-200 group-open:-translate-y-[7px] group-open:-rotate-45" />
              </span>
            </summary>

            {/* Overlay */}
            <div className="fixed inset-0 z-[60] hidden bg-black/85 backdrop-blur-sm group-open:block">
              {/* Click outside hint (ne zatvara bez JS, ali UX je čist) */}
              <div className="mx-auto max-w-7xl px-4 pt-20 pb-10">
                <div className="rounded-2xl border border-white/10 bg-black/60 p-3">
                  <div className="space-y-3">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center justify-between rounded-xl border border-white/10 px-4 py-4 text-lg font-semibold text-white/85 transition hover:bg-white/5"
                      >
                        {item.label}
                        <span className="text-white/40">→</span>
                      </Link>
                    ))}
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <Link
                      href="https://booking.time-brewery.com"
                      className="rounded-sm border border-white/20 px-4 py-3 text-center text-sm font-semibold text-white/85 transition hover:bg-white hover:text-black"
                    >
                      Booking
                    </Link>
                    <Link
                      href="https://shop.time-brewery.com"
                      className="rounded-sm bg-white px-4 py-3 text-center text-sm font-semibold text-black transition hover:opacity-90"
                    >
                      Shop
                    </Link>
                  </div>

                  <p className="mt-4 text-xs text-white/40">
                    Tip: menu zatvaraš klikom na hamburger opet.
                  </p>
                </div>
              </div>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
