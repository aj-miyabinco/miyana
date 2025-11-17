export default function GalleryPage() {
  return (
    <section className="section">
      <h1>Influencer Gallery</h1>
      <p>Golden spiral focal points guide the hero crop for each influencer portrait.</p>
      <div style={{ display: 'grid', gap: 'var(--space-lg)', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="card-phi" aria-label={`Influencer ${item}`}>
            <p>Influencer #{item}</p>
            <p>UGC alignment notes: keep eyes on phi intersection.</p>
          </div>
        ))}
      </div>
    </section>
  );
}
