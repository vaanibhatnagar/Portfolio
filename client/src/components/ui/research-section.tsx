import { ExternalLink, FileText, Users, Award } from "lucide-react";
import { Button } from "./button";

export default function ResearchSection() {
  const papers = [
    {
      id: "1",
      title: "Meta-Analysis of Student-Researchers' Learning Journeys Through a Reflective Practice",
      journal: "IEEE Frontiers in Education Conference (FIE)",
      year: "2024",
      authors: "V. Bhatnagar et al.",
      abstract: "A comprehensive meta-analysis examining the learning journeys of student-researchers through reflective practice methodologies in engineering education.",
      link: "https://ieeexplore.ieee.org/document/10893292",
      category: "Education Research"
    },
    {
      id: "2", 
      title: "Conforming and Non-Conforming Motivations and Behaviors in Students' Holistic Learning Journeys",
      journal: "IEEE Frontiers in Education Conference (FIE)",
      year: "2023",
      authors: "V. Bhatnagar et al.",
      abstract: "An investigation into the motivational factors and behaviors that shape students' learning experiences in engineering education contexts.",
      link: "https://www.computer.org/csdl/proceedings-article/fie/2023/10343072/1TsBPyLm9Q4",
      category: "Educational Psychology"
    },
    {
      id: "3",
      title: "Majority or Minority: The Impact of Students' Identities on Their Learning Journeys",
      journal: "IEEE Frontiers in Education Conference (FIE)",
      year: "2022",
      authors: "J. Benton, M. Martin, V. Bhatnagar, Y. V. Zastavker",
      abstract: "A study examining how student identity and demographic factors influence learning experiences and outcomes in engineering education.",
      link: "https://ieeexplore.ieee.org/document/9962429/metrics#metrics",
      category: "Diversity & Inclusion"
    },
    {
      id: "4",
      title: "Olin College and Boston College's High Altitude Balloon Flights During the 2023 Annular and 2024 Total Solar Eclipses",
      journal: "Academic High Altitude Conference",
      year: "2024",
      authors: "M. Belanger, V. Bhatnagar et al.",
      abstract: "Documentation and analysis of high-altitude balloon missions conducted during major solar eclipse events, including technical challenges and scientific outcomes.",
      link: "https://www.iastatedigitalpress.com/ahac/article/id/17979/",
      category: "Aerospace Engineering"
    }
  ];

  const researchMetrics = [
    {
      icon: FileText,
      label: "Published Papers",
      value: "4",
      bgColor: "bg-primary"
    },
    {
      icon: Users,
      label: "Collaborations",
      value: "4",
      bgColor: "bg-slate-700"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Education Research":
        return "bg-blue-100 dark:bg-blue-900 text-primary dark:text-blue-300";
      case "Educational Psychology":
        return "bg-orange-100 dark:bg-orange-900 text-accent dark:text-orange-300";
      case "Diversity & Inclusion":
        return "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300";
      case "Aerospace Engineering":
        return "bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300";
      default:
        return "bg-gray-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300";
    }
  };

  return (
    <section id="research" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-display gradient-text mb-4">Research Publications</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Contributing to the academic understanding of engineering education and the integration 
            of design thinking in technical curricula.
          </p>
        </div>

        {/* Research Metrics */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {researchMetrics.map((metric, index) => (
            <div key={index} className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl text-center w-64">
              <div className={`inline-flex w-16 h-16 ${metric.bgColor} rounded-full items-center justify-center mb-4 mx-auto`}>
                <metric.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{metric.value}</div>
              <div className="text-slate-600 dark:text-slate-300">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Research Papers */}
        <div className="space-y-8">
          {papers.map((paper) => (
            <div
              key={paper.id}
              className="bg-slate-50 dark:bg-slate-800 p-8 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <span className={`px-3 py-1 text-sm font-medium rounded-full ${getCategoryColor(paper.category)} mr-3`}>
                      {paper.category}
                    </span>
                    <span className="text-sm text-slate-500 dark:text-slate-400">{paper.year}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{paper.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-3">{paper.authors}</p>
                  <p className="text-sm font-medium text-primary mb-4">{paper.journal}</p>
                </div>
                <div className="flex items-center space-x-4 lg:ml-6">
                  <Button
                    variant="outline"
                    size="sm"
                    className="inline-flex items-center text-primary hover:text-blue-700 transition-colors"
                    onClick={() => window.open(paper.link, '_blank')}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Paper
                  </Button>
                </div>
              </div>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{paper.abstract}</p>
            </div>
          ))}
        </div>

        {/* Research Impact Statement */}
        <div className="mt-16 bg-gradient-to-br from-primary to-accent p-8 rounded-2xl text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Research Impact</h3>
          <p className="text-blue-100 mb-6 max-w-3xl mx-auto">
            My research focuses on bridging the gap between traditional engineering education and 
            modern design practices, helping students develop both technical expertise and 
            human-centered thinking skills essential for today's complex challenges.
          </p>
          <div className="flex justify-center">
            <Button
              variant="outline"
              className="inline-flex items-center bg-transparent text-white hover:bg-white hover:text-primary border-white"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Users className="mr-2 h-4 w-4" />
              Collaborate on Research
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}