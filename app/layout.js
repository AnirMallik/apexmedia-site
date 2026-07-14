import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: 'ApexMedia - Inbound Marketing & Web Strategy',
  description: 'Drive qualified leads with effective inbound marketing and web strategy',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="bg-white shadow-md">
          <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              ApexMedia
            </Link>
            <ul className="flex gap-8">
              <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
              <li><Link href="/about/" className="hover:text-blue-600">About Us</Link></li>
              <li><Link href="/services/" className="hover:text-blue-600">Services</Link></li>
              <li><Link href="/contact/" className="hover:text-blue-600">Contact</Link></li>
            </ul>
          </div>
        </nav>
        {children}
        <footer className="bg-gray-800 text-white mt-20 py-8">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p>&copy; 2026 ApexMedia. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
