import Navigation from "../components/ui/navigation";
import HeroSection from "../components/ui/hero-section";
import AboutSection from "../components/ui/about-section";
import PortfolioSection from "../components/ui/portfolio-section";
import ResearchSection from "../components/ui/research-section";
import ResumeSection from "../components/ui/resume-section";
import ContactSection from "../components/ui/contact-section";
import Footer from "../components/ui/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <ResearchSection />
      <ResumeSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
