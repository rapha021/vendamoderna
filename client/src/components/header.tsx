import { motion } from "framer-motion";
import { CTAButton } from "./cta-button";
import { ShoppingCart, HelpCircle } from "lucide-react";

interface HeaderProps {
  onBuyClick: () => void;
  onFAQClick: () => void;
}

export function Header({ onBuyClick, onFAQClick }: HeaderProps) {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-accent-green flex items-center justify-center">
            <span className="text-white font-bold text-sm">S</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-text-primary">Sementinhas de Cristo</h1>
            <p className="text-xs text-text-secondary">Atividades Bíblicas Infantis</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <button 
            onClick={onBuyClick}
            className="flex items-center space-x-2 text-text-primary hover:text-accent-green transition-colors"
          >
            <ShoppingCart className="h-4 w-4" />
            <span>Comprar</span>
          </button>
          <button 
            onClick={onFAQClick}
            className="flex items-center space-x-2 text-text-primary hover:text-accent-green transition-colors"
          >
            <HelpCircle className="h-4 w-4" />
            <span>Dúvidas</span>
          </button>
        </nav>
        
        <div className="md:hidden">
          <CTAButton onClick={onBuyClick} className="py-2 px-4 text-sm">
            Comprar
          </CTAButton>
        </div>
      </div>
    </motion.header>
  );
}