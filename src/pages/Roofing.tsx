import roofingImage1 from "@/assets/0bcf6d8f-f227-4752-a50e-6f451a7a4791.jpg";
import roofingImage2 from "@/assets/2acecf0e-5a9a-481b-b61b-95b3e0779253.jpg";
import roofingImage3 from "@/assets/4cf41a36-aa41-46e8-aca3-18d7d1df0708.jpg";
import roofingImage4 from "@/assets/7fb78086-5695-4315-b8a6-499cbd9574fd.jpg";
import roofingImage5 from "@/assets/13d89e30-cf5f-4a32-87b7-0e8bc14a13cb.jpg";
import roofingImage6 from "@/assets/36a381f1-fb32-4de0-8567-91387a5a1b71.jpg";
import roofingImage7 from "@/assets/934e8fe5-6453-497d-a40c-92bfe8d4ff23.jpg";
import roofingImage8 from "@/assets/b5cb2986-a48b-44ee-a69f-1f2f78056ccf.jpg";
import roofingImage9 from "@/assets/c8aa7cff-bdc7-434f-84be-2f6e73d92b6a.jpg";
import roofingImage10 from "@/assets/IMG_5746.JPG";
import roofingImage11 from "@/assets/IMG_5747.JPG";
import roofingImage12 from "@/assets/IMG_5749.JPG";

const Roofing = () => {
  const images = [
    roofingImage1,
    roofingImage2,
    roofingImage3, // Placeholder - will be replaced with actual photos
    roofingImage4,
    roofingImage5,
    roofingImage6,
    roofingImage7,
    roofingImage8,
    roofingImage9,
    roofingImage10,
    roofingImage11,
    roofingImage12
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-construction-50">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-construction-900 mb-4">
            Roofing Services
          </h1>
          <p className="text-xl text-construction-600 max-w-3xl mx-auto">
            Protect your home with our professional roofing services. 
            From installations to repairs, see our portfolio of quality roofing projects using premium materials.
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
                  alt={`Roofing project ${index + 1}`}
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
            Get Your Roofing Quote
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Roofing;