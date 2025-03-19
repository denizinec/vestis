'use client'

import Hero from '@/components/hero';
import AboutSection from '@/components/about-section';
import ServicesSection from '@/components/services-section';
import Loading from '@/components/ui/loading';
import ProductsSection from '@/components/products-section';
import ContactCta from '@/components/contact-cta';
import { useLoading } from '@/components/loading-provider';
import { useTranslation } from '@/components/TranslationWrapper';

export default function Page() {
  const { isLoading } = useLoading();
  const { dict } = useTranslation();
  return (
    <>
      {isLoading ? <Loading /> : (
        <>
          <Hero />
          <AboutSection />
          <ServicesSection />
          <ContactCta />
        </>
      )}
    </>
  );
}