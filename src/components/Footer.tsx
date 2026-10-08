import tropikarLogo from "@/assets/tropikar-logo.png";
import instagramLogo from "@/assets/instagram-logo.png";
import linkedinLogo from "@/assets/linkedin-logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary to-secondary text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="text-2xl font-bold">
                <span className="bg-gradient-to-r from-accent to-white bg-clip-text text-transparent">MPAMBIJE</span>
                <span className="block text-base font-normal text-white/90">GROUP</span>
              </div>
            </div>
            <p className="text-white/70 mb-4">
              Your trusted partner for luxury properties in Tanzania. 
              Discover exceptional real estate opportunities with our expert guidance.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="#properties" className="hover:text-white transition-smooth">Properties</a></li>
              <li><a href="#about" className="hover:text-white transition-smooth">About</a></li>
              <li><a href="#services" className="hover:text-white transition-smooth">Services</a></li>
              <li><a href="#contact" className="hover:text-white transition-smooth">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-white/70">
              <li>Villa Development</li>
              <li>Sourcing & Sales</li>
              <li>Property Investment</li>
              <li>Full Service Management</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/company/tropikalbaligroup" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-smooth"
              >
                <img src={linkedinLogo} alt="LinkedIn" className="w-8 h-8" />
              </a>
              <a 
                href="https://instagram.com/balibamboovillas" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-smooth"
              >
                <img src={instagramLogo} alt="Instagram" className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/70">
          <p>&copy; 2024 MPAMBIJE GROUP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;