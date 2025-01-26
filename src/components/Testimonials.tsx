import React, { useState, useEffect } from "react";
// import Venkatratnam from "@/assets/images/build/Indira.png";
import Venkatratnam from "@/assets/images/testimonials/Venkatratnam.png";
import prabhu from "@/assets/images/testimonials/Prabhu.png";
import Realityrift from "@/assets/images/testimonials/tharun.png";
import Vishal from "@/assets/images/testimonials/vishal.png";
import Viswanath from "@/assets/images/testimonials/Kasi.png";
import srikar from "@/assets/images/testimonials/srikar.png";
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

const Testimonials = () => {
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

  const handleleft = () => {};
  const Data = [
    {
      name: "Venkataratnam garu",
      title: "Founder & MD",
      company: "Indiraa Foods",
      description: `<span class=" font-poppins " > Our experience with <span class="font-bold" >TRINITY</span>-XR's VR training services has been fantastic! The immersive training significantly improved our workers' skills and confidence in operating complex machinery. We highly recommend their <span class="font-bold">innovative approach</span>!</span>`,

      image: Venkatratnam,
    },
    {
      name: "Prabhu D",
      title: "Managing Director",
      company: "Thrill City",
      description: `<span class="font-bold" >TRINITY</span>-XR excels with remarkable versatility in electronics, software, and design, understanding client needs with ease and precision. Their ability to capture project details without extensive explanation makes collaboration effortless. With timely updates and prompt delivery, they consistently exceed expectations.`,
      image: prabhu,
    },
    {
      name: "Kasi Viswanath ",
      title: "MD",
      company: "Lachan Constructions",
      description: `Thanks to <span class="font-bold" >TRINITY</span>-XR's VR solutions, I was able to close 6 flat sales in just 3 days! The immersive virtual tours allowed clients to experience every detail of the properties, making decisions easier and faster. Truly a game-changer for real estate! `,
      image: Viswanath,
    },
    {
      name: "Sai Tharun Kakkirala",
      title: "Founder & CEO",
      company: "Realityrift",
      description: `Working with <span class="font-bold" >TRINITY</span>-XR on our medtech project in both desktop and VR was a fantastic experience. They tackled complex challenges and provided tailored, effective solutions, showcasing exceptional technical skills and attention to detail. Highly recommended for anyone seeking innovative and reliable partners in the VR and tech indus`,
      image: Realityrift,
    },

    {
      name: "Vishal Mandava",
      title: "MD",
      company: "Mandavas Bhojanam",
      description: `<span class="font-bold" >TRINITY</span>-XR brought our restaurant vision to life, handling everything from concept to the final physical detail. The VR previews made it easy to understand the design and make real-time adjustments. Their meticulous attention to detail made the entire process seamless and impressive.`,
      image: Vishal,
    },
    {
      name: "Srikar Chillapalli",
      title: "MD",
      company: "Chillapalli- The Vintage Weavers   ",
      description: `<span class="font-bold" >TRINITY</span>-XR did an incredible job designing our showroom in VR! Being able to see every detail so clearly made it so much easier to make decisions. It was a smooth, straightforward process that brought our vision to life effortlessly. Highly recommend! `,
      image: srikar,
    },
  ];

  return (
    <div
      id="#testimonials"
      className="text-left md:h-screen flex flex-col w-full  py-20 px-10"
    >
      <div className="font-menseal font-bold pb-8 relative">
        Words of Esteemed Clients
        <div className=" absolute   bottom-6  md:w-1/2 w-full h-1 bg-gradient-to-r from-transparent to-transparent via-primary "></div>
      </div>
      <div className="font-poppins md:text-2xl text-xl pb-10 text-[#A7A7A8]">
        Here's what our partners have to say about us
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
              <div className="w-1/3 select-none  flex-none h-full  bg-gradient-to-t from-[#2A0070] md:via-[#00161c] via-[#00161c9d]    to-transparent z-10   flex flex-col gap-10 py-10 transition-all duration-700 ease-in-out  rounded-2xl  px-6 pt-6  ">
                <div>
                  <img
                    src={data?.image}
                    alt={data?.name}
                    className=" rounded-full aspect-square mx-auto w-1/2  object-right border-2 border-white "
                  />
                  <div className=" w-full flex-grow  flex flex-col gap- items-center text-center ">
                    <div className="   font-poppins  md:text-2xl sm:text-lg text-xs font-bold">
                      {data?.name}
                    </div>
                    <div className=" pb-3  font-poppins font-normal md:text-xl sm:text-base text-xs">
                      {data?.title}
                      <span className="pl-4 text-primary  md:text-xl sm:text-base text-xs font-poppins font-normal">
                        {data?.company}
                      </span>
                    </div>
                    <div
                      className=" font-poppins md:text-base sm:text-base text-[10px] leading-none italic text-left font-semibold"
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
              <div className="  w-full flex-none h-full  select-none bg-gradient-to-t from-[#2A0070] md:via-[#00161c] via-[#00161c9d]    to-transparent z-10   flex flex-col gap-10 py-10 transition-all duration-700 ease-in-out  rounded-2xl  px-6 pt-6  ">
                <div>
                  <img
                    src={data?.image}
                    alt={data?.name}
                    className=" rounded-full mb-3 aspect-square mx-auto w-1/2  object-right border-2 border-white "
                  />
                  <div className=" w-full flex-grow  flex flex-col gap- items-center text-center ">
                    <div className="   font-poppins  md:text-2xl sm:text-lg text-xs font-bold">
                      {data?.name}
                    </div>
                    <div className=" pb-3  font-poppins font-normal md:text-xl sm:text-base text-xs">
                      {data?.title}
                      <span className="pl-4 text-primary  md:text-xl sm:text-base text-xs font-poppins font-normal">
                        {data?.company}
                      </span>
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
  );
};

export default Testimonials;
