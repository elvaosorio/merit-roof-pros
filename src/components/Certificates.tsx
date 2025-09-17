import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, FileCheck, Shield, Star } from "lucide-react";

const Certificates = () => {
  const certificates = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "General Contractor License",
      number: "License #1072096",
      issuer: "California Contractors State License Board",
      status: "Active",
      description: "Authorized to perform general contracting work throughout California"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Polyglass Regional Contractor",
      number: "Regional Partner",
      issuer: "Polyglass Roofing Products",
      status: "Certified",
      description: "Authorized installer with access to extended warranty programs"
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "Liability Insurance",
      number: "Policy Active",
      issuer: "Professional Insurance Carrier",
      status: "Current",
      description: "Comprehensive general liability and workers compensation coverage"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Owens Corning Preferred Contractor",
      number: "",
      issuer: "Owens Corning Roofing",
      status: "Certified",
      description: "Recognized for meeting high standards of professionalism, reliability, and craftsmanship. Provides access to premium Owens Corning products and extended warranty options."

    }
  ];

  return (
    <section id="certificates" className="py-20 bg-gradient-to-b from-construction-light to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-construction-dark mb-4">
            Licenses & Certifications
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our certifications and licenses demonstrate our commitment to professional standards, 
            quality workmanship, and industry best practices.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {certificates.map((cert, index) => (
            <Card key={index} className="border border-border shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="w-16 h-16 bg-construction-blue/10 rounded-full flex items-center justify-center">
                    <div className="text-construction-blue">{cert.icon}</div>
                  </div>
                  <Badge 
                    variant={cert.status === 'Active' || cert.status === 'Current' || cert.status === 'Certified' ? 'default' : 'secondary'}
                    className={cert.status === 'Active' || cert.status === 'Current' || cert.status === 'Certified' ? 'bg-green-100 text-green-800' : ''}
                  >
                    {cert.status}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-construction-dark mt-4">{cert.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-construction-blue">{cert.number}</p>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  </div>
                  <p className="text-muted-foreground">{cert.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            All licenses and certifications are kept current and in good standing. 
            Contact us for verification or additional certification information.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certificates;