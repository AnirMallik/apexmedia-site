import {
  IconBadge, IconSEO, IconSearchAds, IconSocialAds, IconDisplayAds,
  IconCRO, IconWebDesign, IconEmailSMS, IconAnalytics, IconAISearch, IconLeadGen,
} from '../icons';

const s = {
  cream: '#F5E6C8', creamDark: '#EDD9A3', charcoal: '#1C1C1C',
  crimson: '#B83232', crimsonDark: '#8B1A1A', amber: '#C8922A', warmBrown: '#5A4A3A',
};

export const metadata = {
  title: 'Capabilities - ApexMedia',
  description: 'ApexMedia\'s full-funnel marketing capabilities: SEO, paid media, website design, CRO, email/SMS, analytics, and AI search visibility.',
};

const tactics = [
  { Icon: IconSEO, title: 'SEO', body: 'Technical, content, and local SEO strategies that help you rank where your buyers are already searching.' },
  { Icon: IconSearchAds, title: 'Search Advertising', body: 'Targeted, cost-effective search campaigns that reach the right audience with the right message at the right moment.' },
  { Icon: IconSocialAds, title: 'Social Advertising', body: 'Scroll-stopping creative and copy across Meta and TikTok that gets clicked on, not just noticed.' },
  { Icon: IconDisplayAds, title: 'Display Advertising', body: 'Visual campaigns that keep your brand in front of the right audience across the open web.' },
  { Icon: IconCRO, title: 'Conversion Rate Optimization', body: 'Optimize every digital touchpoint so more of your traffic turns into form fills, calls, and sales.' },
  { Icon: IconWebDesign, title: 'Website Design', body: 'Next-level design and flawless functionality, built to turn visitors into qualified leads.' },
  { Icon: IconEmailSMS, title: 'Email & SMS', body: 'Personalized, one-to-one communication on the channels your customers actually check.' },
  { Icon: IconAnalytics, title: 'Analytics & Reporting', body: "Turn raw data into decisions with reporting that shows what's working — by channel, campaign, and location." },
  { Icon: IconAISearch, title: 'AI Search Visibility', body: 'Structured data and answer-engine optimization that keeps you visible as search shifts toward AI.' },
  { Icon: IconLeadGen, title: 'Lead Gen & CRM Automation', body: 'Automated systems that score, route, and deliver leads directly into your CRM before competitors know they exist.' },
];

const principles = [
  { step: '01', title: 'Full-Funnel Visibility', body: 'We track every touchpoint from first click to closed deal, so you always know which channels are actually driving revenue.' },
  { step: '02', title: 'Channel-Level Accountability', body: 'No channel gets a pass. If a tactic isn’t performing, we say so and shift the budget to what is.' },
  { step: '03', title: 'Continuous Testing', body: 'Creative, audiences, and landing pages are always being tested against each other, not set once and left alone.' },
];

export default function Capabilities() {
  return (
    <main style={{ background: s.cream }}>

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <p style={{ color: s.amber, fontFamily: 'Arial, sans-serif', fontWeight: '700', fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '10px' }}>How We Work</p>
          <h1 style={{ color: s.cream, fontFamily: "'Arial Black', Arial, sans-serif", fontWeight: '900', fontSize: 'clamp(32px, 5vw, 60px)', textTransform: 'uppercase', lineHeight: '1.05', marginBottom: '20px' }}>
            Our <span style={{ color: s.crimson }}>Capabilities</span>
          </h1>
          <p style={{ color: s.creamDark, fontFamily: 'Georgia, serif', fontSize: 'clamp(15px, 2vw, 18px)', lineHeight: '1.7', maxWidth: '620px' }}>
            From media mix to full-funnel strategy, we deploy the tactics that attract, convert, and retain customers at every stage of the journey.
          </p>
        </div>
      </section>

      {/* Tactics Grid */}
      <section className="section-std">
        <div className="container">
          <p style={{ color: s.crimson, fontFamily: 'Arial, sans-serif', fontWeight: '700', fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '10px' }}>Growth Tactics</p>
          <h2 style={{ color: s.charcoal, fontFamily: "'Arial Black', Arial, sans-serif", fontWeight: '900', fontSize: 'clamp(22px, 4vw, 32px)', textTransform: 'uppercase', marginBottom: '40px' }}>
            Every Channel. One Strategy.
          </h2>
          <div className="capability-grid">
            {tactics.map((item) => (
              <div key={item.title} className="card" style={{ background: s.cream }}>
                <IconBadge tone="cream" colors={s} size={52}>
                  <item.Icon />
                </IconBadge>
                <h3 style={{ color: s.charcoal, fontFamily: "'Arial Black', Arial, sans-serif", fontWeight: '900', fontSize: '15px', textTransform: 'uppercase', letterSpacing: '0.04em', margin: '16px 0 10px' }}>
                  {item.title}
                </h3>
                <p style={{ color: s.warmBrown, fontFamily: 'Georgia, serif', fontSize: '14px', lineHeight: '1.7' }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="section-std" style={{ background: s.charcoal }}>
        <div className="container">
          <p style={{ color: s.amber, fontFamily: 'Arial, sans-serif', fontWeight: '700', fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '10px' }}>How We Measure Success</p>
          <h2 style={{ color: s.cream, fontFamily: "'Arial Black', Arial, sans-serif", fontWeight: '900', fontSize: 'clamp(22px, 4vw, 32px)', textTransform: 'uppercase', marginBottom: '40px' }}>
            Proof, Not Promises
          </h2>
          <div className="grid-3">
            {principles.map((item) => (
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
      <section className="section-std" style={{ background: s.crimsonDark, textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: s.cream, fontFamily: "'Arial Black', Arial, sans-serif", fontWeight: '900', fontSize: 'clamp(20px, 4vw, 28px)', textTransform: 'uppercase', marginBottom: '12px' }}>
            Ready to Put These to Work?
          </h2>
          <p style={{ color: s.creamDark, fontFamily: 'Georgia, serif', fontSize: '16px', marginBottom: '28px' }}>
            Every engagement starts with understanding which capabilities move the needle for your business.
          </p>
          <a href="/contact/" style={{ background: s.amber, color: s.charcoal, padding: '14px 40px', textDecoration: 'none', fontFamily: 'Arial, sans-serif', fontWeight: '700', fontSize: '14px', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'inline-block' }}>
            Schedule a Consultation
          </a>
        </div>
      </section>

    </main>
  );
}
