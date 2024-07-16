import React, { useState } from "react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="">
      <header className="p-4 mx-auto container">
        <nav className="flex md:justify-center justify-end items-center">
          {/* Menu button (visible on small screens) */}
          <button
            className="md:hidden text-white hover:text-gray-300"
            onClick={toggleMenu}
          >
            Menu
          </button>
          {/* Navigation links (hidden on small screens, visible on medium and larger screens) */}
          <div className="hidden md:flex space-x-10 ">
            <a href="#home" className="text-white hover:text-gray-300">
              Home
            </a>
            <a href="#projects" className="text-white hover:text-gray-300">
              Projects
            </a>
            <a href="#about" className="text-white hover:text-gray-300">
              About
            </a>
          </div>
        </nav>
        {/* Dropdown menu (visible when menu button is clicked) */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-col space-y-2 bg-gray-900 rounded-lg text-center p-2">
            <a href="#home" className="text-white hover:text-gray-300">
              Home
            </a>
            <a href="#projects" className="text-white hover:text-gray-300">
              Projects
            </a>
            <a href="#about" className="text-white hover:text-gray-300">
              About
            </a>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
