import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
                    <a href="tel:3236109999" className="text-construction-blue hover:underline">
                      (323) 610-9999
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-construction-blue/10 rounded-full flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-construction-blue" />
                  </div>
                  <div>
                    <p className="font-semibold text-construction-dark">Email</p>
                    <a href="mailto:osorioelva@gmail.com" className="text-construction-blue hover:underline">
                      osorioelva@gmail.com
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
              <CardTitle className="text-2xl text-construction-dark">Request a Quote</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-construction-dark mb-2">
                      First Name *
                    </label>
                    <Input 
                      id="firstName" 
                      placeholder="Your first name"
                      className="border-border focus:ring-construction-blue focus:border-construction-blue"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-construction-dark mb-2">
                      Last Name *
                    </label>
                    <Input 
                      id="lastName" 
                      placeholder="Your last name"
                      className="border-border focus:ring-construction-blue focus:border-construction-blue"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-construction-dark mb-2">
                    Email *
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your@email.com"
                    className="border-border focus:ring-construction-blue focus:border-construction-blue"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-construction-dark mb-2">
                    Phone *
                  </label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="(555) 123-4567"
                    className="border-border focus:ring-construction-blue focus:border-construction-blue"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-construction-dark mb-2">
                    Service Needed
                  </label>
                  <select 
                    id="service"
                    className="w-full px-3 py-2 border border-border rounded-md focus:ring-construction-blue focus:border-construction-blue"
                  >
                    <option value="">Select a service</option>
                    <option value="roofing">Roofing Services</option>
                    <option value="adu">ADU Construction</option>
                    <option value="addition">Room Addition</option>
                    <option value="new-construction">New Construction</option>
                    <option value="remodeling">Kitchen/Bath Remodeling</option>
                    <option value="restoration">Fire/Water Restoration</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-construction-dark mb-2">
                    Project Details
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Please describe your project, timeline, and any specific requirements..."
                    rows={4}
                    className="border-border focus:ring-construction-blue focus:border-construction-blue"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-construction-blue hover:bg-construction-blue/90 text-white py-3 text-lg font-semibold"
                >
                  Send Request
                </Button>
                
                <p className="text-sm text-muted-foreground text-center">
                  * Required fields. We'll respond within 24 hours.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;