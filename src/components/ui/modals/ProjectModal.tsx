'use client';

import { IProject } from '@/models';
import React from 'react';
import { Modal, ImageScroller, Text, GithubButton, VercelButton, SkillBadge } from '@/components';
import Image from 'next/image';

interface IProps {
  isOpen: boolean;
  handleClose: () => void;
  project: IProject | null;
};

export const ProjectModal = ({ isOpen, handleClose, project }: IProps) => {
  const { title, slug, description, banner, logo, images, skills, githubLink, hostingLink } = project || { title: '', slug: '', description: '', banner: null, logo: null, images: [], skills: [], githubLink: null, hostingLink: null };

  return (
    <Modal isOpen={isOpen} closeModal={handleClose} content={
      <div className='w-full h-full p-6 bg-primary dark:bg-darkPrimary rounded-md' onClick={e => e.stopPropagation()}>
        <div className="h-full flex items-start gap-4 flex-wrap">
          <div className="max-w-[500px] flex flex-col gap-4">
            <ImageScroller images={images} className='flex-grow' />
            <div className="flex gap-4 flex-wrap">
              {project?.skills.map((skill, i) => <SkillBadge key={i} skill={skill} />)}
            </div>            
          </div>
          <div className='w-full sm:max-w-[750px] max-h-full flex flex-col items-start gap-6 flex-grow flex-shrink basis-[500px]'>
            <div className="flex gap-4 items-end flex-wrap">
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
            {banner && <Image src={banner?.url} alt={title} width={banner?.width || 500} height={banner?.height || 350} className='hidden sm:block w-full max-h-[350px] object-cover object-center' />}
            <div className="relative h-full max-h-[300px] overflow-y-auto">
              <Text as='p' className='!whitespace-pre-line'>{description}</Text>
              <div className="sticky bottom-0 left-0 w-full h-16 bg-gradient-to-b from-transparent to-primary dark:to-darkPrimary p-2 rounded-md"></div>
            </div>
          </div>
        </div>
      </div>
    }></Modal>
  )
};

export default ProjectModal;