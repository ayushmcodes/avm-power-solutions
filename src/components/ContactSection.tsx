import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "Our Location",
      details: ["123 Industrial Avenue", "Business District", "City, State 12345"]
    },
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: "Phone Number",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"]
    },
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: "Email Address",
      details: ["info@avmelectrical.com", "sales@avmelectrical.com"]
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "Business Hours",
      details: ["Mon - Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 4:00 PM"]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Contact Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to power your next project? Contact our expert team for quotes, 
              technical support, or consultation on your electrical and automation needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-elegant card-gradient border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Send Us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="border-border focus:ring-primary focus:border-primary"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="border-border focus:ring-primary focus:border-primary"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      Company Name
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="border-border focus:ring-primary focus:border-primary"
                      placeholder="Your Company Ltd."
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="border-border focus:ring-primary focus:border-primary"
                      placeholder="Tell us about your project requirements or questions..."
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-dark text-primary-foreground hover-lift py-3 text-lg font-semibold"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Contact Information
                </h3>
                <p className="text-muted-foreground">
                  Our team is ready to assist you with expert advice and comprehensive solutions 
                  for all your industrial electrical needs.
                </p>
              </div>

              {contactInfo.map((info, index) => (
                <Card key={index} className="hover-lift shadow-professional border-0 card-gradient">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                          {info.icon}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">
                          {info.title}
                        </h4>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-muted-foreground text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Quick Contact CTA */}
              <div className="hero-gradient rounded-2xl p-8 text-center text-primary-foreground">
                <h4 className="text-xl font-bold mb-2">Need Immediate Assistance?</h4>
                <p className="mb-4 text-primary-foreground/90">
                  Call our technical support team for urgent inquiries
                </p>
                <Button 
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  Call Now: +1 (555) 123-4567
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;