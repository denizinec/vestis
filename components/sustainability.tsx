import { Leaf, Recycle, Globe } from 'lucide-react';

const Sustainability = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">SUSTAIN THE FUTURE</h2>
          <p className="max-w-3xl mx-auto text-gray-700">
            We are aware of our current impact on the planet, and we believe we should create a better tomorrow for future generations.
          </p>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg mb-12">
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            To contribute positively to the global value chain in the textile and apparel sector and support sustainable development, we embrace our corporate responsibility and align with the Global Development Goals.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            We are committed to caring for the environment and believe in building a sustainable economy for a better future. Protecting our valuable resources – employees, the environment, and the community – is essential for ensuring the prosperity of future generations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
            <Leaf className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Environmental Responsibility</h3>
            <p className="text-gray-700">
              We implement eco-friendly manufacturing processes to minimize our environmental footprint and preserve natural resources.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
            <Recycle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Sustainable Materials</h3>
            <p className="text-gray-700">
              We prioritize the use of recycled and organic materials in our production to reduce waste and promote circular economy.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
            <Globe className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Global Impact</h3>
            <p className="text-gray-700">
              We strive to make a positive difference in our communities and contribute to a more sustainable and equitable world.
            </p>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default Sustainability; 