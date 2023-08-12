import React from "react";
import CopyRight from "./CopyRight/copy-right";
import { BiLogoLinkedin, BiSolidContact, BiLogoFacebook } from "react-icons/bi";
import { RxGithubLogo } from "react-icons/rx";

function Footer() {
  return (
    <>
      <footer className='grid grid-cols-1 grid-rows-4 gap-4 justify-between md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 transitioning w-full py-12 px-8 lg:px-12 bg-primaryLight transitioning dark:text-darkOverPrimaryDark dark:bg-primaryDark cursor-default'>
        <div id='company-container' className='w-fit'>
          <h2 className='w-12 py-2 font-bold uppercase text-dark border-b-2 border-b-[#61DBFB] dark:border-b-[#08B6CE] dark:text-lightOverPrimaryDark transitioning'>
            Company
          </h2>
          <ul className='flex flex-col leading-8 py-2 font-bold'>
            <li>
              <a href='#home'>About</a>
            </li>
            <li>
              <a href='#home'>Services</a>
            </li>
            <li>
              <a href='#home'>Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div id='help-container' className='w-fit'>
          <h2 className='w-12 py-2 font-bold uppercase text-dark border-b-2 border-b-[#61DBFB] dark:border-b-[#08B6CE] dark:text-lightOverPrimaryDark transitioning'>
            Get&nbsp;Help
          </h2>
          <ul className='flex flex-col leading-8 py-2 font-bold'>
            <li>
              <a href='#home'>FAQ</a>
            </li>
            <li>
              <a href='#home'>FAQ</a>
            </li>
            <li>
              <a href='#home'>FAQ</a>
            </li>
          </ul>
        </div>
        <div id='shop-container' className='w-fit'>
          <h2 className='w-12 py-2 font-bold uppercase text-dark border-b-2 border-b-[#61DBFB] dark:border-b-[#08B6CE] dark:text-lightOverPrimaryDark transitioning'>
            Shop
          </h2>
          <ul className='flex flex-col leading-8 py-2 font-bold'>
            <li>
              <a href='#home'>View</a>
            </li>
            <li>
              <a href='#home'>Shop</a>
            </li>
          </ul>
        </div>
        <div id='follow-container' className='w-full'>
          <h2 className='w-12 py-2 font-bold uppercase text-dark border-b-2 border-b-[#61DBFB] dark:border-b-[#08B6CE] dark:text-lightOverPrimaryDark transitioning'>
            Follow&nbsp;Me
          </h2>
          <div className='w-full h-full md:w-fit md:h-fit flex flex-wrap justify-center items-center lg:justify-start gap-4 py-2'>
            <a
              href='https://facebook.com'
              className='group p-4 rounded-full shadow-lg hover:text-[#3b5998] dark:hover:text-[#3b5998] hover:shadow-overPrimaryLight dark:hover:bg-tertiaryDark cursor-pointer'
            >
              <BiLogoFacebook size={22} />
            </a>
            <a
              href='https://facebook.com'
              className='p-4 rounded-full shadow-lg hover:shadow-overPrimaryLight dark:hover:bg-tertiaryDark cursor-pointer'
            >
              <BiLogoLinkedin size={22} />
            </a>
            <a
              href='https://facebook.com'
              className='p-4 rounded-full shadow-lg hover:text-[#f16623] dark:hover:text-[#f16623] hover:shadow-overPrimaryLight dark:hover:bg-tertiaryDark cursor-pointer'
            >
              <BiSolidContact size={22} />
            </a>
            <a
              href='https://facebook.com'
              className='p-4 rounded-full shadow-lg hover:text-[#620296] dark:hover:text-[#a304fa] hover:shadow-overPrimaryLight dark:hover:bg-tertiaryDark cursor-pointer'
            >
              <RxGithubLogo size={22} />
            </a>
          </div>
        </div>
      </footer>
      <CopyRight />
    </>
  );
}

export default Footer;
