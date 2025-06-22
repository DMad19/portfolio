import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Illustration from '../assets/Cricket-rafiki.svg'; 


const Home = () => {
  return (
    <section className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] flex items-center justify-center px-6">
      <motion.div
        className="max-w-5xl w-full grid md:grid-cols-2 gap-10 items-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* 🏏 Left: Text */}
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[var(--accent-cricket)]">
            Welcome to The Pavilion
          </h1>
          <p className="text-lg md:text-xl text-[var(--text-secondary)]">
            I’m <span className="text-[var(--accent-code)] font-semibold">Dinesh Madduru</span> — a developer who codes with the sharpness of a yorker and builds products with the patience of a test innings.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="/projects"
              className="px-6 py-2 rounded-md bg-[var(--accent-code)] text-[var(--color-boundary-line)] hover:bg-[var(--color-highlight-yellow)] hover:text-[var(--bg-primary)] transition-colors duration-200"
            >
              View Scoreboard
            </Link>
            <Link
              to="/contact"
              className="px-6 py-2 rounded-md border border-[var(--accent-cricket)] text-[var(--accent-cricket)] hover:bg-[var(--accent-cricket)] hover:text-[var(--bg-primary)] transition-colors duration-200"
            >
              Join My Team
            </Link>
          </div>
        </div>

        {/* 🎨 Right: Illustration */}
        <div className="flex justify-center md:justify-end">
          <img
            src={Illustration} 
            alt="Cricket meets Code"
            className="w-[80%] md:w-full max-w-sm"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
