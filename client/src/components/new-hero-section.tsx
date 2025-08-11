import { motion } from "framer-motion";
import { CTAButton } from "./cta-button";
import { Shield, Lock, Clock, CheckCircle } from "lucide-react";
import bannerImage from "@assets/banner_header_1754956073282.png";

interface NewHeroSectionProps {
  onCTAClick: () => void;
}

export function NewHeroSection({ onCTAClick }: NewHeroSectionProps) {
  return (
    <section className="pt-4 pb-16 sm:pt-8 sm:pb-20 px-4 bg-gradient-to-br from-background via-secondary/30 to-background w-full overflow-hidden">
      {/* Product Banner */}
      <div className="w-full mb-8 sm:mb-12">
        <div className="max-w-4xl mx-auto">
          <img 
            src={bannerImage} 
            alt="Atividades Bíblicas - Material Educativo para Crianças" 
            className="w-full h-auto rounded-2xl shadow-lg"
          />
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto text-center mobile-padding w-full box-border">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 sm:mb-12"
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 leading-tight text-text-primary">
            Cansada de <span className="text-accent-green">Improvisar</span> nas Aulas do Ministério Infantil?
            <br />
            <span className="text-2xl sm:text-3xl md:text-4xl text-text-secondary">Receba +450 atividades bíblicas prontas para imprimir e usar!</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-text-secondary mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
            O material completo contém historinhas e mais de 450 atividades para crianças de 2 até 12 anos de idade.
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
              { icon: CheckCircle, text: "Mais de 450 atividades bíblicas para imprimir" },
              { icon: CheckCircle, text: "Historinhas e atividades para crianças de 2-12 anos" },
              { icon: CheckCircle, text: "Material pronto para usar no Ministério Infantil" }
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
              Apenas <span className="text-accent-green">R$ 4,99</span>
            </p>
            <p className="text-text-secondary text-sm sm:text-base">
              Promoção válida por tempo limitado • Pagamento único
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