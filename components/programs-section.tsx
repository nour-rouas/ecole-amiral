import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function ProgramsSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">Nos programmes éducatifs</h2>
          <p className="text-navy-blue/80">
            Découvrez nos programmes adaptés à chaque tranche d&apos;âge, conçus pour favoriser l&apos;épanouissement et
            la réussite de chaque enfant.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Programme Préscolaire */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="relative h-64">
              <Image
                src="/images/programs/prescolaire-program.webp"
                alt="Programme préscolaire"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-bold text-navy-blue mb-3">Préscolaire (3-5 ans)</h3>
              <p className="text-navy-blue/70 mb-6">
                Notre programme préscolaire offre un environnement stimulant où les enfants développent leur curiosité
                naturelle et acquièrent les bases essentielles pour leur future scolarité.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-bright-red flex-shrink-0 mt-0.5" />
                  <span>Éveil linguistique et mathématique</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-bright-red flex-shrink-0 mt-0.5" />
                  <span>Développement moteur et sensoriel</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-bright-red flex-shrink-0 mt-0.5" />
                  <span>Socialisation et autonomie</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-bright-red flex-shrink-0 mt-0.5" />
                  <span>Activités créatives et artistiques</span>
                </li>
              </ul>
              <Button asChild className="w-full bg-water-blue hover:bg-water-blue/90">
                <Link href="/programmes/prescolaire">En savoir plus</Link>
              </Button>
            </div>
          </div>

          {/* Programme Primaire */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="relative h-64">
              <Image
                src="/images/programs/primaire-program.webp"
                alt="Programme primaire"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-bold text-navy-blue mb-3">Primaire (6-11 ans)</h3>
              <p className="text-navy-blue/70 mb-6">
                Notre programme primaire offre un enseignement de qualité qui combine rigueur académique et pédagogie
                innovante pour préparer les élèves aux défis du monde de demain.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-bright-red flex-shrink-0 mt-0.5" />
                  <span>Maîtrise des fondamentaux (français, mathématiques)</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-bright-red flex-shrink-0 mt-0.5" />
                  <span>Découverte des sciences et de l&apos;histoire-géographie</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-bright-red flex-shrink-0 mt-0.5" />
                  <span>Apprentissage des langues étrangères</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-bright-red flex-shrink-0 mt-0.5" />
                  <span>Éducation artistique, sportive et numérique</span>
                </li>
              </ul>
              <Button asChild className="w-full bg-water-blue hover:bg-water-blue/90">
                <Link href="/programmes/primaire">En savoir plus</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

