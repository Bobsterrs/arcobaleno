import { Metadata } from "next"
import HomeClient from "./HomeClient"
import { LocalBusinessJsonLd } from '@/components/seo/LocalBusinessJsonLd'

export const metadata: Metadata = {
  title: 'Negozio Senza Glutine Casalfiumanese | Arcobaleno — 10 min da Imola',
  description: 'Negozio specializzato senza glutine a Casalfiumanese, a soli 10 minuti da Imola. Pane fresco, prodotti mutuabili e consulenza per celiaci. Accettiamo Tessera Sanitaria.',
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
