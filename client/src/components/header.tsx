import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CTAButton } from "./cta-button";
import { ShoppingCart, HelpCircle } from "lucide-react";
// ThemeToggle removed - light theme only
import { brandName } from "@/lib/utils";

interface HeaderProps {
  onBuyClick: () => void;
  onFAQClick: () => void;
}

export function Header({ onBuyClick, onFAQClick }: HeaderProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const shouldShow = scrollPosition > 100 && scrollPosition < 13000; // Show header after scrolling 100px

      setIsVisible(shouldShow);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed bottom-4 left-0 right-0 z-50 flex items-center justify-center"
        >
          <div className="bg-yellow-500/50 backdrop-blur-sm rounded-full border-b border-border shadow-lg h-16 flex items-center justify-center px-4">
            <div className="md:hidden flex items-center space-x-3">
              <CTAButton className="py-2 px-4 text-sm">
                FAZER PARTE DA COMUNIDADE
              </CTAButton>
            </div>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
