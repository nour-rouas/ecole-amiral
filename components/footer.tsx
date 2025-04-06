import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-navy-blue text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6810.PNG-p2wEXMIhxqRS1RPdEILA4IwUTPIujC.png"
                alt="Logo École Amiral"
                width={60}
                height={60}
                className="h-12 w-auto bg-white rounded-full p-1"
              />
              <span className="font-montserrat font-bold text-xl">École Amiral</span>
            </Link>
            <p className="text-sm text-gray-300 max-w-xs">
              Une école préscolaire et primaire offrant une éducation de qualité dans un environnement inspiré par le
              monde maritime.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/EcoleAmiral/" className="hover:text-sky-blue transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://www.instagram.com/ecoleamiralprivee/" className="hover:text-sky-blue transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="mailto:contact@ecole-amiral.fr" className="hover:text-sky-blue transition-colors">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-montserrat font-bold text-lg mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="text-gray-300 hover:text-white transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/programmes/prescolaire" className="text-gray-300 hover:text-white transition-colors">
                  Préscolaire
                </Link>
              </li>
              <li>
                <Link href="/programmes/primaire" className="text-gray-300 hover:text-white transition-colors">
                  Primaire
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-montserrat font-bold text-lg mb-4">Ressources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/calendrier" className="text-gray-300 hover:text-white transition-colors">
                  Calendrier scolaire
                </Link>
              </li>
              <li>
                <Link href="/ressources/formulaires" className="text-gray-300 hover:text-white transition-colors">
                  Formulaires
                </Link>
              </li>
              <li>
                <Link href="/ressources/menus" className="text-gray-300 hover:text-white transition-colors">
                  Menus de la cantine
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-montserrat font-bold text-lg mb-4">Contact</h3>
            <address className="not-italic space-y-3 text-gray-300">
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-sky-blue" />
                <span>Lotissement Méditerranée N°76, Tanja Balia, Tanger, Maroc</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 flex-shrink-0 text-sky-blue" />
                <a href="tel:+212666162188" className="hover:text-white transition-colors">
                  06 66 16 21 88
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 flex-shrink-0 text-sky-blue" />
                <a href="mailto:contact@ecole-amiral.fr" className="hover:text-white transition-colors">
                  contact@ecole-amiral.fr
                </a>
              </div>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© {new Date().getFullYear()} École Amiral. Tous droits réservés.</p>
            <div className="flex gap-4">
              <Link href="/mentions-legales" className="hover:text-white transition-colors">
                Mentions légales
              </Link>
              <Link href="/politique-de-confidentialite" className="hover:text-white transition-colors">
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

