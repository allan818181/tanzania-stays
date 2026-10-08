/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const ThankYouPage = () => {
  useEffect(() => {
    // Track Google Ads conversion if available
    if ((window as any).gtag_conversion) {
      (window as any).gtag_conversion();
    }
  }, []);

  // Prepare WhatsApp message if user chooses to continue there manually
  const enquiryData = sessionStorage.getItem('enquiryData');
  let message = "Hello! I just submitted an enquiry through your website and would like to discuss further.";
  if (enquiryData) {
    try {
      const data = JSON.parse(enquiryData);
      if (data?.message) message = data.message;
    } catch (err) {
      // Log the error for debugging but do not break the UI
      // eslint-disable-next-line no-console
      console.error("Failed to parse enquiryData from sessionStorage:", err);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted flex items-center justify-center p-4">
      <Card className="max-w-md w-full text-center">
        <CardContent className="p-8">
          <div className="mb-6">
            <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-foreground mb-2">
              Thank you! We will be in touch shortly.
            </h1>
            <p className="text-muted-foreground mb-6">
              We will be in touch with you shortly. In the meantime, you can also chat with us on WhatsApp.
            </p>
          </div>
          
          <div className="space-y-4">
            <a
              href={`https://wa.me/6282114511214?text=${encodeURIComponent(message)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button size="lg" variant="hero">Chat on WhatsApp now</Button>
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ThankYouPage;