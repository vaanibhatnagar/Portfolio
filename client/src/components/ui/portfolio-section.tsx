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
      title: "Health Data Consent Framework",
      description: "Co-managed UI/UX design project creating a consent framework for health data that empowers marginalized communities at Microsoft NERD.",
      category: "ux",
      imageUrl: "https://images.unsplash.com/photo-1559028006-448665bd7c7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["UI/UX Design", "User Research"],
    },
    {
      id: "2",
      title: "Brailldle - MakeMIT Winner",
      description: "First place winner at MakeMIT - A refreshable Braille display using camera input to convert text to Braille. Designed and tested in 24 hours.",
      category: "engineering",
      imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["3D Design", "Arduino", "Python"],
    },
    {
      id: "3",
      title: "CI/CD Data Pipeline - Optum",
      description: "Designed and implemented a CI/CD data pipeline with Apache Kafka, GitHub Actions, AWS S3, achieving $0.5M profit boost through optimization.",
      category: "engineering",
      imageUrl: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Data Pipeline", "AWS", "Java"],
    },
    {
      id: "4",
      title: "Mehndi Bot",
      description: "A henna application robot with XY gantry system for accurate application. Integrated mechanical, software, and electrical components.",
      category: "product",
      imageUrl: "https://images.unsplash.com/photo-1565493287740-9e8cfb77ebe1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["SolidWorks", "3D Printing", "Robotics"],
    },
    {
      id: "5",
      title: "NASA High Altitude Balloon",
      description: "Designed robust enclosures for high-altitude balloon missions, withstanding 70,000+ ft altitudes and 120+ mph winds.",
      category: "engineering",
      imageUrl: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Mechanical Design", "NASA"],
    },
    {
      id: "6",
      title: "Solar Irrigation System",
      description: "Designed solar-powered drip irrigation system for Boston Food Forest Coalition using fluid dynamics and customizable algorithms.",
      category: "engineering",
      imageUrl: "https://images.unsplash.com/photo-1586717799252-bd134ad00e26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Systems Design", "Sustainability"],
    },
    {
      id: "7",
      title: "Rocky Robot Control System",
      description: "Designed control system for balancing an inverted pendulum on a moving cart, achieving system stabilization with detailed analysis.",
      category: "engineering",
      imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["Control Systems", "Dynamics"],
    },
    {
      id: "8",
      title: "Orrery - Sustainable Design",
      description: "Simulates celestial bodies with accurate gear ratios, featuring hand-torched glass planets using sustainable materials.",
      category: "product",
      imageUrl: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["Mechanical Design", "Sustainability"],
    },
    {
      id: "9",
      title: "Snowflake Database Optimization",
      description: "Built database that improved patient query speed by 100x and reduced costs by 79% using SQL, Python, and Azure Data Factory.",
      category: "engineering",
      imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["SQL", "Python", "Azure"],
    },
    {
      id: "10",
      title: "Formula SAE Cockpit Design",
      description: "Led design of durable dashboard system with integrated LCD, E-Stop, and ergonomic optimization for racing environment.",
      category: "product",
      imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["Mechanical Design", "Ergonomics"],
    },
    {
      id: "11",
      title: "Product Design Strategy - Optum",
      description: "Developed Go-To-Market strategies and Marketectures to unify product ecosystems and elevate customer experience.",
      category: "product",
      imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["Product Strategy", "Market Research"],
    },
    {
      id: "12",
      title: "Mao Run",
      description: "A 2D platformer game with custom physics engine and level design, featuring dynamic obstacles and engaging gameplay mechanics.",
      category: "ux",
      imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["Game Development", "Python", "Physics Engine"],
    },
    {
      id: "13",
      title: "ACO Image Segmentation",
      description: "Implementation of Ant Colony Optimization algorithm for image segmentation, demonstrating bio-inspired computational techniques.",
      category: "engineering",
      imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["Machine Learning", "Computer Vision", "Algorithms"],
    },
    {
      id: "14",
      title: "Dancing Stickfigures",
      description: "Interactive animation system creating dynamic stickfigure movements with procedural generation and user input controls.",
      category: "engineering",
      imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["Animation", "Procedural Generation", "Interactive Design"],
    },
    {
      id: "15",
      title: "Dancing Links Visualizer and Sudoku Solver",
      description: "Visual implementation of Knuth's Dancing Links algorithm for solving Sudoku puzzles with step-by-step algorithm visualization.",
      category: "ux",
      imageUrl: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["Algorithms", "Data Structures", "Visualization"],
    },
  ];

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "ux", label: "UX Design" },
    { id: "engineering", label: "Engineering" },
    { id: "product", label: "Product Design" },
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getTagColor = (tag: string) => {
    switch (tag) {
      case "UI/UX Design":
      case "User Research":
        return "bg-blue-100 dark:bg-blue-900 text-primary dark:text-blue-300";
      case "Product Design":
        return "bg-orange-100 dark:bg-orange-900 text-accent dark:text-orange-300";
      case "SolidWorks":
      case "3D Printing":
      case "Robotics":
      case "Mechanical Design":
        return "bg-gray-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300";
      case "Data Pipeline":
      case "AWS":
      case "Java":
      case "Python":
      case "Arduino":
        return "bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300";
      case "NASA":
        return "bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300";
      case "Sustainability":
      case "Systems Design":
        return "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300";
      case "3D Design":
        return "bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300";
      case "Control Systems":
      case "Dynamics":
        return "bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300";
      case "SQL":
      case "Azure":
        return "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300";
      case "Ergonomics":
        return "bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300";
      case "Product Strategy":
      case "Market Research":
        return "bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300";
      case "Machine Learning":
      case "Computer Vision":
      case "Algorithms":
      case "Bio-inspired Algorithms":
        return "bg-pink-100 dark:bg-pink-900 text-pink-700 dark:text-pink-300";
      case "Game Development":
      case "Physics Engine":
      case "Interactive Design":
      case "Animation":
      case "Procedural Generation":
        return "bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300";
      case "Data Structures":
      case "Visualization":
      case "OpenCV":
      case "NumPy":
        return "bg-violet-100 dark:bg-violet-900 text-violet-700 dark:text-violet-300";
      case "Game Design":
      case "Sprite Design":
      case "User Experience":
        return "bg-blue-100 dark:bg-blue-900 text-primary dark:text-blue-300";
      case "Evolutionary Algorithms":
      case "Genetic Programming":
      case "Audio Processing":
      case "Animation Systems":
        return "bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300";
      default:
        return "bg-gray-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300";
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
          <div className="flex flex-wrap justify-center gap-4" role="tablist" aria-label="Filter portfolio projects">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-slate-50 dark:focus:ring-offset-slate-800 ${
                  activeFilter === filter.id
                    ? "bg-primary text-white"
                    : "text-slate-600 dark:text-slate-400 hover:text-primary"
                }`}
                role="tab"
                aria-selected={activeFilter === filter.id}
                aria-controls="portfolio-grid"
                aria-label={`Filter by ${filter.label}`}
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>

        <div 
          id="portfolio-grid" 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          role="tabpanel"
          aria-label={`${filteredProjects.length} ${activeFilter === 'all' ? 'projects' : filters.find(f => f.id === activeFilter)?.label + ' projects'}`}
        >
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="bg-white dark:bg-slate-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 focus-within:shadow-xl focus-within:-translate-y-2"
            >
              <img
                src={project.imageUrl}
                alt={`Project image for ${project.title}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3" role="list" aria-label="Project tags">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 text-sm font-medium rounded-full ${getTagColor(tag)}`}
                      role="listitem"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">{project.description}</p>
                <Link href={`/project/${project.id}`}>
                  <button 
                    className="inline-flex items-center text-primary font-medium hover:text-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-900 rounded-md p-1"
                    aria-label={`View case study for ${project.title}`}
                  >
                    View Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
