import React from "react";

export const Navbar = () => {
  return (
    <nav>
      <ul className='hidden gap-4 list-none font-semibold lg:flex'>
        <li>
          <a href='#home-container' target='_self'>
            Home
          </a>
        </li>
        <li>
          <a href='#about-container' target='_self'>
            About
          </a>
        </li>
        <li>
          <a href='#skills-container' target='_self'>
            Skills
          </a>
        </li>
        <li>
          <a href='#portfolio-container' target='_self'>
            Portfolio
          </a>
        </li>
        <li>
          <a href='#contact-container' target='_self'>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
