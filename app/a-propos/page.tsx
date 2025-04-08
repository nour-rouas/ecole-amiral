import Image from "next/image"
import WaveDivider from "@/components/wave-divider"
import NauticalIcon from "@/components/nautical-icon"

export default function AProposPage() {
  return (
    <div>
      <section className="bg-gradient-to-b from-sky-blue to-white py-12 md:py-16 lg:py-24 relative">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">À propos de l&apos;École Amiral</h1>
            <p className="text-navy-blue/80">
              Découvrez notre histoire, nos valeurs et notre approche pédagogique unique.
            </p>
          </div>
        </div>
        <WaveDivider />
      </section>

      <section id="histoire" className="py-12 md:py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-navy-blue mb-4">Notre histoire</h2>
              <p className="text-navy-blue/80 mb-4">
                Fondée en 2010 par un groupe d&apos;enseignants passionnés, l&apos;École Amiral est née d&apos;une
                vision commune : créer un établissement où l&apos;excellence académique s&apos;allie à
                l&apos;épanouissement personnel des élèves.
              </p>
              <p className="text-navy-blue/80 mb-4">
                Le nom &quot;Amiral&quot; a été choisi pour symboliser le leadership, l&apos;orientation et la guidance
                que nous souhaitons apporter à nos élèves dans leur voyage éducatif. Tout comme un amiral guide sa
                flotte à travers les océans, notre école guide les enfants à travers les eaux parfois tumultueuses de
                l&apos;apprentissage et du développement personnel.
              </p>
              <p className="text-navy-blue/80">
                Au fil des années, notre établissement s&apos;est développé, mais notre mission est restée la même :
                offrir une éducation de qualité dans un environnement bienveillant et stimulant, où chaque enfant peut
                développer son plein potentiel.
              </p>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/installations/amiral-acess.webp"
                alt="Histoire de l'École Amiral"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="valeurs" className="py-12 md:py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-blue mb-8 text-center">Nos valeurs</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-sky-blue/20 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <NauticalIcon type="anchor" className="text-navy-blue" />
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-2">Excellence</h3>
              <p className="text-navy-blue/70">
                Nous visons l&apos;excellence dans tous les aspects de notre enseignement, en encourageant chaque élève
                à donner le meilleur de lui-même.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-sky-blue/20 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <NauticalIcon type="compass" className="text-navy-blue" />
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-2">Respect</h3>
              <p className="text-navy-blue/70">
                Le respect mutuel est au cœur de notre communauté éducative, favorisant un environnement où chacun se
                sent valorisé et écouté.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-sky-blue/20 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <NauticalIcon type="ship" className="text-navy-blue" />
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-2">Créativité</h3>
              <p className="text-navy-blue/70">
                Nous encourageons la pensée créative et l&apos;innovation, permettant aux élèves d&apos;explorer de
                nouvelles idées et de développer leur imagination.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-sky-blue/20 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <NauticalIcon type="waves" className="text-navy-blue" />
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-2">Responsabilité</h3>
              <p className="text-navy-blue/70">
                Nous inculquons le sens des responsabilités, tant envers soi-même qu&apos;envers les autres et
                l&apos;environnement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="approche" className="py-12 md:py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2000"
                alt="Notre approche pédagogique"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl md:text-3xl font-bold text-navy-blue mb-4">Notre approche pédagogique</h2>
              <p className="text-navy-blue/80 mb-4">
                À l&apos;École Amiral, nous croyons en une approche pédagogique équilibrée qui combine :
              </p>
              <ul className="space-y-3 text-navy-blue/80 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-bright-red font-bold">•</span>
                  <span>
                    <strong>L&apos;excellence académique</strong> : Un programme rigoureux qui répond aux exigences du
                    ministère de l&apos;Éducation nationale tout en allant au-delà.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-bright-red font-bold">•</span>
                  <span>
                    <strong>La pédagogie active</strong> : Des méthodes d&apos;enseignement qui encouragent la
                    participation, l&apos;expérimentation et la résolution de problèmes.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-bright-red font-bold">•</span>
                  <span>
                    <strong>L&apos;attention individualisée</strong> : Un suivi personnalisé pour chaque élève, tenant
                    compte de ses forces, ses défis et son rythme d&apos;apprentissage.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-bright-red font-bold">•</span>
                  <span>
                    <strong>Le développement global</strong> : Une attention portée non seulement aux compétences
                    académiques, mais aussi aux compétences sociales, émotionnelles et physiques.
                  </span>
                </li>
              </ul>
              <p className="text-navy-blue/80">
                Notre thème nautique n&apos;est pas seulement esthétique ; il inspire notre philosophie éducative. Comme
                les marins qui naviguent sur les océans, nos élèves apprennent à s&apos;adapter, à collaborer et à
                persévérer face aux défis.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-navy-blue text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Notre engagement envers l&apos;excellence</h2>
            <p className="text-lg mb-8">
              À l&apos;École Amiral, nous nous engageons à offrir un environnement éducatif où chaque enfant peut
              s&apos;épanouir et atteindre son plein potentiel. Nous croyons que chaque élève est unique et mérite une
              éducation qui répond à ses besoins spécifiques.
            </p>
            <div className="flex justify-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6810.PNG-p2wEXMIhxqRS1RPdEILA4IwUTPIujC.png"
                alt="Logo École Amiral"
                width={120}
                height={120}
                className="bg-white rounded-full p-2"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

