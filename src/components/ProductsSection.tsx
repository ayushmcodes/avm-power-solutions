import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Cable, Settings, ChevronRight } from "lucide-react";

const ProductsSection = () => {
  const productCategories = [
    {
      brand: "Schneider Electric",
      icon: <Zap className="w-12 h-12 text-primary" />,
      description: "World-leading electrical solutions and automation products",
      products: [
        "Switchgear & Circuit Breakers",
        "Industrial Control & Automation",
        "Power Management Systems",
        "Variable Frequency Drives",
        "HMI & SCADA Solutions",
        "Motor Control Centers"
      ],
      color: "from-primary to-primary-dark"
    },
    {
      brand: "LAPP Cable",
      icon: <Cable className="w-12 h-12 text-primary" />,
      description: "Premium cables and connection technology for industry",
      products: [
        "Power & Control Cables",
        "Data Communication Cables",
        "Servo & Encoder Cables",
        "Industrial Ethernet Cables",
        "Flexible & Drag Chain Cables",
        "Custom Cable Solutions"
      ],
      color: "from-primary-light to-primary"
    },
    {
      brand: "KIE Cable",
      icon: <Settings className="w-12 h-12 text-primary" />,
      description: "Specialized industrial cables for demanding applications",
      products: [
        "High Temperature Cables",
        "Chemical Resistant Cables",
        "Oil & Gas Industry Cables",
        "Marine & Offshore Cables",
        "Mining Industry Cables",
        "Nuclear Grade Cables"
      ],
      color: "from-primary-dark to-primary-light"
    }
  ];

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Products & Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive range of industrial electrical products from world-renowned manufacturers. 
              Quality, reliability, and performance you can trust.
            </p>
          </div>

          {/* Product Categories */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {productCategories.map((category, index) => (
              <Card key={index} className="group hover-lift shadow-professional border-0 card-gradient overflow-hidden">
                <CardHeader className="text-center pb-4">
                  <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 shadow-hero`}>
                    {category.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground mb-2">
                    {category.brand}
                  </CardTitle>
                  <p className="text-muted-foreground">
                    {category.description}
                  </p>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3">
                    {category.products.map((product, productIndex) => (
                      <div key={productIndex} className="flex items-center gap-3 text-foreground hover:text-primary transition-professional">
                        <ChevronRight className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{product}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full mt-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground group-hover:shadow-lg transition-professional"
                  >
                    View Products
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Services */}
          <div className="accent-gradient rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Custom Solutions & Technical Support
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Beyond our extensive product catalog, we offer custom engineering solutions, 
              technical consultation, and comprehensive support to meet your specific requirements.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Engineering Support</h4>
                <p className="text-sm text-muted-foreground">Custom design and configuration services</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Technical Training</h4>
                <p className="text-sm text-muted-foreground">Product training and certification programs</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">After-Sales Service</h4>
                <p className="text-sm text-muted-foreground">Maintenance and warranty support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;