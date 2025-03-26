'use client'

import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { useParams } from 'next/navigation';
import { Locale } from '@/lib/types';
import { useTranslation } from './TranslationWrapper';
import { SiStripe } from 'react-icons/si';


type Props = {
  dict: any;
}

const Footer = ({ dict }: Props) => {
  const { lang } = useParams() as { lang: Locale };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-12 py-8 flex flex-col justify-start">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8  ">
          {/* Company Info */}
          <div>
            <div className='flex justify-center items-center'>
              <Link href={`/${lang}/home`}>
                <Image src="/images/logoo1.png" alt="Vestis Logo" width={250} height={250} className="invert" />
              </Link>
            </div>
          <p className="text-gray-400 mt-3 mb-3">
              {dict.navigation["vestis-footer"]}
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/vestistextile/" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.shopier.com/s/store/VestisTekstil" className="text-gray-400 hover:text-white transition-colors">
                <SiStripe size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-1">{dict.navigation.menu}</h3>
            <hr className="border-gray-500 mb-4" />
            <ul className="space-y-2">
              <li>
                <Link href={`/${lang}/about`} className="text-gray-400 hover:text-white transition-colors">
                  {dict.navigation.about}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/design-production`} className="text-gray-400 hover:text-white transition-colors">
                  {dict.navigation["design-production"]}
                </Link>
              </li>

              <li>
                <Link href={`/${lang}/sustainability`} className="text-gray-400 hover:text-white transition-colors">
                  {dict.navigation.sustainability}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/contact`} className="text-gray-400 hover:text-white transition-colors">
                  {dict.navigation.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-1">{dict.navigation.contactContent}</h3>
            <hr className="border-gray-500 mb-4" />

            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={30} className="text-gray-400 mr-2 mt-1" />
                <span className="text-gray-400">
                Yakuplu Mah. Hürriyet Bulvarı, Skyport Residence No:1 İç Kapı No:113 <br /> 
                Beylikdüzü / İSTANBUL</span>
                
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-gray-400 mr-2" />
                <span className="text-gray-400">+90 0212 876 10 61</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-gray-400 mr-2" />
                <span className="text-gray-400">+90 532 481 03 46</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-gray-400 mr-2" />
                <span className="text-gray-400"> <a href="mailto:info@vestistextile.com">info@vestistextile.com</a></span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-1">{dict.navigation.subscribe}</h3>
            <hr className="border-gray-500 mb-4" />

            <p className="text-gray-400 mb-4">
              {dict.navigation.newsletter}
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder={dict.navigation.email}
                className="px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-white/20"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-white text-black rounded-md font-medium hover:bg-gray-200 transition-colors"
              >
                {dict.navigation.subscribe}
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2023 Vestis Textile. {dict.navigation.rights}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              {dict.navigation.kvkk}
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              {dict.navigation["terms-conditions"]}
            </Link>
    
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;