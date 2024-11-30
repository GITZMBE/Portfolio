import React from "react";
import { IconType } from "react-icons/lib";
import { Text } from "@/components";

interface IProps { 
  icon: IconType;
  skill: string;
  gradient: string;
};

export const Skill = ({ icon: Icon, skill, gradient }: IProps) => {
  return (
    <div className='w-full max-w-[120px] sm:max-w-[150px] rounded-md overflow-hidden dark:backdrop-brightness-75 shadow-md shadow-accentDark dark:shadow-dark '>
      <Icon size={80} className={`w-full aspect-square !text-accent dark:!text-darkAccent bg-gradient-to-r ${gradient}`} />
      <Text as='h2' className="!text-xl !leading-8 text-center">{skill}</Text>
    </div>
  )
}

export default Skill;
