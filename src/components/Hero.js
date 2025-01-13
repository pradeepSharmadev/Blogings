import {React, useState} from "react";
import {
  blockchain,
  aiml,
  security,
  greentech,
  webtechs,
  cloudcomputation,
} from "./index.js";

const Hero = () => {
  const photoArr = [
    blockchain,
    aiml,
    security,
    greentech,
    webtechs,
    cloudcomputation,
  ];
  const [tractHistroy, setTrackHistory] = useState(0);
  const getRandomArbitrary = () => {
    setTrackHistory(Math.floor(Math.random() * (6 - 0) + 0));
  };

  const backPhoto = photoArr[tractHistroy];

  const categories = ["All", "Technology", "Healths", "Business"];
  const [filter, setFilter] = useState("all");

  const handleFilter = (val)=>{

  }

  return (
    <>
      <div className="w-full h-[550px] pt-[112px] bg-[#f9f9f9]">
        <div
          onClick={getRandomArbitrary}
          className="max-w-[1240px] 
        h-[400px] mr-auto ml-auto  bg-slate-500 relative"
        >
          <img
            className="w-full h-[400px] object-cover"
            src={backPhoto}
            alt=""
          />
        </div>
        <div className="ml-auto mr-auto max-w-[800px] h-[400px] backdrop-blur-[16px] rounded-[32px] relative top-[-300px] shadow-lg bg-[rgba(255,255,255,0.5)]">
          <div className="lg:w-[800px] lg:h-[400px] md:w-[800px] md:[400px] lg:pt-2 md:pt-24 sm:pt-24 ss:pt-24 xs:pt-24 pt-8 flex flex-col justify-center align-middle text-center">
            <div className="text-center text-4xl font-bold mb-2 ">
              The Future of Technology AI and ML
            </div>
            <div className="max-w-lg ml-auto mr-auto text-center text-md font-[400]">
              Artificial Intelligence (AI) and Machine Learning (ML) are
              transforming industries by automating tasks, improving
              decision-making, and enabling innovation.
            </div>
            <div
              className=" gap-4 ml-auto mr-auto mt-10 grid ss:grid-cols-4  xs:mt-6 md:mt-12 lg:mt-12
            ss:mt-12 xs:grid-cols-2 md:grid-cols-4 lg:grid-cols-4"
            >
              {categories.map((val, ind) => (
                <button key={ind} onClick={()=> handleFilter(val)} className="h-10 w-32 text-lg border-none hover:bg-blue-800 transition-all ">
                  {val}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
