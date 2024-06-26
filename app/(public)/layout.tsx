import type { Metadata } from "next";
import localfont from "next/font/local";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

const houschkaPro = localfont({
  src: [
    {
      path: "/fonts/HouschkaPro-Thin.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "/fonts/HouschkaPro-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "/fonts/HouschkaPro-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "/fonts/HouschkaPro-DemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "/fonts/HouschkaPro-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "/fonts/HouschkaPro-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
});

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zomar Interijeri",
  description: "Zomar interijeri",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hr">
      <body className={roboto.className}>
        <Navbar />
        <div className="mainLayout">{children}</div>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
