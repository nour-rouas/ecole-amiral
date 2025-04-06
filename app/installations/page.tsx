import Image from "next/image"
import Gallery from "@/components/gallery"
import WaveDivider from "@/components/wave-divider"

// Simulated gallery images
const galleryImages = [
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Salle de classe maternelle",
    width: 600,
    height: 400,
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Salle de classe primaire",
    width: 600,
    height: 400,
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Bibliothèque",
    width: 600,
    height: 400,
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Cantine",
    width: 600,
    height: 400,
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Salle informatique",
    width: 600,
    height: 400,
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Cour de récréation",
    width: 600,
    height: 400,
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Salle d'arts plastiques",
    width: 600,
    height: 400,
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Gymnase",
    width: 600,
    height: 400,
  },
]

export default function InstallationsPage() {
  return (
    <div>
      <section className="bg-gradient-to-b from-sky-blue to-white py-12 md:py-16 lg:py-24 relative">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">Nos installations</h1>
            <p className="text-navy-blue/80">
              Découvrez les espaces modernes et adaptés où vos enfants apprennent et s&apos;épanouissent chaque jour.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-navy-blue mb-4">
                Des espaces d&apos;apprentissage modernes
              </h2>
              <p className="text-navy-blue/80 mb-4">
                Nos salles de classe sont conçues pour favoriser l&apos;apprentissage dans un environnement lumineux,
                spacieux et stimulant. Chaque espace est équipé de matériel pédagogique de qualité et adapté à
                l&apos;âge des élèves.
              </p>
              <p className="text-navy-blue/80">
                Les classes sont organisées par niveau, avec un mobilier ergonomique et des zones dédiées aux
                différentes activités : lecture, travail en groupe, expériences scientifiques, arts plastiques...
              </p>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image src="/placeholder.svg?height=400&width=600" alt="Salle de classe" fill className="object-cover" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
            <div className="order-2 md:order-1 relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Cour de récréation"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl md:text-3xl font-bold text-navy-blue mb-4">Des espaces extérieurs sécurisés</h2>
              <p className="text-navy-blue/80 mb-4">
                Notre école dispose d&apos;une grande cour de récréation aménagée avec des jeux adaptés à tous les âges.
                Les enfants peuvent s&apos;y dépenser et développer leur motricité dans un environnement sécurisé.
              </p>
              <p className="text-navy-blue/80">
                Un jardin pédagogique permet également aux élèves de découvrir la nature, d&apos;observer la croissance
                des plantes et de participer à des activités de jardinage tout au long de l&apos;année.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-navy-blue mb-4">Des équipements complets</h2>
              <p className="text-navy-blue/80 mb-4">
                L&apos;École Amiral dispose d&apos;équipements modernes pour offrir une éducation complète :
              </p>
              <ul className="space-y-2 text-navy-blue/80 mb-4">
                <li>• Une bibliothèque riche en ouvrages adaptés à tous les âges</li>
                <li>• Une salle informatique équipée d&apos;ordinateurs et de tablettes</li>
                <li>• Un réfectoire spacieux proposant des repas équilibrés</li>
                <li>• Une salle polyvalente pour les activités artistiques et culturelles</li>
                <li>• Un gymnase pour les activités sportives</li>
              </ul>
              <p className="text-navy-blue/80">Tous nos espaces sont accessibles aux personnes à mobilité réduite.</p>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image src="/placeholder.svg?height=400&width=600" alt="Bibliothèque" fill className="object-cover" />
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-navy-blue mb-8 text-center">Galerie photos</h2>
          <Gallery images={galleryImages} />
        </div>
      </section>
    </div>
  )
}

