'use client';
import { ReactNode, useEffect, useState } from 'react';
import { CartProvider } from './store';
import ThemeToggleContext from './theme-context';

export function Providers({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const persisted = typeof window !== 'undefined' ? localStorage.getItem('miyana-theme') : null;
    if (persisted === 'dark' || persisted === 'light') {
      setMode(persisted);
      document.documentElement.dataset.theme = persisted;
    }
  }, []);

  const toggleTheme = () => {
    setMode((prev) => {
      const next = prev === 'light' ? 'dark' : 'light';
      if (typeof window !== 'undefined') {
        localStorage.setItem('miyana-theme', next);
        document.documentElement.dataset.theme = next;
      }
      return next;
    });
  };

  return (
    <ThemeToggleContext.Provider value={{ mode, toggleTheme }}>
      <CartProvider>{children}</CartProvider>
    </ThemeToggleContext.Provider>
  );
}
