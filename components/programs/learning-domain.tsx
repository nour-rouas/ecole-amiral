import { Check, LucideIcon } from "lucide-react"

interface LearningDomainProps {
  icon: LucideIcon
  title: string
  skills: string[]
}

export function LearningDomain({ icon: Icon, title, skills }: LearningDomainProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-water-blue">
      <div className="bg-sky-blue/50 w-14 h-14 rounded-full flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-navy-blue" />
      </div>
      <h3 className="text-xl font-bold text-navy-blue mb-3">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-start gap-2">
            <Check className="h-5 w-5 text-bright-red flex-shrink-0 mt-0.5" />
            <span>{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

interface LearningDomainsGridProps {
  title: string
  domains: Array<{
    icon: LucideIcon
    title: string
    skills: string[]
  }>
}

export function LearningDomainsGrid({ title, domains }: LearningDomainsGridProps) {
  return (
    <>
      <h2 className="text-2xl md:text-3xl font-bold text-navy-blue mb-8 text-center">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {domains.map((domain, index) => (
          <LearningDomain key={index} {...domain} />
        ))}
      </div>
    </>
  )
}