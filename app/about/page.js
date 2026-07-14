export default function About() {
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
    <main style={{ background: s.cream }}>

      {/* Page Header */}
      <section style={{ background: s.charcoal, borderBottom: `4px solid ${s.crimson}`, padding: '64px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <p style={{ color: s.amber, fontFamily: 'Arial, sans-serif', fontWeight: '700', fontSize: '12px', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '12px' }}>Our Story</p>
          <h1 style={{ color: s.cream, fontFamily: "'Arial Black', Arial, sans-serif", fontWeight: '900', fontSize: 'clamp(36px, 5vw, 60px)', textTransform: 'uppercase', lineHeight: '1.05' }}>
            About <span style={{ color: s.crimson }}>ApexMedia</span>
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '64px' }}>
          <div>
            <p style={{ color: s.warmBrown, fontFamily: 'Georgia, serif', fontSize: '18px', lineHeight: '1.8', marginBottom: '24px', borderLeft: `4px solid ${s.crimson}`, paddingLeft: '20px' }}>
              ApexMedia was founded to give growing businesses the kind of marketing and web strategy usually reserved for companies with much bigger budgets.
            </p>
            <p style={{ color: s.warmBrown, fontFamily: 'Georgia, serif', fontSize: '16px', lineHeight: '1.8' }}>
              We audit your entire digital presence, identify where opportunities are hiding, and build systems to capture them. Every recommendation is backed by data and industry benchmarks.
            </p>
          </div>

          <div>
            <h2 style={{ color: s.charcoal, fontFamily: "'Arial Black', Arial, sans-serif", fontWeight: '900', fontSize: '22px', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '24px', paddingBottom: '12px', borderBottom: `2px solid ${s.amber}` }}>
              Our Mission
            </h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                'Become visible in Google, Bing, and AI search engines',
                'Build automated lead generation systems',
                'Develop competitive marketing strategies',
                'Win more business with better positioning',
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '16px' }}>
                  <span style={{ color: s.crimson, fontWeight: '900', fontFamily: 'Arial, sans-serif', fontSize: '16px', flexShrink: 0, marginTop: '2px' }}>▲</span>
                  <span style={{ color: s.warmBrown, fontFamily: 'Georgia, serif', fontSize: '15px', lineHeight: '1.6' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ background: s.charcoal, padding: '72px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <p style={{ color: s.amber, fontFamily: 'Arial, sans-serif', fontWeight: '700', fontSize: '12px', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '12px' }}>How We Work</p>
          <h2 style={{ color: s.cream, fontFamily: "'Arial Black', Arial, sans-serif", fontWeight: '900', fontSize: '32px', textTransform: 'uppercase', marginBottom: '48px' }}>
            The ApexMedia Difference
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2px', background: s.crimson }}>
            {[
              { step: '01', title: 'Find the Opportunity', body: 'Identify where the opportunity is hiding in your market.' },
              { step: '02', title: 'Build the System', body: 'Create the strategy or system to capture that opportunity.' },
              { step: '03', title: 'Make It Measurable', body: 'Track and prove results with clear, data-backed metrics.' },
            ].map((item) => (
              <div key={item.step} style={{ background: s.charcoal, padding: '40px 32px' }}>
                <p style={{ color: s.crimson, fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '40px', fontWeight: '900', lineHeight: 1, marginBottom: '16px' }}>{item.step}</p>
                <h3 style={{ color: s.cream, fontFamily: "'Arial Black', Arial, sans-serif", fontWeight: '900', fontSize: '17px', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>{item.title}</h3>
                <p style={{ color: s.creamDark, fontFamily: 'Georgia, serif', fontSize: '14px', lineHeight: '1.7' }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '72px 24px', textAlign: 'center', background: s.cream }}>
        <h2 style={{ color: s.charcoal, fontFamily: "'Arial Black', Arial, sans-serif", fontWeight: '900', fontSize: '28px', textTransform: 'uppercase', marginBottom: '16px' }}>
          Ready to Discuss Your Strategy?
        </h2>
        <p style={{ color: s.warmBrown, fontFamily: 'Georgia, serif', fontSize: '16px', marginBottom: '32px' }}>
          Let's talk about how ApexMedia can help your business grow.
        </p>
        <a href="/contact/" style={{ background: s.crimson, color: s.cream, padding: '14px 40px', textDecoration: 'none', fontFamily: 'Arial, sans-serif', fontWeight: '700', fontSize: '14px', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'inline-block' }}>
          Contact Us
        </a>
      </section>

    </main>
  );
}
