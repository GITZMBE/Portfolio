import { React, useState, useEffect } from "react";
// import useLocalStorage from 'react';

function DarkModeBtn() {
  const [mode, setMode] = useState("light");
  // const [modeAnimation, setModeAnimation] = useState("");

  // const useDarkMode = () => {
  //   const [enabled, setEnabled] = useLocalStorage('dark-theme');
  //   const isEnabled = typeof enabledState === 'undefined' && enabled;

  //   useEffect(() => {
  //     const className = 'dark';
  //     const bodyClass = window.document.body.classList;

  //     isEnabled ? bodyClass.add(className) : bodyClass.remove(className);
  //   }, [enabled, isEnabled]);
  // };

  useEffect(() => {
    const modeBtnCircle = document.getElementById('mode-btn-circle');
    if (mode === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
      modeBtnCircle.classList.add('animate-toLight');
      modeBtnCircle.classList.remove('animate-toDark');
    } else if (mode === "dark") {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
      modeBtnCircle.classList.add('animate-toDark');
      modeBtnCircle.classList.remove('animate-toLight')
    }
  }, [mode]);

  const handleChange = () => {
    if (document.getElementById("mode").checked) {
      setMode("dark");
    } else if (!document.getElementById("mode").checked) {
      setMode("light");
    }
  };

  return (
    <>
      <label
        htmlFor='mode'
        id='mode-btn'
        className='relative h-5.5 aspect-dubble bg-tertiaryLight transition-all duration-modeSwitchDuration ease-in-out p-buttonPadding rounded-xl cursor-pointer hover:bg-overSecondaryLight dark:bg-darkOverPrimaryDark dark:hover:bg-light'
      >
        <div
          id='mode-btn-circle'
          className='absolute left-buttonPadding h-4 aspect-square border-1px border-solid border-black rounded-full bg-dark'
        ></div>
      </label>
      <input
        onChange={handleChange}
        id='mode'
        type='checkbox'
        className='hidden'
      ></input>
    </>
  );
}

export default DarkModeBtn;