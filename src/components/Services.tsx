import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Wrench, Hammer, Droplets, Flame, Plus } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Home className="w-8 h-8" />,
      title: "Roofing Services",
      description: "Complete roofing solutions including installation, repair, and maintenance. Regional contractor for Polyglass roofing products with extended warranties.",
      features: ["New Roof Installation", "Roof Repairs", "Roof Maintenance", "Polyglass Products", "Extended Warranties"]
    },
    {
      icon: <Plus className="w-8 h-8" />,
      title: "ADU Construction",
      description: "Accessory Dwelling Units (ADUs) to maximize your property value and create additional living space for family or rental income.",
      features: ["Design & Planning", "Permit Assistance", "Complete Construction", "Electrical & Plumbing", "Final Inspections"]
    },
    {
      icon: <Hammer className="w-8 h-8" />,
      title: "Room Additions",
      description: "Expand your living space with professional room additions that seamlessly integrate with your existing home structure.",
      features: ["Family Rooms", "Bedrooms", "Home Offices", "Sunrooms", "Second Stories"]
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "New Construction",
      description: "Ground-up construction services for residential projects, bringing your dream home to life with quality craftsmanship.",
      features: ["Custom Homes", "Site Preparation", "Foundation Work", "Framing", "Complete Build-Out"]
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Kitchen & Bath Remodeling",
      description: "Transform your kitchen and bathroom spaces with modern designs, quality materials, and expert installation.",
      features: ["Kitchen Renovation", "Bathroom Remodel", "Cabinet Installation", "Countertop Installation", "Tile Work"]
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Fire & Water Restoration",
      description: "Emergency restoration services to restore your property after fire or water damage with quick response times.",
      features: ["Emergency Response", "Water Extraction", "Fire Damage Repair", "Smoke Remediation", "Complete Restoration"]
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-construction-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-construction-dark mb-4">
            Our Construction Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From roofing to complete home construction, we provide comprehensive building services 
            with licensed professionals and quality materials.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border border-border shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-construction-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-construction-blue">{service.icon}</div>
                </div>
                <CardTitle className="text-xl text-construction-dark">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-construction-blue rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  onClick={scrollToContact}
                  className="w-full mt-6 bg-construction-blue hover:bg-construction-blue/90"
                >
                  Get Quote
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;