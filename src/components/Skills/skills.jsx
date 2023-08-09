import React from 'react';
import { AiFillHtml5 } from 'react-icons/ai';
import { BiLogoCss3, BiLogoReact, BiLogoJavascript, BiLogoAngular } from 'react-icons/bi';
import { RxGithubLogo } from 'react-icons/rx';
import Skill from './Skill/skill';

function Skills() {
  return (
    <div id="skills-container" className='w-full h-screen pt-headerOffset bg-tertiaryLight transition-all duration-modeSwitchDuration ease-in-out dark:bg-tertiaryDark'>
      <div id="skills-innerContainer" className='relative grid place-items-center w-full h-full clip-parallelogram bg-[url("https://images.unsplash.com/photo-1521185496955-15097b20c5fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=2048&q=60")] bg-secondaryLight bg-center bg-cover bg-no-repeat text-light transition-all duration-modeSwitchDuration ease-in-out after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:bg-dark after:filter after:opacity-50 after:-z-1 dark:bg-secondaryDark'>
        <div className='grid grid-cols-2 grid-rows-3 sm:grid-cols-3 sm:grid-rows-2 gap-4 transitioning'>
          <Skill Icon={AiFillHtml5} skill='HTML' color='fill-light dark:fill-dark bg-gradient-to-r from-[#e34c26] to-[50%] from-[50%] to-[#f06529] rounded-lg transitioning' />
          <Skill Icon={BiLogoCss3} skill='CSS' color='fill-light dark:fill-dark bg-gradient-to-r from-[#264de4] to-[50%] from-[50%] to-[#2965f1] rounded-lg transitioning' />
          <Skill Icon={BiLogoReact} skill='REACT JS' color='fill-light dark:fill-dark bg-gradient-to-r from-[#08B6CE] to-[50%] from-[50%] to-[#61DBFB] rounded-lg transitioning' />
          <Skill Icon={RxGithubLogo} skill='GITHUB' color='text-light dark:text-dark bg-gradient-to-r from-[#620296] to-[50%] from-[50%] to-[#a304fa] rounded-lg transitioning' />
          <Skill Icon={BiLogoJavascript} skill='JAVA SCRIPT' color='fill-light dark:fill-dark bg-gradient-to-r from-[#E5A42D] to-[50%] from-[50%] to-[#F0C02C] rounded-lg transitioning' />
          <Skill Icon={BiLogoAngular} skill='ANGULAR' color='fill-light dark:fill-dark bg-gradient-to-r from-[#dd1b16] to-[50%] from-[50%] to-[#a6120d] rounded-lg transitioning' />
        </div>
      </div>
    </div>
  );
}

export default Skills;