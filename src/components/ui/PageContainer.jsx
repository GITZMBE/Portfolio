import React from 'react'

export const PageContainer = ({ children, id = '#', className = '' }) => {
  return (
    <div
      id={ id }
      className={`flex justify-between items-center w-screen h-full py-[150px] md:px-12 bg-secondaryLight transition-all duration-modeSwitchDuration ease-in-out dark:bg-secondaryDark ${ className }`}
    >
      { children }
    </div>
  )
};

export default PageContainer;