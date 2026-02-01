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
  title: "Code Comment Museum | Famous Comments from Open Source",
  description: "A curated gallery of the funniest, weirdest, and most insightful comments found in famous open source codebases.",
  openGraph: {
    title: "Code Comment Museum",
    description: "A curated gallery of the funniest, weirdest, and most insightful comments found in famous open source codebases.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Code Comment Museum",
    description: "Famous comments from open source projects",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
