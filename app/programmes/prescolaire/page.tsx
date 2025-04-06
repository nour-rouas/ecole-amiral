import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, Clock, Users, BookOpen, Palette, Music, Heart } from "lucide-react"
import WaveDivider from "@/components/wave-divider"

export default function PrescolairePage() {
  return (
    <div>
      <section className="bg-gradient-to-b from-sky-blue to-white py-12 md:py-16 lg:py-24 relative">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">Programme Préscolaire</h1>
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
                src="/placeholder.svg?height=400&width=600"
                alt="Enfants en classe préscolaire"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-navy-blue mb-6 text-center">
              Notre journée préscolaire
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Clock className="h-6 w-6 text-bright-red mr-2" />
                  <h3 className="font-bold text-navy-blue">8h30 - 9h15</h3>
                </div>
                <p className="text-navy-blue/70">Accueil et activités libres</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Clock className="h-6 w-6 text-bright-red mr-2" />
                  <h3 className="font-bold text-navy-blue">9h15 - 10h30</h3>
                </div>
                <p className="text-navy-blue/70">Activités d&apos;apprentissage dirigées</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Clock className="h-6 w-6 text-bright-red mr-2" />
                  <h3 className="font-bold text-navy-blue">10h30 - 11h45</h3>
                </div>
                <p className="text-navy-blue/70">Jeux extérieurs et activités physiques</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Clock className="h-6 w-6 text-bright-red mr-2" />
                  <h3 className="font-bold text-navy-blue">11h45 - 13h00</h3>
                </div>
                <p className="text-navy-blue/70">Déjeuner et temps calme</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Clock className="h-6 w-6 text-bright-red mr-2" />
                  <h3 className="font-bold text-navy-blue">13h00 - 14h30</h3>
                </div>
                <p className="text-navy-blue/70">Sieste pour les petits / Activités calmes pour les grands</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Clock className="h-6 w-6 text-bright-red mr-2" />
                  <h3 className="font-bold text-navy-blue">14h30 - 15h45</h3>
                </div>
                <p className="text-navy-blue/70">Ateliers thématiques et projets</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Clock className="h-6 w-6 text-bright-red mr-2" />
                  <h3 className="font-bold text-navy-blue">15h45 - 16h15</h3>
                </div>
                <p className="text-navy-blue/70">Goûter et histoire</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Clock className="h-6 w-6 text-bright-red mr-2" />
                  <h3 className="font-bold text-navy-blue">16h15 - 16h30</h3>
                </div>
                <p className="text-navy-blue/70">Préparation au départ</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-navy-blue mb-8 text-center">
            Domaines d&apos;apprentissage
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-water-blue">
              <div className="bg-sky-blue/20 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-navy-blue" />
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-3">Langage et communication</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-bright-red flex-shrink-0 mt-0.5" />
                  <span>Développement du vocabulaire</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-bright-red flex-shrink-0 mt-0.5" />
                  <span>Expression orale et écoute</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-bright-red flex-shrink-0 mt-0.5" />
                  <span>Pré-lecture et familiarisation avec les livres</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-bright-red flex-shrink-0 mt-0.5" />
                  <span>Comptines et chansons</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-water-blue">
              <div className="bg-sky-blue/20 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-navy-blue" />
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-3">Développement social et émotionnel</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-bright-red flex-shrink-0 mt-0.5" />
                  <span>Confiance en soi et autonomie</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-bright-red flex-shrink-0 mt-0.5" />
                  <span>Coopération et partage</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-bright-red flex-shrink-0 mt-0.5" />
                  <span>Gestion des émotions</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-bright-red flex-shrink-0 mt-0.5" />
                  <span>Respect des règles et des autres</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-water-blue">
              <div className="bg-sky-blue/20 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Palette className="h-6 w-6 text-navy-blue" />
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-3">Créativité et expression artistique</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-bright-red flex-shrink-0 mt-0.5" />
                  <span>Arts plastiques et bricolage</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-bright-red flex-shrink-0 mt-0.5" />
                  <span>Musique et mouvement</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-bright-red flex-shrink-0 mt-0.5" />
                  <span>Jeu symbolique et dramatique</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-bright-red flex-shrink-0 mt-0.5" />
                  <span>Expression corporelle</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-water-blue">
              <div className="bg-sky-blue/20 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Music className="h-6 w-6 text-navy-blue" />
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-3">Éveil mathématique et logique</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-bright-red flex-shrink-0 mt-0.5" />
                  <span>Reconnaissance des nombres et comptage</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-bright-red flex-shrink-0 mt-0.5" />
                  <span>Formes et couleurs</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-bright-red flex-shrink-0 mt-0.5" />
                  <span>Tri et classification</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-bright-red flex-shrink-0 mt-0.5" />
                  <span>Résolution de problèmes simples</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-water-blue">
              <div className="bg-sky-blue/20 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-navy-blue" />
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-3">Développement physique et moteur</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-bright-red flex-shrink-0 mt-0.5" />
                  <span>Motricité globale (courir, sauter, grimper)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-bright-red flex-shrink-0 mt-0.5" />
                  <span>Motricité fine (dessiner, découper, manipuler)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-bright-red flex-shrink-0 mt-0.5" />
                  <span>Coordination œil-main</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-bright-red flex-shrink-0 mt-0.5" />
                  <span>Conscience corporelle et spatiale</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-water-blue">
              <div className="bg-sky-blue/20 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-navy-blue" />
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-3">Découverte du monde</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-bright-red flex-shrink-0 mt-0.5" />
                  <span>Exploration de la nature et des sciences</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-bright-red flex-shrink-0 mt-0.5" />
                  <span>Sensibilisation à l&apos;environnement</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-bright-red flex-shrink-0 mt-0.5" />
                  <span>Découverte des cultures et traditions</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-bright-red flex-shrink-0 mt-0.5" />
                  <span>Initiation aux nouvelles technologies</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Enseignants avec des enfants"
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
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/installations">Découvrir nos installations</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

