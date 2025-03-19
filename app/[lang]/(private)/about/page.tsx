import AboutSection from '@/components/about-section';
import ServicesSection from '@/components/services-section';
import ProductsSection from '@/components/products-section';
import ContactCta from '@/components/contact-cta';

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen pt-40">
      <AboutSection />
      <ServicesSection />
      <ProductsSection />
      <ContactCta />
    </div>
  );
}