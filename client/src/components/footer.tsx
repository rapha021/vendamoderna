import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="py-8 sm:py-12 px-4 bg-secondary/30 border-t border-border">
      <div className="max-w-4xl mx-auto text-center mobile-padding">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-4 sm:mb-6"
        >
          <h4 className="text-base sm:text-lg font-semibold text-accent-green mb-2">Priv Desbloqueado</h4>
          <p className="text-text-secondary text-sm">🔞 🔥</p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-1 sm:space-y-2 text-text-secondary text-xs sm:text-sm mb-4 sm:mb-6"
        >
          <p>83.291.740/0023-61</p>
          <p>Rua das Estrelas, 69 - Bairro Luxúria, São Paulo</p>
          <p>Email: contato@privdesbloqueado.com</p>
          <p>Todos os direitos reservados © 2025</p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-xs text-text-secondary border-t border-dark-tertiary pt-4 sm:pt-6"
        >
          <p className="mb-2">Este site é apenas para maiores de 18 anos. Conteúdo adulto e exclusivo</p>
          <p>
            🚀 <span className="text-accent-green">para quem curte exclusividade.</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
