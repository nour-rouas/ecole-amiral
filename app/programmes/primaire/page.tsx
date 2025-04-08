import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, BookOpen, Users, Brain, Globe, Calculator, Lightbulb } from "lucide-react"
import WaveDivider from "@/components/wave-divider"

export default function PrimairePage() {
  return (
    <div>
      <section className="bg-gradient-to-b from-sky-blue to-white py-12 md:py-16 lg:py-24 relative">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">Programme Primaire</h1>
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
                src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=1000"
                alt="Salle de classe primaire avec élèves travaillant"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-navy-blue mb-8 text-center">Notre programme par niveau</h2>

          <div className="space-y-8 mb-16">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-navy-blue text-white p-4">
                <h3 className="text-xl font-bold">CP (Cours Préparatoire) - 6-7 ans</h3>
              </div>
              <div className="p-6">
                <p className="text-navy-blue/80 mb-4">
                  Le CP est une année fondamentale où les élèves acquièrent les bases de la lecture, de l&apos;écriture
                  et des mathématiques. Notre approche progressive et structurée permet à chaque enfant d&apos;avancer à
                  son rythme.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold text-navy-blue mb-2">Points clés :</h4>
                    <ul className="space-y-1">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-bright-red flex-shrink-0 mt-0.5" />
                        <span>Apprentissage systématique de la lecture</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-bright-red flex-shrink-0 mt-0.5" />
                        <span>Écriture et production de textes simples</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-bright-red flex-shrink-0 mt-0.5" />
                        <span>Numération et opérations de base</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-blue mb-2">Projets spéciaux :</h4>
                    <ul className="space-y-1">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-bright-red flex-shrink-0 mt-0.5" />
                        <span>Création d&apos;un abécédaire marin</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-bright-red flex-shrink-0 mt-0.5" />
                        <span>Correspondance avec une autre école</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-navy-blue text-white p-4">
                <h3 className="text-xl font-bold">CE1-CE2 (Cours Élémentaire) - 7-9 ans</h3>
              </div>
              <div className="p-6">
                <p className="text-navy-blue/80 mb-4">
                  Durant ces années, les élèves consolident leurs acquis et développent leur autonomie. Ils
                  approfondissent leurs compétences en lecture, écriture et mathématiques tout en élargissant leurs
                  connaissances dans d&apos;autres domaines.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold text-navy-blue mb-2">Points clés :</h4>
                    <ul className="space-y-1">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-bright-red flex-shrink-0 mt-0.5" />
                        <span>Lecture fluide et compréhension de textes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-bright-red flex-shrink-0 mt-0.5" />
                        <span>Production d&apos;écrits variés</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-bright-red flex-shrink-0 mt-0.5" />
                        <span>Calcul mental et résolution de problèmes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-bright-red flex-shrink-0 mt-0.5" />
                        <span>Découverte du monde (histoire, géographie, sciences)</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-blue mb-2">Projets spéciaux :</h4>
                    <ul className="space-y-1">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-bright-red flex-shrink-0 mt-0.5" />
                        <span>Journal de classe trimestriel</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-bright-red flex-shrink-0 mt-0.5" />
                        <span>Projet scientifique sur l&apos;eau et les océans</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-bright-red flex-shrink-0 mt-0.5" />
                        <span>Initiation à la programmation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-navy-blue text-white p-4">
                <h3 className="text-xl font-bold">CM1-CM2 (Cours Moyen) - 9-11 ans</h3>
              </div>
              <div className="p-6">
                <p className="text-navy-blue/80 mb-4">
                  Les dernières années du primaire préparent les élèves à l&apos;entrée au collège. Ils développent leur
                  esprit critique, leur autonomie et approfondissent leurs connaissances dans toutes les matières.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold text-navy-blue mb-2">Points clés :</h4>
                    <ul className="space-y-1">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-bright-red flex-shrink-0 mt-0.5" />
                        <span>Maîtrise de la langue française écrite et orale</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-bright-red flex-shrink-0 mt-0.5" />
                        <span>Mathématiques avancées et raisonnement logique</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-bright-red flex-shrink-0 mt-0.5" />
                        <span>Histoire, géographie et éducation civique</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-bright-red flex-shrink-0 mt-0.5" />
                        <span>Sciences expérimentales et technologie</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-blue mb-2">Projets spéciaux :</h4>
                    <ul className="space-y-1">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-bright-red flex-shrink-0 mt-0.5" />
                        <span>Classe de découverte (voyage scolaire)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-bright-red flex-shrink-0 mt-0.5" />
                        <span>Projet entrepreneurial</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-bright-red flex-shrink-0 mt-0.5" />
                        <span>Préparation à l&apos;entrée au collège</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-navy-blue mb-8 text-center">
            Nos domaines d&apos;excellence
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-water-blue">
              <div className="bg-sky-blue/20 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-navy-blue" />
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-3">Maîtrise des fondamentaux</h3>
              <p className="text-navy-blue/80 mb-4">
                Nous mettons l&apos;accent sur une solide maîtrise de la lecture, de l&apos;écriture et des
                mathématiques, essentiels à la réussite scolaire.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-bright-red flex-shrink-0 mt-0.5" />
                  <span>Méthodes d&apos;apprentissage éprouvées</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-bright-red flex-shrink-0 mt-0.5" />
                  <span>Suivi personnalisé des progrès</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-water-blue">
              <div className="bg-sky-blue/20 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-navy-blue" />
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-3">Langues étrangères</h3>
              <p className="text-navy-blue/80 mb-4">
                L&apos;apprentissage de l&apos;anglais dès le CP, avec une approche communicative et ludique pour
                développer l&apos;aisance linguistique.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-bright-red flex-shrink-0 mt-0.5" />
                  <span>3 heures d&apos;anglais par semaine</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-bright-red flex-shrink-0 mt-0.5" />
                  <span>Activités culturelles en anglais</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-water-blue">
              <div className="bg-sky-blue/20 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Calculator className="h-6 w-6 text-navy-blue" />
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-3">Sciences et technologies</h3>
              <p className="text-navy-blue/80 mb-4">
                Une approche pratique des sciences avec des expériences, des projets et l&apos;utilisation des nouvelles
                technologies.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-bright-red flex-shrink-0 mt-0.5" />
                  <span>Laboratoire scientifique adapté</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-bright-red flex-shrink-0 mt-0.5" />
                  <span>Initiation au codage et à la robotique</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-water-blue">
              <div className="bg-sky-blue/20 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-navy-blue" />
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-3">Développement personnel</h3>
              <p className="text-navy-blue/80 mb-4">
                Nous accordons une grande importance au développement des compétences sociales, émotionnelles et de
                l&apos;estime de soi.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-bright-red flex-shrink-0 mt-0.5" />
                  <span>Ateliers de gestion des émotions</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-bright-red flex-shrink-0 mt-0.5" />
                  <span>Projets collaboratifs</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-water-blue">
              <div className="bg-sky-blue/20 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-navy-blue" />
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-3">Citoyenneté et valeurs</h3>
              <p className="text-navy-blue/80 mb-4">
                Formation de citoyens responsables, respectueux et engagés à travers des projets concrets et des
                discussions.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-bright-red flex-shrink-0 mt-0.5" />
                  <span>Conseil des élèves</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-bright-red flex-shrink-0 mt-0.5" />
                  <span>Projets solidaires et écologiques</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-water-blue">
              <div className="bg-sky-blue/20 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Lightbulb className="h-6 w-6 text-navy-blue" />
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-3">Arts et culture</h3>
              <p className="text-navy-blue/80 mb-4">
                Un programme artistique riche incluant les arts visuels, la musique, le théâtre et la découverte du
                patrimoine culturel.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-bright-red flex-shrink-0 mt-0.5" />
                  <span>Ateliers artistiques hebdomadaires</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-bright-red flex-shrink-0 mt-0.5" />
                  <span>Sorties culturelles régulières</span>
                </li>
              </ul>
            </div>
          </div>

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
                src="https://images.unsplash.com/photo-1610484826967-09c5720778c7?q=80&w=1000"
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

