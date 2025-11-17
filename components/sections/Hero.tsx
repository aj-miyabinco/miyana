import Link from 'next/link';

export default function Hero() {
  return (
    <section className="hero-golden section" aria-label="Hero">
      <div>
        <p aria-label="Make in India emphasis">Make In India • Golden Ratio Crafted</p>
        <h1>Perfume poetry woven with phi.</h1>
        <p>
          Miyana™ blends Japanese minimalism, Arabic depth, and Indian craftsmanship into balanced accords. Every layout here is
          cropped to Golden rectangles so the hero bottle rests on a golden-spiral focal point.
        </p>
        <div style={{ display: 'flex', gap: 'var(--space-md)' }}>
          <Link className="button-primary" href="/shop">Shop Collections</Link>
          <Link className="button-ghost" href="/quiz">Take the scent quiz</Link>
        </div>
      </div>
      <div aria-hidden className="card-phi" style={{ position: 'relative' }}>
        <div
          style={{
            position: 'absolute',
            inset: 'var(--space-md)',
            borderRadius: 'var(--radius-card)',
            border: '1px dashed rgba(31,27,22,0.18)'
          }}
        />
        <div style={{ height: '100%', background: 'linear-gradient(135deg,#f3d9d0,#e3d7c3)' }} />
      </div>
    </section>
  );
}
