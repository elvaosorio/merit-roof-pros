import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {

  return (
    <section id="contact" className="py-20 bg-construction-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-construction-dark mb-4">
            Get Your Free Estimate
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your construction project? Contact Merit Construction & Design today 
            for a free consultation and competitive quote.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <Card className="border border-border shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-construction-dark">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-construction-blue/10 rounded-full flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-construction-blue" />
                  </div>
                  <div>
                    <p className="font-semibold text-construction-dark">Phone</p>
                    <a href="tel:3236106750" className="text-construction-blue hover:underline">
                      (323) 610-6750
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-construction-blue/10 rounded-full flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-construction-blue" />
                  </div>
                  <div>
                    <p className="font-semibold text-construction-dark">Email</p>
                    <a href="mailto:pablo323diaz@gmail.com" className="text-construction-blue hover:underline">
                      pablo323diaz@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-construction-blue/10 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-construction-blue" />
                  </div>
                  <div>
                    <p className="font-semibold text-construction-dark">Address</p>
                    <p className="text-muted-foreground">
                      1452 Volney Dr.<br />
                      Los Angeles, CA 90063
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-construction-blue/10 rounded-full flex items-center justify-center mr-4">
                    <Clock className="w-6 h-6 text-construction-blue" />
                  </div>
                  <div>
                    <p className="font-semibold text-construction-dark">Business Hours</p>
                    <p className="text-muted-foreground">
                      Monday - Friday: 7:00 AM - 6:00 PM<br />
                      Saturday: 8:00 AM - 4:00 PM<br />
                      Sunday: Emergency Service Only
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border border-border shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-construction-dark mb-4">License Information</h3>
                <div className="space-y-2">
                  <p className="text-muted-foreground">
                    <span className="font-semibold">License Number:</span> #1072096
                  </p>
                  <p className="text-muted-foreground">
                    <span className="font-semibold">License Type:</span> General Contractor
                  </p>
                  <p className="text-muted-foreground">
                    <span className="font-semibold">Coverage:</span> Roofing & General Construction
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="border border-border shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-construction-dark">Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <p className="text-muted-foreground mb-6">
                  Ready to start your construction project? Get in touch with us today!
                </p>
              </div>
              
              <div className="space-y-4">
                <Button 
                  asChild
                  className="w-full bg-construction-blue hover:bg-construction-blue/90 text-white py-4 text-lg font-semibold"
                >
                  <a href="tel:3236106750">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now: (323) 610-6750
                  </a>
                </Button>
                
                <Button 
                  asChild
                  variant="outline"
                  className="w-full border-construction-blue text-construction-blue hover:bg-construction-blue/10 py-4 text-lg font-semibold"
                >
                  <a href="mailto:pablo323diaz@gmail.com">
                    <Mail className="w-5 h-5 mr-2" />
                    Send Email
                  </a>
                </Button>
              </div>
              
              <div className="text-center pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  Free estimates • Licensed & Insured • 25+ Years Experience
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;