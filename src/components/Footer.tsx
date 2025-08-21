import { Zap, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Zap className="w-8 h-8" />
              <div>
                <div className="text-xl font-bold">AVM Electrical
                  <span className="ml-2 text-lg font-medium text-primary-foreground/90">
                    & Automation
                  </span>
                </div>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Powering industries with trusted electrical solutions. Your reliable partner 
              for industrial electrical products and automation systems.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              {[
                { name: "Home", href: "#home" },
                { name: "About Us", href: "#about" },
                { name: "Products", href: "#products" },
                { name: "Industries", href: "#industries" },
                { name: "Contact", href: "#contact" }
              ].map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-professional text-sm"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Brands</h4>
            <div className="space-y-2 text-sm">
              <div className="text-primary-foreground/80">Schneider Electric</div>
              <div className="text-primary-foreground/80">LAPP Cable</div>
              <div className="text-primary-foreground/80">KIE Cable</div>
              <div className="text-primary-foreground/80">Custom Solutions</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-primary-foreground/60" />
                <div className="text-primary-foreground/80">
                  4b, Shop, 8, Dada Nagar<br />
                  Industrial Area, Kanpur<br />
                  Uttar Pradesh 208022
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary-foreground/60" />
                <span className="text-primary-foreground/80">+919839179289</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary-foreground/60" />
                <span className="text-primary-foreground/80">skt.amit14@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/80">
            <div>
              © {currentYear} AVM Electrical & Automation. All rights reserved.
            </div>
            <div className="flex gap-6">
              <span className="hover:text-primary-foreground transition-professional cursor-pointer">
                Privacy Policy
              </span>
              <span className="hover:text-primary-foreground transition-professional cursor-pointer">
                Terms of Service
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;