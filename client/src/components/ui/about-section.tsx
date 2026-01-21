import { useScrollAnimation } from "../../hooks/useScrollAnimation";

import IMG_0826 from "@assets/IMG_0826.jpg";

export default function AboutSection() {
  const { ref: aboutRef, isVisible: aboutVisible } = useScrollAnimation();
  const { ref: storyRef, isVisible: storyVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={aboutRef as React.RefObject<HTMLDivElement>} 
          className={`text-center mb-16 transition-all duration-1000 ${
            aboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl font-bold font-display gradient-text mb-4">About Me</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            From mechanical systems to human-centered design, I'm passionate about creating 
            technology that empowers people and builds stronger communities.
          </p>
        </div>

        <div 
          ref={storyRef as React.RefObject<HTMLDivElement>} 
          className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center transition-all duration-1000 delay-200 ${
            storyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="space-y-6">
            <h3 className="text-2xl font-bold font-display text-slate-900 dark:text-white">My Story</h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              My journey began at Olin College of Engineering, where I discovered that the best solutions 
              come from bringing diverse minds together. What started as a love for mechanical systems 
              evolved into a passion for designing human-centered experiences.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Through internships at places like Microsoft and hands-on projects ranging from accessible 
              healthcare systems to Formula SAE racing, I've learned to bridge the gap between technical 
              complexity and user simplicity. Every line of code, every design decision, every user 
              interaction is an opportunity to make someone's day a little better.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Today, I'm passionate about using design thinking to solve complex problems, whether that's 
              optimizing database performance or creating consent frameworks that empower marginalized 
              communities. I believe the best products come from understanding both the technical 
              constraints and the human needs.
            </p>
            
          </div>
          <div className="relative">
            <img
              src={IMG_0826}
              alt="Engineering to design transition"
              className="rounded-2xl shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
