import { PageContainer } from "../components";
import React from "react";

export const ContactPage = () => {
  return (
    <PageContainer
      id='contact-container'
    >
      <a href="mailto:lucasfilip@hotmail.se" className="text-4xl sm:text-6xl text-center text-overPrimaryLight hover:text-dark dark:text-overPrimaryDark dark:hover:text-lightOverPrimaryDark font-semibold leading-[50px] sm:leading-[75px]">
        Contact Me Here!!!
      </a>      
    </PageContainer>
  );
}

export default ContactPage;