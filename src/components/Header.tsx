import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import PropertyListingModal from "./PropertyListingModal";

const scrollToSection = (sectionId: string) => {
  // Always navigate to home page first, then scroll to section
  if (window.location.pathname !== '/') {
    // Navigate to home with hash
    window.location.href = `/#${sectionId}`;
    return;
  }
  
  // If already on home page, scroll to section
  const element = document.getElementById(sectionId);
  if (element) {
    const headerHeight = sectionId === 'contact' ? 140 : 120;
    const elementPosition = element.offsetTop - headerHeight;
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  }
};

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [showListingModal, setShowListingModal] = useState(false);

  useEffect(() => {
    const handleReturn = () => {
      const awaiting = sessionStorage.getItem('awaitingPropertyForm');
      if (awaiting === 'true') {
        sessionStorage.removeItem('awaitingPropertyForm');
        sessionStorage.setItem('enquiryData', JSON.stringify({
          type: 'property-listing',
          message: "Thank you for submitting your property listing form! We will be in touch with you shortly."
        }));
        // Close the Google Form popup if it’s still open
        const popup: Window | null | undefined = (window as any).__tbgFormPopup;
        try {
          if (popup && !popup.closed) {
            popup.close();
          }
        } catch {}
        (window as any).__tbgFormPopup = null;
        if (window.location.pathname !== '/thank-you') {
          navigate('/thank-you');
        }
      }
    };

    const onFocus = () => handleReturn();
    const onPageShow = () => handleReturn();
    const onVisibility = () => {
      if (document.visibilityState === 'visible') handleReturn();
    };

    // Poll in case the user closes the popup without refocusing this tab
    const poll = window.setInterval(() => {
      const awaiting = sessionStorage.getItem('awaitingPropertyForm') === 'true';
      const popup: Window | null | undefined = (window as any).__tbgFormPopup;
      if (awaiting && popup && popup.closed) {
        handleReturn();
      }
    }, 1000);

    window.addEventListener('focus', onFocus);
    window.addEventListener('pageshow', onPageShow);
    document.addEventListener('visibilitychange', onVisibility);

    // Fallback: if user interacts after closing the popup, ensure redirect triggers
    const onUserInteract = () => {
      const awaiting = sessionStorage.getItem('awaitingPropertyForm') === 'true';
      const popup: Window | null | undefined = (window as any).__tbgFormPopup;
      if (awaiting && (!popup || popup.closed)) {
        handleReturn();
      }
    };
    window.addEventListener('pointerdown', onUserInteract);
    window.addEventListener('keydown', onUserInteract);

    return () => {
      window.removeEventListener('focus', onFocus);
      window.removeEventListener('pageshow', onPageShow);
      document.removeEventListener('visibilitychange', onVisibility);
      window.removeEventListener('pointerdown', onUserInteract);
      window.removeEventListener('keydown', onUserInteract);
      window.clearInterval(poll);
    };
  }, [navigate]);
  // Open Property Listing Modal when a global event is dispatched
  useEffect(() => {
    const openHandler = () => setShowListingModal(true);
    (window as any).addEventListener('open-property-listing-modal', openHandler);
    return () => (window as any).removeEventListener('open-property-listing-modal', openHandler);
  }, []);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-tropical">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 flex-shrink-0">
            <div className="text-2xl sm:text-3xl font-bold">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">MPAMBIJE</span>
              <span className="block text-sm sm:text-base font-normal text-secondary">GROUP</span>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center justify-center flex-1 space-x-4 lg:space-x-6 xl:space-x-8">
            <a href="/" className="text-foreground hover:text-primary transition-smooth text-sm lg:text-base whitespace-nowrap">Home</a>
            <a href="/rentals" className="text-foreground hover:text-primary transition-smooth text-sm lg:text-base whitespace-nowrap">Villa Rentals</a>
            <a href="/sales" className="text-foreground hover:text-primary transition-smooth text-sm lg:text-base whitespace-nowrap">Villa Sales</a>
            <a href="/property-management" className="text-foreground hover:text-primary transition-smooth text-sm lg:text-base whitespace-nowrap">Property Management</a>
            {/* <a href="/blog" className="text-foreground hover:text-primary transition-smooth text-sm lg:text-base whitespace-nowrap">Blog</a> */}
            <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-smooth text-sm lg:text-base whitespace-nowrap">About</button>
            <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-smooth text-sm lg:text-base whitespace-nowrap">Contact</button>
          </nav>
          
          <div className="flex items-center gap-2 flex-shrink-0">
            {location.pathname === '/property-management' ? (
              <Button 
                variant="hero" 
                size="sm" 
                className="hidden sm:block"
                onClick={() => setShowListingModal(true)}
              >
                List your Property
              </Button>
            ) : location.pathname === '/sales' ? (
              <Button 
                variant="hero" 
                size="sm" 
                className="hidden sm:block"
                onClick={() => {
                  sessionStorage.setItem('enquiryData', JSON.stringify({
                    type: 'villa-investment',
                    message: "Hi! I would like to own my very own bamboo villa in Bali, could I please have more information?"
                  }));
                  navigate('/thank-you');
                }}
              >
                Invest Now
              </Button>
            ) : (
              <a href="/rentals" className="hidden sm:block">
                <Button variant="hero" size="sm">
                  Book Now
                </Button>
              </a>
            )}
            <MobileMenu />
          </div>
        </div>
      </div>
      <PropertyListingModal 
        open={showListingModal} 
        onOpenChange={setShowListingModal} 
      />
    </header>
  );
};

export default Header;