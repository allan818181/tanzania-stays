import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";

// Lazy load non-critical pages for code splitting
const RentalsPage = lazy(() => import("./pages/RentalsPage"));
const VillaSalesPage = lazy(() => import("./pages/VillaSalesPage"));
const PropertyManagementPage = lazy(() => import("./pages/PropertyManagementPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const BlogPostPage = lazy(() => import("./pages/BlogPostPage"));
const CalendarPage = lazy(() => import("./pages/CalendarPage"));
const PropertyCalendarPage = lazy(() => import("./pages/PropertyCalendarPage"));
const ThankYouPage = lazy(() => import("./pages/ThankYouPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/rentals" element={<RentalsPage />} />
            <Route path="/sales" element={<VillaSalesPage />} />
            <Route path="/property-management" element={<PropertyManagementPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogPostPage />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/calendar/:propertyId" element={<PropertyCalendarPage />} />
            <Route path="/thank-you" element={<ThankYouPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
