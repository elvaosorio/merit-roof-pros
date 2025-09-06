import { Button } from "@/components/ui/button";
import { Phone, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-construction-dark/90 to-construction-dark/60" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Expert Roofing & 
            <span className="text-construction-accent block">Construction Services</span>
          </h1>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Licensed roofing and general contractor serving Los Angeles with quality craftsmanship, 
            reliable service, and competitive pricing. Specializing in roofing, ADU construction, 
            and home remodeling.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="bg-construction-accent hover:bg-construction-accent/90 text-construction-dark px-8 py-3 text-lg font-semibold"
            >
              Get Free Estimate
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-construction-dark px-8 py-3 text-lg"
              asChild
            >
              <a href="tel:3236109999">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-6 text-white/90">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-construction-accent" />
              Licensed & Insured
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-construction-accent" />
              25+ Years Experience
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-construction-accent" />
              Free Estimates
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;