import React, { ComponentPropsWithoutRef } from "react";
import { PageContainer, Text } from "@/components";
import Image from "next/image";

type IProps = ComponentPropsWithoutRef<"div">;

export const HomeSection = ({ ...props }: IProps) => {
  return (
    <PageContainer
      { ...props }
      id='home-container'
      className={`snap-start ${ props.className }`}
    >
      <div className="flex justify-between items-center gap-12 w-full h-full">
        <div className="flex flex-col gap-6 w-full">
          <Text as="h1" 
          className="!text-3xl sm:!text-4xl md:!text-5xl !text-nowrap"
          >
            Hi! I&apos;m <br className="block lg:hidden" />Lucas Andersson
          </Text>
          <Text as='h2' 
          className='!text-2xl sm:!text-3xl'
          >Frontend Developer</Text>
          <p className="text-overPrimaryLight dark:text-quaternaryLight">
            I&apos;m a frontend developer with a passion for creating beautiful and
            functional user interfaces. I specialize in building responsive and
            user-friendly web applications using modern technologies.
          </p>
        </div>
        <div className="hidden md:flex justify-center items-center min-w-[40vw] h-full">
          <Image src={'/blob.png'} width={500} height={500} className="w-full object-fit object-center overflow-hidden" priority alt="" />
        </div>
      </div>
    </PageContainer>
  );
};

export default HomeSection;
