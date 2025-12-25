import type { Beer } from "./beersData";
import BeerHero from "./BeerHero";
import BeerInfoSection from "./BeerInfoSection";
import BeerShopSection from "./BeerShopSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

export default function BeerPage({ beer }: { beer: Beer }) {
  return (
    <main className="min-h-screen bg-black">
      <BeerHero beer={beer} />
      <BeerInfoSection beer={beer} />
      <BeerShopSection beer={beer} />
      <NewsletterSection />
      <Footer />
    </main>
  );
}
