import { Clock } from "lucide-react"

type ScheduleItem = {
  time: string
  activity: string
}

interface ScheduleSectionProps {
  title: string
  schedule: ScheduleItem[]
}

export function ScheduleSection({ title, schedule }: ScheduleSectionProps) {
  return (
    <div className="bg-gray-50 rounded-lg p-8 mb-16">
      <h2 className="text-2xl md:text-3xl font-bold text-navy-blue mb-6 text-center">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {schedule.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Clock className="h-6 w-6 text-bright-red mr-2" />
              <h3 className="font-bold text-navy-blue">{item.time}</h3>
            </div>
            <p className="text-navy-blue/70">{item.activity}</p>
          </div>
        ))}
      </div>
    </div>
  )
}