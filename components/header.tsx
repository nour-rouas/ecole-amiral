"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6810.PNG-p2wEXMIhxqRS1RPdEILA4IwUTPIujC.png"
            alt="Logo École Amiral"
            width={60}
            height={60}
            className="h-12 w-auto"
          />
          <span className="font-montserrat font-bold text-navy-blue text-xl hidden sm:inline-block">École Amiral</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          <Link 
            href="/" 
            className={cn(
              "px-3 py-2 text-navy-blue hover:text-water-blue transition-colors relative",
              pathname === "/" && "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-bright-red/80"
            )}
          >
            Accueil
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className={cn(
                  "px-3 py-2 text-navy-blue hover:text-water-blue transition-colors flex items-center gap-1 relative",
                  pathname.startsWith('/a-propos') && "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-bright-red/80"
                )}
              >
                À propos <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <Link href="/a-propos" className="w-full">
                  Notre histoire
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/a-propos#valeurs" className="w-full">
                  Nos valeurs
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/a-propos#approche" className="w-full">
                  Notre approche
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className={cn(
                  "px-3 py-2 text-navy-blue hover:text-water-blue transition-colors flex items-center gap-1 relative",
                  pathname.startsWith('/programmes') && "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-bright-red/80"
                )}
              >
                Programmes <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <Link href="/programmes/prescolaire" className="w-full">
                  Préscolaire (3-5 ans)
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/programmes/primaire" className="w-full">
                  Primaire (6-11 ans)
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link 
            href="/installations" 
            className={cn(
              "px-3 py-2 text-navy-blue hover:text-water-blue transition-colors relative",
              pathname === "/installations" && "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-bright-red/80"
            )}
          >
            Installations
          </Link>

          <Link 
            href="/contact" 
            className={cn(
              "px-3 py-2 text-navy-blue hover:text-water-blue transition-colors relative",
              pathname === "/contact" && "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-bright-red/80"
            )}
          >
            Contact
          </Link>
        </nav>

        <Button variant="default" className="hidden lg:flex bg-bright-red hover:bg-bright-red/90 text-white">
          Demande d'inscription
        </Button>

        {/* Mobile Navigation Toggle */}
        <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Menu</span>
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 px-6 z-50">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className={cn(
                "text-navy-blue hover:text-water-blue transition-colors relative",
                pathname === "/" && "text-bright-red"
              )}
              onClick={() => setIsOpen(false)}
            >
              Accueil
            </Link>
            <details className="group">
              <summary className="flex cursor-pointer items-center justify-between text-navy-blue hover:text-water-blue transition-colors">
                À propos
                <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
              </summary>
              <div className="mt-2 ml-4 flex flex-col space-y-2">
                <Link
                  href="/a-propos"
                  className="text-navy-blue/80 hover:text-water-blue transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Notre histoire
                </Link>
                <Link
                  href="/a-propos#valeurs"
                  className="text-navy-blue/80 hover:text-water-blue transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Nos valeurs
                </Link>
                <Link
                  href="/a-propos#approche"
                  className="text-navy-blue/80 hover:text-water-blue transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Notre approche
                </Link>
              </div>
            </details>
            <details className="group">
              <summary className="flex cursor-pointer items-center justify-between text-navy-blue hover:text-water-blue transition-colors">
                Programmes
                <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
              </summary>
              <div className="mt-2 ml-4 flex flex-col space-y-2">
                <Link
                  href="/programmes/prescolaire"
                  className="text-navy-blue/80 hover:text-water-blue transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Préscolaire (3-5 ans)
                </Link>
                <Link
                  href="/programmes/primaire"
                  className="text-navy-blue/80 hover:text-water-blue transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Primaire (6-11 ans)
                </Link>
              </div>
            </details>
            <Link
              href="/installations"
              className="text-navy-blue hover:text-water-blue transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Installations
            </Link>
            <Link
              href="/contact"
              className="text-navy-blue hover:text-water-blue transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Button
              variant="default"
              className="w-full bg-bright-red hover:bg-bright-red/90 text-white mt-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

