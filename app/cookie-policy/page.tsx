import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import CookiePolicyClient from "./CookiePolicyClient";

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Informativa sui cookie di Arcobaleno Senza Glutine. Scopri come utilizziamo i cookie sul nostro sito.',
  alternates: { canonical: 'https://www.arcobalenosenzaglutine.it/cookie-policy' },
}

export default function CookiePolicy() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <CookiePolicyClient />
        </div>
      </main>
      <Footer />
    </div>
  );
}
