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
    ? "cta-gradient text-white font-bold py-6 px-12 rounded-xl text-xl shadow-lg hover:shadow-xl"
    : "bg-accent-green text-white font-bold py-4 px-8 rounded-lg text-lg shadow-md hover:shadow-lg";

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Button
        onClick={onClick}
        disabled={disabled}
        className={`${baseClasses} ${className} transition-all duration-300 w-full md:w-auto`}
      >
        <Rocket className="mr-3 h-5 w-5" />
        {children}
      </Button>
    </motion.div>
  );
}
