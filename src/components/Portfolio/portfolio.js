import React from "react";

function Portfolio() {
  return (
    <div
      id='portfolio-container'
      className='flex flex-col justify-start w-full min-h-screen pt-headerOffset px-12 bg-tertiaryLight transitioning dark:bg-tertiaryDark'
    >
      <h2
        id='portfolio-title'
        className='text-start py-4 text-3xl font-medium uppercase transitioning cursor-default dark:text-light'
      >
        Portfolio (Interests)
      </h2>
      <div
        id='portfolio-grid'
        className='grid grid-portfolio-template-desktop gap-5 w-full min-h-full transitioning bg-tertiaryLight dark:bg-tertiaryDark'
      >
        <div className='flex flex-col sm:flex-row bg-light rounded-2xl p-4 overflow-hidden'>
          <img
            src='https://images.unsplash.com/photo-1567646303972-f7de3a9c0a05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
            alt='rubix cube'
            className='sm:w-2/5 sm:max-w-sm w-full min-w-min h-1/2 sm:h-full object-cover object-center'
          />
          <div id='grid-item' className='flex flex-col w-3/5 h-12 sm:px-4'>
            <h3 id='item-title' className='text-2xl font-bold'>
              Rubix cube
            </h3>
            <p className="py-2 text-xl font-medium">
              The Rubik's Cube is a 3D combination puzzle invented in 1974 by
              Ernő Rubik. It challenges players to solve by aligning the colors
              on each face. It remains a popular brain-teaser worldwide.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
