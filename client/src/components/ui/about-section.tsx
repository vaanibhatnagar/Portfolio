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
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">About Me</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            From mechanical engineering to UI/UX design, I bring together technical expertise
            with human-centered design thinking.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">The Transition Story</h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">Graduating from Olin College of Engineering with a degree in Mechanical Engineering, I've built a strong foundation through hands-on, team-based projects and diverse internship experiences spanning software engineering, data science, and product design.</p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">My journey has taken me from designing mechanical systems and building data pipelines to leading UI/UX design projects. This unique combination of technical expertise and design thinking allows me to create solutions that are both innovative and user-centered, bridging the gap between complex engineering systems and intuitive user experiences.</p>
            
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
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white text-center">Skill Evolution</h3>
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
      </div>
    </section>
  );
}
