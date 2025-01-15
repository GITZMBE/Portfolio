'use client';

import React, { useRef } from 'react';
import { ContactSection, ExperienceSection, StartSection, ProjectsSection, SkillsSection } from "@/components";
import { useScrollingContext } from '@/providers';
import { IExperience, IProject, ISkill } from '@/models';

interface IProps {
  data: { experiences: IExperience[], skills: ISkill[], projects: IProject[] };
};

export const HomePage = ({ data }: IProps) => {
  const { refs } = useScrollingContext();
  const { startRef, experienceRef, skillsRef, projectsRef, contactRef } = refs;

  return (
    <div className={`flex max-w-[100vw] h-screen overflow-x-auto snap-x snap-mandatory scroll-smooth`}>
      <StartSection ref={startRef} />
      <ExperienceSection ref={experienceRef} experiences={data.experiences} />
      <SkillsSection ref={skillsRef} skills={data.skills} />
      <ProjectsSection ref={projectsRef} projects={data.projects} />
      <ContactSection ref={contactRef} />
    </div>
  )
};

export default HomePage;