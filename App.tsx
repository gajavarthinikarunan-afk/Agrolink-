import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { AppProvider } from "@/contexts/AppContext";

// Pages
import Login from "./pages/Login";
import FarmerHome from "./pages/farmer/FarmerHome";
import BrowseSeeds from "./pages/farmer/BrowseSeeds";
import SeedDetails from "./pages/farmer/SeedDetails";
//import Cart from "./pages/farmer/Cart";
//import Checkout from "./pages/farmer/Checkout";
import Orders from "./pages/farmer/Orders";
import Tutorials from "./pages/farmer/Tutorials";
import LearningHelp from "./pages/farmer/LearningHelp";
import PlantingCalendar from "./pages/farmer/PlantingCalendar";
import Profile from "./pages/farmer/Profile";
//import ToolsNeeded from "./pages/farmer/ToolsNeeded";
//import SupplierDashboard from "./pages/supplier/SupplierDashboard";
import DeliveryDashboard from "./pages/delivery/DeliveryDashboard";
import AdminPanel from "./pages/admin/AdminPanel";
import NotFound from "./pages/NotFound";
import Checkout from "./pages/farmer/Checkout";
import Cart from "./pages/farmer/Cart";
import SupplierDashboard from "./pages/supplier/SupplierDashboard";
import ToolsNeeded from "./pages/farmer/ToolsNeeded";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <AppProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
            <Routes>
              <Route path="/" element={<Login />} />
              
              {/* Farmer Routes */}
              <Route path="/farmer" element={<FarmerHome />} />
              <Route path="/farmer/browse" element={<BrowseSeeds />} />
              <Route path="/farmer/seed/:id" element={<SeedDetails />} />
              <Route path="/farmer/cart" element={<Cart />} />
              <Route path="/farmer/checkout" element={<Checkout />} />
              <Route path="/farmer/orders" element={<Orders />} />
              <Route path="/farmer/tutorials" element={<Tutorials />} />
              <Route path="/farmer/learning" element={<LearningHelp />} />
              <Route path="/farmer/calendar" element={<PlantingCalendar />} />
              <Route path="/farmer/profile" element={<Profile />} />
              <Route path="/farmer/tools" element={<ToolsNeeded />} />
              
              {/* Supplier Routes */}
              <Route path="/supplier" element={<SupplierDashboard />} />
              
              {/* Delivery Routes */}
              <Route path="/delivery" element={<DeliveryDashboard />} />
              
              {/* Admin Routes */}
              <Route path="/admin" element={<AdminPanel />} />
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AppProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
