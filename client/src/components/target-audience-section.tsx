import { motion } from "framer-motion";
import { Check, X, Users, Target } from "lucide-react";

export function TargetAudienceSection() {
  const idealCustomer = [
    "Quer ter materiais prontos, bonitos e de qualidade para usar no Ministério Infantil ou em casa.",
    "Busca economizar tempo, sem precisar criar atividades do zero.",
    "Deseja aproximar as crianças da Palavra de Deus de forma divertida e envolvente.",
    "Quer oferecer alternativas criativas para que elas passem menos tempo em telas e mais tempo aprendendo.",
    "Gosta de atividades bíblicas práticas, prontas para imprimir e aplicar imediatamente."
  ];

  const notFor = [
    "Não vê importância em ensinar princípios cristãos desde a infância.",
    "Não tem nem 10 minutos por dia para dedicar às crianças.",
    "Não se preocupa com o tipo de conteúdo que as crianças consomem.",
    "Não valoriza materiais de ensino estruturados e com base bíblica.",
    "Prefere improvisar as aulas sem planejamento ou sequência de ensino."
  ];

  return (
    <section className="py-16 sm:py-20 px-4 bg-secondary/30 w-full overflow-hidden">
      <div className="max-w-6xl mx-auto mobile-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-text-primary">
            <Target className="text-accent-green mr-3 inline h-8 w-8" />
            Indicado para Você Se:
          </h2>
          <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto">
            Descubra se o nosso conteúdo premium é ideal para o seu perfil
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-accent-green/10 border border-accent-green/30 rounded-2xl p-6 sm:p-8"
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-accent-green flex items-center">
              <Check className="mr-3 h-6 w-6" />
              INDICADO PARA VOCÊ SE:
            </h3>
            <div className="space-y-4">
              {idealCustomer.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <Check className="text-accent-green h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span className="text-text-primary text-sm sm:text-base">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-destructive/10 border border-destructive/30 rounded-2xl p-6 sm:p-8"
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-destructive flex items-center">
              <X className="mr-3 h-6 w-6" />
              TALVEZ NÃO SEJA PARA VOCÊ SE:
            </h3>
            <div className="space-y-4">
              {notFor.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <X className="text-destructive h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span className="text-text-primary text-sm sm:text-base">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16"
        >
          <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-border inline-block">
            <Users className="text-accent-green h-8 w-8 mx-auto mb-4" />
            <p className="text-text-primary text-lg sm:text-xl font-semibold mb-2">
              Já são mais de <span className="text-accent-green">2.500+ membros</span>
            </p>
            <p className="text-text-secondary text-sm sm:text-base">
              que confiam na nossa plataforma para conteúdo premium exclusivo
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}