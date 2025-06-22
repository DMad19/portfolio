import React from "react";
import { motion } from "framer-motion";
import ProfilePic from "../assets/Cricket-rafiki.svg";
import javaLogo from "../assets/java.svg";
import reactLogo from "../assets/react.svg";
import pythonLogo from "../assets/python.svg";

const coreTech = [
  { name: "React", logo: reactLogo },
  { name: "Java", logo: javaLogo },
  { name: "python", logo: pythonLogo },
];

export default function About() {
  return (
    <section className="bg-[var(--bg-primary)] text-[var(--text-primary)] py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* 🧑‍💻 Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src={ProfilePic}
            alt="Player Profile"
            className="w-[80%] md:w-full max-w-sm rounded-xl shadow-[var(--shadow-crisp)] border-4 border-[var(--accent-boundary)]"
          />
        </motion.div>

        {/* 🏏 Right: Player Bio */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--accent-cricket)]">
            Player Profile
          </h2>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
            I'm <span className="text-[var(--accent-code)] font-semibold">Dinesh Madduru</span>, a full-stack developer who grew up swinging the bat on the pitch and writing code off it.
            <br />
            I bring the same passion and discipline from cricket into every line of code — crafting clean architectures, building scalable services, and always playing for the team.
          </p>

          {/* Key Tech Stack Highlights */}
          <div className="flex gap-6 mt-6">
            {coreTech.map(({ name, logo }) => (
              <div key={name} className="flex flex-col items-center gap-2">
                <img src={logo} alt={name} className="h-10 w-10 object-contain" />
                <p className="text-sm text-[var(--text-secondary)] font-medium">{name}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
