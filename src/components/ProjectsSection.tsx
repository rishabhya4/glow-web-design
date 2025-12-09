import { useState } from "react";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { ProjectModal } from "@/components/ProjectModal";

const categories = ["All", "Web Development", "Branding", "UI/UX", "Full Stack Projects"];

const projects = [
  {
    id: 1,
    title: "TechnoKrax",
    category: "UI/UX",
    description: "Responsive and accessible website with content management system.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop",
    link: "https://www.figma.com/design/3HfzBZKLqpqDhT2Iymkepa/assignment-_1?node-id=0-1&p=f&t=gPwoAq12lQRO4gsf-0",
    challenge: "Ensuring AA accessibility compliance across 50+ page templates.",
    solution: "Created component library with ARIA labels and contrast-checked color schemes.",
    tags: ["UI/UX", "Figma", "Accessibility"],
  },
  {
    id: 2,
    title: "Chai Cafe Application",
    category: "UI/UX",
    description: "Elegant tea cafe app design with warm aesthetics and seamless ordering experience for tea enthusiasts.",
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&h=600&fit=crop",
    link: "https://www.figma.com/design/SVrn2sVIlfzsJiveD3zwVF/chaiiiiii?node-id=0-1&p=f&t=CULYOxtLlEL59kXY-0",
    challenge: "Creating an inviting digital experience that captures the warmth of traditional chai culture while enabling modern ordering functionality.",
    solution: "Designed with warm color palettes, appetizing imagery, and a simplified 3-step ordering process, increasing online orders by 45%.",
    tags: ["UI/UX", "Figma", "Mobile App"],
  },
  {
    id: 3,
    title: "Fitness Gym Platform",
    category: "UI/UX",
    description: "Dynamic gym management system with workout tracking and member engagement features for fitness enthusiasts.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
    link: "https://www.figma.com/design/OXBMxo2IBKSz64AT6zhEnD/gym?t=CULYOxtLlEL59kXY-0",
    challenge: "Designing a comprehensive fitness platform that motivates users while tracking workouts, progress, and gym memberships.",
    solution: "Created an energetic interface with progress visualization, workout logs, and social features, boosting member engagement by 50%.",
    tags: ["UI/UX", "Figma", "Fitness"],
  },
  {
    id: 4,
    title: "Medical Dashboard",
    category: "UI/UX",
    description: "Comprehensive healthcare dashboard with patient management and analytics for medical professionals.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop",
    link: "https://www.figma.com/design/RZLX5A4tnr6V0yPxvcNCPu/medical-_-dashbord?t=CULYOxtLlEL59kXY-0",
    challenge: "Designing a healthcare dashboard that handles complex medical data while maintaining clarity and HIPAA compliance.",
    solution: "Implemented a clean, data-rich interface with intuitive navigation, appointment scheduling, and real-time patient monitoring, reducing admin time by 40%.",
    tags: ["UI/UX", "Figma", "Healthcare"],
  },
  {
    id: 5,
    title: "TejBharat Network",
    category: "Web Development",
    description: "Modern network services website with responsive design and seamless user experience.",
    image: "/tejbharat-screenshot.png",
    link: "https://www.tejbharatnetwork.com/",
    challenge: "Creating a professional network services platform that effectively showcases technical offerings while maintaining accessibility.",
    solution: "Developed a clean, modern website with intuitive navigation, service showcases, and optimized performance for fast loading times.",
    tags: ["Web Development", "React", "Responsive"],
  },
  {
    id: 6,
    title: "Wibelly",
    category: "Web Development",
    description: "E-commerce platform with modern design and seamless shopping experience.",
    image: "/wibelly-screenshot.png",
    link: "https://wibelly.com/",
    challenge: "Building an engaging e-commerce platform that converts visitors to customers while maintaining high performance.",
    solution: "Implemented a modern, conversion-optimized design with smooth animations, fast checkout flow, and mobile-first approach.",
    tags: ["Web Development", "E-commerce", "UI/UX"],
  },
  {
    id: 7,
    title: "AdFilm Works Media",
    category: "Web Development",
    description: "Creative media production company website showcasing portfolio and services.",
    image: "/adfilmworks-screenshot.png",
    link: "https://adfilmworksmedia.com/",
    challenge: "Designing a visually stunning website that reflects the creative nature of the media production company while showcasing their portfolio.",
    solution: "Created a dynamic, visually-rich website with portfolio galleries, video integration, and interactive elements that engage visitors.",
    tags: ["Web Development", "Portfolio", "Creative"],
  },
  {
    id: 8,
    title: "Review System",
    category: "Full Stack Projects",
    description: "Comprehensive review management platform with real-time feedback and analytics.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop",
    link: "https://reviewsystem-six.vercel.app/",
    challenge: "Building a scalable review system that handles user feedback, ratings, and sentiment analysis in real-time.",
    solution: "Developed a full-stack application with React frontend, Node.js backend, and MongoDB for efficient data management and real-time updates.",
    tags: ["Full Stack", "React", "Node.js"],
  },
  {
    id: 9,
    title: "Gita UI Replica",
    category: "Full Stack Projects",
    description: "Beautiful Bhagavad Gita reading interface with modern design and verse navigation.",
    image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=800&h=600&fit=crop",
    link: "https://gita-ui-replica.vercel.app/",
    challenge: "Creating an intuitive interface for reading sacred texts with proper formatting, translations, and commentary.",
    solution: "Built a responsive web app with chapter navigation, verse-by-verse display, and multiple language support for enhanced reading experience.",
    tags: ["Full Stack", "React", "Spiritual"],
  },
  {
    id: 10,
    title: "VowsVibe",
    category: "Full Stack Projects",
    description: "Modern wedding planning platform connecting couples with vendors and services.",
    image: "/vowsvibe-screenshot.png",
    link: "https://vowsvibe01.vercel.app/",
    challenge: "Developing a comprehensive wedding planning solution that manages vendor bookings, guest lists, and event timelines.",
    solution: "Created an all-in-one platform with vendor marketplace, RSVP management, and interactive planning tools to simplify wedding coordination.",
    tags: ["Full Stack", "E-commerce", "Event Planning"],
  },
  {
    id: 11,
    title: "Climate Conversations",
    category: "Full Stack Projects",
    description: "Interactive platform for climate awareness and environmental discussions.",
    image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&h=600&fit=crop",
    link: "https://climate-conversations.vercel.app/",
    challenge: "Creating an engaging platform that educates users about climate change while facilitating meaningful discussions.",
    solution: "Built an interactive web application with data visualizations, discussion forums, and educational resources powered by real climate data APIs.",
    tags: ["Full Stack", "Data Visualization", "Social Impact"],
  },
  {
    id: 12,
    title: "News AI",
    category: "Full Stack Projects",
    description: "AI-powered news aggregation platform with personalized content recommendations.",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=600&fit=crop",
    link: "https://news-ai-rose.vercel.app/",
    challenge: "Building an intelligent news platform that curates and personalizes content based on user preferences and reading habits.",
    solution: "Implemented AI-driven recommendation algorithms with news API integration, creating a personalized news feed experience.",
    tags: ["Full Stack", "AI/ML", "News"],
  },
  {
    id: 13,
    title: "Level Up",
    category: "Full Stack Projects",
    description: "Gamified learning platform with progress tracking and achievement systems.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop",
    link: "https://level-up-jade.vercel.app/",
    challenge: "Creating an engaging educational platform that motivates learners through gamification and progress tracking.",
    solution: "Developed a comprehensive learning management system with point systems, badges, leaderboards, and personalized learning paths.",
    tags: ["Full Stack", "EdTech", "Gamification"],
  },
];

export const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section-padding bg-transparent relative z-20">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block drop-shadow-md">
            Our Work
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white drop-shadow-lg">
            Featured <span className="text-gradient drop-shadow-lg">Projects</span>
          </h2>
          <p className="text-white text-lg opacity-100 visible drop-shadow-md">
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
                "px-5 py-2.5 rounded-full text-base font-medium transition-all duration-300",
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
              onClick={() => setSelectedProject(project)}
              className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-all duration-500 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Permanent dark overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* View Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center transform scale-50 group-hover:scale-100 transition-transform duration-500">
                    <ArrowUpRight className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
              </div>

              {/* Content - Position above overlays */}
              <div className="p-6 relative z-10">
                {/* Category Badge */}
                <span className="inline-block px-3 py-1 rounded-full bg-primary/30 text-primary text-sm font-medium mb-3 shadow-lg">
                  {project.category}
                </span>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300 drop-shadow-lg">
                  {project.title}
                </h3>

                <p className="text-gray-200 text-base leading-relaxed drop-shadow-md">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </section>
  );
};
