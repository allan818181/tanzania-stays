import { useState, useEffect, useRef } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { memo } from "react";

interface ImageGalleryProps {
  images: string[];
  title: string;
  showModal?: boolean;
  className?: string;
  hasVerticalFirstImage?: boolean;
}

const ImageGallery = memo(({ images, title, showModal = false, className = "", hasVerticalFirstImage = false }: ImageGalleryProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const lightboxRef = useRef<HTMLDivElement>(null);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;

      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          navigatePrevious();
          break;
        case 'ArrowRight':
          e.preventDefault();
          navigateNext();
          break;
        case 'Escape':
          e.preventDefault();
          setSelectedImageIndex(null);
          break;
      }
    };

    if (selectedImageIndex !== null) {
      document.addEventListener('keydown', handleKeyDown);
      // Prevent background scroll
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImageIndex]);

  const navigatePrevious = () => {
    setSelectedImageIndex(prev => 
      prev !== null ? (prev > 0 ? prev - 1 : images.length - 1) : 0
    );
  };

  const navigateNext = () => {
    setSelectedImageIndex(prev => 
      prev !== null ? (prev < images.length - 1 ? prev + 1 : 0) : 0
    );
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      navigateNext();
    } else if (isRightSwipe) {
      navigatePrevious();
    }
  };

  return (
    <div className={`relative ${className}`}>
      <Carousel className="w-full h-full" opts={{ loop: true, align: "start" }}>
        <CarouselContent className="h-full">
          {images.map((image, index) => (
            <CarouselItem key={index} className="h-full">
              <div 
                className="relative h-full overflow-hidden cursor-pointer hover:opacity-90 transition-opacity bg-muted/20 flex items-center justify-center"
                onClick={() => showModal && setSelectedImageIndex(index)}
              >
                <img 
                  src={image} 
                  alt={`${title} - Image ${index + 1}`}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 z-20 bg-black/80 text-white hover:bg-black/90 border-none opacity-100 w-10 h-10" />
        <CarouselNext className="right-2 z-20 bg-black/80 text-white hover:bg-black/90 border-none opacity-100 w-10 h-10" />
      </Carousel>

      {showModal && (
        <Dialog open={selectedImageIndex !== null} onOpenChange={() => setSelectedImageIndex(null)}>
          <DialogContent 
            className="max-w-[95vw] w-full h-[95vh] p-0 bg-black/95 border-none"
            onInteractOutside={() => setSelectedImageIndex(null)}
          >
            {selectedImageIndex !== null && (
              <div 
                ref={lightboxRef}
                className="relative w-full h-full flex items-center justify-center overflow-hidden"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              >
                {/* Close button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 z-50 text-white hover:bg-white/10"
                  onClick={() => setSelectedImageIndex(null)}
                >
                  <X className="h-6 w-6" />
                </Button>

                {/* Image counter */}
                <div className="absolute top-4 left-4 z-50 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  {selectedImageIndex + 1} / {images.length}
                </div>

                {/* Current image */}
                <img 
                  src={images[selectedImageIndex]} 
                  alt={`${title} - Image ${selectedImageIndex + 1}`}
                  className="w-full h-full object-contain"
                  style={{
                    maxWidth: '90vw',
                    maxHeight: '85vh',
                    width: 'auto',
                    height: 'auto'
                  }}
                  draggable={false}
                  loading="eager"
                />

                {/* Navigation buttons - Always visible for all galleries */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20 bg-black/60 backdrop-blur-sm h-10 w-10 md:h-12 md:w-12 border border-white/30 shadow-lg opacity-90 hover:opacity-100 transition-all duration-200"
                  onClick={navigatePrevious}
                >
                  <ChevronLeft className="h-6 w-6 md:h-8 md:w-8" />
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20 bg-black/60 backdrop-blur-sm h-10 w-10 md:h-12 md:w-12 border border-white/30 shadow-lg opacity-90 hover:opacity-100 transition-all duration-200"
                  onClick={navigateNext}
                >
                  <ChevronRight className="h-6 w-6 md:h-8 md:w-8" />
                </Button>

              </div>
            )}
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
});

export default ImageGallery;