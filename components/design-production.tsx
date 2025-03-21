import { Palette, Factory } from 'lucide-react';
import Image from 'next/image';

const DesignProduction = () => {
  return (
    <section className="pt-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Design & Production</h2>
          <p className="max-w-3xl mx-auto text-gray-700">
            Sustained by our global network of partners and suppliers, Vestis specializes in the design and high-tech production of high-volume, time-sensitive fashion garments and collections for Turkey and the world's leading brands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="flex items-center mb-6">
              <Palette className="h-8 w-8 text-chart-1 mr-4" />
              <h3 className="text-2xl font-bold text-gray-900">Design Statement</h3>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
            As Vestis, we see it as our top priority to follow the process and manage the process with experts in order to achieve the best results. Therefore, while following the process, we aim to find the fastest and most suitable solutions by evaluating our customers' design critiques.            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
            In addition to our current patterns and designs based on the latest trends, we provide special creations that reflect your vision.
            </p>
            <p className="text-gray-700 leading-relaxed">
            Most importantly, we combine trends and technology to create garments that meet both your and your customers' expectations.            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="flex items-center mb-6">
              <Factory className="h-8 w-8 text-chart-2 mr-4" />
              <h3 className="text-2xl font-bold text-gray-900">Production Statement</h3>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Our skilled planning and production team possesses advanced manufacturing knowledge and extensive experience. We utilize the latest technology throughout our production facilities to manufacture, control, and deliver high-quality products to our customers.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We produce performance clothing with various features and technical specifications. The innovative textiles and exclusive collections developed by our in-house R&D Center have become preferred choices for many activewear and knitwear brands.
            </p>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default DesignProduction; 