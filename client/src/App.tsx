import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/layout/Layout";
import NotFound from "@/pages/not-found";

// Page imports (lazy loading would be better for real apps, but direct is fine here)
import Home from "@/pages/home";
import Services from "@/pages/services";
import ServiceDetail from "@/pages/service-detail";
import Contact from "@/pages/contact";
import About from "@/pages/about";
import Reviews from "@/pages/reviews";
import FAQ from "@/pages/faq";
import ServiceAreas from "@/pages/service-areas";
import Pricing from "@/pages/pricing";
import AdminLeads from "@/pages/admin/leads";
import ThankYou from "@/pages/thank-you";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/services/:slug" component={ServiceDetail} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/reviews" component={Reviews} />
        <Route path="/faq" component={FAQ} />
        <Route path="/service-areas" component={ServiceAreas} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/admin/leads" component={AdminLeads} />
        <Route path="/thank-you" component={ThankYou} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
