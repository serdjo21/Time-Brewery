import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterSection from "@/components/NewsletterSection";

import PivovarnaHero from "@/components/pivovarna/PivovarnaHero";
import PivovarnaPhilosophy from "@/components/pivovarna/PivovarnaPhilosophy";
import PivovarnaProcess from "@/components/pivovarna/PivovarnaProcess";
import PivovarnaQuality from "@/components/pivovarna/PivovarnaQuality";

export default function PivovarnaPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <PivovarnaHero />
      <PivovarnaPhilosophy />
      <PivovarnaProcess />
      <PivovarnaQuality />
      <NewsletterSection />
      <Footer />
    </main>
  );
}
