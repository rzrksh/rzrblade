"use client";

import Footer from "@/components/composition/footer";
import Navbar from "@/components/composition/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AppThemeProvider } from "./context/theme";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <AppThemeProvider>
        <TooltipProvider>
          <Toaster position="top-center" />
          <Navbar />
          {children}
          <Footer />
        </TooltipProvider>
      </AppThemeProvider>
    </ThemeProvider>
  );
};
