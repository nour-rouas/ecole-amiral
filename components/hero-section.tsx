import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import WaveDivider from "@/components/wave-divider"

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-sky-blue to-white overflow-hidden pb-20">
      <div className="container relative z-10 pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-navy-blue flex flex-col">
              <span>Bienvenue à</span>
              <span className="text-bright-red">l&apos;École Amiral</span>
            </h1>
            <p className="text-lg md:text-xl text-navy-blue/80 max-w-xl mx-auto lg:mx-0">
              Une école préscolaire et primaire où l&apos;apprentissage navigue vers l&apos;excellence dans un
              environnement inspiré par le monde maritime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-bright-red hover:bg-bright-red/80 text-white">
                <Link href="/programmes/prescolaire">Découvrir nos programmes</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-navy-blue text-white hover:bg-navy-blue/80">
                <Link href="/contact">Nous contacter</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full rounded-lg overflow-hidden shadow-xl animate-float">
              <Image
                src="/images/installations/amiral-acess.webp"
                alt="Entrée moderne de l'École Amiral"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-4 -right-4 h-24 w-24 md:h-32 md:w-32 bg-white rounded-full flex items-center justify-center shadow-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6810.PNG-p2wEXMIhxqRS1RPdEILA4IwUTPIujC.png"
                alt="Logo École Amiral"
                width={100}
                height={100}
                className="h-20 w-20 md:h-28 md:w-28"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Animated waves background */}
      <div className="absolute inset-0 overflow-hidden opacity-50">
        <div className="absolute inset-0 animate-wave">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="absolute bottom-0 w-[200%] h-40"
          >
          
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              fill="#d12026"
              opacity={0.5}
            ></path>
          </svg>
        </div>
      </div>
    </section>
  )
}

