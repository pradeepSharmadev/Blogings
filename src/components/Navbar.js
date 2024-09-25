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
              <li>Home</li>
            </Link>
            <Link to="/">
              <li>About</li>
            </Link>
            <Link to="/">
              <li>Support</li>
            </Link>
            <Link to="/">
              <li>Portfolio</li>
            </Link>
            <Link to="/">
              <li>Pricing</li>
            </Link>
          </ul>
        </div>
        <div className="hidden md:flex sm:mr-10 md:mr-10">
          <button className="border-none bg-transparent text-black mr-4">
            Login
          </button>
          <button className="px-8 py-3">Sign Up</button>
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
          <li>Home</li>
        </Link>
        <Link to="/">
          <li>About</li>
        </Link>
        <Link to="/">
          <li>Support</li>
        </Link>
        <Link to="/">
          <li>Portfolio</li>
        </Link>
        <Link to="/">
          <li>Pricing</li>
        </Link>
        <div className="flex flex-col my-4 ">
          <button className="bg-transparent text-black mr-2 mb-4 py-3 px-8 ">
            Login
          </button>
          <button className="px-8 py-3">Sign Up</button>
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
