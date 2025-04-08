import { Check } from "lucide-react"

interface ProgramPoint {
  text: string
}

interface ProgramLevel {
  title: string
  ageRange: string
  description: string
  keyPoints: ProgramPoint[]
  specialProjects: ProgramPoint[]
}

export function ProgramLevel({ title, ageRange, description, keyPoints, specialProjects }: ProgramLevel) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-navy-blue text-white p-4">
        <h3 className="text-xl font-bold">{title} - {ageRange}</h3>
      </div>
      <div className="p-6">
        <p className="text-navy-blue/80 mb-4">{description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-bold text-navy-blue mb-2">Points clés :</h4>
            <ul className="space-y-1">
              {keyPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-bright-red flex-shrink-0 mt-0.5" />
                  <span>{point.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-navy-blue mb-2">Projets spéciaux :</h4>
            <ul className="space-y-1">
              {specialProjects.map((project, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-bright-red flex-shrink-0 mt-0.5" />
                  <span>{project.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}