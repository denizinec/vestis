'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useParams, usePathname } from 'next/navigation';
import { Locale } from '@/lib/types';

type Props = {
  dict: any;
  lang: string;
}

const Navbar = ({ dict }: Props) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHomePage, setIsHomePage] = useState(true);

  const pathname = usePathname();
  const { lang } = useParams() as { lang: Locale };
  const path = pathname.split(`/${lang}`)[1] || '/';

  useEffect(() => {
    const homePage = path === `/home`;
    setIsHomePage(homePage);

    const updateScrollState = () => {
      if (homePage) {
        setIsScrolled(window.scrollY > 10);
      } else {
        setIsScrolled(true);
      }
    };
    
    updateScrollState();
    
    window.addEventListener('scroll', updateScrollState);
    return () => window.removeEventListener('scroll', updateScrollState);
  }, [path]);

  const navLinks = [
    { name: `${dict.navigation.home}`, href: `/${lang}/home` },
    { name: `${dict.navigation.about}`, href: `/${lang}/about` },
    { name: `${dict.navigation["design-production"]}`, href: `/${lang}/design-production` },
    { name: `${dict.navigation.sustainability}`, href: `/${lang}/sustainability` },
    { name: `${dict.navigation.contact}`, href: `/${lang}/contact` },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isMobileMenuOpen || isScrolled
          ? 'bg-gray-900/95' 
          : !isScrolled
            ? 'bg-transparent' 
            : 'bg-gray-900/95 backdrop-blur-sm'
      )}
    >
      
      <div className="container mx-auto px-4 py-4 flex items-center justify-between h-40">
        
        <Link href="/home" className="relative z-10">
          <Image className='invert' src="/images/logoo2.png" alt="VESTIS" width={250} height={250} />
        </Link>

        

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => link ? (
            <Link
              key={link.name}
              href={link.href}
              className="text-white text-sm font-medium hover:text-gray-300 transition-colors uppercase"
            >
              {link.name}
            </Link>
          ) : null)}
            
            
        </nav>
        <div className="flex space-x-3 text-sm text-white">
            <Link 
              href={`/tr${path}`}
              className={`hover:text-gray-300 ${lang === 'tr' ? 'font-bold' : ''}`}
            >
              <Image  src="/images/flags/tr.png" alt="TR" width={20} height={20} />
            </Link>
            <span>/</span>
            <Link 
              href={`/en${path}`}
              className={`hover:text-gray-300 ${lang === 'en' ? 'font-bold' : ''}`}
            >
              <Image src="/images/flags/uk.png" alt="EN" width={20} height={20} />
            </Link>
          </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white z-10"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-gray-900/95 flex flex-col items-center justify-center md:hidden">
            <nav className="flex flex-col items-center space-y-8">
              {navLinks.map((link) => link ? (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white text-xl font-medium hover:text-gray-300 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ) : null)}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;