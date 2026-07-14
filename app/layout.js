import NavBar from './NavBar';
import './globals.css';

export const metadata = {
  title: 'ApexMedia - Inbound Marketing & Web Strategy',
  description: 'Drive qualified leads with effective inbound marketing and web strategy',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ background: '#F5E6C8', margin: 0 }}>
        <NavBar />
        {children}
        <footer style={{ background: '#1C1C1C', borderTop: '3px solid #B83232', padding: '36px 0' }}>
          <div className="footer-inner">
            <span style={{ color: '#F5E6C8', fontFamily: "'Arial Black', Arial, sans-serif", fontWeight: '900', fontSize: '18px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Apex<span style={{ color: '#B83232' }}>Media</span>
            </span>
            <p style={{ color: '#C8922A', fontFamily: 'Arial, sans-serif', fontSize: '12px', letterSpacing: '0.05em', margin: 0 }}>
              &copy; 2026 ApexMedia. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
