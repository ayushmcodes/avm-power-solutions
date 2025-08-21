import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import schneiderLogo from "@/assets/schneider-logo.svg";
import lappLogo from "@/assets/lapp-logo.svg";
import keiLogo from "@/assets/kei-logo.png";

const ProductsSection = () => {
  const productCategories = [
    {
      brand: "Schneider Electric",
      logo: schneiderLogo,
      description: "World-leading electrical solutions and automation products"
    },
    {
      brand: "LAPP Cable",
      logo: lappLogo,
      description: "Premium cables and connection technology for industry"
    },
    {
      brand: "KEI Cable",
      logo: keiLogo,
      description: "Specialized industrial cables for demanding applications"
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
                <CardHeader className="text-center pb-8">
                  <div className="w-32 h-20 mx-auto mb-6 flex items-center justify-center bg-white rounded-lg shadow-md p-4">
                    <img 
                      src={category.logo} 
                      alt={`${category.brand} logo`}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground mb-2">
                    {category.brand}
                  </CardTitle>
                  <p className="text-muted-foreground">
                    {category.description}
                  </p>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button 
                    variant="outline" 
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground group-hover:shadow-lg transition-professional"
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