import { Card, CardContent } from "@/components/ui/card";
import { Factory, Building2, Zap, Fuel } from "lucide-react";

const IndustriesSection = () => {
  const industries = [
    {
      icon: <Factory className="w-12 h-12 text-primary" />,
      title: "Manufacturing",
      description: "Complete electrical solutions for manufacturing facilities, production lines, and industrial automation systems.",
      applications: ["Assembly Lines", "CNC Machines", "Robotics", "Quality Control"]
    },
    {
      icon: <Building2 className="w-12 h-12 text-primary" />,
      title: "Infrastructure",
      description: "Power distribution and control systems for commercial buildings, data centers, and smart infrastructure projects.",
      applications: ["Smart Buildings", "Data Centers", "Hospitals", "Transportation"]
    },
    {
      icon: <Zap className="w-12 h-12 text-primary" />,
      title: "Automation",
      description: "Advanced automation solutions for process control, SCADA systems, and industrial IoT implementations.",
      applications: ["Process Control", "SCADA Systems", "PLC Networks", "Industrial IoT"]
    },
    {
      icon: <Fuel className="w-12 h-12 text-primary" />,
      title: "Energy",
      description: "Specialized electrical equipment for power generation, renewable energy, and energy distribution systems.",
      applications: ["Power Plants", "Solar Farms", "Wind Energy", "Grid Systems"]
    }
  ];

  return (
    <section id="industries" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Industries We Serve
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Powering diverse industries with specialized electrical solutions. 
              From manufacturing to energy, we provide the expertise and products you need.
            </p>
          </div>

          {/* Industries Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {industries.map((industry, index) => (
              <Card key={index} className="group hover-lift shadow-professional border-0 card-gradient">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-bounce">
                        {industry.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-3">
                        {industry.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {industry.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {industry.applications.map((app, appIndex) => (
                          <span 
                            key={appIndex}
                            className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                          >
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Industry Stats */}
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
              Trusted Across Industries
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-primary">200+</div>
                <div className="text-muted-foreground">Manufacturing Plants</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-primary">150+</div>
                <div className="text-muted-foreground">Infrastructure Projects</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-primary">100+</div>
                <div className="text-muted-foreground">Automation Systems</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-primary">50+</div>
                <div className="text-muted-foreground">Energy Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;