'use client';
import Link from 'next/link';
import ThemeToggleContext from '../../lib/theme-context';
import { useContext } from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function Navigation() {
  const theme = useContext(ThemeToggleContext);
  const { data: session } = useSession();
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
      <div style={{ display: 'flex', gap: 'var(--space-sm)', alignItems: 'center' }}>
        {session?.user ? (
          <>
            <span className="eyebrow" aria-label="Signed in user">
              {session.user.name || session.user.email}
            </span>
            <button className="button-ghost" onClick={() => signOut({ callbackUrl: '/' })} type="button">
              Sign out
            </button>
          </>
        ) : (
          <button className="button-ghost" onClick={() => signIn()} type="button">
            Sign in
          </button>
        )}
        <Link href="#accessibility" className="button-ghost">AA</Link>
        <button className="button-ghost" onClick={theme?.toggleTheme} aria-label="Toggle contrast" type="button">
          {theme?.mode === 'dark' ? 'Light' : 'Dark'}
        </button>
      </div>
    </header>
  );
}
