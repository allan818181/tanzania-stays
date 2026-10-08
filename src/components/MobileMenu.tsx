import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

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

const MobileMenu = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: "/", label: "Home", isRoute: true },
    { href: "/rentals", label: "Villa Rentals", isRoute: true },
    { href: "/sales", label: "Villa Sales", isRoute: true },
    { href: "/property-management", label: "Property Management", isRoute: true },
    // { href: "/blog", label: "Blog", isRoute: true },
    { href: "about", label: "About", isRoute: false },
    { href: "contact", label: "Contact", isRoute: false },
  ];

  return (
    <div className="md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="sm" className="p-2">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-80">
          <div className="flex flex-col space-y-6 mt-8">
            {menuItems.map((item) => (
              item.isRoute ? (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-lg font-medium text-foreground hover:text-primary transition-smooth py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ) : (
                <button
                  key={item.href}
                  onClick={() => {
                    scrollToSection(item.href);
                    setIsOpen(false);
                  }}
                  className="text-lg font-medium text-foreground hover:text-primary transition-smooth py-2 text-left"
                >
                  {item.label}
                </button>
              )
            ))}
            <div className="pt-4 border-t border-border">
              {location.pathname === '/property-management' ? (
                <Button 
                  variant="hero" 
                  size="sm" 
                  className="w-full"
                  onClick={() => {
                    window.dispatchEvent(new Event('open-property-listing-modal'));
                    setIsOpen(false);
                  }}
                >
                  List your Property
                </Button>
              ) : (
                <a href="/rentals" onClick={() => setIsOpen(false)}>
                  <Button variant="hero" size="sm" className="w-full">
                    Book Now
                  </Button>
                </a>
              )}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;