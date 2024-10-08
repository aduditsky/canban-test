import { darkTheme, lightTheme } from '@/lib/utils';
import { GlobalStyle } from '@/styles/global.styles';

import { ReactNode, createContext, useContext, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

interface ThemeProp {
  toggleTheme: () => void;
  theme: string;
}
const ThemeContext = createContext<ThemeProp>({
  theme: 'light',
  toggleTheme: () => {},
});

export const useThemeContext = (): ThemeProp => useContext(ThemeContext);

interface ThemeProviderProps {
  children: ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyle />
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
}
