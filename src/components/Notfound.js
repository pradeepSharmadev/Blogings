import React from "react";
import { notfound } from "./index";
import { Link } from "react-router-dom";
const Notfound = () => {
  return (
    <>
      <div className="pt-[56px] bg-[#f9f9f9] w-full">
        <div className="max-w-[1280px]  ml-auto mr-auto flex flex-col justify-center  items-center lg:flex-row md:flex-row sm:flex-row xs:flex-col">
          <div className="flex flex-col gap-3 ml-5 pt-8 lg:pt-0 md:mt-0 sm:pt-0">
            <div>
              <div className="text-[56px] font-[500]">
                <span className="text-[80px] font-bold">Oops!</span> Page Not <br />
                Found
              </div>
              <div className="text-lg font-[400] mt-5">
                We're constantly working on it. Stay tuned, and we'll have
                insightful content ready for you soon!
              </div>
            </div>
            <div>
              <Link to="/">
                <button className="mt-4 h-14 w-44 text-lg shadow-sm hover:bg-blue-800">
                  Home
                </button>
              </Link>
            </div>
          </div>
          <div className="">
            <img
              className="w-[400px] lg:w-[980px] md:w-[880px] sm:w-[780px] object-cover"
              src={notfound}
              alt="404 Image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Notfound;
