import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookOpen, Heart, Music, Palette, Users } from "lucide-react"
import WaveDivider from "@/components/wave-divider"
import { ScheduleSection } from "@/components/programs/schedule-section"
import { LearningDomainsGrid } from "@/components/programs/learning-domain"

const dailySchedule = [
  { time: "8h30 - 9h15", activity: "Accueil et activités libres" },
  { time: "9h15 - 10h30", activity: "Activités d'apprentissage dirigées" },
  { time: "10h30 - 11h45", activity: "Jeux extérieurs et activités physiques" },
  { time: "11h45 - 13h00", activity: "Déjeuner et temps calme" },
  { time: "13h00 - 14h30", activity: "Sieste pour les petits / Activités calmes pour les grands" },
  { time: "14h30 - 15h45", activity: "Ateliers thématiques et projets" },
  { time: "15h45 - 16h15", activity: "Goûter et histoire" },
  { time: "16h15 - 16h30", activity: "Préparation au départ" },
]

const learningDomains = [
  {
    icon: BookOpen,
    title: "Langage et communication",
    skills: [
      "Développement du vocabulaire",
      "Expression orale et écoute",
      "Pré-lecture et familiarisation avec les livres",
      "Comptines et chansons",
    ],
  },
  {
    icon: Users,
    title: "Développement social et émotionnel",
    skills: [
      "Confiance en soi et autonomie",
      "Coopération et partage",
      "Gestion des émotions",
      "Respect des règles et des autres",
    ],
  },
  {
    icon: Palette,
    title: "Créativité et expression artistique",
    skills: [
      "Arts plastiques et bricolage",
      "Musique et mouvement",
      "Jeu symbolique et dramatique",
      "Expression corporelle",
    ],
  },
  {
    icon: Music,
    title: "Éveil mathématique et logique",
    skills: [
      "Reconnaissance des nombres et comptage",
      "Formes et couleurs",
      "Tri et classification",
      "Résolution de problèmes simples",
    ],
  },
  {
    icon: Heart,
    title: "Développement physique et moteur",
    skills: [
      "Motricité globale (courir, sauter, grimper)",
      "Motricité fine (dessiner, découper, manipuler)",
      "Coordination œil-main",
      "Conscience corporelle et spatiale",
    ],
  },
  {
    icon: BookOpen,
    title: "Découverte du monde",
    skills: [
      "Exploration de la nature et des sciences",
      "Sensibilisation à l'environnement",
      "Découverte des cultures et traditions",
      "Initiation aux nouvelles technologies",
    ],
  },
]

export default function PrescolairePage() {
  return (
    <div>
      <section className="bg-gradient-to-b from-sky-blue to-white py-12 md:py-16 lg:py-24 relative">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">Programme Amiral Préscolaire</h1>
            <p className="text-navy-blue/80">
              Une fondation solide pour l&apos;apprentissage et le développement des enfants de 3 à 5 ans.
            </p>
          </div>
        </div>
        <WaveDivider />
      </section>

      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-navy-blue mb-4">
                Un environnement d&apos;apprentissage bienveillant
              </h2>
              <p className="text-navy-blue/80 mb-4">
                Notre programme préscolaire est conçu pour offrir aux jeunes enfants un environnement stimulant et
                sécurisant où ils peuvent explorer, découvrir et développer leur potentiel. Nous croyons que les
                premières années d&apos;éducation sont cruciales pour établir une base solide pour l&apos;apprentissage
                tout au long de la vie.
              </p>
              <p className="text-navy-blue/80">
                À l&apos;École Amiral, nous utilisons une approche pédagogique équilibrée qui combine jeu structuré,
                exploration libre et activités dirigées par l&apos;enseignant. Notre thème nautique inspire notre
                environnement d&apos;apprentissage, créant un cadre imaginatif où les enfants peuvent naviguer vers la
                découverte.
              </p>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/programs/prescolaire-program.webp"
                alt="Préscolaire programmes Amiral"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <ScheduleSection title="Notre journée préscolaire" schedule={dailySchedule} />
          <LearningDomainsGrid title="Domaines d'apprentissage" domains={learningDomains} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://img.freepik.com/free-photo/medium-shot-people-studying-together_23-2149204779.jpg"
                alt="Apprentissage par le jeu en maternelle"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl md:text-3xl font-bold text-navy-blue mb-4">Notre équipe pédagogique</h2>
              <p className="text-navy-blue/80 mb-4">
                Notre équipe préscolaire est composée d&apos;éducateurs qualifiés et passionnés, spécialisés dans
                l&apos;éducation de la petite enfance. Avec un ratio enseignant-élèves favorable (1 pour 8 en petite
                section, 1 pour 10 en moyenne et grande section), nous assurons une attention personnalisée à chaque
                enfant.
              </p>
              <p className="text-navy-blue/80 mb-4">
                Nos enseignants créent un environnement chaleureux et stimulant où les enfants se sentent en sécurité
                pour explorer et apprendre. Ils observent attentivement le développement de chaque enfant et adaptent
                leurs approches pédagogiques en conséquence.
              </p>
              <p className="text-navy-blue/80">
                Des réunions régulières avec les parents permettent d&apos;assurer une communication fluide et un suivi
                personnalisé du parcours de chaque enfant.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-navy-blue text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Prêt à embarquer avec nous ?</h2>
            <p className="text-lg mb-8">
              Offrez à votre enfant un début d&apos;éducation inspirant dans un environnement bienveillant et stimulant.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-bright-red hover:bg-bright-red/90">
                <Link href="/contact">Nous contacter</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white text-navy-blue hover:bg-white/10">
                <Link href="/installations">Découvrir nos installations</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

