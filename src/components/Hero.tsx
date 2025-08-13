import Link from 'next/link';

export default function Hero() {
  return (
    <section className="hero-original">
      <div className="hero-background"></div>
      <div className="container">
        <div className="hero-card">
          <h1>A Highly-Trained, Professional Commercial Cleaning Company</h1>
          <p>
            From workplaces to retail spaces, Yeshua Cleaning sets a new standard for clean, healthy, and safe.
          </p>
          <Link href="/quote" className="hero-cta-button">
            SCHEDULE A WALK-THROUGH →
          </Link>
          <div className="hero-red-accent"></div>
        </div>
      </div>
    </section>
  );
}
