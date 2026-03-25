import { useState, useEffect, useCallback } from 'react';
import type { Theme } from '@/types';

const STORAGE_KEY = 'theme';
const VALID_THEMES: Theme[] = ['dark', 'light'];

// Safely read from localStorage (handles private browsing)
function readStoredTheme(): Theme | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && VALID_THEMES.includes(stored as Theme)) {
      return stored as Theme;
    }
    return null;
  } catch {
    return null;
  }
}

// Resolve theme from system preference
function getSystemTheme(): Theme {
  if (typeof window !== 'undefined' && window.matchMedia) {
    return window.matchMedia('(prefers-color-scheme: light)').matches
      ? 'light'
      : 'dark';
  }
  return 'dark';
}

// Resolve initial theme: localStorage → prefers-color-scheme → dark
function resolveTheme(): Theme {
  return readStoredTheme() ?? getSystemTheme();
}

// Apply dark class to <html>
function applyThemeClass(theme: Theme) {
  const root = document.documentElement;
  if (theme === 'dark') {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(resolveTheme);

  useEffect(() => {
    applyThemeClass(theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next: Theme = prev === 'dark' ? 'light' : 'dark';
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // localStorage unavailable in private browsing — silently ignore
      }
      return next;
    });
  }, []);

  return { theme, toggleTheme };
}
