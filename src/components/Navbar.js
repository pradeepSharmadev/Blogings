import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import menu from "../assets/menu.png";
import closed from "../assets/closed.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [toggle, setToggle] = useState(true);
  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div className="w-full h-[80px] z-10 bg-white fixed drop-shadow-lg top-0">
      <div className="flex justify-around items-center w-full h-full md:max-w-[1240px] m-auto">
        <Link to="/">
          <div className="flex items-center">
            <img
              src={logo}
              alt="logo"
              className="sm:ml-10 ss:ml-10 md:ml-3 opacity-[55%] w-full h-[64px]"
            />
          </div>
        </Link>
        <div className="flex items-center ">
          <ul className="hidden md:flex">
            <Link to="/">
              <li className="hover:text-blue-900">Home</li>
            </Link>
            <Link to="/workingon">
              <li className="hover:text-blue-900">About</li>
            </Link>
            <Link to="/workingon">
              <li className="hover:text-blue-900">Support</li>
            </Link>
            <Link to="/workingon">
              <li className="hover:text-blue-900">Portfolio</li>
            </Link>
            <Link to="/workingon">
              <li className="hover:text-blue-900">Pricing</li>
            </Link>
          </ul>
        </div>
        <div className="hidden md:flex sm:mr-10 md:mr-10">
          <Link to="/workingon">
            <button className="border-none bg-transparent text-black mr-4">
              Login
            </button>
            <button className="px-8 py-3 hover:bg-blue-800">Sign Up</button>
          </Link>
        </div>
        <div className="md:hidden" onClick={handleClick}>
          <img
            src={!toggle ? closed : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain mr-10 "
          />
        </div>
      </div>
      <ul
        className={
          !toggle ? "absolute bg-white w-full px-8 md:hidden" : "hidden"
        }
      >
        <Link to="/">
          <li className="hover:text-blue-900">Home</li>
        </Link>
        <Link to="/workingon">
          <li className="hover:text-blue-900">About</li>
        </Link>
        <Link to="/workingon">
          <li className="hover:text-blue-900">Support</li>
        </Link>
        <Link to="/workingon">
          <li className="hover:text-blue-900">Portfolio</li>
        </Link>
        <Link to="/workingon">
          <li className="hover:text-blue-900">Pricing</li>
        </Link>
        <div className="gird grid-rows-2 my-4 ">
          <Link to="/workingon">
            <button className="bg-transparent w-full text-black mr-2 mb-4 py-3 px-8 ">
              Login
            </button>
            <button className="px-8 py-3 w-full hover:bg-blue-800">Sign Up</button>
          </Link>
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
