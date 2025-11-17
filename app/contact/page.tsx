export default function ContactPage() {
  return (
    <section className="section">
      <h1>Contact Us</h1>
      <p>Reach us for bespoke gifting and compliance queries.</p>
      <form style={{ display: 'grid', gap: 'var(--space-md)', maxWidth: 480 }}>
        <label>
          Name
          <input aria-label="Name" style={{ width: '100%', padding: 'var(--space-sm)' }} />
        </label>
        <label>
          Email
          <input aria-label="Email" type="email" style={{ width: '100%', padding: 'var(--space-sm)' }} />
        </label>
        <label>
          Message
          <textarea aria-label="Message" style={{ width: '100%', padding: 'var(--space-sm)' }} />
        </label>
        <button className="button-primary" type="submit">Send</button>
      </form>
    </section>
  );
}
