import { useContext } from 'react';
import { ThemeContext, ThemeContextType } from '../context/ThemeContext';

export const useAppTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useAppTheme must be used within a ThemeProvider');
  }
  return context;
};

export default useAppTheme;
