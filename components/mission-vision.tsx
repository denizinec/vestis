import { Target, Eye } from 'lucide-react';

const MissionVision = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-6">
              <Target className="h-10 w-10 text-chart-1 mr-4" />
              <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              To bring inspiration and innovation to daily and outdoor life, using latest technology and R&D and combine them into fashionable apparel.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-6">
              <Eye className="h-10 w-10 text-chart-2 mr-4" />
              <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              To have a positive impact on the lives of our customers and our team.
            </p>
          </div>
        </div>
        
        <div className="mt-12 bg-white p-8 rounded-lg shadow-sm">
          <h3 className="text-2xl font-bold mb-6 text-gray-900">We pride ourselves in:</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="flex items-start">
              <div className="h-2 w-2 bg-chart-1 rounded-full mt-2 mr-2"></div>
              <span className="text-gray-700">High product quality</span>
            </li>
            <li className="flex items-start">
              <div className="h-2 w-2 bg-chart-1 rounded-full mt-2 mr-2"></div>
              <span className="text-gray-700">Innovative technologies</span>
            </li>
            <li className="flex items-start">
              <div className="h-2 w-2 bg-chart-1 rounded-full mt-2 mr-2"></div>
              <span className="text-gray-700">Quick sample & production turnaround</span>
            </li>
            <li className="flex items-start">
              <div className="h-2 w-2 bg-chart-1 rounded-full mt-2 mr-2"></div>
              <span className="text-gray-700">Delivery Reliability</span>
            </li>
            <li className="flex items-start">
              <div className="h-2 w-2 bg-chart-1 rounded-full mt-2 mr-2"></div>
              <span className="text-gray-700">Flexible production in 3-8 weeks</span>
            </li>
            <li className="flex items-start">
              <div className="h-2 w-2 bg-chart-1 rounded-full mt-2 mr-2"></div>
              <span className="text-gray-700">Combine our design capability with our production ability</span>
            </li>
            <li className="flex items-start">
              <div className="h-2 w-2 bg-chart-1 rounded-full mt-2 mr-2"></div>
              <span className="text-gray-700">Prompt our customers with new designs they require</span>
            </li>
            <li className="flex items-start">
              <div className="h-2 w-2 bg-chart-1 rounded-full mt-2 mr-2"></div>
              <span className="text-gray-700">Produce with environmentally friendly methods</span>
            </li>
            <li className="flex items-start">
              <div className="h-2 w-2 bg-chart-1 rounded-full mt-2 mr-2"></div>
              <span className="text-gray-700">Using our expert textile engineering skills for design and quality development</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MissionVision; 