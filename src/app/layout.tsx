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
      <div
        className="fixed inset-x-0 top-24 -z-10 transform-gpu overflow-hidden blur-3xl"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 aspect-[600/600] w-[600px] -translate-x-1/2   bg-[#5E27B8] opacity-40   "
          style={{
            clipPath: "circle(50% at 50% 50%)",
          }}
        />
      </div>{" "}
      <body className={sansation.className}>{children}</body>
      <Footer />
    </html>
  );
}
