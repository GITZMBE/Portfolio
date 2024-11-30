import React, { ComponentPropsWithoutRef } from 'react';

interface IProps extends ComponentPropsWithoutRef<'div'> {
  children: React.ReactNode;
};

export const PageContainer = ({ children, ...props }: IProps) => {
  return (
    <section
      { ...props }
      className={`flex justify-between items-center w-screen h-screen max-h-screen overflow-y-hidden py-[150px] px-4 sm:px-8 md:px-12 ${ props.className }`}
    >
      { children }
    </section>
  )
};

export default PageContainer;