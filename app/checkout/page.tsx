'use client';
import { FormEvent, useState } from 'react';
import { useCart } from '../../lib/store';
import { signIn, useSession } from 'next-auth/react';

export default function CheckoutPage() {
  const { cart } = useCart();
  const [step, setStep] = useState(1);
  const { data: session, status } = useSession();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStep(2);
  };

  if (status === 'loading') {
    return (
      <section className="section">
        <p>Loading your secure checkout…</p>
      </section>
    );
  }

  if (!session) {
    return (
      <section className="section">
        <div className="card" style={{ maxWidth: 560, margin: '0 auto', aspectRatio: '1 / 1.618' }}>
          <h1>Sign in to continue</h1>
          <p>
            Protect every order with authenticated checkout. Continue with a password or your favorite social account to align
            identity, billing, and Razorpay payment state.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-sm)', marginTop: 'var(--space-md)' }}>
            <button className="button-primary" onClick={() => signIn(undefined, { callbackUrl: '/checkout' })} type="button">
              Sign in
            </button>
            <button className="button-ghost" onClick={() => signIn('credentials', { callbackUrl: '/checkout' })} type="button">
              Use password
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <h1>Checkout</h1>
      <p>Multi-step, Bloomers-friendly form with large targets and phi-aligned inputs.</p>
      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 'var(--space-md)', maxWidth: 680 }}>
        <label>
          Full Name
          <input required style={{ width: '100%', padding: 'var(--space-sm)' }} aria-label="Full name" />
        </label>
        <label>
          Phone
          <input required style={{ width: '100%', padding: 'var(--space-sm)' }} aria-label="Phone" />
        </label>
        <label>
          Address
          <input required style={{ width: '100%', padding: 'var(--space-sm)' }} aria-label="Address" />
        </label>
        <label>
          Pincode
          <input required style={{ width: '100%', padding: 'var(--space-sm)' }} aria-label="Pincode" />
        </label>
        <p>Made in India message sits near summary for trust.</p>
        <button type="submit" className="button-primary">Proceed to Razorpay</button>
      </form>
      {step === 2 && <p>Razorpay modal placeholder — integrate using env keys.</p>}
      <div>
        <h3>Summary</h3>
        <ul>
          {cart.map((item) => (
            <li key={item.product.slug}>{item.product.name} — Qty {item.quantity}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
