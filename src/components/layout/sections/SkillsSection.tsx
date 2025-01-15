import React, { ComponentPropsWithRef } from 'react';
import { Skill, PageContainer } from '@/components';
import getSkills from '@/actions/getSkills';
import { ISkill } from '@/models';

interface IProps extends ComponentPropsWithRef<"div"> {
  skills: ISkill[];
};

export const SkillsSection = ({ skills, ...props }: IProps) => {
  return (
    <PageContainer
      { ...props }
      className={`snap-start ${ props.className }`}
    >
      <div
        className='flex justify-center items-center gap-6 w-full h-full max-h-full overflow-y-auto'
      >
        <div id='skills' className='relative w-full max-w-[750px] h-full flex justify-center flex-shrink flex-wrap items-center gap-4'>
          <div className="sticky top-0 left-0 w-full h-16 bg-gradient-to-b from-primary dark:from-darkPrimary to-transparent z-10"></div>
          {skills.map((skill, i) => (
            <Skill key={i} skill={skill} />
          ))}
          <div className="sticky bottom-0 left-0 w-full h-16 bg-gradient-to-b from-transparent to-primary dark:to-darkPrimary"></div>
        </div>
      </div>
    </PageContainer>
  );
}

export default SkillsSection;