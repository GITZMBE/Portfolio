import React, { useState, useEffect } from "react";
import DarkModeBtn from "./Mode/mode-btn";

function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const shadowOpacity = Math.min(90, scrollPosition);
  // const bgOpacity = Math.min(253, scrollPosition + 243);

  const headerStyle = {
    // backgroundColor: `rgb(${bgOpacity}, ${bgOpacity}, ${bgOpacity})`,
    boxShadow: "0 0 10px #000000" + shadowOpacity,
  };

  return (
    <header
      style={headerStyle}
      className='fixed top-0 flex justify-between items-center w-full h-headerOffset py-0 px-20 bg-primaryLight transition-all duration-modeSwitchDuration ease-in-out z-1 dark:bg-primaryDark'
    >
      <h1 className='text-dark text-2xl transition-all duration-modeSwitchDuration ease-in-out cursor-default dark:text-lightOverPrimaryDark'>
        Portfolio
      </h1>
      <nav>
        <ul className='flex gap-4 list-none font-semibold'>
          <li>
            <a
              href='#home-container'
              target='_self'
              className='decoration-0 text-overPrimaryLight p-2 transition-all duration-modeSwitchDuration ease-in-out hover:text-dark hover:cursor-pointer dark:text-darkOverPrimaryDark dark:hover:text-lightOverPrimaryDark'
            >
              Home
            </a>
          </li>
          <li>
            <a
              href='#about-container'
              target='_self'
              className='decoration-0 text-overPrimaryLight p-2 transition-all duration-modeSwitchDuration ease-in-out hover:text-dark hover:cursor-pointer dark:text-darkOverPrimaryDark dark:hover:text-lightOverPrimaryDark'
            >
              About
            </a>
          </li>
          <li>
            <a
              href='#skills-container'
              target='_self'
              className='decoration-0 text-overPrimaryLight p-2 transition-all duration-modeSwitchDuration ease-in-out hover:text-dark hover:cursor-pointer dark:text-darkOverPrimaryDark dark:hover:text-lightOverPrimaryDark'
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href='#portfolio-container'
              target='_self'
              className='decoration-0 text-overPrimaryLight p-2 transition-all duration-modeSwitchDuration ease-in-out hover:text-dark hover:cursor-pointer dark:text-darkOverPrimaryDark dark:hover:text-lightOverPrimaryDark'
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href='#contact-container'
              target='_self'
              className='decoration-0 text-overPrimaryLight p-2 transition-all duration-modeSwitchDuration ease-in-out hover:text-dark hover:cursor-pointer dark:text-darkOverPrimaryDark dark:hover:text-lightOverPrimaryDark'
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <DarkModeBtn />
    </header>
  );
}

export default Header;