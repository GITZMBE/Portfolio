import { PageContainer, Text } from "@/components";
import { IAsset } from "@/models";
import Image from "next/image";
import React, { ComponentPropsWithoutRef } from "react";

type IProps = ComponentPropsWithoutRef<"div">;

export const ProjectsSection = ({ ...props }: IProps) => {
  const data: { id: string; title: string; image: IAsset; link: string }[] = [
    {
      id: '1',
      title: "Netflix",
      image: {
        url: "https://images.unsplash.com/photo-1621955964441-c173e01c135b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV0ZmxpeHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
      },
      link: "https://www.netflix.com/se/",
    },
    {
      id: '2',
      title: "IMDb",
      image: {
        url: "https://static.amazon.jobs/teams/53/thumbnails/IMDb_Jobs_Header_Mobile.jpg?1501027253"
      },
      link: "https://www.imdb.com/",
    },
    {
      id: '3',
      title: "Hulu",
      image: {
        url: "https://images.unsplash.com/photo-1662466984626-d0ac514cf7cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aHVsdXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
      },
      link: "https://www.hulu.com/welcome",
    },
    {
      id: '4',
      title: "Spotify",
      image: {
        url: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BvdGlmeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
      },
      link: "https://open.spotify.com/",
    },
    {
      id: '5',
      title: "Uber",
      image: {
        url: "https://images.unsplash.com/photo-1554260570-83dc2f46ef79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
      },
      link: "https://www.uber.com/se/sv/",
    },
    {
      id: '6',
      title: "Calculator",
      image: {
        url: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FsY3VsYXRvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
      },
      link: "https://www.calculator.net/",
    },
  ];
  
  return (
    <PageContainer
      { ...props }
      id='projects-container'
      className={`flex !justify-center items-center snap-start ${ props.className }`}
    >
      <div id="link-container" className="flex justify-center items-center flex-wrap max-w-[950px]">
        {data.map(({ id, title, image, link }) => (
          <div key={id} style={{ backgroundImage: `url(${image.url})`, backgroundSize: "cover", backgroundPosition: "center" }} className="w-36 md:w-52 aspect-square rounded-md overflow-hidden">
            {/* <Image src={image.url} width={500} height={500} alt="" className="absolute w-96 h-56 group-hover:scale-110" /> */}
            <a href={link} className="flex justify-center items-center w-full h-full hover:backdrop-brightness-50">
              <Text as="h2" className="uppercase !text-2xl sm:!text-2xl md:!text-2xl !text-accent dark:!text-darkAccent !cursor-pointer">{ title }</Text>
            </a>
          </div>
        ))}
      </div>
    </PageContainer>
  );
}

export default ProjectsSection;
