import { useState, useRef } from "react";
import {
  Globe,
  Palette,
  Smartphone,
  TrendingUp,
  Search,
  Layers,
  ArrowRight,
  Check
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const services = [
  {
    id: 1,
    icon: Globe,
    title: "Web Development",
    shortDesc: "Custom websites built with modern technologies for optimal performance.",
    features: ["Responsive Design", "SEO Optimization", "Performance Tuning", "CMS Integration"],
    color: "from-primary to-emerald-400",
  },
  {
    id: 2,
    icon: Palette,
    title: "Brand Identity",
    shortDesc: "Comprehensive branding services to establish a powerful market presence.",
    features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Brand Strategy"],
    color: "from-violet-500 to-purple-400",
  },
  {
    id: 3,
    icon: Layers,
    title: "UI/UX Design",
    shortDesc: "Intuitive interfaces that convert visitors into loyal customers.",
    features: ["Wireframing", "Prototyping", "User Testing", "Interface Design"],
    color: "from-blue-500 to-cyan-400",
  },
  {
    id: 4,
    icon: Smartphone,
    title: "Mobile Apps",
    shortDesc: "Native and cross-platform mobile applications for iOS and Android.",
    features: ["iOS Development", "Android Development", "Cross-Platform", "App Store Launch"],
    color: "from-orange-500 to-amber-400",
  },
  {
    id: 5,
    icon: TrendingUp,
    title: "Digital Marketing",
    shortDesc: "Data-driven marketing strategies to boost your online presence.",
    features: ["Social Media", "Content Strategy", "PPC Campaigns", "Email Marketing"],
    color: "from-rose-500 to-pink-400",
  },
  {
    id: 6,
    icon: Search,
    title: "SEO & Analytics",
    shortDesc: "Improve visibility and track performance with actionable insights.",
    features: ["Keyword Research", "On-Page SEO", "Analytics Setup", "Performance Reports"],
    color: "from-teal-500 to-green-400",
  },
];

export const ServicesSection = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, serviceId: number) => {
    const card = cardRefs.current[serviceId];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate tilt angles based on cursor position
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((centerY - y) / centerY) * 10; // Max 10 degrees (inverted)
    const rotateY = ((x - centerX) / centerX) * 10; // Max 10 degrees (inverted)

    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setHoveredId(null);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            What We <span className="text-gradient">Offer</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive digital solutions tailored to help your business thrive in today's competitive landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ perspective: "1200px" }}>
          {services.map((service, index) => (
            <div
              ref={(el) => {
                if (el) cardRefs.current[service.id] = el;
              }}
              key={service.id}
              className="group service-card-3d glass-card p-8 relative overflow-hidden hover-lift cursor-pointer"
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseMove={(e) => handleMouseMove(e, service.id)}
              onMouseLeave={handleMouseLeave}
              style={
                hoveredId === service.id
                  ? {
                      transform: `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(1.02)`,
                      transition: "box-shadow 0.1s ease-out",
                      boxShadow: `0 20px 40px hsl(var(--primary) / 0.2), inset 0 0 30px hsl(var(--primary) / 0.1)`,
                    }
                  : {
                      transform: "perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)",
                      transition: "transform 0.3s ease-out, box-shadow 0.3s ease-out",
                    }
              }
            >
              {/* Gradient Background on Hover */}
              <div
                className={cn(
                  "absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br",
                  service.color
                )}
              />

              {/* Icon */}
              <div
                className={cn(
                  "w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 bg-gradient-to-br",
                  service.color,
                  "opacity-80 group-hover:opacity-100 group-hover:scale-110"
                )}
              >
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description / Features */}
              <div className="relative mb-12">
                <p
                  className={cn(
                    "text-muted-foreground text-base leading-relaxed transition-opacity duration-300",
                    hoveredId === service.id ? "opacity-0" : "opacity-100"
                  )}
                >
                  {service.shortDesc}
                </p>

                {/* Features List (shown on hover) */}
                <ul
                  className={cn(
                    "absolute top-0 left-0 space-y-2 transition-opacity duration-300",
                    hoveredId === service.id
                      ? "opacity-100"
                      : "opacity-0 pointer-events-none"
                  )}
                >
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-base text-muted-foreground">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Arrow Icon - Bottom Right Corner */}
              <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <ArrowRight className="w-5 h-5 text-primary" />
              </div>

              {/* Bottom Gradient Line */}
              <div
                className={cn(
                  "absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r",
                  service.color
                )}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
