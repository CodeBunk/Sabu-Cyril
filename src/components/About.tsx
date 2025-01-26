import React from "react";
import image from "@/assets/images/About.png";

const About = () => {
  return (
    <div
      id="#about"
      className=" flex md:flex-row flex-col  items-center py-20 md:h-screen px-10  gap-10  "
    >
      <div className=" md:w-3/5 w-full pb-10    ">
        <div className=" font-menseal font-bold pb-20  relative ">
          About Sabu Cyril
          <div className=" absolute  bottom-16 w-1/2 h-1 bg-gradient-to-r from-transparent to-transparent via-primary "></div>
        </div>
        <div className=" font-poppins  md:text-2xl  text-lg  !leading-[120%] ">
        Sabu Cyril, one of India's most celebrated production designers, has brought unforgettable cinematic worlds to life in pan-Indian films. As a distinguished member of the Oscar jury, he represents Indian cinema on the global stage. From the epic grandeur of Baahubali to the groundbreaking visuals of RRR and the innovative Mayaverse, his work sets a benchmark for visual storytelling. A recipient of 5 National Film Awards, Sabu Cyril seamlessly blends tradition and innovation in every project
          
        </div>
      </div>
      <div className=" md:w-2/5 w-full  ">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default About;
