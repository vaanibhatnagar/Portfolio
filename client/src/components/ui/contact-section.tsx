import { useState } from "react";
import { Mail, Phone, MapPin, Send, Calendar, Linkedin, Github } from "lucide-react";
import { SiDribbble, SiX } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import type { InsertContact } from "@shared/schema";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const { toast } = useToast();
  const queryClient = useQueryClient();

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const response = await apiRequest("POST", "/api/contacts", data);
      return response.json();
    },
    onSuccess: () => {
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
      queryClient.invalidateQueries({ queryKey: ["/api/contacts"] });
    },
    onError: (error: Error) => {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
      });
      console.error("Contact form error:", error);
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to send your message.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid email address",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    contactMutation.mutate(formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sarah.chen@email.com",
      bgColor: "bg-primary",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      bgColor: "bg-accent",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      bgColor: "bg-slate-700",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://linkedin.com",
      bgColor: "bg-blue-600 hover:bg-blue-700",
    },
    {
      icon: SiDribbble,
      href: "https://dribbble.com",
      bgColor: "bg-pink-500 hover:bg-pink-600",
    },
    {
      icon: Github,
      href: "https://github.com",
      bgColor: "bg-gray-800 hover:bg-gray-900",
    },
    {
      icon: SiX,
      href: "https://x.com",
      bgColor: "bg-slate-800 hover:bg-slate-900",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Let's Connect</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            I'm always interested in discussing new opportunities, collaborations, or just
            chatting about design and engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Send a Message</h3>
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
                disabled={contactMutation.isPending}
                className="w-full px-8 py-3 bg-primary text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
              >
                {contactMutation.isPending ? "Sending..." : "Send Message"}
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
                href="mailto:sarah.chen@email.com"
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
