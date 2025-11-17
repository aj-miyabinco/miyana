'use client';
import Link from 'next/link';
import { useCart } from '../../lib/store';

export default function CartPage() {
  const { cart, removeFromCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  return (
    <section className="section">
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cart.map((item) => (
              <li key={item.product.slug} style={{ marginBottom: 'var(--space-md)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: 'var(--space-lg)' }}>
                  <div>
                    <p>{item.product.name}</p>
                    <p>Qty: {item.quantity}</p>
                  </div>
                  <div>
                    <p>₹{item.product.price * item.quantity}</p>
                    <button className="button-ghost" onClick={() => removeFromCart(item.product.slug)}>Remove</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <p>Subtotal (GST placeholder): ₹{total}</p>
          <Link href="/checkout" className="button-primary">Begin checkout</Link>
        </div>
      )}
    </section>
  );
}
