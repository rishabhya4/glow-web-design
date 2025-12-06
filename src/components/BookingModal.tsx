import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const projectRequirements = [
    {
        id: "responsive",
        label: "Responsive Design",
        description: "Ensures the website adapts seamlessly to various devices, including mobile and tablet screens.",
    },
    {
        id: "seo",
        label: "SEO Optimization",
        description: "Implements strategies to enhance search engine visibility and ranking.",
    },
    {
        id: "ecommerce",
        label: "E-commerce Functionality",
        description: "Provides shopping cart features and secure payment processing for online stores.",
    },
    {
        id: "hosting",
        label: "Hosting & Maintenance",
        description: "Offers reliable website hosting along with ongoing maintenance and support.",
    },
    {
        id: "branding",
        label: "Branding Package",
        description: "Develops a cohesive brand identity with color schemes, typography, and visual style guidelines.",
    },
    {
        id: "logo",
        label: "Logo Design",
        description: "Creates a unique and memorable logo that represents your brand's values and mission.",
    },
    {
        id: "graphic",
        label: "Graphic Design Services",
        description: "Designs visual content such as brochures, business cards, and social media graphics to enhance brand communication.",
    },
    {
        id: "uxui",
        label: "UX/UI Design",
        description: "Focuses on user experience and interface design to ensure intuitive and engaging interactions on your website.",
    },
    {
        id: "content",
        label: "Content Creation",
        description: "Produces high-quality written content tailored to your brand's voice and audience.",
    },
    {
        id: "social",
        label: "Social Media Integration",
        description: "Integrates social media platforms to enhance online presence and facilitate content sharing.",
    },
    {
        id: "analytics",
        label: "Analytics & Reporting",
        description: "Provides insights into website performance and user behavior through detailed analytics and reports.",
    },
];

export const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        selectedServices: [] as string[],
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleCheckboxChange = (serviceId: string, checked: boolean) => {
        setFormData((prev) => ({
            ...prev,
            selectedServices: checked
                ? [...prev.selectedServices, serviceId]
                : prev.selectedServices.filter((id) => id !== serviceId),
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (formData.selectedServices.length === 0) {
            toast({
                title: "Please select at least one service",
                description: "Select the services you're interested in.",
                variant: "destructive",
            });
            return;
        }

        setIsSubmitting(true);

        try {
            // Get selected service details
            const selectedServiceDetails = projectRequirements
                .filter(req => formData.selectedServices.includes(req.id))
                .map(req => req.label);

            // Prepare email data to send to growonagency01@gmail.com
            const emailData = {
                to_email: "growonagency01@gmail.com",
                from_name: formData.fullName,
                from_email: formData.email,
                phone: formData.phone || "Not provided",
                services: selectedServiceDetails.join(", "),
                message: `New quote request from ${formData.fullName}\n\nEmail: ${formData.email}\nPhone: ${formData.phone || "Not provided"}\n\nSelected Services:\n${selectedServiceDetails.map(s => `- ${s}`).join('\n')}\n\nPlease respond with a detailed quote.`,
            };

            // Log the data (you can integrate with EmailJS or your backend here)
            console.log("Email data to send:", emailData);

            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1500));

            toast({
                title: "Quote Request Sent!",
                description: "We'll get back to you within 24 hours with a detailed quote.",
            });

            // Reset form
            setFormData({
                fullName: "",
                email: "",
                phone: "",
                selectedServices: [],
            });
            onClose();
        } catch (error) {
            toast({
                title: "Error sending request",
                description: "Please try again or contact us directly at growonagency01@gmail.com",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-background/95 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-card p-8 md:p-10 animate-scale-in">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Header */}
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                    Request Detailed Quote
                </h2>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name and Email Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="fullName" className="block text-base font-medium text-foreground mb-2">
                                Full Name
                            </label>
                            <Input
                                id="fullName"
                                value={formData.fullName}
                                onChange={(e) =>
                                    setFormData((prev) => ({ ...prev, fullName: e.target.value }))
                                }
                                placeholder="John Doe"
                                required
                                className="bg-background/50 border-border focus:border-primary h-12"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-base font-medium text-foreground mb-2">
                                Email
                            </label>
                            <Input
                                id="email"
                                type="email"
                                value={formData.email}
                                onChange={(e) =>
                                    setFormData((prev) => ({ ...prev, email: e.target.value }))
                                }
                                placeholder="john@example.com"
                                required
                                className="bg-background/50 border-border focus:border-primary h-12"
                            />
                        </div>
                    </div>

                    {/* Phone Number */}
                    <div>
                        <label htmlFor="phone" className="block text-base font-medium text-foreground mb-2">
                            Phone Number
                        </label>
                        <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) =>
                                setFormData((prev) => ({ ...prev, phone: e.target.value }))
                            }
                            placeholder="+1 (555) 000-0000"
                            className="bg-background/50 border-border focus:border-primary h-12"
                        />
                    </div>

                    {/* Project Requirements */}
                    <div>
                        <h3 className="text-xl font-bold text-foreground mb-4">
                            Project Requirements
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {projectRequirements.map((requirement) => (
                                <div
                                    key={requirement.id}
                                    className={cn(
                                        "p-4 rounded-lg border transition-all duration-300",
                                        formData.selectedServices.includes(requirement.id)
                                            ? "border-primary bg-primary/5"
                                            : "border-border bg-background/50 hover:border-primary/30"
                                    )}
                                >
                                    <div className="flex items-start gap-3">
                                        <Checkbox
                                            id={requirement.id}
                                            checked={formData.selectedServices.includes(requirement.id)}
                                            onCheckedChange={(checked) =>
                                                handleCheckboxChange(requirement.id, checked as boolean)
                                            }
                                            className="mt-1"
                                        />
                                        <div className="flex-1">
                                            <label
                                                htmlFor={requirement.id}
                                                className="font-semibold text-foreground cursor-pointer block mb-1"
                                            >
                                                {requirement.label}
                                            </label>
                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                {requirement.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Submit Button */}
                    <Button
                        type="submit"
                        variant="hero"
                        size="lg"
                        className="w-full"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Sending Request..." : "Request Quote"}
                    </Button>
                </form>
            </div>
        </div>
    );
};
