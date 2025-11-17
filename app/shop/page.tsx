import ProductCard from '../../components/cards/ProductCard';
import { products } from '../../data/products';

export default function ShopPage() {
  return (
    <section className="section">
      <h1>Shop Miyana™</h1>
      <p>Filters: gender-neutral, mood, phi-based grid for Millennials and Gen-Z.</p>
      <div style={{ display: 'grid', gap: 'var(--space-lg)', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
