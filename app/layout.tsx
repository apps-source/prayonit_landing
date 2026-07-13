import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from "@next/third-parties/google";
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
  title: "Prayonit — A Prayerful Moment Is One Tap Away",
  description:
    "Choose how you feel and take a moment with KJV Scripture, encouragement, and prayer. Prayonit helps you slow down, reflect, and pray.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#fbf6ee] text-[#1f2a44]">
        {children}
        <Analytics />
      </body>
      <GoogleAnalytics gaId="G-9QC1R53Q8N" />
    </html>
  );
}
