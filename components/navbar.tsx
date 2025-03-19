"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHomePage, setIsHomePage] = useState(true);

  useEffect(() => {
    // Check if we're on the home page
    const path = window.location.pathname;
    const homePage = path === '/' || path === '/home';
    setIsHomePage(homePage);
    
    const handleScroll = () => {
      // Only track scroll on homepage
      setIsScrolled(window.scrollY > 10);
      if (homePage) {
        setIsScrolled(window.scrollY > 10);
      }
    };


   
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '/home' },
    { name: 'ABOUT US', href: '/about' },
    { name: 'DESIGN & PRODUCTION', href: '/design-production' },,
    { name: 'VESTIS TEXTILES', href: '/vestis-textile' },
    { name: 'SUSTAINABILITY', href: '/sustainability' },
    { name: 'CONTACT US', href: '/contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        !isScrolled 
          ? 'bg-transparent' 
          : 'bg-black/90 backdrop-blur-sm'
      )}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between h-40 ">
        <Link href="/home" className="relative z-10">
          <Image className='invert' src="/images/logoo2.png" alt="VESTIS" width={250} height={250} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => link ? (
            <Link
              key={link.name}
              href={link.href}
              className="text-white text-sm font-medium hover:text-gray-300 transition-colors"
            >
              {link.name}
            </Link>
          ) : null)}
            
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white z-10"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-black/95 flex flex-col items-center justify-center md:hidden">
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