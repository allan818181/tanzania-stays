import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Properties from "@/components/Properties";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingActionButton from "@/components/FloatingActionButton";

const Index = () => {
  useEffect(() => {
    // Handle URL hash scrolling when page loads
    const hash = window.location.hash.slice(1);
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          const headerHeight = hash === 'contact' ? 140 : 120;
          const elementPosition = element.offsetTop - headerHeight;
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Properties />
      <About />
      <Contact />
      <Footer />
      <FloatingActionButton 
        text="Book Now" 
        icon="calendar"
        href="https://wa.me/6282114511214?text=Hi! I'm interested in booking a villa rental. Could you please help me with availability and pricing?"
      />
    </div>
  );
};

export default Index;
