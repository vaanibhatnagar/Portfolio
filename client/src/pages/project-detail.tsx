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
    title: "Brailldle - Refreshable Braille Display",
    subtitle: "Refreshable braille display for live text translation from images",
    category: "engineering",
    duration: "2 days",
    team: "4-person interdisciplinary hackathon team",
    role: "Mechanical Designer & Systems Integration",
    overview: "Developed Brailldle, a refreshable braille display that shows live braille translation of texts from images, addressing the critical accessibility barrier faced by 90% of blind children who are also illiterate.",
    problem: "Approximately 90% of children with blindness are also illiterate due to the accessibility barrier between visual text and braille. Imagine if the texts around you were in foreign languages you cannot comprehend - this is the daily reality for many Braille readers.",
    solution: "Created a refreshable braille display using mechanical components, servos, and computer vision that captures text from images and translates it letter-by-letter into tactile braille dots, refreshing every 5 seconds.",
    process: [
      "Researched traditional braille systems and designed mechanical braille cell using 5 key components",
      "Created pen push buttons as braille dots connected to servo motors via wooden rods and cams",
      "Designed acrylic cell base with holes for dots to push through when activated",
      "Integrated camera system with Pytesseract for optical character recognition",
      "Developed Arduino control system to convert text to braille and control servos",
      "Implemented 5-second refresh cycle for letter-by-letter display",
      "Created Tkinter interface for camera input and text capture functionality"
    ],
    results: [
      "Successfully created working refreshable braille display with mechanical components",
      "Achieved live text-to-braille translation from camera input using OCR",
      "Demonstrated tactile braille dots raising through acrylic surface",
      "Integrated multiple technologies: Python, Arduino, servos, and computer vision",
      "Addressed critical accessibility need for blind individuals to read visual text",
      "Created educational tool demonstrating mechanical-digital integration"
    ],
    images: [
      "https://images.unsplash.com/photo-1493217465235-252dd9c0d632?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
      "https://images.unsplash.com/photo-1581093458791-9d42e97dafbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800"
    ],
    technologies: ["Arduino", "Python", "Pytesseract", "Tkinter", "3D Printing", "Servo Motors", "OpenCV"],
    link: "https://devpost.com/software/braille-translator-gupx8a"
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
    title: "Mehndi Didi - Automated Henna Applicator",
    subtitle: "Innovative robotic system for precise henna application using XY gantry",
    category: "engineering",
    duration: "4 months",
    team: "PIE (Principles of Integrated Engineering) team members",
    role: "Lead Mechanical Designer & Systems Integration",
    overview: "Designed and built a robotic henna application system called 'Mehndi Didi' featuring an XY gantry mechanism controlled by G-code pathing to automate the demanding process of applying detailed mehndi designs.",
    problem: "Traditional mehndi application is extremely time-intensive, taking up to several hours depending on the intricacy of the chosen design. The process requires skilled artisans and lacks consistency in pattern reproduction.",
    solution: "Developed a precision XY gantry robot controlled by G-code pathing that automates henna application, enabling consistent pattern reproduction while significantly reducing application time compared to manual methods.",
    process: [
      "Designed XY gantry system with precision stepper motors for accurate 2D positioning",
      "Developed G-code pathing system for automated pattern execution",
      "Created custom henna dispensing mechanism for consistent paste application",
      "Integrated mechanical, electrical, and firmware components into unified system",
      "Programmed Arduino controller for precise motor control and timing",
      "Built user interface for pattern selection and machine operation",
      "Conducted extensive testing with various henna patterns and mechanical iterations"
    ],
    results: [
      "Successfully automated henna application process using XY gantry system",
      "Achieved precise pattern reproduction through G-code controlled movement",
      "Demonstrated working prototype with consistent henna dispensing",
      "Integrated mechanical, electrical, and software systems effectively",
      "Created reusable platform for various traditional mehndi patterns",
      "Featured in PIE course showcase demonstrating integrated engineering principles"
    ],
    images: [
      "https://images.unsplash.com/photo-1565493287740-9e8cfb77ebe1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800"
    ],
    technologies: ["SolidWorks", "3D Printing", "Arduino", "Python", "OpenCV", "Stepper Motors"],
    link: "https://olincollege.github.io/pie-2022-03/mehndi-bot/Home.html"
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
    title: "Rocky Robot - ESA Inverted Pendulum Control",
    subtitle: "Advanced control systems project for autonomous balance and stability",
    category: "engineering",
    duration: "4 months",
    team: "ESA (Engineering Systems Analysis) course team members",
    role: "Control Systems Engineer & MATLAB Developer",
    overview: "Developed sophisticated control algorithms for Rocky, an inverted pendulum robot system, implementing PID and state-space control strategies with extensive MATLAB simulation and real-world testing to achieve stable autonomous operation.",
    problem: "Inverted pendulum systems are inherently unstable and require precise, real-time control to maintain balance. The challenge involves designing controllers that can handle disturbances while maintaining system stability through mathematical modeling and implementation.",
    solution: "Implemented comprehensive control system using PID controllers and state-space methods, extensive MATLAB/Simulink modeling, motor parameter estimation, and real-time Arduino implementation for stable pendulum control.",
    process: [
      "Developed comprehensive mathematical model of inverted pendulum system dynamics using MATLAB",
      "Implemented motor parameter estimation through system identification techniques",
      "Designed and analyzed closed-loop control system with pole placement methods",
      "Created extensive Simulink models for system simulation and validation",
      "Conducted natural frequency analysis and system characterization",
      "Implemented real-time control system using Arduino and C++ programming",
      "Performed extensive data collection and analysis for system optimization and validation"
    ],
    results: [
      "Successfully implemented working inverted pendulum control system with live demonstrations",
      "Achieved stable pendulum control through comprehensive MATLAB/Simulink modeling",
      "Completed motor parameter estimation and system identification",
      "Demonstrated effective pole placement control design methodology",
      "Created comprehensive project documentation including annotated technical report",
      "Successfully integrated theoretical control systems knowledge with practical implementation"
    ],
    images: [
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800"
    ],
    technologies: ["MATLAB", "Simulink", "Control Theory", "PID Control", "State-Space Analysis"],
    link: "https://github.com/Chidunbo/ESA-RockyProject"
  },
  "8": {
    id: "8",
    title: "Orrery - Team Moon",
    subtitle: "Miniature mechanical model of the solar system with precise planetary orbits",
    category: "engineering",
    duration: "4 months",
    team: "Team Moon - Mechanical engineering students",
    role: "Design Engineer & Project Manager",
    overview: "Designed and built a working mechanical orrery featuring carefully calculated gear ratios to replicate planetary orbital relationships, handcrafted glass planets, and sustainable design principles for astronomy education.",
    problem: "Traditional astronomy education lacks tangible, interactive models that demonstrate planetary motion with accurate proportional relationships, making it difficult to visualize celestial mechanics and orbital dynamics.",
    solution: "Created a beautiful, functional orrery using precise gear ratio calculations to achieve proportional planetary orbits, sustainable materials including reclaimed wood, and hand-torched glass planets for aesthetic appeal.",
    process: [
      "Calculated gear ratios to achieve proportional planetary revolution times based on real astronomical data",
      "Designed modular wooden frame structure for easy assembly, disassembly, and maintenance",
      "Hand-torched individual glass planets to create lightweight, whimsical design elements",
      "Sourced sustainable materials including recycled components and reusable hardware",
      "Developed comprehensive assembly instructions and documentation for replication",
      "Implemented design for manufacturing principles to enable easy construction by others",
      "Tested mechanical precision and orbital accuracy through iterative prototyping"
    ],
    results: [
      "Achieved accurate gear ratios representing real planetary revolution time relationships",
      "Successfully created lightweight, aesthetically pleasing hand-torched glass planets",
      "Designed fully disassemblable system with all parts reusable or recyclable",
      "Comprehensive build documentation and instructions published for public use",
      "Demonstrated complex astronomical concepts through interactive mechanical model",
      "Featured sustainable design practices with minimal waste and maximum reusability"
    ],
    images: [
      "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
      "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
      "https://images.unsplash.com/photo-1565493287740-9e8cfb77ebe1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800"
    ],
    technologies: ["SolidWorks", "Precision Machining", "Gear Design", "Sustainable Materials", "Glass Working"],
    link: "https://vaanibhatnagar016.wixsite.com/orrery-team-moon"
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
  },
  "12": {
    id: "12",
    title: "Mao Run",
    subtitle: "2D platformer game where the rules are unknown",
    category: "engineering",
    duration: "4 months",
    team: "Lili Baker, Cherry Pham, Vaani Bhatnagar",
    role: "UI/UX Designer",
    overview: "Developed Mao Run, a 2D platformer game with only 1 rule: 'We don't talk about the rules.' Players must figure out what to do through visual cues, embodying the life lesson 'You live and you learn.'",
    problem: "Traditional games provide explicit instructions and tutorials, but real-life challenges often require learning through trial and error. There was a need for a game that teaches resilience and adaptability without explicit guidance.",
    solution: "Created a mysterious 2D platformer using Python and Pygame where players discover gameplay mechanics through experimentation, designed to be simultaneously infuriating and enjoyable while promoting perseverance.",
    process: [
      "Designed game concept inspired by the card game Mao where rules are unknown to players",
      "Implemented 2D platformer mechanics using Python and Pygame framework",
      "Created adorable sprite designs and eye-catching color scheme for visual appeal",
      "Developed intentionally mysterious gameplay with minimal visual instruction cues",
      "Implemented arrow key controls and ESC key exit functionality",
      "Conducted extensive playtesting to balance frustration with enjoyment",
      "Refined game difficulty to maintain player engagement while preserving mystery"
    ],
    results: [
      "Successfully created engaging mystery platformer that teaches through trial and error",
      "Achieved balance between challenge and playability through iterative design",
      "Implemented smooth Pygame-based movement and collision systems",
      "Created unique gaming experience that promotes resilience and adaptability",
      "Positive feedback for innovative approach to game design and learning",
      "Demonstrated effective team collaboration with clear role divisions"
    ],
    images: [
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
      "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800"
    ],
    technologies: ["Python", "Pygame", "Game Design", "Sprite Design", "User Experience"],
    link: "https://github.com/olincollege/mao-run"
  },
  "13": {
    id: "13",
    title: "ACO Image Segmentation",
    subtitle: "Bio-inspired image segmentation using Ant Colony Optimization",
    category: "engineering",
    duration: "3 months",
    team: "Computer vision researchers, algorithm specialists",
    role: "Machine Learning Developer",
    overview: "Implemented Ant Colony Optimization (ACO) algorithm for advanced image segmentation, demonstrating bio-inspired computational techniques that mimic ant colony foraging behavior to solve complex computer vision problems.",
    problem: "Traditional image segmentation algorithms often struggle with complex images containing multiple objects, noise, and varying lighting conditions. Conventional methods lack the adaptive intelligence needed for robust edge detection.",
    solution: "Developed ACO-based image segmentation system that mimics ant colony foraging behavior, using pheromone trails and collective intelligence to find optimal segmentation paths and achieve superior edge detection performance.",
    process: [
      "Researched Ant Colony Optimization principles and bio-inspired algorithms for computer vision",
      "Implemented ACO algorithm adapted for pixel-level image segmentation tasks",
      "Developed virtual pheromone trail system for optimal edge detection pathfinding",
      "Created adaptive fitness functions for evaluating segmentation quality and boundary accuracy",
      "Integrated collective intelligence mechanisms mimicking ant colony foraging behavior",
      "Implemented Python-based framework using OpenCV and NumPy for image processing",
      "Conducted testing and optimization across various image types and complexity levels"
    ],
    results: [
      "Successfully demonstrated bio-inspired approach to image segmentation challenges",
      "Achieved robust edge detection through collective intelligence optimization",
      "Created adaptive algorithm capable of handling complex image segmentation scenarios",
      "Demonstrated superior performance on images with multiple objects and varying conditions",
      "Contributed to understanding of swarm intelligence applications in computer vision",
      "Developed reusable Python framework for ACO-based image processing research"
    ],
    images: [
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
      "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800"
    ],
    technologies: ["Python", "OpenCV", "NumPy", "Machine Learning", "Computer Vision", "Bio-inspired Algorithms"],
    link: "https://github.com/vaanibhatnagar/aco-image-segmentation"
  },
  "14": {
    id: "14",
    title: "Dancing Stickfigures",
    subtitle: "Evolutionary algorithm optimizing phase values for music-synchronized stick figure animation",
    category: "engineering",
    duration: "3 months",
    team: "Vaani Bhatnagar and Cherry Pham",
    role: "Algorithm Developer & Animation Designer",
    overview: "Developed an evolutionary algorithm (GA/ES) system that optimizes phase values for dancing stick figures that synchronize movements with music beats, demonstrating bio-inspired optimization techniques.",
    problem: "Creating natural-looking animated characters that dance in sync with music requires complex phase optimization for multiple body parts. Manual animation is time-intensive and lacks the ability to adapt to different musical rhythms.",
    solution: "Implemented evolutionary algorithm using genetic optimization to automatically tune phase values for stick figure movements, enabling synchronized dancing with beat patterns while generating natural-looking motion.",
    process: [
      "Researched evolutionary algorithms (GA/ES) and their applications to animation optimization",
      "Implemented genetic algorithm for beat pattern creation and phase value optimization",
      "Developed sound generation system using metronome audio synchronized with beats",
      "Created stick figure animation system with multiple body part movement coordination",
      "Integrated evolutionary optimization with real-time animation rendering",
      "Implemented fitness functions to evaluate dance synchronization quality",
      "Refactored code into modular structure: genetic_algo.py, sound_gen.py, animation.py, dance_runner.py"
    ],
    results: [
      "Successfully implemented evolutionary algorithm optimizing stick figure dance movements",
      "Achieved synchronized animation with music beats through genetic optimization",
      "Created modular codebase demonstrating software engineering best practices",
      "Demonstrated bio-inspired computational techniques for creative applications",
      "Generated natural-looking dance movements through automated parameter tuning",
      "Integrated multiple technologies: evolutionary algorithms, audio processing, and animation"
    ],
    images: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
      "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800"
    ],
    technologies: ["Python", "Evolutionary Algorithms", "Genetic Programming", "Audio Processing", "Animation Systems"],
    link: "https://github.com/vaanibhatnagar/dancingstickfigures"
  },
  "15": {
    id: "15",
    title: "Dancing Links Algorithm Implementation",
    subtitle: "Python implementation of Knuth's Dancing Links (DLX) algorithm with interactive web visualizer",
    category: "engineering",
    duration: "4 months",
    team: "Gabe Zak, Vaani Bhatnagar, Eddy Pan",
    role: "Algorithm Developer & Research Contributor",
    overview: "Implemented Donald Knuth's Dancing Links algorithm (Algorithm X) in Python and created an interactive web visualizer, applying it to solve complex constraint satisfaction problems including N-Queens and Sudoku.",
    problem: "Complex algorithms like Dancing Links are difficult to understand without visual representation. Donald Knuth mentioned in his 2018 lecture that he was still waiting for someone to create an animated app for this algorithm.",
    solution: "Created comprehensive Dancing Links implementation with Python backend and React-based interactive visualizer, fulfilling Knuth's vision of animated algorithm demonstration while solving real-world constraint satisfaction problems.",
    process: [
      "Deep-dive research into Donald Knuth's Dancing Links algorithm and exact cover problems",
      "Implemented Dancing Links algorithm in Python for constraint satisfaction problems",
      "Applied algorithm to solve LeetCode Hard problems: N-Queens, N-Queens II, and Sudoku Solver",
      "Created comprehensive write-up and testing framework in Jupyter notebook format",
      "Ported Python implementation to JavaScript for web-based visualization",
      "Developed React frontend for interactive algorithm demonstration and visualization",
      "Created educational resources including presentations and documentation"
    ],
    results: [
      "Successfully implemented Dancing Links algorithm solving multiple constraint satisfaction problems",
      "Created interactive web visualizer fulfilling Donald Knuth's 2018 vision for animated DLX demonstration",
      "Solved complex LeetCode Hard problems with optimal algorithmic solutions",
      "Developed comprehensive educational resources adopted by computer science courses",
      "Demonstrated algorithm versatility across N-Queens, Sudoku, and other exact cover problems",
      "Published complete implementation with both Python backend and JavaScript frontend"
    ],
    images: [
      "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800"
    ],
    technologies: ["Python", "JavaScript", "React", "Algorithm Design", "Data Structures", "Jupyter Notebook"],
    link: "https://github.com/eddydpan/dancing-links"
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
              <Button className="w-full mt-6" onClick={() => window.open(project.link, '_blank')}>
                <ExternalLink className="mr-2 h-4 w-4" />
                View Project Website
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