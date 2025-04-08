import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, BookOpen, Users, Brain, Globe, Calculator, Lightbulb } from "lucide-react"
import WaveDivider from "@/components/wave-divider"
import { ProgramLevel } from "@/components/programs/program-level"
import { LearningDomainsGrid } from "@/components/programs/learning-domain"

const programLevels = [
  {
    title: "CP (Cours Préparatoire)",
    ageRange: "6-7 ans",
    description: "Le CP est une année fondamentale où les élèves acquièrent les bases de la lecture, de l'écriture et des mathématiques. Notre approche progressive et structurée permet à chaque enfant d'avancer à son rythme.",
    keyPoints: [
      { text: "Apprentissage systématique de la lecture" },
      { text: "Écriture et production de textes simples" },
      { text: "Numération et opérations de base" }
    ],
    specialProjects: [
      { text: "Création d'un abécédaire marin" },
      { text: "Correspondance avec une autre école" }
    ]
  },
  {
    title: "CE1-CE2 (Cours Élémentaire)",
    ageRange: "7-9 ans",
    description: "Durant ces années, les élèves consolident leurs acquis et développent leur autonomie. Ils approfondissent leurs compétences en lecture, écriture et mathématiques tout en élargissant leurs connaissances dans d'autres domaines.",
    keyPoints: [
      { text: "Lecture fluide et compréhension de textes" },
      { text: "Production d'écrits variés" },
      { text: "Calcul mental et résolution de problèmes" },
      { text: "Découverte du monde (histoire, géographie, sciences)" }
    ],
    specialProjects: [
      { text: "Journal de classe trimestriel" },
      { text: "Projet scientifique sur l'eau et les océans" },
      { text: "Initiation à la programmation" }
    ]
  },
  {
    title: "CM1-CM2 (Cours Moyen)",
    ageRange: "9-11 ans",
    description: "Les dernières années du primaire préparent les élèves à l'entrée au collège. Ils développent leur esprit critique, leur autonomie et approfondissent leurs connaissances dans toutes les matières.",
    keyPoints: [
      { text: "Maîtrise de la langue française écrite et orale" },
      { text: "Mathématiques avancées et raisonnement logique" },
      { text: "Histoire, géographie et éducation civique" },
      { text: "Sciences expérimentales et technologie" }
    ],
    specialProjects: [
      { text: "Classe de découverte (voyage scolaire)" },
      { text: "Projet entrepreneurial" },
      { text: "Préparation à l'entrée au collège" }
    ]
  }
]

const excellenceDomains = [
  {
    icon: BookOpen,
    title: "Maîtrise des fondamentaux",
    skills: [
      "Méthodes d'apprentissage éprouvées",
      "Suivi personnalisé des progrès"
    ]
  },
  {
    icon: Globe,
    title: "Langues étrangères",
    skills: [
      "3 heures d'anglais par semaine",
      "Activités culturelles en anglais"
    ]
  },
  {
    icon: Calculator,
    title: "Sciences et technologies",
    skills: [
      "Laboratoire scientifique adapté",
      "Initiation au codage et à la robotique"
    ]
  },
  {
    icon: Brain,
    title: "Développement personnel",
    skills: [
      "Ateliers de gestion des émotions",
      "Projets collaboratifs"
    ]
  },
  {
    icon: Users,
    title: "Citoyenneté et valeurs",
    skills: [
      "Conseil des élèves",
      "Projets solidaires et écologiques"
    ]
  },
  {
    icon: Lightbulb,
    title: "Arts et culture",
    skills: [
      "Ateliers artistiques hebdomadaires",
      "Sorties culturelles régulières"
    ]
  }
]

