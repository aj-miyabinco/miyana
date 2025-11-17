const faqs = [
  { q: 'Do you ship across India?', a: 'Yes, with Make in India fulfillment partners and DPDP-ready data handling.' },
  { q: 'Are the perfumes gender-neutral?', a: 'Many are designed to be genderless; filters available in shop.' }
];

export default function FaqPage() {
  return (
    <section className="section">
      <h1>FAQs</h1>
      <ul>
        {faqs.map((item) => (
          <li key={item.q} style={{ marginBottom: 'var(--space-md)' }}>
            <strong>{item.q}</strong>
            <p>{item.a}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
