import React, { ComponentPropsWithoutRef } from 'react';

interface IProps extends ComponentPropsWithoutRef<'div'> {
  children: React.ReactNode;
};

export const PageContainer = ({ children, ...props }: IProps) => {
  return (
    <div
      { ...props }
      className={`flex justify-between items-center w-screen h-full py-[150px] md:px-12 bg-secondaryLight transition-all duration-modeSwitchDuration ease-in-out dark:bg-secondaryDark ${ props.className }`}
    >
      { children }
    </div>
  )
};

export default PageContainer;