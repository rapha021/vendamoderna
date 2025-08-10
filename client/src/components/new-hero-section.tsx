import { motion } from "framer-motion";
import { CTAButton } from "./cta-button";
import { Shield, Lock, Clock, CheckCircle } from "lucide-react";

interface NewHeroSectionProps {
  onCTAClick: () => void;
}

export function NewHeroSection({ onCTAClick }: NewHeroSectionProps) {
  return (
    <section className="pt-20 pb-16 sm:pt-24 sm:pb-20 px-4 bg-gradient-to-br from-background via-secondary/30 to-background">
      <div className="max-w-6xl mx-auto text-center mobile-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 sm:mb-12"
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 leading-tight text-text-primary">
            Cansado de Conteúdo <span className="text-accent-green">Limitado</span>?
            <br />
            <span className="text-2xl sm:text-3xl md:text-4xl text-text-secondary">Desbloqueie o Acesso Premium</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-text-secondary mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
            Tenha acesso ilimitado ao conteúdo mais exclusivo da internet com nossa área de membros privada e segura.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mb-8 sm:mb-12"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {[
              { icon: CheckCircle, text: "Mais de 500 fotos exclusivas em alta qualidade" },
              { icon: CheckCircle, text: "100+ vídeos HD com conteúdo inédito" },
              { icon: CheckCircle, text: "Atualizações semanais com novo material" }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-secondary/50 rounded-2xl p-4 sm:p-6 border border-border"
              >
                <item.icon className="h-6 w-6 text-accent-green mb-3 mx-auto" />
                <p className="text-sm sm:text-base text-text-primary font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mb-8 sm:mb-12"
        >
          <div className="bg-accent-green/10 border-2 border-accent-green rounded-3xl p-6 sm:p-8 inline-block">
            <p className="text-2xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4 text-text-primary">
              Apenas <span className="text-accent-green">R$ 14,99</span>
            </p>
            <p className="text-text-secondary text-sm sm:text-base">
              Pagamento único • Sem mensalidade • Acesso vitalício
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mb-8 sm:mb-12"
        >
          <CTAButton 
            onClick={onCTAClick}
            className="text-lg sm:text-xl py-4 sm:py-6 px-6 sm:px-8 w-full sm:w-auto mobile-button-full"
          >
            🚀 GARANTIR ACESSO AGORA
          </CTAButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-4 sm:gap-8 text-accent-green text-sm sm:text-base"
        >
          <div className="flex items-center space-x-1 sm:space-x-2">
            <Shield className="h-4 w-4 sm:h-5 sm:w-5" />
            <span>Compra 100% Segura</span>
          </div>
          <div className="flex items-center space-x-1 sm:space-x-2">
            <Lock className="h-4 w-4 sm:h-5 sm:w-5" />
            <span>Garantia de Privacidade</span>
          </div>
          <div className="flex items-center space-x-1 sm:space-x-2">
            <Clock className="h-4 w-4 sm:h-5 sm:w-5" />
            <span>Acesso Imediato</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}