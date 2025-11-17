'use client';
import Link from 'next/link';
import { useCart } from '../../lib/store';

export default function WishlistPage() {
  const { wishlist, addToCart, removeFromWishlist } = useCart();
  return (
    <section className="section">
      <h1>Wishlist</h1>
      {wishlist.length === 0 ? (
        <p>No items saved. Browse the <Link href="/shop">shop</Link>.</p>
      ) : (
        <ul>
          {wishlist.map((item) => (
            <li key={item.slug} style={{ marginBottom: 'var(--space-md)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <p>{item.name}</p>
                  <p>{item.mood}</p>
                </div>
                <div style={{ display: 'flex', gap: 'var(--space-sm)' }}>
                  <button className="button-primary" onClick={() => addToCart(item)}>Add to cart</button>
                  <button className="button-ghost" onClick={() => removeFromWishlist(item.slug)}>Remove</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
