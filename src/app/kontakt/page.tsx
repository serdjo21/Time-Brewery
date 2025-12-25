import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterSection from "@/components/NewsletterSection";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      {/* HERO */}
      <section className="relative border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <p className="text-[11px] tracking-[0.28em] text-white/60">
            CONTACT
          </p>

          <h1 className="mt-4 text-5xl md:text-6xl font-semibold tracking-[-0.04em]">
            Get in touch.
          </h1>

          <p className="mt-6 max-w-prose text-white/70 text-lg">
            For general inquiries, bookings or collaboration proposals,
            feel free to reach out. We’ll get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="grid gap-14 lg:grid-cols-12 items-start">
            {/* LEFT – INFO */}
            <div className="lg:col-span-5 space-y-10">
              <div>
                <div className="text-xs tracking-[0.26em] text-white/50">
                  ADDRESS
                </div>
                <p className="mt-3 text-white/85 text-lg">
                  Dobrava 47<br />
                  2360 Radlje ob Dravi<br />
                  Slovenia
                </p>
              </div>

              <div>
                <div className="text-xs tracking-[0.26em] text-white/50">
                  CONTACT
                </div>
                <p className="mt-3 text-white/85 text-lg">
                  <a
                    href="mailto:info@time-brewery.com"
                    className="hover:opacity-80 transition"
                  >
                    info@time-brewery.com
                  </a>
                  <br />
                  <a
                    href="tel:+38623207370"
                    className="hover:opacity-80 transition"
                  >
                    +386 2 320 73 70
                  </a>
                </p>
              </div>

              <div>
                <div className="text-xs tracking-[0.26em] text-white/50">
                  HOURS
                </div>
                <p className="mt-3 text-white/70">
                  Taproom opening hours may vary.<br />
                  Please check booking availability or contact us directly.
                </p>
              </div>

              <div className="flex gap-4 pt-2">
                <a
                  href="https://booking.time-brewery.com"
                  className="rounded-2xl border border-white/20 px-6 py-3 text-sm font-semibold text-white/85 hover:bg-white hover:text-black transition"
                >
                  Booking
                </a>
                <a
                  href="https://shop.time-brewery.com"
                  className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black hover:opacity-90 transition"
                >
                  Shop
                </a>
              </div>
            </div>

            {/* RIGHT – MAP */}
            <div className="lg:col-span-7">
              <div className="relative overflow-hidden border border-white/10 bg-black/40">
                <div className="relative aspect-[16/10] w-full">
                  <iframe
                    src="https://www.google.com/maps?q=Dobrava%2047%2C%202360%20Radlje%20ob%20Dravi&output=embed"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 h-full w-full grayscale-[0.2] contrast-[1.05]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
              </div>

              <div className="mt-4 text-right">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Dobrava+47+2360+Radlje+ob+Dravi"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-white/60 hover:text-white transition"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NewsletterSection />
      <Footer />
    </main>
  );
}
