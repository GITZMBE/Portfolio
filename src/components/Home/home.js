import React from "react";
import { BiLogoLinkedin } from "react-icons/bi";
import { RxGithubLogo } from "react-icons/rx";
import { GrFacebookOption } from 'react-icons/gr';

function Home() {
  return (
    <>
      <div
        id='home-container'
        className='flex justify-between items-center w-full h-screen pt-headerOffset px-4 sm:px-8 lg:px-20 bg-secondaryLight transition-all duration-modeSwitchDuration ease-in-out dark:bg-secondaryDark'
      >
        <nav className="flex flex-col gap-12">
          <a
            href=''
            className='p-4 rounded-full shadow-lg hover:shadow-overPrimaryLight dark:hover:bg-tertiaryDark cursor-pointer'
          >
            <GrFacebookOption size={22} className='fill-overPrimaryLight hover:fill-dark dark:fill-lightOverPrimaryDark dark:hover:fill-darkOverPrimaryDark transioning cursor-pointer' />
          </a>
          <a
            href=''
            className='p-4 rounded-full shadow-lg hover:shadow-overPrimaryLight dark:hover:bg-tertiaryDark cursor-pointer'
          >
            <RxGithubLogo size={22} className='fill-overPrimaryLight hover:fill-dark dark:fill-lightOverPrimaryDark dark:hover:fill-darkOverPrimaryDark transioning cursor-pointer' />
          </a>
          <a
            href=''
            className='p-4 rounded-full shadow-lg hover:shadow-overPrimaryLight dark:hover:bg-tertiaryDark cursor-pointer'
          >
            <BiLogoLinkedin size={22} className='fill-overPrimaryLight hover:fill-dark dark:fill-lightOverPrimaryDark dark:hover:fill-darkOverPrimaryDark transioning cursor-pointer' />
          </a>
        </nav>
        <div
          id='center-container'
          className='relative flex justify-center items-center w-4/5 h-4/5 bg-[url("https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cG9ydGZvbGlvfGVufDB8fDB8fHww&auto=format&fit=crop&q=60")] bg-center bg-cover bg-no-repeat z-0 after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:bg-dark after:filter after:opacity-50 after:-z-1'
        >
          <h1 className='text-overDark uppercase text-5xl text-center leading-tight filter drop-shadow-h1-shadow transition-all duration-modeSwitchDuration ease-in-out cursor-default dark:text-lightOverPrimaryDark'>
            Home Page
          </h1>
        </div>
        <nav className="h-1/2 border-l-[1px] border-l-quaternaryLight"></nav>
      </div>
    </>
  );
}

export default Home;
