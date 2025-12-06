import { useState } from "react";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = ["All", "Web Development", "Branding", "UI/UX", "Mobile Apps"];

const projects = [
  {
    id: 1,
    title: "FinanceFlow Dashboard",
    category: "Web Development",
    description: "A comprehensive financial analytics platform with real-time data visualization.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    title: "EcoVenture Brand Identity",
    category: "Branding",
    description: "Complete brand transformation for a sustainable travel company.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    title: "HealthHub Mobile App",
    category: "UI/UX",
    description: "Intuitive health tracking application with personalized insights.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
  },
  {
    id: 4,
    title: "RetailX E-commerce",
    category: "Web Development",
    description: "High-converting e-commerce platform with seamless checkout experience.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
  },
  {
    id: 5,
    title: "TechNova Rebrand",
    category: "Branding",
    description: "Modern tech startup branding with bold visual identity.",
    image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800&h=600&fit=crop",
  },
  {
    id: 6,
    title: "FoodieSpot App",
    category: "Mobile Apps",
    description: "Restaurant discovery app with AI-powered recommendations.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop",
  },
];

export const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section-padding bg-card/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
            Our Work
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore our portfolio of successful projects that have transformed businesses across industries.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* View Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center transform scale-50 group-hover:scale-100 transition-transform duration-500">
                    <ArrowUpRight className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category Badge */}
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
                  {project.category}
                </span>

                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
