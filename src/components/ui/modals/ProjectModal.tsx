'use client';

import { IProject } from '@/models';
import React from 'react';
import { Modal, ImageScroller, Text, SkillBadge, GithubButton, VercelButton } from '@/components';
import Image from 'next/image';

interface IProps {
  isOpen: boolean;
  handleClose: () => void;
  project: IProject | null;
};

export const ProjectModal = ({ isOpen, handleClose, project }: IProps) => {
  const { title, slug, description, banner, logo, images, skills, githubLink, hostingLink } = project || { title: '', slug: '', description: '', banner: null, logo: null, images: [], skills: [], githubLink: null, hostingLink: null };

  return (
    // <div className={`fixed top-0 left-0 w-full h-full ${ isOpen ? 'flex' : 'hidden'} justify-center items-center backdrop-brightness-50 z-[100] py-12 md:py-24 px-4 sm:px-8 md:px-12`} onClick={handleClose}>
    //   <div className='w-full h-full p-6 bg-primary dark:bg-darkPrimary rounded-md' onClick={e => e.stopPropagation()}>
        // <ImageScroller images={images} />
      // </div>
    // </div>
    <Modal isOpen={isOpen} closeModal={handleClose} content={
      <div className='w-full h-full p-6 bg-primary dark:bg-darkPrimary rounded-md' onClick={e => e.stopPropagation()}>
        <div className="flex items-start gap-4 flex-wrap">
          <div className="max-w-[500px] flex flex-col gap-4">
            <ImageScroller images={images} className='flex-grow' />
            <div className="flex gap-4 flex-wrap">
              {project?.skills.map((skill, i) => <SkillBadge key={i} skill={skill} />)}
            </div>            
          </div>
          <div className='w-full max-w-[750px] flex flex-col items-start gap-6 flex-wrap flex-grow flex-shrink basis-[300px]'>
            <div className="flex gap-4 items-end">
              {project?.logo && (
                <Image src={project?.logo?.url} alt={project?.title} width={project?.logo?.width} height={project?.logo?.height} style={{ aspectRatio: `${project?.logo?.width}/${project?.logo?.height}`, width: 'auto', height: 'auto' }} className='max-h-8 object-cover' />
              )}
              <Text as='h2' className="text-2xl text-center">{title}</Text>
              {project?.githubLink && (
                <GithubButton href={project?.githubLink} />
              )}
              {project?.hostingLink && (
                <VercelButton href={project?.hostingLink} />
              )}
            </div>
            <div className="relative h-[200px] max-h-[200px] overflow-hidden">
              <Text as='p'>{description}</Text>
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-primary dark:to-darkPrimary p-2 rounded-md"></div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-4">
            
          </div>
        </div>
      </div>
    }></Modal>
  )
};

export default ProjectModal;