import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Award, Users, Clock } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-construction-dark mb-6">
              About Merit Construction & Design
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              With over 25 years of experience in the construction industry, Merit Construction & Design 
              has established itself as a trusted name in Los Angeles for quality roofing and general 
              contracting services.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              As a regional contractor for Polyglass roofing products, we offer extended warranties 
              and are continuously expanding our certifications with other leading suppliers to provide 
              you with the best options for your project.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 text-construction-blue mr-3" />
                <span className="text-foreground">Licensed General Contractor (Lic #1072096)</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 text-construction-blue mr-3" />
                <span className="text-foreground">Regional Polyglass Roofing Contractor</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 text-construction-blue mr-3" />
                <span className="text-foreground">Fully Insured & Bonded</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 text-construction-blue mr-3" />
                <span className="text-foreground">25+ Years Experience</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <Card className="text-center p-6 border border-border shadow-lg">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-construction-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-construction-blue" />
                </div>
                <h3 className="text-2xl font-bold text-construction-dark mb-2">25+</h3>
                <p className="text-muted-foreground">Years Experience</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 border border-border shadow-lg">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-construction-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-construction-blue" />
                </div>
                <h3 className="text-2xl font-bold text-construction-dark mb-2">500+</h3>
                <p className="text-muted-foreground">Projects Completed</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 border border-border shadow-lg">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-construction-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-construction-blue" />
                </div>
                <h3 className="text-2xl font-bold text-construction-dark mb-2">100%</h3>
                <p className="text-muted-foreground">Licensed & Insured</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 border border-border shadow-lg">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-construction-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-construction-blue" />
                </div>
                <h3 className="text-2xl font-bold text-construction-dark mb-2">24/7</h3>
                <p className="text-muted-foreground">Emergency Service</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;