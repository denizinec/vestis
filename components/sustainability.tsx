'use client'
import { Leaf, Recycle, Globe } from 'lucide-react';
import { useTranslation } from '@/components/TranslationWrapper';

const Sustainability = () => {
  const { dict } = useTranslation();
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 uppercase">{dict["sustainability"]["sustainability"]}</h2>
          <p className="max-w-3xl mx-auto text-gray-700">
            {dict["sustainability"]["description"]}
          </p>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg mb-12">
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            {dict["sustainability"]["sustainability-description"]}
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            {dict["sustainability"]["sustainability-description-2"]}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
            <Leaf className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-gray-900">{dict["sustainability"]["environmental-responsibility"]}</h3>
            <p className="text-gray-700">
              {dict["sustainability"]["environmental-responsibility-description"]}
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
            <Recycle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-gray-900">{dict["sustainability"]["sustainable-materials"]}</h3>
            <p className="text-gray-700">
              {dict["sustainability"]["sustainable-materials-description"]}
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
            <Globe className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-gray-900">{dict["sustainability"]["global-impact"]}</h3>
            <p className="text-gray-700">
              {dict["sustainability"]["global-impact-description"]}
            </p>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default Sustainability; 