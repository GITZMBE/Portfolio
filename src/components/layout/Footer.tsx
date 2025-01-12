import React from "react";
import { BiLogoLinkedin } from "react-icons/bi";
import { RxGithubLogo } from "react-icons/rx";
import { GrFacebookOption } from "react-icons/gr";
import { IconType } from "react-icons/lib";

export const Footer = () => {
  interface ISocialLink {
    id: string;
    icon: IconType;
    link: string;
    platform: string;
    iconProps: {
      size: number;
      className: string;
    };
    containerProps: {
      className: string;
    };
  }
  const socialLinks: ISocialLink[] = [
    {
      id: '1',
      platform: 'GitHub',
      icon: RxGithubLogo,
      link: 'https://github.com/GITZMBE?tab=repositories',
      iconProps: {
        size: 22,
        className: 'text-overPrimaryLight group-hover:text-dark dark:text-lightOverPrimaryDark dark:group-hover:text-darkOverPrimaryDark transioning cursor-pointer',
      },
      containerProps: {
        className: 'group p-4 rounded-full shadow-lg hover:shadow-overPrimaryLight dark:hover:bg-tertiaryDark cursor-pointer',
      },
    },
    {
      id: '2',
      platform: 'LinkedIn',
      icon: BiLogoLinkedin,
      link: 'https://www.linkedin.com/in/lucas-andersson-861425214/',
      iconProps: {
        size: 22,
        className: 'text-overPrimaryLight group-hover:text-dark dark:text-lightOverPrimaryDark dark:group-hover:text-darkOverPrimaryDark transioning cursor-pointer',
      },
      containerProps: {
        className: 'group p-4 rounded-full shadow-lg hover:shadow-overPrimaryLight dark:hover:bg-tertiaryDark cursor-pointer',
      },
    },
  ];
  
  return (
    <footer className='fixed bottom-0 flex w-full py-12 px-8 lg:px-12 cursor-default'>
      <nav className='flex gap-4'>
        {socialLinks.map(({ id, link, icon: Icon, iconProps, containerProps }) => (
          <a
            key={id}
            href={link}
            className={`group p-4 rounded-full shadow-lg hover:shadow-dark dark:hover:bg-darkTertiary cursor-pointer ${containerProps.className}`}
          >
            <Icon 
              {...iconProps} 
              size={22} 
              className='text-accentDark group-hover:text-dark dark:text-darkAccentDark dark:group-hover:text-darkAccent cursor-pointer' 
            />
          </a>
        ))}
      </nav>
    </footer>
  );
}

export default Footer;
