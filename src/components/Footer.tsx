import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowUp,
  MapPin,
  Phone,
  Mail
} from "lucide-react";

const footerLinks = {
  quickLinks: [
    { label: "Home", href: "#home" },
    { label: "How We Work", href: "#process" },
    { label: "Projects", href: "#projects" },
    { label: "What We Offer", href: "#services" },
    { label: "Blogs", href: "#" },
  ],
  services: [
    { label: "Web Development", href: "#services" },
    { label: "Branding", href: "#services" },
    { label: "UI/UX Design", href: "#services" },
    { label: "SEO & Marketing", href: "#services" },
    { label: "Graphic Design", href: "#services" },
  ],
};

const contactInfo = {
  location: "Borivali, Mumbai",
  phones: ["+91 9028568705", "+91 9702481379"],
  email: "growonagency01@gmail.com",
};

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-transparent border-t border-gray-800 relative z-20">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div>
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2 mb-6">
              <img
                src="/logo_no_bg-BnMSOQKw.png"
                alt="GrowOn Logo"
                className="h-10 w-auto"
              />
            </a>

            <p className="text-gray-300 text-base leading-relaxed mb-6">
              We help businesses increase revenue and ensure sustainable long-term growth through powerful digital solutions.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="font-bold text-white mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-base text-gray-400 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-bold text-white mb-4 text-lg">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-base text-gray-400 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us Column */}
          <div>
            <h4 className="font-bold text-white mb-4 text-lg">Contact Us</h4>
            <ul className="space-y-4">
              {/* Location */}
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-base text-gray-400">
                  {contactInfo.location}
                </span>
              </li>

              {/* Phone Numbers */}
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  {contactInfo.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone}`}
                      className="text-base text-gray-400 hover:text-primary transition-colors"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </li>

              {/* Email */}
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-base text-gray-400 hover:text-primary transition-colors break-all"
                >
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-base text-gray-500">
            © {new Date().getFullYear()} GrowOn. All rights reserved.
          </p>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-base text-gray-400 hover:text-primary transition-colors font-medium"
          >
            Back to top
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
