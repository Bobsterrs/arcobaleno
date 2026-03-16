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

export const metadata: Metadata = {
  title: "Arcobaleno Senza Glutine",
  description: "0% Glutine, 100% Gusto. Scopri il nostro universo senza glutine.",
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
        {children}
      </body>
    </html>
  );
}
