import { useState } from "react";
import { HeroSection } from "./components/HeroSection";
import { BentoGrid } from "./components/BentoGrid";
import { Footer } from "./components/Footer";
import { ScrollProgress } from "./components/ScrollProgress";
import { toast } from "sonner";
import { Toaster } from "sonner";

export default function App() {
  const handleWaitlistSubmit = (email: string) => {
    toast.success("You're on the waitlist!", {
      description: `We'll send updates to ${email}`,
      duration: 4000,
    });
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white overflow-x-hidden">
      <ScrollProgress />
      <Toaster 
        position="top-center"
        theme="dark"
        toastOptions={{
          style: {
            background: 'rgba(37, 99, 235, 0.1)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(37, 99, 235, 0.3)',
            color: 'white',
          },
        }}
      />
      
      <HeroSection onWaitlistSubmit={handleWaitlistSubmit} />
      <BentoGrid />
      <Footer />
    </div>
  );
}