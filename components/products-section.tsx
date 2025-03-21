const products = [
  {
    id: 1,
    name: 'Outerwear',
    image: '/images/design-production/outerwear.png',
    description: 'Premium outerwear collections combining style, comfort, and technical performance.',
  },
  {
    id: 2,
    name: 'Activewear',
    image: '/images/design-production/activewear.png',
    description: 'High-performance activewear designed for comfort and functionality during physical activities.',
  },
  {
    id: 3,
    name: 'Workwear',
    image: '/images/design-production/workwear.png',
    description: 'Durable and professional workwear that combines functionality with modern design elements.',
  },
  {
    id: 4,
    name: 'Knitwear',
    image: '/images/design-production/knitwear.png',
    description: 'Innovative knitwear collections featuring the latest trends and technical advancements.',
  },
];

const ProductsSection = () => {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Products</h2>
          <p className="max-w-2xl mx-auto text-gray-700">
            Discover our diverse range of high-quality textiles designed to meet the needs of various industries and applications.
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
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;