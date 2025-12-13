"use client";

import Navbar from "@/components/composition/navbar";
import "./globals.css";
import Footer from "@/components/composition/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <TooltipProvider>
        <Toaster position="top-center" />
        <Navbar />
        <div className="py-[53px] max-w-[var(--max-page-width)] mx-auto">
          {children}
        </div>
        <Footer />
      </TooltipProvider>
    </ThemeProvider>
  );
};
