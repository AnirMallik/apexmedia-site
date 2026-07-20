'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const links = [
    ['/', 'Home'],
    ['/who-we-help/', 'Who We Help'],
    ['/services/', 'Services'],
    ['/capabilities/', 'Capabilities'],
    ['/about/', 'About'],
    ['/contact/', 'Contact'],
  ];

  return (
    <nav className="nav-root">
      <div className="nav-inner">
        <Link href="/" className="nav-logo">
          Apex<span>Media</span>
        </Link>
        <ul className="nav-links">
          {links.map(([href, label]) => (
            <li key={href}><Link href={href}>{label}</Link></li>
          ))}
        </ul>
        <button
          className="nav-hamburger"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span style={{ transform: open ? 'rotate(45deg) translate(5px, 5px)' : 'none', transition: '0.2s' }} />
          <span style={{ opacity: open ? 0 : 1, transition: '0.2s' }} />
          <span style={{ transform: open ? 'rotate(-45deg) translate(5px, -5px)' : 'none', transition: '0.2s' }} />
        </button>
      </div>
      <div className={`nav-mobile ${open ? 'open' : ''}`}>
        {links.map(([href, label]) => (
          <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>
        ))}
      </div>
    </nav>
  );
}
