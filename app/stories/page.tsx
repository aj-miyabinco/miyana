const stories = [
  {
    title: 'Phi in Perfume Craft',
    summary: 'How Golden Ratio spacing guides bottle silhouettes and storytelling blocks.',
    slug: 'phi-in-perfume'
  },
  { title: 'Made in India, Loved Globally', summary: 'Make In India narrative for Bloomers and Gen-X trust.', slug: 'made-in-india' }
];

export default function StoriesPage() {
  return (
    <section className="section">
      <h1>Miyana Stories</h1>
      <div style={{ display: 'grid', gap: 'var(--space-lg)', gridTemplateColumns: '1fr 1.618fr' }}>
        {stories.map((story) => (
          <article key={story.slug} className="card-phi">
            <h3>{story.title}</h3>
            <p>{story.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
