import React from "react";

function Home() {
  return (
    <>
      <div
        id='home-container'
        className='flex justify-between items-center w-full h-screen pt-headerOffset bg-secondaryLight transition-all duration-modeSwitchDuration ease-in-out dark:bg-secondaryDark'
      >
        <nav></nav>
        <div
          id='center-container'
          className='relative flex justify-center items-center w-4/5 h-4/5 bg-[url("https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cG9ydGZvbGlvfGVufDB8fDB8fHww&auto=format&fit=crop&q=60")] bg-center bg-cover bg-no-repeat z-0 after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:bg-dark after:filter after:opacity-50 after:-z-1'
        >
          <h1 className='text-overDark uppercase text-5xl text-center leading-tight filter drop-shadow-h1-shadow transition-all duration-modeSwitchDuration ease-in-out cursor-default dark:text-lightOverPrimaryDark'>
            Home Page
          </h1>
        </div>
        <nav></nav>
      </div>
    </>
  );
}

export default Home;
