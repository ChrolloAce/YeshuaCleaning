import Link from 'next/link';

export default function Header() {
  return (
    <>
      {/* Utility Bar */}
      <div className="utility-bar">
        <div className="container">
          <span>1-877-WE-CLEAN | 1-877-932-5326</span>
          <div className="social-icons">
            <span>📘</span>
            <span>🐦</span>
            <span>📷</span>
            <span>💼</span>
            <span>⭐</span>
            <span>🔍</span>
          </div>
        </div>
      </div>
      
      {/* Main Header */}
      <header className="header">
        <div className="container">
          <Link href="/" className="logo">
            <div className="logo-icon">YC</div>
            <span>YESHUA CLEANING</span>
          </Link>
          
          <nav>
            <Link href="/commercial">Commercial</Link>
            <Link href="/residential">Residential</Link>
            <Link href="/about">About</Link>
          </nav>
          
          <div className="actions">
            <span className="lang">Select Language ▾</span>
            <Link href="/jobs" className="btn btn-primary">Jobs/Trabajos</Link>
            <Link href="/quote" className="btn btn-outline">Get a Quote</Link>
          </div>
        </div>
      </header>
    </>
  );
}
