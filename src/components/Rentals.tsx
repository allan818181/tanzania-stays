import PropertyCard from "./PropertyCard";
import { allProperties } from "@/data/properties";
import { useNavigate } from "react-router-dom";

const Rentals = () => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    sessionStorage.setItem('enquiryData', JSON.stringify({
      type: 'rental-booking',
      message: "Hi! I am interested in booking a villa rental. Could you please help me with availability and pricing?"
    }));
    navigate('/thank-you');
  };

  return (
    <section className="pt-28 pb-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Villa Rentals
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover our collection of premium villas across Bali's most beautiful locations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {allProperties.map((property, index) => (
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
          <div className="bg-card p-8 rounded-lg shadow-tropical max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Book Your Villa?
            </h3>
            <p className="text-muted-foreground mb-6">
              Contact us directly on WhatsApp for instant booking and personalized assistance.
            </p>
            <button
              className="inline-flex items-center gap-2 bg-gradient-sunset text-white px-8 py-3 rounded-lg hover:shadow-tropical hover:scale-105 transform transition-smooth"
              onClick={handleBookNow}
            >
              <span>📱</span>
              Book Now on WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rentals;