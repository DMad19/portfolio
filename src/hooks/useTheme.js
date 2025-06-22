// src/hooks/useTheme.js
import { useEffect, useState } from "react";

const useTheme = () => {
	const [isDark, setIsDark] = useState(() => {
		return localStorage.getItem("theme") === "dark";
	});

	useEffect(() => {
		const root = window.document.documentElement;
		if (isDark) {
			root.classList.add("dark");
			localStorage.setItem("theme", "dark");
		} else {
			root.classList.remove("dark");
			localStorage.setItem("theme", "light");
		}
	}, [isDark]);

	const toggleTheme = () => setIsDark((prev) => !prev);

	return { isDark, toggleTheme };
};

export default useTheme;
