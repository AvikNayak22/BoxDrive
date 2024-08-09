import { SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggler } from "./ThemeToggler";

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <Link href="/" className="flex items-center space-x-2 p-1">
        <div className="w-fit bg-green-500 dark:bg-green-700">
          <Image
            src="/box-drive-logo-2.png"
            alt="BoxDrive Logo"
            width={50}
            height={50}
          />
        </div>
        <div className="text-xl font-bold">BoxDrive</div>
      </Link>

      <div className="px-5 flex space-x-2 items-center ">
        {/* Theme Toggler */}
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
