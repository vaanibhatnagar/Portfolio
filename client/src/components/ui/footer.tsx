import { Linkedin, Github } from "lucide-react";
import { SiDribbble } from "react-icons/si";

export default function Footer() {
  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com/in/vaani-bhatnagar-3b90b3182/" },
    { icon: Github, href: "https://github.com/vaanibhatnagar" },
    { icon: SiDribbble, href: "https://dribbble.com/vaani-bhatnagar/" },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold font-display gradient-text mb-4">Vaani Bhatnagar</h3>
          <p className="mb-6">Storyteller • Team Cheerleader • Design Enthusiast</p>
          <p className="text-sm text-slate-400 mb-6 italic font-display">
            "Bringing people together, one beautiful experience at a time" 💕
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <social.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
          <div className="border-t border-slate-700 pt-8">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Vaani Bhatnagar. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
