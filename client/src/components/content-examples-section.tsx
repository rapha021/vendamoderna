import { motion } from "framer-motion";
import { Play, Image, Star, Eye } from "lucide-react";

export function ContentExamplesSection() {
  const contentExamples = [
    {
      type: "activities",
      title: "Atividades Bíblicas",
      description: "Mais de 500 atividades prontas para imprimir",
      preview: "✝️ Caderninho de Orações",
      icon: Image
    },
    {
      type: "stories",
      title: "Historinhas Bíblicas",
      description: "Histórias ilustradas para crianças",
      preview: "📖 A Criação da Humanidade",
      icon: Play
    },
    {
      type: "games",
      title: "Caça Palavras Bíblico",
      description: "50 diferentes tipos de caça palavras",
      preview: "🎯 Velho Testamento - Parte I",
      icon: Star
    },
    {
      type: "planning",
      title: "Planejamento Bíblico",
      description: "Guias organizados para suas aulas",
      preview: "📅 Planejamento Bíblico 2024",
      icon: Eye
    }
  ];

  return (
    <section className="py-16 sm:py-20 px-4 bg-background w-full overflow-hidden">
      <div className="max-w-6xl mx-auto mobile-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-text-primary">
            <Image className="text-accent-green mr-3 inline h-8 w-8" />
            Exemplos de Atividades
          </h2>
          <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto mb-6">
            O material completo contém historinhas e mais de 500 atividades para crianças de 2 até 12 anos de idade
          </p>
          <div className="bg-accent-green/10 border border-accent-green/30 rounded-2xl p-4 sm:p-6 max-w-2xl mx-auto">
            <p className="text-accent-purple font-semibold text-sm sm:text-base">
              ✝️ Atividades bíblicas para aproximar as crianças da palavra de Deus
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {contentExamples.map((example, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-secondary/50 border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="text-center">
                  <div className="bg-accent-green/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <example.icon className="h-8 w-8 text-accent-green" />
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-text-primary mb-2">
                    {example.title}
                  </h3>
                  
                  <p className="text-text-secondary text-sm mb-4">
                    {example.description}
                  </p>
                  
                  <div className="bg-accent-green/10 border border-accent-green/30 rounded-xl p-4">
                    <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-50 rounded-lg flex items-center justify-center mb-3 border-2 border-dashed border-gray-300">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center mb-2 mx-auto">
                          <Image className="h-8 w-8 text-gray-400" />
                        </div>
                        <p className="text-xs text-text-secondary font-medium">
                          {example.preview}
                        </p>
                      </div>
                    </div>
                    <p className="text-xs text-accent-green font-semibold">
                      Prévia do conteúdo
                    </p>
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
          className="text-center"
        >
          <div className="bg-accent-green/10 border-2 border-accent-green rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
              ✨ Isso é apenas uma pequena amostra!
            </h3>
            {/* <p className="text-text-secondary text-lg sm:text-xl mb-6">
              Nossa área de membros possui muito mais conteúdo exclusivo, 
              atualizado semanalmente com material inédito de alta qualidade.
            </p> */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div className="bg-background/50 rounded-xl p-3">
                <div className="text-2xl sm:text-3xl font-bold text-accent-green">500+</div>
                <div className="text-xs sm:text-sm text-text-secondary">Atividades</div>
              </div>
              <div className="bg-background/50 rounded-xl p-3">
                <div className="text-2xl sm:text-3xl font-bold text-accent-green">50+</div>
                <div className="text-xs sm:text-sm text-text-secondary">Caça-Palavras</div>
              </div>
              <div className="bg-background/50 rounded-xl p-3">
                <div className="text-2xl sm:text-3xl font-bold text-accent-green">20+</div>
                <div className="text-xs sm:text-sm text-text-secondary">Estrategias essenciais </div>
              </div>
              <div className="bg-background/50 rounded-xl p-3">
                <div className="text-2xl sm:text-3xl font-bold text-accent-green">5</div>
                <div className="text-xs sm:text-sm text-text-secondary">Bonus grátis </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}