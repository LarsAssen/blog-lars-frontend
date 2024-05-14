import { AppProps } from 'next/app';
import React, { useState } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { lightTheme, darkTheme } from '../styles/theme';
import { GlobalStyles } from '../styles/GlobalStyles';

type ThemeContextType = {
    theme: DefaultTheme;
    setTheme: (themeName: 'light' | 'dark') => void;
};

export const ThemeContext = React.createContext<ThemeContextType | undefined>({
    theme: lightTheme,
    setTheme: () => {},
});


const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    const [themeName, setThemeName] = useState('light');
    const theme = themeName === 'light' ? lightTheme : darkTheme;

    const setTheme = (name: 'light' | 'dark') => {
        setThemeName(name);
    };

    return (
    <ThemeContext.Provider value={{theme, setTheme}}>
    <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Component {...pageProps} />;
    </ThemeProvider>
    </ThemeContext.Provider>
    )
}

export default MyApp;