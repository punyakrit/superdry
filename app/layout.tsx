import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";
// import { NextAuthProvider } from "./providers";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "SuperDry - Your Ultimate Laundry Solution",
  description:
    "SuperDry offers hassle-free laundry services with top-notch quality and convenience. Experience the difference and say goodbye to laundry stress!",
  keywords:
    "laundry, laundry services, laundry solutions, laundry stress, convenience, quality, SuperDry, laundry delivery, dry cleaning, laundry pickup, laundry care, eco-friendly laundry, laundry app, laundry near me, laundry subscription, professional laundry, laundry experts, laundry expertise, laundry management, laundry maintenance, laundry technology, laundry innovation, laundry efficiency, laundry reliability",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>{"SuperDry - Your Ultimate Laundry Solution"}</title>
        <meta
          name="description"
          content={
            "SuperDry offers hassle-free laundry services with top-notch quality and convenience. Experience the difference and say goodbye to laundry stress!"
          }
        />
        <meta
          name="keywords"
          content={
            "laundry, laundry services, laundry solutions, laundry stress, convenience, quality, SuperDry, laundry delivery, dry cleaning, laundry pickup, laundry care, eco-friendly laundry, laundry app, laundry near me, laundry subscription, professional laundry, laundry experts, laundry expertise, laundry management, laundry maintenance, laundry technology, laundry innovation, laundry efficiency, laundry reliability"
          }
        />
        {/* Additional meta tags for SEO can be added here */}
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {/* <NextAuthProvider> */}
          {children}
          {/* </NextAuthProvider> */}
      </body>
    </html>
  );
}
