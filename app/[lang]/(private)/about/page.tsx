'use client'

import Image from 'next/image'
import { useTranslation } from '@/components/TranslationWrapper'
import { useParams } from 'next/navigation';

export default function Page() {
  const { dict } = useTranslation();
  const { lang } = useParams();
  
  return (
    <>
    <div className="max-w-7xl mx-auto px-4 py-12 mt-52 mb-16">
      <div className='w-full flex justify-center items-center'>
      <div className="max-w-4xl mx-auto px-4 tracking-wider leading-relaxed">
        <h2 className="text-2xl font-bold text-center mb-10">{dict.about["first-look"]}</h2>
        <p className="text-gray-600 text-lg mb-12 ">
        {dict.about["a-description-1"]}
        </p>
        <p className="text-gray-600 text-lg mb-12">
        {dict.about["a-description-2"]}
        </p>
      </div>
      </div>
    </div>
    <div >
    </div>
    

    <div className="max-w-2xl -mt-16 mx-auto shadow-2xl mb-20">
      <div className="bg-white shadow-2xl outline outline-1 outline-gray-900 relative z-10 px-4 py-12">
        <h2 className="text-md w-3/6 mx-auto font-semibold text-center mb-8 bg-gray-900 text-white py-2 ">
          {dict.about["values"]}
        </h2>
        
        <p className="text-gray-600 mb-12 text-center px-8">
        {dict.about["values-description"]}
        </p>

        <div className="w-full flex justify-center items-center">
          {lang === 'tr' ? (
          <Image 
            src="/images/about/degeroneri.png" 
            alt="Temel Değerlerimiz" 
            width={800} 
            height={800}
            className="w-auto h-auto"
          />
          ) : (
            <Image 
            src="/images/about/values.png" 
            alt="Temel Değerlerimiz" 
            width={800} 
            height={800}
            className="w-auto h-auto"
          />
          )}
        </div>
      </div>
    </div>
    <div className="max-w-4xl mx-auto px-4 mb-28">
        <h2 className="text-2xl font-bold text-center mb-6">
        {dict.about["quality-sustainability"]}
        </h2>
        <p className="text-gray-600 text-justify text-lg mb-12">
        {dict.about["quality-sustainability-description"]}
        </p>
      </div>
    </>
  )
} 