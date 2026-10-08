import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface PropertyListingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const PropertyListingModal = ({ open, onOpenChange }: PropertyListingModalProps) => {
  const handleFormSubmit = () => {
    // Mark that the user is completing the form in a new tab
    sessionStorage.setItem('awaitingPropertyForm', 'true');
    sessionStorage.setItem('enquiryData', JSON.stringify({
      type: 'property-listing',
      message: "Thank you for submitting your property listing form! We will be in touch with you shortly."
    }));

    // Open Google Form in a popup window and keep a reference so we can close it later
    const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeCidjA0N9y5GryIZIR_ON-SbUjlyCZoh5CfFw-X3XsJ66atw/viewform?usp=header";
    const features = "popup=yes,width=1000,height=800,noopener=no,noreferrer=no";
    const popup = window.open(formUrl, "tbg-property-form", features);
    (window as any).__tbgFormPopup = popup;

    // Close modal
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>List Your Property with Tropikal Bali Group</DialogTitle>
        </DialogHeader>
        <div className="p-6 pt-0 text-center">
          <p className="mb-6 text-muted-foreground">
            We’ll open the form in a new tab. After submitting, return to this tab to be redirected to our Thank You page.
          </p>
          <Button 
            onClick={handleFormSubmit}
            className="w-full"
            size="lg"
          >
            Fill Out Property Form
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PropertyListingModal;
