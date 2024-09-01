import FeatureSection from "@/components/FeatureSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="bg-white dark:bg-black text-black dark:text-white">
      <HeroSection />
      <FeatureSection />
      <Footer />
    </main>
  );
}
