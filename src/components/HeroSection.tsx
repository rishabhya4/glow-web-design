import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-radial opacity-60" />
      
      {/* Floating Shapes */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float-delayed" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-8 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">
              Digital Excellence Awaits
            </span>
          </div>

          {/* Main Headline */}
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            Crafting Digital
            <br />
            <span className="text-gradient">Experiences</span> That
            <br />
            Drive Growth
          </h1>

          {/* Subheadline */}
          <p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            We transform innovative ideas into powerful digital solutions. 
            From stunning websites to comprehensive brand strategies, 
            we help businesses thrive in the digital landscape.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Button variant="hero" size="xl">
              Start Your Project
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button variant="glass" size="xl">
              <Play className="mr-2" size={18} />
              Watch Showreel
            </Button>
          </div>

          {/* Stats Row */}
          <div 
            className="flex flex-wrap items-center justify-center gap-8 md:gap-16 mt-16 pt-16 border-t border-border/50 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-foreground">150+</div>
              <div className="text-sm text-muted-foreground mt-1">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-foreground">98%</div>
              <div className="text-sm text-muted-foreground mt-1">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-foreground">12+</div>
              <div className="text-sm text-muted-foreground mt-1">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-foreground">24/7</div>
              <div className="text-sm text-muted-foreground mt-1">Support Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-primary" />
        </div>
      </div>
    </section>
  );
};
