import { Switch, Route, Router } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "./components/ui/theme-provider";
import NotFound from "./pages/not-found";
import Home from "./pages/home";
import ProjectDetail from "./pages/project-detail";

const base = import.meta.env.BASE_URL?.replace(/\/$/, '') || '';

function AppRouter() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/project/:id" component={ProjectDetail} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
        <TooltipProvider>
          <Toaster />
          <Router base={base}>
            <AppRouter />
          </Router>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
