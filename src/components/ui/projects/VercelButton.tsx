'use client';

import { useTheme } from '@/hooks';
import Image from 'next/image';
import Link from 'next/link';
import React, { ComponentPropsWithoutRef } from 'react';

interface IProps extends ComponentPropsWithoutRef<'a'> {
  href?: string;
};

export const VercelButton = ({ ...props }: IProps) => {
  const { isDarkMode } = useTheme();

  return (
    <Link {...props} href={props.href || ''} className='p-2 rounded-full bg-secondary dark:bg-darkSecondary hover:bg-primary dark:hover:bg-darkPrimary shadow-md hover:shadow-dark'>
      <Image src={ isDarkMode ? 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg' : 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg' } alt={''} width={24} height={24} className='min-w-6 min-h-6 cursor-pointer' />
    </Link>
  )
};

export default VercelButton;