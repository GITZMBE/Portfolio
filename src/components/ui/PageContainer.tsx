import React, { ComponentPropsWithoutRef, ComponentPropsWithRef } from 'react';

interface IProps extends ComponentPropsWithRef<'div'> {
  children: React.ReactNode;
};

export const PageContainer = ({ children, ...props }: IProps) => {
  return (
    <section
      { ...props }
      className={`flex justify-between items-center w-screen min-w-[100vw] max-w-[100vw] h-screen max-h-screen overflow-hidden py-[150px] px-4 sm:px-8 md:px-12 scroll-smooth ${ props.className }`}
    >
      { children }
    </section>
  )
};

export default PageContainer;