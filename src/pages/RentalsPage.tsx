import { useEffect } from "react";
import Header from "@/components/Header";
import Rentals from "@/components/Rentals";
import Footer from "@/components/Footer";
import FloatingActionButton from "@/components/FloatingActionButton";

const RentalsPage = () => {
  useEffect(() => {
    // Check if there's a hash in the URL to scroll to a specific property
    if (window.location.hash) {
      const targetId = window.location.hash.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => {
          const headerHeight = 80;
          const elementPosition = element.offsetTop - headerHeight;
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Rentals />
      <Footer />
      <FloatingActionButton 
        text="Book Now" 
        icon="calendar"
        href="https://wa.me/6282114511214?text=Hi! I'm interested in booking a villa rental. Could you please help me with availability and pricing?"
      />
    </div>
  );
};

export default RentalsPage;