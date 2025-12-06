import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    content: "GrowOn transformed our digital presence with a modern, responsive website that perfectly represents our network services. The professional design and seamless functionality have significantly improved our client engagement and online visibility.",
    author: "TejBharat Network",
    role: "Network Services Provider",
    avatar: "/tejbharat-screenshot.png",
  },
  {
    id: 2,
    content: "Working with GrowOn was a game-changer for our business. They created a beautiful, user-friendly platform that our customers love. The attention to detail and dedication to our success was exceptional throughout the entire process.",
    author: "Wibelly",
    role: "E-commerce Platform",
    avatar: "/wibelly-screenshot.png",
  },
  {
    id: 3,
    content: "GrowOn's printing and fabrication website solution exceeded our expectations. The design perfectly showcases our services while maintaining professional aesthetics. Our online inquiries have increased significantly since launch.",
    author: "AdFilm Works Media",
    role: "Media Production & Printing",
    avatar: "/adfilmworks-screenshot.png",
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
    <section id="testimonials" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
            Our Clients
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Trusted by <span className="text-gradient">Leading Brands</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We've partnered with innovative companies across various industries to deliver exceptional results.
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
                      "absolute text-xl md:text-2xl text-foreground leading-relaxed transition-all duration-500 px-4",
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
                        "w-20 h-20 rounded-xl object-cover border-2 border-primary transition-all duration-500 absolute top-0 left-1/2 -translate-x-1/2 bg-white p-2",
                        index === activeIndex ? "opacity-100 scale-100" : "opacity-0 scale-75"
                      )}
                    />
                  ))}
                  <div className="w-20 h-20" /> {/* Placeholder for spacing */}
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
                      <div className="font-bold text-lg text-foreground">{testimonial.author}</div>
                      <div className="text-base text-muted-foreground">{testimonial.role}</div>
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
