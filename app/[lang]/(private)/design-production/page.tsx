'use client'
import { useTranslation } from '@/components/TranslationWrapper';
import DesignProduction from '@/components/design-production';
import PerformanceFeatures from '@/components/performance-features';
import ProductsSection from '@/components/products-section';
import ContactCta from '@/components/contact-cta';

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen pt-40">
      <DesignProduction />
      <ProductsSection />
      <PerformanceFeatures />
    </div>
  );
}