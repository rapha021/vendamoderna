import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="py-12 px-4 bg-dark-primary border-t border-dark-tertiary">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <h4 className="text-lg font-semibold text-accent-green mb-2">Priv Desbloqueado</h4>
          <p className="text-text-secondary text-sm">🔞 🔥</p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-2 text-text-secondary text-sm mb-6"
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
          className="text-xs text-text-secondary border-t border-dark-tertiary pt-6"
        >
          <p>Este site é apenas para maiores de 18 anos. Conteúdo adulto e exclusivo</p>
          <p className="mt-2">
            🚀 <span className="text-accent-green">para quem curte exclusividade.</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
