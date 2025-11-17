'use client';
import { useState } from 'react';
import { products } from '../../data/products';

const adminPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <section className="section">
      <h1>Admin Panel</h1>
      {!authenticated ? (
        <div style={{ maxWidth: 360 }}>
          <p>Password protected. Use env NEXT_PUBLIC_ADMIN_PASSWORD.</p>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            aria-label="Admin password"
            style={{ width: '100%', padding: 'var(--space-sm)' }}
          />
          <button
            className="button-primary"
            onClick={() => setAuthenticated(password === adminPassword)}
            type="button"
          >
            Enter
          </button>
        </div>
      ) : (
        <div>
          <h3>Products</h3>
          <table className="table" aria-label="Product table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Stock</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.slug}>
                  <td>{product.name}</td>
                  <td>{product.stock}</td>
                  <td>₹{product.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p>Order and coupon management placeholders aligned to Golden grid.</p>
        </div>
      )}
    </section>
  );
}
