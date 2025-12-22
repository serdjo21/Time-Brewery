import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-coal border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <Image src="/brand/logo-mark.png" alt="Time Brewery" width={44} height={44} className="rounded-xl" />
              <div>
                <div className="text-sm font-semibold tracking-[0.22em] text-foam/90">TIME</div>
                <div className="text-xs tracking-[0.28em] text-foam/60">BREWERY</div>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-foam/60">
              Quality craft beers and brewery. 
            </p>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <div className="text-xs tracking-[0.18em] text-foam/70">Sajt</div>
              <ul className="mt-4 space-y-2 text-sm">
                <li><Link className="text-foam/60 hover:text-foam" href="/piva">Piva</Link></li>
                <li><Link className="text-foam/60 hover:text-foam" href="/taproom">Taproom</Link></li>
                <li><Link className="text-foam/60 hover:text-foam" href="/meni">Meni</Link></li>
              </ul>
            </div>

            <div>
              <div className="text-xs tracking-[0.18em] text-foam/70">Servisi</div>
              <ul className="mt-4 space-y-2 text-sm">
                <li><a className="text-foam/60 hover:text-foam" href="https://shop.time-brewery.com">Shop</a></li>
                <li><a className="text-foam/60 hover:text-foam" href="https://booking.time-brewery.com">Booking</a></li>
                <li><Link className="text-foam/60 hover:text-foam" href="/kontakt">Kontakt</Link></li>
              </ul>
            </div>

            <div>
              <div className="text-xs tracking-[0.18em] text-foam/70">Legal</div>
              <ul className="mt-4 space-y-2 text-sm">
                <li><Link className="text-foam/60 hover:text-foam" href="/privacy">Privacy</Link></li>
                <li><Link className="text-foam/60 hover:text-foam" href="/terms">Terms</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-xs text-foam/45">
            © {new Date().getFullYear()} Time Brewery. Sva prava zadržana.
          </div>
          <div className="text-xs text-foam/45">
           
          </div>
        </div>
      </div>
    </footer>
  );
}