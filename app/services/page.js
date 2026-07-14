export default function Services() {
  const services = [
    {
      title: 'Website Performance & AI Search Visibility',
      description: 'Full digital presence audits covering technical SEO, structured data, and visibility across search engines.',
      features: ['SEO audits', 'GA4 & call tracking', 'Google Business Profile optimization', 'Review generation'],
    },
    {
      title: 'Automated Lead Generation Systems',
      description: 'Build systems that scan public data sources and deliver qualified leads directly to your CRM.',
      features: ['Data source integration', 'Lead scoring', 'CRM automation', 'Lead routing'],
    },
    {
      title: 'Marketing Strategy & Pitch Development',
      description: 'High-stakes strategy for competitive RFPs, board presentations, and enterprise pitches.',
      features: ['Audience segmentation', 'Competitive positioning', 'Data-backed planning', 'Pitch development'],
    },
    {
      title: 'Content & Positioning Strategy',
      description: 'Establish your brand as the authority in your market with compelling positioning and content.',
      features: ['Market analysis', 'Positioning strategy', 'Content roadmap', 'Messaging framework'],
    },
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">Services</h1>
      <p className="text-xl text-gray-600 mb-12">
        Comprehensive inbound marketing solutions tailored to your business goals
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {services.map((service, idx) => (
          <div key={idx} className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-3 text-blue-600">{service.title}</h3>
            <p className="text-gray-700 mb-4">{service.description}</p>
            <ul className="space-y-2">
              {service.features.map((feature, i) => (
                <li key={i} className="text-gray-600 flex items-center">
                  <span className="text-blue-600 mr-2">✓</span> {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <section className="bg-gray-50 p-8 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">How We Work</h2>
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="text-3xl font-bold text-blue-600">1</div>
            <div>
              <h3 className="font-bold">Discovery & Audit</h3>
              <p className="text-gray-600">We analyze your current state and identify opportunities</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-3xl font-bold text-blue-600">2</div>
            <div>
              <h3 className="font-bold">Strategy Development</h3>
              <p className="text-gray-600">Build a data-backed roadmap with measurable goals</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-3xl font-bold text-blue-600">3</div>
            <div>
              <h3 className="font-bold">Implementation</h3>
              <p className="text-gray-600">Execute the plan and track results continuously</p>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-blue-600 text-white p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Let's Discuss Your Project</h2>
        <a
          href="/contact/"
          className="bg-white text-blue-600 px-6 py-2 rounded hover:bg-gray-100 inline-block font-bold"
        >
          Schedule a Consultation
        </a>
      </div>
    </main>
  );
}
