import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ReadTracker from "../components/ReadTracker";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MobileNav } from "@/components/MobileNav";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Summer diary | Home",
  description: "A diary to record your summer experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <ReadTracker />
        <Navbar />
        {children}
        <Footer />
        <MobileNav />
      </body>
    </html>
  );
}
