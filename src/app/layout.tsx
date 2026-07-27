import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const title = "Mahakumbh — The Biggest Business Festive";
const description =
  "Mahakumbh: The Biggest Business Festive. Where India's most ambitious founders, investors and visionaries converge in unparalleled luxury.";

export const metadata: Metadata = {
  title,
  description,
  authors: [{ name: "Mahakumbh" }],
  openGraph: {
    title,
    description,
    type: "website",
    images: ["/assets/hero-poster.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/assets/hero-poster.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
