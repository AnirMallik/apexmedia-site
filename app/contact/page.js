'use client';

import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const s = {
    cream: '#F5E6C8',
    creamDark: '#EDD9A3',
    charcoal: '#1C1C1C',
    crimson: '#B83232',
    crimsonDark: '#8B1A1A',
    amber: '#C8922A',
    warmBrown: '#5A4A3A',
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    background: s.creamDark,
    border: `2px solid ${s.amber}`,
    borderRadius: 0,
    fontFamily: 'Georgia, serif',
    fontSize: '15px',
    color: s.charcoal,
    outline: 'none',
    boxSizing: 'border-box',
  };

  const labelStyle = {
    display: 'block',
    color: s.charcoal,
    fontFamily: 'Arial, sans-serif',
    fontWeight: '700',
    fontSize: '12px',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    marginBottom: '8px',
  };

  return (
    <main style={{ background: s.cream }}>

      {/* Page Header */}
      <section style={{ background: s.charcoal, borderBottom: `4px solid ${s.crimson}`, padding: '64px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <p style={{ color: s.amber, fontFamily: 'Arial, sans-serif', fontWeight: '700', fontSize: '12px', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '12px' }}>Get in Touch</p>
          <h1 style={{ color: s.cream, fontFamily: "'Arial Black', Arial, sans-serif", fontWeight: '900', fontSize: 'clamp(36px, 5vw, 60px)', textTransform: 'uppercase', lineHeight: '1.05' }}>
            Contact <span style={{ color: s.crimson }}>Us</span>
          </h1>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '64px' }}>

          {/* Left info */}
          <div>
            <h2 style={{ color: s.charcoal, fontFamily: "'Arial Black', Arial, sans-serif", fontWeight: '900', fontSize: '24px', textTransform: 'uppercase', marginBottom: '20px', paddingBottom: '12px', borderBottom: `3px solid ${s.crimson}` }}>
              Let's Talk
            </h2>
            <p style={{ color: s.warmBrown, fontFamily: 'Georgia, serif', fontSize: '16px', lineHeight: '1.8', marginBottom: '40px' }}>
              Have questions about your inbound marketing strategy? We'd love to hear from you. Fill out the form and we'll get back to you within 24 hours.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              {[
                { label: 'Response Time', value: 'Within 24 business hours' },
                { label: 'Best For', value: 'Questions, consultations, and project inquiries' },
              ].map((item) => (
                <div key={item.label} style={{ borderLeft: `4px solid ${s.amber}`, paddingLeft: '16px' }}>
                  <p style={{ color: s.crimson, fontFamily: 'Arial, sans-serif', fontWeight: '700', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '4px' }}>{item.label}</p>
                  <p style={{ color: s.warmBrown, fontFamily: 'Georgia, serif', fontSize: '15px' }}>{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div style={{ background: s.charcoal, padding: '48px 40px' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <p style={{ color: s.amber, fontFamily: "'Arial Black', Arial, sans-serif", fontWeight: '900', fontSize: '48px', marginBottom: '16px' }}>▲</p>
                <h3 style={{ color: s.cream, fontFamily: "'Arial Black', Arial, sans-serif", fontWeight: '900', fontSize: '24px', textTransform: 'uppercase', marginBottom: '12px' }}>Message Sent!</h3>
                <p style={{ color: s.creamDark, fontFamily: 'Georgia, serif', fontSize: '15px' }}>
                  Thanks for reaching out. We'll be in touch soon.
                </p>
              </div>
            ) : (
              <form action="https://formspree.io/f/mgogebjp" method="POST" onSubmit={() => setSubmitted(true)}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div>
                    <label style={labelStyle}>Name</label>
                    <input type="text" name="name" required style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Email</label>
                    <input type="email" name="email" required style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Phone <span style={{ color: s.amber, fontSize: '11px' }}>(optional)</span></label>
                    <input type="tel" name="phone" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Message</label>
                    <textarea name="message" rows="5" required style={{ ...inputStyle, resize: 'vertical' }}></textarea>
                  </div>
                  <button type="submit" style={{ background: s.crimson, color: s.cream, border: 'none', padding: '14px', fontFamily: 'Arial, sans-serif', fontWeight: '700', fontSize: '14px', letterSpacing: '0.12em', textTransform: 'uppercase', cursor: 'pointer', width: '100%' }}>
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </section>

    </main>
  );
}
