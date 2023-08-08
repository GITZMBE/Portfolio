import React from "react";
import { AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { BiLogoReact, BiLogoLinkedin, BiSolidContact } from "react-icons/bi";
import { RxGithubLogo } from "react-icons/rx";

function ResponsiveNav() {
  const handleClick = () => {
    const navContainer = document.getElementById("nav-container");
    navContainer.classList.contains("hidden")
      ? navContainer.classList.remove("hidden")
      : navContainer.classList.add("hidden");
  };

  return (
    <div
      id='nav-container'
      className='hidden fixed top-0 left-0 w-full h-screen bg-overPrimaryLight'
    >
      <nav className='flex flex-col justify-between gap-4 h-full w-[85%] sm:w-[65%] md:w-[55%] lg:w-[45%] py-8 px-4 bg-primaryLight transitioning dark:bg-primaryDark'>
        <div>
          <div className='flex justify-between items-center'>
            <BiLogoReact
              size={50}
              className='fill-[#61DBFB] dark:fill-[#08B6CE]'
            />
            <a
              href=''
              className='p-4 rounded-full shadow-lg hover:shadow-overPrimaryLight cursor-pointer'
            >
              <AiOutlineClose
                id='close-btn'
                onClick={handleClick}
                size={22}
                className='cursor-pointer fill-overPrimaryLight hover:fill-dark dark:fill-lightOverPrimaryDark dark:hover:fill-darkOverPrimaryDark transioning'
              />
            </a>
          </div>
          <p className='text-xl dark:text-lightOverPrimaryDark px-2 py-4 border-b dark:border-b-darkOverPrimaryDark tracking-widest uppercase cursor-default'>
            Contact for your own build
          </p>
          <ul className='flex flex-col gap-8 text-2xl py-4 list-none font-semibold'>
            <li>
              <a href='#home-container' target='_self'>
                Home
              </a>
            </li>
            <li>
              <a href='#about-container' target='_self'>
                About
              </a>
            </li>
            <li>
              <a href='#skills-container' target='_self'>
                Skills
              </a>
            </li>
            <li>
              <a href='#portfolio-container' target='_self'>
                Portfolio
              </a>
            </li>
            <li>
              <a href='#contact-container' target='_self'>
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className='text-xl text-[#61DBFB] dark:text-[#08B6CE] cursor-default'>
            Let's Connect!
          </p>
          <div className='flex justify-center gap-12 py-4'>
            <a
              href=''
              className='p-4 rounded-full shadow-lg hover:shadow-overPrimaryLight dark:hover:bg-tertiaryDark cursor-pointer'
            >
              <RxGithubLogo size={22} className='' />
            </a>
            <a
              href=''
              className='p-4 rounded-full shadow-lg hover:shadow-overPrimaryLight dark:hover:bg-tertiaryDark cursor-pointer'
            >
              <BiLogoLinkedin size={22} />
            </a>
            <a
              href=''
              className='p-4 rounded-full shadow-lg hover:shadow-overPrimaryLight dark:hover:bg-tertiaryDark cursor-pointer'
            >
              <AiOutlineMail size={22} />
            </a>
            <a
              href=''
              className='p-4 rounded-full shadow-lg hover:shadow-overPrimaryLight dark:hover:bg-tertiaryDark cursor-pointer'
            >
              <BiSolidContact size={22} />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default ResponsiveNav;
