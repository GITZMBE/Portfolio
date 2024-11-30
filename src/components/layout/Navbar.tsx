'use client';

import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import ResponsiveNav from "./ResponsiveNavbar";
import ThemeSwitcher from "../ui/ThemeSwitcher";

export const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const links = [
    { label: "Home", url: "#home-container" },
    { label: "Experience", url: "#experience-container" },
    { label: "Skills", url: "#skills-container" },
    { label: "Projects", url: "#projects-container" },
    { label: "Contact", url: "#contact-container" },
  ];

  return (
    <nav className={`flex gap-4`}>
      <div className="hidden md:flex gap-4">
        {links.map(({ label, url }, i) => (
          <a key={i} href={url} className={`text-dark hover:!text-accentDark dark:!text-light dark:hover:!text-accentDark`} target='_self'>
            { label }
          </a>
        ))}
      </div>
      <div className='flex gap-8'>
        <ThemeSwitcher />
        <AiOutlineMenu
          onClick={() => setNavOpen(prev => !prev)}
          size={22}
          className='text-accentDark hover:text-accent dark:text-darkAccentDark dark:hover:text-darkAccent cursor-pointer block md:hidden'
        />
      </div>
      <ResponsiveNav open={navOpen} handleClose={() => setNavOpen(false)} links={links} />
    </nav>
  );
};

export default Navbar;
