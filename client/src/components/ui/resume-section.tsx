import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Experience, Education, Skill } from "@/lib/types";

export default function ResumeSection() {
  const experiences: Experience[] = [
    {
      id: "1",
      title: "Senior UX Designer",
      company: "TechFlow Solutions",
      period: "2022 - Present",
      description: "Leading UX design for B2B SaaS products, conducting user research, and establishing design systems.",
      type: "design",
    },
    {
      id: "2",
      title: "Product Designer",
      company: "InnovateLab",
      period: "2020 - 2022",
      description: "Transitioned into product design role, focusing on user-centered design and cross-functional collaboration.",
      type: "transition",
    },
    {
      id: "3",
      title: "Mechanical Engineer",
      company: "Precision Dynamics Corp",
      period: "2018 - 2020",
      description: "Product development and manufacturing process optimization for medical device components.",
      type: "engineering",
    },
  ];

  const education: Education[] = [
    {
      id: "1",
      degree: "B.S. Mechanical Engineering",
      institution: "Olin College of Engineering",
      period: "2014 - 2018",
    },
    {
      id: "2",
      degree: "Google UX Design Certificate",
      institution: "Coursera",
      period: "2020",
    },
    {
      id: "3",
      degree: "Interaction Design Specialization",
      institution: "UC San Diego",
      period: "2021",
    },
  ];

  const skills: Skill[] = [
    { name: "User Research", percentage: 95, category: "design" },
    { name: "Prototyping", percentage: 90, category: "design" },
    { name: "CAD Design", percentage: 85, category: "engineering" },
    { name: "Data Analysis", percentage: 80, category: "engineering" },
  ];

  const getExperienceColor = (type: Experience["type"]) => {
    switch (type) {
      case "design":
        return "bg-blue-50 border-primary";
      case "transition":
        return "bg-orange-50 border-accent";
      case "engineering":
        return "bg-gray-50 border-gray-400";
      default:
        return "bg-gray-50 border-gray-400";
    }
  };

  const getExperienceDotColor = (type: Experience["type"]) => {
    switch (type) {
      case "design":
        return "bg-primary";
      case "transition":
        return "bg-accent";
      case "engineering":
        return "bg-gray-400";
      default:
        return "bg-gray-400";
    }
  };

  const getExperienceTextColor = (type: Experience["type"]) => {
    switch (type) {
      case "design":
        return "text-primary";
      case "transition":
        return "text-accent";
      case "engineering":
        return "text-gray-600";
      default:
        return "text-gray-600";
    }
  };

  const getSkillColor = (category: Skill["category"]) => {
    switch (category) {
      case "design":
        return "bg-primary";
      case "engineering":
        return "bg-accent";
      default:
        return "bg-gray-400";
    }
  };

  return (
    <section id="resume" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Resume</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Download my full resume or explore my professional journey below.
          </p>
          <Button className="inline-flex items-center px-8 py-3 bg-primary text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-lg">
            <Download className="mr-2 h-4 w-4" />
            Download Resume PDF
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Experience Timeline */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Professional Experience</h3>
            <div className="space-y-8">
              {experiences.map((experience, index) => (
                <div key={experience.id} className="relative pl-8 border-l-2 border-blue-200">
                  <div className={`absolute -left-2 top-0 w-4 h-4 rounded-full ${getExperienceDotColor(experience.type)}`}></div>
                  <div className={`p-4 rounded-lg ${getExperienceColor(experience.type)}`}>
                    <div className={`text-sm font-semibold ${getExperienceTextColor(experience.type)}`}>
                      {experience.period}
                    </div>
                    <h4 className="text-lg font-bold text-slate-900">{experience.title}</h4>
                    <div className="text-slate-600">{experience.company}</div>
                    <p className="text-slate-700 mt-2">{experience.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills & Education */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Core Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-700">{skill.name}</span>
                      <span className="text-sm text-slate-500">{skill.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${getSkillColor(skill.category)}`}
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Education & Certifications</h3>
              <div className="space-y-4">
                {education.map((edu) => (
                  <div key={edu.id} className="p-4 bg-slate-50 rounded-lg">
                    <h4 className="font-bold text-slate-900">{edu.degree}</h4>
                    <div className="text-slate-600">{edu.institution}</div>
                    <div className="text-sm text-slate-500">{edu.period}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
