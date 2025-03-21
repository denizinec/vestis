import { Droplets, Wind, Shield, Repeat, Feather } from 'lucide-react';
import Image from 'next/image';

const PerformanceFeatures = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Technical Excellence</h2>
          <p className="max-w-3xl mx-auto text-gray-700">
            Our garments combine innovative design with technical performance to deliver exceptional comfort and functionality.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">PERFORMANCE</h3>
            <p className="text-gray-700 mb-6">
              The innovative designs we produce are made of specific fabrics and offer the technical properties.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Droplets className="h-6 w-6 text-chart-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Advanced Moisture Management</span>
              </li>
              <li className="flex items-start">
                <Wind className="h-6 w-6 text-chart-2 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Efficient Air Permeability</span>
              </li>
              <li className="flex items-start">
                <Shield className="h-6 w-6 text-chart-3 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Tough and Dynamic</span>
              </li>
              <li className="flex items-start">
                <Repeat className="h-6 w-6 text-chart-4 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Stable in Shape</span>
              </li>
              <li className="flex items-start">
                <Feather className="h-6 w-6 text-chart-5 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Long-lasting Functionality</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl shadow-sm">
            <Image src="/images/design-production/outdoor.png" alt="Performance" width={2500} height={2500} />
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">COMFORT</h3>
            <p className="text-gray-700 mb-6">
              On the move or at the office from exercising to biking these unique clothing are specifically designed to feel comfortable daily life.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="h-6 w-6 flex items-center justify-center bg-chart-1 text-white rounded-full mr-3 flex-shrink-0">
                  <span className="text-xs font-bold">4X</span>
                </div>
                <div>
                  <span className="font-semibold block text-gray-900">Ultra-Stretch</span>
                  <span className="text-gray-700 text-sm">Provides freedom of movement to its wearer. Fully stretchable qualities make clothing very wearable and comfortable.</span>
                </div>
              </li>
              <li className="flex items-start mt-4">
                <div className="h-6 w-6 flex items-center justify-center bg-chart-2 text-white rounded-full mr-3 flex-shrink-0">
                  <Wind className="h-4 w-4" />
                </div>
                <div>
                  <span className="font-semibold block text-gray-900">Breathable</span>
                  <span className="text-gray-700 text-sm">Ability to allow perspiration, evaporated by the body, to escape to the outside, thereby allowing complete comfort.</span>
                </div>
              </li>
              <li className="flex items-start mt-4">
                <div className="h-6 w-6 flex items-center justify-center bg-chart-3 text-white rounded-full mr-3 flex-shrink-0">
                  <Droplets className="h-4 w-4" />
                </div>
                <div>
                  <span className="font-semibold block text-gray-900">Moisture Wicking</span>
                  <span className="text-gray-700 text-sm">Wicking clothes draw moisture away from the body. Made of high-tech polyester, which, unlike cotton, absorbs very little water.</span>
                </div>
              </li>
              <li className="flex items-start mt-4">
                <div className="h-6 w-6 flex items-center justify-center bg-chart-4 text-white rounded-full mr-3 flex-shrink-0">
                  <Feather className="h-4 w-4" />
                </div>
                <div>
                  <span className="font-semibold block text-gray-900">Lightweight</span>
                  <span className="text-gray-700 text-sm">Feel fresh and comfortable throughout the day.</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="rounded-lg shadow-sm">
            <Image src="/images/design-production/comfort.png" alt="comfort" width={2000} height={1500} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceFeatures; 