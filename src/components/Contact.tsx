/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import whatsappLogo from "@/assets/whatsapp-logo.svg";
import gmailLogo from "@/assets/gmail-logo.svg";
import instagramLogo from "@/assets/instagram-logo.png";
import linkedinLogo from "@/assets/linkedin-logo.png";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Discover Your Opportunity?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get in touch with MPAMBIJE GROUP to explore premium properties in Tanzania.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <a 
                href="https://wa.me/6282114511214" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
                onClick={() => (window as any).gtag_report_conversion("https://wa.me/6282114511214")}
              >
                <div className="flex justify-center mb-4">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-glow rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                    <div className="relative bg-gradient-to-br from-primary to-primary-glow p-6 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                      <img src={whatsappLogo} alt="WhatsApp" className="w-12 h-12 mx-auto" />
                    </div>
                  </div>
                </div>
              </a>
              <h4 className="font-semibold text-foreground mb-2">WhatsApp Booking</h4>
              <a 
                href="https://wa.me/0616524726" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-glow transition-smooth"
                onClick={() => (window as any).gtag_report_conversion("https://wa.me/06165247264")}
              >
                0616524726
              </a>
            </div>
            
            <div className="text-center">
              <a 
                href="mailto:mpambijevictor04p@gmail.com"
                className="block"
              >
                <div className="flex justify-center mb-4">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-glow rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                    <div className="relative bg-gradient-to-br from-primary to-primary-glow p-6 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                      <img src={gmailLogo} alt="Gmail" className="w-12 h-12 mx-auto" />
                    </div>
                  </div>
                </div>
              </a>
              <h4 className="font-semibold text-foreground mb-2">Email</h4>
              <a 
                href="mailto:mpambijevictor04p@gmail.com" 
                className="text-primary hover:text-primary-glow transition-smooth"
              >
                mpambijevictor04p@gmail.com
              </a>
            </div>
            
            <div className="text-center">
              <a 
                href="https://instagram.com/balibamboovillas" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <div className="flex justify-center mb-4">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-glow rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                    <div className="relative bg-gradient-to-br from-primary to-primary-glow p-6 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                      <img src={instagramLogo} alt="Instagram" className="w-12 h-12 mx-auto" />
                    </div>
                  </div>
                </div>
              </a>
              <h4 className="font-semibold text-foreground mb-2">Follow Us</h4>
              <a 
                href="https://instagram.com/veenbreeze_17" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-glow transition-smooth"
              >
                @veenbreeze_17
              </a>
            </div>
            
            <div className="text-center">
              <a 
                href="https://www.linkedin.com/company/tropikalbaligroup" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <div className="flex justify-center mb-4">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-glow rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                    <div className="relative bg-gradient-to-br from-primary to-primary-glow p-6 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                      <img src={linkedinLogo} alt="LinkedIn" className="w-12 h-12 mx-auto" />
                    </div>
                  </div>
                </div>
              </a>
              <h4 className="font-semibold text-foreground mb-2">LinkedIn</h4>
               <a 
                href="https://www.linkedin.com/veenbreeze_17" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-glow transition-smooth"
              >
                MPAMBIJE GROUP
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;