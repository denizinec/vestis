"use client";

import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    title: 'VESTIS VIRUM REDDIT',
    subtitle: 'Shaping the Future of Fashion Today',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
    title: 'Performance & Innovation',
    subtitle: 'Advanced Technical Apparel for Modern Life',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2027&q=80',
    title: 'Sustainable Manufacturing',
    subtitle: 'Creating a Better Tomorrow for Future Generations',
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            'absolute inset-0 transition-opacity duration-1000',
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          )}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ))}

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center px-4 md:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 transition-all duration-700 transform translate-y-0 opacity-100">
          {slides[currentSlide].title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl transition-all duration-700 delay-300 transform translate-y-0 opacity-100">
          {slides[currentSlide].subtitle}
        </p>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-gray-200 transition-colors"
        >
          Discover More <ArrowRight size={16} />
        </a>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={cn(
              'w-3 h-3 rounded-full transition-all',
              index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
            )}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;