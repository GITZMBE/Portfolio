import React from "react";

function CopyRight() {
  return (
    <div>
      <hr className="bg-dark mx-8 lg:mx-12" />
      <p
        id='copyright-text'
        className='transitioning bg-primaryLight dark:bg-primaryDark w-full py-2 text-center text-quaternaryLight dark:text-lightOverPrimaryDark cursor-default'
      >
        @LucasAndersson
      </p>      
    </div>

  );
}

export default CopyRight;
