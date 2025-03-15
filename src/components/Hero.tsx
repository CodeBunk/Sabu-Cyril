import React from "react";

import image from "@/assets/images/About.png";
import BG from "@/assets/images/Bg.jpeg";
// import image from "@/assets/hero.png";
const Hero = () => {
  return (
    <div
      id="#home"
      className=" relative h-full md:h-screen border-primary border md:p-10 p-6  overflow-hidden  flex w-full lg:flex-row flex-col-reverse gap-10 pt-20  items-center  "
    >
      <img
        src={BG}
        alt=""
        className=" absolute opacity-25 lg:top-0 top-0  left-0 md:h-screen max-sm:h-3/4 w-full z-10  "
      />

      <div className=" z-20 flex-grow lg:w-1/2 w-3/4 ">
        <div className=" text-white font-menseal uppercase font-light md:text-8xl text-4xl whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-[#e5daf7] ">
          Sabu Cyril
        </div>
        <div className=" lg:pt-7 md:pt-3 pt-2  font-medium sm:text-[30px] text-lg ">
          Crafting Cinematic Worlds
        </div>
        <div className=" opacity-60 pt-3  font-light  md:text-3xl text-lg tracking-wide leading-[120%] ">
          Over 30 Years of Transforming Cinematic Visions into Reality
        </div>
      </div>
      <div className="z-20   md:pt-10 md:w-1/2 flex items-center  justify-center ">
        <img src={image} alt="" className=" max-h-[80vh] max-md:max-h-[70vh]   border-transparent hover:scale-[101%] border object-center transition-all duration-500 rounded-xl " />
      </div>
    </div>
  );
};

export default Hero;
