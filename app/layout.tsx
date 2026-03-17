import type { Metadata } from "next";
import { Geist, Merriweather } from "next/font/google";
import "./globals.css";
import { LocalBusinessSchema } from "@/components/LocalBusinessSchema";

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
  title: "Arcobaleno Senza Glutine Imola | Prodotti per Celiaci e Gusto",
  description: "Il miglior negozio di prodotti senza glutine a Imola. Pane fresco, dolci artigianali e una vasta selezione delle migliori marche per celiaci. Vieni a trovarci a Casalfiumanese, vicino a Imola.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body
        className={`${geistSans.variable} ${merriweather.variable} antialiased`}
      >
        <LocalBusinessSchema />
        {children}
      </body>
    </html>
  );
}
