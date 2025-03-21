'use client'

import { useTranslation } from '@/components/TranslationWrapper'
import Image from 'next/image'

export default function Page() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { dict } = useTranslation()

  return (
    <>

      
    <div className="text-center mt-12 mb-16 mt-52">
              <h3 className="text-sm font-bold text-white bg-gray-900 border-t border-b border-black inline-block px-8 py-2">GENEL MÜDÜRLÜK</h3>
              <hr className="border-t z- border-gray-500 my-4 w-1/5 mx-auto" />
              <div className="mt-6 text-sm text-gray-500">
                <p className="font-semibold text-black">İSTANBUL</p>
                <p className="mt-4">Namık Kemal Mah. Ekin Cad. No:25</p>
                <p>34513, Esenyurt / İSTANBUL, TR</p>
                <p className="mt-4">M: <a href="mailto:info@vestistextile.com" className="text-black">info@vestistextile.com</a></p>
                <p>T: <a href="tel:+908502857575" className="text-black">+90 850 285 75 75</a></p>
              </div>

            </div>

            <div className="w-full h-[600px] mt-12">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3573.207173415018!2d28.79214537642371!3d40.974483121504605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa3b41ae5341d%3A0x5caf659c26258770!2sVestis%20Textile!5e1!3m2!1str!2str!4v1740472690841!5m2!1str!2str" width="100%" height="100%" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade">
          </iframe>
          </div>

    </>
  )
} 