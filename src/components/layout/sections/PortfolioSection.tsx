import { PageContainer } from "@/components";
import { IAsset } from "@/models";
import Image from "next/image";
import React from "react";

export const PortfolioSection = () => {
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
      id='portfolio-container'
      className='flex !justify-center items-center'
    >
      <div id="link-container" className="flex justify-center items-center flex-wrap max-w-[950px] transitioning">
        {data.map(({ id, title, image, link }) => (
          <a key={id} href={link} className="group grid place-items-center relative w-64 h-56 text-light text-2xl before:absolute before:left-0 before:top-0 before:right-0 before:bottom-0 before:bg-dark before:z-1 before:opacity-50 overflow-hidden">
            <Image src={image.url} width={500} height={500} alt="" className="absolute w-96 h-56 group-hover:scale-110 transitioning" />
            <p className="absolute z-1 text-light group-hover:text-3xl transitioning uppercase opacity-0 group-hover:opacity-100">{ title }</p>
          </a>          
        ))}
      </div>
    </PageContainer>
  );
}

export default PortfolioSection;
