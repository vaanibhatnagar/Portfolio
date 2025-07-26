import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "./button";
import { Link } from "wouter";
import type { Project } from "../../lib/types";

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects: Project[] = [
    {
      id: "1",
      title: "E-commerce App Redesign",
      description: "Complete UX overhaul of a mobile shopping app, improving conversion rates by 40% through user-centered design.",
      category: "ux",
      imageUrl: "https://images.unsplash.com/photo-1559028006-448665bd7c7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["UX Design"],
    },
    {
      id: "2",
      title: "Healthcare Dashboard",
      description: "Research-driven design of a patient monitoring dashboard for healthcare professionals.",
      category: "ux",
      imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["UX Research"],
    },
    {
      id: "3",
      title: "Smart Home IoT Interface",
      description: "End-to-end product design for IoT home automation system with intuitive mobile interface.",
      category: "product",
      imageUrl: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Product Design"],
    },
    {
      id: "4",
      title: "Automated Manufacturing System",
      description: "Design and implementation of robotic assembly line that increased production efficiency by 35%.",
      category: "engineering",
      imageUrl: "https://images.unsplash.com/photo-1565493287740-9e8cfb77ebe1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Mechanical Engineering"],
    },
    {
      id: "5",
      title: "Medical Device Prototype",
      description: "Prototype development of a minimally invasive surgical device from concept to clinical testing.",
      category: "engineering",
      imageUrl: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Product Development"],
    },
    {
      id: "6",
      title: "Sustainability Tracking App",
      description: "Mobile app design helping users track and reduce their environmental impact through gamified experiences.",
      category: "product",
      imageUrl: "https://images.unsplash.com/photo-1586717799252-bd134ad00e26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Sustainability"],
    },
  ];

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "design", label: "Design" },
    { id: "engineering", label: "Engineering" },
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : activeFilter === "design"
    ? projects.filter(project => project.category === "ux" || project.category === "product")
    : projects.filter(project => project.category === activeFilter);

  const getTagColor = (tag: string) => {
    switch (tag) {
      case "UX Design":
      case "UX Research":
        return "bg-blue-100 text-primary";
      case "Product Design":
        return "bg-orange-100 text-accent";
      case "Mechanical Engineering":
      case "Product Development":
        return "bg-gray-100 text-slate-700";
      case "Sustainability":
        return "bg-green-100 text-green-700";
      default:
        return "bg-gray-100 text-slate-700";
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Portfolio</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
            A collection of projects spanning both my engineering and design expertise.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => {
              const projectCount = filter.id === "all" 
                ? projects.length 
                : filter.id === "design"
                ? projects.filter(p => p.category === "ux" || p.category === "product").length
                : projects.filter(p => p.category === filter.id).length;
              
              return (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-6 py-3 font-medium rounded-lg transition-all duration-200 ${
                    activeFilter === filter.id
                      ? "bg-primary text-white shadow-lg transform scale-105"
                      : "bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-primary hover:text-white hover:shadow-md border border-slate-200 dark:border-slate-600"
                  }`}
                >
                  <span>{filter.label}</span>
                  <span className={`ml-2 text-xs px-2 py-1 rounded-full ${
                    activeFilter === filter.id 
                      ? "bg-white/20" 
                      : "bg-slate-100 dark:bg-slate-600 text-slate-500 dark:text-slate-400"
                  }`}>
                    {projectCount}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white dark:bg-slate-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 text-sm font-medium rounded-full ${getTagColor(tag)}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">{project.description}</p>
                <Link href={`/project/${project.id}`}>
                  <button className="inline-flex items-center text-primary font-medium hover:text-blue-700 transition-colors">
                    View Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
