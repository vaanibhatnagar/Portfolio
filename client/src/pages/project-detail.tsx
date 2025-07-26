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
    title: "Health Data Consent Framework",
    subtitle: "Empowering marginalized communities with transparent health data control",
    category: "ux",
    duration: "8 months",
    team: "Microsoft NERD team, healthcare experts, community advocates",
    role: "UI/UX Designer & Co-Manager",
    overview: "Co-managed comprehensive project to design and prototype a consent framework for health data that empowers marginalized communities, ensuring transparent and equitable access to healthcare technology.",
    problem: "Marginalized communities often lack agency in how their health data is collected and used, leading to distrust in healthcare systems and reduced participation in beneficial health programs.",
    solution: "Designed an intuitive consent framework that provides clear information about data usage, granular control over permissions, and community-centered design principles that respect cultural values and privacy concerns.",
    process: [
      "Conducted community outreach and interviews with 25+ participants from marginalized communities",
      "Collaborated with healthcare privacy experts and legal advisors",
      "Developed user personas based on community-specific needs and concerns",
      "Created wireframes and prototypes emphasizing accessibility and cultural sensitivity",
      "Integrated user feedback through multiple iterative design cycles",
      "Conducted usability testing with community members",
      "Refined design based on feedback and accessibility requirements"
    ],
    results: [
      "95% user comprehension rate for consent processes in community testing",
      "85% increase in willingness to participate in health programs",
      "Framework adopted as model for ethical health data collection",
      "Received recognition from Microsoft for community impact",
      "Design principles integrated into broader healthcare privacy initiatives"
    ],
    images: [
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
      "https://images.unsplash.com/photo-1582719471348-981934b4d342?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
      "https://images.unsplash.com/photo-1504813184591-01572f98c85f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800"
    ],
    technologies: ["Figma", "Adobe XD", "User Research", "Accessibility Testing", "Community Design"],
    link: "#"
  },
  "2": {
    id: "2",
    title: "Brailldle - Accessible Wordle",
    subtitle: "MakeMIT 2024 Hackathon Winner - Gaming accessibility for visually impaired users",
    category: "ux",
    duration: "24 hours",
    team: "4-person interdisciplinary hackathon team",
    role: "UI/UX Designer & Developer",
    overview: "Winner of MakeMIT 2024 hackathon for creating an accessible version of Wordle specifically designed for visually impaired users, using Braille patterns and audio feedback.",
    problem: "Popular word games like Wordle are not accessible to visually impaired users, excluding them from participating in viral gaming trends and social interactions around these games.",
    solution: "Developed Brailldle, a fully accessible word game using Braille input patterns, tactile feedback, and comprehensive audio guidance that maintains the fun and social aspects of the original game.",
    process: [
      "Researched accessibility standards and interviewed visually impaired users",
      "Designed Braille-based input system for letter guessing",
      "Implemented audio feedback for all game interactions",
      "Created tactile feedback patterns for different game states",
      "Developed screen reader compatible interface",
      "Tested with visually impaired community members",
      "Refined based on accessibility feedback during hackathon"
    ],
    results: [
      "Won MakeMIT 2024 hackathon competition",
      "100% accessibility compliance with WCAG 2.1 AA standards",
      "Positive feedback from visually impaired beta testers",
      "Featured in MIT accessibility research showcase",
      "Open-sourced for broader community adoption"
    ],
    images: [
      "https://images.unsplash.com/photo-1493217465235-252dd9c0d632?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
      "https://images.unsplash.com/photo-1581093458791-9d42e97dafbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Web Audio API", "ARIA", "Braille Patterns"],
    link: "#"
  },
  "3": {
    id: "3",
    title: "CI/CD Data Pipeline - Optum",
    subtitle: "Automated data processing pipeline achieving $0.5M profit boost",
    category: "engineering",
    duration: "3 months",
    team: "Software engineering team, DevOps specialists, data scientists",
    role: "Software Engineering Intern",
    overview: "Designed and implemented a comprehensive CI/CD data pipeline using Apache Kafka, GitHub Actions, AWS S3, and Java, resulting in significant cost optimization and process automation.",
    problem: "Manual data processing workflows were causing delays, errors, and high operational costs. The existing system required manual intervention for data validation and processing, leading to bottlenecks.",
    solution: "Built an automated CI/CD pipeline that streamlines data ingestion, processing, and validation with real-time monitoring and error handling, achieving substantial cost savings and efficiency gains.",
    process: [
      "Analyzed existing data workflows and identified automation opportunities",
      "Designed pipeline architecture using Apache Kafka for real-time data streaming",
      "Implemented GitHub Actions for continuous integration and deployment",
      "Integrated AWS S3 for scalable data storage and retrieval",
      "Developed Java applications for data processing and validation",
      "Created monitoring and alerting systems for pipeline health",
      "Conducted testing and optimization for performance improvements"
    ],
    results: [
      "$0.5M profit boost through operational cost reduction",
      "90% reduction in manual data processing time",
      "99.9% pipeline uptime achieved",
      "Real-time data processing capability implemented",
      "Zero-downtime deployments established"
    ],
    images: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800"
    ],
    technologies: ["Apache Kafka", "GitHub Actions", "AWS S3", "Java", "Docker", "Jenkins"],
    link: "#"
  },
  "4": {
    id: "4",
    title: "Mehndi Bot - Robotic Henna Artist",
    subtitle: "Innovative robotic system for precise henna application",
    category: "engineering",
    duration: "6 months",
    team: "Mechanical engineers, software developers, cultural consultants",
    role: "Lead Design Engineer",
    overview: "Designed and built a robotic henna application system featuring an XY gantry mechanism for accurate pattern application, integrating mechanical, software, and electrical components for cultural art automation.",
    problem: "Traditional henna application requires skilled artists and is time-intensive. There was no automated system that could replicate the intricate patterns and cultural significance while maintaining precision and artistic quality.",
    solution: "Developed a precision XY gantry robot with custom end-effector for henna application, computer vision for hand tracking, and software interface allowing users to select traditional and custom patterns.",
    process: [
      "Researched traditional henna art techniques and cultural significance",
      "Designed XY gantry system with precision stepper motors for accurate positioning",
      "Developed custom end-effector for consistent henna paste application",
      "Integrated computer vision system for hand detection and positioning",
      "Created software interface with pattern library and customization options",
      "Conducted extensive testing with various henna consistencies and patterns",
      "Collaborated with henna artists for cultural authenticity and quality validation"
    ],
    results: [
      "±0.5mm positioning accuracy achieved for intricate pattern details",
      "Successfully replicated 15+ traditional henna patterns",
      "90% user satisfaction rating for pattern quality and experience",
      "Reduced application time by 60% compared to manual application",
      "Featured in college engineering showcase and cultural events"
    ],
    images: [
      "https://images.unsplash.com/photo-1565493287740-9e8cfb77ebe1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800"
    ],
    technologies: ["SolidWorks", "3D Printing", "Arduino", "Python", "OpenCV", "Stepper Motors"],
    link: "#"
  },
  "5": {
    id: "5",
    title: "NASA High Altitude Balloon Mission",
    subtitle: "Robust enclosure design for extreme atmospheric conditions",
    category: "engineering",
    duration: "5 months",
    team: "NASA engineers, atmospheric scientists, electronics specialists",
    role: "Mechanical Design Engineer",
    overview: "Designed and manufactured robust enclosures for NASA's Nationwide Eclipse Ballooning Project, ensuring payload protection at 70,000+ feet altitudes with extreme temperature and wind conditions.",
    problem: "High-altitude balloon missions face extreme environmental conditions including temperatures below -60°F, winds exceeding 120 mph, and rapid pressure changes, requiring specialized enclosure design for sensitive scientific equipment.",
    solution: "Developed lightweight yet durable enclosure system using advanced materials and thermal management, providing complete environmental protection while maintaining accessibility for equipment and data recovery.",
    process: [
      "Analyzed extreme environmental conditions at 70,000+ feet altitude",
      "Selected appropriate materials for temperature and pressure resistance",
      "Designed modular enclosure system for different payload types",
      "Implemented thermal management system for equipment protection",
      "Conducted structural analysis for wind load and pressure differential",
      "Performed ground testing simulating high-altitude conditions",
      "Collaborated with NASA team for mission-specific requirements"
    ],
    results: [
      "Successfully protected payloads during 70,000+ feet altitude missions",
      "100% mission success rate for enclosure integrity",
      "Withstood winds exceeding 120 mph without structural failure",
      "Maintained internal temperature stability within ±5°C range",
      "Contributed to successful eclipse data collection across multiple flights"
    ],
    images: [
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
      "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800"
    ],
    technologies: ["SolidWorks", "ANSYS", "Aluminum Alloys", "Thermal Analysis", "Structural Mechanics"],
    link: "#"
  },
  "6": {
    id: "6",
    title: "Solar Irrigation System",
    subtitle: "Sustainable agricultural solution for community food security",
    category: "engineering",
    duration: "8 months",
    team: "Public Interest Technology team, Boston Food Forest Coalition",
    role: "Systems Lead Engineer",
    overview: "Designed comprehensive solar-powered drip irrigation system for Boston Food Forest Coalition, developing customizable algorithms to optimize water delivery based on crops, elevation, rainfall, and energy levels.",
    problem: "Community gardens and food forests lacked reliable, sustainable irrigation systems. Manual watering was labor-intensive and inconsistent, while traditional irrigation systems were costly and energy-dependent.",
    solution: "Developed solar-powered drip irrigation system with intelligent control algorithms that automatically adjust watering schedules based on environmental conditions, crop requirements, and available solar energy.",
    process: [
      "Conducted site analysis and water requirement assessment for different crops",
      "Designed solar panel array and battery storage system for reliable power",
      "Developed fluid dynamics models for optimal water distribution",
      "Created customizable algorithms incorporating crop types, elevation, and weather data",
      "Built sensor network for soil moisture, weather, and energy monitoring",
      "Collaborated with community gardeners for user-friendly interface design",
      "Conducted extensive testing across different seasonal conditions"
    ],
    results: [
      "40% reduction in water usage compared to manual irrigation methods",
      "Increased crop yield by 25% through consistent optimal watering",
      "100% renewable energy operation with 95% system uptime",
      "Successfully irrigates 2-acre community food forest",
      "Model adopted by 3 additional community gardens in Boston area"
    ],
    images: [
      "https://images.unsplash.com/photo-1586717799252-bd134ad00e26?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
      "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800"
    ],
    technologies: ["Solar Panels", "Arduino", "Fluid Dynamics", "Python", "Sensor Networks"],
    link: "#"
  },
  "7": {
    id: "7",
    title: "Rocky Robot Control System",
    subtitle: "Advanced control system for inverted pendulum stabilization",
    category: "engineering",
    duration: "4 months",
    team: "Controls engineering team, dynamics specialists",
    role: "Control Systems Engineer",
    overview: "Designed comprehensive control system for balancing an inverted pendulum on a moving cart, achieving stable system operation through advanced control theory and detailed mathematical analysis.",
    problem: "Inverted pendulum systems are inherently unstable and require sophisticated control strategies to maintain balance while the base cart moves, presenting complex multi-variable control challenges.",
    solution: "Implemented PID and state-space control strategies with real-time feedback systems, incorporating mathematical modeling and simulation to achieve stable pendulum control under various operating conditions.",
    process: [
      "Developed mathematical model of inverted pendulum system dynamics",
      "Analyzed system stability and controllability using control theory",
      "Designed PID controller with tuning optimization",
      "Implemented state-space control for improved performance",
      "Created real-time feedback system with sensors and actuators",
      "Conducted extensive simulation and testing for validation",
      "Optimized control parameters for robust performance"
    ],
    results: [
      "Achieved ±2° stability tolerance under normal operating conditions",
      "Successfully maintained balance during cart movement up to 0.5 m/s",
      "95% success rate in recovering from disturbances up to 15°",
      "Control system response time under 100ms for stability corrections",
      "Demonstrated at engineering showcase with live demonstrations"
    ],
    images: [
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800"
    ],
    technologies: ["MATLAB", "Simulink", "Control Theory", "PID Control", "State-Space Analysis"],
    link: "#"
  },
  "8": {
    id: "8",
    title: "Orrery - Sustainable Celestial Simulator",
    subtitle: "Mechanically accurate solar system model with sustainable materials",
    category: "engineering",
    duration: "6 months",
    team: "Mechanical design team, sustainability consultants, glass artists",
    role: "Lead Mechanical Designer",
    overview: "Designed and built a mechanically accurate orrery that simulates celestial bodies with precise gear ratios, featuring hand-torched glass planets and sustainable material choices throughout construction.",
    problem: "Traditional orreries often sacrifice accuracy for simplicity and use non-sustainable materials. There was a need for an educational model that combined mechanical precision with environmental responsibility.",
    solution: "Created a gear-driven orrery with mathematically accurate planetary ratios, sustainable wood construction, and hand-crafted glass planets that demonstrate both mechanical engineering principles and artistic craftsmanship.",
    process: [
      "Calculated precise gear ratios for accurate planetary orbital periods",
      "Designed mechanical gear train system for smooth operation",
      "Selected sustainable materials including reclaimed wood and recycled metals",
      "Collaborated with glass artists for hand-torched planet creation",
      "Implemented precision machining for gear accuracy",
      "Conducted testing for smooth operation and longevity",
      "Created educational documentation for mechanical principles"
    ],
    results: [
      "Achieved 99.8% accuracy in planetary orbital period ratios",
      "100% sustainable materials used in construction",
      "Smooth operation maintained over 1000+ demonstration cycles",
      "Featured in sustainability and engineering exhibitions",
      "Educational impact: used in 5+ astronomy and engineering courses"
    ],
    images: [
      "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
      "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
      "https://images.unsplash.com/photo-1565493287740-9e8cfb77ebe1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800"
    ],
    technologies: ["SolidWorks", "Precision Machining", "Gear Design", "Sustainable Materials", "Glass Working"],
    link: "#"
  },
  "9": {
    id: "9",
    title: "Snowflake Database Optimization",
    subtitle: "100x performance improvement with 79% cost reduction",
    category: "engineering",
    duration: "3 months",
    team: "Data engineering team, database administrators, healthcare analysts",
    role: "Data Science Intern",
    overview: "Built optimized Snowflake database system that dramatically improved patient query performance while significantly reducing operational costs through advanced SQL optimization and Azure Data Factory integration.",
    problem: "Existing patient database had extremely slow query performance, taking several minutes for complex patient lookups, and high operational costs were straining the healthcare system's budget.",
    solution: "Implemented comprehensive database optimization including query restructuring, indexing strategies, data partitioning, and Azure Data Factory integration for automated data pipeline management.",
    process: [
      "Analyzed existing database structure and identified performance bottlenecks",
      "Redesigned database schema with optimized indexing and partitioning",
      "Implemented advanced SQL optimization techniques for complex queries",
      "Integrated Azure Data Factory for automated data pipeline management",
      "Created Python scripts for data validation and quality assurance",
      "Conducted performance testing and benchmarking against baseline",
      "Developed monitoring dashboard for ongoing performance tracking"
    ],
    results: [
      "100x improvement in patient query speed (minutes to seconds)",
      "79% reduction in database operational costs",
      "99.9% data accuracy maintained through validation pipelines",
      "Real-time data processing capabilities implemented",
      "Solution adopted across multiple healthcare facilities"
    ],
    images: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800"
    ],
    technologies: ["Snowflake", "SQL", "Python", "Azure Data Factory", "Database Optimization"],
    link: "#"
  },
  "10": {
    id: "10",
    title: "Formula SAE Cockpit Design",
    subtitle: "Ergonomic dashboard system for high-performance racing environment",
    category: "engineering",
    duration: "10 months",
    team: "Olin Electric Motorsports team, electrical engineers, ergonomics specialists",
    role: "Cockpit Engineer",
    overview: "Led comprehensive design and development of durable dashboard system with integrated LCD display, emergency stop functionality, and ergonomic optimization for Formula SAE racing vehicle.",
    problem: "Racing cockpits require precise integration of safety systems, real-time data display, and ergonomic design to ensure driver safety and performance under high-stress racing conditions.",
    solution: "Designed modular cockpit system featuring integrated LCD dashboard, strategically placed E-Stop system, and ergonomically optimized controls tailored to driver anthropometrics and racing requirements.",
    process: [
      "Conducted ergonomic analysis and driver anthropometric measurements",
      "Designed dashboard layout with optimal information hierarchy for racing",
      "Integrated LCD display system with real-time vehicle telemetry",
      "Implemented safety-critical E-Stop system with redundant activation",
      "Created modular electrical system for easy maintenance and updates",
      "Conducted extensive testing in racing simulation and track conditions",
      "Iteratively refined design based on driver feedback and performance data"
    ],
    results: [
      "Achieved optimal driver visibility and control accessibility",
      "100% reliability in safety system activation during testing",
      "15% improvement in driver reaction time to critical alerts",
      "Successfully competed in Formula SAE competitions",
      "Zero safety incidents related to cockpit design during racing season"
    ],
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800"
    ],
    technologies: ["SolidWorks", "Electronics Integration", "Ergonomic Design", "LCD Displays", "Safety Systems"],
    link: "#"
  },
  "11": {
    id: "11",
    title: "Product Design Strategy - Optum",
    subtitle: "Go-To-Market strategies and Marketectures for unified product ecosystems",
    category: "product",
    duration: "3 months",
    team: "Product managers, market research analysts, design strategists",
    role: "Product Design Intern",
    overview: "Developed comprehensive Go-To-Market strategies and Marketectures to unify product ecosystems, leading product research and competitor analysis to elevate customer experience and market positioning.",
    problem: "Fragmented product offerings and inconsistent market positioning were creating customer confusion and reducing competitive advantage in the healthcare technology market.",
    solution: "Created unified product strategy framework with clear go-to-market plans, competitive positioning, and customer experience improvements through comprehensive research and strategic design thinking.",
    process: [
      "Conducted extensive market research and competitive landscape analysis",
      "Analyzed customer journey and identified key pain points",
      "Developed comprehensive competitor analysis across 12 major healthcare tech companies",
      "Created product positioning frameworks and messaging strategies",
      "Designed Marketecture diagrams showing product ecosystem integration",
      "Led stakeholder workshops to align on strategic direction",
      "Developed implementation roadmap with key milestones and metrics"
    ],
    results: [
      "Unified product messaging across 8 different product lines",
      "25% improvement in customer understanding of product value proposition",
      "Strategic framework adopted for 2023-2024 product roadmap",
      "Enhanced competitive positioning in healthcare technology market",
      "Improved cross-product customer experience through unified design principles"
    ],
    images: [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800"
    ],
    technologies: ["Market Research", "Product Strategy", "Competitive Analysis", "Customer Journey Mapping", "Strategic Design"],
    link: "#"
  }
};

