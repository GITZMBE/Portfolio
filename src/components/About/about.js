import React from "react";

function About() {
  return (
    <>
      <div
        id='about-container'
        className='flex flex-col justify-start w-full min-h-screen py-headerOffset mt-headerOffset px-4 md:px-12 bg-tertiaryLight clip-house transitioning dark:bg-tertiaryDark'
      >
        <h2
          id='about-title'
          className='text-center py-4 mt-[10vh] sm:text-start text-3xl font-medium uppercase transitioning cursor-default dark:text-light'
        >
          About <span className='italic'>(Interests)</span>
        </h2>
        <div
          id='about-grid'
          className='grid grid-about-template-mobile md:grid-about-template-desktop gap-5 w-full min-h-full transitioning bg-tertiaryLight dark:bg-tertiaryDark'
        >
          <div className='flex flex-col md:flex-row bg-light rounded-2xl p-4 overflow-hidden transitioning dark:bg-quaternaryDark shadow-md shadow-black'>
            <img
              src='https://images.unsplash.com/photo-1567646303972-f7de3a9c0a05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
              alt='rubix cube'
              className='md:w-2/5 w-full h-1/2 md:h-full object-cover object-center'
            />
            <div id='grid-item' className='flex flex-col w-full h-fit md:px-4'>
              <h3 id='item-title' className='text-2xl font-bold transitioning dark:text-light py-2'>
                Rubix cube
              </h3>
              <p className='py-2 text-xl font-medium transitioning dark:text-light max-h-[180px] overflow-hidden'>
                The Rubik's Cube is a 3D combination puzzle invented in 1974 by
                Ernő Rubik. It challenges players to solve by aligning the
                colors on each face. It remains a popular brain-teaser
                worldwide.
              </p>
            </div>
          </div>
          <div className='flex flex-col md:flex-row bg-light rounded-2xl p-4 overflow-hidden transitioning dark:bg-quaternaryDark shadow-md shadow-black'>
            <img
              src='https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
              alt='Web development'
              className='md:w-2/5 w-full h-1/2 md:h-full object-cover object-center'
            />
            <div id='grid-item' className='flex flex-col w-full h-fit md:px-4'>
              <h3 id='item-title' className='text-2xl font-bold transitioning dark:text-light py-2'>
                Web development
              </h3>
              <p className='py-2 text-xl font-medium transitioning dark:text-light max-h-[180px] overflow-hidden'>
                Web development is the process of building and maintaining
                websites and web applications. It involves frontend{" "}
                <span className='italic'>(HTML, CSS, JavaScript)</span> and
                backend <span className='italic'>(server-side)</span>{" "}
                technologies to create interactive and dynamic online
                experiences.
              </p>
            </div>
          </div>
          <div className='flex flex-col md:flex-row bg-light rounded-2xl p-4 overflow-hidden transitioning dark:bg-quaternaryDark shadow-md shadow-black'>
            <img
              src='https://images.unsplash.com/photo-1569698045292-e14cb5393e79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
              alt='parkour'
              className='md:w-2/5 w-full h-1/2 md:h-full object-cover object-center'
            />
            <div id='grid-item' className='flex flex-col w-full h-fit md:px-4'>
              <h3 id='item-title' className='text-2xl font-bold transitioning dark:text-light py-2'>
                Gymnastics
              </h3>
              <p className='py-2 text-xl font-medium transitioning dark:text-light max-h-[180px] overflow-hidden'>
                Gymnastics is a dynamic and challenging sport that showcases
                strength, flexibility, body control and grace. Athletes perform
                a series of acrobatic movements, jumps, and flips on various
                apparatus like the floor, beam, bars, and vault.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
