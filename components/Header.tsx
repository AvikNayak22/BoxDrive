import { SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { ThemeToggler } from "./ThemeToggler";

const Header = () => {
  return (
    <header className="py-6 px-4 md:px-8 lg:px-16 flex justify-between items-center border-b border-gray-200 dark:border-gray-700 ">
      <Link href="/" className="flex items-center space-x-2 p-1">
        <div className="text-lg sm:text-2xl font-bold text-green-600 dark:text-green-400">
          Box Drive
        </div>
      </Link>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          className="text-green-800 dark:text-green-400 focus:outline-none"
          // onClick={toggleMenu} // Implement toggleMenu function to handle this
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex space-x-8 text-green-700 dark:text-green-400">
        <a
          href="#features"
          className="hover:text-green-600 dark:hover:text-green-300 font-semibold"
        >
          Features
        </a>
        <a
          href="#pricing"
          className="hover:text-green-600 dark:hover:text-green-300 font-semibold"
        >
          Pricing
        </a>
        <a
          href="#contact"
          className="hover:text-green-600 dark:hover:text-green-300 font-semibold"
        >
          Contact
        </a>
      </nav>

      {/* User and Theme Controls */}
      <div className="flex space-x-4 items-center">
        <ThemeToggler />
        <UserButton />

        <SignedOut>
          <SignInButton forceRedirectUrl="/dashboard" mode="modal" />
        </SignedOut>
      </div>
    </header>
  );
};

export default Header;
