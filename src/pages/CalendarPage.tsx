import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const CalendarPage = () => {
  const navigate = useNavigate();

  const properties = [
    { id: "casa-baba", name: "Casa Baba" },
    { id: "villa-sunset", name: "Villa Sunset" },
    { id: "tropical-paradise", name: "Tropical Paradise" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6 text-gradient-primary">Property Calendars</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Select a property to view its availability calendar and make a booking.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {properties.map((property) => (
              <Card 
                key={property.id}
                className="cursor-pointer hover:shadow-tropical transition-smooth"
                onClick={() => navigate(`/calendar/${property.id}`)}
              >
                <CardHeader>
                  <CardTitle>{property.name}</CardTitle>
                  <CardDescription>View availability & book now</CardDescription>
                </CardHeader>
                <CardContent>
                  <button className="btn-primary w-full">
                    View Calendar
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CalendarPage;