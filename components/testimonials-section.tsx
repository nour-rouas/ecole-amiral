"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    quote:
      "L'École Amiral a transformé l'expérience scolaire de notre fille. Elle est enthousiaste à l'idée d'aller à l'école chaque jour et nous sommes impressionnés par ses progrès.",
    author: "Marie Dupont",
    role: "Parent d'élève",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "L'approche pédagogique unique et l'environnement bienveillant de l'École Amiral ont permis à mon fils de s'épanouir tant sur le plan académique que personnel.",
    author: "Thomas Laurent",
    role: "Parent d'élève",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "Nous avons choisi l'École Amiral pour son excellence académique et son attention portée au développement global de l'enfant. Nous ne regrettons pas notre choix !",
    author: "Sophie Martin",
    role: "Parent d'élève",
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 md:py-24 bg-white nautical-bg">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">Ce que disent les parents</h2>
          <p className="text-navy-blue/80">
            Découvrez les témoignages des parents qui nous font confiance pour l&apos;éducation de leurs enfants.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-lg shadow-lg p-6 md:p-10 border border-gray-100">
            <Quote className="absolute text-sky-blue/30 h-24 w-24 -top-6 -left-6 rotate-180" />

            <div className="relative z-10">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={cn(
                    "transition-opacity duration-500",
                    activeIndex === index ? "block opacity-100" : "hidden opacity-0",
                  )}
                >
                  <blockquote className="text-lg md:text-xl text-navy-blue/80 italic mb-6">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-navy-blue">{testimonial.author}</p>
                      <p className="text-sm text-navy-blue/70">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="border-navy-blue text-navy-blue hover:bg-navy-blue/10"
              >
                <ChevronLeft className="h-5 w-5" />
                <span className="sr-only">Témoignage précédent</span>
              </Button>
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={cn(
                      "h-2 rounded-full transition-all",
                      activeIndex === index ? "w-8 bg-bright-red" : "w-2 bg-gray-300 hover:bg-gray-400",
                    )}
                    aria-label={`Voir témoignage ${index + 1}`}
                  />
                ))}
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="border-navy-blue text-navy-blue hover:bg-navy-blue/10"
              >
                <ChevronRight className="h-5 w-5" />
                <span className="sr-only">Témoignage suivant</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

