import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <div className="p-10 flex flex-col bg-gradient-to-tr from-green-600 dark:from-green-800 to-green-500  dark:to-green-700 text-balance text-white space-y-5">
        <h1 className="text-3xl sm:text-5xl font-bold drop-shadow-sm">
          Welcome to BoxDrive. <br />
          <br />
          From files, images, videos and more – Safely backup everything that’s
          important to you.
        </h1>

        <p>
          Your photos, videos, and documents are so much more than just data.
          They’re your link to the past, the collective memory of your family,
          and the backbone of your business. At BoxDrive, we never forget how
          important your files are. We’ll be your online hard drive and keep
          them backed up in the cloud.
        </p>

        <Link
          href="/dashboard"
          className="flex items-center text-md cursor-pointer bg-white dark:bg-black  text-black dark:text-white p-4 w-fit shadow-md"
        >
          Try it for free!
          <ArrowRightIcon className="ml-5" />
        </Link>
      </div>

      <div className="px-10 py-6 flex flex-col items-center mt-7 sm:mt-[43px] space-y-5">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-center">
            Why Choose BoxDrive?
          </h2>
          <p className="mt-5 text-lg  text-center">
            Secure, reliable, and easy-to-use cloud storage. Keep your files
            safe and accessible anytime, anywhere.
          </p>
        </div>
        <Link href="/dashboard">
          <Button className="mt-5 sm:mt-0" variant="outline">
            Learn More
          </Button>
        </Link>
      </div>
    </main>
  );
}
