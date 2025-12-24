import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutBrewerySection from "@/components/AboutBrewerySection";
import TaproomSection from "@/components/TaproomSection";
import ShopTeaserSection from "@/components/ShopTeaserSrction";
import LocationsSection from "@/components/LocationsSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-coal">
      <Header />
      <Hero />
      <AboutBrewerySection imageSrc="/hero/beers.png"/>
      <TaproomSection />
      <ShopTeaserSection />
      <LocationsSection />
      <NewsletterSection />
      <Footer />
    </main> 
  );
}