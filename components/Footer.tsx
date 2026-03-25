import Link from "next/link"
import { MapPin, Phone, Instagram, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-emerald-900 text-emerald-50 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <img 
                src="/logo.png" 
                alt="Arcobaleno Senza Glutine" 
                className="h-12 w-auto object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="text-emerald-100/80 mb-6 max-w-sm font-light">
              0% Glutine, 100% Gusto. A Casalfiumanese, a soli 10 minuti da Imola.
            </p>
            <div className="text-xs text-emerald-100/60 mb-6 font-light space-y-1">
              <p className="font-medium text-emerald-50">L'Arcobaleno Senza Glutine di Compagnone Miriam</p>
              <p>P.I.: 04248731202</p>
              <p>C.F.: CMPMRM92P66I158B</p>
            </div>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/arcobalenosenzaglutine/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-emerald-800 flex items-center justify-center hover:bg-emerald-700 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/arcobalenosenzaglutine/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-emerald-800 flex items-center justify-center hover:bg-emerald-700 transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-white">Contatti</h4>
            <ul className="space-y-4 font-light text-emerald-100/90 text-sm">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 text-amber-500 shrink-0 mt-1" />
                <span>Via Montanara 13/g,<br/>40020 Casalfiumanese (BO)</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 text-amber-500 shrink-0" />
                <a href="tel:+393884043388" className="hover:text-amber-400 transition-colors">388 4043388</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-white">Orari</h4>
            <ul className="space-y-4 font-light text-emerald-100/90 text-sm">
              <li>Lun - Sab: 09:30 - 13:00, 15:30 - 19:30</li>
              <li className="text-amber-400 font-medium italic">Martedì: Chiuso</li>
              <li>Domenica: Chiuso</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-emerald-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-emerald-200/60 font-light">
          <p>&copy; {new Date().getFullYear()} Arcobaleno Senza Glutine. Tutti i diritti riservati.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/chi-siamo" className="hover:text-white transition-colors">Chi Siamo</Link>
            <Link href="/metodo-arcobaleno" className="hover:text-white transition-colors">Il Metodo</Link>
            <Link href="/prodotti-senza-glutine" className="hover:text-white transition-colors">Prodotti</Link>
            <Link href="/ricette" className="hover:text-white transition-colors">Ricette</Link>
            <Link href="/faq" className="hover:text-white transition-colors">FAQ</Link>
            <Link href="/dove-trovarci" className="hover:text-white transition-colors">Dove Siamo</Link>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
