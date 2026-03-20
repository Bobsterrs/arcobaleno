import type { Metadata } from "next";
import { Geist, Merriweather } from "next/font/google";
import "./globals.css";
import { LocalBusinessSchema } from "@/components/LocalBusinessSchema";
import { SectionSchemas } from "@/components/SectionSchemas";

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
    default: "Arcobaleno Senza Glutine | Negozio Prodotti per Celiaci Imola",
    template: "%s | Arcobaleno Senza Glutine"
  },
  description: "Il miglior negozio di prodotti senza glutine a Casalfiumanese, vicino a Imola. Pane fresco, dolci artigianali, prodotti per celiaci e consulenza esperta. Vieni a trovarci!",
  keywords: [
    "Senza Glutine",
    "Celiachia",
    "Prodotti Freschi",
    "Negozio Celiaci Imola",
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
    title: "Arcobaleno Senza Glutine | 100% Gusto, 0% Glutine",
    description: "Scopri il piacere di mangiare senza glutine. Prodotti freschi, artigianali e le migliori marche per celiaci a due passi da Imola.",
    url: siteUrl,
    siteName: "Arcobaleno Senza Glutine",
    locale: "it_IT",
    type: "website",
    images: [
      {
        url: "/img/locale.jpeg",
        width: 1200,
        height: 630,
        alt: "Arcobaleno Senza Glutine - Negozio Specializzato Senza Glutine"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Arcobaleno Senza Glutine | Negozio Prodotti per Celiaci Imola",
    description: "Prodotti freschi e artigianali senza glutine. Ti aspettiamo a Casalfiumanese, Imola.",
    images: ["/img/locale.jpeg"]
  },
  alternates: {
    canonical: "/"
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
        <LocalBusinessSchema />
        <SectionSchemas />
        {children}
      </body>
    </html>
  );
}
