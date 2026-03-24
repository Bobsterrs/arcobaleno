import type { Metadata } from "next";
import { Geist, Merriweather } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  weight: ["300", "400", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const isProduction = process.env.VERCEL_ENV === "production";
const siteUrl = "https://www.arcobalenosenzaglutine.it";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: '%s | Arcobaleno Senza Glutine',
    default: 'Negozio Senza Glutine a Imola | Arcobaleno — Casalfiumanese',
  },
  description: "Il miglior negozio di prodotti senza glutine a Casalfiumanese. Pane fresco, dolci artigianali e i migliori marchi per celiaci a soli 10 minuti da Imola.",
  keywords: [
    "Senza Glutine",
    "Celiachia",
    "Prodotti Freschi",
    "Negozio Celiaci Casalfiumanese",
    "Pane Senza Glutine",
    "Dolci Senza Glutine",
    "Arcobaleno Senza Glutine",
    "Casalfiumanese",
    "Alimenti per Celiaci"
  ],
  robots: {
    index: isProduction,
    follow: isProduction,
    googleBot: {
      index: isProduction,
      follow: isProduction,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  openGraph: {
    siteName: 'Arcobaleno Senza Glutine',
    locale: 'it_IT',
    type: 'website',
    images: [
      {
        url: '/img/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Arcobaleno Senza Glutine — Negozio per celiaci a Casalfiumanese, vicino a Imola',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
  alternates: {
    canonical: siteUrl,
  },
  other: {
    "geo.region": "IT-BO",
    "geo.placename": "Casalfiumanese",
    "geo.position": "44.30;11.60",
    "ICBM": "44.30, 11.60"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <head>
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      </head>
      <body
        className={`${geistSans.variable} ${merriweather.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
