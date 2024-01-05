import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });

const sansation = localFont({
  display: "swap",
  variable: "--font-sansation",
  src: [
    {
      path: "../../public/sansation.light.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/sansation.regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/sansation.bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});
export const metadata: Metadata = {
  title: "OLUWABUSUYI Korede Joshua",
  description:
    "If your product aspires to grow, distinguish itself and dominate the market...let me be the catalyst.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Header />
      <body className={sansation.className}>{children}</body>
      <Footer />
    </html>
  );
}
