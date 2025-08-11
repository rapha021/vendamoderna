import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "./theme-provider";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme, actualTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("system");
    } else {
      setTheme("light");
    }
  };

  const getIcon = () => {
    if (theme === "system") {
      return <Monitor className="h-4 w-4" />;
    }
    return actualTheme === "dark" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />;
  };

  const getTooltip = () => {
    if (theme === "system") {
      return "Automático (Sistema)";
    }
    return actualTheme === "dark" ? "Modo Escuro" : "Modo Claro";
  };

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-muted/50 transition-colors duration-300"
      title={getTooltip()}
    >
      <motion.div
        initial={false}
        animate={{ 
          rotate: theme === "dark" ? 180 : theme === "system" ? 90 : 0,
          scale: 1 
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="text-text-primary"
      >
        {getIcon()}
      </motion.div>
    </motion.button>
  );
}