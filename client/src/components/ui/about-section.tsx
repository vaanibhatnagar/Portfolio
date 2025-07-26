import { GraduationCap, Cog, Palette, Check } from "lucide-react";

export default function AboutSection() {
  const engineeringSkills = [
    "SolidWorks & Onshape CAD",
    "3D Printing & Fabrication",
    "Python & MATLAB Programming",
    "SQL & Database Design", 
    "Control Systems & Robotics",
  ];

  const designSkills = [
    "UI/UX Design & Figma",
    "Product Design & Research",
    "Adobe Creative Suite",
    "Data Visualization",
    "Agile Development",
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-display gradient-text mb-4">About Me</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            From mechanical systems to human-centered design, I'm passionate about creating 
            technology that empowers people and builds stronger communities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
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
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Engineering to design transition"
              className="rounded-2xl shadow-lg w-full"
            />
          </div>
        </div>

        <div className="space-y-8">
          <h3 className="text-2xl font-bold font-display gradient-text text-center">Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 dark:bg-slate-800 p-6 rounded-xl">
              <h4 className="text-lg font-semibold text-primary dark:text-blue-400 mb-4 flex items-center">
                <Cog className="mr-3 h-5 w-5" />
                Engineering Foundation
              </h4>
              <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                {engineeringSkills.map((skill, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 dark:text-green-400 mr-2" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-orange-50 dark:bg-slate-800 p-6 rounded-xl">
              <h4 className="text-lg font-semibold text-accent dark:text-orange-400 mb-4 flex items-center">
                <Palette className="mr-3 h-5 w-5" />
                Design Expertise
              </h4>
              <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                {designSkills.map((skill, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 dark:text-green-400 mr-2" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Personality Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold font-display gradient-text text-center mb-12">Beyond the Code</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-gradient-to-br from-pink-50 to-red-50 dark:from-pink-900/20 dark:to-red-900/20 p-6 rounded-xl text-center border border-pink-200 dark:border-pink-800">
              <div className="text-4xl mb-3">🎬</div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Movie Enthusiast</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300">From epic dramas to indie gems, I find inspiration in storytelling that moves hearts</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 p-6 rounded-xl text-center border border-purple-200 dark:border-purple-800">
              <div className="text-4xl mb-3">💃</div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Dance Lover</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300">Whether it's celebrating a project win or performing at a recital, movement is my language of joy</p>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 p-6 rounded-xl text-center border border-amber-200 dark:border-amber-800">
              <div className="text-4xl mb-3">📚</div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Book Lover</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300">Every great story teaches us something new - I find inspiration in books that expand my perspective and creativity</p>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 p-6 rounded-xl text-center border border-emerald-200 dark:border-emerald-800">
              <div className="text-4xl mb-3">🤝</div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Team Cheerleader</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300">Your biggest supporter, celebrating every milestone and turning setbacks into comebacks</p>
            </div>
            <div className="bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 p-6 rounded-xl text-center border border-violet-200 dark:border-violet-800">
              <div className="text-4xl mb-3">🎉</div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Event Planner</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300">Creating personalized themes and memorable experiences that keep people engaged and connected</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
