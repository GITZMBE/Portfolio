import { PageContainer } from "../components";
import React from "react";

export const AboutPage = () => {
  const data = [
    {
      title: "Frontend",
      description: "I'm a frontend developer with a passion for creating beautiful and functional user interfaces. I specialize in building responsive and user-friendly web applications using modern technologies.",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    {
      title: "Backend",
      description: "I'm a backend developer with a passion for creating efficient and scalable server-side solutions. I specialize in building robust and secure APIs using modern technologies.",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    {
      title: "Fullstack",
      description: "I'm a fullstack developer with a passion for creating end-to-end solutions. I specialize in building full-stack web applications using modern technologies.",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
  ]
  return (
    <>
      <PageContainer
        id='about-container'
      >
        <h2
          id='about-title'
          className='text-center py-4 mt-[10vh] sm:text-start text-3xl font-medium uppercase transitioning cursor-default dark:text-light'
        >Experience
        </h2>
        <div
          id='about-grid'
          className='flex flex-col gap-6 w-[60vw]'
        >
          {data.map((item, i) => i % 2 === 0 ? (
            <div className='flex gap-4 h-[150px] transitioning'>
              <img
                src={item.image}
                alt=''
                className='md:w-2/5 w-full h-1/2 md:h-full object-cover object-center'
              />
              <div id='grid-item' className='flex flex-col w-full h-fit md:px-4'>
                <h3 id='item-title' className='text-2xl font-bold transitioning dark:text-light py-2'>
                  {item.title}
                </h3>
                <p className='py-2 text-xl font-medium transitioning dark:text-light max-h-[180px] overflow-hidden'>
                  {item.description}
                </p>
              </div>
            </div>
          ) : (
            <div className='flex gap-4 h-[150px] transitioning'>
              <div id='grid-item' className='flex flex-col w-full h-fit md:px-4'>
                <h3 id='item-title' className='text-2xl font-bold transitioning dark:text-light py-2'>
                  {item.title}
                </h3>
                <p className='py-2 text-xl font-medium transitioning dark:text-light max-h-[180px] overflow-hidden'>
                  {item.description}
                </p>
              </div>
              <img
                src={item.image}
                alt=''
                className='md:w-2/5 w-full h-1/2 md:h-full object-cover object-center'
              />
            </div>
          ))}
        </div>
      </PageContainer>
    </>
  );
}

export default AboutPage;
