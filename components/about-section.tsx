import { ArrowRight } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">About Our Company</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Founded in 1995, our textile company has grown to become a leading manufacturer of premium fabrics and innovative textile solutions. With state-of-the-art facilities and a team of experienced professionals, we deliver exceptional quality products to clients worldwide.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Our commitment to excellence, sustainability, and innovation has established us as a trusted partner in the textile industry. We continuously invest in research and development to stay at the forefront of textile technology.
            </p>
            <a
              href="/about"
              className="inline-flex items-center text-black font-medium hover:underline"
            >
              Learn more about our story <ArrowRight size={16} className="ml-2" />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1581375383680-7101dc5cb5f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80"
                alt="Textile production"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden mt-8">
              <img
                src="https://images.unsplash.com/photo-1573521193826-58c7c6466648?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1605600659873-d808a13e4d2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80"
                alt="Fabric samples"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden mt-8">
              <img
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                alt="Textile factory"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;