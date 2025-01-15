import getExperiences from "@/actions/getExperiences";
import { PageContainer, Text, Timeliner } from "@/components";
import { IExperience } from "@/models";
import React, { ComponentPropsWithRef } from "react";

interface IProps extends ComponentPropsWithRef<"div"> {
  experiences: IExperience[];
};

export const ExperienceSection = ({ experiences, ...props }: IProps) => {
  return (
    <>
      <PageContainer
        { ...props }
        className={`snap-start ${ props.className }`}
      >
        <div
          className='flex flex-col gap-6 w-full max-h-full overflow-y-auto'
        >
          <Timeliner experiences={experiences} />
        </div>
      </PageContainer>
    </>
  );
}

export default ExperienceSection;
