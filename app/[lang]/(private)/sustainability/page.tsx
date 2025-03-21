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
    <div className='top-0 w-full h-[250px] flex flex-col items-center justify-center bg-white text-gray-600'>
    <div className="grid grid-cols-3 gap-0 text-gray-500 place-items-center w-[50%] mx-auto">
            
            <div className="flex flex-col items-center">
              <Image 
                src="/images/icons/surdurulebilir-cevre.png" 
                alt="Sürdürülebilir Çevre" 
                width={60} 
                height={60} 
                className="mb-4"
              />
              <p className='text-md font-medium text-center'>SÜRDÜRÜLEBİLİR<br/>ÇEVRE</p>
            </div>
            <div className="flex flex-col items-center">
              <Image 
                src="/images/icons/urun-sagligi.png" 
                alt="Ürün Sağlığı" 
                width={60} 
                height={60} 
                className="mb-4"
              />
              <p className='text-md font-medium text-center'>ÜRÜN SAĞLIĞI VE<br/>GÜVENLİĞİ</p>
            </div>
            <div className="flex flex-col items-center">
              <Image 
                src="/images/icons/surdurulebilir-zinciri.png" 
                alt="Tedarik Zinciri" 
                width={60} 
                height={60} 
                className="mb-4"
              />
              <p className='text-md font-medium text-center'>SÜRDÜRÜLEBİLİR<br/>TEDARİK ZİNCİRİ</p>
            </div>
            
          </div>
          </div>
    </div>
      
    </>
  );
}