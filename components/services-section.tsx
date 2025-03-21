import { Scissors, Truck, Recycle, Award, Zap, Users } from 'lucide-react';

const services = [
  {
    icon: <Scissors className="h-10 w-10 text-chart-1" />,
    title: 'Custom Design',
    description: 'Tailored garment designs that reflect your brand vision and meet market demands.',
  },
  {
    icon: <Truck className="h-10 w-10 text-chart-2" />,
    title: 'Global Distribution',
    description: 'Efficient logistics network ensuring timely delivery to clients worldwide.',
  },
  {
    icon: <Recycle className="h-10 w-10 text-chart-3" />,
    title: 'Sustainable Production',
    description: 'Eco-friendly manufacturing processes reducing environmental impact.',
  },
  {
    icon: <Award className="h-10 w-10 text-chart-4" />,
    title: 'Quality Assurance',
    description: 'Rigorous testing and quality control ensuring premium products.',
  },
  {
    icon: <Zap className="h-10 w-10 text-chart-5" />,
    title: 'R&D Innovation',
    description: 'Cutting-edge research and development driving textile innovation.',
  },
  {
    icon: <Users className="h-10 w-10 text-chart-1" />,
    title: 'Expert Consultation',
    description: 'Professional guidance from industry experts to optimize your apparel projects.',
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">What We Do</h2>
          <p className="max-w-2xl mx-auto text-gray-700">
            Our comprehensive range of services covers every aspect of textile production, from design and manufacturing to distribution and consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;