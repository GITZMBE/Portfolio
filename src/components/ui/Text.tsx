import React, { HTMLAttributes, ReactNode } from 'react';

type AsType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

interface IProps extends HTMLAttributes<HTMLElement> {
  as: AsType;
  children: ReactNode;
}

export const Text = ({ as: Element, children, ...props }: IProps) => {
  const styles = {
    h1: 'text-4xl sm:text-5xl md:text-6xl font-semibold text-accentDark',
    h2: 'text-4xl md:text-5xl font-semibold text-accentDark',
    h3: 'text-2xl sm:text-3xl font-medium text-accentDark',
    h4: 'text-xl font-medium text-accentDark',
    h5: 'text-lg text-accentDark',
    h6: 'text-lg text-accentDark',
    p: 'text-base sm:text-xl text-accent',
    span: 'text-xl text-accentSecondary font-medium text-nowrap',
  };

  return (
    <Element {...props} className={`${styles[Element as AsType]} ${props.className || ''}`}>{ children }</Element>
  )
}

export default Text;