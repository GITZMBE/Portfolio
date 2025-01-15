import React, { ComponentPropsWithoutRef } from 'react'
import Text from '../Text';
import { IProject } from '@/models';

interface IProps extends ComponentPropsWithoutRef<"button"> {
  project: IProject;
};

export const ProjectButton = ({ project, ...props }: IProps) => {
  return (
    <button {...props} className="group relative  w-36 md:w-52 aspect-square bg-secondary dark:bg-darkSecondary rounded-md overflow-hidden">
      <div style={{ backgroundImage: project.banner ? `url('${project.banner?.url}')` : '', backgroundSize: 'cover', backgroundPosition: 'center' }} className="w-full h-full opacity-0 group-hover:opacity-100 transition duration-500"></div>
      <div className="absolute top-0 left-0 flex justify-center items-center w-full h-full p-2 group-hover:opacity-0 transition duration-500">
        <Text as="h2" className="uppercase !text-center !text-2xl sm:!text-2xl md:!text-2xl !text-accent dark:!text-darkAccent !cursor-pointer">{ project.title }</Text>
      </div>
    </button>
  )
};

export default ProjectButton;