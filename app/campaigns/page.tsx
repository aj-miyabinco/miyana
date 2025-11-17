export default function CampaignsPage() {
  return (
    <section className="section">
      <h1>Campaign Banners</h1>
      <p>Golden Ratio banner system with phi-aligned CTAs for Gen-X quick buys.</p>
      <div style={{ display: 'grid', gap: 'var(--space-lg)' }}>
        {[1, 2].map((item) => (
          <div key={item} className="hero-golden" style={{ minHeight: 280 }}>
            <div>
              <h3>Campaign {item}</h3>
              <p>Align CTA to golden intersection for maximal clarity.</p>
              <button className="button-primary">Shop now</button>
            </div>
            <div style={{ background: '#d7c9b2', borderRadius: 'var(--radius-card)', height: '100%' }} />
          </div>
        ))}
      </div>
    </section>
  );
}
