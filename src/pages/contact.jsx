import React from "react";

const links = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/dineshmadduru/",
    icon: (
      <svg
        className="w-6 h-6 mr-3 text-[var(--accent-code)]"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1s2.48 1.12 2.48 2.5zM.21 8h4.57v12H.21V8zm7.65 0h4.37v1.63h.06c.6-1.13 2.06-2.31 4.23-2.31 4.53 0 5.36 2.98 5.36 6.86V20h-4.57v-6.49c0-1.55-.03-3.54-2.16-3.54-2.16 0-2.49 1.68-2.49 3.42V20H7.86V8z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    url: "https://github.com/DMad19",
    icon: (
      <svg
        className="w-6 h-6 mr-3 text-[var(--accent-code)]"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 008.2 11.43c.6.1.82-.26.82-.57 0-.28-.01-1.02-.01-2-3.34.73-4.04-1.61-4.04-1.61-.54-1.38-1.32-1.75-1.32-1.75-1.08-.74.08-.72.08-.72 1.2.08 1.83 1.23 1.83 1.23 1.06 1.82 2.78 1.3 3.46.99.1-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.23-3.22-.12-.3-.54-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 016 0c2.28-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.62-2.8 5.64-5.48 5.94.43.37.82 1.1.82 2.22 0 1.6-.01 2.89-.01 3.28 0 .31.21.68.82.56A12 12 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "Email",
    url: "mailto:dineshmadduru19@gmail.com",
    icon: (
      <svg
        className="w-6 h-6 mr-3 text-[var(--accent-code)]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M4 4h16v16H4z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section className="bg-[var(--bg-primary)] text-[var(--text-primary)] py-20 px-6 min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold text-[var(--accent-code)] mb-10">
        Dressing Room (Contact Me)
      </h2>

      <div className="flex flex-col space-y-6 w-full max-w-sm">
        {links.map(({ name, url, icon }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-[var(--bg-card)] border border-[var(--border-default)] rounded-xl px-6 py-4 text-lg font-medium text-[var(--accent-code)] shadow-[var(--shadow-soft)] transition hover:scale-105 hover:shadow-[var(--shadow-crisp)]"
          >
            {icon}
            {name}
          </a>
        ))}
      </div>
    </section>
  );
}
