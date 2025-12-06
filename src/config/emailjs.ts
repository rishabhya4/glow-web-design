// EmailJS Configuration
// Replace these with your actual EmailJS credentials from https://dashboard.emailjs.com

export const EMAILJS_CONFIG = {
    PUBLIC_KEY: 'YOUR_PUBLIC_KEY',      // Get from EmailJS Dashboard -> Account
    SERVICE_ID: 'YOUR_SERVICE_ID',      // Get from EmailJS Dashboard -> Email Services
    TEMPLATE_ID: 'YOUR_TEMPLATE_ID',    // Get from EmailJS Dashboard -> Email Templates
};

// Template variables that will be sent:
// - to_email: growonagency01@gmail.com
// - from_name: User's full name
// - from_email: User's email
// - phone: User's phone number
// - services: Selected services (comma-separated)
// - message: Full message with details
