import { Sun, Moon } from "lucide-react";
import { useTheme } from "./../hooks/useTheme";
import { motion, AnimatePresence } from "framer-motion";

const themeIcons = {
  light: Sun,
  dark: Moon,
};

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();

  const Icon = themeIcons[theme] ? themeIcons[theme] : Sun;

  if (!Icon) return null;

  return (
    <button
      onClick={toggleTheme}
      className="ml-2 p-1 rounded-full border border-primary hover:bg-hover-light text-[var(--foreground)] bg-[var(--background)] transition-colors"
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={theme}
          initial={{ rotateY: 90, opacity: 0 }}
          animate={{ rotateY: 0, opacity: 1 }}
          exit={{ rotateY: -90, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Icon className="w-6 h-6" />
        </motion.div>
      </AnimatePresence>
    </button>
  );
};

export default ThemeSwitch;
