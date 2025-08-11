import { motion } from "framer-motion";
import { CTAButton } from "./cta-button";
import { Shield, Clock, RefreshCw, Lock } from "lucide-react";

interface SidebarOfferProps {
  onCTAClick: () => void;
}

export function SidebarOffer({ onCTAClick }: SidebarOfferProps) {
  const benefits = [
    { icon: Shield, text: "Arquivos em PDF para imprimir" },
    { icon: Clock, text: "Mais de 450 atividades bíblicas" },
    { icon: RefreshCw, text: "5 bônus exclusivos" },
    { icon: Lock, text: "Receba direto no zap" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-accent-green/10 border-2 border-accent-green rounded-2xl p-6 sticky top-24"
    >
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-text-primary mb-2">
          🔥 PROMOÇÃO ESPECIAL
        </h3>
        <div className="flex items-center justify-center space-x-2 mb-4">
          <span className="text-lg text-text-secondary line-through">De R$ 47</span>
          <span className="text-3xl font-bold text-accent-green">R$ 4,99</span>
        </div>
        <p className="text-sm text-destructive font-semibold mb-2">
          ⏰ Últimas unidades somente hoje!
        </p>
      </div>

      <div className="space-y-3 mb-6">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-center space-x-3">
            <benefit.icon className="h-5 w-5 text-accent-green flex-shrink-0" />
            <span className="text-sm text-text-primary">{benefit.text}</span>
          </div>
        ))}
      </div>

      <div className="bg-background/50 rounded-xl p-4 mb-6">
        <h4 className="font-bold text-text-primary mb-2">🛡️ Satisfação Garantida:</h4>
        <p className="text-xs text-text-secondary mb-2">
          • 7 dias para solicitar reembolso
        </p>
        <p className="text-xs text-text-secondary mb-2">
          • Material pronto para imprimir
        </p>
        <p className="text-xs text-text-secondary">
          • Pagamento único - sem mensalidades
        </p>
      </div>

      <div className="mb-6">
        <p className="text-xs text-text-secondary text-center mb-2">
          💳 Compra 100% Segura
        </p>
        <p className="text-xs text-text-secondary text-center">
          Todos os dados são criptografados e protegidos
        </p>
      </div>

      <CTAButton 
        onClick={onCTAClick}
        className="w-full text-lg py-3"
      >
        🚀 QUERO COMPRAR
      </CTAButton>

      <p className="text-xs text-text-secondary text-center mt-3">
        Acesso liberado em até 5 minutos após o pagamento
      </p>
    </motion.div>
  );
}