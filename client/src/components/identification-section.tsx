import { motion } from "framer-motion";
import { CheckCircle, Smartphone, Search, Heart, Clock } from "lucide-react";

export function IdentificationSection() {
  const situations = [
    {
      icon: Smartphone,
      text: "Lutando para competir com o celular e os jogos pela atenção das crianças?",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      iconColor: "text-orange-600",
    },
    {
      icon: Search,
      text: "Sentindo-se frustrada(o) por passar horas procurando atividades de qualidade na internet, sem sucesso?",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      iconColor: "text-blue-600",
    },
    {
      icon: Heart,
      text: "Preocupada(o) que seus filhos ou alunos achem as histórias da Bíblia 'chatas' e cresçam distantes da fé?",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      iconColor: "text-red-600",
    },
    {
      icon: Clock,
      text: "Sem tempo ou criatividade para preparar aulas que realmente cativem e ensinem?",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      iconColor: "text-purple-600",
    },
  ];

  return (
    <section className="pb-10 bg-gradient-to-br from-secondary/30 to-background w-full overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-text-primary">
            🤔 Você se identifica com alguma destas situações?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {situations.map((situation, index) => {
            const Icon = situation.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-card to-accent/20 backdrop-blur-sm rounded-2xl p-6 border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                data-testid={`situation-card-${index}`}
              >
                <div className="flex items-start space-x-4">
                  <div
                    className={`flex-shrink-0 p-3 rounded-full ${situation.bgColor} ${situation.borderColor} border-2`}
                  >
                    <Icon className={`h-6 w-6 ${situation.iconColor}`} />
                  </div>
                  <div className="flex-1">
                    <p className="text-base sm:text-lg font-semibold text-text-primary leading-relaxed">
                      {situation.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-10"
          data-testid="identification-result"
        >
          <div className="bg-gradient-to-r from-yellow-500 to-yellow-300 rounded-2xl p-6 border-2 border-accent/30 shadow-lg max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-center mb-3">
              <CheckCircle className="h-8 w-8 text-white mb-2 sm:mb-0 sm:mr-3" />
              <h3 className="text-lg sm:text-xl font-bold text-text-primary text-center">
                Se você respondeu SIM para pelo menos uma dessas situações...
              </h3>
            </div>
            <p className="text-text-primary/90 text-base sm:text-lg font-medium">
              Então você encontrou a solução que estava procurando! 🎉
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
