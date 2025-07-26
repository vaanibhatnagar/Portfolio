import { useParams } from "wouter";
import { ArrowLeft, ExternalLink, Calendar, Users, Target, Lightbulb, CheckCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "wouter";

interface ProjectDetails {
  id: string;
  title: string;
  subtitle: string;
  category: 'ux' | 'engineering' | 'product';
  duration: string;
  team: string;
  role: string;
  overview: string;
  problem: string;
  solution: string;
  process: string[];
  results: string[];
  images: string[];
  technologies: string[];
  link?: string;
}

const projectsData: Record<string, ProjectDetails> = {
  "1": {
    id: "1",
    title: "E-commerce App Redesign",
    subtitle: "Transforming mobile shopping experiences through user-centered design",
    category: "ux",
    duration: "4 months",
    team: "Cross-functional team of 6",
    role: "Lead UX Designer & Researcher",
    overview: "Complete UX overhaul of a mobile shopping app serving 500K+ users, focusing on improving conversion rates and user satisfaction through comprehensive research and iterative design.",
    problem: "The existing mobile app had a 23% cart abandonment rate and users frequently complained about difficulty finding products, confusing checkout flow, and poor search functionality. Customer support tickets related to app navigation increased 40% year-over-year.",
    solution: "Redesigned the entire user experience with a focus on simplified navigation, intelligent search with filters, streamlined checkout process, and personalized product recommendations based on user behavior and preferences.",
    process: [
      "Conducted user interviews with 24 existing customers to understand pain points",
      "Performed competitive analysis of 8 leading e-commerce platforms",
      "Created user personas and journey maps based on research findings",
      "Developed wireframes and interactive prototypes for key user flows",
      "Conducted usability testing sessions with 15 participants",
      "Iterated on designs based on feedback and A/B tested key components",
      "Collaborated with engineering team for implementation and QA testing"
    ],
    results: [
      "40% improvement in conversion rates within 3 months of launch",
      "65% reduction in cart abandonment rate",
      "92% positive user feedback on new search and filter functionality",
      "35% increase in average session duration",
      "50% reduction in customer support tickets related to navigation"
    ],
    images: [
      "https://images.unsplash.com/photo-1559028006-448665bd7c7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800"
    ],
    technologies: ["Figma", "Principle", "Hotjar", "Google Analytics", "Maze"],
    link: "#"
  },
  "2": {
    id: "2",
    title: "Healthcare Dashboard",
    subtitle: "Empowering healthcare professionals with intuitive patient monitoring",
    category: "ux",
    duration: "6 months",
    team: "Healthcare specialists, developers, designers",
    role: "UX Researcher & Information Architect",
    overview: "Research-driven design of a comprehensive patient monitoring dashboard for healthcare professionals, focusing on critical information hierarchy and workflow optimization in high-stress environments.",
    problem: "Healthcare professionals were spending 40% of their time navigating between multiple systems to access patient information. Critical alerts were often missed due to poor information hierarchy, and the learning curve for new staff was steep.",
    solution: "Designed a unified dashboard that consolidates patient data from multiple sources with intelligent alert prioritization, customizable layouts for different roles, and intuitive navigation patterns that reduce cognitive load.",
    process: [
      "Conducted contextual inquiries in 3 hospital units over 2 months",
      "Interviewed 18 healthcare professionals across different roles",
      "Analyzed existing workflow patterns and pain points",
      "Created detailed information architecture and user flow diagrams",
      "Developed low-fidelity prototypes for rapid iteration",
      "Conducted usability testing in simulated clinical environments",
      "Refined designs based on feedback from medical professionals"
    ],
    results: [
      "60% reduction in time spent accessing patient information",
      "85% improvement in critical alert response time",
      "95% user satisfaction rating from healthcare professionals",
      "50% faster onboarding time for new staff",
      "Zero missed critical alerts during 3-month pilot program"
    ],
    images: [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
      "https://images.unsplash.com/photo-1504813184591-01572f98c85f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800"
    ],
    technologies: ["Sketch", "InVision", "UserTesting", "Optimal Workshop", "Miro"],
    link: "#"
  },
  "3": {
    id: "3",
    title: "Smart Home IoT Interface",
    subtitle: "Bridging physical and digital experiences in connected homes",
    category: "product",
    duration: "8 months",
    team: "Product managers, engineers, industrial designers",
    role: "Product Designer & UX Lead",
    overview: "End-to-end product design for an IoT home automation system, creating seamless integration between hardware devices and mobile interface while considering both user experience and technical constraints.",
    problem: "Existing smart home solutions required multiple apps for different devices, creating a fragmented user experience. Users struggled with setup complexity and lacked intuitive controls for managing multiple connected devices.",
    solution: "Developed a unified mobile interface that automatically discovers and connects IoT devices, provides intelligent automation suggestions based on user patterns, and offers both simple and advanced control modes.",
    process: [
      "Conducted market research on existing smart home ecosystems",
      "Performed user research with 30 smart home enthusiasts and beginners",
      "Collaborated with hardware engineers on device discovery protocols",
      "Created comprehensive design system for consistent experience",
      "Designed onboarding flow optimized for non-technical users",
      "Developed prototype integrating with actual IoT hardware",
      "Conducted extensive user testing in real home environments"
    ],
    results: [
      "90% successful device setup rate on first attempt",
      "75% reduction in customer support tickets for setup issues",
      "4.8/5 app store rating with 10K+ downloads in first month",
      "65% of users enable automated routines within first week",
      "Successfully integrated with 15+ major IoT device manufacturers"
    ],
    images: [
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
      "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800"
    ],
    technologies: ["React Native", "Figma", "Principle", "Node.js", "MQTT"],
    link: "#"
  },
  "4": {
    id: "4",
    title: "Automated Manufacturing System",
    subtitle: "Precision engineering meets efficiency optimization",
    category: "engineering",
    duration: "12 months",
    team: "Mechanical engineers, automation specialists, operators",
    role: "Lead Mechanical Engineer",
    overview: "Design and implementation of a robotic assembly line for precision manufacturing, focusing on increasing production efficiency while maintaining quality standards and reducing human error.",
    problem: "The existing manual assembly process had inconsistent quality output, high labor costs, and production bottlenecks. Quality defect rates averaged 8% and production capacity was limited to 150 units per day.",
    solution: "Designed and implemented a fully automated robotic assembly system with integrated quality control, real-time monitoring, and predictive maintenance capabilities to ensure consistent high-quality output.",
    process: [
      "Analyzed existing manufacturing processes and identified bottlenecks",
      "Designed mechanical systems for automated part handling and assembly",
      "Selected and integrated robotic arms with custom end-effectors",
      "Implemented computer vision system for quality inspection",
      "Developed PLC programming for process control and monitoring",
      "Conducted extensive testing and validation phases",
      "Trained operators on new system maintenance and monitoring"
    ],
    results: [
      "35% increase in production efficiency (150 to 200+ units/day)",
      "85% reduction in quality defect rates (8% to 1.2%)",
      "60% reduction in labor costs for assembly operations",
      "99.2% system uptime achieved after optimization period",
      "ROI achieved within 18 months of implementation"
    ],
    images: [
      "https://images.unsplash.com/photo-1565493287740-9e8cfb77ebe1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800"
    ],
    technologies: ["SolidWorks", "ABB Robotics", "Siemens PLC", "OpenCV", "LabVIEW"],
    link: "#"
  },
  "5": {
    id: "5",
    title: "Medical Device Prototype",
    subtitle: "Innovation in minimally invasive surgical technology",
    category: "engineering",
    duration: "18 months",
    team: "Biomedical engineers, surgeons, regulatory specialists",
    role: "Senior Design Engineer",
    overview: "Prototype development of a minimally invasive surgical device from initial concept through clinical testing, balancing innovation with regulatory requirements and clinical usability.",
    problem: "Existing surgical procedures required large incisions and lengthy recovery times. Surgeons needed a precision instrument that could perform complex procedures through minimal access points while providing tactile feedback.",
    solution: "Developed a novel articulating surgical instrument with haptic feedback capabilities, allowing surgeons to perform complex procedures through 5mm incisions with improved precision and control.",
    process: [
      "Conducted extensive research on existing surgical techniques and limitations",
      "Collaborated with surgeons to understand specific procedural requirements",
      "Designed mechanical systems for multi-degree-of-freedom articulation",
      "Developed prototypes using advanced manufacturing techniques",
      "Conducted biocompatibility testing and regulatory compliance review",
      "Performed cadaveric testing with experienced surgeons",
      "Refined design based on clinical feedback and prepared for trials"
    ],
    results: [
      "Successfully completed preclinical testing with 95% efficacy rate",
      "75% reduction in procedure time compared to traditional methods",
      "90% reduction in patient recovery time",
      "Received FDA breakthrough device designation",
      "3 provisional patents filed for key innovations"
    ],
    images: [
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
      "https://images.unsplash.com/photo-1582719471348-981934b4d342?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800"
    ],
    technologies: ["SolidWorks", "ANSYS", "3D Printing", "CNC Machining", "ISO 13485"],
    link: "#"
  },
  "6": {
    id: "6",
    title: "Sustainability Tracking App",
    subtitle: "Gamifying environmental impact for positive behavior change",
    category: "product",
    duration: "5 months",
    team: "Product managers, sustainability experts, developers",
    role: "Product Designer & Behavioral Researcher",
    overview: "Mobile app design helping users track and reduce their environmental impact through gamified experiences, behavioral psychology principles, and community engagement features.",
    problem: "People want to be more environmentally conscious but lack easy ways to track their impact and see meaningful progress. Existing apps were either too complex or failed to maintain long-term user engagement.",
    solution: "Created an intuitive app that automatically tracks various sustainability metrics, uses gamification to encourage positive behaviors, and builds community through challenges and shared achievements.",
    process: [
      "Researched behavioral psychology principles for habit formation",
      "Conducted user interviews with environmentally conscious individuals",
      "Analyzed successful gamification strategies in health and fitness apps",
      "Designed onboarding flow focused on personal motivation discovery",
      "Created achievement system and social features for community building",
      "Prototyped key interactions and tested with focus groups",
      "Collaborated with sustainability experts for accurate impact calculations"
    ],
    results: [
      "78% user retention rate after 3 months (industry average: 35%)",
      "Average 23% reduction in carbon footprint among active users",
      "85% of users complete at least one sustainability challenge monthly",
      "Featured in Apple App Store's 'Apps for Earth Day' collection",
      "10K+ active users within 6 months of launch"
    ],
    images: [
      "https://images.unsplash.com/photo-1586717799252-bd134ad00e26?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
      "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800"
    ],
    technologies: ["React Native", "Figma", "Firebase", "Chart.js", "Carbon API"],
    link: "#"
  }
};

export default function ProjectDetail() {
  const params = useParams();
  const projectId = params.id;
  const project = projectId ? projectsData[projectId] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Project Not Found</h1>
          <Link href="/">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "ux":
        return "bg-blue-100 text-primary";
      case "product":
        return "bg-orange-100 text-accent";
      case "engineering":
        return "bg-gray-100 text-slate-700";
      default:
        return "bg-gray-100 text-slate-700";
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "ux":
        return "UX Design";
      case "product":
        return "Product Design";
      case "engineering":
        return "Engineering";
      default:
        return category;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-slate-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Button>
          </Link>
          <div className="flex items-center mb-4">
            <span className={`px-3 py-1 text-sm font-medium rounded-full ${getCategoryColor(project.category)} mr-4`}>
              {getCategoryLabel(project.category)}
            </span>
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-2">{project.title}</h1>
          <p className="text-xl text-slate-600">{project.subtitle}</p>
        </div>
      </header>

      {/* Hero Image */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={project.images[0]}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Project Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Project Overview</h2>
            <p className="text-slate-700 text-lg leading-relaxed">{project.overview}</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-xl">
            <h3 className="font-bold text-slate-900 mb-4">Project Details</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-slate-500 mr-3" />
                <div>
                  <div className="text-sm text-slate-500">Duration</div>
                  <div className="font-medium text-slate-900">{project.duration}</div>
                </div>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 text-slate-500 mr-3" />
                <div>
                  <div className="text-sm text-slate-500">Team</div>
                  <div className="font-medium text-slate-900">{project.team}</div>
                </div>
              </div>
              <div className="flex items-center">
                <Target className="h-5 w-5 text-slate-500 mr-3" />
                <div>
                  <div className="text-sm text-slate-500">Role</div>
                  <div className="font-medium text-slate-900">{project.role}</div>
                </div>
              </div>
            </div>
            {project.link && (
              <Button className="w-full mt-6">
                <ExternalLink className="mr-2 h-4 w-4" />
                View Live Project
              </Button>
            )}
          </div>
        </div>

        {/* Problem & Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
              <Target className="mr-3 h-6 w-6 text-red-500" />
              The Problem
            </h2>
            <p className="text-slate-700 leading-relaxed">{project.problem}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
              <Lightbulb className="mr-3 h-6 w-6 text-yellow-500" />
              The Solution
            </h2>
            <p className="text-slate-700 leading-relaxed">{project.solution}</p>
          </div>
        </div>

        {/* Process */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Design & Development Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.process.map((step, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 bg-slate-50 rounded-lg">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                <p className="text-slate-700">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Images */}
        {project.images.length > 1 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.images.slice(1).map((image, index) => (
                <div key={index} className="relative h-64 rounded-xl overflow-hidden">
                  <img
                    src={image}
                    alt={`${project.title} - Image ${index + 2}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Results */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
            <CheckCircle className="mr-3 h-6 w-6 text-green-500" />
            Results & Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.results.map((result, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg border border-green-200">
                <CheckCircle className="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5" />
                <p className="text-slate-700">{result}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Technologies & Tools</h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="border-t border-slate-200 pt-8">
          <div className="flex justify-between items-center">
            <Link href="/">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Portfolio
              </Button>
            </Link>
            <div className="text-center">
              <p className="text-slate-500 mb-2">Interested in working together?</p>
              <Link href="/#contact">
                <Button>Get In Touch</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}