import { SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <Link href="/" className="flex items-center space-x-2">
        <div className="w-fit">
          <Image
            src="/box-drive-logo.png"
            alt="BoxDrive Logo"
            width={50}
            height={50}
          />
        </div>
        <div className="text-xl font-bold">BoxDrive</div>
      </Link>

      <div>
        {/* Theme Toggler */}

        <UserButton />

        <SignedOut>
          <SignInButton forceRedirectUrl="/dashboard" mode="modal" />
        </SignedOut>
      </div>
    </header>
  );
};

export default Header;
