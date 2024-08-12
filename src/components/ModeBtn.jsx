import { React, useEffect } from "react";
import { useRecoilState } from "recoil";
import { darkModeState } from '../recoil';

function DarkModeBtn() {
  const [isDarkMode, setIsDarkMode] = useRecoilState(darkModeState);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }
  }, [isDarkMode]);

  const handleChange = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button onClick={handleChange} className='relative h-[1.375rem] p-buttonPadding aspect-dubble bg-tertiaryLight rounded-xl cursor-pointer hover:bg-overSecondaryLight dark:bg-darkOverPrimaryDark dark:hover:bg-light'>
      <div className={`absolute top-buttonPadding ${ isDarkMode ? 'left-[1.625rem]' : 'left-buttonPadding' } h-4 aspect-square border-1px border-solid border-black rounded-full bg-dark transition-all duration-modeSwitchDuration ease-in-out`}></div>
    </button>
  );
}

export default DarkModeBtn;