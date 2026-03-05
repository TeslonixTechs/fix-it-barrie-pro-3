import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const EuropeanCarRepair = lazy(() => import("./pages/EuropeanCarRepair"));
const BMWRepair = lazy(() => import("./pages/BMWRepair"));
const MercedesRepair = lazy(() => import("./pages/MercedesRepair"));
const AudiRepair = lazy(() => import("./pages/AudiRepair"));
const OilChange = lazy(() => import("./pages/OilChange"));
const BrakeRepair = lazy(() => import("./pages/BrakeRepair"));
const SafetyCertificate = lazy(() => import("./pages/SafetyCertificate"));
const CarACRepair = lazy(() => import("./pages/CarACRepair"));
const FAQ = lazy(() => import("./pages/FAQ"));
const BlogIndex = lazy(() => import("./pages/BlogIndex"));
const Contact = lazy(() => import("./pages/Contact"));

const LocationPages = () => import("./pages/LocationPages");
const BlogPosts = () => import("./pages/BlogPosts");

// Lazy wrappers for named exports
import { AutoRepairInnisfil, AutoRepairAlliston, AutoRepairMidhurst } from "./pages/LocationPages";
import { BlogBMWDealership, BlogOilChange, BlogMercedesBrakes, BlogSafetyCertificate } from "./pages/BlogPosts";

const queryClient = new QueryClient();

const Loading = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="font-heading text-2xl text-muted-foreground">Loading...</div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/european-car-repair-barrie" element={<EuropeanCarRepair />} />
            <Route path="/bmw-repair-barrie" element={<BMWRepair />} />
            <Route path="/mercedes-repair-barrie" element={<MercedesRepair />} />
            <Route path="/audi-repair-barrie" element={<AudiRepair />} />
            <Route path="/oil-change-barrie" element={<OilChange />} />
            <Route path="/brake-repair-barrie" element={<BrakeRepair />} />
            <Route path="/safety-certificate-barrie" element={<SafetyCertificate />} />
            <Route path="/car-ac-repair-barrie" element={<CarACRepair />} />
            <Route path="/auto-repair-innisfil" element={<AutoRepairInnisfil />} />
            <Route path="/auto-repair-alliston" element={<AutoRepairAlliston />} />
            <Route path="/auto-repair-midhurst" element={<AutoRepairMidhurst />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/blog" element={<BlogIndex />} />
            <Route path="/blog/bmw-repair-barrie-dealership-alternative" element={<BlogBMWDealership />} />
            <Route path="/blog/oil-change-barrie-ontario-winter" element={<BlogOilChange />} />
            <Route path="/blog/mercedes-brake-service-barrie" element={<BlogMercedesBrakes />} />
            <Route path="/blog/safety-certificate-barrie-ontario" element={<BlogSafetyCertificate />} />
            <Route path="/book-appointment" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
