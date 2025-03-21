import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

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
          <div className="grid grid-cols-2 gap-1">
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/images/certification/organic100.png"
                alt=""
                className="object-contain"
                width={110}
                height={110}
              />
            </div>
            
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/images/certification/recycled100.png"
                alt=""
                className="object-contain"
                width={200}
                height={200}
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/images/certification/sedex.png"
                alt=""
                className="object-contain"
                width={200}
                height={200}
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/images/certification/bci.png"
                alt=""
                className="object-contain"
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;