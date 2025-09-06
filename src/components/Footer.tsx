import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-construction-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Merit Construction & Design</h3>
            <p className="text-white/80 mb-4">
              Licensed roofing and general contractor serving Los Angeles with quality 
              craftsmanship and reliable service for over 25 years.
            </p>
            <p className="text-construction-accent font-semibold">License #1072096</p>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-white/80">
              <li>Roofing Installation & Repair</li>
              <li>ADU Construction</li>
              <li>Room Additions</li>
              <li>New Construction</li>
              <li>Kitchen & Bath Remodeling</li>
              <li>Fire & Water Restoration</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-white/80">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-construction-accent" />
                <a href="tel:3236109999" className="hover:text-construction-accent transition-colors">
                  (323) 610-9999
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-construction-accent" />
                <a href="mailto:elsa@gmail.com" className="hover:text-construction-accent transition-colors">
                  elsa@gmail.com
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-construction-accent mt-1" />
                <div>
                  <p>1452 Volney Dr.</p>
                  <p>Los Angeles, CA 90063</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p>&copy; 2024 Merit Construction & Design. All rights reserved.</p>
          <p className="mt-2">Professional roofing and construction services in Los Angeles County.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;