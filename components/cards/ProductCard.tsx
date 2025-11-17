'use client';
import Link from 'next/link';
import { Product } from '../../types/catalog';
import { useCart } from '../../lib/store';

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart, addToWishlist } = useCart();
  return (
    <article className="card-phi" aria-label={`${product.name} perfume card`}>
      <div>
        <div
          style={{
            background: 'linear-gradient(180deg, rgba(243,217,208,0.6), rgba(200,169,106,0.35))',
            borderRadius: 'var(--radius-card)',
            marginBottom: 'var(--space-md)',
            position: 'relative',
            aspectRatio: '1 / 1.618'
          }}
        >
          <span style={{ position: 'absolute', top: 8, right: 8, fontSize: 12 }}>Golden 1:1.618 crop</span>
        </div>
        <h3>{product.name}</h3>
        <p>{product.story}</p>
        <p>
          <strong>₹{product.price}</strong> • {product.size}
        </p>
        <p>Origin: {product.origin}</p>
        <p>Gender-neutral: {product.genderNeutral ? 'Yes' : 'Optional focus'}</p>
      </div>
      <div style={{ display: 'flex', gap: 'var(--space-sm)', alignItems: 'center' }}>
        <button className="button-primary" onClick={() => addToCart(product)}>Add to cart</button>
        <button className="button-ghost" onClick={() => addToWishlist(product)}>Wishlist</button>
        <Link href={`/shop/${product.slug}`} aria-label={`${product.name} detail`}>Details</Link>
      </div>
    </article>
  );
}
