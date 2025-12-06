import { Phone, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export const FloatingContactButton = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const contacts = [
        {
            title: "Analysts",
            phone: "+91 9028568705",
        },
        {
            title: "Developer",
            phone: "+91 9702481379",
        },
    ];

    const handleCall = (phone: string) => {
        window.location.href = `tel:${phone}`;
    };

    return (
        <>
            {/* Floating Button */}
            <button
                onClick={() => setIsModalOpen(true)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-6 py-4 rounded-full bg-gradient-to-r from-slate-700 to-slate-600 text-white shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:scale-105 group"
                aria-label="Contact Us"
            >
                <Phone
                    className={`w-5 h-5 text-primary transition-transform duration-300 ${isHovered ? "rotate-12" : ""
                        }`}
                />
                <span className="font-semibold text-base">Contact Us</span>
            </button>

            {/* Contact Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-background/95 backdrop-blur-sm"
                        onClick={() => setIsModalOpen(false)}
                    />

                    {/* Modal */}
                    <div className="relative w-full max-w-md glass-card animate-scale-in">
                        {/* Close Button */}
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-secondary/80 backdrop-blur flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* Content */}
                        <div className="p-8">
                            <h2 className="text-3xl font-bold text-center text-foreground mb-8">
                                Get in Touch
                            </h2>

                            {/* Contact Cards */}
                            <div className="space-y-4 mb-6">
                                {contacts.map((contact) => (
                                    <div
                                        key={contact.title}
                                        className="bg-secondary/50 rounded-2xl p-6 text-center"
                                    >
                                        <h3 className="text-lg font-semibold text-foreground mb-2">
                                            {contact.title}
                                        </h3>
                                        <p className="text-xl font-bold text-foreground mb-4">
                                            {contact.phone}
                                        </p>
                                        <Button
                                            onClick={() => handleCall(contact.phone)}
                                            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-2 rounded-lg font-semibold"
                                        >
                                            Call Now
                                        </Button>
                                    </div>
                                ))}
                            </div>

                            {/* Close Button */}
                            <Button
                                onClick={() => setIsModalOpen(false)}
                                variant="outline"
                                className="w-full py-6 text-base font-semibold bg-secondary hover:bg-secondary/80"
                            >
                                Close
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
