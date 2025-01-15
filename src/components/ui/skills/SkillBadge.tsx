import { ISkill } from '@/models';
import Image from 'next/image';
import React from 'react';
import { Text } from '@/components';

interface IProps {
  skill: ISkill;
};

export const SkillBadge = ({ skill }: IProps) => {
  return (
    <div className='flex items-center gap-2 flex-shrink-0 rounded-full py-2 px-4 bg-tertiary dark:bg-darkTertiary'>
      <Image src={skill.icon ? skill.icon?.url : skill.iconUrl ? skill.iconUrl : ''} alt={skill.title} width={24} height={24} className='w-4 sm:w-5 h-4 sm:h-5' />
      <Text as='span' className='!text-sm'>{skill.title}</Text>
    </div>
  )
};

export default SkillBadge;