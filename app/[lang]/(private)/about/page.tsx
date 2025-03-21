'use client'

import { useTranslation } from '@/components/TranslationWrapper'
import Image from 'next/image'

export default function Page() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { dict } = useTranslation()

  return (
    <>
    <div className="max-w-7xl mx-auto px-4 py-12 mt-52">
      <div className='w-full flex justify-center items-center'>
      <div className="max-w-4xl mx-auto px-4 tracking-wider leading-relaxed">
        <h2 className="text-xl font-medium text-center mb-6">İLK BAKIŞTA VESTİS</h2>
        <p className="text-gray-600 text-md mb-12 ">
        Vestis, küresel ortakları ve güçlü tedarikçi ağı ile birlikte, Türkiye ve dünyanın önde gelen markaları için yüksek hacimli, zaman odaklı, moda akımlarını takip eden koleksiyonların tasarlanması ve ileri teknolojiyle üretilmesindeki uzmanlığını, yalın yönetim anlayışı ile sürekli olarak ileriye taşımaktadır. Toplam üretim kapasitesi aylık ortalama 3.000.000 adettir.        </p>
        <p className="text-gray-600 text-md mb-12">
        Fortune ve İstanbul Sanayi Odası (İSO), Vestis'i en büyük şirketler arasında sıralamıştır. İstanbul Tekstil ve Konfeksiyon İhracatçı Birlikleri (İTKİB) ve İstanbul Ticaret Odası'nın (İTO) da faal bir üyesidir.        </p>
        <p className="text-gray-600 text-md mb-12">
        Vestis, hazır giyim ve konfeksiyon sektöründeki deneyimli profesyonelleri bünyesinde barındırır. Her üst düzey yöneticiye rehberlik eden girişimci yaklaşım, coğrafya ve ürün yelpazesine ilişkin derin bilgiler; Kardem'in sürekli yükselen büyüme ve başarısında etkili olan güçlü ve yetenekli bir ekibin alt yapısını oluşturur.        </p>
      </div>
      </div>
    </div>
    <div >
    </div>
    
    <div className="mt-12 w-full h-[100px] flex flex-col  items-center justify-center bg-gray-900 text-white">
          <p className="text-xl max-w-4xl mx-auto font-semibold text-justify px-2">
            YENİLİK • GELİŞİM • DEĞİŞİM
          </p>
      </div>

    <div className="max-w-2xl -mt-16 mx-auto shadow-2xl mb-16">
      <div className="bg-white shadow-2xl outline outline-1 outline-gray-900 relative z-10 px-4 py-12">
        <h2 className="text-md w-3/6 mx-auto font-semibold text-center mb-8 bg-gray-900 text-white py-2 ">
          TEMEL DEĞERLERİMİZ
        </h2>
        
        <p className="text-gray-600 mb-12 text-center px-8 text-justify">
          Yenilik, sürekli değişim ve gelişim gibi ilkelerin rehberlik ettiği katılımcı bir kurumsal 
          kültür geliştirmek, vazgeçilmez hedefimizdir. Dinamik ve üretken iş gücümüzün 
          katkılarıyla; ekip ruhumuzu güçlü, kurumsal bağlılık kavramını ise canlı tutmayı 
          başarıyoruz.
        </p>

        <div className="w-full flex justify-center items-center">
          <Image 
            src="/images/about/temel-degerler.png" 
            alt="Temel Değerlerimiz" 
            width={800} 
            height={800}
            className="w-auto h-auto"
          />
        </div>
      </div>
    </div>

    <div className="max-w-2xl -mt-16 mx-auto shadow-2xl mb-16">
      <div className="bg-white shadow-2xl outline outline-1 outline-gray-900 relative mt-52 px-2 py-12">
        <h2 className="text-md w-3/6 mx-auto font-semibold text-center mb-8 bg-gray-900 text-white py-2 ">
          DEĞER ÖNERİMİZ
        </h2>
        
        <p className="text-gray-400 mb-4 text-center px-8 text-justify">
        Değer önerimiz, bizleri paydaşlarımızla ortak hedeflere doğru 
        yönlendiren yedi temel unsur üzerine inşa edilmiştir. 
        Bu temel unsurlar kim olduğumuzu, çalışma şeklimizi ve nasıl değer yarattığımızı tanımlar.
        </p>

        <div className="w-full flex justify-center items-center">
          <Image 
            src="/images/about/deger-onerimiz.png" 
            alt="Temel Değerlerimiz" 
            width={800} 
            height={800}
            className="w-auto h-auto"
          />
        </div>
      </div>
    </div>
    <div className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-xl font-medium text-center mb-6">YÜKSEK STANDARTLARIMIZI KORUYORUZ
        </h2>
        <p className="text-gray-600 text-justify text-md mb-12">
        "Toplam Kalite İlkemiz" ve bilgi güvenliğiyle ilgili katı kurallarımız sayesinde tüm süreçlerimizin %100 güvenli ve en üstün kalitede olması en büyük övünç kaynağımızdır.
        </p>

        <div className="grid grid-cols-2 gap-0 text-gray-500 place-items-center w-[50%] mx-auto">
          <div className="flex flex-col items-center">
            <Image
              src="/images/icons/toplam-kalite.png"
              alt="Teknoloji"
              width={64}
              height={64}
            />
            <h3 className="mt-2 text-md font-semibold">TOPLAM KALİTE</h3>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/images/icons/bilgi-guvenligi.png"
              alt="Tasarım"
              width={64}
              height={64}
            />
            <h3 className="mt-2 text-md font-semibold">BİLGİ GÜVENLİĞİ</h3>
          </div>
        </div>
      </div>
    </>
  )
} 