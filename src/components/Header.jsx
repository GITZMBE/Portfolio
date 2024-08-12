import React from "react";
import Navbar from "./Navbar";
import { AiOutlineMenu, AiFillFolderOpen } from "react-icons/ai";
import DarkModeBtn from "./ModeBtn";
import { showRelativeNavbarState } from '../recoil';
import { useSetRecoilState } from "recoil";

export const Header = () => {
  const setShowRelativeNavbar = useSetRecoilState(showRelativeNavbarState);

  const handleOpenRelativeNavbar = () => {
    setShowRelativeNavbar(true);
  };

  return (
    <header
      className={`fixed top-0 flex justify-between items-center w-full h-headerOffset py-0 px-4 sm:px-8 lg:px-20 bg-primaryLight transitioning z-10 dark:bg-primaryDark shadow-md`}
    >
      <h1 className='flex items-center gap-4 text-dark text-2xl transitioning cursor-default dark:text-lightOverPrimaryDark'>
        <AiFillFolderOpen
          size={36}
          className='fill-overSecondaryLight dark:fill-lightOverPrimaryDark transitioning'
        />
        Portfolio
      </h1>
      <Navbar />
      <div className='flex gap-8'>
        <DarkModeBtn />
        <AiOutlineMenu
          onClick={handleOpenRelativeNavbar}
          size={22}
          className='fill-overPrimaryLight hover:fill-dark dark:fill-lightOverPrimaryDark dark:hover:fill-darkOverPrimaryDark transioning cursor-pointer lg:hidden'
        />
      </div>
    </header>
  );
}

export default Header;
