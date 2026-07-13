export default function About() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">About ApexMedia</h1>

      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 mb-6">
          ApexMedia was founded to give growing businesses the kind of marketing and web strategy usually reserved for companies with much bigger budgets.
        </p>

        <h2 className="text-2xl font-bold mt-12 mb-4">Our Mission</h2>
        <p className="text-gray-700 mb-6">
          We believe every business deserves access to world-class inbound marketing strategy. Our mission is to help companies:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>Become visible in Google, Bing, and AI search engines</li>
          <li>Build automated lead generation systems</li>
          <li>Develop competitive marketing strategies</li>
          <li>Win more business with better positioning</li>
        </ul>

        <h2 className="text-2xl font-bold mt-12 mb-4">What We Do</h2>
        <p className="text-gray-700 mb-6">
          We audit your entire digital presence, identify where opportunities are hiding, and build systems to capture them. Every recommendation is backed by data and industry benchmarks.
        </p>

        <h2 className="text-2xl font-bold mt-12 mb-4">The ApexMedia Difference</h2>
        <p className="text-gray-700 mb-6">
          Whether you need to show up in local search, deliver qualified leads automatically, or win a competitive pitch—we approach every project with the same rigor:
        </p>
        <ol className="list-decimal list-inside text-gray-700 space-y-2">
          <li>Find where the opportunity is hiding</li>
          <li>Build the system or strategy to capture it</li>
          <li>Make the results measurable</li>
        </ol>
      </div>

      <div className="mt-16 bg-blue-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Ready to discuss your strategy?</h2>
        <p className="text-gray-700 mb-4">
          Let's talk about how ApexMedia can help your business grow.
        </p>
        <a href="/contact/" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Contact Us
        </a>
      </div>
    </main>
  );
}
