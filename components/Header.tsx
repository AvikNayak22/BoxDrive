"use client";

import { useState } from "react";
import { SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { ThemeToggler } from "./ThemeToggler";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";
import { Separator } from "./ui/separator";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const NavLinks = () => (
    <>
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
    </>
  );

  return (
    <header className="py-6 px-4 md:px-8 lg:px-16 flex justify-between items-center border-b border-gray-200 dark:border-gray-700">
      <Link href="/" className="flex items-center space-x-2 p-1">
        <div className="text-lg sm:text-2xl font-bold text-green-600 dark:text-green-400">
          Box Drive
        </div>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-8 text-green-700 dark:text-green-400">
        <NavLinks />
      </nav>

      {/* Mobile Navigation */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild className="md:hidden">
          <Button variant="ghost" size="icon">
            <HamburgerMenuIcon className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
          <SheetHeader>
            <div className="flex justify-between items-center mr-4">
              <SheetTitle className="text-lg sm:text-2xl font-bold text-green-600 dark:text-green-400">
                Box Drive
              </SheetTitle>
              <div className="flex gap-2 items-center">
                <ThemeToggler />
                <UserButton />
                <SignedOut>
                  <SignInButton forceRedirectUrl="/dashboard" mode="modal" />
                </SignedOut>
              </div>
            </div>
          </SheetHeader>
          <Separator className="my-4" />
          <nav className="flex flex-col space-y-4 mt-8 text-green-700 dark:text-green-400">
            <NavLinks />
          </nav>
        </SheetContent>
      </Sheet>

      {/* User and Theme Controls */}
      <div className="hidden md:flex space-x-4 items-center">
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
