import React from 'react';
import { AiFillHtml5 } from 'react-icons/ai';
import { BiLogoCss3, BiLogoReact, BiLogoJavascript, BiLogoAngular, BiLogoTailwindCss, BiLogoGit } from 'react-icons/bi';
import { RxGithubLogo } from 'react-icons/rx';
import { Skill, PageContainer } from '@/components';

export const SkillsSection = () => {
  return (
    <PageContainer
      id="skills-container"
    >
      <div id="skills-innerContainer" className='relative grid place-items-center w-full h-full clip-parallelogram bg-[url("https://images.unsplash.com/photo-1521185496955-15097b20c5fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=2048&q=60")] bg-secondaryLight bg-center bg-cover bg-no-repeat text-light transition-all duration-modeSwitchDuration ease-in-out after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:bg-dark after:filter after:opacity-50 after:-z-1 dark:bg-secondaryDark'>
        <div id='skills' className='grid grid-cols-2 grid-rows-3 sm:grid-cols-3 sm:grid-rows-2 lg:grid-cols-4 lg:grid-rows-2 gap-4 transitioning'>
          <Skill icon={AiFillHtml5} skill='HTML' gradient='skill-icon from-[#e34c26] to-[50%] from-[50%] to-[#f06529]' />
          <Skill icon={BiLogoCss3} skill='CSS' gradient='skill-icon from-[#264de4] to-[50%] from-[50%] to-[#2965f1]' />
          <Skill icon={BiLogoJavascript} skill='JAVA SCRIPT' gradient='skill-icon from-[#E5A42D] to-[50%] from-[50%] to-[#F0C02C]' />
          <Skill icon={BiLogoTailwindCss} skill='TAILWIND' gradient='skill-icon from-[#2f9bb6] to-[50%] from-[50%] to-[#41b49e]' />
          <Skill icon={BiLogoReact} skill='REACT JS' gradient='skill-icon from-[#08B6CE] to-[50%] from-[50%] to-[#61DBFB]' />
          <Skill icon={BiLogoAngular} skill='ANGULAR' gradient='skill-icon from-[#dd1b16] to-[50%] from-[50%] to-[#a6120d]' />
          <Skill icon={RxGithubLogo} skill='GITHUB' gradient='skill-icon from-[#620296] to-[50%] from-[50%] to-[#a304fa]' />
          <Skill icon={BiLogoGit} skill='GIT' gradient='skill-icon from-[#b13e2f] to-[50%] from-[50%] to-[#eb513d]' />
        </div>
      </div>
    </PageContainer>
  );
}

export default SkillsSection;