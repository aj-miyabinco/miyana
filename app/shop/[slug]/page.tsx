import { notFound } from 'next/navigation';
import { products } from '../../../data/products';
import ProductCard from '../../../components/cards/ProductCard';

export default function ProductDetail({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return notFound();
  return (
    <section className="section">
      <div className="grid-golden">
        <div>
          <h1>{product.name}</h1>
          <p>{product.story}</p>
          <ul>
            <li>Top: {product.fragrancePyramid.top.join(', ')}</li>
            <li>Heart: {product.fragrancePyramid.heart.join(', ')}</li>
            <li>Base: {product.fragrancePyramid.base.join(', ')}</li>
          </ul>
          <p>Golden Ratio framed product image at phi intersection.</p>
        </div>
        <ProductCard product={product} />
      </div>
    </section>
  );
}
