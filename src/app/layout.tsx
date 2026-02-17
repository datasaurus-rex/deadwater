import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Sans_Condensed } from "next/font/google";
import "./globals.css";
import Script from "next/script";
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
const siteName = "Deadwater.ai";
const logoUrl = "/favicon/favicon.jpg";
const sameAs = ["https://linkedin.com/in/jackvirag"];

function absoluteUrl(pathOrUrl: string, baseUrl: string) {
  if (!pathOrUrl) return pathOrUrl;
  if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://")) {
    return pathOrUrl;
  }
  return `${baseUrl.replace(/\/$/, "")}/${pathOrUrl.replace(/^\//, "")}`;
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Deadwater.ai",
    template: "%s — Deadwater.ai"
  },
  description: "The AI-native content operating system is here.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { url: "/favicon/favicon.ico", sizes: "any", type: "image/x-icon" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-48x48.png", sizes: "48x48", type: "image/png" }
    ],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/favicon/favicon-180x180.png", sizes: "180x180", type: "image/png" }]
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Deadwater.ai",
    description: "The AI-native content operating system is here.",
    url: siteUrl,
    siteName,
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
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-F8BN85VTHY" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-F8BN85VTHY');`}
        </Script>
        <Script id="jsonld-site" type="application/ld+json">
          {JSON.stringify(
            {
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": `${siteUrl}#organization`,
                  name: siteName,
                  url: siteUrl,
                  logo: logoUrl
                    ? {
                        "@type": "ImageObject",
                        "@id": `${siteUrl}#logo`,
                        url: absoluteUrl(logoUrl, siteUrl)
                      }
                    : undefined,
                  sameAs: sameAs?.length ? sameAs : undefined
                },
                {
                  "@type": "WebSite",
                  "@id": `${siteUrl}#website`,
                  url: siteUrl,
                  name: siteName,
                  publisher: { "@id": `${siteUrl}#organization` }
                }
              ].filter(Boolean)
            },
            null,
            0
          )}
        </Script>
      </body>
    </html>
  );
}
