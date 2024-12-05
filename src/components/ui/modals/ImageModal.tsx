'use client';

import React, { ComponentPropsWithoutRef, useState } from 'react';
import { Modal } from '@/components';
import { RxCross2 } from 'react-icons/rx';

interface IProps extends ComponentPropsWithoutRef<'div'> {
  src?: string;
}

export const ImageModal = ({ src, children, ...props }: IProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);

  return (
    <Modal {...props} isOpen={isOpen} closeModal={closeModal} content={
      <div className='group relative w-full h-full flex justify-center items-center' onClick={e => {e.stopPropagation(); setIsOpen(false);}}>
        <img src={ src } className='w-full h-full aspect-[1/2] object-fill rounded-md overflow-hidden' alt="" />
        <button className='absolute top-2 sm:top-4 right-2 sm:right-4 opacity-100 md:opacity-0 md:group-hover:opacity-50 md:hover:!opacity-100 p-1 text-2xl text-primary bg-accent rounded-full transition duration-300' onClick={e => {e.stopPropagation();closeModal()}}>
          <RxCross2 />
        </button>
      </div>
    }>
      <div onClick={() => setIsOpen(true)}>
        { children }
      </div>
    </Modal>
  )
}

export default ImageModal;