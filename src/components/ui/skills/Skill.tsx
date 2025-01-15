import React from "react";
import { Text } from "@/components";
import { ISkill } from "@/models";
import Image from "next/image";

interface IProps { 
  skill: ISkill;
};

export const Skill = ({ skill }: IProps) => {
  const { title, icon, iconUrl } = skill;

  return (
    <div className='w-full sm:max-w-[150px] flex flex-col gap-2 rounded-md overflow-hidden dark:backdrop-brightness-75 shadow-md shadow-accentDark dark:shadow-dark py-2 px-4'>
      <div className="flex items-center justify-center">
        <div className="w-16 h-16 flex items-center justify-center">
          {icon ? (
            <Image src={icon.url} alt={title} width={icon.width} height={icon.height} className="w-full object-cover object-center" />
          ) : iconUrl ? (
            <Image src={iconUrl} alt={title} width={24} height={24} className="w-full object-cover object-center" />
          ) : (<></>)}
        </div>
      
      </div>
      <Text as='h2' className="!text-xl !leading-8 text-center !text-ellipsis !max-w-full !overflow-x-hidden !text-nowrap">{title}</Text>
    </div>
  )
}

export default Skill;
