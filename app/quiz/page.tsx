'use client';
import { useState } from 'react';

const questions = [
  'Do you prefer warm evenings or fresh mornings?',
  'Pick a city: Kyoto, Marrakech, or Jaipur?',
  'Choose a vibe: Regal, Serene, or Playful?'
];

export default function QuizPage() {
  const [answers, setAnswers] = useState<string[]>([]);

  return (
    <section className="section">
      <h1>Scent Discovery Quiz</h1>
      <p>Cards sized with phi ratio for Gen-Alpha playfulness.</p>
      <div style={{ display: 'grid', gap: 'var(--space-lg)' }}>
        {questions.map((question, index) => (
          <div key={question} className="card-phi" role="group" aria-label={question}>
            <p>{question}</p>
            <input
              aria-label={`Answer ${index + 1}`}
              style={{ width: '100%', padding: 'var(--space-sm)' }}
              onChange={(event) => {
                const next = [...answers];
                next[index] = event.target.value;
                setAnswers(next);
              }}
            />
          </div>
        ))}
      </div>
      <p>Result placeholder: {answers.filter(Boolean).length === questions.length ? 'Match ready' : 'Complete to see match'}</p>
    </section>
  );
}
