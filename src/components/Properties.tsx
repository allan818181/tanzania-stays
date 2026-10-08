import PropertyCard from "./PropertyCard";
import { featuredProperties } from "@/data/properties";
import { memo } from "react";

const Properties = memo(() => {

  return (
    <section id="properties" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Featured Properties
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of premium tropical properties in Bali's most sought-after locations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {featuredProperties.map((property, index) => (
            <div key={property.id} id={property.id} className="w-full">
              <PropertyCard 
                {...property} 
                showGallery={true}
                showModal={true}
                onAvailabilityClick={() => {
                  window.location.href = `/calendar/${property.id}`;
                }}
              />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="/rentals">
            <button className="bg-gradient-sunset text-white px-8 py-3 rounded-lg hover:shadow-tropical hover:scale-105 transform transition-smooth">
              View More Properties
            </button>
          </a>
        </div>
      </div>
    </section>
  );
});

Properties.displayName = "Properties";

export default Properties;