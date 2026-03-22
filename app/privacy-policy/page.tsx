import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import PrivacyPolicyClient from "./PrivacyPolicyClient";

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Informativa sulla privacy di Arcobaleno Senza Glutine di Casalfiumanese. Come raccogliamo e trattiamo i tuoi dati.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <PrivacyPolicyClient />
        </div>
      </main>
      <Footer />
    </div>
  );
}
