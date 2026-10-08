import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About 
              <span className="block text-primary">MPAMBIJE GROUP</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-4xl mx-auto">
              MPAMBIJE GROUP is a premier real estate development and investment company based in Tanzania, committed to delivering exceptional properties that capture the essence of East African elegance. We specialize in luxury villa development, prime land sourcing, strategic property investment, and comprehensive property management services.
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-4xl mx-auto">
              Our approach combines modern design with respect for Tanzania's rich natural heritage. We create properties that offer both exceptional living experiences and strong investment returns, serving local and international clients seeking premium real estate opportunities in one of Africa's most dynamic markets.
            </p>
            <div className="flex justify-center">
              <Button variant="hero" size="lg">
                Learn Our Story
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Our Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link 
                  to="/villa-sales"
                  className="bg-primary/20 hover:bg-primary/30 text-foreground font-medium py-5 px-6 rounded-lg border border-primary/30 hover:border-primary/50 transition-all duration-300 hover:scale-105 text-center text-lg h-20 flex items-center justify-center"
                >
                  🏡 Villa Development
                </Link>
                <a 
                  href="https://wa.me/6282114511214?text=Hello%20Tropikal%20Bali%20Group%2C%0A%0AI%20am%20interested%20in%20purchasing%20land%20in%20Bali%20for%20investment%20purposes.%20I%20would%20like%20to%20learn%20more%20about%20available%20properties%20and%20discuss%20my%20requirements%20with%20your%20team.%0A%0ACould%20we%20schedule%20a%20consultation%20to%20discuss%20suitable%20land%20options%3F%0A%0AThank%20you."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary/20 hover:bg-primary/30 text-foreground font-medium py-5 px-6 rounded-lg border border-primary/30 hover:border-primary/50 transition-all duration-300 hover:scale-105 text-center text-lg h-20 flex items-center justify-center"
                >
                  🌴 Land Sourcing & Sales
                </a>
                <Link 
                  to="/villa-sales"
                  className="bg-primary/20 hover:bg-primary/30 text-foreground font-medium py-5 px-6 rounded-lg border border-primary/30 hover:border-primary/50 transition-all duration-300 hover:scale-105 text-center text-lg h-20 flex items-center justify-center"
                >
                  💰 Property Investment
                </Link>
                <Link 
                  to="/property-management"
                  className="bg-primary/20 hover:bg-primary/30 text-foreground font-medium py-5 px-6 rounded-lg border border-primary/30 hover:border-primary/50 transition-all duration-300 hover:scale-105 text-center text-lg h-20 flex items-center justify-center"
                >
                  🔧 Full Service Villa Management
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;