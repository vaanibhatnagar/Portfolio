import Navigation from "../components/ui/navigation";
import HeroSection from "../components/ui/hero-section";
import AboutSection from "../components/ui/about-section";
import PortfolioSection from "../components/ui/portfolio-section";
import SkillsSection from "../components/ui/skills-section";
import ResearchSection from "../components/ui/research-section";
import ResumeSection from "../components/ui/resume-section";
import ContactSection from "../components/ui/contact-section";
import Footer from "../components/ui/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <main id="main-content" className="focus:outline-none" tabIndex={-1}>
        <AboutSection />
        <PortfolioSection />
        <SkillsSection />
        <ResearchSection />
        <ResumeSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
