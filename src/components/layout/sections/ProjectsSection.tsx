'use client';

import { PageContainer, ProjectButton, ProjectModal, Text } from "@/components";
import { IProject } from "@/models";
import React, { ComponentPropsWithRef, useState } from "react";

interface IProps extends ComponentPropsWithRef<"div"> {
  projects: IProject[];
};

export const ProjectsSection = ({ projects, ...props }: IProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<IProject | null>(null);

  return (
    <PageContainer
      { ...props }
      className={`flex !justify-center items-center snap-start ${ props.className }`}
    >
      <div id="link-container" className="flex justify-center items-center gap-4 flex-wrap max-w-[950px]">
        {projects.map((project) => (
          <ProjectButton key={project.slug} project={project} onClick={() => { setSelectedProject(project); setModalOpen(true); }}>
            <Text as="h2" className="uppercase !text-center !text-2xl sm:!text-2xl md:!text-2xl !text-accent dark:!text-darkAccent !cursor-pointer">{ project.title }</Text>
          </ProjectButton>
        ))}
      </div>
      <ProjectModal project={selectedProject} isOpen={modalOpen} handleClose={() => setModalOpen(false)} />
    </PageContainer>
  );
}

export default ProjectsSection;
