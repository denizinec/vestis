import { Palette, Factory } from 'lucide-react';
import { useTranslation } from '@/components/TranslationWrapper';

const DesignProduction = () => {
  const { dict } = useTranslation();
  return (
    <section className="pt-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">{dict["design-production"]["design-production"]}</h2>
          <p className="max-w-3xl mx-auto text-gray-700">
            {dict["design-production"]["design-production-description"]}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="flex items-center mb-6">
              <Palette className="h-8 w-8 text-chart-1 mr-4" />
              <h3 className="text-2xl font-bold text-gray-900">{dict["design-production"]["design-statement"]}</h3>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
            {dict["design-production"]["a-description-1"]}
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
            {dict["design-production"]["a-description-2"]}
            </p>
            <p className="text-gray-700 leading-relaxed">
            {dict["design-production"]["a-description-3"]}
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="flex items-center mb-6">
              <Factory className="h-8 w-8 text-chart-2 mr-4" />
              <h3 className="text-2xl font-bold text-gray-900">{dict["design-production"]["production-statement"]}</h3>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
            {dict["design-production"]["b-description-1"]}
            </p>
            <p className="text-gray-700 leading-relaxed">
            {dict["design-production"]["b-description-2"]}
            </p>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default DesignProduction; 