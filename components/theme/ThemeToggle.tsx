import { useContext } from "react";
import { ThemeContext } from "@/pages/_app";
import Button from "../UI/Button";

const ThemeToggle = () => {
  const context = useContext(ThemeContext);
  const {theme, setTheme } = context;

  return (
    <Button variant="secondary" onClick={() => setTheme(theme.theme === "light" ? "dark" : "light")}>
      Toggle Theme
    </Button>
  );
};

export default ThemeToggle;