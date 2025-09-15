import { Link } from "react-router-dom";
import roofingImage1 from "@/assets/portfolio-roofing-1.jpg";
import roofingImage2 from "@/assets/portfolio-roofing-2.jpg";
import aduImage1 from "@/assets/portfolio-adu-1.jpg";
import kitchenImage1 from "@/assets/portfolio-kitchen-1.jpg";
import bathroomImage1 from "@/assets/portfolio-bathroom-1.jpg";
import additionImage1 from "@/assets/portfolio-addition-1.jpg";

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "Roof Installation Project",
      category: "Roofing",
      image: roofingImage1,
      description: "Complete roof replacement with high-quality materials",
      link: "/roofing"
    },
    {
      id: 2,
      title: "Residential Roof Renovation",
      category: "Roofing", 
      image: roofingImage2,
      description: "Modern tile roofing installation",
      link: "/roofing"
    },
    {
      id: 3,
      title: "ADU Construction",
      category: "Construction",
      image: aduImage1,
      description: "Accessory dwelling unit construction project",
      link: "/adu-construction"
    },
    {
      id: 4,
      title: "Kitchen Remodeling",
      category: "Remodeling",
      image: kitchenImage1,
      description: "Complete kitchen renovation with modern design",
      link: "/kitchen-remodeling"
    },
    {
      id: 5,
      title: "Bathroom Renovation",
      category: "Remodeling",
      image: bathroomImage1,
      description: "Luxury bathroom remodeling project",
      link: "/bathroom-renovation"
    },
    {
      id: 6,
      title: "Room Addition",
      category: "Construction",
      image: additionImage1,
      description: "Home extension and room addition project",
      link: "/room-addition"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-background to-construction-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-construction-900 mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-construction-600 max-w-2xl mx-auto">
            See the quality craftsmanship and attention to detail in our completed projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <Link
              key={item.id}
              to={item.link}
              className="group bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 block"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 left-4">
                  <span className="bg-construction-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-construction-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-construction-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center bg-construction-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-construction-700 transition-colors duration-300"
          >
            Start Your Project Today
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;