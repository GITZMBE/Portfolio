'use client';

import React, { createContext, ReactNode, RefObject, useContext, useRef } from 'react';

const ScrollingContext = createContext<{
  refs: {
    startRef: RefObject<HTMLDivElement>;
    experienceRef: RefObject<HTMLDivElement>;
    skillsRef: RefObject<HTMLDivElement>;
    projectsRef: RefObject<HTMLDivElement>;
    contactRef: RefObject<HTMLDivElement>;
  };
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

  const refs = { startRef, experienceRef, skillsRef, projectsRef, contactRef };

  return <ScrollingContext.Provider value={{ refs }}>{children}</ScrollingContext.Provider>;
};
