import Header from "@/components/Header";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import BeersIndexGrid from "@/components/beers/BeersIndexGrid";

export default function BeersPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <BeersIndexGrid />
      <NewsletterSection />
      <Footer />
    </main>
  );
}
