'use client';

import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import ResponsiveNav from "./ResponsiveNavbar";
import ThemeSwitcher from "../ui/ThemeSwitcher";
import { useScrollingContext } from "@/providers";

export const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const { refs } = useScrollingContext();
  const { startRef, experienceRef, skillsRef, projectsRef, contactRef } = refs;

  const links = [
    { label: "Home", ref: startRef },
    { label: "Experience", ref: experienceRef },
    { label: "Skills", ref: skillsRef },
    { label: "Projects", ref: projectsRef },
    { label: "Contact", ref: contactRef },
  ];

  return (
    <nav className={`flex gap-4`}>
      <div className="hidden md:flex gap-4">
        {links.map(({ label, ref }, i) => (
          <button key={i} className={`text-dark hover:!text-accentDark dark:!text-light dark:hover:!text-accentDark`} onClick={() => ref.current?.scrollIntoView({ behavior: "smooth" })}>
            { label }
          </button>
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
