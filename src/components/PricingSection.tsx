import { useState } from "react";
import { Check, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const pricingServices = [
  {
    id: "web",
    name: "Website Development",
    description: "Modern, responsive website with optimized user experience",
    basePrice: 250,
    selected: false,
  },
  {
    id: "branding",
    name: "Branding",
    description: "Comprehensive brand identity design",
    basePrice: 100,
    selected: false,
  },
  {
    id: "graphic",
    name: "Graphic Designing",
    description: "Professional graphic design services for branding, advertising, and digital assets",
    basePrice: 100,
    selected: false,
  },
];

export const PricingSection = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleService = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const totalEstimate = pricingServices
    .filter((s) => selectedServices.includes(s.id))
    .reduce((acc, s) => acc + s.basePrice, 0);

  return (
    <section id="pricing" className="section-padding bg-transparent relative z-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
            Pricing
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Calculate Your <span className="text-gradient">Project Cost</span>
          </h2>
          <p className="text-white text-lg">
            Use our interactive calculator to get an estimate for your project. Select services and complexity levels to see pricing.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Service Cards */}
          {pricingServices.map((service) => {
            const isSelected = selectedServices.includes(service.id);
            return (
              <div
                key={service.id}
                onClick={() => toggleService(service.id)}
                className={cn(
                  "relative rounded-2xl p-8 cursor-pointer transition-all duration-300 hover-lift",
                  isSelected
                    ? "bg-gradient-to-b from-primary/20 to-card border-2 border-primary"
                    : "glass-card hover:border-primary/30"
                )}
              >
                {/* Selection Indicator */}
                <div
                  className={cn(
                    "absolute top-4 right-4 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all",
                    isSelected
                      ? "bg-primary border-primary"
                      : "border-muted-foreground/30"
                  )}
                >
                  {isSelected && <Check className="w-4 h-4 text-primary-foreground" />}
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 pr-8">
                  {service.name}
                </h3>

                <p className="text-gray-300 text-base mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="flex items-baseline gap-2">
                  <span className="text-gray-400 text-base">Starting at</span>
                  <span className="text-3xl font-bold text-primary">${service.basePrice}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Estimate Card */}
        <div className="max-w-md mx-auto mt-12">
          <div className="glass-card p-8 text-center">
            <h3 className="text-xl font-semibold text-gray-400 mb-3">
              {selectedServices.length > 0 ? "Your Estimate" : "Select services to see your estimate"}
            </h3>

            <div className="text-base text-gray-400 mb-4 font-medium">Total Estimate</div>

            <div className="text-6xl font-bold text-gradient mb-6">
              ${totalEstimate}
            </div>

            <Button
              variant="hero"
              size="lg"
              className="w-full"
              disabled={selectedServices.length === 0}
            >
              Request Detailed Quote
            </Button>

            <p className="text-sm text-gray-500 mt-4 leading-relaxed">
              This is an estimate. Final pricing may vary based on specific project requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
