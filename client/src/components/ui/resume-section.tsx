import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Experience, Education, Skill } from "@/lib/types";

export default function ResumeSection() {
  const experiences: Experience[] = [
    {
      id: "1",
      title: "UI/UX Designer",
      company: "Microsoft NERD (Senior Capstone)",
      period: "September 2024 - May 2025",
      description: "Co-managed project to design and prototype a consent framework for health data that empowers marginalized communities, integrating user feedback into iterative design cycles.",
      type: "design",
    },
    {
      id: "2", 
      title: "Operations Intern",
      company: "Accelerate Wind",
      period: "September 2024 - December 2024",
      description: "Conducted research and crafted grant proposals to secure funding for innovative wind-solar turbine system, promoting the company at startup competitions.",
      type: "engineering",
    },
    {
      id: "3",
      title: "Software Engineering Intern",
      company: "Optum",
      period: "June 2024 - August 2024",
      description: "Designed and implemented CI/CD data pipeline with Apache Kafka, GitHub Actions, AWS S3, and Java, achieving $0.5M profit boost through optimization.",
      type: "engineering",
    },
    {
      id: "4",
      title: "Mechanical Design Engineer", 
      company: "NASA Nationwide Eclipse Ballooning Project",
      period: "December 2023 - May 2024",
      description: "Designed and manufactured robust enclosures for high-altitude balloon missions, leveraging structural mechanics for extreme conditions.",
      type: "engineering",
    },
    {
      id: "5",
      title: "Cockpit Engineer",
      company: "Olin Electric Motorsports (Formula SAE)",
      period: "December 2023 - October 2024", 
      description: "Led design and development of durable dashboard system with integrated LCD, E-Stop, and electrical modules for ergonomic optimization.",
      type: "engineering",
    },
    {
      id: "6",
      title: "Systems Lead Engineer",
      company: "Public Interest Technology & Boston Food Forest Coalition",
      period: "September 2023 - May 2024",
      description: "Designed solar-powered drip irrigation system, developing customizable model using algorithms for crops, elevation, rainfall, and energy levels.",
      type: "engineering",
    },
    {
      id: "7",
      title: "Data Science Intern",
      company: "Optum",
      period: "June 2023 - August 2023",
      description: "Built Snowflake Database that improved patient query speed by 100x and reduced costs by 79%, leveraging SQL, Python, and Azure Data Factory.",
      type: "engineering",
    },
    {
      id: "8",
      title: "Product Design Intern",
      company: "Optum", 
      period: "June 2022 - August 2022",
      description: "Developed Go-To-Market strategies and Marketectures to unify product ecosystems, led product research and competitor analysis.",
      type: "transition",
    },
    {
      id: "9",
      title: "IT Help Desk Technician",
      company: "Olin IT Department",
      period: "September 2021 - May 2025",
      description: "Expert in Dell laptop assembly, Windows management, dual-booting, imaging, and diagnosing various OS issues. Assist up to 10 clients per shift.",
      type: "engineering",
    },
  ];

  const education: Education[] = [
    {
      id: "1",
      degree: "Bachelor's of Science in Mechanical Engineering",
      institution: "Olin College of Engineering",
      period: "Expected May 2025 | GPA: 3.83/4.0",
    },
  ];

  const skills: Skill[] = [
    { name: "SolidWorks & Onshape", percentage: 95, category: "engineering" },
    { name: "Python & MATLAB", percentage: 90, category: "engineering" },
    { name: "UI/UX Design (Figma)", percentage: 85, category: "design" },
    { name: "SQL & Database Design", percentage: 88, category: "engineering" },
    { name: "3D Printing & Fabrication", percentage: 92, category: "engineering" },
    { name: "Adobe Creative Suite", percentage: 80, category: "design" },
    { name: "Arduino & Control Systems", percentage: 85, category: "engineering" },
    { name: "Data Analysis & Visualization", percentage: 87, category: "engineering" },
    { name: "Java & JavaScript", percentage: 85, category: "engineering" },
    { name: "AWS & Cloud Computing", percentage: 82, category: "engineering" },
    { name: "User Research", percentage: 88, category: "design" },
    { name: "Prototyping & Wireframing", percentage: 90, category: "design" },
    { name: "Machine Learning", percentage: 80, category: "engineering" },
    { name: "Git & Version Control", percentage: 90, category: "engineering" },
    { name: "CAD & Technical Drawing", percentage: 93, category: "engineering" },
    { name: "Data Pipelines & ETL", percentage: 85, category: "engineering" },
    { name: "Product Strategy", percentage: 78, category: "design" },
    { name: "Design Systems", percentage: 82, category: "design" },
    { name: "Statistical Analysis", percentage: 85, category: "engineering" },
    { name: "Project Management", percentage: 88, category: "design" },
  ];

  const getExperienceColor = (type: Experience["type"]) => {
    switch (type) {
      case "design":
        return "bg-blue-50 border-primary";
      case "transition":
        return "bg-orange-50 border-accent";
      case "engineering":
        return "bg-orange-50 border-accent";
      default:
        return "bg-orange-50 border-accent";
    }
  };

  const getExperienceDotColor = (type: Experience["type"]) => {
    switch (type) {
      case "design":
        return "bg-primary";
      case "transition":
        return "bg-accent";
      case "engineering":
        return "bg-accent";
      default:
        return "bg-accent";
    }
  };

  const getExperienceTextColor = (type: Experience["type"]) => {
    switch (type) {
      case "design":
        return "text-primary";
      case "transition":
        return "text-accent";
      case "engineering":
        return "text-accent";
      default:
        return "text-accent";
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
    <section id="resume" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Resume</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
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
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Professional Experience</h3>
            <div className="space-y-8">
              {experiences.map((experience, index) => (
                <div key={experience.id} className="relative pl-8 border-l-2 border-blue-200 dark:border-blue-800">
                  <div className={`absolute -left-2 top-0 w-4 h-4 rounded-full ${getExperienceDotColor(experience.type)}`}></div>
                  <div className={`p-4 rounded-lg ${getExperienceColor(experience.type)} dark:bg-slate-800 dark:border-slate-700`}>
                    <div className={`text-sm font-semibold ${getExperienceTextColor(experience.type)}`}>
                      {experience.period}
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">{experience.title}</h4>
                    <div className="text-slate-600 dark:text-slate-300">{experience.company}</div>
                    <p className="text-slate-700 dark:text-slate-300 mt-2">{experience.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills & Education */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Core Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className={`group p-4 rounded-xl border transition-all duration-300 hover:shadow-lg ${
                    skill.category === 'design' 
                      ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 hover:border-primary/50' 
                      : 'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800 hover:border-accent/50'
                  }`}>
                    <span className="text-slate-900 dark:text-white font-semibold">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Education & Certifications</h3>
              <div className="space-y-4">
                {education.map((edu) => (
                  <div key={edu.id} className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-bold text-slate-900 dark:text-white">{edu.degree}</h4>
                    <div className="text-slate-600 dark:text-slate-300">{edu.institution}</div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">{edu.period}</div>
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
