import { motion } from "framer-motion";
import { MessageCircle, Star } from "lucide-react";
import testimonial1 from "@assets/image_1756216342124.png";
import testimonial2 from "@assets/image_1756216348004.png";

export function TestimonialsWhatsAppSection() {
  const testimonials = [
    {
      id: 1,
      image: testimonial1,
      alt: "Depoimento de mãe sobre o material bíblico"
    },
    {
      id: 2,
      image: testimonial2,
      alt: "Depoimento de professora sobre as atividades"
    }
  ];

  return (
    <section className="py-16 sm:py-20 px-4 bg-gradient-to-br from-secondary/40 to-background w-full overflow-hidden">
      <div className="max-w-6xl mx-auto mobile-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <MessageCircle className="h-8 w-8 text-accent mr-3" />
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-accent fill-current" />
              ))}
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-text-primary">
            💬 O que dizem mães e professoras que já usaram o kit
          </h2>
          <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto">
            Depoimentos reais de quem já transformou suas aulas e momentos em família com nosso material
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
              data-testid={`testimonial-whatsapp-${testimonial.id}`}
            >
              <div className="bg-background/90 backdrop-blur-sm rounded-2xl p-4 border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.alt}
                    className="w-full h-auto rounded-xl"
                  />
                  <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                    <MessageCircle className="h-3 w-3 mr-1" />
                    WhatsApp
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-accent/20 to-accent/10 rounded-2xl p-6 border border-accent/30 max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-3">
              <div className="flex space-x-1 mr-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-accent fill-current" />
                ))}
              </div>
              <span className="text-2xl font-bold text-text-primary">5.0</span>
            </div>
            <p className="text-text-primary font-semibold text-lg">
              "Material de excelente qualidade que realmente funciona!"
            </p>
            <p className="text-text-secondary text-sm mt-2">
              Baseado em centenas de depoimentos de mães e professoras satisfeitas
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}