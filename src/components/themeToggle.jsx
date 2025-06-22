// src/components/ThemeToggle.jsx
import { Sun, Moon } from 'lucide-react';
import useTheme from '../hooks/useTheme';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full border border-[var(--border-default)] hover:bg-[var(--bg-card)] transition-colors"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="text-yellow-400" size={20} />
      ) : (
        <Moon className="text-blue-600" size={20} />
      )}
    </button>
  );
};

export default ThemeToggle;
