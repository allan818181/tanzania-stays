import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ImageGallery from "./ImageGallery";
import { propertiesWithPortraitFirst } from "@/data/properties";
import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

interface PropertyCardProps {
  id?: string;
  image?: string;
  images?: string[];
  title: string;
  location: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  showGallery?: boolean;
  showModal?: boolean;
  onClick?: () => void;
  onAvailabilityClick?: () => void;
}

const PropertyCard = memo(({ 
  id,
  image, 
  images, 
  title, 
  location, 
  price, 
  bedrooms, 
  bathrooms, 
  area, 
  showGallery = false, 
  showModal = false, 
  onClick, 
  onAvailabilityClick 
}: PropertyCardProps) => {
  const navigate = useNavigate();
  
  // Check if this property has a vertical first image
  const hasVerticalFirstImage = propertiesWithPortraitFirst.includes(title);

  const handleClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    if (onAvailabilityClick) {
      onAvailabilityClick();
    } else {
      // Store the rental enquiry data and navigate to thank you page
      sessionStorage.setItem('enquiryData', JSON.stringify({
        type: 'rental',
        property: title,
        message: `Hey! I am interested in renting ${title}. Could you please provide more information about availability and pricing?`
      }));
      navigate('/thank-you');
    }
  }, [onAvailabilityClick, title, navigate]);

  const infoContent = (
    <div className="space-y-4 p-1 -mt-2">
      <h3 className="text-xl font-bold text-foreground leading-tight break-words">{title}</h3>
      <p className="text-muted-foreground break-words">{location}</p>
      
      <div className="flex items-center justify-between text-sm text-muted-foreground flex-wrap gap-2">
        <span>{bedrooms} Bedrooms</span>
        <span>{bathrooms} Bathrooms</span>
        <span>{area}</span>
      </div>
      
      <Button 
        variant="hero" 
        className="w-full mt-4"
        onClick={handleClick}
      >
        {onAvailabilityClick ? "See Availability" : "Book on WhatsApp"}
      </Button>
    </div>
  );

  const imageContent = (
    <div className="relative">
      {showGallery && images ? (
        <div className="relative aspect-[4/3]">
          <ImageGallery 
            images={images} 
            title={title} 
            showModal={showModal} 
            className="h-full object-contain"
            hasVerticalFirstImage={hasVerticalFirstImage}
          />
          <div className="absolute top-4 right-4 bg-gradient-sunset text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg z-10">
            {price}
          </div>
        </div>
      ) : (
        <div className="relative aspect-[4/3]">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-contain"
            loading="lazy"
          />
          <div className="absolute top-4 right-4 bg-gradient-sunset text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg z-10">
            {price}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <Card className="overflow-hidden hover:shadow-tropical transition-smooth transform hover:-translate-y-2 h-full flex flex-col">
      {imageContent}
      <CardContent className="p-6 flex-1 flex flex-col justify-center">
        {infoContent}
      </CardContent>
    </Card>
  );
});

PropertyCard.displayName = "PropertyCard";

export default PropertyCard;