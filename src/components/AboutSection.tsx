import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Trophy, Globe } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: <Trophy className="w-8 h-8 text-primary" />,
      title: "Years of Excellence",
      description: "Decades of experience in industrial electrical solutions"
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Expert Team",
      description: "Certified professionals with deep industry knowledge"
    },
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Global Reach",
      description: "Serving industries across multiple sectors worldwide"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-primary" />,
      title: "Quality Assured",
      description: "Premium products from world-renowned manufacturers"
    }
  ];

  const achievements = [
    "Authorized distributor for premium electrical brands",
    "Comprehensive product range for all industrial needs",
    "Expert technical support and consultation",
    "Fast delivery and reliable supply chain",
    "Custom solutions for unique requirements"
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About AVM Electrical & Automation
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your trusted partner for industrial electrical products and automation solutions. 
              We deliver excellence through quality products, expert knowledge, and reliable service.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Column - Description */}
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Leading the Industrial Electrical Revolution
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                AVM Electrical and Automation has established itself as a premier supplier of industrial 
                electrical products and automation solutions. Our commitment to quality, innovation, and 
                customer satisfaction has made us the preferred choice for industries seeking reliable 
                electrical infrastructure.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We specialize in providing comprehensive electrical solutions that power modern industries. 
                From control systems and automation equipment to high-quality cables and switchgear, 
                we ensure your operations run smoothly and efficiently.
              </p>
              
              {/* Achievements List */}
              <div className="space-y-3 pt-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="hover-lift card-gradient shadow-professional border-0">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      {feature.icon}
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">500+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">99%</div>
              <div className="text-muted-foreground">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;