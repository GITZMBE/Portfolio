'use client';

import { useTheme } from 'next-themes';
import React from 'react';
import { ToastContainer, ToastContainerProps } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Toaster = ({ position = 'top-center', autoClose = 3000, ...props }: ToastContainerProps) => {
  const { theme } = useTheme();
  
  return (
    <ToastContainer position={position} theme={theme} autoClose={autoClose} {...props} />
  )
}

export default Toaster;