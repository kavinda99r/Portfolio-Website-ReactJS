import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-scroll";

const Header = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <div
      className={`px-10 md:px-20 lg:px-24 py-10 flex items-center justify-between h-16 fixed w-full z-10 ${
        isDarkMode ? "bg-[#161616]" : "bg-white"
      }`}
    >
      <Link
        to="home"
        smooth={true}
        duration={500}
        offset={-80}
        className="cursor-pointer text-xl font-bold"
      >
        LOGO
      </Link>
      <div className="flex items-center gap-4 md:gap-5 lg:gap-6">
        <Link
          to="home"
          smooth={true}
          duration={500}
          offset={-80}
          className={`cursor-pointer font-semibold ${
            isDarkMode ? "hover:text-[#adadad]" : "hover:text-[#656565]"
          }`}
        >
          About
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          offset={-80}
          className={`cursor-pointer font-semibold ${
            isDarkMode ? "hover:text-[#adadad]" : "hover:text-[#656565]"
          }`}
        >
          Portfolio
        </Link>

        <button
          className={`px-3 py-2 rounded-[4px] flex items-center space-x-2 transition-all duration-200 ease-out ${
            isDarkMode
              ? "border-[1px] border-white hover:bg-white hover:text-[#111111]"
              : "border-[1px] border-[#111111] hover:bg-[#111111] hover:text-white"
          }`}
          onClick={toggleDarkMode}
        >
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </div>
  );
};

export default Header;
