import React, { useState } from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";
import Massagecard from "../components/Massagecard";
import { Link } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState(null);
  const [massage, setMassage] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault(); //prevent to auto load the page on submit form event

    setEmail(event.target[0].value);
    setMassage(event.target[1].value);
  };
  const handleClick = () => {
    if (email === null) {
      if (massage === null) {
      }
    } else {
      alert("Email: " + email + " Message: " + massage);
    }

    // return(
    //   <Massagecard />
    // )
  };
  return (
    <div className="w-full bg-[#02044A] text-gray-300 py-8 px-2">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8">
        <div>
          <h6 className="text-lg font-bold uppercase py-2 ">Technologies</h6>
          <Link to="/workingon">
            <ul className="mx-2">
              <li className="py-2 hover:bg-slate-700 hover:cursor-pointer">
                Logics
              </li>
              <li className="py-2 hover:bg-slate-700 hover:cursor-pointer">
                Programming
              </li>
              <li className="py-2 hover:bg-slate-700 hover:cursor-pointer">
                Web Design
              </li>
              <li className="py-2 hover:bg-slate-700 hover:cursor-pointer">
                Web Development
              </li>
              <li className="py-2 hover:bg-slate-700 hover:cursor-pointer">
                Front-end
              </li>
              <li className="py-2 hover:bg-slate-700 hover:cursor-pointer">
                Back-end
              </li>
              <li className="py-2 hover:bg-slate-700 hover:cursor-pointer">
                Full-Stacks
              </li>
            </ul>
          </Link>
        </div>
        <div>
          <h6 className="text-lg font-bold uppercase py-2">Healths</h6>
          <Link to="/workingon">
            <ul className="mx-2">
              <li className="py-2 hover:bg-slate-700 hover:cursor-pointer">
                Meditation
              </li>
              <li className="py-2 hover:bg-slate-700 hover:cursor-pointer">
                Happiness
              </li>
              <li className="py-2 hover:bg-slate-700 hover:cursor-pointer">
                Healthy Foods
              </li>
              <li className="py-2 hover:bg-slate-700 hover:cursor-pointer">
                Medical cares
              </li>
              <li className="py-2 hover:bg-slate-700 hover:cursor-pointer">
                Awareness
              </li>
              <li className="py-2 hover:bg-slate-700 hover:cursor-pointer">
                Hospitals
              </li>
            </ul>
          </Link>
        </div>
        <div>
          <h6 className="text-lg font-bold uppercase py-2">Daily News</h6>
          <Link to="/workingon">
            <ul className="mx-2">
              <li className="py-2 hover:bg-slate-700 hover:cursor-pointer">
                Weather
              </li>
              <li className="py-2 hover:bg-slate-700 hover:cursor-pointer">
                Education
              </li>
              <li className="py-2 hover:bg-slate-700 hover:cursor-pointer">
                Hawthorns
              </li>
              <li className="py-2 hover:bg-slate-700 hover:cursor-pointer">
                Political Events
              </li>
              <li className="py-2 hover:bg-slate-700 hover:cursor-pointer">
                Employment
              </li>
            </ul>
          </Link>
        </div>
        <div className="col-span-2  pt-8 lg:pt-0 md:pt-0">
          <p className="font-bold uppercase">Subscribe Our Blog Post</p>
          <p className="py-4">
            To get latest News, Articles directly to your inbox.{" "}
          </p>
          <form
            action=""
            onSubmit={handleSubmit}
            className="flex flex-col lg:flex-col md:flex-col sm:flex-col "
          >
            <input
              type="email"
              className="w-full p-2 mr-4 rounded-md mb-2 text-black"
              placeholder="Enter Your Email..."
            />
            <textarea
              type="text"
              className="w-full p-2 mr-4 items-center rounded-md mb-2 text-black"
              placeholder="Enter Your Message..."
              rows={3}
            />
            <button
              onClick={handleClick}
              className="border-none p-2 mb-2 w-44 lg:w-full md:w-full bg-green-600 hover:bg-green-500"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="flex flex-col max-w-[1240px] px-2 py-4 m-auto justify-between sm:flex-row text-center text-gray-500 items-center">
        <p>2024, Pradeep Sharma LLC, All rights reserved </p>
        <div className="flex justify-between sm:w-[300px] pt-4 text-2xl gap-2">
          <div className="hover:cursor-pointer">
            <FaLinkedin />
          </div>
          <div className="hover:cursor-pointer">
            <FaGithub />
          </div>
          <div className="hover:cursor-pointer">
            <FaTwitter />
          </div>
          <div className="hover:cursor-pointer">
            <FaInstagram />
          </div>
          <div className="hover:cursor-pointer">
            <FaFacebook />
          </div>
          <div className="hover:cursor-pointer">
            <FaYoutube />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
