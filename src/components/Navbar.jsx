import React, { useState } from 'react';
import logo from "/images/logo.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-customBlue fixed top-0 w-full z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-2 md:p-4">
        {/* Logo ou titre */}
        <div className="text-white text-xl font-bold">
         <img
          src={logo}
          width={100}
         />
        </div>

        {/* Hamburger icon for small screens */}
        <button
          className="text-white lg:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
          </svg>
        </button>

        {/* Menu items */}
        <ul className={`lg:flex lg:items-center lg:space-x-6 lg:static absolute bg-customBlue w-full left-0 lg:w-auto transition-all duration-300 ease-in-out ${
          isOpen ? 'top-16' : 'top-[-490px]'
        } lg:top-0`}>
          <li>
            <a href="#home" className="block text-gray-300 hover:text-white px-4 py-2 lg:py-0">Accueil</a>
          </li>
          <li>
            <a href="#services" className="block text-gray-300 hover:text-white px-4 py-2 lg:py-0">Services</a>
          </li>
          <li>
            <a href="#about" className="block text-gray-300 hover:text-white px-4 py-2 lg:py-0">À propos</a>
          </li>
          <li>
            <a href="#contact" className="block text-gray-300 hover:text-white px-4 py-2 lg:py-0">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;