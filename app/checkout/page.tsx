'use client';
import { FormEvent, useState } from 'react';
import { useCart } from '../../lib/store';

export default function CheckoutPage() {
  const { cart } = useCart();
  const [step, setStep] = useState(1);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStep(2);
  };

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
