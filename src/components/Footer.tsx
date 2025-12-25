import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <Image
                src="/brand/logo-mark.png"
                alt="Time Brewery"
                width={44}
                height={44}
                className="rounded-xl"
              />
              <div>
                <div className="text-sm font-semibold tracking-[0.22em] text-white/90">
                  TIME
                </div>
                <div className="text-xs tracking-[0.28em] text-white/55">
                  BREWERY
                </div>
              </div>
            </div>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60">
              A modern craft brewery focused on quality, consistency and
              drinkability. Brewed with precision, served with character.
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-7 grid grid-cols-2 gap-8 sm:grid-cols-3">
            {/* Site */}
            <div>
              <div className="text-xs tracking-[0.18em] text-white/60">
                SITE
              </div>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <Link className="text-white/60 hover:text-white transition" href="/piva">
                    Beers
                  </Link>
                </li>
                <li>
                  <Link className="text-white/60 hover:text-white transition" href="/pivovarna">
                    Brewery
                  </Link>
                </li>
                <li>
                  <Link className="text-white/60 hover:text-white transition" href="/pivnica">
                    Taproom
                  </Link>
                </li>
                <li>
                  <Link className="text-white/60 hover:text-white transition" href="/kontakt">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <div className="text-xs tracking-[0.18em] text-white/60">
                SERVICES
              </div>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a
                    className="text-white/60 hover:text-white transition"
                    href="https://shop.time-brewery.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Shop
                  </a>
                </li>
                <li>
                  <a
                    className="text-white/60 hover:text-white transition"
                    href="https://booking.time-brewery.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Booking
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <div className="text-xs tracking-[0.18em] text-white/60">
                LEGAL
              </div>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <Link className="text-white/60 hover:text-white transition" href="/privacy">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link className="text-white/60 hover:text-white transition" href="/terms">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-xs text-white/45">
            © {new Date().getFullYear()} Time Brewery. All rights reserved.
          </div>

          <div className="text-xs tracking-[0.26em] text-white/35">
            ENJOY YOUR MOMENT
          </div>
        </div>
      </div>
    </footer>
  );
}
