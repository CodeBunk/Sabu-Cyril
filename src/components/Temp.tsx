import React, { useState, useEffect, useRef } from "react";
import Venkatratnam from "@/assets/images/build/new.png";
import prabhu from "@/assets/images/build/Prabhu.jpg";
import Realityrift from "@/assets/images/build/Realityrift.png";
import Vishal from "@/assets/images/build/Vishal.png";
import Viswanath from "@/assets/images/build/Vishwanath.png";
import srikar from "@/assets/images/build/Srikar.png";

const Carousel = () => {
  const data = [
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
      name: "Sai Tharun Kakkirala",
      title: "Founder & CEO",
      company: "Realityrift",
      description: `Working with <span class="font-bold" >TRINITY</span>-XR on our medtech project in both desktop and VR was a fantastic experience. They tackled complex challenges and provided tailored, effective solutions, showcasing exceptional technical skills and attention to detail. Highly recommended for anyone seeking innovative and reliable partners in the VR and tech indus`,
      image: Realityrift,
    },
    {
      name: "Kasi Viswanath ",
      title: "MD",
      company: "Lachan Constructions",
      description: `Thanks to <span class="font-bold" >TRINITY</span>-XR's VR solutions, I was able to close 6 flat sales in just 3 days! The immersive virtual tours allowed clients to experience every detail of the properties, making decisions easier and faster. Truly a game-changer for real estate! `,
      image: Viswanath,
    },

    {
      name: "Vishal Mandava",
      title: "Managing Director",
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

  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Auto-scroll every 3 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="flex  w-full  overflow-hidden">
        {data.map((item: any, index: number) => (
          <div
            key={index}
            className={` w-1/3 flelx-none  carousel-item flex items-center justify-center p-8 rounded-lg transition-all duration-500 
            //   index === currentIndex ? "opacity-100 z-10" : "opacity-0 -z-10"
            `}
          >
            <div className="bg-gray-900 text-white p-8 rounded-lg shadow-lg w-full">
              <div className="flex items-center mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-bold text-lg">{item.name}</h3>
                  <p className="text-gray-400">
                    {item.title}, {item.company}
                  </p>
                </div>
              </div>
              <p
                className="font-poppins"
                dangerouslySetInnerHTML={{ __html: item.description }}
              ></p>
            </div>
          </div>
        ))}
      </div>
      <div className="carousel-controls absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between px-4">
        <button
          className="bg-white rounded-full p-2 shadow-md hover:bg-gray-200 focus:outline-none"
          onClick={handlePrev}
        >
          <svg
            className="w-6 h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          className="bg-white rounded-full p-2 shadow-md hover:bg-gray-200 focus:outline-none"
          onClick={handleNext}
        >
          <svg
            className="w-6 h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
