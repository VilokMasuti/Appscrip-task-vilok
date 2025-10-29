import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "mettā muse - Premium Fashion & Accessories",
  description:
    "Discover our curated collection of premium fashion products, accessories, and lifestyle items. Shop customizable products with worldwide shipping.",
  keywords: "fashion, accessories, premium products, customizable fashion, online shopping",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  icons:"/Logo.png"
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
              {/* Preconnect to external resources for performance */}
        <link rel="preconnect" href="https://fakestoreapi.com" />
        {children}
      </body>
    </html>
  );
}
