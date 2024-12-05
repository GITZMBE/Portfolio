'use client';

import { IExperience, IProject } from '@/models';
import React from 'react';
import { Modal, ImageScroller, Text, SkillBadge, GithubButton, VercelButton } from '@/components';
import Image from 'next/image';

interface IProps {
  isOpen: boolean;
  handleClose: () => void;
  experience: IExperience | null;
};

export const ExperienceModal = ({ isOpen, handleClose, experience }: IProps) => {
  const { title, company, location, startDate, endDate, description, responsibilities, achievements, skills, tags } = experience || { title: '', company: '', location: '', startDate: '', endDate: '', description: '', responsibilities: [], achievements: [], skills: [], tags: [] };

  return (
    <Modal isOpen={isOpen} closeModal={handleClose} content={
      <div className='w-full h-full p-6 bg-primary dark:bg-darkPrimary rounded-md' onClick={e => e.stopPropagation()}>
        <div className="flex items-start gap-4 flex-wrap">

        </div>
      </div>
    }></Modal>
  )
};

export default ExperienceModal;