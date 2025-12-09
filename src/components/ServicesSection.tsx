import { useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
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

// Animation variants for scroll-triggered effects
const cardVariants: Variants = {
  offscreen: {
    y: 150,
    opacity: 0,
    scale: 0.8,
    rotate: -5,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.5,
      duration: 1,
      ease: "easeOut",
    },
  },
};

export const ServicesSection = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

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
          <p className="text-white text-lg">
            Comprehensive digital solutions tailored to help your business thrive in today's competitive landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="group glass-card p-8 relative overflow-hidden hover-lift cursor-pointer"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: false, amount: 0.1 }}
              variants={{
                ...cardVariants,
                onscreen: {
                  ...cardVariants.onscreen,
                  transition: {
                    ...(cardVariants.onscreen as any).transition,
                    delay: index * 0.15,
                  },
                },
              }}
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
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
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description / Features */}
              <div className="relative">
                <p
                  className={cn(
                    "text-gray-300 text-base leading-relaxed transition-opacity duration-300",
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

              {/* Arrow Icon */}
              <div className="mt-6 flex items-center gap-2 text-primary font-medium text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
                {/* Learn More */}
                <ArrowRight className="w-4 h-4" />
              </div>

              {/* Bottom Gradient Line */}
              <div
                className={cn(
                  "absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r",
                  service.color
                )}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
