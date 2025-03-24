import { Droplets, Wind, Shield, Repeat, Feather } from 'lucide-react';
import Image from 'next/image';
import { useTranslation } from '@/components/TranslationWrapper';

const PerformanceFeatures = () => {
  const { dict } = useTranslation();
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">{dict["design-production"]["technical-excellence"]}</h2>
          <p className="max-w-3xl mx-auto text-gray-700">
            {dict["design-production"]["technical-excellence-description"]}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">{dict["design-production"]["performance"]}</h3>
            <p className="text-gray-700 mb-6">
              {dict["design-production"]["performance-description"]}
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Droplets className="h-6 w-6 text-chart-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{dict["design-production"]["advanced-moisture-management"]}</span>
              </li>
              <li className="flex items-start">
                <Wind className="h-6 w-6 text-chart-2 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{dict["design-production"]["efficient-air-permeability"]}</span>
              </li>
              <li className="flex items-start">
                <Shield className="h-6 w-6 text-chart-3 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{dict["design-production"]["tough-and-dynamic"]}</span>
              </li>
              <li className="flex items-start">
                <Repeat className="h-6 w-6 text-chart-4 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{dict["design-production"]["stable-in-shape"]}</span>
              </li>
              <li className="flex items-start">
                <Feather className="h-6 w-6 text-chart-5 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{dict["design-production"]["long-lasting-functionality"]}</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl shadow-sm">
            <Image src="/images/design-production/outdoor.png" alt="Performance" width={2500} height={2500} />
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">{dict["design-production"]["comfort"]}</h3>
            <p className="text-gray-700 mb-6">
              {dict["design-production"]["comfort-description"]}
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="h-6 w-6 flex items-center justify-center bg-chart-1 text-white rounded-full mr-3 flex-shrink-0">
                  <span className="text-xs font-bold">4X</span>
                </div>
                <div>
                  <span className="font-semibold block text-gray-900">{dict["design-production"]["ultra-stretch"]}</span>
                  <span className="text-gray-700 text-sm">{dict["design-production"]["ultra-stretch-description"]}</span>
                </div>
              </li>
              <li className="flex items-start mt-4">
                <div className="h-6 w-6 flex items-center justify-center bg-chart-2 text-white rounded-full mr-3 flex-shrink-0">
                  <Wind className="h-4 w-4" />
                </div>
                <div>
                  <span className="font-semibold block text-gray-900">{dict["design-production"]["breathable"]}</span>
                  <span className="text-gray-700 text-sm">{dict["design-production"]["breathable-description"]}</span>
                </div>
              </li>
              <li className="flex items-start mt-4">
                <div className="h-6 w-6 flex items-center justify-center bg-chart-3 text-white rounded-full mr-3 flex-shrink-0">
                  <Droplets className="h-4 w-4" />
                </div>
                <div>
                  <span className="font-semibold block text-gray-900">{dict["design-production"]["moisture-wicking"]}</span>
                  <span className="text-gray-700 text-sm">{dict["design-production"]["moisture-wicking-description"]}</span>
                </div>
              </li>
              <li className="flex items-start mt-4">
                <div className="h-6 w-6 flex items-center justify-center bg-chart-4 text-white rounded-full mr-3 flex-shrink-0">
                  <Feather className="h-4 w-4" />
                </div>
                <div>
                  <span className="font-semibold block text-gray-900">{dict["design-production"]["lightweight"]}</span>
                  <span className="text-gray-700 text-sm">{dict["design-production"]["lightweight-description"]}</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="rounded-lg shadow-sm">
            <Image src="/images/design-production/comfort.png" alt="comfort" width={2000} height={2000} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceFeatures; 