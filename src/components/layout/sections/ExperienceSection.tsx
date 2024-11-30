import { PageContainer, Text } from "@/components";
import Image from "next/image";
import React, { ComponentPropsWithoutRef } from "react";

type IProps = ComponentPropsWithoutRef<"div">;

export const ExperienceSection = ({ ...props }: IProps) => {
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
        { ...props }
        id='experience-container'
        className={`snap-start ${ props.className }`}
      >
        <div
          className='flex flex-col gap-6 w-full'
        >
          {data.map((item, i) => i % 2 === 0 ? (
            <div key={i} className='flex flex-wrap md:flex-nowrap gap-4'>
              <Image
                src={item.image}
                width={500}
                height={500}
                alt=''
                className='hidden sm:block w-full md:w-[300px] max-h-[150px] object-cover object-center overflow-hidden'
              />
              <div id='grid-item' className='relative flex flex-col w-full max-h-[150px] md:px-4 overflow-x-hidden after:content-[""] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-16 after:bg-gradient-to-b after:from-transparent after:to-primaryLight dark:after:to-darkPrimary'>
                <Text as="h3">
                  {item.title}
                </Text>
                <Text as="p" className='py-2 font-medium'>
                  {item.description}
                </Text>
              </div>
            </div>
          ) : (
            <div key={i}>
              <div className='hidden md:flex flex-wrap md:flex-nowrap gap-4'>
                <div id='grid-item' className='relative flex flex-col w-full max-h-[150px] overflow-x-hidden after:content-[""] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-16 after:bg-gradient-to-b after:from-transparent after:to-primaryLight dark:after:to-darkPrimary'>
                  <Text as='h3'>
                    {item.title}
                  </Text>
                  <Text as="p" className='py-2 font-medium'>
                    {item.description}
                  </Text>
                </div>
                <Image
                  src={item.image}
                  width={500}
                  height={500}
                  alt=''
                  className='w-full md:w-[300px] max-h-[150px] object-cover object-center overflow-hidden'
                />
              </div>
              <div className='flex md:hidden flex-wrap md:flex-nowrap gap-4'>
                <Image
                  src={item.image}
                  width={500}
                  height={500}
                  alt=''
                  className='hidden sm:block w-full md:w-[300px] max-h-[150px] object-cover object-center overflow-hidden'
                />
                <div id='grid-item' className='relative flex flex-col w-full max-h-[150px] md:px-4 overflow-x-hidden after:content-[""] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-16 after:bg-gradient-to-b after:from-transparent after:to-primaryLight dark:after:to-darkPrimary'>
                  <Text as="h3">
                    {item.title}
                  </Text>
                  <Text as="p" className='py-2 font-medium'>
                    {item.description}
                  </Text>
                </div>
              </div>
            </div>
          ))}
        </div>
      </PageContainer>
    </>
  );
}

export default ExperienceSection;
