import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Jaimin | Frontend Developer",
  description:
    "Frontend Developer specializing in React, Next.js, and modern web technologies. Building clean, performant, and user-focused web experiences.",
  keywords: [
    "Frontend Developer",
    "React Developer",
    "Next.js",
    "Web Developer",
    "JavaScript",
    "Portfolio",
  ],
  authors: [{ name: "Jaimin" }],
  openGraph: {
    title: "Jaimin | Frontend Developer",
    description:
      "Frontend Developer specializing in React, Next.js, and modern web technologies.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaimin | Frontend Developer",
    description:
      "Frontend Developer specializing in React, Next.js, and modern web technologies.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
