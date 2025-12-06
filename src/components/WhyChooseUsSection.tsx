import { Zap, Users, Award, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Fast Turnaround",
    description: "We deliver projects on time, every time, without compromising on quality.",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description: "Our experienced professionals are committed to the success of your project.",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "We maintain the highest standards in every aspect of our work.",
  },
  {
    icon: BarChart3,
    title: "Performance Focus",
    description: "We optimize for speed, reliability, and a seamless user experience.",
  },
];

const stats = [
  { value: "98%", label: "Client Satisfaction" },
  { value: "70+", label: "Projects Completed" },
  { value: "6", label: "Months Experience" },
  { value: "7+", label: "Team Members" },
];

export const WhyChooseUsSection = () => {
  return (
    <section id="about" className="section-padding bg-card/30 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial opacity-40" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            What Sets Us <span className="text-gradient">Apart</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            At GrowOn, we're committed to delivering exceptional results and experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl bg-background/50 border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-3">{feature.title}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Right - Stats Card */}
          <div className="relative">
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />

            <div className="glass-card p-10 relative overflow-hidden">
              {/* Grid Pattern */}
              <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                  backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                                   linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
                  backgroundSize: '30px 30px'
                }}
              />

              <div className="relative z-10">
                <div className="grid grid-cols-2 gap-8">
                  {stats.map((stat, index) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                        {stat.value}
                      </div>
                      <div className="text-base text-muted-foreground font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
