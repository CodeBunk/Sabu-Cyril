import React from "react";
import { useOutlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import whatsapp from "@/assets/Whatsapp.png";

const Layout = (props: any) => {
  const outlet = useOutlet();
  return (
    <div
      className={` min-h-screen h-full w-screen overflow-x-hidden flex flex-col text-white items-center font-inter 
    `}
    >
      {/* <div className=" fixed top-[75%] right-0  z-[1000] ">
        <a
          href="https://api.whatsapp.com/send/?phone=919948348899&text=I%27m+interested+to+work+with+team+sabucyril"
          target="_blank"
        >
          <img
            src={whatsapp}
            alt=""
            className=" rounded-l-full md:py-2 md:pl-2 pl-1 py-1  bg-white md:h-24 h-12  "
          />
        </a>
      </div> */}
      <Navbar />
      <div className=" flex-grow w-full mx-auto  relative ">
        {outlet}{" "}
        {/* <div className=" absolute ">
          <img
            src={whatsapp}
            
            alt=""
            className=" border-b-rounded-full bg-white h-10 "
          />
        </div> */}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