export default function ProjectDetail() {
  const params = useParams();
  const projectId = params.id;
  const project = projectId ? projectsData[projectId] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-white dark:bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Project Not Found</h1>
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
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Header */}
      <header className="bg-slate-50 dark:bg-slate-800 border-b dark:border-slate-700">
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
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h1>
          <p className="text-xl text-slate-600 dark:text-slate-300">{project.subtitle}</p>
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
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Project Overview</h2>
            <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed">{project.overview}</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl">
            <h3 className="font-bold text-slate-900 dark:text-white mb-4">Project Details</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-slate-500 dark:text-slate-400 mr-3" />
                <div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">Duration</div>
                  <div className="font-medium text-slate-900 dark:text-white">{project.duration}</div>
                </div>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 text-slate-500 dark:text-slate-400 mr-3" />
                <div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">Team</div>
                  <div className="font-medium text-slate-900 dark:text-white">{project.team}</div>
                </div>
              </div>
              <div className="flex items-center">
                <Target className="h-5 w-5 text-slate-500 dark:text-slate-400 mr-3" />
                <div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">Role</div>
                  <div className="font-medium text-slate-900 dark:text-white">{project.role}</div>
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
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
              <Target className="mr-3 h-6 w-6 text-red-500" />
              The Problem
            </h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{project.problem}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
              <Lightbulb className="mr-3 h-6 w-6 text-yellow-500" />
              The Solution
            </h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{project.solution}</p>
          </div>
        </div>

        {/* Process */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Design & Development Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.process.map((step, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                <p className="text-slate-700 dark:text-slate-300">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Images */}
        {project.images.length > 1 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Project Gallery</h2>
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
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center">
            <CheckCircle className="mr-3 h-6 w-6 text-green-500" />
            Results & Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.results.map((result, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                <CheckCircle className="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5" />
                <p className="text-slate-700 dark:text-slate-300">{result}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Technologies & Tools</h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="border-t border-slate-200 dark:border-slate-700 pt-8">
          <div className="flex justify-between items-center">
            <Link href="/">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Portfolio
              </Button>
            </Link>
            <div className="text-center">
              <p className="text-slate-500 dark:text-slate-400 mb-2">Interested in working together?</p>
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