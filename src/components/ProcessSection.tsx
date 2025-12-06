import { Search, BarChart3, Lightbulb, Code2, Rocket, Trophy } from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description: "We dive deep into understanding your vision, goals, and target audience to lay the foundation.",
    icon: Search,
  },
  {
    number: "02",
    title: "Research",
    description: "Comprehensive market analysis and competitor research to identify growth opportunities.",
    icon: BarChart3,
  },
  {
    number: "03",
    title: "Strategy",
    description: "Crafting a tailored roadmap that aligns with your business objectives and market position.",
    icon: Lightbulb,
  },
  {
    number: "04",
    title: "Development",
    description: "Our expert team brings your vision to life with clean, scalable, and efficient code.",
    icon: Code2,
  },
  {
    number: "05",
    title: "Launch",
    description: "Seamless deployment with thorough testing and optimization for peak performance.",
    icon: Rocket,
  },
  {
    number: "06",
    title: "Growth",
    description: "Continuous support, analytics monitoring, and iterative improvements for lasting success.",
    icon: Trophy,
  },
];

export const ProcessSection = () => {
  return (
    <section id="process" className="section-padding relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            How We Bring Ideas to{" "}
            <span className="text-gradient">Life</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A proven methodology that ensures exceptional results for every project we undertake.
          </p>
        </div>

        {/* Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((step, index) => (
            <div
              key={step.number}
              className="group glass-card p-8 hover-lift relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Step Number Background */}
              <div className="absolute -right-4 -top-4 text-8xl font-bold text-primary/5 group-hover:text-primary/10 transition-colors duration-500">
                {step.number}
              </div>

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <step.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Step Number Badge */}
              <span className="text-primary font-mono text-sm font-semibold mb-3 block">
                .{step.number}
              </span>

              {/* Title */}
              <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-base text-muted-foreground leading-relaxed">
                {step.description}
              </p>

              {/* Hover Line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
