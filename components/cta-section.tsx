import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CTASection() {
  return (
    <section className="relative bg-navy-blue text-white py-16 md:py-24">
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à embarquer pour une aventure éducative ?</h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Rejoignez l&apos;École Amiral et offrez à votre enfant une éducation d&apos;excellence dans un environnement
            stimulant et bienveillant.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-bright-red hover:bg-bright-red/90">
              <Link href="/contact">Nous contacter</Link>
            </Button>
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
            className="absolute top-0 w-[200%] h-40"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              fill="#ffffff"
            ></path>
          </svg>
        </div>
      </div>
    </section>
  )
}

