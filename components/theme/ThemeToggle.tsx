import { useContext } from "react";
import { ThemeContext } from "@/pages/_app";
import { Sun, Moon } from "react-feather";
import styled, { keyframes } from "styled-components";


const ThemeToggle = () => {
  const context = useContext(ThemeContext);
  const {theme, setTheme } = context;

  const toggleTheme = () => {
    setTheme(theme.theme === 'light' ? 'dark' : 'light');
  };



  return (
    <ToggleButton onClick={toggleTheme} themeMode={theme.theme}>
      {theme.theme === 'light' ? <SunIcon /> : <MoonIcon />}
    </ToggleButton>
  );
};

export default ThemeToggle;


const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const ToggleButton = styled.button<{ themeMode: string }>`
  background: ${({ themeMode, theme }) => (themeMode === 'light' ? theme.buttonBackground : theme.buttonSecondaryBackground)};
  border: none;
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 50px;
  height: 50px;
  transition: background 0.3s ease;

  &:focus {
    outline: none;
  }

  &:hover {
    animation: ${rotate} 0.5s linear;
  }
`;

const iconStyles = `
  width: 24px;
  height: 24px;
  color: white;
`;

const SunIcon = styled(Sun)`
  ${iconStyles}
`;

const MoonIcon = styled(Moon)`
  ${iconStyles}
`;