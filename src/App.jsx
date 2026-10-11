import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { Navbar } from "./components/layout/Navbar";
import { HeroSection } from "./components/sections/HeroSection";
import { AboutSection } from "./components/sections/AboutSection";
import { ArchitectureFlowSection } from "./components/sections/ArchitectureFlowSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { DeliverablesSection } from "./components/sections/DeliverablesSection";
import { SkillsSection } from "./components/sections/SkillsSection";
import { ContactSection } from "./components/sections/ContactSection";
import { Footer } from "./components/layout/Footer";
import { CustomCursor } from "./components/common/CustomCursor";

export default function App() {
  return (
    <ThemeProvider>
      <div className="app-root">
        <CustomCursor />
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ArchitectureFlowSection />
          <ProjectsSection />
          <DeliverablesSection />
          <SkillsSection />
          {/* <ContactSection /> */}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
