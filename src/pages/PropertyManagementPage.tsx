import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActionButton from "@/components/FloatingActionButton";
import { useNavigate } from "react-router-dom";
import { allProperties } from "@/data/properties";

const PropertyManagementPage = () => {
  const navigate = useNavigate();
  const [purchasePrice, setPurchasePrice] = useState("450000");
  const [selectedArea, setSelectedArea] = useState("seminyak");
  const [propertyType, setPropertyType] = useState("villa");
  const [bedrooms, setBedrooms] = useState("3");

  const handleListProperty = () => {
    window.dispatchEvent(new Event('open-property-listing-modal'));
  };

  const handleScheduleConsultation = () => {
    sessionStorage.setItem('enquiryData', JSON.stringify({
      type: 'consultation',
      message: "Hi! I'd like to schedule a consultation to discuss property management services with Tropikal Bali Group. When would be a good time to meet?"
    }));
    navigate('/thank-you');
  };

  // SEO meta tags
  useEffect(() => {
    document.title = "Premium Property Management Services | Tropikal Bali Group";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Professional villa management services in Bali. Maximize your rental income with our full-service property management. Expert marketing, guest services, and maintenance.");
    }
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute("content", "property management Bali, villa management, rental income optimization, Bali real estate services, vacation rental management");
    }
  }, []);

  // Calculate earnings based on inputs
  const calculateEarnings = () => {
    const bedroomCount = parseInt(bedrooms) || 3;
    
    // Direct USD rate per bedroom based on location
    let usdPerBedroom;
    switch (selectedArea) {
      case "seminyak":
      case "ubud":
        usdPerBedroom = 60;
        break;
      case "canggu":
        usdPerBedroom = 70;
        break;
      case "uluwatu":
        usdPerBedroom = 100;
        break;
      default:
        usdPerBedroom = 60; // default to seminyak rate
    }
    
    const finalADR = usdPerBedroom * bedroomCount;
    
    const occupancy = 75;
    const annualRevenue = finalADR * 365 * (occupancy / 100);
    const managementFees = annualRevenue * 0.20;
    
    // Fixed monthly operational expenses in IDR based on bedrooms and property type
    let monthlyExpensesIDR;
    
    if (propertyType === "apartment") {
      // Apartments: 5M for 1br, scaling to max 10M for 3+ bedrooms
      if (bedroomCount === 1) monthlyExpensesIDR = 5000000;
      else if (bedroomCount === 2) monthlyExpensesIDR = 7500000;
      else monthlyExpensesIDR = 10000000; // 3+ bedrooms
    } else {
      // Villas: original pricing structure
      if (bedroomCount === 1) monthlyExpensesIDR = 8000000;
      else if (bedroomCount === 2) monthlyExpensesIDR = 10000000;
      else if (bedroomCount === 3) monthlyExpensesIDR = 15000000;
      else if (bedroomCount === 4) monthlyExpensesIDR = 18000000;
      else monthlyExpensesIDR = 20000000; // 5+ bedrooms
    }
    
    const annualExpensesIDR = monthlyExpensesIDR * 12;
    const operationalExpenses = Math.round(annualExpensesIDR / 15000); // Convert to USD
    const annualIncome = annualRevenue - managementFees - operationalExpenses;

    return {
      adr: finalADR,
      occupancy,
      annualRevenue: Math.round(annualRevenue),
      managementFees: Math.round(managementFees),
      operationalExpenses: Math.round(operationalExpenses),
      annualIncome: Math.round(annualIncome),
      estimatedNightlyRate: finalADR
    };
  };

  const earnings = calculateEarnings();

  // Property occupancy rates
  const occupancyRates: { [key: string]: string } = {
    "villa-serenity": "83%",
    "casa-catania": "87%", 
    "villa-c3": "79%",
    "casa-baba": "74%",
    "villa-kupu-kupu": "91%",
    "bijou-bamboo": "96%",
    "queen-villa": "88%"
  };

  const getOccupancyRate = (propertyId: string) => {
    return occupancyRates[propertyId] || "95%";
  };

  const stats = [
    { value: "$10M+", label: "Value of assets under management" },
    { value: "20+", label: "Professional team members" },
    { value: "15K+", label: "Guests served annually" },
  ];

  const benefits = [
    {
      icon: "📈",
      title: "Maximize Revenue",
      description: "Our managed properties earn up to 30% more than self-managed units through strategic pricing and premium guest experiences."
    },
    {
      icon: "🏠",
      title: "Complete Property Care",
      description: "Truly hands-off ownership. We manage everything - maintenance, guest communication, staff coordination, bookings, and operations. You simply collect rental income while we handle it all."
    },
    {
      icon: "🌟",
      title: "Guest Excellence",
      description: "24/7 concierge services and personalized guest experiences ensure 5-star reviews and repeat bookings."
    },
    {
      icon: "📱",
      title: "Smart Technology",
      description: "Advanced property management systems and real-time reporting keep you informed of your investment performance."
    },
  ];

  const managementFeatures = [
    "Professional photography and listing optimization",
    "Dynamic pricing strategy and revenue management", 
    "24/7 guest communication and support",
    "Quality housekeeping and maintenance coordination",
    "Property inspections and condition reports",
    "Guest screening and booking management",
    "Monthly financial reporting and analytics",
    "Insurance and compliance management"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-32 bg-gradient-to-br from-primary/10 via-background to-accent/5 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/casa-baba-exterior.png')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <div className="flex justify-center lg:justify-start">
                  <Badge className="bg-gradient-sunset text-white px-4 py-2 text-sm">
                    Premium Property Management
                  </Badge>
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Maximize Your 
                  <span className="bg-gradient-sunset bg-clip-text text-transparent"> Villa's Potential</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Professional property management that maximizes your rental income and gives you peace of mind, with premium marketing and personalized guest services.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="bg-gradient-sunset text-white hover:shadow-tropical hover:scale-105 transform transition-smooth"
                  onClick={() => {
                    const element = document.getElementById('calculator');
                    if (element) {
                      const headerHeight = 120;
                      const elementPosition = element.offsetTop - headerHeight;
                      window.scrollTo({
                        top: elementPosition,
                        behavior: 'smooth'
                      });
                    }
                  }}
                >
                  Calculate Your Earnings
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary hover:text-white"
                  onClick={() => {
                    const element = document.getElementById('pricing');
                    if (element) {
                      const headerHeight = 120;
                      const elementPosition = element.offsetTop - headerHeight;
                      window.scrollTo({
                        top: elementPosition,
                        behavior: 'smooth'
                      });
                    }
                  }}
                >
                  View Our Services
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="/lovable-uploads/128f927b-b142-4248-942e-deb91b1c1b61.png" 
                  alt="Bijou Bamboo villa managed by Tropikal Bali Group" 
                  className="rounded-xl shadow-tropical hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                />
                <img 
                  src="/lovable-uploads/0c6d707c-404d-42dc-95e0-2906e87b3928.png" 
                  alt="Villa Kupu Kupu managed by Tropikal Bali Group" 
                  className="rounded-xl shadow-tropical hover:shadow-xl transition-all duration-300 transform hover:scale-105 mt-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Tropikal Bali Group in Numbers</h2>
            <p className="text-xl text-muted-foreground">Trusted by property owners across Bali</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Why Property Owners Choose Tropikal Bali Group</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We combine local expertise with international standards to deliver exceptional results for your investment property.
            </p>
          </div>
          
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const backgroundImages = [
                "/lovable-uploads/128f927b-b142-4248-942e-deb91b1c1b61.png", // Maximize Revenue - Bijou Bamboo
                "/lovable-uploads/0c6d707c-404d-42dc-95e0-2906e87b3928.png", // Complete Property Care - Villa Kupu Kupu
                "/lovable-uploads/queen-villa-pool.png", // Guest Excellence - Queen Villa
                "/lovable-uploads/254f9163-bb90-45bc-8ac4-613ee72ade97.png" // Smart Technology - Casa Catania
              ];
              
              return (
                <Card key={index} className="border-0 shadow-tropical hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden h-80">
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-70"
                    style={{ backgroundImage: `url('${backgroundImages[index]}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/40 to-primary/60" />
                  <CardContent className="relative z-10 p-8 text-center h-full flex flex-col justify-center text-white">
                    <div className="text-4xl mb-4">{benefit.icon}</div>
                    <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                    <p className="text-white/90 leading-relaxed text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Earnings Calculator */}
      <section id="calculator" className="py-20 bg-gradient-to-br from-accent/10 to-primary/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Estimate Your Property's Earning Potential</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get an approximate estimate of your returns and monthly cashflow based on our managed portfolio data.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="shadow-tropical">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Describe Your Property</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">Select Area</label>
                  <Select value={selectedArea} onValueChange={setSelectedArea}>
                    <SelectTrigger className="text-lg">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="seminyak">Seminyak</SelectItem>
                      <SelectItem value="canggu">Canggu</SelectItem>
                      <SelectItem value="ubud">Ubud</SelectItem>
                      <SelectItem value="uluwatu">Uluwatu</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Number of Bedrooms</label>
                  <Select value={bedrooms} onValueChange={setBedrooms}>
                    <SelectTrigger className="text-lg">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 Bedroom</SelectItem>
                      <SelectItem value="2">2 Bedrooms</SelectItem>
                      <SelectItem value="3">3 Bedrooms</SelectItem>
                      <SelectItem value="4">4 Bedrooms</SelectItem>
                      <SelectItem value="5">5+ Bedrooms</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground mt-1">
                    Estimated nightly rate: {(earnings.estimatedNightlyRate * 15000).toLocaleString()} IDR (${earnings.estimatedNightlyRate} USD)/night
                  </p>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Property Type</label>
                  <div className="grid grid-cols-2 gap-4">
                    <Button 
                      variant={propertyType === "villa" ? "default" : "outline"}
                      onClick={() => setPropertyType("villa")}
                      className="h-12"
                    >
                      Villa
                    </Button>
                    <Button 
                      variant={propertyType === "apartment" ? "default" : "outline"}
                      onClick={() => setPropertyType("apartment")}
                      className="h-12"
                    >
                      Apartment
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-tropical">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Estimated Projections</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-primary/5 rounded-lg">
                    <div className="text-2xl font-bold text-primary">${earnings.adr}</div>
                    <div className="text-sm text-muted-foreground">Average Daily Rate</div>
                  </div>
                  <div className="text-center p-4 bg-primary/5 rounded-lg">
                    <div className="text-2xl font-bold text-primary">{earnings.occupancy}%</div>
                    <div className="text-sm text-muted-foreground">Average Occupancy</div>
                  </div>
                </div>
                
                <div className="space-y-3 pt-4 border-t">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Annual Gross Revenue</span>
                    <span className="font-semibold">${earnings.annualRevenue.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Management Fees (20% - <span className="px-2 py-1 rounded text-xs font-semibold" style={{ backgroundColor: "hsl(var(--green-checkmark) / 0.15)", color: "hsl(var(--green-checkmark))" }}>Limited Offer</span>, normally 25%)</span>
                    <span style={{ color: "hsl(var(--destructive))" }}>-${earnings.managementFees.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Operational Expenses</span>
                    <span style={{ color: "hsl(var(--destructive))" }}>-${earnings.operationalExpenses.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold pt-3 border-t">
                    <span className="text-foreground">Annual Net Income</span>
                    <span style={{ color: "hsl(var(--green-checkmark))" }}>${earnings.annualIncome.toLocaleString()}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              These calculations are based on our portfolio averages and market data. Actual results may vary based on property condition, amenities, and market conditions.
            </p>
            <Button 
              variant="hero"
              size="lg"
              onClick={handleListProperty}
            >
              List Your Property
            </Button>
          </div>
        </div>
      </section>

      {/* Managed Properties Showcase */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Managed Portfolio</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the quality and attention to detail we bring to every property in our care.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProperties.slice(0, 6).map((property, index) => (
              <Card key={property.id} className="overflow-hidden shadow-tropical hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={property.images[0]} 
                    alt={`${property.title} - Managed by Tropikal Bali Group`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{property.title}</h3>
                  <p className="text-muted-foreground mb-4">{property.location}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary">${property.price}/night</span>
                     <Badge variant="secondary" className="px-2 py-1" style={{ backgroundColor: "hsl(var(--green-checkmark) / 0.15)", color: "hsl(var(--green-checkmark))" }}>
                        {getOccupancyRate(property.id)} Occupancy
                      </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section id="pricing" className="py-20 bg-gradient-to-br from-primary/5 to-accent/10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Comprehensive Management Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Full-service property management with transparent pricing and exceptional results.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-tropical border-2 border-primary/20">
                <CardHeader className="text-center pb-8">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-sunset rounded-full text-white text-2xl font-bold">
                      20%
                    </div>
                    <span
                      className="px-3 py-1 rounded-full text-xs font-semibold"
                      style={{ backgroundColor: "hsl(var(--green-checkmark) / 0.15)", color: "hsl(var(--green-checkmark))" }}
                    >
                      Limited Offer
                    </span>
                  </div>
                  <CardTitle className="text-3xl">Complete Property Management</CardTitle>
                  <p className="text-xl text-muted-foreground">Professional management fee of gross rental income</p>
                </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  {managementFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: `hsl(var(--green-checkmark))` }}>
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-8 text-center">
                  <Button 
                    variant="hero"
                    size="lg"
                    onClick={handleListProperty}
                  >
                    List My Property
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Client Reviews */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">What Our Clients Say</h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex">
                {[...Array(4)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-2xl">⭐</span>
                ))}
                <div className="relative text-2xl">
                  <span className="text-gray-300">⭐</span>
                  <span className="absolute inset-0 text-yellow-500 overflow-hidden" style={{ width: '80%' }}>⭐</span>
                </div>
              </div>
              <span className="text-2xl font-bold text-foreground">4.8/5</span>
              <span className="text-muted-foreground">(127 reviews)</span>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real testimonials from property owners who have maximized their rental income with Tropikal Bali Group.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-tropical hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div>
                    <div className="font-semibold text-foreground">Sarah M.</div>
                    <div className="text-sm text-muted-foreground">Owner of Casa Bubu, Umalas</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-500 text-xl">⭐</span>
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-foreground">5/5</span>
                </div>
                <p className="text-muted-foreground mb-4">
                  We were struggling with only 45% occupancy when managing ourselves. After 8 months with Tropikal Bali Group, we're consistently hitting 82% occupancy. My 3BR villa in Seminyak now generates $4,200/month net vs the $1,800 we were making before. The guest screening process is thorough and when incidents happened, they were handled super smoothly and I was able to receive the refund.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-tropical hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div>
                    <div className="font-semibold text-foreground">Michael R.</div>
                    <div className="text-sm text-muted-foreground">Owner of Serenity Villa</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(4)].map((_, i) => (
                      <span key={i} className="text-yellow-500 text-xl">⭐</span>
                    ))}
                    <div className="relative text-xl">
                      <span className="text-gray-300">⭐</span>
                      <span className="absolute inset-0 text-yellow-500 overflow-hidden" style={{ width: '50%' }}>⭐</span>
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-foreground">4.5/5</span>
                </div>
                <p className="text-muted-foreground mb-4">
                  Been with them for 14 months now. The property photography they did was incredible - way better than what I had before. My 2BR place went from $85/night to $110/night average. Only minor complaint is communication can be slow during peak seasons, but results speak for themselves. Revenue up from $28k to $38k annually.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-tropical hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div>
                    <div className="font-semibold text-foreground">Emma L.</div>
                    <div className="text-sm text-muted-foreground">Owner of Villa Kupu Kupu</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-500 text-xl">⭐</span>
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-foreground">5/5</span>
                </div>
                <p className="text-muted-foreground mb-4">
                  My villa was sitting empty for 6 months before I found Tropikal Bali Group. Within 3 weeks they had professional photos up and bookings started flowing in. The dynamic pricing is genius - rates automatically adjust for festivals and peak periods. Now averaging $280/night during high season vs the flat $150 I was charging. Property value has increased too.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-tropical hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div>
                    <div className="font-semibold text-foreground">David K.</div>
                    <div className="text-sm text-muted-foreground">Owner of Bijou Bamboo</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-500 text-xl">⭐</span>
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-foreground">5/5</span>
                </div>
                <p className="text-muted-foreground mb-4">
                  Had a nightmare with my previous management company - they left my place damaged and dirty. Tropikal Bali Group turned it around completely. They coordinated a full renovation, new furniture, the works. Now getting 4.9 stars from guests consistently. The 24/7 support really works - guests never wait more than 30 minutes for responses. ROI improved by 60%.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-sunset text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Maximize Your Property's Potential?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join hundreds of satisfied property owners who trust Tropikal Bali Group with their most valuable investments. Let's discuss how we can optimize your rental income.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              variant="outline"
              className="bg-white text-primary border-white hover:bg-gray-100"
              onClick={handleScheduleConsultation}
            >
              Schedule Consultation
            </Button>
            <Button 
              size="lg"
              variant="outline" 
              className="bg-transparent text-white border-white hover:bg-white/10"
              onClick={() => {
                const element = document.getElementById('calculator');
                if (element) {
                  const headerHeight = 120;
                  const elementPosition = element.offsetTop - headerHeight;
                  window.scrollTo({
                    top: elementPosition,
                    behavior: 'smooth'
                  });
                }
              }}
            >
              Calculate Earnings
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingActionButton 
        text="List Your Property" 
        icon="building"
        onClick={handleListProperty}
      />
    </div>
  );
};

export default PropertyManagementPage;