import { createContext, useContext } from 'react';
import { useTheme } from '@/hooks/useTheme';
import type { ThemeContext as ThemeContextType } from '@/types';

const ThemeContext = createContext<ThemeContextType | null>(null);

// Access theme state and toggle from any component
export function useThemeContext(): ThemeContextType {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return ctx;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const themeValue = useTheme();

  return (
    <ThemeContext.Provider value={themeValue}>{children}</ThemeContext.Provider>
  );
}
