import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1 - Company Info */}
          <div>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 'var(--space-md)', 
              marginBottom: 'var(--space-lg)' 
            }}>
              <div style={{ 
                width: '3rem', 
                height: '3rem', 
                background: 'var(--color-primary)', 
                borderRadius: 'var(--radius-sm)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-text-on-primary)',
                fontWeight: 'var(--font-extrabold)',
                fontSize: 'var(--text-xl)',
                boxShadow: 'var(--shadow-md)'
              }}>
                IC
              </div>
              <span style={{ fontWeight: 'var(--font-bold)', fontSize: 'var(--text-xl)', color: 'var(--color-text-on-dark)' }}>IMPERIAL CLEANING</span>
            </div>
            <p className="body-text-sm">
              For over 30 years, our professional commercial cleaning company has been helping 
              organizations all across the United States stay clean, healthy, and safe.
            </p>
            <Link href="/quote" className="btn-glass" style={{ fontSize: 'var(--text-sm)', padding: 'var(--space-md) var(--space-lg)', marginTop: 'var(--space-md)' }}>
              Get a Quote
            </Link>
          </div>
          
          {/* Column 2 - Services Links */}
          <div>
            <h3 className="heading-3">Services</h3>
            <ul>
              <li><Link href="/commercial">Commercial Cleaning (Nationwide)</Link></li>
              <li><Link href="/residential">Residential (Long Island)</Link></li>
              <li><Link href="/green-cleaning">Green Cleaning Services</Link></li>
              <li><Link href="/quality-assurance">Quality Assurance</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/locations">Service Locations</Link></li>
            </ul>
          </div>
          
          {/* Column 3 - Contact Info */}
          <div>
            <h3 className="heading-3">Contact</h3>
            <div style={{ marginBottom: 'var(--space-lg)', color: 'rgba(255, 255, 255, 0.9)' }}>
              <div style={{ marginBottom: 'var(--space-sm)' }}>📞 1-877-WE-CLEAN</div>
              <div style={{ marginBottom: 'var(--space-sm)' }}>📞 1-877-932-5326</div>
              <div>✉️ info@imperialcleaning.com</div>
            </div>
            
            <div className="office-location">
              <strong>Headquarters</strong>
              151 Dixon Avenue, Amityville, NY 11701
            </div>
            
            <div className="office-location">
              <strong>New York City Office</strong>
              1350 Ave. of the Americas, Suite 347 & 350, New York, NY 10019
            </div>
            
            <div className="office-location">
              <strong>New Jersey Office</strong>
              400 Morris Avenue, Suite 107, Denville, NJ 07834
            </div>
            
            <div className="office-location">
              <strong>Ossining Office</strong>
              73 Croton Ave, Ossining, NY 10562
            </div>
            
            <div className="office-location">
              <strong>Florida Office</strong>
              20801 Biscayne Blvd, Suite 402, Miami, FL 33180
            </div>
            
            <div className="office-location">
              <strong>Las Vegas Office</strong>
              188 Golden Crown Avenue, Henderson, NV 89002
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          © Imperial Cleaning 2025 · Web design by Imperial Cleaning · 
          <Link href="/privacy">Privacy Policy</Link> · 
          <Link href="/sitemap">HTML Sitemap</Link>
        </div>
      </div>
    </footer>
  );
}
