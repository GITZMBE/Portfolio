import React from "react";
import { PageContainer } from "../components";

export const HomePage = () => {
  return (
    <PageContainer
      id='home-container'
    >
      <div className="flex justify-between items-center gap-12 w-full h-full">
        <div className="flex flex-col gap-6 w-full">
          <h1 className="text-6xl text-dark dark:text-lightOverPrimaryDark">
            Hi! I'm Lucas Andersson
          </h1>
          <span className='text-3xl text-overPrimaryLight dark:text-lightOverPrimaryDark'>Frontend Developer</span>
          <p className="text-overPrimaryLight dark:text-quaternaryLight">
            I'm a frontend developer with a passion for creating beautiful and
            functional user interfaces. I specialize in building responsive and
            user-friendly web applications using modern technologies.
          </p>
        </div>
        <div className="min-w-[40vw] h-full">
          <img src={'/blob.png'} className="w-full h-full object-fit object-center overflow-hidden" alt="" />
        </div>
      </div>
    </PageContainer>
  );
};

export default HomePage;
