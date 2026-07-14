export default function Services() {
  const s = {
    cream: '#F5E6C8',
    creamDark: '#EDD9A3',
    charcoal: '#1C1C1C',
    crimson: '#B83232',
    crimsonDark: '#8B1A1A',
    amber: '#C8922A',
    warmBrown: '#5A4A3A',
  };

  const services = [
    {
      num: '01',
      title: 'Website Performance & AI Search Visibility',
      description: 'Full digital presence audits covering technical SEO, structured data, and visibility across search engines and AI answer engines.',
      features: ['SEO audits', 'GA4 & call tracking', 'Google Business Profile', 'Review generation'],
    },
    {
      num: '02',
      title: 'Automated Lead Generation',
      description: 'Build systems that scan public data sources and deliver scored, ranked leads directly to your CRM before competitors know they exist.',
      features: ['Data source integration', 'Lead scoring', 'CRM automation', 'Lead routing'],
    },
    {
      num: '03',
      title: 'Marketing Strategy & Pitch Development',
      description: 'High-stakes strategy for competitive RFPs, board presentations, and enterprise pitches — backed by verified industry benchmarks.',
      features: ['Audience segmentation', 'Competitive positioning', 'Data-backed planning', 'Pitch development'],
    },
    {
      num: '04',
      title: 'Content & Positioning Strategy',
      description: 'Establish your brand as the authority in your market with compelling positioning and a content strategy built to convert.',
      features: ['Market analysis', 'Positioning strategy', 'Content roadmap', 'Messaging framework'],
    },
  ];

  return (
    <main style={{ background: s.cream }}>

      {/* Page Header */}
      <section style={{ background: s.charcoal, borderBottom: `4px solid ${s.crimson}`, padding: '64px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <p style={{ color: s.amber, fontFamily: 'Arial, sans-serif', fontWeight: '700', fontSize: '12px', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '12px' }}>What We Offer</p>
          <h1 style={{ color: s.cream, fontFamily: "'Arial Black', Arial, sans-serif", fontWeight: '900', fontSize: 'clamp(36px, 5vw, 60px)', textTransform: 'uppercase', lineHeight: '1.05' }}>
            Our <span style={{ color: s.crimson }}>Services</span>
          </h1>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(480px, 1fr))', gap: '2px', background: s.charcoal }}>
            {services.map((service) => (
              <div key={service.num} style={{ background: s.cream, padding: '48px 40px', borderBottom: `3px solid transparent`, transition: 'border-color 0.2s' }}>
                <p style={{ color: s.crimson, fontFamily: "'Arial Black', Arial, sans-serif", fontWeight: '900', fontSize: '40px', lineHeight: 1, marginBottom: '16px' }}>{service.num}</p>
                <h3 style={{ color: s.charcoal, fontFamily: "'Arial Black', Arial, sans-serif", fontWeight: '900', fontSize: '20px', textTransform: 'uppercase', letterSpacing: '0.03em', marginBottom: '14px', lineHeight: '1.2' }}>
                  {service.title}
                </h3>
                <p style={{ color: s.warmBrown, fontFamily: 'Georgia, serif', fontSize: '15px', lineHeight: '1.7', marginBottom: '24px' }}>
                  {service.description}
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {service.features.map((f, i) => (
                    <li key={i} style={{ background: s.charcoal, color: s.creamDark, fontFamily: 'Arial, sans-serif', fontSize: '12px', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', padding: '4px 12px' }}>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section style={{ background: s.creamDark, borderTop: `3px solid ${s.amber}`, borderBottom: `3px solid ${s.amber}`, padding: '72px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <p style={{ color: s.crimson, fontFamily: 'Arial, sans-serif', fontWeight: '700', fontSize: '12px', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '12px' }}>The Process</p>
          <h2 style={{ color: s.charcoal, fontFamily: "'Arial Black', Arial, sans-serif", fontWeight: '900', fontSize: '32px', textTransform: 'uppercase', marginBottom: '48px' }}>How We Work</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '40px' }}>
            {[
              { n: '1', title: 'Discovery & Audit', body: 'We analyze your current state and identify where opportunity is hiding.' },
              { n: '2', title: 'Strategy Development', body: 'Build a data-backed roadmap with clear, measurable goals.' },
              { n: '3', title: 'Implementation', body: 'Execute the plan and track results continuously.' },
            ].map((item) => (
              <div key={item.n} style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <span style={{ color: s.crimson, fontFamily: "'Arial Black', Arial, sans-serif", fontWeight: '900', fontSize: '48px', lineHeight: 1, flexShrink: 0 }}>{item.n}</span>
                <div>
                  <h3 style={{ color: s.charcoal, fontFamily: "'Arial Black', Arial, sans-serif", fontWeight: '900', fontSize: '16px', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>{item.title}</h3>
                  <p style={{ color: s.warmBrown, fontFamily: 'Georgia, serif', fontSize: '14px', lineHeight: '1.7' }}>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: s.crimsonDark, padding: '64px 24px', textAlign: 'center' }}>
        <h2 style={{ color: s.cream, fontFamily: "'Arial Black', Arial, sans-serif", fontWeight: '900', fontSize: '28px', textTransform: 'uppercase', marginBottom: '12px' }}>
          Let's Discuss Your Project
        </h2>
        <p style={{ color: s.creamDark, fontFamily: 'Georgia, serif', fontSize: '16px', marginBottom: '32px' }}>
          Every engagement starts with understanding your goals.
        </p>
        <a href="/contact/" style={{ background: s.amber, color: s.charcoal, padding: '14px 40px', textDecoration: 'none', fontFamily: 'Arial, sans-serif', fontWeight: '700', fontSize: '14px', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'inline-block' }}>
          Schedule a Consultation
        </a>
      </section>

    </main>
  );
}
