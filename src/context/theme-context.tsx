import React, { createContext, ReactNode, useState } from 'react';

interface ThemeContextProps {
  themeObject: ThemeObject;
  setThemeObject: React.Dispatch<React.SetStateAction<ThemeObject>>;
}

const ThemeContext = createContext({} as ThemeContextProps);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [themeObject, setThemeObject] = useState<ThemeObject>({
    textColors: 'black'
  });

  const value = {
    themeObject,
    setThemeObject
  };
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export { ThemeContext, ThemeProvider };

interface ThemeObject {
  textColors?: string;
}

export const DEFAULT_THEME: ThemeObject = {
  textColors: 'black'
};
