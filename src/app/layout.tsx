import type { Metadata } from "next";
import { Bitter, JetBrains_Mono, Public_Sans } from "next/font/google";
import "./globals.css";
import MobileLoader from "@/components/MobileLoader";

// next/font downloads these at build time and self-hosts them,
// exposing each as a CSS variable we wire into Tailwind in globals.css.
// Bitter's slab serifs echo the chunky lettering in the KAT logo.
const bitter = Bitter({
  variable: "--font-bitter",
  subsets: ["latin"],
});

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
});

// Mono is the "spec sheet" voice: eyebrows, tickers, bracket CTAs, indices.
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kathomeservices.com"),
  title: "KAT Home Services, LLC — Home Repair & Remodeling in Louisville, KY",
  description:
    "Fully insured home repair and remodeling in Louisville, KY. Bathrooms, kitchens, flooring, tile, trim, and more. Call or text Alex (502) 910-5976 or Tony (502) 674-5581 for a free estimate.",
  openGraph: {
    title: "KAT Home Services, LLC",
    description:
      "Fully insured home repair and remodeling in Louisville, KY. Free estimates — call or text.",
    url: "https://kathomeservices.com",
    siteName: "KAT Home Services, LLC",
    images: [{ url: "/images/og.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bitter.variable} ${publicSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-navy-800 font-sans">
        <MobileLoader />
        {children}
      </body>
    </html>
  );
}
