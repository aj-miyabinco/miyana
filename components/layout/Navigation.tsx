'use client';
import Link from 'next/link';
import ThemeToggleContext from '../../lib/theme-context';
import { useContext } from 'react';

export default function Navigation() {
  const theme = useContext(ThemeToggleContext);
  return (
    <header className="navbar" aria-label="Primary">
      <div>
        <Link href="/" aria-label="Miyana home">
          <strong>Miyana™</strong>
        </Link>
      </div>
      <nav aria-label="Main navigation" style={{ display: 'flex', gap: 'var(--space-md)' }}>
        <Link href="/shop">Shop</Link>
        <Link href="/stories">Stories</Link>
        <Link href="/quiz">Scent Quiz</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/cart" aria-label="Cart">Cart</Link>
      </nav>
      <div style={{ display: 'flex', gap: 'var(--space-sm)' }}>
        <Link href="#accessibility" className="button-ghost">AA</Link>
        <button className="button-ghost" onClick={theme?.toggleTheme} aria-label="Toggle contrast" type="button">
          {theme?.mode === 'dark' ? 'Light' : 'Dark'}
        </button>
      </div>
    </header>
  );
}
