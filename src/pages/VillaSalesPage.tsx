import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActionButton from "@/components/FloatingActionButton";
import { Button } from "@/components/ui/button";
import whatsappLogo from "@/assets/whatsapp-logo.svg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const getFeatureIcon = (feature: string) => {
  if (feature.includes("Japanese-Style Bamboo Villa") || feature.includes("Bath Villa")) {
    return "🏘️";
  } else if (feature.includes("Sustainable Materials")) {
    return "🌿";
  } else if (feature.includes("Architect-Designed")) {
    return "📐";
  } else if (feature.includes("Ready to Rent")) {
    return "🔑";
  } else if (feature.includes("Fully Managed")) {
    return "⚙️";
  } else if (feature.includes("Leasehold Title") || feature.includes("Legal Permits")) {
    return "📜";
  } else if (feature.includes("Land Plot") || feature.includes("Built Area")) {
    return "📏";
  } else if (feature.includes("Pool") || feature.includes("Garden")) {
    return "🌊";
  } else if (feature.includes("Interior Design")) {
    return "🎨";
  } else {
    return "✨";
  }
};

const VillaSalesPage = () => {
  // SEO Meta tags for each villa
  useEffect(() => {
    const updateMetaTags = (villa: any) => {
      document.title = `${villa.title} | Investment Opportunity | Tropikal Bali Group`;
      
      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', 
          `${villa.title} in ${villa.location} - ${villa.priceRange}. Luxury Japanese bamboo villa investment in Ubud, Bali. Sustainable architecture, managed rentals.`
        );
      } else {
        const newMeta = document.createElement('meta');
        newMeta.name = 'description';
        newMeta.content = `${villa.title} in ${villa.location} - ${villa.priceRange}. Luxury Japanese bamboo villa investment in Ubud, Bali. Sustainable architecture, managed rentals.`;
        document.head.appendChild(newMeta);
      }

      // Add keywords meta tag
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', 
          `Ubud villas, Bali investment property, Japanese bamboo villa, sustainable architecture Bali, luxury villa rental Ubud, Tropikal Bali Group`
        );
      } else {
        const newKeywordsMeta = document.createElement('meta');
        newKeywordsMeta.name = 'keywords';
        newKeywordsMeta.content = 'Ubud villas, Bali investment property, Japanese bamboo villa, sustainable architecture Bali, luxury villa rental Ubud, Tropikal Bali Group';
        document.head.appendChild(newKeywordsMeta);
      }
    };

    if (salesProjects.length > 0) {
      updateMetaTags(salesProjects[0]);
    }
  }, []);

  const salesProjects = [
    {
      id: "bijou-bamboo-villa",
      title: "Bijou Bamboo Villa",
      location: "Center of Ubud, Bali",
      description: "An exclusive collection of 4 Japanese-style bamboo villas featuring organic curved architecture and seamless indoor-outdoor living. Each villa showcases authentic bamboo construction with modern luxury amenities, fully furnished and ready for short-term rentals in Ubud's most sought-after location.",
      priceRange: "149,000 EUR / 2.85B IDR per villa",
      status: "Construction Phase",
      completionDate: "September 2026",
      features: [
        "1 Fully Furnished Japanese-Style Bamboo Villa",
        "Built with Sustainable Materials", 
        "Architect-Designed Layout",
        "Ready to Rent from Day 1",
        "Fully Managed by Tropikal Bali Group",
        "25-Year Leasehold Title (Extendable)",
        "Land Plot (approx. 100m²)",
        "Built Area: 80m² Interior",
        "1.5 Bath Villa with En-Suite Master Bathroom",
        "Private Pool & Tropical Garden",
        "Custom Bamboo Interior Design & Furnishing",
        "All Legal Permits & Licenses Included"
      ],
      image: "/lovable-uploads/fd5833ee-a642-4391-bb0f-53f33eb80647.png",
      gallery: [
        "/lovable-uploads/fa91c9f5-c083-44a7-921b-59512dfbc88a.png",
        "/lovable-uploads/c0ef795d-9c11-4b90-b5e9-9ca54ab1de5b.png",
        "/lovable-uploads/3a34ddbc-cfbe-4d8c-812a-821f4e9ddb75.png",
        "/lovable-uploads/a3481f92-55e2-435e-8eb0-d54127b28f8e.png",
        "/lovable-uploads/4c816b84-febb-4e3e-855c-1939476a2458.png",
        "/lovable-uploads/a5d9f5e6-7384-4c6f-bd66-f29a763bbce8.png",
        "/lovable-uploads/a009d69e-35fb-4eed-936c-2e22c4750065.png",
        "/lovable-uploads/15ca76af-ef15-4800-981f-c795085c7b55.png"
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pre-Launch":
        return "bg-yellow-500/20 text-yellow-700 border-yellow-300";
      case "Construction Phase":
        return "bg-black text-white border-black";
      case "Planning Phase":
        return "bg-purple-500/20 text-purple-700 border-purple-300";
      default:
        return "bg-gray-500/20 text-gray-700 border-gray-300";
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        {/* Background with faded overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
          style={{ 
            backgroundImage: `url(/lovable-uploads/fa91c9f5-c083-44a7-921b-59512dfbc88a.png)`,
            transform: 'translateZ(0)'
          }}
        />
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
              Current Projects
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Discover exclusive villa development opportunities in Bali's most sought-after locations
            </p>
          </div>
        </div>
      </section>

      {/* Sales Projects Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="space-y-12">
            {salesProjects.map((project, index) => (
              <div key={project.id} className="bg-card rounded-lg shadow-tropical overflow-hidden">
                 <div className="flex flex-col">
                  <div className="relative h-64 sm:h-80 lg:h-96">
                    <img 
                      src={project.image} 
                      alt={`${project.title} - Japanese bamboo villa in ${project.location} featuring sustainable architecture and luxury amenities`}
                      className="w-full h-full object-cover"
                      loading="eager"
                      fetchPriority="high"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6 sm:p-8 lg:p-12">
                    <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-primary mb-4 font-medium">
                      📍 {project.location}
                    </p>
                    <p className="text-muted-foreground mb-6 text-base sm:text-lg leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Price Range</h4>
                        <p className="text-xl sm:text-2xl font-bold text-primary">{project.priceRange}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Completion</h4>
                        <p className="text-base sm:text-lg text-muted-foreground">{project.completionDate}</p>
                      </div>
                    </div>

                     <div className="mb-8">
                       <h4 className="font-semibold text-foreground mb-4">Key Features</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {project.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <span className="text-muted-foreground flex-shrink-0 mt-1">•</span>
                              <span className="text-muted-foreground text-sm sm:text-base leading-relaxed">{feature}</span>
                            </div>
                          ))}
                        </div>
                     </div>

                    <div className="flex justify-center">
                      <a
                        href="https://wa.me/6282114511214"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => (window as any).gtag_report_conversion("https://wa.me/6282114511214")}
                      >
                        <Button variant="tropical" size="lg" className="w-full sm:w-auto">
                          Invest Now
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Villa Gallery
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore the stunning Japanese bamboo architecture and interior design of our Bijou Bamboo Villas
            </p>
          </div>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {salesProjects[0].gallery.map((image, idx) => (
                  <CarouselItem key={idx} className="pl-2 md:pl-4 md:basis-1/2">
                   <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-tropical group cursor-pointer contain-layout">
                      <img 
                       src={image} 
                       alt={`Bijou Bamboo Villa ${idx + 1} - Japanese bamboo architecture in Ubud, Bali with sustainable materials and luxury tropical design`}
                       className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                       loading="lazy"
                       decoding="async"
                       sizes="(max-width: 768px) 100vw, 50vw"
                     />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-sunset">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Invest in Paradise?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Contact our investment specialists to learn more about exclusive villa opportunities and secure your piece of Bali's luxury real estate market.
            </p>
            <div className="flex items-center justify-center">
              <a
                href="https://wa.me/6282114511214"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => (window as any).gtag_report_conversion("https://wa.me/6282114511214")}
              >
                <Button variant="hero" size="lg" className="bg-white text-primary hover:bg-white/90 flex items-center gap-2">
                  <img src={whatsappLogo} alt="WhatsApp" className="w-5 h-5" />
                  WhatsApp Consultation
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingActionButton 
        text="Invest Now" 
        icon="building"
        href="https://wa.me/6282114511214?text=Hi! I'm interested in investing in your villa projects. Could you please provide more information about available opportunities?"
      />
    </div>
  );
};

export default VillaSalesPage;