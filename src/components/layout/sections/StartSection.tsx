import React, { ComponentPropsWithRef } from "react";
import { PageContainer, Text } from "@/components";
import Image from "next/image";

type IProps = ComponentPropsWithRef<"div">;

export const StartSection = ({ ...props }: IProps) => {
  return (
    <PageContainer
      { ...props }
      className={`snap-start ${ props.className }`}
    >
      <div className="flex justify-between items-center flex-wrap gap-12 w-full h-full">
        <div className="flex flex-col gap-6 w-full max-w-[500px]">
          <Text as="h1" 
          className="!text-3xl sm:!text-4xl md:!text-5xl !text-nowrap !animate-fadeInFromTop"
          >
            Hi! I&apos;m <br className="block lg:hidden" />Lucas Andersson
          </Text>
          <Text as='h2' 
          className='!text-2xl sm:!text-3xl !animate-fadeInFromTop'
          >Frontend Developer</Text>
          <p className="text-overPrimaryLight dark:text-quaternaryLight animate-fadeInFromBottom">
            I&apos;m a frontend developer with a passion for creating beautiful and
            functional user interfaces. I specialize in building responsive and
            user-friendly web applications using modern technologies.
          </p>
        </div>
        <div className="flex justify-center items-start sm:items-center min-w-[40vw] h-full">
          <Image src={'/dev.png'} width={500} height={500} className="w-full max-w-[300px] sm:max-w-[400px] object-fit object-center overflow-hidden animate-fadeInFromBottom duration-1000" priority alt="" />
        </div>
      </div>
    </PageContainer>
  );
};

export default StartSection;
