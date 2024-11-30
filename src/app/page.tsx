import { ContactSection, ExperienceSection, HomeSection, ProjectsSection, SkillsSection } from "@/components";

export default function Home() {
  return (
    <div className="max-h-screen overflow-y-hidden">
      <div className={`flex w-fit max-w-screen h-screen transition-all overflow-x-auto scroll-smooth snap-x snap-mandatory`}>
        <HomeSection className="snap-start" />
        <ExperienceSection className="snap-start" />
        <SkillsSection className="snap-start" />
        <ProjectsSection className="snap-start" />
        <ContactSection className="snap-start" />
      </div>
    </div>
  );
};
