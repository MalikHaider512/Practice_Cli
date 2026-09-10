import React, { createContext, useState, useMemo, useCallback, ReactNode } from 'react';
import { useColorScheme, StatusBarStyle } from 'react-native';
import { light, dark, AppThemeColors, ThemeMode } from '../utils/Colors';

export interface ThemeContextType {
  themeMode: ThemeMode;
  isDark: boolean;
  colors: AppThemeColors;
  statusBarStyle: StatusBarStyle;
  setThemeMode: (mode: ThemeMode) => void;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const systemColorScheme = useColorScheme();
  const [themeMode, setThemeMode] = useState<ThemeMode>('system');

  const activeMode = useMemo(() => {
    if (themeMode === 'system') {
      return systemColorScheme === 'dark' ? 'dark' : 'light';
    }
    return themeMode;
  }, [themeMode, systemColorScheme]);

  const isDark = activeMode === 'dark';

  const themeColors = useMemo(() => {
    return isDark ? dark : light;
  }, [isDark]);

  const statusBarStyle: StatusBarStyle = isDark ? 'light-content' : 'dark-content';

  const toggleTheme = useCallback(() => {
    setThemeMode(prevMode => {
      const currentActive =
        prevMode === 'system'
          ? systemColorScheme === 'dark'
            ? 'dark'
            : 'light'
          : prevMode;
      return currentActive === 'dark' ? 'light' : 'dark';
    });
  }, [systemColorScheme]);

  const value = useMemo(
    () => ({
      themeMode,
      isDark,
      colors: themeColors,
      statusBarStyle,
      setThemeMode,
      toggleTheme,
    }),
    [themeMode, isDark, themeColors, statusBarStyle, toggleTheme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
