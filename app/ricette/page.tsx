import { Metadata } from "next"
import RicetteClient from "./RicetteClient"

export const metadata: Metadata = {
  title: 'Ricette Senza Glutine Semplici e Gustose | Arcobaleno',
  description: 'Oltre 30 ricette senza glutine semplici e collaudate: antipasti, primi, dolci e molto altro. Pensate da chi vive la celiachia ogni giorno.',
  alternates: { canonical: 'https://www.arcobalenosenzaglutine.it/ricette' },
}

export default function Ricette() {
  return <RicetteClient />
}
