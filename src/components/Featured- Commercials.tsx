import React, { useState, useEffect } from "react";
// import Venkatratnam from "@/assets/images/build/Indira.png";


import Kalyan from "@/assets/images/Commercial/Kalyan.png";
import GM from "@/assets/images/Commercial/gm.png";
import Amazon from "@/assets/images/Commercial/amazon.png";
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

const Commercial = () => {
  // const [selected, setSelected] = useState(0);
  // const [currentIndex, setCurrentIndex] = useState(0);

  // const intervalDuration = 2000; // 5 seconds

  // const handlePrev = () => {
  //   setCurrentIndex((prevSelected) =>
  //     prevSelected < 1 ? Data?.length : prevSelected - 1
  //   );
  // };

  // // Move to the next item
  // const handleNext = () => {
  //   setCurrentIndex((prevSelected) =>
  //     prevSelected < Data?.length ? prevSelected + 1 : 0
  //   );
  // };
  // const handlePrevDEsktop = () => {
  //   setSelected((prevSelected) => (prevSelected < 2 ? 4 : prevSelected - 1));
  // };

  // // Move to the next item
  // const handleNextDesktop = () => {
  //   setSelected((prevSelected) => (prevSelected < 3 ? prevSelected + 1 : 0));
  // };

  // const handlers = useSwipeable({
  //   onSwipedLeft: handleNext,
  //   onSwipedRight: handlePrev,
  //   preventScrollOnSwipe: true, // Prevents page scrolling during swipe
  //   trackMouse: true, // Allows swipe to work with mouse as well
  // });
  // const handlersDesktop = useSwipeable({
  //   onSwipedLeft: handleNextDesktop,
  //   onSwipedRight: handlePrevDEsktop,
  //   preventScrollOnSwipe: true, // Prevents page scrolling during swipe
  //   trackMouse: true, // Allows swipe to work with mouse as well
  // });

  const handleleft = () => { };
  const Data = [

    {
      name: "Gold Medal Ad",
      image: GM,
      description:
        "Ultra-modern interiors with sleek, sophisticated designs set the tone for this campaign, reflecting luxury and innovation. The visual appeal seamlessly aligns with the product's premium positioning.”",
    },
    {
      name: "Kalyan Jewelers Ad",
      image: Kalyan,
      description:
        "Traditional Indian temple-inspired architecture with intricate carvings, rich textures, and grand pillars exuded heritage and culture, enhancing the narrative of elegance and legacy.",
    },
    {
      name: "Amazon Karigar Ad",
      image: Amazon,
      description:
        "Intricate miniature sets were created to celebrate India's artisans and their craftsmanship. Each element captured the diversity and authenticity of traditional Indian art forms, perfectly complementing the campaign's message of empowerment.",
    },



  ];

  return (
    <div className=" bg-[#A8AFB9] ">
      <div
        className="text-left md:h-screen  flex flex-col w-full max-w-7xl mx-auto  py-20 px-10 "
      >

        <div className="font-bold font-menseal text-black  pb-3 relative">
          Commercial
          {/* <div className=" absolute   bottom-6  md:w-1/2 w-full h-1 bg-gradient-to-r from-transparent to-transparent via-primary "></div> */}
        </div>
        <div className="font-poppins text-black opacity-60 md:text-xl text-xl pb-10 text-[#A7A7A8">
          Captivating Commercials, Unforgettable Impressions.
        </div>
        <div className=" relative  max-md:hidden  ">
          {/* <div
            className=" absolute top-[50%] bg-primary rounded-full   -left-7 z-[100] cursor-pointer"
            onClick={() => (
              console.log(selected, "prev"),
              setSelected((prevSelected) =>
                prevSelected < 2 ? 4 : prevSelected - 1
              )
            )}
          >
            <ChevronLeft />
          </div> */}

          {/* <div
            onClick={() => (
              console.log(selected, "next"),
              setSelected((prevSelected) =>
                prevSelected < 3 ? prevSelected + 1 : 0
              )
            )}
            className=" absolute top-[50%] bg-primary rounded-full  -right-7 z-[100] cursor-pointer"
          >
            <ChevronRight />
          </div> */}
          <div
            // {...handlersDesktop}
            className=" max-md:hidden  w-full rounded-2xl flex overflow-hidden relative "
          >
            <div
              className=" w-full gap-3 flex  transition-all duration-200  "
            // style={{
            //   transform:
            //     selected < 4
            //       ? `translatex( -${selected * 35}%)`
            //       : `translatex(0)`,
            // }}
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
          {/* <div
            className=" absolute top-[50%] bg-primary rounded-full   -left-7 z-[100] cursor-pointer"
            onClick={() =>
              setCurrentIndex((prevSelected) =>
                prevSelected < 1 ? Data?.length : prevSelected - 1
              )
            }
          >
            <ChevronLeft />
          </div> */}

          {/* <div
            onClick={() =>
              setCurrentIndex((prevSelected) =>
                prevSelected < Data?.length ? prevSelected + 1 : 0
              )
            }
            className=" absolute top-[50%] bg-primary rounded-full  -right-7 z-[100] cursor-pointer"
          >
            <ChevronRight />
          </div> */}
          <div
            // {...handlers}
            className=" w-full rounded-2xl  flex overflow-hidden relative "
          >
            {/* setCurrentIndex */}
            <div
              className=" w-full gap-0 flex  transition-all duration-200  "
            // style={{
            //   transform:
            //     currentIndex < Data?.length
            //       ? `translatex( -${currentIndex * 100}%)`
            //       : `translatex(0)`,
            // }}
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

export default Commercial;
