import React, { useEffect } from "react";

export const PortfolioPage = () => {
  useEffect(() => {
    const handleScroll = () => {
      const linkContainer = document.getElementById('link-container');
      const linkRect = linkContainer.getBoundingClientRect();
      const visible = linkRect.top - window.innerHeight + linkRect.height / 2 < 0;
      visible && linkContainer.classList.add('animate-show');
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      id='portfolio-container'
      className='relative grid place-items-center w-full min-h-screen py-headerOffset px-4 md:px-12 bg-tertiaryLight transitioning dark:bg-tertiaryDark'
    >
      <h2 className="absolute top-16 left-4 sm:left-12 text-dark dark:text-light text-3xl font-semibold transitioning">Repositories</h2>
      <div id="link-container" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-auto justify-center transitioning opacity-0">
        <a href="https://www.netflix.com/se/" className="group grid place-items-center relative w-64 h-56 text-light text-2xl before:absolute before:left-0 before:top-0 before:right-0 before:bottom-0 before:bg-dark before:z-1 before:opacity-50 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1621955964441-c173e01c135b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV0ZmxpeHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className="absolute w-96 h-56 group-hover:scale-110 transitioning" />
          <p className="absolute z-1 text-light group-hover:text-3xl transitioning uppercase opacity-0 group-hover:opacity-100">Netflix</p>
        </a>
        <a href="https://www.imdb.com/" className="group grid place-items-center relative w-64 h-56 text-light text-2xl before:absolute before:left-0 before:top-0 before:right-0 before:bottom-0 before:bg-dark before:z-1 before:opacity-50 overflow-hidden">
          <img src="https://static.amazon.jobs/teams/53/thumbnails/IMDb_Jobs_Header_Mobile.jpg?1501027253" alt="" className="absolute w-96 h-56 group-hover:scale-110 transitioning" />
          <p className="absolute z-1 text-light group-hover:text-3xl transitioning uppercase opacity-0 group-hover:opacity-100">IMDb</p>
        </a>
        <a href="https://www.hulu.com/welcome" className="group grid place-items-center relative w-64 h-56 text-light text-2xl before:absolute before:left-0 before:top-0 before:right-0 before:bottom-0 before:bg-dark before:z-1 before:opacity-50 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1662466984626-d0ac514cf7cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aHVsdXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className="absolute w-96 h-56 group-hover:scale-110 transitioning" />
          <p className="absolute z-1 text-light group-hover:text-3xl transitioning uppercase opacity-0 group-hover:opacity-100">Hulu</p>
        </a>
        <a href="https://open.spotify.com/" className="group grid place-items-center relative w-64 h-56 text-light text-2xl before:absolute before:left-0 before:top-0 before:right-0 before:bottom-0 before:bg-dark before:z-1 before:opacity-50 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1614680376593-902f74cf0d41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BvdGlmeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className="absolute w-96 h-56 group-hover:scale-110 transitioning" />
          <p className="absolute z-1 text-light group-hover:text-3xl transitioning uppercase opacity-0 group-hover:opacity-100">Spotify</p>
        </a>
        <a href="https://www.uber.com/se/sv/" className="group grid place-items-center relative w-64 h-56 text-light text-2xl before:absolute before:left-0 before:top-0 before:right-0 before:bottom-0 before:bg-dark before:z-1 before:opacity-50 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1554260570-83dc2f46ef79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="" className="absolute w-96 h-56 group-hover:scale-110 transitioning" />
          <p className="absolute z-1 text-light group-hover:text-3xl transitioning uppercase opacity-0 group-hover:opacity-100">Uber</p>
        </a>
        <a href="https://www.calculator.net/" className="group grid place-items-center relative w-64 h-56 text-light text-2xl before:absolute before:left-0 before:top-0 before:right-0 before:bottom-0 before:bg-dark before:z-1 before:opacity-50 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FsY3VsYXRvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className="absolute w-96 h-56 group-hover:scale-110 transitioning" />
          <p className="absolute z-1 text-light group-hover:text-3xl transitioning uppercase opacity-0 group-hover:opacity-100">Calculator</p>
        </a>
      </div>
    </div>
  );
}

export default PortfolioPage;
