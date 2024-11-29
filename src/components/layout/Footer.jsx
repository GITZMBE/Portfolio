import React from "react";
import { BiLogoLinkedin } from "react-icons/bi";
import { RxGithubLogo } from "react-icons/rx";
import { GrFacebookOption } from "react-icons/gr";

export const Footer = () => {
  return (
    <>
      <footer className='fixed bottom-0 flex transitioning w-full py-12 px-8 lg:px-12 transitioning cursor-default'>
        {/* <div id='company-container' className='w-fit'>
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
              href='https://www.linkedin.com/in/lucas-andersson-861425214/'
              className='p-4 rounded-full shadow-lg hover:shadow-overPrimaryLight dark:hover:bg-tertiaryDark cursor-pointer'
            >
              <BiLogoLinkedin size={22} />
            </a>
            <a
              href='#contact-container'
              className='p-4 rounded-full shadow-lg hover:text-[#f16623] dark:hover:text-[#f16623] hover:shadow-overPrimaryLight dark:hover:bg-tertiaryDark cursor-pointer'
            >
              <BiSolidContact size={22} />
            </a>
            <a
              href='https://github.com/GITZMBE'
              className='p-4 rounded-full shadow-lg hover:text-[#620296] dark:hover:text-[#a304fa] hover:shadow-overPrimaryLight dark:hover:bg-tertiaryDark cursor-pointer'
            >
              <RxGithubLogo size={22} />
            </a>
          </div>
        </div> */}
        <nav className='flex gap-4'>
            <a
              href='https://facebook.com'
              className='group p-4 rounded-full shadow-lg hover:shadow-overPrimaryLight dark:hover:bg-tertiaryDark cursor-pointer'
            >
              <GrFacebookOption
                size={22}
                className='text-overPrimaryLight group-hover:text-dark dark:text-lightOverPrimaryDark dark:group-hover:text-darkOverPrimaryDark transioning cursor-pointer'
              />
            </a>
            <a
              href='https://github.com/GITZMBE?tab=repositories'
              className='group p-4 rounded-full shadow-lg hover:shadow-overPrimaryLight dark:hover:bg-tertiaryDark cursor-pointer'
            >
              <RxGithubLogo
                size={22}
                className='text-overPrimaryLight group-hover:text-dark dark:text-lightOverPrimaryDark dark:group-hover:text-darkOverPrimaryDark transioning cursor-pointer'
              />
            </a>
            <a
              href='https://www.linkedin.com/in/lucas-andersson-861425214/'
              className='group p-4 rounded-full shadow-lg hover:shadow-overPrimaryLight dark:hover:bg-tertiaryDark cursor-pointer'
            >
              <BiLogoLinkedin
                size={22}
                className='text-overPrimaryLight group-hover:text-dark dark:text-lightOverPrimaryDark dark:group-hover:text-darkOverPrimaryDark transioning cursor-pointer'
              />
            </a>
          </nav> 
      </footer>
      {/* <CopyrightBar /> */}
    </>
  );
}

export default Footer;
