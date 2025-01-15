'use client';

import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import ResponsiveNav from "./ResponsiveNavbar";
import ThemeSwitcher from "../ui/ThemeSwitcher";
import { useScrollingContext } from "@/providers";

export const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const { refs, links, currentPage, handleChangePage } = useScrollingContext();

  return (
    <nav className={`flex gap-4`}>
      <div className="hidden md:flex gap-4">
        {links.map((link, i) => (
          <button key={i} className={`${currentPage.label === link.label ? '!text-accentDark dark:!text-accentDark' : 'text-dark dark:!text-light'} hover:!text-accentDark dark:hover:!text-accentDark focus:outline-none`} onClick={() => handleChangePage(link)}>
            { link.label }
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
      <ResponsiveNav open={navOpen} handleClose={() => setNavOpen(false)} />
    </nav>
  );
};

export default Navbar;
