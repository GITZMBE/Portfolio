import { AboutSection, ContactSection, HomeSection, PortfolioSection, SkillsSection } from "@/components";

export default function Home() {
  return (
    <div className={`bg-secondaryLight transition-all dark:bg-secondaryDark overflow-x-auto max-w-screen h-screen scroll-smooth snap-mandatory snap-x`}>
      <div className={`flex w-fit h-full`}>
        <HomeSection />
        <AboutSection />
        <SkillsSection />
        <PortfolioSection />
        <ContactSection />
      </div>
    </div>
  );
};
