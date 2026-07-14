export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Drive Qualified Inbound Traffic</h1>
          <p className="text-xl mb-8 opacity-90">
            Strategy-driven marketing that turns visitors into customers
          </p>
          <a
            href="/contact/"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100"
          >
            Get Started Today
          </a>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose ApexMedia?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4">🎯 Targeted Traffic</h3>
              <p>We don't just bring visitors—we bring qualified leads ready to buy.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4">📊 Data-Driven</h3>
              <p>Every decision backed by analytics and measurable results.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4">🚀 Fast Growth</h3>
              <p>See results in weeks, not months. Proven strategies that work.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Marketing?</h2>
          <a
            href="/contact/"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 inline-block"
          >
            Schedule Your Consultation
          </a>
        </div>
      </section>
    </main>
  );
}
