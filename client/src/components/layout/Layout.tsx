import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { FloatingCallButton } from "./FloatingCallButton";
import { Toaster } from "@/components/ui/toaster";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-background font-sans text-foreground">
      <Header />
      <main className="flex-grow pt-0">
        {children}
      </main>
      <Footer />
      <FloatingCallButton />
      <Toaster />
    </div>
  );
}
