import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: 'ApexMedia - Inbound Marketing & Web Strategy',
  description: 'Drive qualified leads with effective inbound marketing and web strategy',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ background: '#F5E6C8' }}>

        {/* Top bar */}
        <div style={{ background: '#1C1C1C', height: '4px' }} />

        {/* Nav */}
        <nav style={{ background: '#1C1C1C', borderBottom: '3px solid #B83232' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '68px' }}>
            <Link href="/" style={{ textDecoration: 'none' }}>
              <span style={{ color: '#F5E6C8', fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '22px', fontWeight: '900', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Apex<span style={{ color: '#B83232' }}>Media</span>
              </span>
            </Link>
            <ul style={{ display: 'flex', gap: '32px', listStyle: 'none', margin: 0, padding: 0 }}>
              {[['/', 'Home'], ['/about/', 'About'], ['/services/', 'Services'], ['/contact/', 'Contact']].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} style={{ color: '#EDD9A3', textDecoration: 'none', fontFamily: 'Arial, sans-serif', fontWeight: '600', fontSize: '14px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {children}

        {/* Footer */}
        <footer style={{ background: '#1C1C1C', borderTop: '3px solid #B83232', marginTop: '80px', padding: '40px 24px' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
            <span style={{ color: '#F5E6C8', fontFamily: "'Arial Black', Arial, sans-serif", fontWeight: '900', fontSize: '20px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Apex<span style={{ color: '#B83232' }}>Media</span>
            </span>
            <p style={{ color: '#C8922A', fontFamily: 'Arial, sans-serif', fontSize: '13px', letterSpacing: '0.05em', margin: 0 }}>
              &copy; 2026 ApexMedia. All rights reserved.
            </p>
          </div>
        </footer>

      </body>
    </html>
  );
}
