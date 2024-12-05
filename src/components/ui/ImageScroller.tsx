'use client';

import { IAsset } from '@/models';
import Image from 'next/image';
import React, { ComponentPropsWithoutRef, createRef, useEffect, useMemo, useState } from 'react';
import ImageModal from './modals/ImageModal';

interface IProps extends ComponentPropsWithoutRef<'div'> {
  images: IAsset[];
}

export const ImageScroller = ({ images, ...props }: IProps) => {
  const [imageIndex, setImageIndex] = useState(0);
  const imageRefs = useMemo(() => {
    setImageIndex(0);
    return images.map(img => {
      return { 
        image: img, 
        ref: createRef<HTMLDivElement>() 
      };
    });
  }, [images]);

  useEffect(() => {
    if (typeof window !== 'undefined' && imageRefs.length > 0) {
      imageRefs[imageIndex].ref.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };    
  }, [imageIndex]);

  return (
    <div className={`relative flex items-center w-full max-w-[500px] aspect-video bg-secondary dark:bg-darkSecondary rounded-md overflow-x-auto snap-x snap-mandatory ${props.className}`}>
      {imageIndex > 0 && (
        <button className='sticky left-2 bg-secondary dark:bg-darkSecondary opacity-50 hover:opacity-100 py-4 px-2 rounded-sm' onClick={e => {e.stopPropagation(); setImageIndex(prev => prev > 0 ? prev - 1 : prev);}}>&lt;</button>
      )}
      {imageRefs.map(({ image, ref }, i) => (
        // <ImageModal key={i} src={image.url} >
          <div key={i} ref={ref} className="flex justify-center items-center w-full max-w-[500px] h-full aspect-video snap-start scroll-smooth">
            <Image src={image.url} width={image.width} height={image.height} alt={''} style={{ width: 'auto', height: 'auto'}} className='max-w-full max-h-full object-contain' />
          </div>
        // </ImageModal>
      ))}
      {imageIndex < imageRefs.length - 1 && (
        <button className='sticky right-2 bg-secondary dark:bg-darkSecondary opacity-50 hover:opacity-100 py-4 px-2 rounded-sm' onClick={e => {e.stopPropagation(); setImageIndex(prev => prev < imageRefs.length - 1 ? prev + 1 : prev);}}>&gt;</button>
      )}
    </div>
  )
};

export default ImageScroller;