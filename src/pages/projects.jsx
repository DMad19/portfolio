import React, { useEffect, useState } from "react";
import  fetchGitHubRepos  from "../hooks/useGetGithubDetails";

export default function Projects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const loadRepos = async () => {
      const data = await fetchGitHubRepos();
      setRepos(data);
    };
    loadRepos();
  }, []);

  return (
    <div className="px-10 py-[var(--space-section-padding)]  mx-auto bg-[var(--bg-primary)]">
      <h2 className="text-3xl font-bold text-[var(--accent-code)] mb-8">
        🧮 Scoreboard (Projects)
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {repos.map((repo) => (
          <div key={repo.id} className="card">
            <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
              {repo.name}
            </h3>
            <p className="text-[var(--text-secondary)] text-sm mb-4">
              {repo.description}
            </p>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent-code)] hover:underline text-sm font-medium"
            >
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
