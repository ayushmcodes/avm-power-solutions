import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Settings, Cable } from "lucide-react";
import heroImage from "@/assets/hero-industrial.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProducts = () => {
    const element = document.querySelector("#products");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Industrial electrical automation equipment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient opacity-85" />
        <div className="absolute inset-0 circuit-pattern opacity-20" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Powering Industries with
            <span className="block text-accent bg-background/20 px-4 py-2 rounded-lg mt-2 backdrop-blur-sm">
              Trusted Electrical Solutions
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
            Leading supplier of industrial electrical products and automation solutions. 
            Schneider Electric, LAPP Cable, and KIE Cable - trusted by industries worldwide.
          </p>

          {/* Feature Icons */}
          <div className="flex justify-center items-center gap-8 mb-10">
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <Zap className="w-6 h-6" />
              <span className="hidden sm:block">Automation</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <Settings className="w-6 h-6" />
              <span className="hidden sm:block">Control Systems</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <Cable className="w-6 h-6" />
              <span className="hidden sm:block">Industrial Cables</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToProducts}
              size="lg"
              className="bg-background text-primary hover:bg-background/90 hover-lift group px-8 py-4 text-lg font-semibold"
            >
              Explore Products
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-professional" />
            </Button>
            <Button 
              onClick={scrollToContact}
              variant="outline"
              size="lg"
              className="border-background text-background hover:bg-background hover:text-primary hover-lift px-8 py-4 text-lg font-semibold"
            >
              Get Quote
            </Button>
          </div>

          {/* Brand Logos Section */}
          <div className="mt-16 pt-8 border-t border-primary-foreground/20">
            <p className="text-primary-foreground/70 mb-6 text-lg">
              Authorized Distributor of Premium Brands
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
              <div className="bg-background/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                <span className="text-background font-bold text-xl">Schneider Electric</span>
              </div>
              <div className="bg-background/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                <span className="text-background font-bold text-xl">LAPP Cable</span>
              </div>
              <div className="bg-background/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                <span className="text-background font-bold text-xl">KIE Cable</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;