import { X, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectModalProps {
    isOpen: boolean;
    onClose: () => void;
    project: {
        title: string;
        category: string;
        description: string;
        image: string;
        link: string;
        challenge?: string;
        solution?: string;
        tags?: string[];
    } | null;
}

export const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
    if (!isOpen || !project) return null;

    const handleViewProject = () => {
        window.open(project.link, "_blank", "noopener,noreferrer");
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-background/95 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-card animate-scale-in">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-secondary/80 backdrop-blur flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Project Image */}
                <div className="relative h-64 md:h-80 overflow-hidden rounded-t-2xl">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-8 md:p-10">
                    {/* Category Tabs */}
                    <div className="flex gap-2 mb-6">
                        {project.tags && project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium"
                            >
                                {tag}
                            </span>
                        ))}
                        {!project.tags && (
                            <span className="px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium">
                                {project.category}
                            </span>
                        )}
                    </div>

                    {/* Title */}
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        {project.title}
                    </h2>

                    {/* Description */}
                    <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                        {project.description}
                    </p>

                    {/* Challenge & Solution */}
                    {(project.challenge || project.solution) && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                            {project.challenge && (
                                <div>
                                    <h3 className="text-xl font-bold text-foreground mb-3">
                                        Challenge
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {project.challenge}
                                    </p>
                                </div>
                            )}

                            {project.solution && (
                                <div>
                                    <h3 className="text-xl font-bold text-foreground mb-3">
                                        Solution
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {project.solution}
                                    </p>
                                </div>
                            )}
                        </div>
                    )}

                    {/* View Live Project Button */}
                    <Button
                        variant="hero"
                        size="lg"
                        onClick={handleViewProject}
                        className="gap-2"
                    >
                        <ExternalLink className="w-5 h-5" />
                        View Live Project
                    </Button>
                </div>
            </div>
        </div>
    );
};
