import React from "react";
import { motion } from "framer-motion";
import javaLogo from "../assets/java.svg";
import pythonLogo from "../assets/python.svg";
import reactLogo from "../assets/react.svg";
import nextjsLogo from "../assets/nextdotjs.svg";
import expressLogo from "../assets/express.svg";
import nodejsLogo from "../assets/nodedotjs.svg";
import mongodbLogo from "../assets/mongodb.svg";
import sqlLogo from "../assets/postgresql.svg";
import jsLogo from "../assets/javascript.svg";

const techStack = [
  { name: "React", logo: reactLogo, role: "Front-end" },
  { name: "JavaScript", logo: jsLogo, role: "Front-end" },
  { name: "Next.js", logo: nextjsLogo, role: "Front-end" },
  { name: "Java", logo: javaLogo, role: "Backend" },
  { name: "Python", logo: pythonLogo, role: "Backend" },
  { name: "Node.js", logo: nodejsLogo, role: "Backend" },
  { name: "Express", logo: expressLogo, role: "Backend" },
  { name: "MongoDB", logo: mongodbLogo, role: "Database" },
  { name: "SQL", logo: sqlLogo, role: "Database" },
];

export default function Skills() {
  return (
    <section className="bg-[var(--bg-primary)] text-[var(--text-primary)] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-[var(--accent-code)] mb-10"
        >
          🏏 Style (Tech Stack)
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
          {techStack.map(({ name, logo, role }, index) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex flex-col items-center bg-[var(--bg-card)] p-5 rounded-xl border border-[var(--border-default)] shadow-md hover:scale-105 transition"
            >
              <img src={logo} alt={name} className="h-12 w-12 mb-3" />
              <p className="font-semibold text-[var(--text-primary)]">{name}</p>
              <p className="text-xs text-[var(--text-secondary)]">{role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
