import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import ThemeToggle from './themeToggle'; // ✅ Import this

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { to: '/', label: 'The Pavilion' },
    { to: '/about', label: 'Player Profile' },
    { to: '/projects', label: 'Scoreboard' },
    { to: '/skills', label: 'Style' },
    { to: '/blog', label: 'Commentary Box' },
    { to: '/contact', label: 'Dressing Room' },
  ];

  return (
    <nav className="bg-[var(--bg-primary)] text-[var(--text-primary)] shadow-[var(--shadow-soft)] px-6 py-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo / Title */}
        <Link
        to="/"
        className="flex items-center gap-2 text-2xl font-bold tracking-wider text-[var(--accent-code)]"
        aria-label="Homepage logo"
        >
        {/* Code Icon (Left) */}
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7 text-[var(--accent-code)] hover:text-[var(--accent-ball)] transition-colors duration-300"
            >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
            />
            </svg>


            {/* Brand Name */}
            <span className="text-[var(--accent-code)]">DMad19</span>

            {/* Bat & Ball (Right) */}
            <span className="inline-block animate-bounce">🏏</span>
        </Link>

        {/* Hamburger Icon (Mobile) */}
        <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle /> {/* 🌗 Always visible theme switch */}
            <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[var(--accent-code)] focus:outline-none"
            aria-label="Toggle Menu"
            >
            <FaBars size={22} />
            </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="hover:text-[var(--accent-cricket)] transition-colors duration-200"
            >
              {label}
            </Link>
          ))}
          {/* ✅ Theme Toggle Button */}
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col items-center gap-4 border-t border-[var(--border-default)] pt-4">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              className="hover:text-[var(--accent-cricket)] transition-colors duration-200"
            >
              {label}
            </Link>
          ))}
          {/* ✅ Theme Toggle for Mobile */}
          <ThemeToggle />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
