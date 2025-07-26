import { GraduationCap, Cog, Palette, Check } from "lucide-react";

export default function AboutSection() {
  const engineeringSkills = [
    "CAD Design & Prototyping",
    "Systems Thinking",
    "Project Management",
    "Data Analysis",
  ];

  const designSkills = [
    "User Research & Testing",
    "Wireframing & Prototyping",
    "Information Architecture",
    "Design Systems",
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">About Me</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            My journey from mechanical engineering to UX design represents a unique blend of
            analytical thinking and creative problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">The Transition Story</h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              After graduating from Olin College of Engineering with a degree in Mechanical
              Engineering, I spent several years in product development and manufacturing.
              However, I found myself increasingly drawn to the human side of engineering—understanding
              user needs, designing intuitive interfaces, and creating meaningful experiences.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              This curiosity led me to pursue UX design and product research, where I discovered
              that my engineering background provides a unique advantage in understanding technical
              constraints while advocating for user needs.
            </p>
            <div className="flex items-center space-x-4 bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
              <div className="flex-shrink-0">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <div>
                <div className="font-semibold text-slate-900 dark:text-white">Olin College of Engineering</div>
                <div className="text-slate-600 dark:text-slate-300">B.S. Mechanical Engineering</div>
              </div>
            </div>
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
          <h3 className="text-2xl font-bold text-slate-900 text-center">Skill Evolution</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-6 rounded-xl">
              <h4 className="text-lg font-semibold text-primary mb-4 flex items-center">
                <Cog className="mr-3 h-5 w-5" />
                Engineering Foundation
              </h4>
              <ul className="space-y-2 text-slate-700">
                {engineeringSkills.map((skill, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-orange-50 p-6 rounded-xl">
              <h4 className="text-lg font-semibold text-accent mb-4 flex items-center">
                <Palette className="mr-3 h-5 w-5" />
                Design Expertise
              </h4>
              <ul className="space-y-2 text-slate-700">
                {designSkills.map((skill, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
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
