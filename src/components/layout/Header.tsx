import React from "react";
import { AiFillFolderOpen } from "react-icons/ai";
import { Navbar } from "@/components";

export const Header = () => {
  return (
    <header
      className={`fixed top-0 flex justify-between items-center w-screen py-4 px-4 sm:px-8 md:px-12 z-10`}
    >
      <div className="flex items-center gap-2">
        <AiFillFolderOpen
          size={36}
          className={`!text-accentDark dark:!text-darkAccent`}
        />    
      </div>
      <Navbar />
    </header>
  );
}

export default Header;