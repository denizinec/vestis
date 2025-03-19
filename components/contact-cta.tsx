const ContactCta = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Textile Projects?</h2>
          <p className="text-gray-300 mb-8 text-lg">
            Contact our team of experts today to discuss how our premium textile solutions can elevate your products and meet your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-gray-200 transition-colors"
            >
              Contact Us
            </a>
            <a
              href="/catalog"
              className="inline-block bg-transparent border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white/10 transition-colors"
            >
              Download Catalog
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCta;