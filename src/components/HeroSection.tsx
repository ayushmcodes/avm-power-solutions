
import heroImage from "@/assets/hero-industrial.jpg";

const HeroSection = () => {

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Industrial electrical automation equipment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 circuit-pattern opacity-20" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Powering Industries with
            <span className="block text-accent mt-2">
              Trusted Electrical Solutions
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-12 text-primary-foreground/90 max-w-3xl mx-auto">
            Leading supplier of industrial electrical products and automation solutions. 
            Schneider Electric, LAPP Cable, and KIE Cable - trusted by industries worldwide.
          </p>


        </div>
      </div>


    </section>
  );
};

export default HeroSection;