const reviews = [
  { name: 'Aarav', note: 'Balanced like a golden spiral — soothing yet present.' },
  { name: 'Lina', note: 'High-contrast Bloomers mode kept the checkout effortless.' }
];

export default function ReviewsPage() {
  return (
    <section className="section">
      <h1>Reviews & UGC</h1>
      <div style={{ display: 'grid', gap: 'var(--space-lg)', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
        {reviews.map((review) => (
          <article key={review.name} className="card-phi">
            <h3>{review.name}</h3>
            <p>{review.note}</p>
            <p>Image upload placeholder for compliance moderation.</p>
          </article>
        ))}
      </div>
    </section>
  );
}
