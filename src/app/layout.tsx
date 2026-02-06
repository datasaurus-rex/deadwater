import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Sans_Condensed } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600"]
});

const serif = IBM_Plex_Sans_Condensed({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600", "700"]
});

const siteUrl = "https://deadwater.ai";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Deadwater.ai",
    template: "%s — Deadwater.ai"
  },
  description: "The AI-native content operating system is here.",
  icons: {
    icon: "/favicon/favicon.jpg"
  },
  openGraph: {
    title: "Deadwater.ai",
    description: "The AI-native content operating system is here.",
    url: siteUrl,
    siteName: "Deadwater.ai",
    type: "website",
    images: [
      {
        url: "/og/og.png",
        width: 1200,
        height: 630,
        alt: "Deadwater.ai — Content OS for an AI-first world"
      }
    ]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body className="min-h-screen bg-ink-950 font-sans text-white antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
