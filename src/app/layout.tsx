import type { Metadata } from "next";
import { Bitter, Public_Sans } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://kathomeservices.com"),
  title: "KAT Home Services, LLC | Home Repair & Remodeling in Bardstown, KY",
  description:
    "Fully insured home repair and remodeling based in Bardstown, KY, serving Nelson, Bullitt, and Spencer Counties and up toward Louisville. Handyman work, remodels, demolition and cleanup. Call or text Tony (502) 674-8851 or Alex (502) 910-5976 for a free estimate.",
  openGraph: {
    title: "KAT Home Services, LLC",
    description:
      "Fully insured home repair and remodeling based in Bardstown, KY, serving the surrounding area up toward Louisville. Free estimates. Call or text.",
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
      className={`${bitter.variable} ${publicSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-navy-800 font-sans">
        {children}
      </body>
    </html>
  );
}
