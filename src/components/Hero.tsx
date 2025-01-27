import React from "react";

import image from "@/assets/images/About.png";
import BG from "@/assets/images/Bg.jpeg";
// import image from "@/assets/hero.png";
const Hero = () => {
  return (
    <div
      id="#home"
      className=" md:h-screen border-primary border p-10  flex w-full md:flex-row flex-col gap-10 pt-20  items-center  "
    >
      <img
        src={BG}
        alt=""
        className=" absolute  z-10 opacity-25 top-0 left-0 h-screen w-full -z-10  "
      />

      <div className=" z-20   flex-grow w-1/2 ">
        <div className=" text-white font-menseal uppercase font-light md:text-8xl text-4xl whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-[#e5daf7] ">
          Sabu Cyril
        </div>
        <div className=" pt-7 font-medium">
          Crafting Cinematic Worlds
        </div>
        <div className=" opacity-60 pt-3  font-light  md:text-3xl text-lg tracking-wide leading-[120%] ">
          Over 30 Years of Transforming Cinematic Visions into Reality
        </div>
      </div>
      <div className="z-20   pt-10 md:w-1/2 flex items-center  justify-center ">
        <img src={image} alt="" className=" max-h-[80vh]  border-transparent hover:scale-[101%] border object-center transition-all duration-500 rounded-xl " />
      </div>
    </div>
  );
};

export default Hero;
