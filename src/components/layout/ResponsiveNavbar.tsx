'use client';

import { useScrollingContext } from "@/providers";
import React from "react";
import { AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
import { RxGithubLogo } from "react-icons/rx";

interface IProps {
  open: boolean;
  handleClose: () => void;
}

export const ResponsiveNav = ({ open, handleClose }: IProps) => {
  const { refs, links, currentPage, handleChangePage } = useScrollingContext();

  return (
    <nav className={`fixed top-0 left-0 flex md:hidden flex-col h-full justify-between py-8 bg-primary dark:bg-darkPrimary w-0 z-50 ${ open ? 'animate-openResponsiveNav px-4' : 'animate-closeResponsiveNav' } h-screen bg-overPrimaryLight overflow-x-hidden`}>
      <div className='flex justify-end items-center pb-4'>
        <button
          className='group p-4 rounded-full shadow-md hover:shadow-dark dark:hover:shadow-light cursor-pointer'
          onClick={handleClose}
        >
          <AiOutlineClose
            size={22}
            className='cursor-pointer text-overPrimaryLight group-hover:text-dark dark:text-darkAccentDark dark:group-hover:text-darkAccent'
          />
        </button>
      </div>
      <hr className="border-b dark:border-b-darkOverPrimaryDark" />
      <div className='flex flex-col flex-grow text-2xl py-4 list-none font-semibold'>
        {links.map((link, i) => (
          <button
            key={i}
            className={`w-full text-start text-xl text-accentLight hover:text-accentDark dark:text-accentDark hover:dark:text-darkAccentDark ${currentPage.label === link.label ? '!text-accentDark dark:!text-accentDark' : 'text-dark dark:!text-light'} hover:bg-secondary dark:hover:bg-darkTertiary p-2`}
            onClick={() => {handleChangePage(link); handleClose();}}
          >
            { link.label }
          </button>
        ))}
      </div>
      <div className='flex gap-4'>
        <a
          href='https://github.com/GITZMBE'
          className='p-4 rounded-full shadow-md hover:shadow-accentLight text-accentDark hover:text-accent dark:text-darkAccentDark dark:hover:text-darkAccent cursor-pointer'
        >
          <RxGithubLogo size={22} />
        </a>
        <a
          href='https://www.linkedin.com/in/lucas-andersson-861425214/'
          className='p-4 rounded-full shadow-md hover:shadow-accentLight text-accentDark hover:text-accent dark:text-darkAccentDark dark:hover:text-darkAccent cursor-pointer'
        >
          <BiLogoLinkedin size={22} />
        </a>
        <a
          href='mailto:lucasfilip@hotmail.se'
          className='p-4 rounded-full shadow-md hover:shadow-accentLight text-accentDark hover:text-accent dark:text-darkAccentDark dark:hover:text-darkAccent cursor-pointer'
        >
          <AiOutlineMail size={22} />
        </a>
      </div>
    </nav>
  );
}

export default ResponsiveNav;
