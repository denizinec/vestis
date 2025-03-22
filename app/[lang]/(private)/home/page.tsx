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
          
          <div>
            <div className='max-w-5xl mx-auto px-4 mb-10 tracking-wider leading-relaxed flex flex-col justify-center items-center'>
              <h1 className='text-3xl font-bold justify-center items-center mb-10'>Modanın Geleceği</h1>
              <p className='text-gray-500  text-lg mb-32'>Moda dünyasında hız, kalite ve esneklik bizim önceliğimiz. Yenilikçi teknolojilerimiz, 
                derin sektör bilgimiz ve güçlü üretim altyapımız ile küresel perakendecilere değer katan çözümler sunuyoruz. 
                Geleceğin modasını bugünden şekillendiriyoruz.
              </p>

              <h1 className='text-3xl text-gray-900 font-bold justify-center items-center mb-10'>Uzmanlık ve Olmazsa Olmaz Takip</h1>
              <p className='text-gray-500  text-lg '>Üretimin her aşamasında aralıksız olarak kalite kontrol uygulamalarını gerçekleştiriyoruz. Süreci en yakın şekilde takip eden kalite ekibimiz sayesinde, birçok iş kaleminden oluşan tekstil sektörünün gerekliklerinin başında gelen kalite ve müşteri taleplerinin karşılığını maksimum seviyede sunmayı hedefliyoruz. 

              </p>
              <p className='text-gray-500  text-lg mt-8 mb-32'>Kalite ekibimizin üyeleri, nihai ürün elde etme amacıyla her ürünün doğru şekilde tedarik edilmesi, tasarlanması, üretilmesi ve teslim edilmesine yönelik üstün bir çaba harcıyor. Süreç akışının izlenebilirliği ve yerinde kalite denetimleri gibi uygulamalarımız, işimizin başarısına tartışılmaz bir katkı sağlıyor.
              </p>
            </div>
          </div>

        </>
      )}
      <Vestis />
      <Certificates />
    </>
  );
}