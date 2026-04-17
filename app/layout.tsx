import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://campers-project-umber.vercel.app/"),
  title: {
    default: "TravelTrucks",
    template: "%s | TravelTrucks",
  },
  description:
    "TravelTrucks - Travel campervan catalogue. Filters, details, reviews and online booking.",
  keywords: ["campers", "camper rental", "travel trucks", "catalog", "booking"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "TravelTrucks",
    title: "TravelTrucks",
    description:
      "Choose a camper for your journey: catalog, filters, detailed page, and booking.",
  },
  twitter: {
    card: "summary_large_image",
    title: "TravelTrucks",
    description: "Campervan catalog with filters, reviews, and booking form.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${inter.className}`}>
        <TanStackProvider>
          <div className="container">
            <Header />
            {children}
          </div>
        </TanStackProvider>
      </body>
    </html>
  );
}
