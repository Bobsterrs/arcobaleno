"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Instagram, Facebook, ArrowRight } from "lucide-react"
import { Button } from "./ui/Button"

// WhatsApp SVG Icon
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} width="1em" height="1em">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
)

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])


  const navItems = [
    { label: "Chi Siamo", href: "/chi-siamo" },
    { label: "Il Metodo", href: "/metodo-arcobaleno" },
    { label: "Prodotti", href: "/prodotti-senza-glutine" },
    { label: "Ricette", href: "/ricette" },
    { label: "FAQ", href: "/faq" },
    { label: "Dove Trovarci", href: "/dove-siamo" }
  ];

  const linkClass = "px-3 py-1.5 rounded-full text-foreground hover:text-emerald-600 hover:bg-emerald-50 font-medium transition-all cursor-pointer text-center"
  const mobileLinkClass = "w-full text-foreground text-lg py-4 border-b border-gray-50 text-center font-medium hover:text-emerald-600 hover:bg-emerald-50/50 transition-all flex justify-center items-center rounded-2xl"

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-4 left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:w-[95%] max-w-6xl z-[100] transition-all duration-300 rounded-full border ${
        isScrolled 
          ? "bg-white/90 backdrop-blur-md shadow-lg border-gray-200 py-3 px-6" 
          : "bg-white/60 backdrop-blur-md border-white/20 py-4 px-6 shadow-sm"
      } ${isMobileMenuOpen ? "overflow-visible" : "overflow-hidden"}`}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <img 
            src="/logo.png" 
            alt="Arcobaleno Senza Glutine" 
            className="h-10 md:h-12 w-auto object-contain mix-blend-multiply drop-shadow-sm"
          />
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center justify-center space-x-2 flex-1 px-2">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={linkClass}>
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right Actions: Social Pills & CTA */}
        <div className="hidden lg:flex items-center space-x-4 shrink-0">
          <div className="flex space-x-2">
            <a href="https://www.instagram.com/arcobalenosenzaglutine/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center hover:bg-emerald-100 transition-colors shadow-sm" title="Instagram">
              <Instagram size={18} />
            </a>
            <a href="https://www.facebook.com/arcobalenosenzaglutine/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center hover:bg-emerald-100 transition-colors shadow-sm" title="Facebook">
              <Facebook size={18} />
            </a>
            <a href="https://wa.me/393884043388" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center hover:bg-emerald-100 transition-colors shadow-sm" title="WhatsApp">
              <WhatsAppIcon className="text-lg" />
            </a>
          </div>
          
          <Link href="/dove-siamo">
            <Button 
              variant="secondary" 
              className="rounded-full shadow-md"
            >
              Contattaci
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-xl rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100 max-h-[80vh] flex flex-col"
          >
            <div className="overflow-y-auto py-6 px-8 space-y-2 scrollbar-hide">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between p-4 rounded-2xl bg-gray-50 text-foreground font-medium hover:bg-emerald-50 hover:text-emerald-600 transition-all group"
                  >
                    {item.label}
                    <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                ))}
              
              <div className="pt-6">
                <div className="flex space-x-4 mb-6">
                  <a href="https://www.instagram.com/arcobalenosenzaglutine/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center hover:bg-emerald-100 transition-colors shadow-sm">
                    <Instagram size={24} />
                  </a>
                  <a href="https://www.facebook.com/arcobalenosenzaglutine/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center hover:bg-emerald-100 transition-colors shadow-sm">
                    <Facebook size={24} />
                  </a>
                  <a href="https://wa.me/393884043388" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center hover:bg-emerald-100 transition-colors shadow-sm">
                    <WhatsAppIcon className="text-2xl" />
                  </a>
                </div>

                <Link href="/dove-siamo" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="secondary" className="w-full py-7 rounded-2xl shadow-lg text-lg">
                    Contattaci ora
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
