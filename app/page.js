export default function Home() {
  const s = {
    cream: '#F5E6C8',
    creamDark: '#EDD9A3',
    charcoal: '#1C1C1C',
    crimson: '#B83232',
    crimsonDark: '#8B1A1A',
    amber: '#C8922A',
    warmBrown: '#5A4A3A',
  };

  return (
    <main>

      {/* Hero */}
      <section style={{ background: s.charcoal, borderBottom: `4px solid ${s.crimson}`, padding: '96px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <p style={{ color: s.amber, fontFamily: 'Arial, sans-serif', fontWeight: '700', fontSize: '13px', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '20px' }}>
            ▲ Inbound Marketing &amp; Web Strategy
          </p>
          <h1 style={{ color: s.cream, fontFamily: "'Arial Black', Arial, sans-serif", fontWeight: '900', fontSize: 'clamp(40px, 6vw, 72px)', lineHeight: '1.05', textTransform: 'uppercase', marginBottom: '28px', maxWidth: '800px' }}>
            Drive Qualified Traffic.<br />
            <span style={{ color: s.crimson }}>Win More Business.</span>
          </h1>
          <p style={{ color: s.creamDark, fontFamily: 'Georgia, serif', fontSize: '18px', lineHeight: '1.7', marginBottom: '44px', maxWidth: '560px' }}>
            Strategy-driven marketing that turns visitors into customers — built for businesses that demand measurable results.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a href="/contact/" style={{ background: s.crimson, color: s.cream, padding: '14px 36px', textDecoration: 'none', fontFamily: 'Arial, sans-serif', fontWeight: '700', fontSize: '14px', letterSpacing: '0.1em', textTransform: 'uppercase', border: `2px solid ${s.crimson}`, display: 'inline-block' }}>
              Get Started
            </a>
            <a href="/services/" style={{ background: 'transparent', color: s.creamDark, padding: '14px 36px', textDecoration: 'none', fontFamily: 'Arial, sans-serif', fontWeight: '700', fontSize: '14px', letterSpacing: '0.1em', textTransform: 'uppercase', border: `2px solid ${s.creamDark}`, display: 'inline-block' }}>
              Our Services
            </a>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section style={{ background: s.cream, padding: '80px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <p style={{ color: s.crimson, fontFamily: 'Arial, sans-serif', fontWeight: '700', fontSize: '12px', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '12px' }}>Why ApexMedia</p>
          <h2 style={{ color: s.charcoal, fontFamily: "'Arial Black', Arial, sans-serif", fontWeight: '900', fontSize: '36px', textTransform: 'uppercase', marginBottom: '48px', borderBottom: `3px solid ${s.crimson}`, paddingBottom: '16px', display: 'inline-block' }}>
            Built to Win
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2px', background: s.charcoal }}>
            {[
              { num: '01', title: 'Targeted Traffic', body: "We don't just bring visitors — we bring qualified leads ready to buy." },
              { num: '02', title: 'Data-Driven', body: 'Every decision backed by analytics and measurable results.' },
              { num: '03', title: 'Fast Growth', body: 'See results in weeks, not months. Proven strategies that work.' },
            ].map((item) => (
              <div key={item.num} style={{ background: s.cream, padding: '40px 32px' }}>
                <p style={{ color: s.crimson, fontFamily: "'Arial Black', Arial, sans-serif", fontWeight: '900', fontSize: '36px', marginBottom: '12px', lineHeight: 1 }}>{item.num}</p>
                <h3 style={{ color: s.charcoal, fontFamily: "'Arial Black', Arial, sans-serif", fontWeight: '900', fontSize: '18px', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>{item.title}</h3>
                <p style={{ color: s.warmBrown, fontFamily: 'Georgia, serif', fontSize: '15px', lineHeight: '1.7' }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{ background: s.crimsonDark, borderTop: `4px solid ${s.amber}`, borderBottom: `4px solid ${s.amber}`, padding: '64px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ color: s.cream, fontFamily: "'Arial Black', Arial, sans-serif", fontWeight: '900', fontSize: '32px', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '12px' }}>
            Ready to Transform Your Marketing?
          </h2>
          <p style={{ color: s.creamDark, fontFamily: 'Georgia, serif', fontSize: '16px', marginBottom: '32px' }}>
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
