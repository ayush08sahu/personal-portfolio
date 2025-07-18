import AboutSection from "../componentes/AboutSection";
import ContactSection from "../componentes/ContactSection";
import Footer from "../componentes/Footer";
import HeroSection from "../componentes/HeroSection";
import { Navbar } from "../componentes/Navbar";
import ProjectSection from "../componentes/ProjectSection";
import SkillsSection from "../componentes/SkillsSection";
import { StarBackground } from "../componentes/StarBackground";
import { ThemeToggle } from "../componentes/ThemeToggle";

export const Home = () => {
    return (
    <div className="mim-h-screen bg-background text-foreground overflow-x-hidden">
        {/* toggle theme */}
            <ThemeToggle/>
        {/* background effect */}
            <StarBackground/>
        {/* navbar */}
            <Navbar/>
        {/* main content */}
        <main>
            <HeroSection/>
            <AboutSection/>
            <SkillsSection/>
            <ProjectSection />
            <ContactSection/>
        </main>
        {/* footer */}
        <Footer/>
    </div>
    );
};