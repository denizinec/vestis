import { useTranslation } from '@/components/TranslationWrapper';



const ProductsSection = () => {
  const { dict } = useTranslation();

  const products = [
    {
      id: 1,
      name: `${dict["design-production"]["outerwear"]}`,
      image: '/images/design-production/outerwear.png',
      description: `${dict["design-production"]["outerwear-description"]}`,
    },
    {
      id: 2,
      name: `${dict["design-production"]["activewear"]}`,
      image: '/images/design-production/activewear.png',
      description: `${dict["design-production"]["activewear-description"]}`,
    },
    {
      id: 3,
      name: `${dict["design-production"]["workwear"]}`,
      image: '/images/design-production/workwear.png',
      description: `${dict["design-production"]["workwear-description"]}`,
    },
    {
      id: 4,
      name: `${dict["design-production"]["knitwear"]}`,
      image: '/images/design-production/knitwear.png',
      description: `${dict["design-production"]["knitwear-description"]}`,
    },
  ];
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">{dict["design-production"]["our-products"]}</h2>
          <p className="max-w-2xl mx-auto text-gray-700">
            {dict["design-production"]["our-products-description"]}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="relative overflow-hidden mb-4 aspect-[4/5]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{product.name}</h3>
              <p className="text-gray-700">{product.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://www.instagram.com/vestistextile/"
            className="inline-block bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors"
          >
            {dict["design-production"]["view-all"]}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;