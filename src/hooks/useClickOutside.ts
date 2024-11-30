'use client';

import { useEffect, useRef } from 'react';

export const useClickOutside = <T extends HTMLElement>(close: () => void) => {
  const clickOutsideRef = useRef<T>(null);

  useEffect(() => {
    const handleClickOutside = (e: globalThis.MouseEvent) => {
      if (clickOutsideRef.current && !clickOutsideRef.current.contains(e.target as Node)) {
        close();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [close]);

  return { clickOutsideRef };
}

export default useClickOutside;