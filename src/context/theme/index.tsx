import React, { createContext, FC, ReactElement } from 'react';
import createPersistedState from 'use-persisted-state';
import { GlobalStyle } from '@styles';

export enum Themes {
  Dark = 'dark',
  Light = 'light',
}

export interface ThemeContextProps {
  theme: Themes;
  toggleTheme: () => void;
}

const useCounterState = createPersistedState('theme');

export const ThemeContext = createContext<ThemeContextProps>({
  theme: Themes.Light,
  toggleTheme: () => {},
});

export const ThemeProvider: FC = props => {
  const [theme, setTheme] = useCounterState<Themes>(Themes.Light);
  const isDark = theme === Themes.Dark;
  const toggleTheme = () => {
    setTheme(isDark ? Themes.Light : Themes.Dark);
  };

  return (
    <ThemeContext.Provider value={{
      theme,
      toggleTheme,
    }}>
      <GlobalStyle theme={theme}/>
      {props.children}
    </ThemeContext.Provider>
  );
};

export const ThemeWrapper = ({ element }: { element: ReactElement }) => (
  <ThemeProvider>
    {element}
  </ThemeProvider>
);
