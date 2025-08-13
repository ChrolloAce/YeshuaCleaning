import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  return (
    <section className="section section-white">
      <div className="container">
        <div className="text-center mb-2xl">
          <h2 className="heading-2">Professional Commercial Cleaning Services</h2>
          <p className="body-text text-secondary" style={{ maxWidth: '700px', margin: '0 auto' }}>
            Setting the gold standard for commercial cleaning excellence across America
          </p>
        </div>
        
        <div className="about-grid">
          <div className="about-image">
            <Image 
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
              alt="Modern office workspace with professional cleaning" 
              width={800}
              height={350}
              priority
            />
          </div>
          
          <div>
            <div className="eyebrow">ABOUT IMPERIAL CLEANING</div>
            <h3 className="heading-3">Commercial Cleaners Committed to Excellence</h3>
            <p className="body-text-sm">
              We are an elite, nationwide team of certified Custodial Technicians 
              who take pride in serving American businesses with our luxury 
              commercial and residential cleaning services.
            </p>
            <p className="body-text-sm">
              For over 30 years, our professional commercial cleaning company has been helping 
              organizations all across the United States stay clean, healthy, and safe. 
              Our commitment to excellence and attention to detail sets us apart.
            </p>
            <Link href="/about" className="btn-primary">
              LEARN MORE ABOUT US
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
