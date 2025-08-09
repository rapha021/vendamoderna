import { motion } from "framer-motion";
import { Flame, ChevronDown } from "lucide-react";
import { CTAButton } from "./cta-button";

interface HeroSectionProps {
  onCTAClick: () => void;
}

export function HeroSection({ onCTAClick }: HeroSectionProps) {
  const contentImages = [
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    "https://images.unsplash.com/photo-1607734834519-d8576ae60ea1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-16 sm:py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-dark-primary via-dark-secondary to-dark-primary opacity-90"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto text-center mobile-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6 sm:mb-8"
        >
          <span className="inline-flex items-center px-2 sm:px-4 py-2 bg-accent-green/20 text-accent-green rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 text-center leading-tight">
            <Flame className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
            <span className="break-words">ATENÇÃO! VOCÊ NUNCA MAIS VAI OLHAR ESSES DESENHOS DO MESMO JEITO...</span>
            <Flame className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
          </span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
        >
          <span className="text-accent-green">Conteúdo 100%</span>
          <br />
          <span className="bg-gradient-to-r from-text-primary to-text-secondary bg-clip-text text-transparent">
            sem censura, +18, explícito,
            <br />
            liberado e atualizado toda semana.
          </span>
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 mb-8 sm:mb-12 max-w-4xl mx-auto"
        >
          {contentImages.map((image, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="gradient-border group cursor-pointer"
            >
              <div className="gradient-border-content p-2 sm:p-4 h-32 sm:h-48 flex items-center justify-center">
                <img 
                  src={image} 
                  alt={`Conteúdo exclusivo ${index + 1}`} 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="text-lg sm:text-xl md:text-2xl text-text-secondary mb-6 sm:mb-8 max-w-3xl mx-auto px-2"
        >
          Se você <span className="text-accent-green font-semibold">cresceu assistindo aos desenhos animados</span> 
          mais famosos da sua infância...
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="text-base sm:text-lg md:text-xl text-text-primary mb-8 sm:mb-12 px-2"
        >
          Prepare-se, porque agora <span className="text-accent-green font-semibold">você vai ver</span> esses personagens 
          <span className="text-accent-green font-semibold"> de um jeito que você NUNCA imaginou.</span>
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          className="animate-pulse-slow"
        >
          <ChevronDown className="text-accent-green text-xl sm:text-2xl mx-auto" />
        </motion.div>
      </div>
    </section>
  );
}
