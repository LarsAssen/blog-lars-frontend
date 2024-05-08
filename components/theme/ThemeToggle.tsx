import { useContext } from "react";
import { ThemeContext } from "@/pages/_app";

const ThemeToggle = () => {
  const {theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme.theme === "light" ? "dark" : "light");
  }

  return (
    <button onClick={() => setTheme(theme.theme === "light" ? "dark" : "light")}>
      Toggle Theme
    </button>
  );
};

export default ThemeToggle;