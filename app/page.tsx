import FeatureSection from "@/components/FeatureSection";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white dark:bg-black text-black dark:text-white">
      {/* Hero Section */}
      <section className="text-center py-24 px-4 md:px-8 lg:px-16 bg-green-600 text-white dark:bg-green-800 dark:text-white">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Welcome to Box Drive.
        </h1>
        <p className="text-lg mb-8">
          From files, images, videos, and more – Safely backup everything that’s
          important to you.
        </p>
        <Link href="/dashboard">
          <button className="bg-white text-black px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-200 dark:bg-black dark:text-white dark:hover:bg-[#080808]">
            Get Started
          </button>
        </Link>
      </section>
      <FeatureSection />
      <Footer />
    </main>
  );
}