export default function PrimairePage() {
  return (
    <div>
      <section className="bg-gradient-to-b from-sky-blue to-white py-12 md:py-16 lg:py-24 relative">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">Programme Amiral Primaire</h1>
            <p className="text-navy-blue/80">Une éducation complète et stimulante pour les enfants de 6 à 11 ans.</p>
          </div>
        </div>
        <WaveDivider />
      </section>

      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-navy-blue mb-4">
                Une éducation d&apos;excellence pour tous
              </h2>
              <p className="text-navy-blue/80 mb-4">
                Notre programme primaire offre un enseignement rigoureux et complet qui répond aux exigences du
                programme national tout en allant au-delà. Nous préparons nos élèves non seulement à réussir
                académiquement, mais aussi à devenir des citoyens responsables, créatifs et engagés.
              </p>
              <p className="text-navy-blue/80">
                À l&apos;École Amiral, nous croyons que chaque enfant a un potentiel unique. Notre approche pédagogique
                équilibrée combine l&apos;acquisition de connaissances fondamentales, le développement de compétences
                transversales et l&apos;épanouissement personnel dans un environnement inspiré par le monde maritime.
              </p>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/programs/primaire-program.webp"
                alt="Salle de classe primaire avec élèves travaillant"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-navy-blue mb-8 text-center">Notre programme par niveau</h2>
          <div className="space-y-8 mb-16">
            {programLevels.map((level, index) => (
              <ProgramLevel key={index} {...level} />
            ))}
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-navy-blue mb-8 text-center">
            Nos domaines d&apos;excellence
          </h2>
          <LearningDomainsGrid title="" domains={excellenceDomains} />

          <div className="bg-gray-50 rounded-lg p-8 mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-navy-blue mb-6 text-center">
              Notre approche pédagogique
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-navy-blue mb-3">Enseignement différencié</h3>
                <p className="text-navy-blue/80 mb-4">
                  Nous reconnaissons que chaque enfant apprend différemment. Notre approche pédagogique s&apos;adapte
                  aux besoins individuels, permettant à chaque élève d&apos;avancer à son rythme tout en étant stimulé
                  et soutenu.
                </p>
                <p className="text-navy-blue/80">
                  Des groupes de niveaux flexibles sont mis en place pour certaines matières, permettant un
                  accompagnement ciblé et efficace.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-navy-blue mb-3">Pédagogie de projet</h3>
                <p className="text-navy-blue/80 mb-4">
                  Nous croyons en l&apos;apprentissage par l&apos;action. Les projets interdisciplinaires permettent aux
                  élèves de donner du sens à leurs apprentissages, de développer leur créativité et leur autonomie.
                </p>
                <p className="text-navy-blue/80">
                  Chaque trimestre, les classes travaillent sur un projet thématique qui intègre plusieurs disciplines
                  et aboutit à une réalisation concrète.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://img.freepik.com/free-photo/kids-painting-together-medium-shot_23-2149632405.jpg"
                alt="Enfants participant à une activité scientifique"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-navy-blue mb-4">Activités extrascolaires</h2>
              <p className="text-navy-blue/80 mb-4">
                En complément du programme scolaire, nous proposons une variété d&apos;activités extrascolaires pour
                permettre aux élèves de développer leurs talents et leurs passions.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-bright-red flex-shrink-0 mt-0.5" />
                  <span>Clubs sportifs (natation, voile, sports collectifs)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-bright-red flex-shrink-0 mt-0.5" />
                  <span>Ateliers artistiques (théâtre, arts plastiques, musique)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-bright-red flex-shrink-0 mt-0.5" />
                  <span>Club de sciences et robotique</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-bright-red flex-shrink-0 mt-0.5" />
                  <span>Cours de langues supplémentaires</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-bright-red flex-shrink-0 mt-0.5" />
                  <span>Aide aux devoirs et soutien scolaire</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-navy-blue text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Préparez l&apos;avenir de votre enfant</h2>
            <p className="text-lg mb-8">
              À l&apos;École Amiral, nous préparons les élèves non seulement pour le collège, mais pour la vie.
              Rejoignez notre communauté éducative et offrez à votre enfant une éducation d&apos;excellence.
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

