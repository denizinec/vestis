import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useTranslation } from './TranslationWrapper';

type Props = {
  dict: any;
}

const HomeSection = ({ dict }: Props) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 tracking-wider leading-relaxed">
        <div className="justify-center flex flex-col items-center">
          <div className='max-w-4xl mx-auto px-4 mb-16  flex flex-col justify-center items-center'>
            <h2 className="text-4xl font-bold mb-20 text-gray-900">{dict.home.about}</h2>
            <div className='text-xl'>
            <p className="text-gray-700 mb-6 leading-relaxed">
            {dict.home["a-description-1"]}</p>
            <p className="text-gray-700 mb-6 leading-relaxed">
            {dict.home["a-description-2"]}</p>
            <p className="text-gray-700 mb-8 leading-relaxed">
            {dict.home["a-description-3"]}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;