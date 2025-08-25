import { motion } from "framer-motion";
import { Mail, Printer, PenTool } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      icon: Mail,
      title: "CHEGA NO E-MAIL",
      description:
        "O conteúdo é totalmente digital e, após a compra, serão enviadas as informações de acesso para seu e-mail.",
      bgColor: "from-accent-orange/20 to-accent-yellow/10",
      borderColor: "border-accent-orange/40",
      iconColor: "text-text-primary",
    },
    {
      icon: Printer,
      title: "VOCÊ IMPRIME",
      description:
        "Você escolhe quando quiser, pois o acesso é VITALÍCIO e quantas vezes desejar.",
      bgColor: "from-accent-purple/30 to-accent-blue/15",
      borderColor: "border-accent-purple/50",
      iconColor: "text-text-primary",
      isHighlighted: false,
    },
    {
      icon: PenTool,
      title: "HORA DE PRATICAR",
      description:
        "Com o material impresso, é hora de aproveitar os desenhos bíblicos para colorir, criando momentos especiais e cheios de aprendizado com seus filhos, do jeito que sua família precisar.",
      bgColor: "from-accent-green/20 to-accent-blue/10",
      borderColor: "border-accent-green/40",
      iconColor: "text-text-primary",
    },
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-accent-black drop-shadow-lg">
            COMO FUNCIONA:
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`bg-gradient-to-br ${step.bgColor} border-3 ${step.borderColor} rounded-3xl p-6 sm:p-8 playful-shadow transform hover:scale-105 transition-all duration-300 ${
                step.isHighlighted
                  ? "bg-gradient-to-br from-accent-purple to-accent-blue"
                  : ""
              }`}
            >
              <div className="text-center mb-6">
                <div
                  className={`w-20 h-20 mx-auto ${step.isHighlighted ? "bg-white/20" : "bg-background/80"} rounded-full flex items-center justify-center mb-4 shadow-lg`}
                >
                  <step.icon className={`h-10 w-10 ${step.iconColor}`} />
                </div>
              </div>

              <h3
                className={`text-xl sm:text-2xl font-black mb-4 text-center drop-shadow-lg ${
                  step.isHighlighted ? "text-white" : "text-text-primary"
                }`}
              >
                {step.title}
              </h3>

              <p
                className={`text-sm sm:text-base leading-relaxed text-center ${
                  step.isHighlighted ? "text-white" : "text-text-primary"
                }`}
              >
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
