import { IconBadge, IconHealthcare, IconInsurance, IconEcommerce } from '../icons';

const s = {
  cream: '#F5E6C8', creamDark: '#EDD9A3', charcoal: '#1C1C1C',
  crimson: '#B83232', crimsonDark: '#8B1A1A', amber: '#C8922A', warmBrown: '#5A4A3A',
};

export const metadata = {
  title: 'Who We Help - ApexMedia',
  description: 'ApexMedia builds inbound marketing systems for healthcare providers, insurance agencies, and ecommerce brands.',
};

const industries = [
  {
    Icon: IconHealthcare,
    title: 'Healthcare',
    body: "From single-location practices to multi-site provider groups, we build patient-acquisition systems that keep appointment books full without cutting corners on compliance.",
    points: [
      'Campaign structures built around compliant, patient-first messaging',
      'Location and service-line-level reporting for multi-site groups',
      'Google Business Profile and review generation for provider listings',
      'Funnel tracking from first click to booked appointment',
    ],
  },
  {
    Icon: IconInsurance,
    title: 'Insurance Agencies',
    body: 'Independent agencies and MGAs use our lead systems to generate qualified quote requests and renewals — so growth stops depending on referrals alone.',
    points: [
      'Localized campaigns built for quote requests and policy renewals',
      'Carrier-compliant ad copy and landing pages',
      'Cross-sell and retention campaigns for your existing book of business',
      'CRM routing so agents work the warmest leads first',
    ],
  },
  {
    Icon: IconEcommerce,
    title: 'Ecommerce',
    body: 'DTC and multi-channel brands turn paid and organic traffic into repeat customers with a full-funnel strategy behind every dollar spent.',
    points: [
      'Full-funnel paid media across search, social, and display',
      'Conversion rate optimization on product and checkout pages',
      'Email & SMS flows built around cart behavior and customer LTV',
      'Ongoing creative testing to keep acquisition costs efficient at scale',
    ],
  },
];

const differentiators = [
  { step: '01', title: 'One Strategy, Not a Template', body: 'Healthcare, insurance, and ecommerce customers all convert differently — so the strategy is built around your industry, not copy-pasted from the last client.' },
  { step: '02', title: 'Built to Scale With You', body: 'Whether it is one location or fifty SKUs, the systems we build are designed to expand without starting over.' },
  { step: '03', title: 'Numbers Over Opinions', body: 'Every recommendation is backed by data and industry benchmarks — not agency guesswork or a one-size-fits-all playbook.' },
];

export default function WhoWeHelp() {
  return (
    <main style={{ background: s.cream }}>

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <p style={{ color: s.amber, fontFamily: 'Arial, sans-serif', fontWeight: '700', fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '10px' }}>Industries We Serve</p>
          <h1 style={{ color: s.cream, fontFamily: "'Arial Black', Arial, sans-serif", fontWeight: '900', fontSize: 'clamp(32px, 5vw, 60px)', textTransform: 'uppercase', lineHeight: '1.05', marginBottom: '20px' }}>
            Who We <span style={{ color: s.crimson }}>Help</span>
          </h1>
          <p style={{ color: s.creamDark, fontFamily: 'Georgia, serif', fontSize: 'clamp(15px, 2vw, 18px)', lineHeight: '1.7', maxWidth: '600px' }}>
            Our marketing expertise runs deep across the industries that need it most — where trust, timing, and precision decide whether a visitor becomes a customer.
          </p>
        </div>
      </section>

      {/* Industry Cards */}
      <section className="section-std">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', background: s.charcoal }}>
            {industries.map((item, i) => (
              <div
                key={item.title}
                className="card who-help-row"
                style={{ background: s.cream }}
              >
                <div>
                  <IconBadge tone="cream" colors={s} size={64}>
                    <item.Icon />
                  </IconBadge>
                  <h2 style={{ color: s.charcoal, fontFamily: "'Arial Black', Arial, sans-serif", fontWeight: '900', fontSize: 'clamp(20px, 2.5vw, 26px)', textTransform: 'uppercase', letterSpacing: '0.02em', margin: '16px 0 0' }}>
                    {item.title}
                  </h2>
                </div>
                <div>
                  <p style={{ color: s.warmBrown, fontFamily: 'Georgia, serif', fontSize: '16px', lineHeight: '1.75', marginBottom: '20px' }}>
                    {item.body}
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '10px 24px' }}>
                    {item.points.map((point, j) => (
                      <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                        <span style={{ color: s.crimson, fontWeight: '900', fontFamily: 'Arial, sans-serif', fontSize: '13px', flexShrink: 0, marginTop: '3px' }}>▲</span>
                        <span style={{ color: s.warmBrown, fontFamily: 'Georgia, serif', fontSize: '14px', lineHeight: '1.6' }}>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="section-std" style={{ background: s.charcoal }}>
        <div className="container">
          <p style={{ color: s.amber, fontFamily: 'Arial, sans-serif', fontWeight: '700', fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '10px' }}>Why It Works</p>
          <h2 style={{ color: s.cream, fontFamily: "'Arial Black', Arial, sans-serif", fontWeight: '900', fontSize: 'clamp(22px, 4vw, 32px)', textTransform: 'uppercase', marginBottom: '40px' }}>
            Industry Depth, Not Guesswork
          </h2>
          <div className="grid-3">
            {differentiators.map((item) => (
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
      <section className="section-std" style={{ background: s.crimsonDark, borderTop: `4px solid ${s.amber}`, borderBottom: `4px solid ${s.amber}`, textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: s.cream, fontFamily: "'Arial Black', Arial, sans-serif", fontWeight: '900', fontSize: 'clamp(22px, 4vw, 32px)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '12px' }}>
            Don&apos;t See Your Industry?
          </h2>
          <p style={{ color: s.creamDark, fontFamily: 'Georgia, serif', fontSize: '16px', marginBottom: '28px', maxWidth: '520px', marginLeft: 'auto', marginRight: 'auto' }}>
            These are where we go deepest, but the same data-driven approach works anywhere qualified leads matter. Let&apos;s talk about your business.
          </p>
          <a href="/contact/" style={{ background: s.amber, color: s.charcoal, padding: '14px 40px', textDecoration: 'none', fontFamily: 'Arial, sans-serif', fontWeight: '700', fontSize: '14px', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'inline-block' }}>
            Schedule a Consultation
          </a>
        </div>
      </section>

    </main>
  );
}
