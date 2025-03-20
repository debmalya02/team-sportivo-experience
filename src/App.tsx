
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import SocialShare from "./components/ui/SocialShare";

// Pages
import Index from "./pages/Index";
import About from "./pages/About";
import Xaplotes from "./pages/Xaplotes";
import Vibgyor from "./pages/Vibgyor";
import Gallery from "./pages/Gallery";
import Events from "./pages/Events";
import Sponsors from "./pages/Sponsors";
import Contact from "./pages/Contact";
import SignIn from "./pages/SignIn";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/xaplotes" element={<Xaplotes />} />
            <Route path="/vibgyor" element={<Vibgyor />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/events" element={<Events />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <SocialShare variant="floating" />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
