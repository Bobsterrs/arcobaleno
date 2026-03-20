import { Metadata } from "next"
import HomeClient from "./HomeClient"

export const metadata: Metadata = {
  title: 'Arcobaleno Senza Glutine — Casalfiumanese',
  description: 'Negozio specializzato senza glutine a Casalfiumanese, a 10 minuti da Imola. Selezioniamo solo prodotti che amiamo davvero. Pane fresco, farine e buono celiachia.',
  alternates: { canonical: 'https://www.arcobalenosenzaglutine.it' },
}

export default function Home() {
  return <HomeClient />
}
