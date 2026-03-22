import { Metadata } from "next"
import HomeClient from "./HomeClient"
import { LocalBusinessJsonLd } from '@/components/seo/LocalBusinessJsonLd'

export const metadata: Metadata = {
  title: 'Negozio Senza Glutine Imola | Arcobaleno — Casalfiumanese',
  description: 'Negozio specializzato senza glutine a Casalfiumanese, a 10 minuti da Imola. Pane fresco, prodotti mutuabili, buono ASL. Accettiamo Tessera Sanitaria.',
  alternates: { canonical: 'https://www.arcobalenosenzaglutine.it' },
}

export default function Home() {
  return (
    <>
      <LocalBusinessJsonLd />
      <HomeClient />
    </>
  )
}
