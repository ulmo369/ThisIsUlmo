import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ResumeSection from '@/components/sections/ResumeSection';
import PersonalSection from '@/components/sections/PersonalSection';
import ContactSection from '@/components/sections/ContactSection';

/** Composes all landing page sections in display order */
export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ResumeSection />
      <PersonalSection />
      <ContactSection />
    </>
  );
}
