import Image from "next/image";





export default function Certificates() {
  return (
    <>
    <div className="top-0 w-full h-[120px] flex flex-col  items-center justify-center bg-gray-900 text-white">
  
    <div className="flex flex-row gap-12">
    <div className="bg-white rounded-full p-2 flex items-center justify-center">
      <Image src="/images/certification/organic100.png" alt="Company 1" width={50} height={50} />
    </div>
    <div className="bg-white rounded-full p-2 flex items-center justify-center">
      <Image src="/images/certification/recycled100.png" alt="Company 2" width={50} height={50} />
    </div>
    <div className="bg-white rounded-full p-2 flex items-center justify-center">
      <Image src="/images/certification/sedex.png" alt="Company 3" width={50} height={50} />
    </div>
    <div className="bg-white rounded-full p-2 flex items-center justify-center">
      <Image src="/images/certification/bci.png" alt="Company 4" width={50} height={50} />
    </div>
        </div>
    </div>
     </>
  );
};
