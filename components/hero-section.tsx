import Image from "next/image"
import { Button } from "@/components/ui/button"
import WaveDivider from "@/components/wave-divider"

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-sky-blue to-white overflow-hidden pb-20">
      <div className="container relative z-10 pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-navy-blue">
              Bienvenue à <span className="text-bright-red">l&apos;École Amiral</span>
            </h1>
            <p className="text-lg md:text-xl text-navy-blue/80 max-w-xl mx-auto lg:mx-0">
              Une école préscolaire et primaire où l&apos;apprentissage navigue vers l&apos;excellence dans un
              environnement inspiré par le monde maritime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-bright-red hover:bg-bright-red/90 text-white">
                Découvrir nos programmes
              </Button>
              <Button size="lg" variant="outline" className="border-navy-blue text-navy-blue hover:bg-navy-blue/10">
                Nous contacter
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full rounded-lg overflow-hidden shadow-xl animate-float">
              <Image
                src="/images/installations/amiral-acess.webp"
                alt="École Amiral"
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
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute inset-0 animate-wave">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="absolute bottom-0 w-[200%] h-40"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              fill="#d12026"
            ></path>
          </svg>
        </div>
      </div>
    </section>
  )
}

