import React from "react";
import image from "@/assets/images/image.png";

const About = () => {
  return (
    <div
      id="#about"
      className=" flex md:flex-row flex-col  items-center py-20 md:h-screen px-10  gap-10  "
    >
      <div className=" md:w-3/5 w-full pb-10    ">
        <div className="  font-gilroy   font-semibold pb-20  relative ">
          About Sabu Cyril
          <div className=" absolute  bottom-16 w-1/2 h-1 bg-gradient-to-r from-transparent to-transparent via-primary "></div>
        </div>
        <div className=" font-poppins  md:text-xl leading-normal  max-md:text-center text-balance md:text-justify text-lg   ">
          Sabu Cyril, one of India's most celebrated production designers, has brought unforgettable cinematic worlds to life in pan-Indian films. As a distinguished member of the Oscar jury, he represents Indian cinema on the global stage. From the epic grandeur of Baahubali to the groundbreaking visuals of RRR and the innovative Mayaverse, his work sets a benchmark for visual storytelling. A recipient of 4 National Film Awards, Sabu Cyril seamlessly blends tradition and innovation in every project
        </div>
      </div>
      <div className=" md:w-2/5 w-full  h-full  flex items-center justify-center  ">
        <img src={image} alt="" className=" max-h-[70vh]" />
      </div>
    </div>
  );
};

export default About;
