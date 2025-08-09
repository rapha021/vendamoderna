import { motion } from "framer-motion";
import { HelpCircle, ChevronDown, Package, Link, Lock, DollarSign } from "lucide-react";
import { useState } from "react";
import { CTAButton } from "./cta-button";

interface FAQSectionProps {
  onCTAClick: () => void;
}

export function FAQSection({ onCTAClick }: FAQSectionProps) {
  const [expandedFAQ, setExpandedFAQ] = useState<string>("");

  const faqs = [
    {
      id: "access",
      icon: Package,
      question: "O que vou ter acesso?",
      answer: "Acesso imediato à nossa área de membros com todo o conteúdo +18 em desenho animado, além do grupo VIP no Telegram."
    },
    {
      id: "link", 
      icon: Link,
      question: "Como recebo o link?",
      answer: "Assim que seu pagamento for confirmado, você recebe o link direto no seu e-mail. É simples, rápido e sem complicações."
    },
    {
      id: "anonymous",
      icon: Lock,
      question: "É anônimo?",
      answer: "Totalmente. Nenhuma informação sensível aparece na sua fatura, e seus dados ficam 100% protegidos."
    },
    {
      id: "refund",
      icon: DollarSign,
      question: "Tenho direito a reembolso?",
      answer: "Sim. Se você não ficar satisfeito, é só pedir que devolvemos seu dinheiro."
    }
  ];

  const toggleFAQ = (faqId: string) => {
    setExpandedFAQ(expandedFAQ === faqId ? "" : faqId);
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          <HelpCircle className="text-accent-green mr-3 inline h-8 w-8" />
          Perguntas Frequentes (FAQ)
        </motion.h2>
        
        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-dark-secondary/80 backdrop-blur-sm rounded-2xl border border-dark-tertiary overflow-hidden"
            >
              <button 
                onClick={() => toggleFAQ(faq.id)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-dark-tertiary/50 transition-colors duration-300"
              >
                <div className="flex items-start space-x-3">
                  <faq.icon className="text-xl text-accent-green h-6 w-6 mt-0.5" />
                  <span className="text-lg font-semibold">{faq.question}</span>
                </div>
                <motion.div
                  animate={{ rotate: expandedFAQ === faq.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="text-text-secondary h-5 w-5" />
                </motion.div>
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: expandedFAQ === faq.id ? "auto" : 0,
                  opacity: expandedFAQ === faq.id ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6">
                  <p className="text-text-secondary ml-8">{faq.answer}</p>
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
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-accent-green mb-8">
            🚀 AGORA É COM VOCÊ!
          </h3>
          
          <CTAButton onClick={onCTAClick}>
            QUERO LIBERAR MEU ACESSO AGORA!
          </CTAButton>
        </motion.div>
      </div>
    </section>
  );
}
