import React, { useState, useEffect } from "react";
// import Venkatratnam from "@/assets/images/build/Indira.png";

import Bahubali from "@/assets/images/Featured/Bahubali.png";
import Saaho from "@/assets/images/Featured/Saaho.png";
import Robo from "@/assets/images/Featured/robo.png";
import RRR from "@/assets/images/Featured/RRR.png";
import Devara from "@/assets/images/Featured/deveara.png";
import Om from "@/assets/images/Featured/Om.jpg";
import { useSwipeable } from "react-swipeable";

import {
  AlignLeftIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowRightToLineIcon,
  ChevronLeft,
  ChevronRight,
  MoveLeft,
} from "lucide-react";

const Featured = () => {
  const [selected, setSelected] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const intervalDuration = 2000; // 5 seconds

  const handlePrev = () => {
    setCurrentIndex((prevSelected) =>
      prevSelected < 1 ? Data?.length : prevSelected - 1
    );
  };

  // Move to the next item
  const handleNext = () => {
    setCurrentIndex((prevSelected) =>
      prevSelected < Data?.length ? prevSelected + 1 : 0
    );
  };
  const handlePrevDEsktop = () => {
    setSelected((prevSelected) => (prevSelected < 2 ? 4 : prevSelected - 1));
  };

  // Move to the next item
  const handleNextDesktop = () => {
    setSelected((prevSelected) => (prevSelected < 3 ? prevSelected + 1 : 0));
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventScrollOnSwipe: true, // Prevents page scrolling during swipe
    trackMouse: true, // Allows swipe to work with mouse as well
  });
  const handlersDesktop = useSwipeable({
    onSwipedLeft: handleNextDesktop,
    onSwipedRight: handlePrevDEsktop,
    preventScrollOnSwipe: true, // Prevents page scrolling during swipe
    trackMouse: true, // Allows swipe to work with mouse as well
  });

  const handleleft = () => { };
  const Data = [

    {
      name: "Baahubali series",
      image: Bahubali,
      description:
        "The grandeur of Mahishmati came to life through monumental palace sets, intricately carved details, and expansive battle arenas. These sets seamlessly merged traditional craftsmanship with innovative techniques, creating a timeless cinematic world that captured audiences globally.",
    },
    {
      name: "RRR",
      image: RRR,
      description:
        "Period-accurate sets, from sprawling mansions to dynamic action spaces, were crafted to depict the vibrancy and grandeur of pre-independence India. The seamless integration of architectural elements and dynamic visual storytelling enhanced the larger-than-life sequences.",
    },
    {
      name: "Devara: Part 1",
      image: Devara,
      description:
        "Realistic sets of three distinct villages, each with its own visual narrative, were designed to immerse viewers in the film’s epic tale. From intricately detailed weapons to seamless sea simulations and lifelike boats, every element was crafted to elevate the film’s storytelling to new heights.",
    },
    {
      name: "Saho",
      image: Saaho,

      description:
        "This project pushed the boundaries of experimental and futuristic aesthetics with innovative set designs. By blending cutting-edge technology with bold artistic choices, the visuals created a unique and immersive cinematic experience.",
    },
    {
      name: "Enthiran (Robot)",
      image: Robo,
      description:
        "A groundbreaking sci-fi production featuring meticulously designed futuristic environments. Advanced animatronics, integrated VFX-ready sets, and innovative lighting solutions defined the film’s distinct visual identity, setting a new benchmark for Indian cinema.",
    },
    {
      name: "Om Shanti Om",
      image: Om,
      description:
        "Classic Bollywood eras were brought to life with vibrant period sets, intricate decor, and iconic props. The sets captured the nostalgia and charm of Indian cinema’s golden age, blending nostalgia with vibrant storytelling elements.",
    },


  ];

  return (
    <div className=" bg-[#A8AFB9] ">

      <div
        id="#featured"
        className="text-left md:h-screen  flex flex-col w-full max-w-7xl mx-auto  py-20 px-10 "
      >
        <div className="font-bold font-menseal text-black text-5xl   text-center font-bold pb-3 relative">
          Featured
          {/* <div className=" absolute   bottom-6  md:w-1/2 w-full h-1 bg-gradient-to-r from-transparent to-transparent via-primary "></div> */}
        </div>
        <div className="font-bold font-menseal text-black font-bold pb-3 relative">
          Projects
          {/* <div className=" absolute   bottom-6  md:w-1/2 w-full h-1 bg-gradient-to-r from-transparent to-transparent via-primary "></div> */}
        </div>
        <div className="font-poppins text-black opacity-60 md:text-xl text-xl pb-10 text-[#A7A7A8">
          Showcasing Cinematic Excellence
        </div>
        <div className=" relative  max-md:hidden  ">
          <div
            className=" absolute top-[50%] bg-primary rounded-full   -left-7 z-[100] cursor-pointer"
            onClick={() => (
              console.log(selected, "prev"),
              setSelected((prevSelected) =>
                prevSelected < 2 ? 4 : prevSelected - 1
              )
            )}
          >
            <ChevronLeft />
          </div>

          <div
            onClick={() => (
              console.log(selected, "next"),
              setSelected((prevSelected) =>
                prevSelected < 3 ? prevSelected + 1 : 0
              )
            )}
            className=" absolute top-[50%] bg-primary rounded-full  -right-7 z-[100] cursor-pointer"
          >
            <ChevronRight />
          </div>
          <div
            {...handlersDesktop}
            className=" max-md:hidden  w-full rounded-2xl flex overflow-hidden relative "
          >
            <div
              className=" w-full gap-3 flex  transition-all duration-200  "
              style={{
                transform:
                  selected < 4
                    ? `translatex( -${selected * 35}%)`
                    : `translatex(0)`,
              }}
            >
              {Data?.map((data: any, index: number) => (
                // <div className=" pr-5 w-1/3  flex-none h-full">
                <div className="w-1/3 select-none  flex-none h-full  bg-gradient-to-t from-black md:via-[#00161c] via-[#00161c9d]    to-transparent z-10   flex flex-col pb-5  transition-all duration-700 ease-in-out  rounded-2xl  overflow-hidden  ">
                  {/* <div> */}
                  <img
                    src={data?.image}
                    alt={data?.name}
                    className="  aspect-video object-cover h-52 w-full "
                  />
                  <div className=" w-full flex-grow  px-6 pt-4 flex flex-col gap- items-center text-center ">
                    <div className="   font- italic  md:text-2xl sm:text-lg text-xs font-bold">
                      {data?.name}
                    </div>
                    {/* <div className=" pb- font-poppins font-normal md:text-xl sm:text-base text-xs">
                      {data?.title}
                      <span className="pl-4 text-primary  md:text-xl sm:text-base text-xs font-poppins font-normal">
                        {data?.company}
                      </span>
                    </div> */}
                    <div
                      className=" font-poppins md:text-base sm:text-base text-[10px] leading-none italic text-left font-semibold"
                      dangerouslySetInnerHTML={{
                        __html: data?.description,
                      }}
                    ></div>
                  </div>
                  {/* </div>/ */}
                </div>
                // </div>
              ))}
            </div>
          </div>
        </div>

        <div className=" relative  md:hidden  ">
          <div
            className=" absolute top-[50%] bg-primary rounded-full   -left-7 z-[100] cursor-pointer"
            onClick={() =>
              setCurrentIndex((prevSelected) =>
                prevSelected < 1 ? Data?.length : prevSelected - 1
              )
            }
          >
            <ChevronLeft />
          </div>

          <div
            onClick={() =>
              setCurrentIndex((prevSelected) =>
                prevSelected < Data?.length ? prevSelected + 1 : 0
              )
            }
            className=" absolute top-[50%] bg-primary rounded-full  -right-7 z-[100] cursor-pointer"
          >
            <ChevronRight />
          </div>
          <div
            {...handlers}
            className=" w-full rounded-2xl  flex overflow-hidden relative "
          >
            {/* setCurrentIndex */}
            <div
              className=" w-full gap-0 flex  transition-all duration-200  "
              style={{
                transform:
                  currentIndex < Data?.length
                    ? `translatex( -${currentIndex * 100}%)`
                    : `translatex(0)`,
              }}
            >
              {Data?.map((data: any, index: number) => (
                // <div className=" pr-5 w-1/3  flex-none h-full">
                <div className="  w-full flex-none h-[370px]  select-none bg-gradient-to-t from-[#2A0070] md:via-[#00161c] via-[#00161c9d]    to-transparent z-10   flex flex-col  transition-all duration-700 ease-in-out  rounded-2xl  ">
                  <div>
                    <img
                      src={data?.image}
                      alt={data?.name} className="  aspect-video object-cover h-52 w-full "
                    />
                    <div className=" w-full flex-grow  px-6 pt-4  flex flex-col gap- items-center text-center ">
                      <div className=" italic  font-  md:text-xl sm:text-lg text-xs font-bold">
                        {data?.name}
                      </div>

                      <div
                        className=" font-poppins md:text-base sm:text-base text-[10px] leading-normal italic text-left font-semibold"
                        dangerouslySetInnerHTML={{
                          __html: data?.description,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
                // </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
