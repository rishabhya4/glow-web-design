import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    content: "NexusLab transformed our entire digital presence. Their strategic approach to our website redesign resulted in a 150% increase in conversions. The team's attention to detail and commitment to our success was exceptional.",
    author: "Sarah Mitchell",
    role: "CEO, TechVentures Inc.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 2,
    content: "Working with NexusLab was an absolute pleasure. They delivered a brand identity that perfectly captures our company's vision. The creative process was collaborative, and the results exceeded our expectations.",
    author: "Michael Chen",
    role: "Founder, GreenScape Solutions",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 3,
    content: "The mobile app NexusLab developed for us has revolutionized how we serve our customers. User engagement increased by 200%, and the intuitive design receives constant praise from our users.",
    author: "Emily Rodriguez",
    role: "Product Director, HealthPlus",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 4,
    content: "Their SEO and marketing expertise helped us dominate our market. We've seen a 300% increase in organic traffic and our brand visibility has never been stronger. Truly remarkable results.",
    author: "David Park",
    role: "Marketing VP, LuxuryHomes Realty",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
  },
];

export const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it – hear from the businesses we've helped succeed.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Testimonial Card */}
            <div className="glass-card p-8 md:p-12 text-center relative">
              {/* Quote Icon */}
              <Quote className="w-12 h-12 text-primary/20 mx-auto mb-6" />

              {/* Content */}
              <div className="relative h-[200px] md:h-[150px] flex items-center justify-center">
                {testimonials.map((testimonial, index) => (
                  <p
                    key={testimonial.id}
                    className={cn(
                      "absolute text-lg md:text-xl text-foreground leading-relaxed transition-all duration-500",
                      index === activeIndex
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4 pointer-events-none"
                    )}
                  >
                    "{testimonial.content}"
                  </p>
                ))}
              </div>

              {/* Author */}
              <div className="mt-8 flex flex-col items-center">
                <div className="relative mb-4">
                  {testimonials.map((testimonial, index) => (
                    <img
                      key={testimonial.id}
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className={cn(
                        "w-16 h-16 rounded-full object-cover border-2 border-primary transition-all duration-500 absolute top-0 left-1/2 -translate-x-1/2",
                        index === activeIndex ? "opacity-100 scale-100" : "opacity-0 scale-75"
                      )}
                    />
                  ))}
                  <div className="w-16 h-16" /> {/* Placeholder for spacing */}
                </div>

                <div className="h-14 relative w-full">
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={testimonial.id}
                      className={cn(
                        "absolute left-1/2 -translate-x-1/2 text-center transition-all duration-500",
                        index === activeIndex
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-2 pointer-events-none"
                      )}
                    >
                      <div className="font-bold text-foreground">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setActiveIndex(index);
                  }}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    index === activeIndex
                      ? "w-8 bg-primary"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
