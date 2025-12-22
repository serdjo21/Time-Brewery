import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutBrewerySection from "@/components/AboutBrewerySection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-coal">
      <Header />
      <Hero />
      <AboutBrewerySection
        imageSrc="/hero/beers.png"
      />
      
      <Footer />
    </main>
  );
}