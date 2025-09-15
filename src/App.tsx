import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BathroomRenovation from "./pages/BathroomRenovation";
import KitchenRemodeling from "./pages/KitchenRemodeling";
import RoomAddition from "./pages/RoomAddition";
import Roofing from "./pages/Roofing";
import AduConstruction from "./pages/AduConstruction";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/bathroom-renovation" element={<BathroomRenovation />} />
          <Route path="/kitchen-remodeling" element={<KitchenRemodeling />} />
          <Route path="/room-addition" element={<RoomAddition />} />
          <Route path="/roofing" element={<Roofing />} />
          <Route path="/adu-construction" element={<AduConstruction />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
