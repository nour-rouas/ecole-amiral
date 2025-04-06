import { Anchor, Compass, Ship, Waves } from "lucide-react"
import { cn } from "@/lib/utils"

type NauticalIconProps = {
  type: "anchor" | "compass" | "ship" | "waves"
  className?: string
  size?: number
}

export default function NauticalIcon({ type, className, size = 24 }: NauticalIconProps) {
  const iconProps = {
    className: cn("text-navy-blue", className),
    size,
  }

  switch (type) {
    case "anchor":
      return <Anchor {...iconProps} />
    case "compass":
      return <Compass {...iconProps} />
    case "ship":
      return <Ship {...iconProps} />
    case "waves":
      return <Waves {...iconProps} />
    default:
      return <Anchor {...iconProps} />
  }
}

