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

export const metadata: Metadata = {
  metadataBase: new URL("https://www.arcobalenosenzaglutine.it"),
  title: {
    default: "Arcobaleno Senza Glutine | Negozio Celiaci Imola e Casalfiumanese",
    template: "%s | Arcobaleno Senza Glutine"
  },
  description: "Il miglior negozio di prodotti senza glutine vicino a Imola. Pane fresco, dolci artigianali, croissant e un'ampia selezione delle migliori marche per celiaci. Consulenza esperta per neodiagnosticati. Vieni a trovarci a Casalfiumanese (BO).",
  keywords: [
    "senza glutine",
    "celiaci",
    "prodotti senza glutine Imola",
    "negozio senza glutine Imola",
    "negozio celiaci Imola",
    "gluten free Imola",
    "Arcobaleno Senza Glutine",
    "Casalfiumanese",
    "pane senza glutine",
    "dolci senza glutine",
    "buono celiaci Emilia Romagna",
    "neodiagnosticati celiachia",
    "prodotti celiaci Bologna",
    "negozio senza glutine Bologna",
    "tessera sanitaria celiaci"
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  openGraph: {
    title: "Arcobaleno Senza Glutine | Negozio Celiaci Imola e Casalfiumanese",
    description: "0% Glutine, 100% Gusto. Il miglior negozio di prodotti senza glutine vicino a Imola. Pane fresco, dolci artigianali e consulenza esperta per celiaci.",
    url: "https://www.arcobalenosenzaglutine.it",
    siteName: "Arcobaleno Senza Glutine",
    locale: "it_IT",
    type: "website",
    images: [
      {
        url: "/img/locale.jpeg",
        width: 1200,
        height: 630,
        alt: "Arcobaleno Senza Glutine - Negozio Prodotti per Celiaci"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Arcobaleno Senza Glutine | Negozio Celiaci Imola",
    description: "0% Glutine, 100% Gusto. Pane fresco, dolci artigianali e consulenza esperta per celiaci a Casalfiumanese, vicino Imola.",
    images: ["/img/locale.jpeg"]
  },
  alternates: {
    canonical: "https://www.arcobalenosenzaglutine.it"
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
