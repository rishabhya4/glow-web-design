import { Header } from "@/components/Header";
import Hero from "@/components/Hero";
import { TechMarquee } from "@/components/TechMarquee";
import { ProcessSection } from "@/components/ProcessSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PricingSection } from "@/components/PricingSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <TechMarquee />
        <ProcessSection />
        <ProjectsSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
