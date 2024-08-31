import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Hero Section */}
      <section className="p-10 bg-gradient-to-tr from-green-600 dark:from-green-800 to-green-500 dark:to-green-700 text-white">
        <div className="max-w-4xl mx-auto flex flex-col space-y-8">
          <h1 className="text-3xl sm:text-5xl font-bold drop-shadow-sm leading-snug">
            Welcome to BoxDrive.
          </h1>
          <p className="text-xl sm:text-2xl">
            From files, images, videos, and more – Safely backup everything
            that’s important to you.
          </p>
          <p className="text-lg sm:text-xl">
            Your photos, videos, and documents are so much more than just data.
            They’re your link to the past, the collective memory of your family,
            and the backbone of your business. At BoxDrive, we never forget how
            important your files are. We’ll be your online hard drive and keep
            them backed up in the cloud.
          </p>
          <Link href="/dashboard">
            <Button className="flex items-center justify-center space-x-2 bg-white dark:bg-black text-black dark:text-white shadow-md hover:bg-gray-200 dark:hover:bg-gray-800 transition-all duration-200">
              <span>Try it for free!</span>
              <ArrowRightIcon className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Why Choose BoxDrive Section */}
      <section className="px-6 py-10 sm:py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Why Choose BoxDrive?
          </h2>
          <p className="mt-5 text-lg sm:text-xl">
            Secure, reliable, and easy-to-use cloud storage. Keep your files
            safe and accessible anytime, anywhere.
          </p>
          <Link href="/dashboard">
            <Button className="mt-8 sm:mt-10" variant="outline">
              Learn More
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
