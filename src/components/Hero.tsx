import React from "react";
import image from "@/assets/images/image.png";
const Hero = () => {
  return (
    <div
      id="#home"
      className=" md:h-[90vh]  p-10  flex w-full md:flex-row flex-col gap-10 py-20  items-center  "
    >
      <div className="  flex-grow  w-full ">
        <div className=" text-white font-semibold md:text-7xl text-4xl whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-[#e5daf7] ">
          Sabu Cyril 
        </div>
        <div className="">
         Crafting Cinematic Worlds
        </div>
        <div className=" font-helvetica  md:text-3xl text-lg tracking-wide leading-[120%] ">
        Over 30 Years of Transforming Cinematic Visions into Reality
        </div>{" "}
      </div>
      <div className=" pt-10 ">
        <img src={image} alt="" className=" max-h-[80vh]" />
      </div>
    </div>
  );
};

export default Hero;
