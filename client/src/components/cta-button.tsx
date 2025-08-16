import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";
import { motion } from "framer-motion";

interface CTAButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  variant?: "primary" | "secondary";
}

export function CTAButton({ 
  onClick, 
  children, 
  className = "", 
  disabled = false,
  variant = "primary" 
}: CTAButtonProps) {
  const baseClasses = variant === "primary" 
    ? "bg-accent-green text-white font-bold py-4 sm:py-6 px-8 sm:px-12 rounded-2xl text-lg sm:text-xl md:text-2xl shadow-xl hover:shadow-2xl border-3 border-accent-green/30 playful-shadow"
    : "bg-accent-purple text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl text-base sm:text-lg shadow-lg hover:shadow-xl border-2 border-accent-purple/30";

  return (
    <motion.div
      whileHover={{ scale: 1.08, rotate: 1 }}
      whileTap={{ scale: 0.92 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Button
        onClick={onClick}
        disabled={disabled}
        className={`${baseClasses} ${className} transition-all duration-300 w-full`}
      >
        <Rocket className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6 drop-shadow-lg" />
        <span className="drop-shadow-lg">{children}</span>
      </Button>
    </motion.div>
  );
}
