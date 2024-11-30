'use client';

import React, { useState } from "react";
import { AiOutlineMenu, AiFillFolderOpen } from "react-icons/ai";
import { Navbar, ResponsiveNav, ThemeSwitcher } from "@/components";
import { useScroll } from "@/hooks";

export const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const { hasScrolled } = useScroll();

  return (
    <header
      className={`fixed top-0 flex justify-between items-center w-full py-4 px-4 sm:px-8 lg:px-12 ${hasScrolled ? "backdrop-brightness-50 shadow-md" : ""} transitioning z-10`}
    >
      <h1 className={`flex items-center gap-4  text-2xl transitioning cursor-default dark:text-lightOverPrimaryDark ${ hasScrolled ? '!text-light' : '!text-dark dark:!text-light' }`}>
        <AiFillFolderOpen
          size={36}
          className={`${ hasScrolled ? '!text-light' : '!text-overSecondaryLight dark:!text-lightOverPrimaryDark' } transitioning`}
        />
        Portfolio
      </h1>
      <Navbar hasScrolled={hasScrolled} />
      <div className='flex gap-8'>
        <ThemeSwitcher />
        <AiOutlineMenu
          onClick={() => setNavOpen(prev => !prev)}
          size={22}
          className='fill-overPrimaryLight hover:fill-dark dark:fill-lightOverPrimaryDark dark:hover:fill-darkOverPrimaryDark transioning cursor-pointer block sm:hidden'
        />
      </div>
      <ResponsiveNav open={navOpen} handleClose={() => setNavOpen(false)} />
    </header>
  );
}

export default Header;