import { motion } from "framer-motion";
import { Check, Star, ChevronDown } from "lucide-react";
import { useState } from "react";

export function BenefitsSection() {
  const [expandedSection, setExpandedSection] = useState<string>("");

  const benefits = [
    { text: "✅ Desenhos famosos", highlight: ", agora sem nenhuma censura." },
    { text: "✅ Atualizações semanais", highlight: ", sempre com novidades quentíssimas." },
    { text: "✅ Área de membros organizada", highlight: ", fácil de acessar direto do seu celular." },
    { text: "✅ Conteúdo sem cortes", highlight: ", sem censura, sem enrolação." },
    { text: "✅ Bônus VIP:", highlight: " Acesso imediato a um grupo exclusivo no Telegram." }
  ];

  const sections = [
    {
      id: "animated",
      title: "Desenhos Animados +18",
      description: "Os personagens que você cresceu assistindo... agora em cenas que você nunca imaginou!"
    },
    {
      id: "vip",
      title: "Grupo VIP no Telegram", 
      description: "Onde rola conteúdo extra, novidades, bastidores e muita interação."
    },
    {
      id: "updates",
      title: "Atualizações Semanais",
      description: "Sempre tem coisa nova chegando. Nunca fica parado."
    },
    {
      id: "private",
      title: "Área de Membros Privada e Segura",
      description: "Tudo organizado, fácil de acessar e com total discrição."
    }
  ];

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? "" : sectionId);
  };

  return (
    <section className="py-16 sm:py-20 px-4">
      <div className="max-w-4xl mx-auto mobile-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-dark-secondary/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 mb-6 sm:mb-8 border border-dark-tertiary"
        >
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 group"
              >
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="flex-shrink-0 w-6 h-6 bg-accent-green rounded-full flex items-center justify-center mt-1 transition-transform duration-300"
                >
                  <Check className="text-dark-primary text-sm h-3 w-3" />
                </motion.div>
                <div>
                  <p className="text-base sm:text-lg text-text-primary group-hover:text-accent-green transition-colors duration-300">
                    <span className="font-semibold">{benefit.text}</span>
                    {benefit.highlight}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="space-y-4">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-dark-secondary/80 backdrop-blur-sm rounded-2xl border border-dark-tertiary overflow-hidden"
            >
              <button 
                onClick={() => toggleSection(section.id)}
                className="w-full p-4 sm:p-6 text-left flex items-center justify-between hover:bg-dark-tertiary/50 transition-colors duration-300"
              >
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <Star className="text-xl sm:text-2xl text-accent-green h-5 w-5 sm:h-6 sm:w-6" />
                  <span className="text-base sm:text-lg font-semibold text-accent-green">{section.title}</span>
                </div>
                <motion.div
                  animate={{ rotate: expandedSection === section.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="text-text-secondary h-5 w-5" />
                </motion.div>
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: expandedSection === section.id ? "auto" : 0,
                  opacity: expandedSection === section.id ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <p className="text-sm sm:text-base text-text-secondary">{section.description}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-lg sm:text-xl text-text-secondary mb-2 px-2">
            Acesso imediato ao conteúdo mais <span className="text-accent-green">🔥🔥</span> da internet
          </p>
          <p className="text-base sm:text-lg text-text-primary px-2">
            Assine e <span className="text-accent-green font-semibold">desbloqueie as vantagens</span> exclusivas
          </p>
        </motion.div>
      </div>
    </section>
  );
}
