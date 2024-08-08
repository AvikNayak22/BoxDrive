import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Header from "@/components/Header";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BoxDrive",
  description:
    "Store your files in the cloud for free. Start using BoxDrive today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider afterSignOutUrl="/">
      <html lang="en">
        <body className={manrope.className}>
          <Header />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
