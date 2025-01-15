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
      <div
        className='flex justify-center items-center gap-6 w-full h-full max-h-full overflow-y-auto'
      >
        <div id="link-container" className="relative w-full max-w-[750px] h-full flex justify-center flex-shrink flex-wrap items-center gap-4">
          <div className="sticky top-0 left-0 w-full h-16 bg-gradient-to-b from-primary dark:from-darkPrimary to-transparent z-10"></div>
          {projects.map((project) => (
            <ProjectButton key={project.slug} project={project} onClick={() => { setSelectedProject(project); setModalOpen(true); }}>
              <Text as="h2" className="uppercase !text-center !text-2xl sm:!text-2xl md:!text-2xl !text-accent dark:!text-darkAccent !cursor-pointer">{ project.title }</Text>
            </ProjectButton>
          ))}
          <div className="sticky bottom-0 left-0 w-full h-16 bg-gradient-to-b from-transparent to-primary dark:to-darkPrimary"></div>
        </div>
      </div>
      <ProjectModal project={selectedProject} isOpen={modalOpen} handleClose={() => setModalOpen(false)} />
    </PageContainer>
  );
}

export default ProjectsSection;
