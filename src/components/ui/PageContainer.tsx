import React, { ComponentPropsWithoutRef } from 'react';

interface IProps extends ComponentPropsWithoutRef<'div'> {
  children: React.ReactNode;
};

export const PageContainer = ({ children, ...props }: IProps) => {
  return (
    <div
      { ...props }
      className={`flex justify-between items-center w-screen h-full py-[150px] px-4 sm:px-8 md:px-12 transition-all duration-300 ease-in-out ${ props.className }`}
    >
      { children }
    </div>
  )
};

export default PageContainer;