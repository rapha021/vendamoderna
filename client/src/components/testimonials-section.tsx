import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Maria José S.",
      location: "São Paulo, SP",
      rating: 5,
      text: "Finalmente encontrei atividades de qualidade para usar no ministério infantil. As crianças adoram e os pais elogiam muito!",
      verified: true
    },
    {
      name: "Pastor Rafael M.",
      location: "Rio de Janeiro, RJ", 
      rating: 5,
      text: "Melhor investimento que fiz para a igreja! Material rico em conteúdo bíblico e muito bem organizado. Recomendo!",
      verified: true
    },
    {
      name: "Ana Paula L.",
      location: "Belo Horizonte, MG",
      rating: 5,
      text: "As atividades são perfeitas para ensinar a palavra de Deus de forma lúdica. Minhas filhas amam fazer as atividades!",
      verified: true
    },
    {
      name: "Professor Carlos P.",
      location: "Porto Alegre, RS",
      rating: 5,
      text: "Material muito bem elaborado e fácil de imprimir. Uso nas aulas da escolinha dominical há 6 meses e é um sucesso!",
      verified: true
    }
  ];

  return (
    <section className="py-16 sm:py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto mobile-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-text-primary">
            <Quote className="text-accent-green mr-3 inline h-8 w-8" />
            O que dizem mães e professoras que já usaram o kit
          </h2>
          <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto">
            Depoimentos reais de pessoas que já usaram nossas atividades bíblicas no ministério infantil
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-background/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-border shadow-lg"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-accent-green/20 rounded-full flex items-center justify-center">
                    <span className="text-accent-green font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    {testimonial.verified && (
                      <span className="bg-accent-green/20 text-accent-green text-xs px-2 py-1 rounded-full">
                        ✓ Verificado
                      </span>
                    )}
                  </div>
                  
                  <p className="text-text-primary text-sm sm:text-base mb-3 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="text-text-secondary text-sm">
                    <span className="font-semibold">{testimonial.name}</span>
                    <span className="mx-2">•</span>
                    <span>{testimonial.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16"
        >
          <div className="bg-accent-green/10 border border-accent-green/30 rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-4">
              ⭐ Avaliação Média: 4.9/5.0
            </h3>
            <p className="text-text-secondary mb-4">
              Com base em mais de 1.200 avaliações verificadas
            </p>
            <div className="flex justify-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}