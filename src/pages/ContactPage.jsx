import React from "react";

export const ContactPage = () => {
  return (
    <div
      id='contact-container'
      className='dark:bg-secondaryDark grid h-screen w-full place-items-center bg-secondaryLight pt-headerOffset transition-all duration-modeSwitchDuration ease-in-out'
    >
      <a href="mailto:lucasfilip@hotmail.se" className="text-4xl sm:text-6xl text-center text-overPrimaryLight hover:text-dark dark:text-overPrimaryDark dark:hover:text-lightOverPrimaryDark font-semibold leading-[50px] sm:leading-[75px]">
        Contact Me Here!!!
      </a>      
    </div>
  );
}

export default ContactPage;