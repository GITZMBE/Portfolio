'use client';

import React from 'react';
import { ToastContainer, ToastContainerProps } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Toaster = ({ position = "top-center", autoClose = 3000, ...props }: ToastContainerProps) => {
  return (
    <ToastContainer position={position} theme={'light'} autoClose={autoClose} {...props} />
  )
}

export default Toaster;