import { brandName } from "@/lib/utils";
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
          <h4 className="text-base sm:text-lg font-semibold text-accent-green mb-2">{brandName}</h4>
          <p className="text-text-secondary text-sm">✝️ 🙏</p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-1 sm:space-y-2 text-text-secondary text-xs sm:text-sm mb-4 sm:mb-6"
        >
          <p>CNPJ: 00000000</p>
          <p>Agência Result</p>
          <p>Email: contato@inserirmarcaaqui.com</p>
          <p>{brandName} - Copyright © 2020-2025. Todos os direitos reservados</p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-xs text-text-secondary border-t border-dark-tertiary pt-4 sm:pt-6"
        >
          <p className="mb-2">Atividades bíblicas para crianças de 2 a 12 anos. Material educativo cristão</p>
          <p>
            ✝️ <span className="text-accent-green">Para aproximar as crianças da palavra de Deus.</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
