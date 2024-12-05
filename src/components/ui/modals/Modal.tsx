'use client';

import { useClickOutside } from '@/hooks';
import React, { ComponentPropsWithoutRef, ReactNode } from 'react';

interface IProps extends ComponentPropsWithoutRef<'div'> {
  isOpen: boolean;
  closeModal: () => void;
  content?: ReactNode;
};

export const Modal = ({ isOpen, closeModal, content, children, ...props }: IProps) => {
  const { clickOutsideRef } = useClickOutside<HTMLDivElement>(closeModal);

  return (
    <div className={`${props.className}`}>
      { children }
      {isOpen && (
        <div {...props} ref={clickOutsideRef} className={`fixed top-0 left-0 w-full h-full flex justify-center items-center backdrop-brightness-50 z-[100] py-12 md:py-24 px-4 sm:px-8 md:px-12`} onClick={closeModal}>
          { content }
        </div>
      )}
    </div>
  )
};

export default Modal;