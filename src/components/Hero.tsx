import React from "react";

import image from "@/assets/images/About.png";
import BG from "@/assets/images/Bg.jpeg";
// import image from "@/assets/hero.png";
const Hero = () => {
  return (
    <div
      id="#home"
      className=" relative h-full md:h-screen border-primary border md:p-10 p-6  overflow-hidden  flex w-full lg:flex-row flex-col-reverse gap-10 md:pt-20 pt-10  items-center  "
    >
      <img
        src={BG}
        alt=""
        className=" absolute opacity-25 lg:top-0 top-0  left-0 md:h-screen max-sm:h-full w-full z-10  "
      />

      <div className=" group  select-none z-20 flex-grow lg:w-1/2 w-full max-lg:px-4 ">
        {/* <div className=" text-white font-menseal uppercase font-light md:text-8xl text-4xl whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-[#e5daf7] ">
          Sabu Cyril
        </div> */}
        <div className="  font-gilroy text-center  lg:pt-7 md:pt-3 pt-2 md:tracking-wider font-medium  md:text-5xl sm:text-3xl text-3xl ">
          'Vision Beyond Reality'
        </div>
        <div className="  opacity- text-center pt-3  font-normal font-gilroy md:text-2xl text-lg  leading-[120%] ">
          {/* Three Decades of Breathing Life into Extraordinary Cinematic Dreams */}
          The Art of  <span className=" group-hover:text-primary"> Sabu Cyril </span>
        </div>
      </div>
      <div className="z-20   md:pt-10 md:w-1/2 flex items-center  justify-center ">
        <img src={image} alt="" className=" md:max-h-[70vh] max-h-[60vh] shadow-lg shadow-white/10 max-md:max-h-[50vh]   border-transparent hover:scale-[101%] border object-center transition-all duration-500 rounded-xl " />
      </div>
    </div>
  );
};

export default Hero;
