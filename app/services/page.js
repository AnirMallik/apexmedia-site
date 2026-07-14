const s = {
  cream: '#F5E6C8', creamDark: '#EDD9A3', charcoal: '#1C1C1C',
  crimson: '#B83232', crimsonDark: '#8B1A1A', amber: '#C8922A', warmBrown: '#5A4A3A',
};

const services = [
  { num: '01', title: 'Website Performance & AI Search Visibility', description: 'Full digital presence audits covering technical SEO, structured data, and visibility across search engines and AI answer engines.', features: ['SEO audits', 'GA4 & call tracking', 'Google Business Profile', 'Review generation'] },
  { num: '02', title: 'Automated Lead Generation', description: 'Build systems that scan public data sources and deliver scored, ranked leads directly to your CRM before competitors know they exist.', features: ['Data source integration', 'Lead scoring', 'CRM automation', 'Lead routing'] },
  { num: '03', title: 'Marketing Strategy & Pitch Development', description: 'High-stakes strategy for competitive RFPs, board presentations, and enterprise pitches — backed by verified industry benchmarks.', features: ['Audience segmentation', 'Competitive positioning', 'Data-backed planning', 'Pitch development'] },
  { num: '04', title: 'Content & Positioning Strategy', description: 'Establish your brand as the authority in your market with compelling positioning and a content strategy built to convert.', features: ['Market analysis', 'Positioning strategy', 'Content roadmap', 'Messaging framework'] },
];

export default function Services() {
  return (
    <main style={{ background: s.cream }}>

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <p style={{ color: s.amber, fontFamily: 'Arial, sans-serif', fontWeight: '700', fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '10px' }}>What We Offer</p>
          <h1 style={{ color: s.cream, fontFamily: "'Arial Black', Arial, sans-serif", fontWeight: '900', fontSize: 'clamp(32px, 5vw, 60px)', textTransform: 'uppercase', lineHeight: '1.05' }}>
            Our <span style={{ color: s.crimson }}>Services</span>
          </h1>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-std">
        <div className="container">
          <div className="grid-2">
            {services.map((svc) => (
              <div key={svc.num} className="card" style={{ background: s.cream }}>
                <p style={{ color: s.crimson, fontFamily: "'Arial Black', Arial, sans-serif", fontWeight: '900', fontSize: '32px', lineHeight: 1, marginBottom: '14px' }}>{svc.num}</p>
                <h3 style={{ color: s.charcoal, fontFamily: "'Arial Black', Arial, sans-serif", fontWeight: '900', fontSize: 'clamp(16px, 2vw, 20px)', textTransform: 'uppercase', letterSpacing: '0.02em', marginBottom: '12px', lineHeight: '1.2' }}>
                  {svc.title}
                </h3>
                <p style={{ color: s.warmBrown, fontFamily: 'Georgia, serif', fontSize: '15px', lineHeight: '1.7', marginBottom: '20px' }}>
                  {svc.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {svc.features.map((f, i) => (
                    <span key={i} style={{ background: s.charcoal, color: s.creamDark, fontFamily: 'Arial, sans-serif', fontSize: '11px', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', padding: '4px 10px' }}>
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="section-std" style={{ background: s.creamDark, borderTop: `3px solid ${s.amber}`, borderBottom: `3px solid ${s.amber}` }}>
        <div className="container">
          <p style={{ color: s.crimson, fontFamily: 'Arial, sans-serif', fontWeight: '700', fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '10px' }}>The Process</p>
          <h2 style={{ color: s.charcoal, fontFamily: "'Arial Black', Arial, sans-serif", fontWeight: '900', fontSize: 'clamp(22px, 4vw, 32px)', textTransform: 'uppercase', marginBottom: '40px' }}>How We Work</h2>
          <div className="grid-3-loose">
            {[
              { n: '1', title: 'Discovery & Audit', body: 'We analyze your current state and identify where opportunity is hiding.' },
              { n: '2', title: 'Strategy Development', body: 'Build a data-backed roadmap with clear, measurable goals.' },
              { n: '3', title: 'Implementation', body: 'Execute the plan and track results continuously.' },
            ].map((item) => (
              <div key={item.n} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <span style={{ color: s.crimson, fontFamily: "'Arial Black', Arial, sans-serif", fontWeight: '900', fontSize: '44px', lineHeight: 1, flexShrink: 0 }}>{item.n}</span>
                <div>
                  <h3 style={{ color: s.charcoal, fontFamily: "'Arial Black', Arial, sans-serif", fontWeight: '900', fontSize: '15px', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>{item.title}</h3>
                  <p style={{ color: s.warmBrown, fontFamily: 'Georgia, serif', fontSize: '14px', lineHeight: '1.7' }}>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-std" style={{ background: s.crimsonDark, textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: s.cream, fontFamily: "'Arial Black', Arial, sans-serif", fontWeight: '900', fontSize: 'clamp(20px, 4vw, 28px)', textTransform: 'uppercase', marginBottom: '12px' }}>
            Let's Discuss Your Project
          </h2>
          <p style={{ color: s.creamDark, fontFamily: 'Georgia, serif', fontSize: '16px', marginBottom: '28px' }}>
            Every engagement starts with understanding your goals.
          </p>
          <a href="/contact/" style={{ background: s.amber, color: s.charcoal, padding: '14px 40px', textDecoration: 'none', fontFamily: 'Arial, sans-serif', fontWeight: '700', fontSize: '14px', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'inline-block' }}>
            Schedule a Consultation
          </a>
        </div>
      </section>

    </main>
  );
}
