import Image from "next/image"
import Gallery from "@/components/gallery"
import WaveDivider from "@/components/wave-divider"

// Simulated gallery images
const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1000",
    alt: "Salle de classe maternelle - Des enfants participent à des activités créatives",
    width: 1000,
    height: 667,
  },
  {
    src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1000",
    alt: "Salle de classe primaire - Espace d'apprentissage moderne",
    width: 1000,
    height: 667,
  },
  {
    src: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1000",
    alt: "Bibliothèque - Espace de lecture confortable",
    width: 1000,
    height: 667,
  },
  {
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000",
    alt: "Cantine - Espace de restauration lumineux",
    width: 1000,
    height: 667,
  },
  {
    src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=1000",
    alt: "Salle informatique - Équipement moderne",
    width: 1000,
    height: 667,
  },
  {
    src: "https://images.unsplash.com/photo-1598301257982-0cf014dabbcd?q=80&w=1000",
    alt: "Aire de jeux - Espace récréatif sécurisé",
    width: 1000,
    height: 667,
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
              <Image 
                src="https://images.unsplash.com/photo-1448932252197-d19750584e56?q=80&w=1000" 
                alt="Salle de classe moderne avec tables disposées en groupes" 
                fill 
                className="object-cover" 
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
            <div className="order-2 md:order-1 relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1543616991-75a2d126d7da?q=80&w=1000"
                alt="Aire de jeux colorée et sécurisée"
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
              <Image 
                src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1000" 
                alt="Bibliothèque moderne avec espaces de lecture" 
                fill 
                className="object-cover" 
              />
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-navy-blue mb-8 text-center">Galerie photos</h2>
          <Gallery images={galleryImages} />
        </div>
      </section>
    </div>
  )
}

