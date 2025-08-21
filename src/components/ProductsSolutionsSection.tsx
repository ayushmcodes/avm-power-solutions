import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import enclosuresImg from "@/assets/enclosures.png";
import controllingSignallingImg from "@/assets/controlling and signalling.png";
import mcbAcbImg from "@/assets/mcb and acb.jpeg";
import meterCapacitorImg from "@/assets/meter and capcitors.png";

const ProductsSolutionsSection = () => {
  const productSolutions = [
    {
      title: "Enclosures",
      image: enclosuresImg,
      description: "Industrial electrical enclosures and cabinets for protection and organization"
    },
    {
      title: "Controlling & Signalling",
      image: controllingSignallingImg,
      description: "Advanced control systems and signalling devices for industrial automation"
    },
    {
      title: "MCB & ACB",
      image: mcbAcbImg,
      description: "Miniature Circuit Breakers and Air Circuit Breakers for electrical protection"
    },
    {
      title: "Meters & Capacitors",
      image: meterCapacitorImg,
      description: "Precision meters and power factor correction capacitors"
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Products and Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive electrical solutions designed to meet the diverse needs of modern industries. 
              From protection to control, we provide everything you need for your electrical infrastructure.
            </p>
          </div>

          {/* Product Solutions Grid */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {productSolutions.map((product, index) => (
              <Card key={index} className="group hover-lift shadow-professional border-0 card-gradient overflow-hidden">
                <CardHeader className="text-center">
                  <div className="w-full h-48 mx-auto mb-6 flex items-center justify-center bg-white/90 rounded-lg shadow-md p-4 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="max-w-full max-h-full object-cover rounded-md transition-transform group-hover:scale-105"
                    />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground mb-3">
                    {product.title}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {product.description}
                  </p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSolutionsSection;
