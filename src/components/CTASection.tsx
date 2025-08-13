import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-content">
          <h2 className="heading-2">Request Your Site Walk-Through and Free Evaluation</h2>
          <p className="body-text">
            Let our experts assess your cleaning needs and provide a customized solution 
            that fits your business perfectly. No obligation, just professional insights.
          </p>
          <Link href="/quote" className="btn-glass" style={{ fontSize: 'var(--text-lg)', padding: 'var(--space-lg) var(--space-2xl)' }}>
            SCHEDULE YOUR WALK-THROUGH NOW
          </Link>
        </div>
      </div>
    </section>
  );
}
