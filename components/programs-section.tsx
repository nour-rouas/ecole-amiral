import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ProgramsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">Nos programmes</h2>
          <p className="text-navy-blue/80">
            Des programmes éducatifs adaptés à chaque âge pour accompagner au mieux le développement de votre enfant.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link
            href="/programmes/prescolaire"
            className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative h-48 md:h-64">
              <Image
                src="/images/programs/prescolaire-program.webp"
                alt="Programme préscolaire"
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-navy-blue mb-2">Programme Préscolaire</h3>
              <p className="text-navy-blue/70 mb-4">
                Une approche ludique et stimulante pour les enfants de 3 à 5 ans, favorisant l&apos;éveil et la
                socialisation.
              </p>
              <span className="text-bright-red font-medium inline-flex items-center gap-1">
                En savoir plus <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </Link>

          <Link
            href="/programmes/primaire"
            className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative h-48 md:h-64">
              <Image
                src="/images/programs/primaire-program.webp"
                alt="Programme primaire"
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-navy-blue mb-2">Programme Primaire</h3>
              <p className="text-navy-blue/70 mb-4">
                Un enseignement complet et structuré pour les 6-11 ans, alliant excellence académique et épanouissement
                personnel.
              </p>
              <span className="text-bright-red font-medium inline-flex items-center gap-1">
                En savoir plus <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

