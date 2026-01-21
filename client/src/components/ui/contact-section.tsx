import { useState } from "react";
import { Mail, Phone, MapPin, Send, Calendar, Linkedin, Github } from "lucide-react";
import { SiDribbble } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export default function ContactSection() {
  const { ref: contactRef, isVisible: contactVisible } = useScrollAnimation();
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation();
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to send your message.",
        variant: "destructive",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid email address",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xyzwqgao", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
      });
      console.error("Contact form error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "vaanibhatnagar016@gmail.com",
      bgColor: "bg-primary",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 6099752021",
      bgColor: "bg-accent",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "New Jersey",
      bgColor: "bg-slate-700",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/vaani-bhatnagar-3b90b3182/",
      bgColor: "bg-blue-600 hover:bg-blue-700",
    },
    {
      icon: Github,
      href: "https://github.com/vaanibhatnagar",
      bgColor: "bg-gray-800 hover:bg-gray-900",
    },
    {
      icon: SiDribbble,
      href: "https://dribbble.com/vaani-bhatnagar/",
      bgColor: "bg-pink-500 hover:bg-pink-600",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={contactRef as React.RefObject<HTMLDivElement>} 
          className={`text-center mb-16 transition-all duration-1000 ${
            contactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl font-bold font-display gradient-text mb-4">Let's Connect</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Ready to create something magical together? Whether you want to chat about your next big project, 
            need a cheerleader for your ambitious goals, or just want to geek out about great design, books, and movies, I'm here for it! ✨
          </p>
        </div>

        <div 
          ref={formRef as React.RefObject<HTMLDivElement>} 
          className={`grid grid-cols-1 lg:grid-cols-2 gap-16 transition-all duration-1000 delay-200 ${
            formVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Contact Form */}
          <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold font-display text-slate-900 dark:text-white mb-6">Let's Start Our Story 💫</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    First Name
                  </Label>
                  <Input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="John"
                    className="w-full focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-900"
                    required
                    aria-describedby="firstName-error"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Last Name
                  </Label>
                  <Input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Doe"
                    className="w-full"
                    required
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Email
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                  className="w-full"
                  required
                />
              </div>
              <div>
                <Label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Subject
                </Label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Project Discussion"
                  className="w-full"
                  required
                />
              </div>
              <div>
                <Label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project..."
                  className="w-full resize-none"
                  required
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-3 bg-primary text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Get In Touch</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className={`flex-shrink-0 w-12 h-12 ${info.bgColor} rounded-lg flex items-center justify-center`}>
                      <info.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-slate-900 dark:text-white">{info.label}</div>
                      <div className="text-slate-600 dark:text-slate-300">{info.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            

            <div className="bg-gradient-to-br from-primary to-accent p-6 rounded-2xl text-white">
              <h4 className="text-lg font-semibold mb-2">Ready to Collaborate?</h4>
              <p className="text-blue-100 mb-4">
                Let's discuss how my unique background in both engineering and design can benefit
                your next project.
              </p>
              <a
                href="https://calendly.com/vaanibhatnagar016/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-white font-medium hover:text-blue-100 transition-colors"
              >
                Schedule a Call
                <Calendar className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
