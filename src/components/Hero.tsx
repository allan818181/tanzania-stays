import { Button } from "@/components/ui/button";
import { memo } from "react";

const Hero = memo(() => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/lovable-uploads/62f865e1-a722-4a85-bcbc-767770753ecb.png)` }}
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Discover Your
          <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
            Paradise
          </span>
          in Tanzania
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
          Premium Tanzanian properties, from serene retreats to luxury family villas with exceptional design, trusted service, and prime locations near the country's most spectacular destinations.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#properties">
            <Button variant="tropical" size="lg" className="text-lg px-8 py-4">
              View Properties
            </Button>
          </a>
          <a href="#about">
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white hover:text-foreground">
              Learn More
            </Button>
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = "Hero";

export default Hero;