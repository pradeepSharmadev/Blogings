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
      alert("Email: " + email + " Massage: " + massage);
    }

    // return(
    //   <Massagecard />
    // )
  };
  return (
    <div className="w-full bg-[#02044A] text-gray-300 py-8 px-2">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8">
        <div>
          <h6 className="text-lg font-bold uppercase py-2">Technologies</h6>
          <ul>
            <li className="py-2">Logics</li>
            <li className="py-2">Programming</li>
            <li className="py-2">Web Design</li>
            <li className="py-2">Web Development</li>
            <li className="py-2">Front-end</li>
            <li className="py-2">Back-end</li>
            <li className="py-2">Full-Stacks</li>
          </ul>
        </div>
        <div>
          <h6 className="text-lg font-bold uppercase py-2">Healths</h6>
          <ul>
            <li className="py-2">Meditation</li>
            <li className="py-2">Happiness</li>
            <li className="py-2">Healthy Foods</li>
            <li className="py-2">Medical cares</li>
            <li className="py-2">Awareness</li>
            <li className="py-2">Hospitals</li>
          </ul>
        </div>
        <div>
          <h6 className="text-lg font-bold uppercase py-2">Daily News</h6>
          <ul>
            <li className="py-2">Weather</li>
            <li className="py-2">Education</li>
            <li className="py-2">Hawthorns</li>
            <li className="py-2">Political Events</li>
            <li className="py-2">Employment</li>
          </ul>
        </div>
        <div className="col-span-2 pt-2  md:pt-4">
          <p className="font-bold uppercase">Subscribe Our Blog Post</p>
          <p className="py-4">
            To get latest News, Articles directly to your inbox.{" "}
          </p>
          <form
            action=""
            onSubmit={handleSubmit}
            className="flex flex-row sm:flex-col"
          >
            <input
              type="email"
              className="w-full p-2 mr-4 rounded-md mb-2 text-black"
              placeholder="Enter Your Email..."
            />
            <textarea
              type="text"
              className="w-full p-2 mr-4 rounded-md mb-2 text-black"
              placeholder="Enter Your Massage..."
              rows={3}
            />
            <button
              onClick={handleClick}
              className="border-none p-2 mb-2 bg-green-600"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="flex flex-col max-w-[1240px] px-2 py-4 m-auto justify-between sm:flex-row text-center text-gray-500 items-center">
        <p>2024, Pradeep Sharma LLC, All rights reserved </p>
        <div className="flex justify-between sm:w-[300px] pt-4 text-2xl gap-2">
          <FaLinkedin />
          <FaGithub />
          <FaTwitter />
          <FaInstagram />
          <FaFacebook />
          <FaYoutube />
        </div>
      </div>
    </div>
  );
};

export default Footer;
