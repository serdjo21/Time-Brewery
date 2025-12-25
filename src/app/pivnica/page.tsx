import Header from "@/components/Header";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import PivnicaHero from "@/components/pivnica/PivnicaHero";
import PivnicaAtmosphereSection from "@/components/pivnica/PivnicaAtmosphereSection";
import PivnicaFoodSection from "@/components/pivnica/PivnicaFoodSection";
import PivnicaLocationSection from "@/components/pivnica/PivnicaLocationSection";
import PivnicaOffers from "@/components/pivnica/PivnicaOffers";
import PivnicaDetails from "@/components/pivnica/PivnicaDetails";

export default function PivnicaPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <PivnicaHero />
      <PivnicaAtmosphereSection />
      <PivnicaFoodSection />
      <PivnicaOffers />
      <PivnicaDetails />
      <PivnicaLocationSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
}
