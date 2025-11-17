'use client';

import { FormEvent, useState } from 'react';
import { signIn } from 'next-auth/react';
import Link from 'next/link';

export default function SignInPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleCredentials = async (event: FormEvent) => {
    event.preventDefault();
    setError('');
    const result = await signIn('credentials', {
      username,
      password,
      redirect: true,
      callbackUrl: '/checkout'
    });
    if (result?.error) {
      setError('Invalid username or password. Please try again.');
    }
  };

  return (
    <section className="section" aria-labelledby="signin-heading" style={{ maxWidth: 680, margin: '0 auto' }}>
      <div className="hero" style={{ padding: 'var(--space-xl)', gap: 'var(--space-md)' }}>
        <div>
          <p className="eyebrow">Golden Ratio aligned security</p>
          <h1 id="signin-heading" style={{ lineHeight: 1.2 }}>
            Sign in to complete your Miyana™ purchase
          </h1>
          <p>
            Use a password or continue with your preferred social account. Alignment, padding, and focal points mirror our
            Golden Ratio layout grid for a calm checkout experience.
          </p>
        </div>
        <div className="card" style={{ aspectRatio: '1 / 1.618', padding: 'var(--space-lg)' }}>
          <form onSubmit={handleCredentials} className="form" aria-label="Username password sign in">
            <label htmlFor="username">Email</label>
            <input
              id="username"
              name="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              type="email"
              required
              autoComplete="email"
            />
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              required
              autoComplete="current-password"
            />
            {error ? (
              <p role="alert" style={{ color: 'var(--color-accent)', marginTop: 'var(--space-xs)' }}>
                {error}
              </p>
            ) : null}
            <button type="submit" className="button-primary" style={{ width: '100%' }}>
              Continue with password
            </button>
          </form>
          <div style={{ display: 'grid', gap: 'var(--space-sm)', marginTop: 'var(--space-md)' }}>
            <button className="button-ghost" onClick={() => signIn('google', { callbackUrl: '/checkout' })} type="button">
              Continue with Google
            </button>
            <button className="button-ghost" onClick={() => signIn('github', { callbackUrl: '/checkout' })} type="button">
              Continue with GitHub
            </button>
            <button className="button-ghost" onClick={() => signIn('facebook', { callbackUrl: '/checkout' })} type="button">
              Continue with Facebook
            </button>
          </div>
          <p style={{ marginTop: 'var(--space-md)' }}>
            New to Miyana™? <Link href="/shop">Browse perfumes</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
