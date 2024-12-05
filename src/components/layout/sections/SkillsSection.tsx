import React, { ComponentPropsWithoutRef, ComponentPropsWithRef } from 'react';
import { AiFillHtml5 } from 'react-icons/ai';
import { BiLogoCss3, BiLogoReact, BiLogoJavascript, BiLogoAngular, BiLogoTailwindCss, BiLogoGit } from 'react-icons/bi';
import { RxGithubLogo } from 'react-icons/rx';
import { Skill, PageContainer } from '@/components';

type IProps = ComponentPropsWithRef<"div">;

export const SkillsSection = ({ ...props }: IProps) => {
  const skills = [
    {
      icon: AiFillHtml5,
      skill: 'HTML',
      gradient: 'from-[#e34c26] to-[50%] from-[50%] to-[#f06529]'
    },
    {
      icon: BiLogoCss3,
      skill: 'CSS',
      gradient: 'from-[#1572b6] to-[50%] from-[50%] to-[#1572b6]'
    },
    {
      icon: BiLogoJavascript,
      skill: 'Javascript',
      gradient: 'from-[#f7df1e] to-[50%] from-[50%] to-[#f7df1e]'
    },
    {
      icon: BiLogoTailwindCss,
      skill: 'TailwindCSS',
      gradient: 'from-[#06b6d4] to-[50%] from-[50%] to-[#06b6d4]'
    },
    {
      icon: BiLogoReact,
      skill: 'React',
      gradient: 'from-[#61DBFB] to-[50%] from-[50%] to-[#61DBFB]'
    },
    {
      icon: BiLogoAngular,
      skill: 'Angular',
      gradient: 'from-[#DD0031] to-[50%] from-[50%] to-[#DD0031]'
    },
    {
      icon: RxGithubLogo,
      skill: 'Github',
      gradient: 'from-[#333] to-[50%] from-[50%] to-[#333]'
    },
    {
      icon: BiLogoGit,
      skill: 'Git',
      gradient: 'from-[#F05032] to-[50%] from-[50%] to-[#F05032]'
    },
  ];
  
  return (
    <PageContainer
      { ...props }
      className={`snap-start ${ props.className }`}
    >
      <div id="skills-innerContainer" className='w-full flex justify-center'>
        <div id='skills' className='w-fit flex justify-center flex-shrink flex-wrap items-center gap-4'>
          {skills.map(({ icon, skill, gradient }, i) => (
            <Skill key={i} icon={icon} skill={skill} gradient={gradient} />
          ))}
        </div>
      </div>
    </PageContainer>
  );
}

export default SkillsSection;