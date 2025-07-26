import { ExternalLink, FileText, Users, Award } from "lucide-react";
import { Button } from "./button";

export default function ResearchSection() {
  const papers = [
    {
      id: "1",
      title: "Integrating Design Thinking in Undergraduate Engineering Curricula: A Mixed-Methods Study",
      journal: "Journal of Engineering Education",
      year: "2023",
      authors: "S. Chen, M. Johnson, R. Patel",
      abstract: "This study examines the integration of design thinking methodologies in traditional engineering curricula and its impact on student innovation and problem-solving capabilities.",
      link: "#",
      citations: 15,
      category: "Curriculum Design"
    },
    {
      id: "2", 
      title: "Bridging the Gap: Engineering Students' Transition to Human-Centered Design Practices",
      journal: "International Journal of Engineering Pedagogy",
      year: "2022",
      authors: "S. Chen, L. Martinez, K. Thompson",
      abstract: "An analysis of how engineering students adapt to user-centered design methodologies and the pedagogical approaches that facilitate this transition.",
      link: "#",
      citations: 23,
      category: "Educational Transition"
    },
    {
      id: "3",
      title: "Project-Based Learning in Mechanical Engineering: Fostering Interdisciplinary Collaboration",
      journal: "ASEE Annual Conference Proceedings",
      year: "2021",
      authors: "S. Chen, D. Williams, A. Rodriguez",
      abstract: "A comprehensive study on project-based learning approaches that encourage collaboration between engineering and design disciplines in undergraduate programs.",
      link: "#",
      citations: 31,
      category: "Collaborative Learning"
    }
  ];

  const researchMetrics = [
    {
      icon: FileText,
      label: "Published Papers",
      value: "3",
      bgColor: "bg-primary"
    },
    {
      icon: Award,
      label: "Total Citations",
      value: "69",
      bgColor: "bg-accent"
    },
    {
      icon: Users,
      label: "Collaborations",
      value: "6",
      bgColor: "bg-slate-700"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Curriculum Design":
        return "bg-blue-100 text-primary";
      case "Educational Transition":
        return "bg-orange-100 text-accent";
      case "Collaborative Learning":
        return "bg-green-100 text-green-700";
      default:
        return "bg-gray-100 text-slate-700";
    }
  };

  return (
    <section id="research" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Research Publications</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Contributing to the academic understanding of engineering education and the integration 
            of design thinking in technical curricula.
          </p>
        </div>

        {/* Research Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {researchMetrics.map((metric, index) => (
            <div key={index} className="bg-slate-50 p-6 rounded-xl text-center">
              <div className={`inline-flex w-16 h-16 ${metric.bgColor} rounded-full items-center justify-center mb-4 mx-auto`}>
                <metric.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-2">{metric.value}</div>
              <div className="text-slate-600">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Research Papers */}
        <div className="space-y-8">
          {papers.map((paper) => (
            <div
              key={paper.id}
              className="bg-slate-50 p-8 rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <span className={`px-3 py-1 text-sm font-medium rounded-full ${getCategoryColor(paper.category)} mr-3`}>
                      {paper.category}
                    </span>
                    <span className="text-sm text-slate-500">{paper.year}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{paper.title}</h3>
                  <p className="text-slate-600 mb-3">{paper.authors}</p>
                  <p className="text-sm font-medium text-primary mb-4">{paper.journal}</p>
                </div>
                <div className="flex items-center space-x-4 lg:ml-6">
                  <div className="text-center">
                    <div className="text-lg font-bold text-slate-900">{paper.citations}</div>
                    <div className="text-xs text-slate-500">Citations</div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="inline-flex items-center text-primary hover:text-blue-700 transition-colors"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Paper
                  </Button>
                </div>
              </div>
              <p className="text-slate-700 leading-relaxed">{paper.abstract}</p>
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              className="inline-flex items-center bg-white text-primary hover:bg-blue-50 border-white"
            >
              <FileText className="mr-2 h-4 w-4" />
              Download Research CV
            </Button>
            <Button
              variant="outline"
              className="inline-flex items-center bg-transparent text-white hover:bg-white hover:text-primary border-white"
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