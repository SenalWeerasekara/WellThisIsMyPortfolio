import React, { useState } from "react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-blue-800 ">
      <header className="bg-blue-600 p-4 mx-auto container">
        <nav className="flex md:justify-center justify-end items-center">
          {/* Menu button (visible on small screens) */}
          <button
            className="md:hidden text-white hover:text-gray-300"
            onClick={toggleMenu}
          >
            Menu
          </button>
          {/* Navigation links (hidden on small screens, visible on medium and larger screens) */}
          <div className="hidden md:flex space-x-10 bg-red-400">
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
          <div className="md:hidden flex flex-col space-y-2 bg-red-400 p-2">
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
