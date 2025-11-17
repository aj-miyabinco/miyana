export default function SocialPage() {
  return (
    <section className="section">
      <h1>Social-first content</h1>
      <p>Instagram and TikTok placeholders following Golden Ratio vertical rhythm.</p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.618fr', gap: 'var(--space-lg)' }}>
        <div style={{ aspectRatio: '1 / 1.618', background: '#c8a96a', borderRadius: 'var(--radius-card)' }} aria-label="Instagram embed" />
        <div style={{ aspectRatio: '1 / 1.618', background: '#f3d9d0', borderRadius: 'var(--radius-card)' }} aria-label="TikTok embed" />
      </div>
    </section>
  );
}
