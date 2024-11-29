import React from "react";

interface IProps {
  hasScrolled: boolean;
}

export const Navbar = ({ hasScrolled }: IProps) => {
  return (
    <nav className={`hidden sm:flex gap-4 list-none font-semibold`}>
      <a href='#home-container' className={`${ hasScrolled ? '!text-light' : '!text-dark dark:!text-light' }`} target='_self'>
        Home
      </a>
      <a href='#about-container' className={`${ hasScrolled ? '!text-light' : '!text-dark dark:!text-light' }`} target='_self'>
        Experience
      </a>
      <a href='#skills-container' className={`${ hasScrolled ? '!text-light' : '!text-dark dark:!text-light' }`} target='_self'>
        Skills
      </a>
      <a href='#portfolio-container' className={`${ hasScrolled ? '!text-light' : '!text-dark dark:!text-light' }`} target='_self'>
        Portfolio
      </a>
      <a href='#contact-container' className={`${ hasScrolled ? '!text-light' : '!text-dark dark:!text-light' }`} target='_self'>
        Contact
      </a>
    </nav>
  );
};

export default Navbar;
