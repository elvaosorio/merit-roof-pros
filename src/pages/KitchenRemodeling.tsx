import kitchenImage1 from "@/assets/portfolio-kitchen-1.jpg";

const KitchenRemodeling = () => {
  const images = [
    kitchenImage1,
    kitchenImage1, // Placeholder - will be replaced with actual photos
    kitchenImage1,
    kitchenImage1,
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-construction-50">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-construction-900 mb-4">
            Kitchen Remodeling
          </h1>
          <p className="text-xl text-construction-600 max-w-3xl mx-auto">
            Create the kitchen of your dreams with our comprehensive remodeling services. 
            From modern designs to classic styles, see our portfolio of stunning kitchen transformations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={image}
                  alt={`Kitchen remodeling project ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center bg-construction-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-construction-700 transition-colors duration-300"
          >
            Start Your Kitchen Remodel
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default KitchenRemodeling;