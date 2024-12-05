'use client';

import React, { useRef } from 'react';
import { ContactSection, ExperienceSection, StartSection, ProjectsSection, SkillsSection } from "@/components";
import { useScrollingContext } from '@/providers';
import { IProject } from '@/models';

interface IProps {
  projects: IProject[];
};

export const HomePage = ({ projects }: IProps) => {
  const { refs } = useScrollingContext();
  const { startRef, experienceRef, skillsRef, projectsRef, contactRef } = refs;

  return (
    <div className={`flex max-w-[100vw] h-screen overflow-x-auto snap-x snap-mandatory scroll-smooth`}>
      <StartSection ref={startRef} />
      <ExperienceSection ref={experienceRef} />
      <SkillsSection ref={skillsRef} />
      <ProjectsSection ref={projectsRef} projects={projects} />
      <ContactSection ref={contactRef} />
    </div>
  )
};

export default HomePage;