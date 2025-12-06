import { useState } from "react";
import { Check, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const pricingPlans = [
  {
    name: "Starter",
    description: "Perfect for small businesses and startups",
    price: 499,
    popular: false,
    features: [
      { name: "Custom Website (5 pages)", included: true },
      { name: "Mobile Responsive Design", included: true },
      { name: "Basic SEO Setup", included: true },
      { name: "Contact Form Integration", included: true },
      { name: "2 Rounds of Revisions", included: true },
      { name: "Brand Identity Package", included: false },
      { name: "E-commerce Features", included: false },
      { name: "Priority Support", included: false },
    ],
  },
  {
    name: "Professional",
    description: "Ideal for growing businesses",
    price: 999,
    popular: true,
    features: [
      { name: "Custom Website (10 pages)", included: true },
      { name: "Mobile Responsive Design", included: true },
      { name: "Advanced SEO Optimization", included: true },
      { name: "Contact Form Integration", included: true },
      { name: "5 Rounds of Revisions", included: true },
      { name: "Brand Identity Package", included: true },
      { name: "E-commerce Features", included: true },
      { name: "Priority Support", included: false },
    ],
  },
  {
    name: "Enterprise",
    description: "For large-scale projects",
    price: 2499,
    popular: false,
    features: [
      { name: "Unlimited Pages", included: true },
      { name: "Mobile Responsive Design", included: true },
      { name: "Full SEO & Analytics Suite", included: true },
      { name: "Advanced Integrations", included: true },
      { name: "Unlimited Revisions", included: true },
      { name: "Complete Brand Package", included: true },
      { name: "Full E-commerce Solution", included: true },
      { name: "24/7 Priority Support", included: true },
    ],
  },
];

export const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  return (
    <section id="pricing" className="section-padding bg-card/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
            Pricing
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Transparent <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Choose the perfect plan for your business needs. All plans include our commitment to quality.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center items-center gap-4 mb-12">
          <span
            className={cn(
              "text-sm font-medium transition-colors",
              billingCycle === "monthly" ? "text-foreground" : "text-muted-foreground"
            )}
          >
            Monthly
          </span>
          <button
            onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
            className="relative w-14 h-7 rounded-full bg-secondary transition-colors"
          >
            <div
              className={cn(
                "absolute top-1 w-5 h-5 rounded-full bg-primary transition-all duration-300",
                billingCycle === "yearly" ? "left-8" : "left-1"
              )}
            />
          </button>
          <span
            className={cn(
              "text-sm font-medium transition-colors",
              billingCycle === "yearly" ? "text-foreground" : "text-muted-foreground"
            )}
          >
            Yearly
            <span className="ml-2 text-xs text-primary">(Save 20%)</span>
          </span>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.name}
              className={cn(
                "relative rounded-3xl p-8 transition-all duration-300 hover-lift",
                plan.popular
                  ? "bg-gradient-to-b from-primary/10 to-card border-2 border-primary"
                  : "glass-card"
              )}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl md:text-5xl font-bold text-foreground">
                    ${billingCycle === "yearly" ? Math.round(plan.price * 0.8) : plan.price}
                  </span>
                  <span className="text-muted-foreground">/project</span>
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature.name} className="flex items-center gap-3">
                    {feature.included ? (
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                    ) : (
                      <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                        <Minus className="w-3 h-3 text-muted-foreground" />
                      </div>
                    )}
                    <span
                      className={cn(
                        "text-sm",
                        feature.included ? "text-foreground" : "text-muted-foreground"
                      )}
                    >
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                variant={plan.popular ? "hero" : "outline"}
                className="w-full"
                size="lg"
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>

        {/* Custom Quote CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Need a custom solution? We'd love to hear about your project.
          </p>
          <Button variant="glass" size="lg">
            Request Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
};
