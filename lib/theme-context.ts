'use client';
import { createContext } from 'react';

const ThemeToggleContext = createContext<{ mode: 'light' | 'dark'; toggleTheme: () => void } | undefined>(undefined);

export default ThemeToggleContext;
