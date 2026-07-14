const s = {
  cream: '#F5E6C8', creamDark: '#EDD9A3', charcoal: '#1C1C1C',
  crimson: '#B83232', crimsonDark: '#8B1A1A', amber: '#C8922A', warmBrown: '#5A4A3A',
};

export default function About() {
  return (
    <main style={{ background: s.cream }}>

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <p style={{ color: s.amber, fontFamily: 'Arial, sans-serif', fontWeight: '700', fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '10px' }}>Our Story</p>
          <h1 style={{ color: s.cream, fontFamily: "'Arial Black', Arial, sans-serif", fontWeight: '900', fontSize: 'clamp(32px, 5vw, 60px)', textTransform: 'uppercase', lineHeight: '1.05' }}>
            About <span style={{ color: s.crimson }}>ApexMedia</span>
          </h1>
        </div>
      </section>

      {/* Intro + Mission */}
      <section className="section-std">
        <div className="container">
          <div className="grid-2-loose">
            <div>
              <p style={{ color: s.warmBrown, fontFamily: 'Georgia, serif', fontSize: 'clamp(15px, 2vw, 18px)', lineHeight: '1.8', marginBottom: '20px', borderLeft: `4px solid ${s.crimson}`, paddingLeft: '18px' }}>
                ApexMedia was founded to give growing businesses the kind of marketing and web strategy usually reserved for companies with much bigger budgets.
              </p>
              <p style={{ color: s.warmBrown, fontFamily: 'Georgia, serif', fontSize: '15px', lineHeight: '1.8' }}>
                We audit your entire digital presence, identify where opportunities are hiding, and build systems to capture them. Every recommendation is backed by data and industry benchmarks.
              </p>
            </div>
            <div>
              <h2 style={{ color: s.charcoal, fontFamily: "'Arial Black', Arial, sans-serif", fontWeight: '900', fontSize: '20px', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '20px', paddingBottom: '10px', borderBottom: `2px solid ${s.amber}` }}>
                Our Mission
              </h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  'Become visible in Google, Bing, and AI search engines',
                  'Build automated lead generation systems',
                  'Develop competitive marketing strategies',
                  'Win more business with better positioning',
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '14px' }}>
                    <span style={{ color: s.crimson, fontWeight: '900', fontFamily: 'Arial, sans-serif', fontSize: '14px', flexShrink: 0, marginTop: '2px' }}>▲</span>
                    <span style={{ color: s.warmBrown, fontFamily: 'Georgia, serif', fontSize: '15px', lineHeight: '1.6' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-std" style={{ background: s.charcoal }}>
        <div className="container">
          <p style={{ color: s.amber, fontFamily: 'Arial, sans-serif', fontWeight: '700', fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '10px' }}>How We Work</p>
          <h2 style={{ color: s.cream, fontFamily: "'Arial Black', Arial, sans-serif", fontWeight: '900', fontSize: 'clamp(22px, 4vw, 32px)', textTransform: 'uppercase', marginBottom: '40px' }}>
            The ApexMedia Difference
          </h2>
          <div className="grid-3">
            {[
              { step: '01', title: 'Find the Opportunity', body: 'Identify where the opportunity is hiding in your market.' },
              { step: '02', title: 'Build the System', body: 'Create the strategy or system to capture that opportunity.' },
              { step: '03', title: 'Make It Measurable', body: 'Track and prove results with clear, data-backed metrics.' },
            ].map((item) => (
              <div key={item.step} className="card" style={{ background: s.charcoal }}>
                <p style={{ color: s.crimson, fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '36px', fontWeight: '900', lineHeight: 1, marginBottom: '14px' }}>{item.step}</p>
                <h3 style={{ color: s.cream, fontFamily: "'Arial Black', Arial, sans-serif", fontWeight: '900', fontSize: '16px', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '10px' }}>{item.title}</h3>
                <p style={{ color: s.creamDark, fontFamily: 'Georgia, serif', fontSize: '14px', lineHeight: '1.7' }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: s.charcoal, fontFamily: "'Arial Black', Arial, sans-serif", fontWeight: '900', fontSize: 'clamp(20px, 4vw, 28px)', textTransform: 'uppercase', marginBottom: '14px' }}>
            Ready to Discuss Your Strategy?
          </h2>
          <p style={{ color: s.warmBrown, fontFamily: 'Georgia, serif', fontSize: '16px', marginBottom: '28px' }}>
            Let's talk about how ApexMedia can help your business grow.
          </p>
          <a href="/contact/" style={{ background: s.crimson, color: s.cream, padding: '14px 40px', textDecoration: 'none', fontFamily: 'Arial, sans-serif', fontWeight: '700', fontSize: '14px', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'inline-block' }}>
            Contact Us
          </a>
        </div>
      </section>

    </main>
  );
}
