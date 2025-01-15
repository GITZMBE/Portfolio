'use client';

import React, { createContext, ReactNode, RefObject, useContext, useRef, useState } from 'react';

interface ILink {
  label: string;
  ref: React.RefObject<HTMLDivElement>;
};

const ScrollingContext = createContext<{
  refs: {
    startRef: RefObject<HTMLDivElement>;
    experienceRef: RefObject<HTMLDivElement>;
    skillsRef: RefObject<HTMLDivElement>;
    projectsRef: RefObject<HTMLDivElement>;
    contactRef: RefObject<HTMLDivElement>;
  };
  links: ILink[];
  currentPage: ILink;
  handleChangePage: (link: ILink) => void;
} | null>(null);

export const useScrollingContext = () => {
  const context = useContext(ScrollingContext);
  if (!context) {
    throw new Error('useScrollingContext must be used within ScrollingProvider');
  }
  return context;
};

export const ScrollingProvider = ({ children }: { children: ReactNode }) => {
  const startRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const links: ILink[] = [
    { label: "Home", ref: startRef },
    { label: "Experience", ref: experienceRef },
    { label: "Skills", ref: skillsRef },
    { label: "Projects", ref: projectsRef },
    { label: "Contact", ref: contactRef },
  ];

  const [currentPage, setCurrentPage] = useState<ILink>(links[0]);

  const refs = { startRef, experienceRef, skillsRef, projectsRef, contactRef };

  const handleChangePage = (link: ILink) => {
    link.ref.current?.scrollIntoView({ behavior: "smooth" });
    setCurrentPage(link);
  };

  return <ScrollingContext.Provider value={{ refs, links, currentPage, handleChangePage }}>{children}</ScrollingContext.Provider>;
};
