import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BookingModal } from "@/components/BookingModal";
import { Sphere3D } from "@/components/Sphere3D";

export const HeroSection = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* 3D Rotating Sphere Background */}
      <Sphere3D />

      {/* Rich Gradient Backgrounds */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20" style={{ zIndex: 2 }} />
      <div className="absolute inset-0 bg-gradient-to-tl from-cyan-900/15 via-transparent to-purple-800/15" style={{ zIndex: 2 }} />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-900/10 to-transparent" style={{ zIndex: 2 }} />

      {/* Minimal Overlay for text contrast */}
      <div className="absolute inset-0 bg-black/5" style={{ zIndex: 2 }} />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-radial opacity-30" style={{ zIndex: 3 }} />

      {/* Floating Shapes */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" style={{ zIndex: 4 }} />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float-delayed" style={{ zIndex: 4 }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-pulse-glow" style={{ zIndex: 4 }} />

      {/* Content positioned at bottom */}
      <div className="container-custom relative absolute bottom-16" style={{ zIndex: 10 }}>
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in-up"
          >
            Bringing your
            <br />
            <span className="text-gradient">dream</span> into reality
          </h1>

          {/* Subheadline */}
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            We increase revenue and ensure sustainable long-term growth for
            your business through powerful websites.
          </p>

          {/* CTA Button */}
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <Button variant="hero" size="xl" onClick={() => setIsBookingModalOpen(true)}>
              Book A Meeting
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" style={{ zIndex: 11 }}>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-primary" />
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </section>
  );
};
