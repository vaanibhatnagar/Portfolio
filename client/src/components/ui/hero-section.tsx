import { ArrowRight, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiDribbble } from "react-icons/si";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

// Using static asset path for professional photo
const professionalPhoto = "/images/professional-photo.jpg";

export default function HeroSection() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Skip Navigation Link */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white px-4 py-2 rounded-md z-50 focus:outline-none focus:ring-2 focus:ring-white"
      >
        Skip to main content
      </a>
      <section id="home" className="relative min-h-screen flex items-center gradient-hero pt-16" role="banner">
        <div 
          ref={heroRef as React.RefObject<HTMLDivElement>} 
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 transition-all duration-1000 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold font-display leading-tight">
                  From <span className="gradient-text">Engineering</span> to{" "}
                  <span className="gradient-text">Design</span>
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">Mechanical engineer and UX designer, passionate about creating inclusive technology that bridges complex systems with human needs.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => scrollToSection("portfolio")}
                  className="inline-flex items-center px-8 py-3 bg-primary text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-900"
                  aria-label="View my portfolio work"
                >
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  onClick={() => scrollToSection("contact")}
                  className="inline-flex items-center px-8 py-3 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-medium rounded-lg hover:border-primary hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-900"
                  aria-label="Go to contact section"
                >
                  Get In Touch
                </Button>
              </div>
            <div className="flex items-center space-x-6 pt-4">
              <a
                href="https://linkedin.com/in/vaani-bhatnagar-3b90b3182/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-900 rounded-md p-1"
                aria-label="Connect with me on LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://github.com/vaanibhatnagar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-900 rounded-md p-1"
                aria-label="See my code projects on GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://dribbble.com/vaani-bhatnagar/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-900 rounded-md p-1"
                aria-label="View my design work on Dribbble"
              >
                <SiDribbble className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-slate-700 dark:to-slate-800 rounded-3xl shadow-2xl w-full max-w-md mx-auto h-96 overflow-hidden">
              <img
                src={professionalPhoto}
                alt="Vaani Bhatnagar - Mechanical Engineering Student and UI/UX Designer"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-xl">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-slate-600">Years Engineering</div>
              </div>
            </div>
            <div className="absolute -top-4 -left-4 bg-accent rounded-2xl p-4 shadow-xl">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">3+</div>
                <div className="text-sm text-white">Years Design</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
