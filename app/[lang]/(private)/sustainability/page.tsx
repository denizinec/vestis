'use client'
import Sustainability from '@/components/sustainability';
import Image from 'next/image';
import { useTranslation } from '@/components/TranslationWrapper';

export default function Page() {
  const { dict } = useTranslation();
  return (
    <>
    <div className="flex flex-col min-h-screen pt-40">
      <Sustainability />
      <div className='w-full flex justify-center items-center'>
        <Image src="/images/sustainability/sustainability.png" alt="Sustainability" width={2000} height={2000} />
      </div>
      <div className='top-0 w-full py-8 flex flex-col items-center justify-center bg-white text-gray-600'>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-0 text-gray-500 place-items-center w-full px-4 sm:w-[80%] md:w-[70%] lg:w-[50%] mx-auto">
            
            <div className="flex flex-col items-center">
              <Image 
                src="/images/icons/surdurulebilir-cevre.png" 
                alt="Sürdürülebilir Çevre" 
                width={60} 
                height={60} 
                className="mb-4"
              />
              <p className='text-md font-medium text-center uppercase'>{dict["sustainability"]["environmental-responsibility"]}</p>
            </div>
            <div className="flex flex-col items-center">
              <Image 
                src="/images/icons/urun-sagligi.png" 
                alt="Ürün Sağlığı" 
                width={60} 
                height={60} 
                className="mb-4"
              />
              <p className='text-md font-medium text-center uppercase'>{dict["sustainability"]["product-health-and-safety"]}</p>
            </div>
            <div className="flex flex-col items-center">
              <Image 
                src="/images/icons/surdurulebilir-zinciri.png" 
                alt="Tedarik Zinciri" 
                width={60} 
                height={60} 
                className="mb-4"
              />
              <p className='text-md font-medium text-center uppercase'>{dict["sustainability"]["sustainable-supply-chain"]}</p>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}