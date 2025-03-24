'use client'

import Hero from '@/components/hero';
import HomeSection from '@/components/home-section';
import DesignProduction from '@/components/design-production';
import PerformanceFeatures from '@/components/performance-features';
import Sustainability from '@/components/sustainability';
import ProductsSection from '@/components/products-section';
import Loading from '@/components/ui/loading';
import { useLoading } from '@/components/loading-provider';
import { useTranslation } from '@/components/TranslationWrapper';
import Certificates from '@/components/certificates';
import Vestis from '@/components/vestis';

export default function Page() {
  const { isLoading } = useLoading();
  const { dict } = useTranslation();
  return (
    <>
      {isLoading ? <Loading /> : (
        <>
          <Hero />
          <HomeSection dict={dict} />
          <div className="top-0 w-full h-[180px] flex flex-col  items-center justify-center bg-gray-900 text-white mb-16">
          <h1 className="text-6xl md:text-7xl sm:text-6xl font-trinite font-medium text-center justify-center items-center">
            &quot; VESTIS  VIRUM  REDDIT &quot;
          </h1>
          </div>
          <div>
            <div className='max-w-5xl mx-auto px-4 mb-10 tracking-wider leading-relaxed flex flex-col justify-center items-center'>
              <h1 className='text-3xl font-bold justify-center items-center mb-10'>{dict.home["fashion-future"]}</h1>
              <p className='text-gray-500  text-lg mb-32'>{dict.home["fashion-future-description"]}
              </p>

              <h1 className='text-3xl text-gray-900 font-bold justify-center items-center mb-10'>{dict.home["expertise"]}</h1>
              <p className='text-gray-500  text-lg '>{dict.home["expertise-description"]}

              </p>
              <p className='text-gray-500  text-lg mt-8 mb-32'>{dict.home["expertise-description-1"]}
              </p>
            </div>
          </div>

        </>
      )}
      <Certificates />
      <Vestis />
      
    </>
  );
}