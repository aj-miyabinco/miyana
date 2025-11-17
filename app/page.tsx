import Hero from '../components/sections/Hero';
import { products } from '../data/products';
import ProductCard from '../components/cards/ProductCard';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <section className="section" aria-label="Featured products">
        <div className="grid-golden">
          <div>
            <h2>Signature Scents</h2>
            <p>Golden rectangles frame each bottle for visual calm. Bloomers get high-contrast, large-type layouts.</p>
            <Link href="/shop" className="button-ghost">View all</Link>
          </div>
          <div style={{ display: 'grid', gap: 'var(--space-lg)', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      <section className="section" aria-label="UGC">
        <h2>UGC & Reels</h2>
        <p>Phi-based rhythm for Gen-Z reels and TikTok embeds.</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.618fr', gap: 'var(--space-lg)' }}>
          <div style={{ aspectRatio: '1 / 1.618', background: '#d7c9b2', borderRadius: 'var(--radius-card)' }} />
          <div style={{ aspectRatio: '1.618 / 1', background: '#f3d9d0', borderRadius: 'var(--radius-card)' }} />
        </div>
      </section>
    </div>
  );
}
