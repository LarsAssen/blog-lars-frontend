import type { AppProps } from "next/app";
import React, { useState } from "react";
import { ThemeProvider, type DefaultTheme } from "styled-components";
import { lightTheme, darkTheme } from "../styles/theme";
import { GlobalStyles } from "../styles/GlobalStyles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@/styles/globals.scss";
import { Toaster } from "@/components/ui/sonner";
export type ThemeContextType = {
  theme: DefaultTheme;
  setTheme: (themeName: "light" | "dark") => void;
};

export const ThemeContext = React.createContext<ThemeContextType>({
  theme: lightTheme,
  setTheme: () => {},
});

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [themeName, setThemeName] = useState("light");
  const theme = themeName === "light" ? lightTheme : darkTheme;

  const setTheme = (name: "light" | "dark") => {
    setThemeName(name);
  };

  const queryClient = new QueryClient();

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <QueryClientProvider client={queryClient}>
          <Toaster />
          <Component {...pageProps} />
        </QueryClientProvider>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default MyApp;
