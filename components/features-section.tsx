import NauticalIcon from "@/components/nautical-icon"

const features = [
  {
    icon: "anchor",
    title: "Éducation solide",
    description: "Un programme éducatif complet qui ancre les connaissances fondamentales.",
  },
  {
    icon: "compass",
    title: "Orientation personnalisée",
    description: "Un accompagnement individualisé pour guider chaque enfant vers sa réussite.",
  },
  {
    icon: "ship",
    title: "Esprit d'équipe",
    description: "Développement des valeurs de collaboration et de respect mutuel.",
  },
  {
    icon: "waves",
    title: "Créativité fluide",
    description: "Encouragement de l'expression artistique et de l'innovation.",
  },
]

export default function FeaturesSection() {
  return (
    <section className="pt-6 pb-16 md:pt-12 md:pb-24 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">Notre approche pédagogique</h2>
          <p className="text-navy-blue/80">
            À l&apos;École Amiral, nous combinons excellence académique et valeurs humaines dans un environnement
            inspiré par le monde maritime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="bg-sky-blue/20 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <NauticalIcon type={feature.icon as any} className="text-navy-blue" />
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-2">{feature.title}</h3>
              <p className="text-navy-blue/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

