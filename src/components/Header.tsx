import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/d3c9e278-96c2-43e6-91db-b3fb5d37e0df.png" 
              alt="Merit Construction & Design Logo" 
              className="h-10 md:h-12 w-auto"
            />
            <span className="text-sm text-muted-foreground hidden md:block">
              Lic #1072096
            </span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-construction-blue transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-construction-blue transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('certificates')}
              className="text-foreground hover:text-construction-blue transition-colors"
            >
              Certificates
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-construction-blue transition-colors"
            >
              Contact
            </button>
          </nav>

          <div className="flex items-center space-x-2">
            <a href="tel:3236109999" className="hidden md:flex items-center text-sm text-foreground hover:text-construction-blue">
              <Phone className="w-4 h-4 mr-1" />
              (323) 610-9999
            </a>
            <Button onClick={() => scrollToSection('contact')} className="bg-construction-blue hover:bg-construction-blue/90">
              Get Quote
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;