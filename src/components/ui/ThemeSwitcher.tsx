'use client';

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className='relative h-[22px] p-2 aspect-[2/1] bg-secondary hover:bg-tertiary rounded-xl cursor-pointer hover:bg-secondaryLight dark:bg-darkSecondary dark:hover:bg-darkTertiary'>
      <div className={`absolute top-[3px] ${ theme === 'dark' ? 'left-[26px]' : 'left-[3px]' } w-4 aspect-square border-1px border-solid border-black rounded-full bg-dark transition-all duration-300 ease-in-out`}></div>
    </button>
  );
}

export default ThemeSwitcher;