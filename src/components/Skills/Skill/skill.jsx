import React from "react";

function Skill({ Icon, skill, color }) {
  return (
    // <div className='w-fit bg-white p-4 text-center text-dark transitioning dark:bg-dark dark:text-lightOverPrimaryDark rounded-lg'>
    //   <Icon size={80} className={color} />
    //   <p className="">{skill}</p>
    // </div>

    <div className='relative w-fit min-w-[125px] sm:min-w-[150px] sm:min-h-[150px] lg:min-w-[200px] lg:min-h-[200px] p-4 text-center text-dark transitioning rounded-xl overflow-hidden hover:scale-105 cursor-pointer'>
      <div className="absolute top-0 left-0 w-full h-full bg-slate-100 dark:bg-slate-950 z-0 filter blur-lg backdrop-blur-lg opacity-30 dark:opacity-50 transitioning"></div>
      <div className='flex flex-col h-full items-center justify-between gap-2 z-10 relative rounded-lg'>
        <Icon size={80} className={color} />
        <p className="lg:text-xl font-semibold text-dark dark:text-light transitioning">{skill}</p>
      </div>
    </div>
  )
}

export default Skill;
