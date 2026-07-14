const s = {
  cream: '#F5E6C8', creamDark: '#EDD9A3', charcoal: '#1C1C1C',
  crimson: '#B83232', crimsonDark: '#8B1A1A', amber: '#C8922A', warmBrown: '#5A4A3A',
};

export default function Home() {
  return (
    <main>

      {/* Hero */}
      <section className="section-hero" style={{ background: s.charcoal, borderBottom: `4px solid ${s.crimson}` }}>
        <div className="container">
          <p style={{ color: s.amber, fontFamily: 'Arial, sans-serif', fontWeight: '700', fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '16px' }}>
            ▲ Inbound Marketing &amp; Web Strategy
          </p>
          <h1 style={{ color: s.cream, fontFamily: "'Arial Black', Arial, sans-serif", fontWeight: '900', fontSize: 'clamp(32px, 6vw, 72px)', lineHeight: '1.05', textTransform: 'uppercase', marginBottom: '24px' }}>
            Drive Qualified Traffic.<br />
            <span style={{ color: s.crimson }}>Win More Business.</span>
          </h1>
          <p style={{ color: s.creamDark, fontFamily: 'Georgia, serif', fontSize: 'clamp(15px, 2vw, 18px)', lineHeight: '1.7', marginBottom: '40px', maxWidth: '560px' }}>
            Strategy-driven marketing that turns visitors into customers — built for businesses that demand measurable results.
          </p>
          <div className="btn-row">
            <a href="/contact/" style={{ background: s.crimson, color: s.cream, padding: '14px 36px', textDecoration: 'none', fontFamily: 'Arial, sans-serif', fontWeight: '700', fontSize: '14px', letterSpacing: '0.1em', textTransform: 'uppercase', border: `2px solid ${s.crimson}`, display: 'block', textAlign: 'center' }}>
              Get Started
            </a>
            <a href="/services/" style={{ background: 'transparent', color: s.creamDark, padding: '14px 36px', textDecoration: 'none', fontFamily: 'Arial, sans-serif', fontWeight: '700', fontSize: '14px', letterSpacing: '0.1em', textTransform: 'uppercase', border: `2px solid ${s.creamDark}`, display: 'block', textAlign: 'center' }}>
              Our Services
            </a>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="section-std" style={{ background: s.cream }}>
        <div className="container">
          <p style={{ color: s.crimson, fontFamily: 'Arial, sans-serif', fontWeight: '700', fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '10px' }}>Why ApexMedia</p>
          <h2 style={{ color: s.charcoal, fontFamily: "'Arial Black', Arial, sans-serif", fontWeight: '900', fontSize: 'clamp(24px, 4vw, 36px)', textTransform: 'uppercase', marginBottom: '40px', borderBottom: `3px solid ${s.crimson}`, paddingBottom: '14px', display: 'inline-block' }}>
            Built to Win
          </h2>
          <div className="grid-3">
            {[
              { num: '01', title: 'Targeted Traffic', body: "We don't just bring visitors — we bring qualified leads ready to buy." },
              { num: '02', title: 'Data-Driven', body: 'Every decision backed by analytics and measurable results.' },
              { num: '03', title: 'Fast Growth', body: 'See results in weeks, not months. Proven strategies that work.' },
            ].map((item) => (
              <div key={item.num} className="card" style={{ background: s.cream }}>
                <p style={{ color: s.crimson, fontFamily: "'Arial Black', Arial, sans-serif", fontWeight: '900', fontSize: '32px', marginBottom: '10px', lineHeight: 1 }}>{item.num}</p>
                <h3 style={{ color: s.charcoal, fontFamily: "'Arial Black', Arial, sans-serif", fontWeight: '900', fontSize: '17px', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '10px' }}>{item.title}</h3>
                <p style={{ color: s.warmBrown, fontFamily: 'Georgia, serif', fontSize: '15px', lineHeight: '1.7' }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section-std" style={{ background: s.crimsonDark, borderTop: `4px solid ${s.amber}`, borderBottom: `4px solid ${s.amber}`, textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: s.cream, fontFamily: "'Arial Black', Arial, sans-serif", fontWeight: '900', fontSize: 'clamp(22px, 4vw, 32px)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '12px' }}>
            Ready to Transform Your Marketing?
          </h2>
          <p style={{ color: s.creamDark, fontFamily: 'Georgia, serif', fontSize: '16px', marginBottom: '28px' }}>
            Let's build a strategy that puts your business in front of the right people.
          </p>
          <a href="/contact/" style={{ background: s.amber, color: s.charcoal, padding: '14px 40px', textDecoration: 'none', fontFamily: 'Arial, sans-serif', fontWeight: '700', fontSize: '14px', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'inline-block' }}>
            Schedule a Consultation
          </a>
        </div>
      </section>

    </main>
  );
}
