import { Mail, MapPin, Phone } from "lucide-react"
import ContactForm from "@/components/contact-form"

export default function ContactPage() {
  return (
    <div className="bg-gray-50 py-12 md:py-16 lg:py-24">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">Contactez-nous</h1>
          <p className="text-navy-blue/80">
            Nous sommes à votre disposition pour répondre à toutes vos questions concernant notre école.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
              <h2 className="text-3xl font-bold text-navy-blue mb-6">Nos coordonnées</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-sky-blue/20 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-navy-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl text-navy-blue mb-1">Adresse</h3>
                    <address className="not-italic text-navy-blue/70">
                      Lotissement Méditerranée N°76
                      <br />
                      Tanja Balia, Tanger
                      <br />
                      Maroc
                    </address>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-sky-blue/20 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-navy-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl text-navy-blue mb-1">Téléphone</h3>
                    <p className="text-navy-blue/70">
                      <a href="tel:+212666162188" className="hover:text-water-blue transition-colors">
                        06 66 16 21 88
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-sky-blue/20 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-navy-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl text-navy-blue mb-1">Email</h3>
                    <p className="text-navy-blue/70">
                      <a href="mailto:contact@ecole-amiral.fr" className="hover:text-water-blue transition-colors">
                        contact@ecole-amiral.fr
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden h-[300px] md:h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d641.2213755447425!2d-5.760641572542017!3d35.7604134140639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b81cabf3425a1%3A0xf97283fb35643fb0!2sSchool%20Amiral!5e1!3m2!1sen!2ses!4v1743957662426!5m2!1sen!2ses"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Carte École Amiral"
              ></iframe>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy-blue mb-6">Envoyez-nous un message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}

