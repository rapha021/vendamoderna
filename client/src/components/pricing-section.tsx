import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import { CTAButton } from "./cta-button";

interface PricingSectionProps {
  onCTAClick: () => void;
}

export function PricingSection({ onCTAClick }: PricingSectionProps) {
  const additionalImages = [
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200",
    "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200",
    "https://images.unsplash.com/photo-1607734834519-d8576ae60ea1?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200",
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200"
  ];

  return (
    <section className="py-16 sm:py-20 px-4 bg-dark-secondary/50">
      <div className="max-w-4xl mx-auto text-center mobile-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-dark-secondary/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-12 border border-dark-tertiary"
        >
          <div className="mb-6 sm:mb-8">
            <span className="inline-flex items-center px-3 sm:px-4 py-2 bg-accent-green/20 text-accent-green rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <Shield className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
              ISSO É PRA QUEM TEM CORAGEM!
            </span>
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg sm:text-xl md:text-2xl text-text-secondary mb-6 sm:mb-8 leading-relaxed px-2"
          >
            Imagine ter acesso a <span className="text-accent-green font-semibold">uma plataforma privada, segura e 100% discreta</span>,
            onde estão reunidos os melhores <span className="text-accent-green font-semibold">desenhos adultos +18</span>, feitos pra 
            quem gosta de se divertir sem trava nenhuma.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-6 sm:mb-8"
          >
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
              Tudo isso e Muito Mais
              <br />
              Por Apenas <span className="text-accent-green">R$14,99</span> 
              <span className="text-xl sm:text-2xl"> 🤑</span>
            </h2>
            <p className="text-text-secondary text-base sm:text-lg">
              (pagamento único!) <span className="text-accent-green">🔥</span>
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mb-6 sm:mb-8"
          >
            <CTAButton onClick={onCTAClick}>
              Quero Meu Acesso AGORA!
            </CTAButton>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 max-w-3xl mx-auto"
          >
            {additionalImages.map((image, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="gradient-border group cursor-pointer"
              >
                <div className="gradient-border-content p-2 sm:p-3 h-32 sm:h-40 flex items-center justify-center">
                  <img 
                    src={image} 
                    alt={`Conteúdo adicional ${index + 1}`} 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
