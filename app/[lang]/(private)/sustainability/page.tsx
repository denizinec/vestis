import Sustainability from '@/components/sustainability';
import ProductsSection from '@/components/products-section';
import ContactCta from '@/components/contact-cta';

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen pt-40">
      <Sustainability />
      <ProductsSection />
      <ContactCta />
    </div>
  );
}