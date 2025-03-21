import Sustainability from '@/components/sustainability';
import Image from 'next/image';

export default function Page() {
  return (
    <>
    <div className="flex flex-col min-h-screen pt-40">
      <Sustainability />
      <div className='w-full flex justify-center items-center'>
        <Image src="/images/sustainability/sustainability.png" alt="Sustainability" width={2000} height={2000} />
    </div>
    </div>
      
    </>
  );
}