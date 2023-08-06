import React from 'react';

function Skills() {
  return (
    <div id="skills-container" className='w-full h-screen pt-headerOffset bg-tertiaryLight transition-all duration-modeSwitchDuration ease-in-out dark:bg-tertiaryDark'>
      <div id="skills-innerContainer" className='relative grid place-items-center w-full h-full clip-parallelogram bg-[url("https://images.unsplash.com/photo-1521185496955-15097b20c5fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=2048&q=60")] bg-secondaryLight bg-center bg-cover bg-no-repeat text-light transition-all duration-modeSwitchDuration ease-in-out after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:bg-dark after:filter after:opacity-50 after:-z-1 dark:bg-secondaryDark'>My Skills</div>
    </div>
  );
}

export default Skills;